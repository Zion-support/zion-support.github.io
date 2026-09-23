import Link from 'next/link';

export const metadata = {
  title: 'Weights & Biases — MLOps Platform for Experiment Tracking and Model Management',
  description: 'Weights & Biases (W&B) is the leading MLOps platform for experiment tracking, model management, and AI workflow orchestration. Used by over 800,000 AI researchers and engineers at organizations including OpenAI, Google DeepMind, NVIDIA, and Toyota Research, W&B provides a centralized system to log training runs, compare hyperparameters, visualize metrics, and version datasets and models. Its platform includes W&B Experiments (tracking), W&B Artifacts (data/model versioning), W&B Sweeps (hyperparameter optimization), and W&B Launch (distributed training jobs). W&B reduces the time from experiment to production by 60% and is the de facto standard in AI research labs worldwide.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/weights-and-biases-mlops',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Weights &amp; Biases — MLOps Platform for Experiment Tracking and Model Management</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Weights &amp; Biases (W&amp;B) is the leading MLOps platform for experiment tracking, model management, and AI workflow orchestration. Used by over 800,000 AI researchers and engineers at organizations including OpenAI, Google DeepMind, NVIDIA, and Toyota Research, W&amp;B provides a centralized system to log training runs, compare hyperparameters, visualize metrics, and version datasets and models. Its platform includes W&amp;B Experiments (tracking), W&amp;B Artifacts (data/model versioning), W&amp;B Sweeps (hyperparameter optimization), and W&amp;B Launch (distributed training jobs). W&amp;B reduces the time from experiment to production by 60% and is the de facto standard in AI research labs worldwide.</p>
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
            <li>Experiment tracking: log metrics, parameters, and outputs from every training run automatically</li>
            <li>Hyperparameter optimization: Bayesian search, grid search, and early stopping with W&amp;B Sweeps</li>
            <li>Model and dataset versioning: track lineage from raw data through trained models to deployment</li>
            <li>Collaborative reports: share interactive visualizations and comparisons with stakeholders</li>
            <li>Framework integration: native support for PyTorch, TensorFlow, JAX, Hugging Face, and scikit-learn</li>
            <li>Artifact registry: version, store, and retrieve models, datasets, and pipelines programmatically</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Never lose an experiment — every run is logged, searchable, and comparable</li>
            <li>Find optimal hyperparameters 10x faster with Bayesian optimization sweeps</li>
            <li>Reproduce any result with complete lineage from data version to model checkpoint</li>
            <li>Used by OpenAI, Google DeepMind, NVIDIA, and 800,000+ AI practitioners</li>
            <li>Reduce time from experiment to production deployment by 60%</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (personal, unlimited experiments, 100GB storage)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$50/user/month (teams, 1TB storage, advanced reports)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (SSO, on-premise, dedicated support, custom storage)</p>
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
