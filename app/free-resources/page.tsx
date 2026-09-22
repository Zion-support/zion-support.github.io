import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';

export const metadata = {
  title: 'Free Resources | Zion Tech Group',
  description: 'Free AI tools, guides, and documentation from Zion Tech Group.',
  alternates: { canonical: '/free-resources/' },
};

export default function FreeResourcesPage() {
  return (
    <PageShell
      title="Free resources you can use today"
      description="Tools, playbooks, and docs — the same material we hand to clients before a paid kickoff."
      eyebrow="Resources"
      align="center"
      canonical="https://ziontechgroup.com/free-resources/"
      actions={
        <>
          <Link href="/tools/" className="btn-primary">Open free tools</Link>
          <Link href="/blog/" className="btn-secondary">Browse guides</Link>
        </>
      }
    >
      <HubCards
        items={[
          { title: 'Developer tools', body: 'JSON, JWT, regex, SQL, and readiness checks that run in the browser.', href: '/tools/' },
          { title: 'AI readiness', body: 'A short assessment of automation, security, cloud, and AI maturity.', href: '/ai/ai-readiness-assessment/' },
          { title: 'ROI calculator', body: 'Estimate savings before you buy an AI or IT workstream.', href: '/roi-calculator/' },
          { title: 'Document processing guide', body: 'Ingestion, extraction, and routing for invoices and contracts.', href: '/blog/ai-document-processing/' },
          { title: 'FinOps note', body: 'How we cut cloud waste without guessing at reserved capacity.', href: '/blog/ai-finops-and-cloud-cost-optimization-with-machine-learning/' },
          { title: 'MSP security', body: 'Alert triage and reporting for managed security teams.', href: '/blog/ai-cybersecurity-operations-for-msp/' },
        ]}
      />
    </PageShell>
  );
}
