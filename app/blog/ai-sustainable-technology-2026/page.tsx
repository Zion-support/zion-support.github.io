// @ts-nocheck
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-lime-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link href="/blog" className="text-emerald-700 hover:text-emerald-800">← Back to Blog</Link>
        </nav>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Sustainable Technology 2026: Low-Carbon AI Systems
          </h1>
          <p className="text-gray-600">January 22, 2026 • 12 min read • Strategy</p>
        </header>
        <article className="prose prose-emerald max-w-none">
          <p>
            Building sustainable AI requires model-choice scorecards, datacenter-aware routing, and carbon-aware
            scheduling. This primer covers practical tooling and KPIs for greener AI.
          </p>
          <h2>Key Practices</h2>
          <ul>
            <li>Quantization, distillation, and adaptive routing</li>
            <li>Embodied energy accounting and carbon budgets</li>
            <li>Observability for emissions and efficiency</li>
          </ul>
          <p>
            Enterprises can reduce AI-related emissions 20–40% while improving latency and costs through disciplined
            engineering.
          </p>
        </article>
        <div className="mt-12">
          <Link href="/blog" className="text-emerald-700 font-semibold hover:text-emerald-800">Browse more articles →</Link>
        </div>
      </div>
    </div>
  );
}

