/**
 * Discovery questionnaire endpoint — Zion Tech Group.
 * POST /discovery/submit
 * Scores the questionnaire instantly and emails the results to BOTH the
 * client and the commercial team (commercial@ziontechgroup.com).
 *
 * Required env vars:
 *   SMTP_URL            e.g. smtp://user:pass@smtp.provider.com:587
 *   DISCOVERY_FROM      e.g. discovery@ziontechgroup.com
 *   COMMERCIAL_EMAIL    defaults to commercial@ziontechgroup.com
 */
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import nodemailer from 'nodemailer';

interface DiscoveryAnswer { question: string; answer: string | number; }
interface DiscoveryBody {
  name?: string; email?: string; company?: string;
  process?: string; answers?: DiscoveryAnswer[];
}

const COMMERCIAL_EMAIL = process.env.COMMERCIAL_EMAIL || 'commercial@ziontechgroup.com';
const FROM = process.env.DISCOVERY_FROM || 'discovery@ziontechgroup.com';

function score(answers: DiscoveryAnswer[]): { score: number; tier: string; recommendations: string[] } {
  // Simple transparent scoring: +20 per substantive answer, cap 100.
  const substantive = answers.filter(a => String(a.answer).trim().length > 3).length;
  const score = Math.min(100, substantive * 20);
  const tier = score >= 80 ? 'Growth-ready' : score >= 40 ? 'Starter-ready' : 'Discovery follow-up';
  const recommendations = [
    'Baseline this process with the free ROI calculator: https://ziontechgroup.com/roi-calc/',
    'Run the 10-check Stack Audit: https://ziontechgroup.com/stack-audit/',
    'Book Consulting ($499) to convert this Discovery into a delivery plan: https://ziontechgroup.com/en/plans/',
  ];
  return { score, tier, recommendations };
}

function renderEmail(body: DiscoveryBody, result: ReturnType<typeof score>): string {
  const rows = (body.answers || []).map(a => `<li><b>${a.question}</b>: ${a.answer}</li>`).join('');
  const recs = result.recommendations.map(r => `<li>${r}</li>`).join('');
  return `<h2>Zion Discovery Results</h2>
<p><b>Name:</b> ${body.name || '-'}<br><b>Company:</b> ${body.company || '-'}<br><b>Email:</b> ${body.email}<br><b>Process:</b> ${body.process || '-'}</p>
<p><b>Score:</b> ${result.score}/100 — <b>${result.tier}</b></p>
<h3>Answers</h3><ul>${rows}</ul>
<h3>Recommended next steps</h3><ul>${recs}</ul>
<p>Zion Tech Group · https://ziontechgroup.com</p>`;
}

export async function discoveryRoutes(app: FastifyInstance): Promise<void> {
  const transport = nodemailer.createTransport(process.env.SMTP_URL || 'smtp://localhost:25');

  app.post('/discovery/submit', async (req: FastifyRequest, reply: FastifyReply) => {
    const body = (req.body as DiscoveryBody) || {};
    if (!body.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
      return reply.code(400).send({ error: 'valid email required' });
    }
    const answers = Array.isArray(body.answers) ? body.answers : [];
    const result = score(answers);
    const html = renderEmail(body, result);

    // Send to BOTH the client and the commercial team, immediately.
    const sends = await Promise.allSettled([
      transport.sendMail({ from: FROM, to: body.email, subject: `Your Zion Discovery results — ${result.tier} (${result.score}/100)`, html }),
      transport.sendMail({ from: FROM, to: COMMERCIAL_EMAIL, subject: `New Discovery submission — ${body.company || body.name || body.email} (${result.score}/100)`, html }),
    ]);
    const emailed = sends.map(s => s.status === 'fulfilled');
    return { score: result.score, tier: result.tier, recommendations: result.recommendations, client_notified: emailed[0], commercial_notified: emailed[1] };
  });
}
