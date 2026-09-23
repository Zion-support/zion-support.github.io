import Link from 'next/link';

export const metadata = {
  title: 'Arize AI — Enterprise AI Observability and Governance Platform | Zion Tech Group',
  description: 'Arize AI is the leading enterprise AI observability and governance platform that helps organizations monitor, explain, and improve production AI and LLM applications. It provides end-to-end visibility into model performance, data drift, bias detection, and LLM prompt-response quality, enabling responsible AI deployment at scale. Used by Apple, Airbnb, and Stanford Medicine, Arize AI supports every major ML framework and LLM provider (OpenAI, Anthropic, Google, Cohere) with automatic monitoring, alerting, and root cause analysis. Its Phoenix open-source library provides local debugging and evaluation for LLM applications, while the Arize platform delivers enterprise-grade monitoring, governance dashboards, and compliance reporting.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/arize-ai-observability-governance',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Arize AI — Enterprise AI Observability and Governance Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Arize AI is the leading enterprise AI observability and governance platform that helps organizations monitor, explain, and improve production AI and LLM applications. It provides end-to-end visibility into model performance, data drift, bias detection, and LLM prompt-response quality, enabling responsible AI deployment at scale. Used by Apple, Airbnb, and Stanford Medicine, Arize AI supports every major ML framework and LLM provider (OpenAI, Anthropic, Google, Cohere) with automatic monitoring, alerting, and root cause analysis. Its Phoenix open-source library provides local debugging and evaluation for LLM applications, while the Arize platform delivers enterprise-grade monitoring, governance dashboards, and compliance reporting.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Model performance monitoring: track accuracy, drift, and degradation in real-time</li>
            <li>LLM observability: monitor prompt-response quality, token usage, and hallucination rates</li>
            <li>Bias and fairness detection: automated bias scoring across demographic segments</li>
            <li>Data drift detection: identify when production data diverges from training distributions</li>
            <li>Root cause analysis: automatically trace performance degradation to specific data segments</li>
            <li>Compliance reporting: generate audit-ready reports for EU AI Act, NIST, and internal governance</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Detect model degradation before it impacts customers — proactive monitoring and alerting</li>
            <li>Ensure responsible AI with automated bias detection and fairness scoring</li>
            <li>Meet EU AI Act and NIST AI RMF compliance with audit-ready governance reports</li>
            <li>Monitor every LLM provider (OpenAI, Anthropic, Google) in a unified platform</li>
            <li>Trusted by Apple, Airbnb, Stanford Medicine, and leading AI-first companies</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (Phoenix open-source library, local LLM evaluation)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$250/month (Arize Cloud, 50M predictions monitored)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (unlimited scale, on-premise, SSO, dedicated support)</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
