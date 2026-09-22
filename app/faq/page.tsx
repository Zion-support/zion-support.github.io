import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';

export const metadata = {
  title: 'FAQ | Zion Tech Group',
  description: 'Common questions about AI and IT services, engagement models, pricing, onboarding, support, security, and deployment timelines.',
  openGraph: {
    title: 'FAQ | Zion Tech Group',
    description: 'Common questions about AI and IT services, timing, security, pricing, and onboarding.',
    url: 'https://ziontechgroup.com/faq/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/faq/' },
};

const faqs = [
  { title: 'How fast can you start?', body: 'Most engagements begin within 7 days. Advisory and managed work can start sooner when the scope is already written down.' },
  { title: 'Do you support HIPAA and other regimes?', body: 'Yes. We design with privacy-first controls and can support evidence packages for HIPAA, SOC 2, and similar operational requirements.' },
  { title: 'What does managed AI include?', body: 'Monitoring, cost controls, model updates, observability, performance tuning, and incident response for systems already in production.' },
  { title: 'How do you price work?', body: 'Time-and-materials, fixed-price, or retainer. After a short scoping call we return a proposal with the model, milestones, and who does what.' },
  { title: 'Do I need AI to work with you?', body: 'No. Many clients start with audits, managed IT, or cloud cleanup. We use AI when it shortens analysis or makes operations repeatable.' },
  { title: 'Which clouds and tools do you integrate?', body: 'AWS, Azure, GCP, Kubernetes, GitHub, common ITSM/CRM/ERP stacks, and SIEM/EDR. Exact fit is confirmed in discovery.' },
  { title: 'Which industries do you serve?', body: 'Healthcare, financial services, SaaS, logistics, media, energy, education, legal, manufacturing, and internal enterprise IT.' },
  { title: 'What languages and hours?', body: 'English and Portuguese. Coverage is set per contract; email, Calendly, and Google Meet cover most pre-sales questions the same day.' },
];

export default function FAQPage() {
  return (
    <PageShell
      title="Questions we hear before a kickoff"
      description="Straight answers on timing, security, pricing, and what a Zion engagement actually includes."
      eyebrow="Help & FAQs"
      align="center"
      canonical="https://ziontechgroup.com/faq/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Ask a question</Link>
          <Link href="/help/" className="btn-secondary">Open the help center</Link>
        </>
      }
      ctaTitle="Still have a specific stack question?"
      ctaDescription="Email or call. Most pre-sales questions get a detailed reply within one business hour."
    >
      <HubCards items={faqs} columns={2} />
    </PageShell>
  );
}
