'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type GrowthLoop = {
  id: string;
  name: string;
  stage: 'Acquisition' | 'Activation' | 'Revenue' | 'Retention';
  implementationComplexity: number;
  valuePotential: number;
  autonomyFit: number;
  governanceCost: number;
  href: string;
};

const GROWTH_LOOPS: GrowthLoop[] = [
  {
    id: 'seo-to-demo',
    name: 'AI SEO -> Dynamic Demo Routing',
    stage: 'Acquisition',
    implementationComplexity: 42,
    valuePotential: 88,
    autonomyFit: 82,
    governanceCost: 35,
    href: '/zion-ai-seo-optimizer',
  },
  {
    id: 'intent-to-proposal',
    name: 'Intent Signal -> Proposal Copilot',
    stage: 'Activation',
    implementationComplexity: 48,
    valuePotential: 91,
    autonomyFit: 78,
    governanceCost: 38,
    href: '/ai-services/ai-copilot-enterprise',
  },
  {
    id: 'pipeline-expansion',
    name: 'Account Expansion + Upsell Intelligence',
    stage: 'Revenue',
    implementationComplexity: 52,
    valuePotential: 94,
    autonomyFit: 75,
    governanceCost: 44,
    href: '/zion-crm-intelligence',
  },
  {
    id: 'retention-guardian',
    name: 'Churn Prevention + Experience Guardrails',
    stage: 'Retention',
    implementationComplexity: 45,
    valuePotential: 86,
    autonomyFit: 88,
    governanceCost: 33,
    href: '/zion-customer-satisfaction-monitor',
  },
  {
    id: 'release-loop',
    name: 'Release Health -> Autonomous Fix Backlog',
    stage: 'Retention',
    implementationComplexity: 56,
    valuePotential: 82,
    autonomyFit: 92,
    governanceCost: 28,
    href: '/ai-lab/build-failure-explainer',
  },
];

type Priority = 'Immediate' | 'Next Cycle' | 'Strategic Backlog';

function toPriority(score: number): Priority {
  if (score >= 76) return 'Immediate';
  if (score >= 60) return 'Next Cycle';
  return 'Strategic Backlog';
}

export default function AutonomousGrowthLoopDesignerPage() {
  const [trafficReadiness, setTrafficReadiness] = useState(64);
  const [automationMaturity, setAutomationMaturity] = useState(58);
  const [teamVelocity, setTeamVelocity] = useState(70);
  const [governanceStrictness, setGovernanceStrictness] = useState(46);

  const rankedLoops = useMemo(() => {
    return GROWTH_LOOPS.map((loop) => {
      const weightedScore =
        loop.valuePotential * (trafficReadiness / 100) * 0.35 +
        loop.autonomyFit * (automationMaturity / 100) * 0.35 +
        (100 - loop.implementationComplexity) * (teamVelocity / 100) * 0.2 +
        (100 - loop.governanceCost) * ((100 - governanceStrictness) / 100) * 0.1;

      const score = Math.max(0, Math.min(100, Math.round(weightedScore)));
      return {
        ...loop,
        score,
        priority: toPriority(score),
      };
    }).sort((a, b) => b.score - a.score);
  }, [trafficReadiness, automationMaturity, teamVelocity, governanceStrictness]);

  const best = rankedLoops[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
          AI Lab - Live Growth Intelligence
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Autonomous Growth Loop Designer
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
          Build and prioritize intelligent growth loops in-browser. Simulate your current readiness
          and instantly see which AI-powered loop should launch first for measurable business impact.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Readiness signals</h2>
            <div className="mt-4 space-y-4 text-xs">
              <label className="block">
                <span className="mb-1 block text-slate-300">
                  Traffic readiness: {trafficReadiness}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={trafficReadiness}
                  onChange={(e) => setTrafficReadiness(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">
                  Automation maturity: {automationMaturity}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={automationMaturity}
                  onChange={(e) => setAutomationMaturity(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Team velocity: {teamVelocity}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={teamVelocity}
                  onChange={(e) => setTeamVelocity(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">
                  Governance strictness: {governanceStrictness}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={governanceStrictness}
                  onChange={(e) => setGovernanceStrictness(Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
              Highest-priority loop
            </p>
            <h2 className="mt-1 text-xl font-bold text-cyan-50">{best.name}</h2>
            <p className="mt-2 text-sm text-cyan-100/90">
              Priority: <span className="font-semibold">{best.priority}</span> | Composite score:{' '}
              <span className="font-semibold">{best.score}/100</span>
            </p>
            <Link
              href={best.href}
              className="mt-4 inline-flex rounded-full border border-cyan-300/70 bg-cyan-400/20 px-4 py-2 text-xs font-semibold text-cyan-50 hover:bg-cyan-400/30"
            >
              Open recommended launch path
            </Link>

            <div className="mt-6 space-y-2">
              {rankedLoops.map((loop) => (
                <div
                  key={loop.id}
                  className="flex items-center justify-between rounded-lg border border-slate-700/70 bg-slate-950/70 px-3 py-2"
                >
                  <div>
                    <p className="text-xs font-semibold text-slate-100">{loop.name}</p>
                    <p className="text-[11px] text-slate-400">{loop.stage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-cyan-300">{loop.score}</p>
                    <p className="text-[10px] uppercase tracking-wide text-slate-300">
                      {loop.priority}
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
