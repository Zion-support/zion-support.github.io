import Link from 'next/link';

export const metadata = {
  title: 'Hawk-Eye — AI-Powered Video Analytics for Sports & Security | Zion Tech Group',
  description: 'Hawk-Eye is a computer vision technology company that provides AI-powered video analysis for sports officiating, security, and entertainment. Their Smart Replay and Synchronized Multi-Angle Replay Technology (SMART) systems use 30+ high-speed cameras and deep learning to track ball trajectory, player movement, and event detection with millimeter accuracy. Used by FIFA, NFL, Premier League, and Wimbledon, Hawk-Eye processes over 100,000 decisions annually with 99.9% accuracy. Their security division provides real-time threat detection and crowd analytics for stadiums and public venues.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/hawk-eye-ai-video-analytics',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hawk-Eye — AI-Powered Video Analytics for Sports &amp; Security</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Hawk-Eye is a computer vision technology company that provides AI-powered video analysis for sports officiating, security, and entertainment. Their Smart Replay and Synchronized Multi-Angle Replay Technology (SMART) systems use 30+ high-speed cameras and deep learning to track ball trajectory, player movement, and event detection with millimeter accuracy. Used by FIFA, NFL, Premier League, and Wimbledon, Hawk-Eye processes over 100,000 decisions annually with 99.9% accuracy. Their security division provides real-time threat detection and crowd analytics for stadiums and public venues.</p>
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
            <li>30+ high-speed camera array with sub-millimeter tracking accuracy</li>
            <li>Real-time ball and player trajectory prediction using deep learning</li>
            <li>Automated event detection: goals, fouls, line calls, and boundary decisions</li>
            <li>Security mode: crowd density analysis, anomaly detection, and threat identification</li>
            <li>Cloud-based replay center: instant multi-angle synchronized replays</li>
            <li>API integration: embed analytics into broadcast, betting, and coaching platforms</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Eliminate officiating errors with 99.9% accurate automated decisions</li>
            <li>Reduce security response time by 80% with AI threat detection</li>
            <li>Enhance fan experience with instant replay and data-driven insights</li>
            <li>Generate new revenue through data licensing to broadcasters and betting operators</li>
            <li>Trusted by FIFA, NFL, Premier League, and 20+ major sports leagues worldwide</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (demo)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$50K/year (single venue)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom ($500K+/year multi-venue)</p>
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
