import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';

export const metadata = {
  title: 'Academy | Zion Tech Group',
  description: 'Learning paths for AI, cloud, security, and modern IT operations from Zion Tech Group.',
  alternates: { canonical: '/academy/' },
};

export default function Academy() {
  return (
    <PageShell
      title="Learn what we actually deploy"
      description="Short paths for operators who need production outcomes — not a 40-hour course that never reaches a ticket queue."
      eyebrow="Academy"
      align="center"
      canonical="https://ziontechgroup.com/academy/"
      actions={
        <>
          <Link href="/blog/" className="btn-primary">Browse guides</Link>
          <Link href="/contact/" className="btn-secondary">Ask for a workshop</Link>
        </>
      }
    >
      <HubCards
        items={[
          {
            title: 'AI delivery',
            body: 'Agents, document intelligence, and assistive tooling — how to pick a first use case and keep it in production.',
            href: '/blog/ai-consulting-services-for-enterprise-it-in-2026/',
            tags: ['AI', 'Automation'],
          },
          {
            title: 'Cloud and FinOps',
            body: 'Rightsizing, reserved capacity, and anomaly detection so cloud spend stays explainable.',
            href: '/blog/ai-finops-and-cloud-cost-optimization-with-machine-learning/',
            tags: ['Cloud', 'FinOps'],
          },
          {
            title: 'Security operations',
            body: 'Alert triage, threat enrichment, and MSP-ready reporting without adding another console.',
            href: '/blog/ai-cybersecurity-operations-for-msp/',
            tags: ['Security', 'MSP'],
          },
          {
            title: 'IT operations',
            body: 'Incident response, service desk, and change risk — the workflows that eat the week.',
            href: '/blog/ai-for-it-incident-management-and-response/',
            tags: ['Operations'],
          },
          {
            title: 'Document automation',
            body: 'Ingestion, extraction, validation, and routing for invoices, contracts, and claims.',
            href: '/blog/ai-document-processing/',
            tags: ['Data', 'Automation'],
          },
          {
            title: 'Free tools',
            body: 'Formatters, JWT inspection, and readiness checks you can run in the browser.',
            href: '/tools/',
            tags: ['Tools'],
          },
        ]}
      />
    </PageShell>
  );
}
