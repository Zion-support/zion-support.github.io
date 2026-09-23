import Link from 'next/link';

export const metadata = {
  title: 'Synthesia — AI Digital Human Avatar Video Platform',
  description: 'Synthesia is the leading AI video generation platform that creates professional videos featuring photorealistic digital human avatars. Users type text and Synthesia generates a video of a human presenter speaking in 140+ languages with natural gestures and lip sync. With 500,000+ enterprise customers including Google, Nike, and the BBC, Synthesia eliminates the need for cameras, studios, and actors — reducing video production costs by 90% and time from weeks to minutes.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/synthesia-ai-digital-human-avatars',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Synthesia — AI Digital Human Avatar Video Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Synthesia is the leading AI video generation platform that creates professional videos featuring photorealistic digital human avatars. Users type text and Synthesia generates a video of a human presenter speaking in 140+ languages with natural gestures and lip sync. With 500,000+ enterprise customers including Google, Nike, and the BBC, Synthesia eliminates the need for cameras, studios, and actors — reducing video production costs by 90% and time from weeks to minutes.</p>
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
            <li>140+ AI avatars: diverse, photorealistic digital human presenters</li>
            <li>140+ languages and accents with natural lip sync and intonation</li>
            <li>Custom avatar creation: clone your own face and voice for branded content</li>
            <li>Template library: 500+ video templates for training, sales, and marketing</li>
            <li>API and integrations: embed video generation into LMS, CRM, and content platforms</li>
            <li>Accessibility: auto-generated captions, translations, and audio descriptions</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce video production costs by 90% — no cameras, studios, or actors needed</li>
            <li>Create training videos in 15 minutes instead of 2-3 weeks</li>
            <li>Localize content into 140+ languages without re-recording</li>
            <li>Update videos instantly when content changes — no reshoots required</li>
            <li>Used by 500,000+ companies including Google, Nike, and the BBC</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">$22/month (Starter, 10 min video)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$67/month (Creator, 30 min video)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (unlimited video + custom avatars)</p>
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
