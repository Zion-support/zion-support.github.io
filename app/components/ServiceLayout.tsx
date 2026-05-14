import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import type { BreadcrumbItem } from './Breadcrumb';

export type ServiceData = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  href: string;
  features: string[];
  benefits: string[];
  pricing: Record<string, string>;
  contactInfo: {
    website: string;
    email: string;
    phone: string;
    address?: string;
  };
  faqs?: Array<{ question: string; answer: string }>;
};

export type ServiceLayoutProps = {
  service: ServiceData;
  breadcrumbItems?: BreadcrumbItem[];
};

export default function ServiceLayout({ service, breadcrumbItems }: ServiceLayoutProps) {
  const {
    title,
    description,
    category,
    icon,
    href,
    features,
    benefits,
    pricing,
    contactInfo,
    faqs,
  } = service;

  const breadcrumb = breadcrumbItems ?? [
    { label: 'Services', href: '/ai-services' },
    { label: category === 'ai' ? 'AI Services' : 'IT Services', href: category === 'ai' ? '/ai-services' : '/it-services' },
    { label: title, href },
  ];

  // Format pricing tiers
  const pricingTiers = Object.entries(pricing || {}).map(([tier, price]) => ({
    tier: tier.charAt(0).toUpperCase() + tier.slice(1),
    price,
    period: tier === 'payg' || tier.includes('/') ? '' : '/mo',
    features: benefits.slice(0, 4),
  }));

  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[18rem] w-[18rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <section className="relative container-page pb-12 pt-20 lg:pt-24">
        <Breadcrumb items={breadcrumb} className="mb-6" />

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100 shadow-[0_0_0_1px_rgba(168,85,247,0.18)]">
            <span>{icon}</span>
            <span>{category === 'ai' ? 'AI Service' : 'IT Service'}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={contactInfo.website || '/contact'}
              data-cta-event="cta_primary"
              data-cta-label="service_page_hero"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl border border-slate-500/70 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/60 hover:text-white"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-sm"
                >
                  <p className="text-slate-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Benefits</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 text-green-400">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        {pricing && Object.keys(pricing).length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Pricing</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col rounded-xl border border-slate-700/50 bg-slate-900/60 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white">{tier.tier}</h3>
                  <div className="mt-2 text-3xl font-bold text-white">
                    {tier.price}
                    {tier.period && <span className="text-base font-normal text-slate-400"> {tier.period}</span>}
                  </div>
                  <ul className="mt-4 flex-1 space-y-2">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-green-400">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 block text-center rounded-lg bg-slate-800 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                  >
                    Choose Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-purple-500/30 bg-purple-900/20 p-8 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-2 text-slate-300">
            Contact us today to learn more about {title}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
            >
              📞 {contactInfo.phone}
            </Link>
            <Link
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-500/70 bg-slate-900/60 px-6 py-3 font-semibold text-white transition hover:border-purple-300/60"
            >
              ✉️ {contactInfo.email}
            </Link>
          </div>
          {contactInfo.address && (
            <p className="mt-4 text-sm text-slate-400">
              {contactInfo.address}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
