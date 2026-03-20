'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type BacklogItem = {
  name: string;
  impact: number;
  confidence: number;
  effort: number;
  dependencyRisk: number;
  timeToValue: number;
};

const seedBacklog: BacklogItem[] = [
  {
    name: 'Improve onboarding copilot prompts',
    impact: 78,
    confidence: 82,
    effort: 35,
    dependencyRisk: 25,
    timeToValue: 80,
  },
  {
    name: 'Add retrieval guardrails for support answers',
    impact: 86,
    confidence: 74,
    effort: 58,
    dependencyRisk: 40,
    timeToValue: 62,
  },
  {
    name: 'Deploy marketing AI campaign sequencer',
    impact: 92,
    confidence: 61,
    effort: 72,
    dependencyRisk: 53,
    timeToValue: 55,
  },
];

const clamp = (value: number) => Math.max(0, Math.min(100, value));

export default function AutonomousBacklogPrioritizerPage() {
  const [impactWeight, setImpactWeight] = useState(35);
  const [confidenceWeight, setConfidenceWeight] = useState(25);
  const [effortWeight, setEffortWeight] = useState(15);
  const [riskWeight, setRiskWeight] = useState(15);
  const [speedWeight, setSpeedWeight] = useState(10);

  const prioritized = useMemo(() => {
    const total = impactWeight + confidenceWeight + effortWeight + riskWeight + speedWeight;
    const normalized = {
      impact: impactWeight / total,
      confidence: confidenceWeight / total,
      effort: effortWeight / total,
      risk: riskWeight / total,
      speed: speedWeight / total,
    };

    return seedBacklog
      .map((item) => {
        const score =
          item.impact * normalized.impact +
          item.confidence * normalized.confidence +
          (100 - item.effort) * normalized.effort +
          (100 - item.dependencyRisk) * normalized.risk +
          item.timeToValue * normalized.speed;
        return { ...item, score: Math.round(clamp(score)) };
      })
      .sort((a, b) => b.score - a.score);
  }, [impactWeight, confidenceWeight, effortWeight, riskWeight, speedWeight]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
            Delivery Intelligence · Autonomous AI Lab
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Autonomous Backlog Prioritizer
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Convert high-volume AI ideas into a weighted execution queue. Tune the model for your
            stage, then prioritize what ships next with transparent trade-offs.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
              Prioritization weights
            </p>
            <div className="mt-4 space-y-4 text-xs">
              <WeightSlider
                label="Business impact"
                value={impactWeight}
                onChange={setImpactWeight}
                color="text-emerald-300"
              />
              <WeightSlider
                label="Confidence"
                value={confidenceWeight}
                onChange={setConfidenceWeight}
                color="text-sky-300"
              />
              <WeightSlider
                label="Low implementation effort"
                value={effortWeight}
                onChange={setEffortWeight}
                color="text-violet-300"
              />
              <WeightSlider
                label="Low dependency risk"
                value={riskWeight}
                onChange={setRiskWeight}
                color="text-amber-300"
              />
              <WeightSlider
                label="Time-to-value"
                value={speedWeight}
                onChange={setSpeedWeight}
                color="text-pink-300"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-100">
              Suggested operating mode
            </p>
            <p className="mt-2 text-sm text-slate-200">
              {impactWeight + speedWeight >= 45
                ? 'Growth mode: prioritize quick wins with measurable business impact.'
                : 'Stability mode: prioritize lower-risk implementation with higher confidence.'}
            </p>
            <p className="mt-3 text-xs text-slate-300">
              Tip: pair this queue with the Deployment Readiness Console before direct-to-main
              automation runs.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/ai-lab/deployment-readiness-console"
                className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-500/20 px-3 py-1.5 text-xs font-semibold text-cyan-100"
              >
                Open readiness console
              </Link>
              <Link
                href="/automation"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-100"
              >
                View automation center
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
            Ranked execution queue
          </p>
          <div className="mt-4 space-y-3">
            {prioritized.map((item, index) => (
              <article
                key={item.name}
                className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-slate-100">
                    #{index + 1} {item.name}
                  </p>
                  <p className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    Score {item.score}
                  </p>
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  Impact {item.impact} · Confidence {item.confidence} · Effort {item.effort} ·
                  Dependency risk {item.dependencyRisk} · Time-to-value {item.timeToValue}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function WeightSlider({
  label,
  value,
  onChange,
  color,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  color: string;
}) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center justify-between">
        <span className={color}>{label}</span>
        <span className="font-mono text-slate-300">{value}</span>
      </div>
      <input
        type="range"
        min={5}
        max={60}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700"
      />
    </label>
  );
}
