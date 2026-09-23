import Link from 'next/link';

export const metadata = {
  title: 'Indigo Ag — AI-Powered Carbon Farming Platform | Zion Tech Group',
  description: 'Indigo Ag uses satellite imagery, soil sampling AI, and machine learning to help farmers transition to regenerative agriculture practices that sequester carbon in soil. Their platform measures, reports, and verifies (MRV) carbon removal at field level, enabling farmers to sell verified carbon credits to corporations. Over 10 million acres enrolled, with farmers earning $15-40/acre in carbon credit revenue.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/indigo-ag-carbon-farming-platform',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Indigo Ag — AI-Powered Carbon Farming Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Indigo Ag uses satellite imagery, soil sampling AI, and machine learning to help farmers transition to regenerative agriculture practices that sequester carbon in soil. Their platform measures, reports, and verifies (MRV) carbon removal at field level, enabling farmers to sell verified carbon credits to corporations. Over 10 million acres enrolled, with farmers earning $15-40/acre in carbon credit revenue.</p>
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
            <li>Satellite-based field monitoring: NDVI, soil carbon, moisture, and crop health</li>
            <li>AI-powered MRV (Measure, Report, Verify) for carbon credit certification</li>
            <li>Practice recommendation engine: cover crops, no-till, crop rotation optimization</li>
            <li>Carbon credit marketplace connecting farmers to Fortune 500 buyers</li>
            <li>Integration with John Deere, Climate FieldView, and other farm management platforms</li>
            <li>Third-party verified carbon credits (Verra, Gold Standard certified)</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Farmers earn $15-40/acre annually from carbon credit sales</li>
            <li>Soil health improvement: 20% yield increase within 3-5 years</li>
            <li>Water retention improved by 30% with regenerative practices</li>
            <li>Corporations meet Scope 3 emissions targets with verified agricultural offsets</li>
            <li>10 million+ acres enrolled — largest agricultural carbon program globally</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (farm enrollment)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Revenue share on carbon credits (15%)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Corporate carbon portfolio ($1M+/year)</p>
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
