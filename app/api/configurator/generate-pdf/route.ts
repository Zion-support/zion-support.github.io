// POST /api/configurator/generate-pdf
// Receives configurator form data, generates proposal PDF, emails it to prospect
// Also stores record in automation/proposals/
import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import ProposalPDF from '@/components/ProposalPDF';
import { allServices } from '@/data/servicesData';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, contactEmail, contactPhone, budget, needs, selectedServices, timeline } = body;

    // Validate
    if (!companyName || !contactEmail || selectedServices?.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Fetch full service objects
    const services = selectedServices.map((sid: string) =>
      allServices.find(s => s.id === sid)
    ).filter(Boolean);

    // Build proposal data
    const proposalData = {
      companyName,
      contactEmail,
      contactPhone: contactPhone || '',
      budget: budget || 'Not specified',
      needs: needs || [],
      selectedServices: services,
      timeline: timeline || 'exploratory',
      generatedAt: new Date().toISOString(),
      proposalId: `prop-${Date.now()}`
    };

    // Render PDF
    const stream = renderToStream(
      <ProposalPDF data={proposalData as any} />
    );

    // Collect PDF buffer
    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      stream.on('data', (chunk: Buffer) => chunks.push(chunk));
      stream.on('end', resolve);
      stream.on('error', reject);
    });
    const pdfBuffer = Buffer.concat(chunks);

    // Save proposal to disk (for audit / CRM)
    const proposalsDir = path.join(process.cwd(), 'automation', 'proposals');
    if (!fs.existsSync(proposalsDir)) fs.mkdirSync(proposalsDir, { recursive: true });
    const proposalPath = path.join(proposalsDir, `${proposalData.proposalId}.pdf`);
    fs.writeFileSync(proposalPath, pdfBuffer);

    // Save metadata
    const metaPath = path.join(proposalsDir, `${proposalData.proposalId}.json`);
    fs.writeFileSync(metaPath, JSON.stringify(proposalData, null, 2));

    // Email the proposal
    // Use simple SMTP via nodemailer if available; otherwise write to email-queue for responder
    const emailPayload = {
      to: contactEmail,
      subject: `Your Custom Zion Tech Proposal — ${companyName}`,
      html: `
        <p>Hi ${companyName} team,</p>
        <p>Thank you for using our Service Configurator. Your custom proposal is attached.</p>
        <p><strong>Selected services:</strong></p>
        <ul>${services.map((s: any) => `<li>${s.title}</li>`).join('')}</ul>
        <p>We'll follow up within 24 hours to discuss next steps.</p>
        <p>Best regards,<br/>Zion Tech Group<br/>+1 302 464 0950<br/>kleber@ziontechgroup.com</p>
      `,
      attachment: {
        filename: `Zion_Proposal_${companyName.replace(/\s+/g, '_')}.pdf`,
        content: pdfBuffer.toString('base64'),
        encoding: 'base64'
      }
    };

    // Enqueue for email responder (it handles SMTP)
    const queueDir = path.join(process.cwd(), 'automation', 'email-queue', 'pending');
    if (!fs.existsSync(queueDir)) fs.mkdirSync(queueDir, { recursive: true });
    const emailPath = path.join(queueDir, `${proposalData.proposalId}.email.json`);
    fs.writeFileSync(emailPath, JSON.stringify(emailPayload, null, 2));

    // Return public URL for PDF preview
    const proposalUrl = `/proposals/${proposalData.proposalId}.pdf`;

    return NextResponse.json({
      success: true,
      proposalId: proposalData.proposalId,
      proposalUrl,
      message: 'Proposal generated and queued for email delivery'
    });

  } catch (err: any) {
    console.error('Proposal generation error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
