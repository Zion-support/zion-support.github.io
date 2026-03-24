'use client';

import { useMemo, useState } from 'react';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type CompanyStage = 'early' | 'scaling' | 'enterprise';
type PrimaryGoal = 'growth' | 'efficiency' | 'experience' | 'risk';
type TimeToValue = 'weeks' | 'quarter' | 'longer';

type InputState = {
  stage: CompanyStage;
  goal: PrimaryGoal;
  timeToValue: TimeToValue;
  systems: string;
};

type ConfiguredModule = {
  name: string;
  href: string;
  pillar: string;
  reason: string;
};

type ArchitectureSlice = {
  title: string;
  description: string;
  items: string[];
};

type ConfigResult = {
  headline: string;
  summary: string;
  modules: ConfiguredModule[];
  architecture: ArchitectureSlice[];
};

const STAGE_LABELS: Record<CompanyStage, string> = {
  early: 'Early product / GTM fit',
  scaling: 'Scaling across teams and regions',
  enterprise: 'Complex, regulated enterprise',
};

const GOAL_LABELS: Record<PrimaryGoal, string> = {
  growth: 'Pipeline & revenue growth',
  efficiency: 'Cost & efficiency gains',
  experience: 'Customer & employee experience',
  risk: 'Risk, compliance, and reliability',
};

const TIME_LABELS: Record<TimeToValue, string> = {
  weeks: 'Pilot live in weeks',
  quarter: 'Rollout this quarter',
  longer: 'Strategic multi-quarter roadmap',
};

function configureSolution(input: InputState): ConfigResult {
  const modules: ConfiguredModule[] = [];

  // Core autonomous platform primitives
  modules.push(
    {
      name: 'Zion Autonomous Ops Hub',
      href: '/zion-ai-autonomous-ops-hub',
      pillar: 'Autonomous operations',
      reason: 'Orchestrates agents that monitor, improve, and safely deploy across the stack.',
    },
    {
      name: 'AI Development & Automation Agents',
      href: '/ai-ops',
      pillar: 'AI engineering',
      reason: 'Keeps code, performance, and automation pipelines evolving continuously.',
    }
  );

  if (input.goal === 'growth') {
    modules.push(
      {
        name: 'AI Marketing Automation',
        href: '/zion-ai-marketing-automation',
        pillar: 'Growth',
        reason: 'Campaigns that adapt to behavior and ship content with AI content pipelines.',
      },
      {
        name: 'AI Lead Scoring & Routing',
        href: '/zion-ai-lead-scoring',
        pillar: 'Growth',
        reason: 'Autonomous scoring and routing that keeps reps focused on high-intent deals.',
      }
    );
  } else if (input.goal === 'efficiency') {
    modules.push(
      {
        name: 'AI Workflow Automation',
        href: '/zion-workflow-automation',
        pillar: 'Efficiency',
        reason: 'Connects tools and processes with resilient, event-driven automations.',
      },
      {
        name: 'AI Document Processor',
        href: '/zion-ai-document-processor',
        pillar: 'Operations',
        reason: 'Turns contracts, invoices, and forms into structured data automatically.',
      }
    );
  } else if (input.goal === 'experience') {
    modules.push(
      {
        name: 'AI Chatbot Builder',
        href: '/zion-ai-chatbot-builder',
        pillar: 'Customer experience',
        reason: 'Launch branded support, sales, and onboarding assistants across channels.',
      },
      {
        name: 'AI Customer Support Pro',
        href: '/zion-ai-customer-support-pro',
        pillar: 'Customer experience',
        reason: 'Tier-1 automation with clear human escalation paths and telemetry.',
      }
    );
  } else {
    modules.push(
      {
        name: 'Zion Security Shield',
        href: '/zion-security-shield',
        pillar: 'Security',
        reason: 'Defense-in-depth with continuous posture monitoring.',
      },
      {
        name: 'AI for Regulated Industries',
        href: '/ai-services/ai-regulated-industries',
        pillar: 'Risk & compliance',
        reason: 'Patterns and controls for HIPAA, SOC 2, GDPR, and sector-specific rules.',
      }
    );
  }

  const architecture: ArchitectureSlice[] = [
    {
      title: '1 · Data & signals',
      description:
        'Connect the systems you mentioned so AI agents can observe journeys, SLAs, and bottlenecks without replacing your stack.',
      items: [
        'Non-invasive tap into existing CRMs, ticketing, and product analytics',
        'Event streams that describe customer, ops, and revenue flows',
        'Feature flags to roll out new automations gradually',
      ],
    },
    {
      title: '2 · AI brains & copilots',
      description:
        'Combine task-specific copilots with background agents that refine content, flows, and performance continuously.',
      items: [
        'Role-specific copilots for support, sales, and operations',
        'Autonomous agents that monitor UX, performance, SEO, and link health',
        'Evaluation harnesses so every AI change is graded before rollout',
      ],
    },
    {
      title: '3 · Governance & safety',
      description:
        'Guardrails, approvals, and observability so autonomy stays within the bounds that matter for your business.',
      items: [
        'Policy-aware prompts and red-team evaluations',
        'Change review windows for higher-risk flows and templates',
        'Dashboards that surface what agents changed and why',
      ],
    },
  ];

  const headline =
    input.goal === 'growth'
      ? 'Autonomous growth engine across marketing, sales, and lifecycle'
      : input.goal === 'efficiency'
      ? 'Automation-first operations with measurable efficiency gains'
      : input.goal === 'experience'
      ? 'AI-powered customer and employee experiences that keep improving'
      : 'AI that improves reliability, security, and compliance in the background';

  const summary = [
    STAGE_LABELS[input.stage],
    GOAL_LABELS[input.goal],
    TIME_LABELS[input.timeToValue],
  ].join(' · ');

  return {
    headline,
    summary,
    modules,
    architecture,
  };
}

export default function AISolutionsConfiguratorPage() {
  const [input, setInput] = useState<InputState>({
    stage: 'scaling',
    goal: 'growth',
    timeToValue: 'quarter',
    systems: '',
  });

  const result = useMemo(() => configureSolution(input), [input]);

  return (
    <div className="bg-slate-950/90">
      <AILabToolLayout
        title="AI Solutions Configurator"
        subtitle="Tell us where you are, what you want to improve, and which systems you rely on. Get a deterministic, in-browser blueprint of how Zion’s autonomous platform would be assembled for you."
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.35fr)]">
          <form className="space-y-6 border-b border-slate-800/80 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Company stage
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                This helps us size pilots and recommend the right level of autonomy.
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
                {(
                  [
                    ['early', STAGE_LABELS.early],
                    ['scaling', STAGE_LABELS.scaling],
                    ['enterprise', STAGE_LABELS.enterprise],
                  ] as [CompanyStage, string][]
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, stage: value }))}
                    className={`rounded-xl border px-3 py-2 text-left font-medium ${
                      input.stage === value
                        ? 'border-sky-500/70 bg-sky-500/20 text-sky-50'
                        : 'border-slate-700 bg-slate-950/70 text-slate-200 hover:border-sky-400/50 hover:text-sky-100'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Primary outcome
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Pick the outcome that matters most in the next 6–12 months.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                {(
                  [
                    ['growth', 'Growth'],
                    ['efficiency', 'Efficiency'],
                    ['experience', 'Experience'],
                    ['risk', 'Risk & reliability'],
                  ] as [PrimaryGoal, string][]
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, goal: value }))}
                    className={`rounded-full border px-3 py-1.5 font-medium ${
                      input.goal === value
                        ? 'border-emerald-500/70 bg-emerald-500/20 text-emerald-50'
                        : 'border-slate-700 bg-slate-950/70 text-slate-200 hover:border-emerald-400/50 hover:text-emerald-100'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Time to value
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                How fast do you need the first meaningful production impact?
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                {(
                  [
                    ['weeks', 'Weeks'],
                    ['quarter', 'This quarter'],
                    ['longer', 'Multi-quarter'],
                  ] as [TimeToValue, string][]
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, timeToValue: value }))}
                    className={`rounded-full border px-3 py-1.5 font-medium ${
                      input.timeToValue === value
                        ? 'border-fuchsia-500/70 bg-fuchsia-500/20 text-fuchsia-50'
                        : 'border-slate-700 bg-slate-950/70 text-slate-200 hover:border-fuchsia-400/50 hover:text-fuchsia-100'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="systems"
                className="block text-xs font-semibold uppercase tracking-wide text-slate-200"
              >
                Critical systems and data sources
              </label>
              <p className="mt-1 text-[11px] text-slate-400">
                List the tools, platforms, and data that must plug into the AI layer (e.g. Salesforce,
                HubSpot, Zendesk, ServiceNow, custom data warehouse).
              </p>
              <textarea
                id="systems"
                rows={4}
                value={input.systems}
                onChange={(event) =>
                  setInput((prev) => ({
                    ...prev,
                    systems: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/60 focus:border-sky-500 focus:ring"
                placeholder="Example: Salesforce CRM, Intercom, Jira, Snowflake, internal billing system…"
              />
              <p className="mt-1 text-[10px] text-slate-500">
                This stays in your browser — it is not sent to any server or model.
              </p>
            </div>
          </form>

          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-sm text-slate-100">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-300">
                Suggested configuration
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-50">{result.headline}</h2>
              <p className="mt-2 text-[11px] text-slate-300">{result.summary}</p>
            </section>

            <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-xs text-slate-200">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                Recommended Zion modules
              </p>
              <p className="mt-2 text-[11px] text-slate-400">
                These are the first apps we would combine to deliver impact quickly while keeping room
                for deeper autonomy over time.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {result.modules.map((mod) => (
                  <a
                    key={mod.href}
                    href={mod.href}
                    className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-3 transition hover:border-sky-400/70 hover:bg-slate-900"
                   data-cta-event="cta_view_module" data-cta-label="page">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                          {mod.pillar}
                        </p>
                        <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-0.5 text-[10px] text-slate-300">
                          View module
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-slate-50 group-hover:text-sky-200">
                        {mod.name}
                      </p>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-300">{mod.reason}</p>
                  </a>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-xs text-slate-200">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                Rollout architecture
              </p>
              <p className="mt-2 text-[11px] text-slate-400">
                A high-level view of how data, agents, and governance would be wired together.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {result.architecture.map((slice) => (
                  <div
                    key={slice.title}
                    className="rounded-xl border border-slate-800 bg-slate-900/80 p-3"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-200">
                      {slice.title}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">{slice.description}</p>
                    <ul className="mt-2 space-y-1.5">
                      {slice.items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </AILabToolLayout>
    </div>
  );
}

