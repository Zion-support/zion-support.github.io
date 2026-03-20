'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type Opportunity = {
  id: string;
  title: string;
  lane: string;
  impactWeight: number;
  speedWeight: number;
  autonomyWeight: number;
  href: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'funnel-automation',
    title: 'Autonomous Funnel Optimization',
    lane: 'Growth',
    impactWeight: 1.2,
    speedWeight: 1.0,
    autonomyWeight: 1.1,
    href: '/zion-ai-marketing-automation',
  },
  {
    id: 'support-copilot',
    title: 'AI Support Copilot + Triage',
    lane: 'Customer Experience',
    impactWeight: 1.05,
    speedWeight: 1.15,
    autonomyWeight: 1.2,
    href: '/zion-ai-customer-support-pro',
  },
  {
    id: 'content-velocity',
    title: 'Autonomous Content Velocity Engine',
    lane: 'Content',
    impactWeight: 1.15,
    speedWeight: 1.05,
    autonomyWeight: 1.3,
    href: '/automation',
  },
  {
    id: 'release-intelligence',
    title: 'AI Release Intelligence + Build Failure Defense',
    lane: 'Engineering',
    impactWeight: 1.0,
    speedWeight: 1.25,
    autonomyWeight: 1.05,
    href: '/ai-lab/build-failure-explainer',
  },
  {
    id: 'governance-guardrails',
    title: 'Governance Guardrails for Regulated AI',
    lane: 'Governance',
    impactWeight: 0.95,
    speedWeight: 0.9,
    autonomyWeight: 1.0,
    href: '/ai-lab/ai-governance-risk-advisor',
  },
];

function bucket(score: number): 'Now' | 'Next' | 'Later' {
  if (score >= 78) return 'Now';
  if (score >= 58) return 'Next';
  return 'Later';
}

export default function AutonomousOpportunityRadarPage() {
  const [traffic, setTraffic] = useState(55);
  const [automationGap, setAutomationGap] = useState(60);
  const [teamReadiness, setTeamReadiness] = useState(70);
  const [governancePressure, setGovernancePressure] = useState(45);

  const ranked = useMemo(() => {
    return OPPORTUNITIES.map((item) => {
      const base =
        traffic * item.impactWeight +
        automationGap * item.autonomyWeight +
        teamReadiness * item.speedWeight -
        governancePressure * (item.lane === 'Governance' ? 0.35 : 0.15);

      const normalized = Math.max(0, Math.min(100, Math.round(base / 3)));
      return {
        ...item,
        score: normalized,
        priority: bucket(normalized),
      };
    }).sort((a, b) => b.score - a.score);
  }, [traffic, automationGap, teamReadiness, governancePressure]);

  const top = ranked[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
          AI Lab - Live Strategy Tool
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Autonomous Opportunity Radar
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
          Tune a few business signals and instantly get a prioritized roadmap for new AI products,
          autonomous experiences, and automation layers you can deploy next.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Input signals</h2>
            <div className="mt-4 space-y-4 text-xs">
              <label className="block">
                <span className="mb-1 block text-slate-300">Traffic potential: {traffic}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full accent-emerald-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Automation gap: {automationGap}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={automationGap}
                  onChange={(e) => setAutomationGap(Number(e.target.value))}
                  className="w-full accent-emerald-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Team readiness: {teamReadiness}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={teamReadiness}
                  onChange={(e) => setTeamReadiness(Number(e.target.value))}
                  className="w-full accent-emerald-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">
                  Governance pressure: {governancePressure}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={governancePressure}
                  onChange={(e) => setGovernancePressure(Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
              Recommended next launch
            </p>
            <h2 className="mt-1 text-xl font-bold text-emerald-50">{top.title}</h2>
            <p className="mt-2 text-sm text-emerald-100/90">
              Priority lane: <span className="font-semibold">{top.priority}</span> | Composite
              score: <span className="font-semibold">{top.score}/100</span>
            </p>
            <Link
              href={top.href}
              className="mt-4 inline-flex rounded-full border border-emerald-300/70 bg-emerald-400/20 px-4 py-2 text-xs font-semibold text-emerald-50 hover:bg-emerald-400/30"
            >
              Open recommended solution
            </Link>

            <div className="mt-6 space-y-2">
              {ranked.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-slate-700/70 bg-slate-950/70 px-3 py-2"
                >
                  <div>
                    <p className="text-xs font-semibold text-slate-100">{item.title}</p>
                    <p className="text-[11px] text-slate-400">{item.lane}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-300">{item.score}</p>
                    <p className="text-[10px] uppercase tracking-wide text-slate-300">
                      {item.priority}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
