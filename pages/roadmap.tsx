import Head from 'next / head',
import React, { useMemo, useState } from 'react',
;
type RoadmapInputs = {
  milestones: string,
  keywords: string,
  priorities: string;
},
type Stage = {
  id: number,
  name: string,
  theme: string,
  objective: string,
  highlights: string[],
metrics: string[];
},
function generate_stages ({ milestones, keywords, priorities }: RoadmapInputs): Stage[] {
  const keyword_list = keywords;
    .split (/, |\n/);
    .map ((s) => s.trim ());
    .filter (Boolean),
  const priority_list = priorities;
    .split (/, |\n/);
    .map ((s) => s.trim ());
    .filter (Boolean),
  const base_themes = [;
    'FoundationsTrust LayerAI - Native MatchingReputation & IdentityPayments & EscrowMarketplace LiquiditySovereign WorkflowsOpen Protocol Interfaces',
    'Governance & OwnershipGlobal Scale'],
  return base_themes.map ((theme, index) => {
    const id = index + 1,
    const name = `Zion v${id}`,
    const objective = `Advance ${theme.toLowerCase ()} informed by: ${keyword_list.join () || 'core principles'}, focus: ${
      priority_list.join () || 'execution and learning';
    }.`,
    const highlights: string[] = [;
      index === 0 && 'Design system, domain model, and initial data architecture',
      index === 1 && 'Verifiable credentials, attestations, and dispute primitives',
      index === 2 && 'AI - assisted scoping, matching, and brief generation',
      index === 3 && 'Reputation graph, portable profiles, contribution proofs',
      index === 4 && 'Programmable escrow, milestone releases, stable on / off - ramps',
      index === 5 && 'Liquidity flywheel: supply activation, demand orchestration',
      index === 6 && 'Sovereign workspaces: contracts, IP, revenue share automations',
      index === 7 && 'Public APIs / SDKs, indexer services, client ecosystem',
      index === 8 && 'Progressive decentralization, contributor ownership, councils',
      index === 9 && 'Regionalization, localization, reliability, and performance'];
      .filter (Boolean);
      .map ((s) => String (s)),
    const metrics: string[] = [;
      'Weekly active contributors_verified engagements (intros, briefs, scopes)On - chain / escrow settlement volume_time - to - hire and time - to - pay_retention and NPS'],
    return { id, name, theme, objective, highlights, metrics }
  });
}
function defaultOperatorPrompt(): string {
  return `You are Zion's Product Operator.

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
      .map((s) => String(s)),

    const metrics: string[] = [
      'Weekly active contributorsVerified engagements (intros, briefs, scopes)On-chain/escrow settlement volumeTime-to-hire and time-to-payRetention and NPS'],

    return { id, name, theme, objective, highlights, metrics }
  })

}

function defaultOperatorPrompt(): string {_return `You are Zion's Product Operator.

Inputs you will receive:
- milestones (string list)
- keywords (string list)
- priorities (string list)
Goals:
1) Produce a 10-stage roadmap labeled Zion v1 → v10
2) For each stage: theme, objective, 3-5 highlights, 3-5 measurable metrics
3) Ensure alignment with AI-native, trustless, talent-first, and sovereign tools ethos
4) Include explicit risks and validation signals per stage
5) Output concise, skimmable, exec-ready text
Format:
function defaultOperatorPrompt (): string {
  return `You are Zion's Product Operator.;
Inputs you will receive:;
- milestones (string list);
- keywords (string list);
- priorities (string list);
Goals:;
1) Produce a 10 - stage roadmap labeled Zion v1 → v10;
2) For each stage: theme, objective, 3 - 5 highlights, 3 - 5 measurable metrics;
3) Ensure alignment with AI - native, trustless, talent - first, and sovereign tools ethos;
4) Include explicit risks and validation signals per stage;
5) Output concise, skimmable, exec - ready text;
Format:;
Zion v{n} — {theme}
Objective: ...;
Highlights:;
- ...;
Metrics:;
- ...;
Risks:;
- ...;
Validation:;
- ...;
`;
}
    () => generateStages({ milestones, keywords, priorities });
    [milestones, keywords, priorities]
  )
  const operatorPrompt = useMemo(() => defaultOperatorPrompt(), [])
  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(operatorPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500)
export default function RoadmapPage (): JSX.Element {
  const [milestones, set_milestones] = useState ('MVP live, First 50 users, First 10 paid engagements'),
  const [keywords, set_keywords] = useState ('AI - native, trustless, talent - first, sovereign tools'),
  const [priorities, set_priorities] = useState ('governance, scale, regional expansion'),
  const [copied, set_copied] = useState (false),
  const stages = useMemo (
    () => generate_stages ({ milestones, keywords, priorities }),
    [milestones, keywords, priorities]),
  const operator_prompt = useMemo (() => defaultOperatorPrompt (), []),
  const copy_prompt = async () => {
    try {
      await navigator.clipboard.write_text (operator_prompt),
      set_copied (true),
      set_timeout (() => set_copied (false), 1500);
    } catch {
      set_copied (false);
    }
  },
  return (
    <>;
      <Head>;
        <title > Zion Roadmap</title>;
        <meta name="description" content="Zion 10 - stage product evolution and roadmap generator." />;
      </Head>;
      <main className="min - h-screen bg - white text - gray - 900">;
        <div className="mx - auto w - full max - w-6xl px - 6 py - 12">;
          <header className="mb - 8">;
            <h1 className="text - 4xl font - extrabold tracking - tight sm:text - 5xl">Zion Roadmap</h1>;
            <p className="mt - 3 text - gray - 700">Public - facing product evolution from v1 → v10 with a generator for operators.</p>;
          </header>;
          <section className="mb - 10 grid gap - 6 rounded - lg border border - gray - 200 bg - gray - 50 p - 6 md:grid - cols - 3">;
            <div className="md:col - span - 1">;
              <h2 className="text - xl font - semibold">Generator Inputs</h2>;
              <p className="mt - 1 text - sm text - gray - 600">Tune the roadmap with current context and focus.</p>;
            </div>;
            <div className="md:col - span - 2 grid gap - 4">;
              <div>;
                <label className="block text - sm font - medium text - gray - 700">Milestones achieved so far</label>;
                <textarea;
                  value={milestones}
                  on_change={(e) => set_milestones (e.target.value)}
                  rows={3}
                  className="mt - 1 w - full rounded - md border border - gray - 300 bg - white p - 3 shadow - sm focus:border - black focus:outline - none";
                  placeholder="e.g., MVP live, 100 design partners, 1k weekly active contributors";
                />;
              </div>;
              <div>;
                <label className="block text - sm font - medium text - gray - 700">Vision keywords</label>;
                <input;
                  value={keywords}
                  on_change={(e) => set_keywords (e.target.value)}
                  className="mt - 1 w - full rounded - md border border - gray - 300 bg - white p - 3 shadow - sm focus:border - black focus:outline - none";
                  placeholder="e.g., AI - native, trustless, talent - first, sovereign tools";
                />;
              </div>;
              <div>;
                <label className="block text - sm font - medium text - gray - 700">Upcoming priorities</label>;
                <input;
                  value={priorities}
          <section className="mb-12">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Operator Prompt</h2>
              <button
                onClick={copyPrompt}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="whitespace-pre-wrap rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">{operatorPrompt}</pre>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Zion v1 → v10</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {stages.map((stage) => (
                <article key={stage.id} className="rounded-lg border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-lg font-bold">{stage.name} — {stage.theme}</h3>
                  <p className="mt-2 text-gray-700"><span className="font-semibold">Objective:</span> {stage.objective}</p>
                  <div className="mt-3">
                    <p className="font-semibold">Highlights</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">

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
                  value={milestones}
                  onChange={(e) => setMilestones(e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <label className=&quot;block text-sm font-medium text-gray-700&quot;>Vision keywords</label>
                <input
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className=&quot;mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none&quot;
                  placeholder=&quot;e.g., AI-native, trustless, talent-first, sovereign tools&quot;
                />
              </div>
              <div>
                <label className=&quot;block text-sm font-medium text-gray-700&quot;>Upcoming priorities</label>
                <input
                  value={priorities}
                  onChange={(e) => setPriorities(e.target.value)}
                  className=&quot;mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none&quot;
                  placeholder=&quot;e.g., governance, scale, regional expansion&quot;
                />
              </div>
            </div>
          </section>

          <section className=&quot;mb-12&quot;>
            <div className=&quot;mb-3 flex items-center justify-between gap-3&quot;>
              <h2 className=&quot;text-xl font-semibold&quot;>Operator Prompt</h2>
              <button
                onClick={copyPrompt}
                className=&quot;rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900&quot;
              >
                {_copied ? 'Copied' : 'Copy'}
              </button>
            </div>
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
<div className="mt-3">
                    <p className="font-semibold">Metrics</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      {stage.metrics.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold">Risks</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
                      <li>Scope creep, unclear ownership</li>
                      <li>Model hallucinations or bias affecting matches</li>
                      <li>Regulatory and payment-compliance variability</li>
                    </ul>
                  </div>
<div className="mt-3">
                    <p className="font-semibold">Validation</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-800">
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
                  on_change={(e) => set_priorities (e.target.value)}
                  className="mt - 1 w - full rounded - md border border - gray - 300 bg - white p - 3 shadow - sm focus:border - black focus:outline - none";
                  placeholder="e.g., governance, scale, regional expansion";
                />;
              </div>;
            </div>;
          </section>;
          <section className="mb - 12">;
            <div className="mb - 3 flex items - center justify - between gap - 3">;
              <h2 className="text - xl font - semibold">Operator Prompt</h2>;
              <button;
                on_click={copy_prompt}
                className="rounded - md bg - black px - 3 py - 2 text - sm font - semibold text - white shadow - sm hover:bg - gray - 900";
              >;
                {copied ? 'Copied' : 'Copy'}
              </button>;
            </div>;
            <pre className="whitespace - pre - wrap rounded - lg border border - gray - 200 bg - gray - 50 p - 4 text - sm text - gray - 800">{operator_prompt}</pre>;
          </section>;
          <section>;
            <h2 className="mb - 4 text - xl font - semibold">Zion v1 → v10</h2>;
            <div className="grid gap - 6 md:grid - cols - 2">;
              {stages.map ((stage) => (
                <article key={stage.id} className="rounded - lg border border - gray - 200 p - 5 shadow - sm">;
                  <h3 className="text - lg font - bold">{stage.name} — {stage.theme}</h3>;
                  <p className="mt - 2 text - gray - 700"><span className="font - semibold">Objective:</span> {stage.objective}</p>;
                  <div className="mt - 3">;
                    <p className="font - semibold">Highlights</p>;
                    <ul className="mt - 1 list - disc space - y-1 pl - 5 text - gray - 800">;
                      {stage.highlights.map ((h, i) => (
                        <li key={i}>{h}</li>))}
                    </ul>;
                  </div>;
                  <div className="mt - 3">;
                    <p className="font - semibold">Metrics</p>;
                    <ul className="mt - 1 list - disc space - y-1 pl - 5 text - gray - 800">;
                      {stage.metrics.map ((m, i) => (
                        <li key={i}>{m}</li>))}
                    </ul>;
                  </div>;
                  <div className="mt - 3">;
                    <p className="font - semibold">Risks</p>;
                    <ul className="mt - 1 list - disc space - y-1 pl - 5 text - gray - 800">;
                      <li > Scope creep, unclear ownership</li>;
                      <li > Model hallucinations or bias affecting matches</li>;
                      <li > Regulatory and payment - compliance variability</li>;
                    </ul>;
                  </div>;
                  <div className="mt - 3">;
                    <p className="font - semibold">Validation</p>;
                    <ul className="mt - 1 list - disc space - y-1 pl - 5 text - gray - 800">;
                      <li > Leading indicator movement on activation and retention</li>;
                      <li > Faster time - to - hire and time - to - pay</li>;
                      <li > Positive contributor NPS and dispute resolution rates</li>;
                    </ul>;
                  </div>;
                </article>))}
            </div>;
          </section>;
        </div>;
      </main>;
    </>);
}