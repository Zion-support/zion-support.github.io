import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partners & Alliances | Zion Tech Group',
  description: 'Our technology partners and strategic alliances — AWS, Microsoft, Google Cloud, NVIDIA, OpenAI, and more.',
};

import { partners } from '@/data/partners';

const SITE_URL = 'https://ziontechgroup.com';

const partnerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Enterprise AI services, IT solutions, and Micro SAAS platforms.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'customer service',
    email: 'kleber@ziontechgroup.com',
  },

};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Partners', item: `${SITE_URL}/partners` },
  ],
};

const tierOrder: Record<string, number> = { Platinum: 0, Gold: 1, Silver: 2 };
const tierColors: Record<string, string> = {
  Platinum: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-300',
  Gold:     'from-amber-700/20 to-orange-500/10 border-amber-600/30 text-amber-300',
  Silver:  'from-gray-400/20 to-slate-500/10 border-gray-400/30 text-gray-300',
};

export default function PartnersPage() {
  const tierLabel: Record<string, string> = { Platinum: 'Platinum Partners', Gold: 'Gold Partners', Silver: 'Silver Partners' };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Partners &amp; Alliances</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic technology alliances powering our infrastructure &mdash; AWS, Microsoft, Google Cloud, NVIDIA, OpenAI, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Tier groups */}
      {(['Platinum', 'Gold', 'Silver'] as const).map((tier) => {
        const list = partners.partners.filter((p: any) => p.tier === tier);
        if (!list.length) return null;
        const colors = tierColors[tier].split(' ');
        const badgeColor = colors[colors.length - 1] || 'text-slate-300';
        return (
          <section key={tier} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
              {tierLabel[tier]} ({list.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((partner: any) => (
                <div key={partner.id}
                     className={`bg-gradient-to-br ${tierColors[tier]} border rounded-2xl p-8 group hover:scale-[1.02] transition-transform`}>
                  {partner.website ? (
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition mb-2">
                        {partner.name}&nbsp;&#8619;
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  )}
                  <span className={`text-xs uppercase tracking-wider font-semibold ${badgeColor} bg-white/5 px-2 py-1 rounded-full mb-3 inline-block`}>
                    {partner.category}
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Become a Partner</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in partnering with Zion Tech Group? Reach out &mdash; we&apos;re always looking for aligned technology partners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:partners@ziontechgroup.com?subject=Partnership%20Inquiry"
               className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              partner@ziontechgroup.com
            </a>
            <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
