import Link from 'next/link';

export const metadata = {
  title: 'Jellyfin Open-Source Media Streaming | Zion Tech Group',
  description: 'Jellyfin is a fully open-source media system that lets you collect, manage, and stream your own media library — a free alternative to Plex, Emby, and Netflix-style self-hosting. Unlike Plex (which requires Plex Pass for hardware transcoding and mobile sync) or Emby (paid model), Jellyfin provides every feature completely free with no premium tier.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/jellyfin',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Jellyfin Open-Source Media Streaming</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Jellyfin is a fully open-source media system that lets you collect, manage, and stream your own media library — a free alternative to Plex, Emby, and Netflix-style self-hosting. Unlike Plex (which requires Plex Pass for hardware transcoding and mobile sync) or Emby (paid model), Jellyfin provides every feature completely free with no premium tier.</p>
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
            <li>Universal media streaming with automatic format transcoding (H.264/H.265/VP9/AV1) for any device</li>
            <li>Rich metadata fetching from TMDB, TVDb, OMDb, MusicBrainz — automatic posters, fanart, cast info, reviews</li>
            <li>Multi-user support with per-user parental controls, content rating restrictions, watched status</li>
            <li>Live TV &amp; DVR with HDHomeRun and M3U tuner support — record and schedule live TV</li>
            <li>Plugin ecosystem: Intro Skipper, OPDS catalog, Fanart plugin, Merge Collections, LDAP/SSO auth</li>
            <li>Clients on 15+ platforms: Web, Android, iOS, Roku, Fire TV, Apple TV, Samsung/LG smart TVs, PlayStation, Xbox</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>100% free with zero feature restrictions — Plex Pass costs $119.99 lifetime for features Jellyfin includes free</li>
            <li>No account or internet connection required — your media library stays entirely on your hardware</li>
            <li>No telemetry, no phone-home — completely offline-capable once installed</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">100% Free</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">No paid tiers</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">No paid tiers</p>
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
