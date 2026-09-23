import Link from 'next/link';

export const metadata = {
  title: 'Backstage — Spotify Open-Source Developer Portal Platform',
  description: 'Backstage is an open-source developer portal platform originally built at Spotify and now a CNCF Graduated project. It provides a unified software catalog, developer self-service templates, plugin ecosystem, and technical documentation hub for engineering organizations. With 3,000+ adopters including American Airlines, Spotify, Southwest, and Zalando, Backstage manages software ownership, tracks service health, and enables developers to scaffold new microservices, create cloud resources, and publish docs from a single interface. Its 1,500+ plugin ecosystem integrates with GitHub, GitLab, Kubernetes, Datadog, PagerDuty, Snyk, and every major cloud and SaaS tool. Backstage reduces onboarding from weeks to hours and enforces golden-path templates for consistent, secure infrastructure.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/backstage-developer-portal',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Backstage — Spotify Open-Source Developer Portal Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Backstage is an open-source developer portal platform originally built at Spotify and now a CNCF Graduated project. It provides a unified software catalog, developer self-service templates, plugin ecosystem, and technical documentation hub for engineering organizations. With 3,000+ adopters including American Airlines, Spotify, Southwest, and Zalando, Backstage manages software ownership, tracks service health, and enables developers to scaffold new microservices, create cloud resources, and publish docs from a single interface. Its 1,500+ plugin ecosystem integrates with GitHub, GitLab, Kubernetes, Datadog, PagerDuty, Snyk, and every major cloud and SaaS tool. Backstage reduces onboarding from weeks to hours and enforces golden-path templates for consistent, secure infrastructure.</p>
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
            <li>Software Catalog: auto-discovered inventory of all services, APIs, libraries, and data pipelines</li>
            <li>Scaffolder: self-service templates that create repos, CI/CD, cloud resources, and register in catalog</li>
            <li>TechDocs: docs-as-code powered by Markdown, searchable across all teams and services</li>
            <li>1,500+ plugins: GitHub, GitLab, Kubernetes, Datadog, PagerDuty, Snyk, Jenkins, ArgoCD, and more</li>
            <li>Search: unified search across catalog, docs, Stack Overflow, Confluence, and internal wikis</li>
            <li>Kubernetes plugin: view deployments, pods, and health directly in the Backstage service page</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce developer onboarding from weeks to hours with a single pane of glass for all services</li>
            <li>Enforce golden-path templates: every new service follows security, naming, and infra standards</li>
            <li>Eliminate tribal knowledge: every service has an owner, docs, dependencies, and health status</li>
            <li>CNCF Graduated project with 3,000+ adopters including Spotify, American Airlines, and Zalando</li>
            <li>1,500+ plugins mean Backstage integrates with every tool in your existing stack</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (open source, self-hosted, CNCF project)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Free (community plugins, 1,500+ integrations)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (Roadie, Spotify Backstage Managed, or self-hosted with enterprise support)</p>
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
