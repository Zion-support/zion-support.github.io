import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Contact Zion Tech Group | AI & IT Services',
  description: 'Contact Zion Tech Group for AI implementation, IT support, cloud automation, and managed technology solutions. Request a proposal, schedule a consultation, or call us directly.',
  alternates: { canonical: '/contact/' },
};

const quickActions = [
  { label: 'Request Proposal', href: 'mailto:kleber@ziontechgroup.com?subject=Proposal%20Request%20-%20Zion%20Tech%20Group', icon: '📄' },
  { label: 'Our Services', href: '/services/', icon: '🧩' },
  { label: 'Call Now', href: 'tel:+13024640950', icon: '📞' },
  { label: 'Book Consultation', href: 'https://calendly.com/kleber-ziontechgroup', icon: '📅' },
  { label: 'WhatsApp', href: 'https://wa.me/13024640950', icon: '💬' },
];

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Zion Tech Group"
      description="Tell us about your AI, IT, or automation project. We respond fast and can start with a free consultation."
      eyebrow="Get in touch"
      eyebrowIcon="☎"
      align="center"
      canonical="https://ziontechgroup.com/contact/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact' },
      ]}
      actions={
        <>
          <a href="tel:+13024640950" className="btn-primary">+1 302 464 0950</a>
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary">Book consultation</a>
          <a href="https://meet.google.com/ouu-khao-kuy" target="_blank" rel="noreferrer" className="btn-secondary">Google Meet</a>
        </>
      }
      ctaTitle="Need an AI or IT solution this week?"
      ctaDescription="We specialize in AI support, automation, cloud optimization, and managed delivery. Start with a short discovery call or request a proposal."
    >
      <section>
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">Quick actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className="page-card flex items-center gap-3 hover:border-purple-500/40"
            >
              <span className="text-xl" aria-hidden="true">{action.icon}</span>
              <span className="font-medium text-white">{action.label}</span>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
