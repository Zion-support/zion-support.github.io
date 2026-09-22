import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';
import ContactInquiryForm from '@/components/ContactInquiryForm';

export const metadata = {
  title: 'Partners | Zion Tech Group',
  description: 'Partner with Zion Tech Group for co-selling, integrations, managed AI delivery, and joint go-to-market programs.',
  openGraph: {
    title: 'Partners | Zion Tech Group',
    description: 'Partner programs, integrations, and joint GTM for AI and IT services providers.',
    url: 'https://ziontechgroup.com/partners/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/partners/' },
};

export default function PartnersPage() {
  return (
    <PageShell
      title="Partner on delivery, not logos"
      description="Co-sell, white-label, or integrate Zion AI and IT services into your offer. Clear onboarding, named escalation, and a joint success plan."
      eyebrow="Partner Program"
      align="center"
      canonical="https://ziontechgroup.com/partners/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Become a partner</Link>
          <Link href="/providers/" className="btn-secondary">Provider program</Link>
        </>
      }
      showCta={false}
    >
      <HubCards
        items={[
          { title: 'Integrators', body: 'Connect Zion services to your platform with documented handoffs, APIs, and runbooks.' },
          { title: 'Resellers', body: 'Offer managed AI, cloud, and security under your brand with pricing and procurement support.' },
          { title: 'Alliances', body: 'Joint solutions and co-selling for enterprise accounts that need one accountable delivery team.' },
        ]}
      />
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold text-white">How a partnership starts</h2>
        <HubCards
          items={[
            { title: '1. Fit', body: 'We map your market, existing offers, and where Zion should sit — build, run, or both.' },
            { title: '2. Offer', body: 'A written package: services, margins, SLAs, and who owns the customer conversation.' },
            { title: '3. First deal', body: 'We run one joint engagement end to end before talking about a broader alliance.' },
          ]}
        />
      </section>
      <div className="mt-12">
        <ContactInquiryForm heading="Partner inquiry" />
      </div>
    </PageShell>
  );
}
