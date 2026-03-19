'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type CompanyStage = 'startup' | 'scaling' | 'enterprise';
type UseCaseFocus = 'chatbot' | 'operations' | 'marketing';
type DataMaturity = 'none' | 'some' | 'strong';
type IntegrationMaturity = 'manual' | 'partial' | 'integrated';
type GovernanceMaturity = 'light' | 'standard' | 'strict';
type MonitoringMaturity = 'none' | 'basic' | 'continuous';

type StepId = 'stage' | 'inputs' | 'governance' | 'results';

function clampScore(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

function computeReadinessScore(args: {
  companyStage: CompanyStage;
  focus: UseCaseFocus;
  dataMaturity: DataMaturity;
  integrationMaturity: IntegrationMaturity;
  governanceMaturity: GovernanceMaturity;
  monitoringMaturity: MonitoringMaturity;
}): number {
  const stagePoints = args.companyStage === 'startup' ? 10 : args.companyStage === 'scaling' ? 14 : 18;

  const focusPoints = args.focus === 'chatbot' ? 10 : args.focus === 'operations' ? 12 : 10;

  const dataPoints = args.dataMaturity === 'none' ? 6 : args.dataMaturity === 'some' ? 14 : 22;
  const integrationPoints =
    args.integrationMaturity === 'manual' ? 6 : args.integrationMaturity === 'partial' ? 16 : 24;
  const governancePoints =
    args.governanceMaturity === 'light' ? 8 : args.governanceMaturity === 'standard' ? 18 : 25;
  const monitoringPoints =
    args.monitoringMaturity === 'none' ? 6 : args.monitoringMaturity === 'basic' ? 14 : 22;

  const raw = stagePoints + focusPoints + dataPoints + integrationPoints + governancePoints + monitoringPoints;
  // Normalize to 0–100 (raw ranges roughly 46–121)
  return clampScore(Math.round((raw / 121) * 100));
}

type ReadinessTier = 'pilot' | 'phased' | 'foundation';

function tierForScore(score: number): ReadinessTier {
  if (score >= 80) return 'pilot';
  if (score >= 60) return 'phased';
  return 'foundation';
}

function computeTimeToStart(args: { score: number; governanceMaturity: GovernanceMaturity }) {
  const tier = tierForScore(args.score);
  const strictPenalty = args.governanceMaturity === 'strict' ? ' (governance review path)' : '';

  if (tier === 'pilot') return `2–4 weeks${strictPenalty}`;
  if (tier === 'phased') return `4–8 weeks${strictPenalty}`;
  return `8–12 weeks${strictPenalty}`;
}

function formatPercent(score: number) {
  return `${score}/100`;
}

export default function ImplementationReadinessCheckerPage() {
  const [step, setStep] = useState<StepId>('stage');

  const [companyStage, setCompanyStage] = useState<CompanyStage>('scaling');
  const [focus, setFocus] = useState<UseCaseFocus>('chatbot');
  const [dataMaturity, setDataMaturity] = useState<DataMaturity>('some');
  const [integrationMaturity, setIntegrationMaturity] = useState<IntegrationMaturity>('partial');
  const [governanceMaturity, setGovernanceMaturity] = useState<GovernanceMaturity>('standard');
  const [monitoringMaturity, setMonitoringMaturity] = useState<MonitoringMaturity>('basic');

  const score = useMemo(
    () =>
      computeReadinessScore({
        companyStage,
        focus,
        dataMaturity,
        integrationMaturity,
        governanceMaturity,
        monitoringMaturity,
      }),
    [companyStage, focus, dataMaturity, integrationMaturity, governanceMaturity, monitoringMaturity],
  );

  const tier = tierForScore(score);
  const timeToStart = useMemo(
    () => computeTimeToStart({ score, governanceMaturity }),
    [score, governanceMaturity],
  );

  const primaryModuleHref =
    focus === 'chatbot'
      ? '/zion-ai-chatbot-builder'
      : focus === 'operations'
        ? '/zion-workflow-automation'
        : '/zion-ai-marketing-automation';

  const recommendedNext = useMemo(() => {
    if (tier === 'pilot') {
      return {
        title: 'You’re ready for a targeted pilot',
        steps: [
          {
            label: 'Define one KPI + success stop/go',
            href: '/ai-services/ai-strategy-roadmap',
          },
          {
            label: 'Launch the right Zion module quickly',
            href: primaryModuleHref,
          },
          {
            label: 'Add reliability checks and governance guardrails',
            href: '/ai-services/ai-governance-trust',
          },
        ],
        note:
          'Your inputs indicate you have the basics for a low-risk pilot. Start small, measure, and scale once you see stable quality.',
      };
    }

    if (tier === 'phased') {
      return {
        title: 'Start with foundations, then scale in phases',
        steps: [
          {
            label: 'Map data + integration touchpoints',
            href: '/ai-services/ai-integration-apis',
          },
          {
            label: 'Run a guided, instrumented rollout',
            href: primaryModuleHref,
          },
          {
            label: 'Harden governance and monitoring',
            href: '/ai-services/ai-security-responsible-ai',
          },
        ],
        note:
          'You’re close, but you’ll move faster by aligning governance, instrumentation, and integration before you broaden the rollout.',
      };
    }

    return {
      title: 'Build the “readiness bedrock” first',
      steps: [
        {
          label: 'Clarify your compliance + policy requirements',
          href: '/ai-services/ai-governance-trust',
        },
        {
          label: 'Standardize your data sources and access controls',
          href: '/ai-services/ai-regulated-industries',
        },
        {
          label: 'Plan a safer pilot once monitoring is in place',
          href: primaryModuleHref,
        },
      ],
      note:
        'Your answers suggest risks (data, integration, governance, or monitoring). A short foundation phase will reduce rework later.',
    };
  }, [tier, primaryModuleHref]);

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mb-8 rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6 shadow-xl shadow-sky-900/20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">AI Lab · Tool</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            AI Implementation Readiness Checker
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base">
            Answer a few quick questions to generate a readiness score and a recommended rollout path using Zion
            modules and governance-first best practices.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr),minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-xl shadow-slate-900/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Step:</span> {step === 'stage' ? '1' : step === 'inputs' ? '2' : step === 'governance' ? '3' : '4'} / 4
              </div>
              <div className="flex items-center gap-2">
                {(['stage', 'inputs', 'governance', 'results'] as StepId[]).map((id) => (
                  <span
                    key={id}
                    className={`h-2.5 w-2.5 rounded-full ${
                      id === step ? 'bg-sky-300' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-5">
              {step === 'stage' ? (
                <>
                  <label className="block">
                    <span className="text-xs font-semibold text-slate-200">Company stage</span>
                    <select
                      value={companyStage}
                      onChange={(e) => setCompanyStage(e.target.value as CompanyStage)}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                    >
                      <option value="startup">Startup (early rollout)</option>
                      <option value="scaling">Scaling (multiple teams)</option>
                      <option value="enterprise">Enterprise (governed scale)</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-slate-200">Primary focus</span>
                    <select
                      value={focus}
                      onChange={(e) => setFocus(e.target.value as UseCaseFocus)}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                    >
                      <option value="chatbot">Chatbot / Copilot experience</option>
                      <option value="operations">Operations automation</option>
                      <option value="marketing">Marketing + conversion automation</option>
                    </select>
                  </label>

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('inputs')}
                      className="rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-sky-500 hover:to-cyan-500"
                    >
                      Next →
                    </button>
                  </div>
                </>
              ) : null}

              {step === 'inputs' ? (
                <>
                  <label className="block">
                    <span className="text-xs font-semibold text-slate-200">Data maturity</span>
                    <select
                      value={dataMaturity}
                      onChange={(e) => setDataMaturity(e.target.value as DataMaturity)}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                    >
                      <option value="none">Limited or no organized data</option>
                      <option value="some">Some sources (docs, CRM, tickets)</option>
                      <option value="strong">Strong knowledge + structured signals</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-slate-200">Integration maturity</span>
                    <select
                      value={integrationMaturity}
                      onChange={(e) => setIntegrationMaturity(e.target.value as IntegrationMaturity)}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                    >
                      <option value="manual">Mostly manual workflows</option>
                      <option value="partial">Some APIs + partial automation</option>
                      <option value="integrated">Clean integrations and instrumentation</option>
                    </select>
                  </label>

                  <div className="flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('stage')}
                      className="rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep('governance')}
                      className="rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-sky-500 hover:to-cyan-500"
                    >
                      Next →
                    </button>
                  </div>
                </>
              ) : null}

              {step === 'governance' ? (
                <>
                  <label className="block">
                    <span className="text-xs font-semibold text-slate-200">Governance maturity</span>
                    <select
                      value={governanceMaturity}
                      onChange={(e) => setGovernanceMaturity(e.target.value as GovernanceMaturity)}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                    >
                      <option value="light">Light governance (ad-hoc checks)</option>
                      <option value="standard">Standard governance (policies + reviews)</option>
                      <option value="strict">Strict governance (regulated environment)</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-slate-200">Monitoring & evaluation</span>
                    <select
                      value={monitoringMaturity}
                      onChange={(e) => setMonitoringMaturity(e.target.value as MonitoringMaturity)}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm text-slate-100"
                    >
                      <option value="none">No monitoring plan yet</option>
                      <option value="basic">Basic evaluation and dashboards</option>
                      <option value="continuous">Continuous monitoring + quality gates</option>
                    </select>
                  </label>

                  <div className="flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('inputs')}
                      className="rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep('results')}
                      className="rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-sky-500 hover:to-cyan-500"
                    >
                      See results →
                    </button>
                  </div>
                </>
              ) : null}

              {step === 'results' ? (
                <>
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Readiness score</p>
                    <div className="mt-2 flex items-baseline justify-between gap-4">
                      <p className="text-4xl font-extrabold text-white">{formatPercent(score)}</p>
                      <span className="rounded-full border border-sky-400/50 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-100">
                        {tier === 'pilot' ? 'Pilot-ready' : tier === 'phased' ? 'Phased rollout' : 'Needs foundation'}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-200">
                      Suggested time to start: <span className="font-semibold text-slate-50">{timeToStart}</span>
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{recommendedNext.note}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Recommended path</p>
                    <ol className="space-y-2">
                      {recommendedNext.steps.map((s, idx) => (
                        <li
                          key={s.href}
                          className="flex items-start justify-between gap-4 rounded-xl border border-slate-700/70 bg-slate-950/50 p-3"
                        >
                          <div>
                            <p className="text-xs font-semibold text-white">
                              {idx + 1}. {s.label}
                            </p>
                            <p className="mt-1 text-[11px] text-slate-300">
                              Turn this into a practical action with Zion.
                            </p>
                          </div>
                          <Link
                            href={s.href}
                            className="inline-flex shrink-0 items-center rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold text-sky-100 hover:bg-sky-500/20"
                          >
                            Open →
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('governance')}
                      className="rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-white"
                    >
                      ← Adjust inputs
                    </button>
                    <Link
                      href="/contact#engagement"
                      className="rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-sky-500 hover:to-cyan-500 inline-flex items-center"
                    >
                      Talk to Zion →
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-xl shadow-slate-900/50">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">How the score is built</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-300">•</span>
                <span>
                  Data readiness and integration maturity determine how quickly your pilot can produce measurable signals.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-300">•</span>
                <span>
                  Governance maturity and monitoring readiness reduce rework and help you scale safely.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-300">•</span>
                <span>
                  The suggested path maps directly into Zion modules and governance-first delivery.
                </span>
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Primary module for your focus</p>
              <p className="mt-2 text-sm font-semibold text-white">
                {focus === 'chatbot'
                  ? 'Zion AI Chatbot Builder'
                  : focus === 'operations'
                    ? 'Zion Workflow Automation'
                    : 'Zion AI Marketing Automation'}
              </p>
              <p className="mt-2 text-[11px] leading-5 text-slate-300">
                We’ll recommend a pilot that measures impact first, then hardens governance and monitoring as you expand.
              </p>
              <div className="mt-3">
                <Link
                  href={primaryModuleHref}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-sky-500/60 bg-sky-500/10 px-3 py-2 text-sm font-semibold text-sky-100 hover:bg-sky-500/20"
                >
                  Open module →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

