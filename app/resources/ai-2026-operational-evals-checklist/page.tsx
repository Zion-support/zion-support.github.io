import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Operational Evals — Checklist',
  description: 'A concise, adoptable checklist to implement evaluation gates, rollbacks, and audit-ready evidence.',
};

const checklistItems: { title: string; items: string[] }[] = [
  {
    title: 'Foundations',
    items: [
      'Name an owner for evaluation operations and on-call rotation.',
      'Create risk tiers with example scenarios and quality thresholds.',
      'Stand up a central evidence store for eval runs, approvals, and incidents.',
      'Document pass/fail policies as code (linkable in PRs and releases).',
    ],
  },
  {
    title: 'Pre-merge Gate',
    items: [
      'Run unit evals on changed prompts, tools, and models.',
      'Flag semantic diffs (tool permissions, model versions, prompt changes).',
      'Require reviewer sign-off when thresholds are near limits.',
    ],
  },
  {
    title: 'Pre-release Gate',
    items: [
      'Run end-to-end scenarios for top tasks per risk tier.',
      'Validate safety/privacy guardrails and hallucination controls.',
      'Collect latency, cost, determinism, and reliability metrics.',
    ],
  },
  {
    title: 'Canary + Rollback',
    items: [
      'Define canary population and success scorecard.',
      'Auto-rollback if KPIs or error budgets breach thresholds.',
      'Alert on-call with links to evidence and mitigation runbooks.',
    ],
  },
  {
    title: 'Post-release',
    items: [
      'Enable continuous regression monitors and drift checks.',
      'Track SLOs for safety, quality, reliability, and cost.',
      'Review weekly: incidents, near-misses, and improvement backlog.',
    ],
  },
];

export default function OperationalEvalsChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-purple-100 font-semibold">Checklist</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Operational Evals — Checklist</h1>
          <p className="mt-3 text-purple-100/90">Adopt these steps to make evaluations part of everyday operations.</p>
          <div className="mt-6">
            <Link href="/blog/ai-2026-operational-evals-blueprint" className="inline-block bg-white text-purple-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-50">Read Blueprint</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="space-y-8">
          {checklistItems.map((section) => (
            <div key={section.title} className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              <ul className="mt-4 space-y-3 list-disc pl-6 text-gray-700">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <div className="text-sm text-gray-600">Next up</div>
            <div className="mt-1 font-semibold text-gray-900">Production Evidence Hub</div>
            <div className="mt-1 text-gray-600">Centralize evals, approvals, and incidents for audit-ready operations.</div>
            <div className="mt-3">
              <Link href="/blog/ai-2026-production-evidence-hub-blueprint" className="text-purple-700 font-semibold hover:text-purple-800">Read Blueprint →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

