'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type RegulatedDomain = 'healthcare' | 'financial' | 'legal' | 'public' | 'other';
type DataSensitivity = 'low' | 'medium' | 'high';
type ModelExposure = 'internal' | 'external' | 'both';
type OversightLevel = 'light' | 'standard' | 'strong';
type GovernanceMaturity = 'immature' | 'emerging' | 'ready';

type RiskTier = 'low' | 'medium' | 'high';

function clampScore(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

function computeRiskScore(args: {
  domain: RegulatedDomain;
  dataSensitivity: DataSensitivity;
  modelExposure: ModelExposure;
  oversight: OversightLevel;
  governanceMaturity: GovernanceMaturity;
}): number {
  const domainBase =
    args.domain === 'healthcare'
      ? 30
      : args.domain === 'financial'
        ? 26
        : args.domain === 'legal'
          ? 22
          : args.domain === 'public'
            ? 20
            : 12;

  const dataBase = args.dataSensitivity === 'low' ? 10 : args.dataSensitivity === 'medium' ? 20 : 34;
  const exposureBase = args.modelExposure === 'internal' ? 8 : args.modelExposure === 'external' ? 26 : 36;
  const oversightPenalty = args.oversight === 'strong' ? 0 : args.oversight === 'standard' ? 8 : 18;

  const governanceReduction =
    args.governanceMaturity === 'immature' ? 0 : args.governanceMaturity === 'emerging' ? 22 : 38;

  const raw = domainBase + dataBase + exposureBase + oversightPenalty - governanceReduction;
  return clampScore(Math.round(raw));
}

function tierForRisk(score: number): RiskTier {
  if (score >= 70) return 'high';
  if (score >= 45) return 'medium';
  return 'low';
}

export default function GovernanceRiskAdvisorPage() {
  const [domain, setDomain] = useState<RegulatedDomain>('healthcare');
  const [dataSensitivity, setDataSensitivity] = useState<DataSensitivity>('high');
  const [modelExposure, setModelExposure] = useState<ModelExposure>('external');
  const [oversight, setOversight] = useState<OversightLevel>('standard');
  const [governanceMaturity, setGovernanceMaturity] = useState<GovernanceMaturity>('emerging');

  const riskScore = useMemo(
    () => computeRiskScore({ domain, dataSensitivity, modelExposure, oversight, governanceMaturity }),
    [domain, dataSensitivity, modelExposure, oversight, governanceMaturity],
  );

  const riskTier = tierForRisk(riskScore);

  const recommendation = useMemo(() => {
    if (riskTier === 'low') {
      return {
        title: 'Low risk, ready to scale with light governance',
        riskBlurb:
          'Your current setup indicates manageable risk. The next best move is to lock in audit trails and evaluation gates before expanding beyond the initial scope.',
        modules: [
          { label: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },
          { label: 'AI Security & Responsible AI', href: '/ai-services/ai-security-responsible-ai' },
          { label: 'AI Strategy & Roadmap', href: '/ai-services/ai-strategy-roadmap' },
        ],
        checklist: [
          'Define use boundaries and escalation paths',
          'Add evaluation for quality + compliance signals',
          'Establish review cadence (weekly at pilot, monthly at scale)',
        ],
      };
    }

    if (riskTier === 'medium') {
      return {
        title: 'Moderate risk: prioritize audit readiness and monitoring',
        riskBlurb:
          'Your inputs suggest gaps that could slow scaling. Focus on instrumentation, audit evidence, and human oversight so you can prove controls work in practice.',
        modules: [
          { label: 'AI for Regulated Industries', href: '/ai-services/ai-regulated-industries' },
          { label: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },
          { label: 'AI Security & Responsible AI', href: '/ai-services/ai-security-responsible-ai' },
        ],
        checklist: [
          'Create an audit evidence plan (what, where, how long)',
          'Set human-in-the-loop review thresholds for edge cases',
          'Instrument incident reporting and rollback paths',
        ],
      };
    }

    return {
      title: 'High risk: build governance bedrock before expanding exposure',
      riskBlurb:
        'Your current configuration indicates that scaling may create compliance, safety, or audit risks. Start with a governance foundation phase and only then broaden exposure.',
      modules: [
        { label: 'AI for Regulated Industries', href: '/ai-services/ai-regulated-industries' },
        { label: 'AI Security & Responsible AI', href: '/ai-services/ai-security-responsible-ai' },
        { label: 'Zion Compliance Manager', href: '/zion-compliance-manager' },
      ],
      checklist: [
        'Define data handling policies (collection, retention, deletion)',
        'Implement access controls and least-privilege tooling',
        'Run an evaluation + red-teaming pass before public exposure',
      ],
    };
  }, [riskTier]);

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 shadow-xl shadow-amber-900/20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">AI Lab · Tool</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            AI Governance & Risk Advisor
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base">
            For regulated teams: get a risk tier estimate and a practical set of governance modules to reduce audit,
            safety, and compliance risk while scaling AI use cases.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr),minmax(0,1fr)]">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-xl shadow-slate-900/50">
            <div className="space-y-5">
              <label className="block">
                <span className="text-xs font-semibold text-slate-200">Regulated domain</span>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value as RegulatedDomain)}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                >
                  <option value="healthcare">Healthcare / Life sciences</option>
                  <option value="financial">Financial services / Fintech</option>
                  <option value="legal">Legal / Law firms</option>
                  <option value="public">Public sector / Government</option>
                  <option value="other">Other regulated environment</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-slate-200">Data sensitivity</span>
                <select
                  value={dataSensitivity}
                  onChange={(e) => setDataSensitivity(e.target.value as DataSensitivity)}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                >
                  <option value="low">Low sensitivity (internal QA)</option>
                  <option value="medium">Medium (restricted internal use)</option>
                  <option value="high">High (regulated PII / high-trust data)</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-slate-200">Model exposure</span>
                <select
                  value={modelExposure}
                  onChange={(e) => setModelExposure(e.target.value as ModelExposure)}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                >
                  <option value="internal">Internal only</option>
                  <option value="external">External (customer-facing)</option>
                  <option value="both">Internal + external</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-slate-200">Human oversight strength</span>
                <select
                  value={oversight}
                  onChange={(e) => setOversight(e.target.value as OversightLevel)}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                >
                  <option value="light">Light oversight</option>
                  <option value="standard">Standard oversight (review thresholds)</option>
                  <option value="strong">Strong oversight (authority + escalation)</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-slate-200">Governance maturity</span>
                <select
                  value={governanceMaturity}
                  onChange={(e) => setGovernanceMaturity(e.target.value as GovernanceMaturity)}
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                >
                  <option value="immature">Immature (policies not formalized)</option>
                  <option value="emerging">Emerging (policies exist, controls vary)</option>
                  <option value="ready">Ready (audit-ready controls and evidence)</option>
                </select>
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-xl shadow-slate-900/50">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Estimated governance risk</p>

            <div className="mt-3 rounded-2xl border border-slate-700 bg-slate-950/40 p-4">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-4xl font-extrabold text-white">{riskScore}/100</p>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    riskTier === 'high'
                      ? 'border-rose-500/60 bg-rose-500/10 text-rose-100'
                      : riskTier === 'medium'
                        ? 'border-amber-500/60 bg-amber-500/10 text-amber-100'
                        : 'border-emerald-500/60 bg-emerald-500/10 text-emerald-100'
                  }`}
                >
                  {riskTier === 'high' ? 'High risk' : riskTier === 'medium' ? 'Moderate risk' : 'Lower risk'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-200">
                <span className="font-semibold text-slate-50">{recommendation.title}</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{recommendation.riskBlurb}</p>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Recommended modules</p>
              <div className="mt-2 grid gap-3">
                {recommendation.modules.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-950/40 px-3 py-3 transition hover:border-amber-400/60 hover:bg-slate-950/60"
                  >
                    <p className="text-sm font-semibold text-white group-hover:text-amber-200">{m.label}</p>
                    <span className="text-amber-200">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Next steps checklist</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
                {recommendation.checklist.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-0.5 text-amber-200">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact#engagement"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-amber-500 hover:to-orange-500"
                >
                  Talk to Zion →
                </Link>
                <Link
                  href="/ai-lab"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-amber-400 hover:text-white"
                >
                  Back to AI Lab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

