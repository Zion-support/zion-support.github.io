import type { Metadata } from 'next';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';
import { latestSiteEvolutionSnapshot } from '../ai-site-evolution-data';

export const metadata: Metadata = {
  title: 'AI Site Evolution Advisor',
  description:
    'See an AI-native view of how Zion’s autonomous agents are improving ziontechgroup.com over time.',
};

export default function AISiteEvolutionAdvisorPage() {
  const snapshot = latestSiteEvolutionSnapshot;

  return (
    <div className="bg-slate-950/90">
      <AILabToolLayout
        title="AI Site Evolution Advisor"
        subtitle="A high-level, AI-native view of how autonomous agents are improving ziontechgroup.com across performance, accessibility, SEO, content, and navigation."
      >
        <div className="space-y-8">
          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Overall health
              </p>
              <p className="mt-3 text-4xl font-bold text-emerald-300">
                {snapshot.overallHealthScore}
                <span className="ml-1 text-base font-semibold text-slate-400">/ 100</span>
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Aggregated signal from performance, accessibility, SEO, security, content freshness,
                navigation, and architecture audits.
              </p>
              <p className="mt-3 text-[11px] text-slate-500">
                Last generated:{' '}
                <time dateTime={snapshot.generatedAt}>
                  {new Date(snapshot.generatedAt).toLocaleString()}
                </time>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Health by dimension
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {snapshot.healthBreakdown.map((item) => (
                  <div
                    key={item.category}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <p className="font-medium capitalize text-slate-200">{item.category}</p>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          item.trend === 'up'
                            ? 'border border-emerald-500/60 bg-emerald-500/10 text-emerald-200'
                            : item.trend === 'down'
                            ? 'border border-rose-500/60 bg-rose-500/10 text-rose-100'
                            : 'border border-slate-500/60 bg-slate-500/10 text-slate-200'
                        }`}
                      >
                        {item.trend === 'up'
                          ? 'Improving'
                          : item.trend === 'down'
                          ? 'Needs attention'
                          : 'Stable'}
                      </span>
                    </div>
                    <p className="mt-2 text-xl font-semibold text-slate-50">{item.score}</p>
                    <p className="mt-1 text-[11px] text-slate-400">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Recent autonomous improvements
                </p>
                <span className="rounded-full border border-sky-500/50 bg-sky-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-200">
                  From live automation runs
                </span>
              </div>
              <div className="space-y-4">
                {snapshot.recentImprovements.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs text-slate-300"
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <p className="font-medium text-slate-100">{event.title}</p>
                      <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[10px] capitalize text-slate-300">
                        {event.area}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">{event.description}</p>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                      <span>{event.source}</span>
                      <time dateTime={event.timestamp}>
                        {new Date(event.timestamp).toLocaleString()}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Highest-impact next steps
              </p>
              <ul className="space-y-4">
                {snapshot.topRecommendations.map((rec) => (
                  <li
                    key={rec.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs text-slate-300"
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <p className="font-medium text-slate-100">{rec.title}</p>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                          rec.impact === 'high'
                            ? 'border border-emerald-500/60 bg-emerald-500/10 text-emerald-200'
                            : rec.impact === 'medium'
                            ? 'border border-amber-400/60 bg-amber-400/10 text-amber-100'
                            : 'border border-slate-500/60 bg-slate-500/10 text-slate-200'
                        }`}
                      >
                        {rec.impact} impact
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">{rec.description}</p>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Suggested by {rec.suggestedBy}</span>
                      <span className="capitalize">{rec.area}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </AILabToolLayout>
    </div>
  );
}

