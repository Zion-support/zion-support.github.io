import Link from 'next/link';

export const metadata = {
  title: 'Stripe Financial Infrastructure | Zion Tech Group',
  description: 'Complete financial infrastructure platform that enables businesses to accept payments, manage subscriptions, issue cards, lend capital, and handle global compliance — all through a single API. Powers millions of companies from startups to Fortune 500s, handling hundreds of billions in payment volume annually with built-in fraud detection and regulatory compliance.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/stripe-financial-infrastructure',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Stripe Financial Infrastructure</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Complete financial infrastructure platform that enables businesses to accept payments, manage subscriptions, issue cards, lend capital, and handle global compliance — all through a single API. Powers millions of companies from startups to Fortune 500s, handling hundreds of billions in payment volume annually with built-in fraud detection and regulatory compliance.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Global payments: accept 135+ currencies, 40+ payment methods (cards, wallets, bank transfers, buy-now-pay-later)</li>
            <li>Subscription billing engine: prorations, metered billing, trial management, dunning, and revenue recognition</li>
            <li>Stripe Radar: machine learning fraud detection trained on data from millions of companies — blocks fraud without adding friction</li>
            <li>Connect platform: build marketplaces and platforms with split payments, onboarding, and compliance for sub-merchants</li>
            <li>Treasury &amp; Banking-as-a-Service: embed financial products (accounts, cards, lending) directly into your product</li>
            <li>Revenue recognition, tax calculation (Stripe Tax), and financial reporting — close books faster with automated reconciliation</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Launch payment infrastructure in days instead of months — no banking partnerships or PCI compliance headaches required</li>
            <li>Global reach out of the box: sell in 195+ countries with local payment methods that increase conversion 20-30%</li>
            <li>Unified financial stack reduces the need for separate payment, fraud, tax, and accounting tools</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">2.9% + 30¢ per transaction</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Custom volume pricing from 2.5%</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Enterprise: dedicated support, custom interchange optimization</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
