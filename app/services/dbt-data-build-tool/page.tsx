import Link from 'next/link';

export const metadata = {
  title: 'dbt (Data Build Tool) — Analytics Engineering Platform',
  description: 'dbt (data build tool) is the industry-standard analytics engineering platform that transforms raw warehouse data into reliable, tested, documented data models. Created by dbt Labs, it enables analytics engineers to apply software engineering best practices — version control, testing, CI/CD, and modularity — to SQL-based data transformations. With 40,000+ companies using dbt including HubSpot, Vimeo, and Cisco, and a community of 300,000+ analytics engineers, dbt has defined the modern data stack. dbt Cloud provides a hosted development environment with job scheduling, observability, and a semantic layer for consistent metric definitions.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/dbt-data-build-tool',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">dbt (Data Build Tool) — Analytics Engineering Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">dbt (data build tool) is the industry-standard analytics engineering platform that transforms raw warehouse data into reliable, tested, documented data models. Created by dbt Labs, it enables analytics engineers to apply software engineering best practices — version control, testing, CI/CD, and modularity — to SQL-based data transformations. With 40,000+ companies using dbt including HubSpot, Vimeo, and Cisco, and a community of 300,000+ analytics engineers, dbt has defined the modern data stack. dbt Cloud provides a hosted development environment with job scheduling, observability, and a semantic layer for consistent metric definitions.</p>
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
            <li>SQL-first transformations: write data models in SQL with Jinja templating for DRY, reusable code</li>
            <li>Built-in testing: schema tests, data quality tests, and custom assertions for every model</li>
            <li>Documentation auto-generation: data lineage graphs and column-level docs from YAML metadata</li>
            <li>Incremental models: process only new data for 10-100x faster pipeline runs</li>
            <li>dbt Semantic Layer: define metrics once, consume consistently across every BI tool</li>
            <li>dbt Cloud IDE: browser-based development with version control, job scheduling, and observability</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Transform raw warehouse data into reliable, tested, documented data products</li>
            <li>Apply software engineering best practices (Git, CI/CD, testing) to analytics workflows</li>
            <li>40,000+ companies trust dbt including HubSpot, Vimeo, Cisco, and Monzo</li>
            <li>Define metrics once in dbt Semantic Layer — consistent KPIs across every dashboard</li>
            <li>Largest analytics engineering community: 300,000+ practitioners and 700+ packages</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (dbt Core, open source, unlimited local development)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$100/developer/month (dbt Cloud, job scheduling, CI/CD)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (SSO, audit logs, dedicated support, custom hosting)</p>
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
