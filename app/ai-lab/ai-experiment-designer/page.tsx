'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type Goal = 'conversion' | 'cost' | 'speed' | 'quality';
type RiskLevel = 'low' | 'medium' | 'high';
type Cohort = 'internal' | 'beta' | 'production';

function confidenceScore(sampleSize: number, risk: RiskLevel, cohort: Cohort) {
  const sampleFactor = Math.min(60, Math.round(sampleSize / 40));
  const riskPenalty = risk === 'high' ? 20 : risk === 'medium' ? 10 : 4;
  const cohortPenalty = cohort === 'production' ? 15 : cohort === 'beta' ? 8 : 2;
  return Math.max(0, Math.min(100, 50 + sampleFactor - riskPenalty - cohortPenalty));
}

function baselineMetric(goal: Goal) {
  if (goal === 'conversion') return 'Conversion rate';
  if (goal === 'cost') return 'Cost per outcome';
  if (goal === 'speed') return 'Time-to-resolution';
  return 'Quality score';
}

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Page services and solutions from Zion Tech Group.',
  canonical: 'https://ziontechgroup.com/page',
};

export default function AIExperimentDesignerPage() {
  const [goal, setGoal] = useState<Goal>('conversion');
  const [risk, setRisk] = useState<RiskLevel>('medium');
  const [cohort, setCohort] = useState<Cohort>('beta');
  const [durationDays, setDurationDays] = useState(21);
  const [sampleSize, setSampleSize] = useState(1200);

  const confidence = useMemo(
    () => confidenceScore(sampleSize, risk, cohort),
    [sampleSize, risk, cohort],
  );

  const metric = baselineMetric(goal);
  const recommendedPath =
    confidence >= 75 ? 'Run pilot now' : confidence >= 55 ? 'Tighten guardrails first' : 'Start with internal cohort';

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">AI Lab - Strategy Tool</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">AI Experiment Designer</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
          Create a practical experiment plan with measurable outcomes, clear cohorts, and a safer rollout path.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Experiment inputs</h2>
            <div className="mt-4 space-y-4 text-xs">
              <label className="block">
                <span className="mb-1 block text-slate-300">Primary goal</span>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as Goal)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                >
                  <option value="conversion">Increase conversion</option>
                  <option value="cost">Reduce operating cost</option>
                  <option value="speed">Improve speed</option>
                  <option value="quality">Improve quality</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-slate-300">Risk level</span>
                <select
                  value={risk}
                  onChange={(e) => setRisk(e.target.value as RiskLevel)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-slate-300">Rollout cohort</span>
                <select
                  value={cohort}
                  onChange={(e) => setCohort(e.target.value as Cohort)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                >
                  <option value="internal">Internal users</option>
                  <option value="beta">Beta users</option>
                  <option value="production">Production users</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-slate-300">Planned duration (days): {durationDays}</span>
                <input
                  type="range"
                  min={7}
                  max={60}
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-slate-300">Estimated sample size: {sampleSize}</span>
                <input
                  type="range"
                  min={200}
                  max={6000}
                  step={100}
                  value={sampleSize}
                  onChange={(e) => setSampleSize(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">Generated plan</p>
            <h2 className="mt-1 text-xl font-bold text-cyan-50">{recommendedPath}</h2>
            <p className="mt-2 text-sm text-cyan-100/90">
              Confidence score: <span className="font-semibold">{confidence}/100</span>
            </p>

            <div className="mt-4 rounded-lg border border-slate-700/70 bg-slate-950/70 p-4 text-xs text-slate-200">
              <p>
                <span className="font-semibold text-slate-100">Primary metric:</span> {metric}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-slate-100">Duration:</span> {durationDays} days
              </p>
              <p className="mt-2">
                <span className="font-semibold text-slate-100">Sample size:</span> {sampleSize}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-slate-100">Rollout:</span> {cohort}
              </p>
            </div>

            <div className="mt-5 grid gap-2 text-xs">
              <a
                href="/ai-lab/implementation-readiness-checker"
                className="rounded-full border border-cyan-300/70 bg-cyan-400/20 px-4 py-2 text-center font-semibold text-cyan-50 hover:bg-cyan-400/30"
              >
                Validate readiness for this experiment
              </a>
              <a
                href="/ai-lab/ai-governance-risk-advisor"
                className="rounded-full border border-amber-300/70 bg-amber-400/15 px-4 py-2 text-center font-semibold text-amber-50 hover:bg-amber-400/25"
              >
                Run governance and risk check
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

