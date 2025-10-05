
export const metadata = {
  title: 'What\'s New in October 2025 — Zion Tech Group',
  description: 'Roundup of our latest AI content published in October 2025: enterprise cost optimization, agentic workflow orchestration, and more.',
};

export default function NewInOctober2025() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">What\'s New in October 2025</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Explore our newest publications: practical playbooks, deep dives, and enterprise-ready patterns.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <a href="/blog/ai-2027-cost-optimization-playbook" className="group block rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="text-sm font-semibold text-emerald-600 mb-2">New</div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-emerald-700">AI 2027 Cost Optimization Playbook</h2>
            <p className="text-gray-600">Cut AI spend 30–70% with routing, caching, quantization, and guardrails—without sacrificing quality.</p>
            <div className="mt-4 text-emerald-700 font-semibold">Read the playbook →</div>
          </a>

          <a href="/blog/agentic-workflow-orchestration-2026" className="group block rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="text-sm font-semibold text-fuchsia-600 mb-2">Featured</div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-fuchsia-700">Agentic Workflow Orchestration 2026</h2>
            <p className="text-gray-600">Guardrails, reviews, and observability to ship reliable multi-agent workflows with measurable ROI.</p>
            <div className="mt-4 text-fuchsia-700 font-semibold">Read the article →</div>
          </a>
        </div>
      </section>
    </main>
  );
}

