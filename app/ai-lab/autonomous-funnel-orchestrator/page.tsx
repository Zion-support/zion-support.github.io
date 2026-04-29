/* eslint-disable */
import Metadata from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Funnel Orchestrator - Zion AI Lab',
  description:
    'Prioritize high-confidence conversion upgrades across CTA strategy, social proof, onboarding, and pricing presentation.',
};

const funnelIdeas = [
  {
    surface: 'Homepage hero CTA',
    action: 'Add intent-aware CTA variants mapped to visitor readiness stage.',
    impact: 'High',
    confidence: 88,
    effort: 'Medium',
  },
  {
    surface: 'Product catalog modules',
    action: 'Inject proof chips (live status, ROI snapshots, readiness badges).',
    impact: 'High',
    confidence: 84,
    effort: 'Low',
  },
  {
    surface: 'AI Lab tool pages',
    action: 'Add guided next-action panels linking to strategy and contact routes.',
    impact: 'Medium',
    confidence: 80,
    effort: 'Low',
  },
  {
    surface: 'Pricing and bundles',
    action: 'Show plan-fit recommendations by team size and deployment urgency.',
    impact: 'High',
    confidence: 76,
    effort: 'Medium',
  },
];

export default function AutonomousFunnelOrchestratorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-300">
            Conversion Intelligence · Autonomous AI Lab
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Autonomous Funnel Orchestrator
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Simulate which funnel improvements to ship first. This in-browser planner scores
            upgrades by estimated impact, execution effort, and confidence so teams can move faster
            without guesswork.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {funnelIdeas.map((idea) => (
            <article
              key={idea.surface}
              className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-lg shadow-slate-900/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-200">{idea.surface}</p>
              <p className="mt-2 text-sm text-slate-100">{idea.action}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-1 text-emerald-200">
                  Impact: {idea.impact}
                </span>
                <span className="rounded-full border border-sky-400/50 bg-sky-500/10 px-2 py-1 text-sky-200">
                  Confidence: {idea.confidence}%
                </span>
                <span className="rounded-full border border-violet-400/50 bg-violet-500/10 px-2 py-1 text-violet-200">
                  Effort: {idea.effort}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-200">
            Suggested autonomous sequence
          </p>
          <p className="mt-2 text-xs text-slate-200">
            Start with low-effort, high-impact ideas, then validate with guarded deployment checks
            before promoting changes site-wide.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/ai-lab/autonomous-deploy-optimizer"
              className="inline-flex items-center rounded-full border border-fuchsia-400/60 bg-fuchsia-500/20 px-3 py-1.5 text-xs font-semibold text-fuchsia-100"
            >
              Pair with deploy optimizer
            </a>
            <a
              href="/ai-lab"
              className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-100"
            >
              Back to AI Lab
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
