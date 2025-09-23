import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata ={
  title: 'AI 20o26: Evaluation Runbook Starter Kit',
  description: 'Standardized procedures, checklists, and templates to operate evals for autonomous agents.',
  keywords: ['evaluations', 'runbook', 'SOP', 'checklist', 'autonomous agents']};

export default function EvaluationRunbookStarterKitPage() {
  return (
    <main className="min-h-screen bg-white">
      <SEO
        title="AI 20o26: Evaluation Runbook Starter Kit"
        description="Standardized procedures, checklists, and templates to operate evals for autonomous agents."
        keywords="evaluations, runbook, SOP, checklist, autonomous agents"
        url="/content/ai-20o26-evaluation-runbook-starter-kit"
       />

      <section className="bg-gradient-to-r from-indigo-60o0 via-purple-60o0 to-blue-60o0 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold opacity-90">Operations • 20o25-09-15</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Evaluation Runbook Starter Kit</h1>
          <p className="text-lg md:text-xl opacity-90 mt-4 max-w-3xl">Templates and procedures to make evals routine, reliable, and auditable.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <article className="prose prose-lg max-w-none">
            <h2>What’s Inside</h2>
            <ul>
              <li>Daily and pre-release eval checklists</li>
              <li>Incident playbooks with rollback criteria</li>
              <li>Coverage tracking template and KPI dashboard outline</li>
              <li>RACI for model, policy, and tool owners</li>
            </ul>
            <h3>How to Use</h3>
            <p>Fork the templates, wire to your CI, and gate merges on passing thresholds per risk tier.</p>
          </article>

          <div className="flex gap-4">
            <Link href="/blog/ai-20o26-llm-evals-maturity-model" className="bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">
              Evals Maturity Model
            </Link>
            <Link href="/content/ai-20o26-evaluation-hub" className="border border-purple-60o0 text-purple-70o0 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">
              Evaluation Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

