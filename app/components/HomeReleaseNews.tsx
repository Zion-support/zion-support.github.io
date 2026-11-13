'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
type ReleaseService = { id: string; title: string; href: string };
export default function HomeReleaseNews({ initialServices, knownReleaseIds }: { initialServices: ReleaseService[]; knownReleaseIds: string[] }) {
  const [releaseNotes, setReleaseNotes] = useState<any[]>([]);
  const [releaseServices, setReleaseServices] = useState(initialServices);
  useEffect(() => {
    const ac = new AbortController();
    const timer = setTimeout(() => ac.abort(), 8000);
    fetch('/data/release_notes.json', { signal: ac.signal })
      .then(response => response.ok ? response.json() : Promise.reject(response))
      .then(async data => {
        const entries = data.entries || [];
        const known = new Set(knownReleaseIds);
        // An independently refreshed release file may reference other catalog entries.
        if (entries.some((entry: any) => !known.has(entry.id))) {
          const { allServices } = await import('../data/servicesClientData');
          if (ac.signal.aborted) return;
          const wanted = new Set(entries.map((entry: any) => entry.id));
          setReleaseServices(allServices.filter(service => wanted.has(service.id)).map(({id, title, href}) => ({id, title, href})));
        }
        if (!ac.signal.aborted) setReleaseNotes(entries);
      })
      .catch(() => {})
      .finally(() => clearTimeout(timer));
    return () => { ac.abort(); clearTimeout(timer); };
  }, [initialServices, knownReleaseIds]);
  return (
      <section className="py-16">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 What's New</h2>
            <p className="text-slate-400 text-sm md:text-base">Freshly released and recently enhanced services, sorted by recency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(() => {
              const TAG_MAP: Record<string,string> = { ai: 'AI & ML', it: 'IT & Infrastructure', cloud: 'Cloud Platform', security: 'Security', data: 'Data & Analytics', automation: 'Automation' };
              const lookup = new Map(releaseServices.map(s => [s.id, s]));
              const items = (releaseNotes || [])
                .slice()
                .sort((a, b) => new Date(b.released_at).getTime() - new Date(a.released_at).getTime())
                .slice(0, 5)
                .map(r => ({ r, svc: lookup.get(r.id) as ReleaseService | undefined }))
                .filter((x): x is { r: any; svc: ReleaseService } => x.svc !== undefined)
                .map(({ r, svc }) => {
                  const daysAgo = Math.max(0, Math.round((Date.now() - new Date(r.released_at).getTime()) / 86_400_000));
                  const tag = (r.tags || []).map(t => TAG_MAP[t]).find(Boolean) || 'New';
                  return { id: svc.id, title: svc.title, description: r.changelog_summary || r.changelog.slice(0, 160) + '...', tag, daysAgo, href: svc.href };
                });
              if (!items.length) return <p className="text-slate-500 text-sm text-center">No recent releases available yet.</p>;
              return items.map(item => (
                <Link key={item.id} href={item.href} className="group block rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-purple-500/40 p-5 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/30">{item.tag}</span>
                    <span className="text-xs text-slate-500">{item.daysAgo === 0 ? 'Today' : `${item.daysAgo}d ago`}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors mb-1 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{item.description}</p>
                  <div className="mt-3 text-xs text-purple-400 group-hover:text-purple-300 font-medium">View details →</div>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>
  );
}
