'use client';

import { useMemo, useState } from 'react';

type IncidentScenario = {
  name: string;
  severity: number;
  blastRadius: number;
  rollbackReadiness: number;
  commsCoverage: number;
};

const scenarios: IncidentScenario[] = [
  { name: 'Homepage rendering regression after release', severity: 74, blastRadius: 82, rollbackReadiness: 88, commsCoverage: 72 },
  { name: 'AI route returns stale static content', severity: 58, blastRadius: 45, rollbackReadiness: 79, commsCoverage: 64 },
  { name: 'Workflow auto-commit loop on main', severity: 81, blastRadius: 67, rollbackReadiness: 63, commsCoverage: 70 },
];

const clamp = (value: number) => Math.max(0, Math.min(100, value));

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Page services and solutions from Zion Tech Group.',
  canonical: 'https://ziontechgroup.com/page',
};

export default function AutonomousIncidentCommanderPage() {
  const [severityWeight, setSeverityWeight] = useState(35);
  const [radiusWeight, setRadiusWeight] = useState(30);
  const [rollbackWeight, setRollbackWeight] = useState(20);
  const [commsWeight, setCommsWeight] = useState(15);

  const prioritized = useMemo(() => {
    const total = severityWeight + radiusWeight + rollbackWeight + commsWeight;
    const normalized = {
      severity: severityWeight / total,
      radius: radiusWeight / total,
      rollback: rollbackWeight / total,
      comms: commsWeight / total,
    };
    return scenarios
      .map((scenario) => {
        const score =
          scenario.severity * normalized.severity +
          scenario.blastRadius * normalized.radius +
          scenario.rollbackReadiness * normalized.rollback +
          scenario.commsCoverage * normalized.comms;
        return { ...scenario, score: Math.round(clamp(score)) };
      })
      .sort((a, b) => b.score - a.score);
  }, [severityWeight, radiusWeight, rollbackWeight, commsWeight]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
            Reliability Intelligence · Autonomous AI Lab
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Autonomous Incident Commander
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Stress-test incident response with weighted triage scoring. Use this model to decide which
            scenario deserves immediate autonomous mitigation, rollback, and communication workflows.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Triage weighting</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Slider label="Severity" value={severityWeight} onChange={setSeverityWeight} />
            <Slider label="Blast radius" value={radiusWeight} onChange={setRadiusWeight} />
            <Slider label="Rollback readiness" value={rollbackWeight} onChange={setRollbackWeight} />
            <Slider label="Comms coverage" value={commsWeight} onChange={setCommsWeight} />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">Prioritized response board</p>
          <div className="mt-4 space-y-3">
            {prioritized.map((scenario, index) => (
              <article key={scenario.name} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-slate-100">#{index + 1} {scenario.name}</p>
                  <p className="rounded-full border border-amber-400/50 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-200">
                    Priority {scenario.score}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block text-xs">
      <div className="mb-1 flex items-center justify-between">
        <span>{label}</span>
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
