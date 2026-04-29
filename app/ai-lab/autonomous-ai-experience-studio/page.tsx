'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type ExperienceType = 'assistant' | 'copilot' | 'autonomous-flow' | 'insight-hub';

const EXPERIENCE_BASELINES: Record<
  ExperienceType,
  { title: string; autonomyBias: number; impactBias: number; safetyBias: number }
> = {
  assistant: { title: 'AI Assistant', autonomyBias: 58, impactBias: 64, safetyBias: 84 },
  copilot: { title: 'AI Copilot', autonomyBias: 70, impactBias: 76, safetyBias: 72 },
  'autonomous-flow': {
    title: 'Autonomous Workflow',
    autonomyBias: 86,
    impactBias: 84,
    safetyBias: 60,
  },
  'insight-hub': { title: 'Intelligence Hub', autonomyBias: 66, impactBias: 80, safetyBias: 78 },
};

function clamp(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export default function AutonomousAIExperienceStudioPage() {
  const [experienceType, setExperienceType] = useState<ExperienceType>('copilot');
  const [dataReadiness, setDataReadiness] = useState(68);
  const [uxClarity, setUxClarity] = useState(74);
  const [automationDepth, setAutomationDepth] = useState(62);
  const [governanceLevel, setGovernanceLevel] = useState(52);

  const metrics = useMemo(() => {
    const baseline = EXPERIENCE_BASELINES[experienceType];
    const autonomyScore = clamp(
      baseline.autonomyBias * 0.45 + automationDepth * 0.35 + dataReadiness * 0.2,
    );
    const impactScore = clamp(baseline.impactBias * 0.45 + uxClarity * 0.35 + dataReadiness * 0.2);
    const safetyScore = clamp(
      baseline.safetyBias * 0.4 + governanceLevel * 0.4 + (100 - automationDepth) * 0.2,
    );
    const launchScore = clamp(autonomyScore * 0.35 + impactScore * 0.4 + safetyScore * 0.25);

    const recommendation =
      launchScore >= 78
        ? 'Ready to launch with guarded automation and continuous audits.'
        : launchScore >= 62
          ? 'Pilot-ready: run controlled rollout cohorts and tighten observability.'
          : 'Not ready: increase data quality and governance confidence before launch.';

    return { baseline, autonomyScore, impactScore, safetyScore, launchScore, recommendation };
  }, [automationDepth, dataReadiness, experienceType, governanceLevel, uxClarity]);

  return (
    <div className="bg-slate-950/95">
      <AILabToolLayout
        title="Autonomous AI Experience Studio"
        subtitle="Design and evaluate new in-browser AI experiences with deterministic launch scoring for autonomy, impact, and safety."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Experience design inputs</h2>
            <div className="mt-4 space-y-4 text-xs">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-wide text-slate-400">
                  Experience type
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(EXPERIENCE_BASELINES) as ExperienceType[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setExperienceType(key)}
                      className={`rounded-lg border px-2 py-1.5 text-left ${
                        experienceType === key
                          ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-50'
                          : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:border-cyan-500/40'
                      }`}
                    >
                      {EXPERIENCE_BASELINES[key].title}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-1 block text-slate-300">Data readiness: {dataReadiness}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={dataReadiness}
                  onChange={(event) => setDataReadiness(Number(event.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">UX clarity: {uxClarity}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={uxClarity}
                  onChange={(event) => setUxClarity(Number(event.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Automation depth: {automationDepth}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={automationDepth}
                  onChange={(event) => setAutomationDepth(Number(event.target.value))}
                  className="w-full accent-emerald-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Governance level: {governanceLevel}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={governanceLevel}
                  onChange={(event) => setGovernanceLevel(Number(event.target.value))}
                  className="w-full accent-amber-400"
                />
              </label>
            </div>
          </section>

          <section className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-200">
              Launch intelligence
            </p>
            <h2 className="mt-1 text-xl font-bold text-cyan-50">{metrics.baseline.title}</h2>
            <p className="mt-3 text-sm text-cyan-100">{metrics.recommendation}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Autonomy score</p>
                <p className="mt-1 text-2xl font-bold text-cyan-300">{metrics.autonomyScore}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Impact score</p>
                <p className="mt-1 text-2xl font-bold text-emerald-300">{metrics.impactScore}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Safety score</p>
                <p className="mt-1 text-2xl font-bold text-amber-300">{metrics.safetyScore}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Launch score</p>
                <p className="mt-1 text-2xl font-bold text-violet-300">{metrics.launchScore}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/automation"
                className="rounded-full border border-cyan-300/70 bg-cyan-400/20 px-4 py-2 text-xs font-semibold text-cyan-50 hover:bg-cyan-400/30"
              >
                Connect to automation engine
              </a>
              <a
                href="/ai-lab/autonomous-opportunity-radar"
                className="rounded-full border border-emerald-300/70 bg-emerald-400/20 px-4 py-2 text-xs font-semibold text-emerald-50 hover:bg-emerald-400/30"
              >
                Open opportunity radar
              </a>
            </div>
          </section>
        </div>
      </AILabToolLayout>
    </div>
  );
}
