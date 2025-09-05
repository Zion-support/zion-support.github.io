<<<<<<< HEAD
import Head from 'next/head',
import React, { useMemo, useState } from 'react',

type RoadmapInputs = {
  milestones: string,
  keywords: string,
  priorities: string
},

type Stage = {
  id: number,
  name: string,
  theme: string,
  objective: string,
  highlights: string[],
  metrics: string[]
},

function generateStages({ milestones, keywords, priorities }: RoadmapInputs): Stage[] {
  const keywordList = keywords
    .split(/,|\n/)
    .map((s) => s.trim())
    .filter(Boolean),

  const priorityList = priorities
    .split(/,|\n/)
    .map((s) => s.trim())
    .filter(Boolean),

  const baseThemes = [
    'FoundationsTrust LayerAI-Native MatchingReputation & IdentityPayments & EscrowMarketplace LiquiditySovereign WorkflowsOpen Protocol Interfaces',
    'Governance & OwnershipGlobal Scale'],

  return baseThemes.map((theme, index) => {
    const id = index + 1,
    const name = `Zion v${id}`,

    const objective = `Advance ${theme.toLowerCase()} informed by: ${keywordList.join() || 'core principles'}, focus: ${
      priorityList.join() || 'execution and learning'
    }.`,
=======
import Head from 'next/head';
import React, {_useMemo, _useState} from 'react';

type RoadmapInputs = {_milestones: string;
  keywords: string;
  priorities: string;};

type Stage = {_id: number;
  name: string;
  theme: string;
  objective: string;
  highlights: string[];
  metrics: string[];};

function generateStages(_{_milestones, _keywords, _priorities}: RoadmapInputs): Stage[] {_const _keywordList = keywords
    .split(/, _|\n/)
    .map(_(s) => s.trim())
    .filter(Boolean);

  const _priorityList = priorities
    .split(/, _|\n/)
    .map(_(s) => s.trim())
    .filter(Boolean);

  const _baseThemes = [
    'Foundations', _'Trust Layer', _'AI-Native Matching', _'Reputation & Identity', _'Payments & Escrow', _'Marketplace Liquidity', _'Sovereign Workflows', _'Open Protocol Interfaces', _'Governance & Ownership', _'Global Scale'];

  return baseThemes.map(_(theme, _index) => {
    const _id = index + 1;
    const _name = `Zion v${id}`;

    const _objective = `Advance ${_theme.toLowerCase()} informed by: ${_keywordList.join(', _') || 'core principles'}; focus: ${_priorityList.join(', _') || 'execution and learning'}.`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const highlights: string[] = [
      index === 0 && 'Design system, domain model, and initial data architecture',
      index === 1 && 'Verifiable credentials, attestations, and dispute primitives',
      index === 2 && 'AI-assisted scoping, matching, and brief generation',
      index === 3 && 'Reputation graph, portable profiles, contribution proofs',
      index === 4 && 'Programmable escrow, milestone releases, stable on/off-ramps',
      index === 5 && 'Liquidity flywheel: supply activation, demand orchestration',
      index === 6 && 'Sovereign workspaces: contracts, IP, revenue share automations',
      index === 7 && 'Public APIs/SDKs, indexer services, client ecosystem',
      index === 8 && 'Progressive decentralization, contributor ownership, councils',
      index === 9 && 'Regionalization, localization, reliability, and performance']
      .filter(Boolean)
<<<<<<< HEAD
      .map((s) => String(s)),
=======
      .map(_(s) => String(s));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const metrics: string[] = [
      'Weekly active contributorsVerified engagements (intros, briefs, scopes)On-chain/escrow settlement volumeTime-to-hire and time-to-payRetention and NPS'],

<<<<<<< HEAD
    return { id, name, theme, objective, highlights, metrics }
  })
=======
    return {_id, _name, _theme, _objective, _highlights, _metrics};
  });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

function defaultOperatorPrompt(): string {_return `You are Zion's Product Operator.

Inputs you will receive:
- milestones (string list)
- keywords (string list)
- priorities (string list)

Goals:
1) Produce a 10-stage roadmap labeled Zion v1 → v10
2) For each stage: theme, _objective, _3-5 highlights, _3-5 measurable metrics
3) Ensure alignment with AI-native, _trustless, _talent-first, _and sovereign tools ethos
4) Include explicit risks and validation signals per stage
5) Output concise, _skimmable, _exec-ready text

Format:
Zion v{n} — {_theme}
Objective: ...
Highlights:
- ...
Metrics:
- ...
Risks:
- ...
Validation:
- ...
`
}

<<<<<<< HEAD
export default function RoadmapPage(): JSX.Element {
  const [milestones, setMilestones] = useState('MVP live, First 50 users, First 10 paid engagements'),
  const [keywords, setKeywords] = useState('AI-native, trustless, talent-first, sovereign tools'),
  const [priorities, setPriorities] = useState('governance, scale, regional expansion'),
  const [copied, setCopied] = useState(false),
=======
export default function RoadmapPage(): JSX.Element {_const [milestones, _setMilestones] = useState('MVP live; First 50 users; First 10 paid engagements');
  const [keywords, _setKeywords] = useState('AI-native, _trustless, _talent-first, _sovereign tools');
  const [priorities, _setPriorities] = useState('governance, _scale, _regional expansion');
  const [copied, _setCopied] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _stages = useMemo(_() => generateStages({ milestones, _keywords, _priorities}),
    [milestones, keywords, priorities]
  ),

<<<<<<< HEAD
  const operatorPrompt = useMemo(() => defaultOperatorPrompt(), []),

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(operatorPrompt),
      setCopied(true),
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  },
=======
  const _operatorPrompt = useMemo__(() => defaultOperatorPrompt(), []);

  const _copyPrompt = async () => {_try {
      await navigator.clipboard.writeText(operatorPrompt);
      setCopied(true);
      setTimeout__(() => setCopied(false), _1500);} catch {_setCopied(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>Zion Roadmap</title>
        <meta name=&quot;description&quot; content=&quot;Zion 10-stage product evolution and roadmap generator.&quot; />
      </Head>
      <main className=&quot;min-h-screen bg-white text-gray-900&quot;>
        <div className=&quot;mx-auto w-full max-w-6xl px-6 py-12&quot;>
          <header className=&quot;mb-8&quot;>
            <h1 className=&quot;text-4xl font-extrabold tracking-tight sm:text-5xl&quot;>Zion Roadmap</h1>
            <p className=&quot;mt-3 text-gray-700&quot;>Public-facing product evolution from v1 → v10 with a generator for operators.</p>
          </header>

          <section className=&quot;mb-10 grid gap-6 rounded-lg border border-gray-200 bg-gray-50 p-6 md:grid-cols-3&quot;>
            <div className=&quot;md:col-span-1&quot;>
              <h2 className=&quot;text-xl font-semibold&quot;>Generator Inputs</h2>
              <p className=&quot;mt-1 text-sm text-gray-600&quot;>Tune the roadmap with current context and focus.</p>
            </div>
            <div className=&quot;md:col-span-2 grid gap-4&quot;>
              <div>
                <label className=&quot;block text-sm font-medium text-gray-700&quot;>Milestones achieved so far</label>
                <textarea
<<<<<<< HEAD
                  value={milestones}
                  onChange={(e) => setMilestones(e.target.value)}
                  rows={3}
<<<<<<< HEAD
=======
                  value={_milestones}
                  onChange={_(e) => setMilestones(e.target.value)}
                  rows={_3}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none"
                  placeholder="e.g., MVP live, 100 design partners, 1k weekly active contributors"
=======
                  className=&quot;mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none&quot;
                  placeholder=&quot;e.g., MVP live; 100 design partners; 1k weekly active contributors&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                />
              </div>
              <div>
                <label className=&quot;block text-sm font-medium text-gray-700&quot;>Vision keywords</label>
                <input
<<<<<<< HEAD
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className=&quot;mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none&quot;
                  placeholder=&quot;e.g., AI-native, trustless, talent-first, sovereign tools&quot;
=======
                  value={_keywords}
                  onChange={_(_e) => setKeywords(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none"
                  placeholder="e.g., AI-native, trustless, talent-first, sovereign tools"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
              <div>
                <label className=&quot;block text-sm font-medium text-gray-700&quot;>Upcoming priorities</label>
                <input
<<<<<<< HEAD
                  value={priorities}
                  onChange={(e) => setPriorities(e.target.value)}
                  className=&quot;mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none&quot;
                  placeholder=&quot;e.g., governance, scale, regional expansion&quot;
=======
                  value={_priorities}
                  onChange={_(_e) => setPriorities(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none"
                  placeholder="e.g., governance, scale, regional expansion"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            </div>
          </section>

          <section className=&quot;mb-12&quot;>
            <div className=&quot;mb-3 flex items-center justify-between gap-3&quot;>
              <h2 className=&quot;text-xl font-semibold&quot;>Operator Prompt</h2>
              <button
<<<<<<< HEAD
                onClick={copyPrompt}
                className=&quot;rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900&quot;
=======
                onClick={_copyPrompt}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_copied ? 'Copied' : 'Copy'}
              </button>
            </div>
<<<<<<< HEAD
            <pre className=&quot;whitespace-pre-wrap rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800&quot;>{operatorPrompt}</pre>
          </section>

          <section>
            <h2 className=&quot;mb-4 text-xl font-semibold&quot;>Zion v1 → v10</h2>
            <div className=&quot;grid gap-6 md:grid-cols-2&quot;>
              {stages.map((stage) => (
                <article key={stage.id} className=&quot;rounded-lg border border-gray-200 p-5 shadow-sm&quot;>
                  <h3 className=&quot;text-lg font-bold&quot;>{stage.name} — {stage.theme}</h3>
                  <p className=&quot;mt-2 text-gray-700&quot;><span className=&quot;font-semibold&quot;>Objective:</span> {stage.objective}</p>
                  <div className=&quot;mt-3&quot;>
                    <p className=&quot;font-semibold&quot;>Highlights</p>
                    <ul className=&quot;mt-1 list-disc space-y-1 pl-5 text-gray-800&quot;>
                      {stage.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className=&quot;mt-3&quot;>
                    <p className=&quot;font-semibold&quot;>Metrics</p>
                    <ul className=&quot;mt-1 list-disc space-y-1 pl-5 text-gray-800&quot;>
                      {stage.metrics.map((m, i) => (
                        <li key={i}>{m}</li>
=======
            <pre className="whitespace-pre-wrap rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">{_operatorPrompt}</pre>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Zion v1 → v10</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {_stages.map(_(stage) => (_<article key={stage.id} className="rounded-lg border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-lg font-bold">{_stage.name} — {_stage.theme}</h3>
                  <p className="mt-2 text-gray-700"><span className="font-semibold">Objective:</span> {_stage.objective}</p>
                  <div className="mt-3">
                    <p className="font-semibold">Highlights</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      {_stage.highlights.map((h, _i) => (
                        <li key={i}>{_h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold">Metrics</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      {_stage.metrics.map(_(m, _i) => (
                        <li key={i}>{_m}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                  <div className="mt-3">
                    <p className="font-semibold">Risks</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      <li>Scope creep, unclear ownership</li>
=======
                  <div className=&quot;mt-3&quot;>
                    <p className=&quot;font-semibold&quot;>Risks</p>
                    <ul className=&quot;mt-1 list-disc space-y-1 pl-5 text-gray-800&quot;>
                      <li>Scope creep; unclear ownership</li>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                      <li>Model hallucinations or bias affecting matches</li>
                      <li>Regulatory and payment-compliance variability</li>
                    </ul>
                  </div>
                  <div className=&quot;mt-3&quot;>
                    <p className=&quot;font-semibold&quot;>Validation</p>
                    <ul className=&quot;mt-1 list-disc space-y-1 pl-5 text-gray-800&quot;>
                      <li>Leading indicator movement on activation and retention</li>
                      <li>Faster time-to-hire and time-to-pay</li>
                      <li>Positive contributor NPS and dispute resolution rates</li>
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}