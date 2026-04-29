/* eslint-disable */
import Metadata from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Autonomous Deploy Optimizer - Zion AI Lab',
  description:
    'Evaluate release risk, quality-gate coverage, and rollback readiness to pick the best autonomous deployment path.',
};

const releaseProfiles = [
  {
    name: 'Fast-track',
    deployWindow: '< 1 hour',
    whenToUse: 'Small copy, CTA, or non-critical UI improvements with strong automated coverage.',
    checks: ['lint + type-check', 'smoke route checks', 'post-deploy 200 status verification'],
  },
  {
    name: 'Guarded',
    deployWindow: '2-4 hours',
    whenToUse: 'Homepage section updates, new in-browser tools, and automation workflow tweaks.',
    checks: ['lint + type-check + tests', 'build + static page generation', 'live UX audit + readiness report'],
  },
  {
    name: 'Full-risk-managed',
    deployWindow: 'same day',
    whenToUse: 'Large architecture or route expansion with many internal links and conversion surfaces.',
    checks: ['full CI/CD suite', 'app audit + apply summaries', 'rollback playbook validated'],
  },
];

export default function AutonomousDeployOptimizerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sky-400">
            Deployment Intelligence · Autonomous AI Lab
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Autonomous Deploy Optimizer
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Use this in-browser planner to choose the safest high-velocity deploy mode for your next
            release. Pair the recommended profile with Zion quality gates to keep main branch changes
            both fast and reliable.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {releaseProfiles.map((profile) => (
            <article
              key={profile.name}
              className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-lg shadow-slate-900/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">{profile.name}</p>
              <p className="mt-2 text-sm text-slate-200">
                Recommended window: <span className="font-semibold text-slate-100">{profile.deployWindow}</span>
              </p>
              <p className="mt-2 text-xs text-slate-300">{profile.whenToUse}</p>
              <ul className="mt-3 space-y-1 text-[11px] text-slate-300">
                {profile.checks.map((check) => (
                  <li key={check} className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-300">●</span>
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">Suggested command sequence</p>
          <p className="mt-2 text-xs text-slate-200">
            <code className="rounded bg-slate-900/80 px-1.5 py-0.5">npm run app:site-improve-strict</code>
            {' '}for guarded and full-risk-managed deploys.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/automation"
              className="inline-flex items-center rounded-full border border-sky-400/60 bg-sky-500/20 px-3 py-1.5 text-xs font-semibold text-sky-100"
            >
              Open automation center
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

