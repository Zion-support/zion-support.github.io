import Link from 'next/link';

export const metadata = {
  title: 'IBM AI Factsheets — Enterprise AI Governance & Compliance',
  description: 'IBM AI Factsheets provides end-to-end AI model governance, documenting model provenance, training data lineage, bias metrics, and regulatory compliance status. As AI regulation accelerates globally (EU AI Act, NIST AI RMF, Singapore Model AI Governance), AI Factsheets automates the compliance documentation that enterprises need to deploy AI responsibly and legally.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ibm-ai-factsheets-governance',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">IBM AI Factsheets — Enterprise AI Governance &amp; Compliance</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">IBM AI Factsheets provides end-to-end AI model governance, documenting model provenance, training data lineage, bias metrics, and regulatory compliance status. As AI regulation accelerates globally (EU AI Act, NIST AI RMF, Singapore Model AI Governance), AI Factsheets automates the compliance documentation that enterprises need to deploy AI responsibly and legally.</p>
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
            <li>Automated model documentation: training data, hyperparameters, bias test results</li>
            <li>EU AI Act compliance mapping with automated risk tier classification</li>
            <li>NIST AI Risk Management Framework (AI RMF) aligned assessment workflows</li>
            <li>Real-time bias and fairness monitoring in production AI systems</li>
            <li>Explainability reports: SHAP, LIME, and counterfactual explanations generated automatically</li>
            <li>Audit trail and version control for all model changes and deployments</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Avoid EU AI Act fines up to 7% of global revenue for non-compliant AI</li>
            <li>Reduce AI model audit preparation from weeks to hours</li>
            <li>Detect and remediate model drift and demographic bias in real time</li>
            <li>Board-ready AI governance reports generated automatically</li>
            <li>Accelerate AI deployment by satisfying compliance requirements faster</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (open-source toolkit)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$5,000/month (Watsonx.governance)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom ($100K+/year)</p>
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
