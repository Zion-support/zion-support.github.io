import Link from 'next/link';
import PageShell from '@/components/PageShell';
import ContactInquiryForm from '@/components/ContactInquiryForm';
import ContactChannels from '@/components/ContactChannels';
import HubCards from '@/components/HubCards';
import { siteContact } from '@/lib/siteContact';

export const metadata = {
  title: 'Contact Zion Tech Group | AI & IT Services',
  description: 'Contact Zion Tech Group for AI implementation, IT support, cloud automation, and managed technology solutions. Request a proposal or book a consultation.',
  alternates: { canonical: '/contact/' },
};

const steps = [
  { title: '1. Discovery', body: 'A 20–30 minute call to map systems, constraints, and the outcome that matters.' },
  { title: '2. Proposal', body: 'Scope, team, timeline, and pricing model — usually within one business day.' },
  { title: '3. Start', body: 'Kickoff with a written plan, named owner, and the first delivery milestone.' },
];

export default function ContactPage() {
  return (
    <PageShell
      title="Talk to an engineer"
      description="Share the problem, the stack, and the deadline. We reply with a concrete next step — not a generic brochure."
      eyebrow="Get in touch"
      align="center"
      canonical="https://ziontechgroup.com/contact/"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: siteContact.name,
        telephone: siteContact.phone,
        email: siteContact.email,
        address: siteContact.address,
        url: 'https://ziontechgroup.com/contact/',
      }}
      actions={
        <>
          <a href={siteContact.phoneHref} className="btn-primary">{siteContact.phone}</a>
          <a href={siteContact.calendly} target="_blank" rel="noreferrer" className="btn-secondary">Book 30 minutes</a>
        </>
      }
      showCta={false}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactInquiryForm />
        <div className="space-y-6">
          <ContactChannels />
          <div className="page-card">
            <h2 className="text-lg font-semibold text-white">Prefer a live walkthrough?</h2>
            <p className="mt-2 text-sm text-slate-400">
              Use Calendly or Google Meet if you already know the scope. WhatsApp works for short questions.
            </p>
            <div className="page-actions mt-4">
              <a href={siteContact.meet} target="_blank" rel="noreferrer" className="btn-secondary">Google Meet</a>
              <a href={siteContact.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">What happens next</h2>
        <HubCards items={steps} />
      </section>

      <section className="page-cta mt-14">
        <h2>Need a service instead of a call?</h2>
        <p>Browse the catalog or compare engagement models first, then send the brief.</p>
        <div className="page-actions">
          <Link href="/services/" className="btn-primary">Browse services</Link>
          <Link href="/pricing/" className="btn-secondary">See pricing models</Link>
        </div>
      </section>
    </PageShell>
  );
}
