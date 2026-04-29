'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type Sector = 'general' | 'finance' | 'healthcare' | 'public';

function computeRisk(sector: Sector, autonomy: number, pii: number, externalActions: number) {
  const sectorWeight = sector === 'public' ? 22 : sector === 'healthcare' ? 18 : sector === 'finance' ? 16 : 10;
  const raw = sectorWeight + autonomy * 0.35 + pii * 0.3 + externalActions * 0.25;
  return Math.max(0, Math.min(100, Math.round(raw)));
}

function tier(score: number) {
  if (score >= 75) return 'High';
  if (score >= 50) return 'Medium';
  return 'Low';
}

export default function AIGovernanceRiskAdvisorPage() {
  const [sector, setSector] = useState<Sector>('general');
  const [autonomyLevel, setAutonomyLevel] = useState(55);
  const [piiExposure, setPiiExposure] = useState(45);
  const [externalActions, setExternalActions] = useState(40);

  const riskScore = useMemo(
    () => computeRisk(sector, autonomyLevel, piiExposure, externalActions),
    [sector, autonomyLevel, piiExposure, externalActions],
  );
  const riskTier = tier(riskScore);

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">AI Lab - Governance & Risk</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">AI Governance & Risk Advisor</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
          Estimate governance risk before scaling autonomous AI features, then map safeguards to the recommended rollout profile.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4 text-xs">
            <label className="block">
              <span className="mb-1 block text-slate-300">Industry context</span>
              <select value={sector} onChange={(e) => setSector(e.target.value as Sector)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100">
                <option value="general">General</option>
                <option value="finance">Financial services</option>
                <option value="healthcare">Healthcare</option>
                <option value="public">Public sector</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-slate-300">Autonomy level: {autonomyLevel}</span>
              <input type="range" min={0} max={100} value={autonomyLevel} onChange={(e) => setAutonomyLevel(Number(e.target.value))} className="w-full accent-amber-400" />
            </label>
            <label className="block">
              <span className="mb-1 block text-slate-300">PII/sensitive-data exposure: {piiExposure}</span>
              <input type="range" min={0} max={100} value={piiExposure} onChange={(e) => setPiiExposure(Number(e.target.value))} className="w-full accent-amber-400" />
            </label>
            <label className="block">
              <span className="mb-1 block text-slate-300">External action authority: {externalActions}</span>
              <input type="range" min={0} max={100} value={externalActions} onChange={(e) => setExternalActions(Number(e.target.value))} className="w-full accent-amber-400" />
            </label>
          </div>

          <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-300">Governance score</p>
            <h2 className="mt-1 text-3xl font-bold text-amber-50">{riskScore}/100</h2>
            <p className="mt-2 text-sm text-slate-100">Risk tier: <span className="font-semibold">{riskTier}</span></p>

            <ul className="mt-4 space-y-2 text-xs text-slate-100">
              <li className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">Require explicit policy checks for high-impact tool calls.</li>
              <li className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">Log prompts, actions, and decisions with provenance for audit trails.</li>
              <li className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">Use staged rollout cohorts with human-in-the-loop escalation.</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <a href="/ai-services/ai-governance-trust" className="rounded-full border border-amber-300/70 bg-amber-400/20 px-3 py-1.5 font-semibold text-amber-50">
                View governance services
              </a>
              <a href="/ai-lab/implementation-readiness-checker" className="rounded-full border border-cyan-300/70 bg-cyan-400/20 px-3 py-1.5 font-semibold text-cyan-50">
                Check implementation readiness
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
