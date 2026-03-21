import type { Metadata } from 'next';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

export const metadata: Metadata = {
  title: 'Autonomous Experiment Priority Engine - Zion AI Lab',
  description:
    'Score and prioritize AI experiments by expected lift, confidence, and execution risk to accelerate autonomous shipping.',
};

const experiments = [
  { name: 'Homepage CTA sequence tuning', lift: 18, confidence: 72, risk: 'low', effort: 'small' },
  { name: 'Deploy drift anomaly banner targeting', lift: 11, confidence: 81, risk: 'low', effort: 'small' },
  { name: 'AI Lab launch card ranking refresh', lift: 14, confidence: 67, risk: 'low', effort: 'medium' },
  { name: 'OpenClaw worker cadence adaptation', lift: 9, confidence: 84, risk: 'medium', effort: 'medium' },
];

function score(x: (typeof experiments)[number]): number {
  const riskPenalty = x.risk === 'low' ? 6 : 14;
  const effortPenalty = x.effort === 'small' ? 4 : 10;
  return Math.max(1, Math.round(x.lift * 2.4 + x.confidence * 0.7 - riskPenalty - effortPenalty));
}

export default function AutonomousExperimentPriorityEnginePage() {
  const ranked = [...experiments]
    .map((x) => ({ ...x, priority: score(x) }))
    .sort((a, b) => b.priority - a.priority);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <AILabToolLayout
        title="Autonomous Experiment Priority Engine"
        subtitle="Rank AI experiments by expected impact, confidence, and execution risk before moving items into autonomous implementation queues."
      >
        <section className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Prioritized queue</p>
          <div className="mt-3 space-y-2">
            {ranked.map((exp) => (
              <div key={exp.name} className="rounded-lg border border-slate-800/80 bg-slate-950/60 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-100">{exp.name}</p>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-200">
                    priority {exp.priority}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  lift {exp.lift}% · confidence {exp.confidence}% · risk {exp.risk} · effort {exp.effort}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AILabToolLayout>
    </main>
  );
}
