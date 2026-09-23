import Link from 'next/link';

export const metadata = {
  title: 'Affectiva (Smart Eye) — Emotion AI & Facial Coding Platform | Zion Tech Group',
  description: 'Affectiva, now part of Smart Eye, pioneered emotion AI — using computer vision and deep learning to detect human emotions, cognitive states, and reactions from facial expressions and voice. Their technology analyzes 7 billion+ face frames across 90 countries, enabling automotive safety (driver monitoring), media testing (ad effectiveness), healthcare (mental health screening), and retail (customer experience optimization).',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/affectiva-emotion-ai-platform',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Affectiva (Smart Eye) — Emotion AI &amp; Facial Coding Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Affectiva, now part of Smart Eye, pioneered emotion AI — using computer vision and deep learning to detect human emotions, cognitive states, and reactions from facial expressions and voice. Their technology analyzes 7 billion+ face frames across 90 countries, enabling automotive safety (driver monitoring), media testing (ad effectiveness), healthcare (mental health screening), and retail (customer experience optimization).</p>
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
            <li>Detects 7 emotions, 15 facial expressions, and cognitive states in real time</li>
            <li>Works with standard RGB cameras — no specialized hardware required</li>
            <li>Driver monitoring: detects drowsiness, distraction, and impairment in vehicles</li>
            <li>Media testing: measures emotional response to ads, content, and products</li>
            <li>Healthcare: screens for depression, anxiety, and pain via facial biomarkers</li>
            <li>Privacy-first: processes video locally, no facial images stored or transmitted</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Automotive: reduce drowsy driving accidents by 40% with real-time alerts</li>
            <li>Media companies: predict ad effectiveness with 85% accuracy vs. surveys</li>
            <li>Healthcare: objective mental health screening without subjective questionnaires</li>
            <li>Retail: optimize store layouts and product placement based on emotional engagement</li>
            <li>GDPR/CCPA compliant: no biometric data stored, all processing on-device</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">SDK license ($10K/year)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$50K/year (media analytics)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom ($200K+/year for automotive OEM)</p>
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
