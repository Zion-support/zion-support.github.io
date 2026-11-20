import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Lead Scoring & Qualification | Zion Tech Group',
  description:
    'Explore reviewable AI-assisted lead scoring, qualification and routing workflows, with human approval and measurable pilot goals.',
  alternates: { canonical: 'https://ziontechgroup.com/zion-ai-lead-scoring/' },
};

const workflow = [
  {
    title: 'Map the qualification criteria',
    description:
      'Define fit, purchase intent and handoff conditions with sales and marketing owners before introducing a model.',
  },
  {
    title: 'Review available signals',
    description:
      'Assess permissioned CRM, form and engagement fields for quality, recency and appropriate use.',
  },
  {
    title: 'Pilot scoring and routing',
    description:
      'Compare proposed lead priorities with existing rules, and keep a reviewer in control of assignments and outreach.',
  },
  {
    title: 'Measure and improve',
    description:
      'Track lead acceptance, time to first response and qualification outcomes against an agreed baseline.',
  },
] as const;

const relatedApps = [
  {
    title: 'Zion AI Sales Campaign Orbiter',
    description: 'Explore campaign planning with deliverability guardrails.',
    href: '/zion-ai-sales-campaign-orbiter/',
  },
  {
    title: 'Zion AI Workforce Optimizer',
    description: 'Explore staffing visibility and service-territory planning.',
    href: '/zion-ai-workforce-optimizer/',
  },
] as const;

const catalogLanguages = [
  { name: 'English', href: '/apps-network/' },
  { name: 'Portuguese', href: '/pt/apps-network/' },
  { name: 'Spanish', href: '/es/apps-network/' },
  { name: 'French', href: '/fr/apps-network/' },
  { name: 'German', href: '/de/apps-network/' },
] as const;

export default function ZionAILeadScoringPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <a href="/apps-network/" className="font-medium text-purple-300 underline-offset-4 hover:text-pink-300 hover:underline">
            Apps Network
          </a>
          <span aria-hidden="true" className="mx-2 text-slate-500">/</span>
          <span className="text-slate-300">AI Lead Scoring</span>
        </nav>

        <header className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40 p-7 sm:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-300">Sales intelligence and qualification</p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">AI Lead Scoring & Qualification</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            Prioritize the right opportunities using explainable criteria, reviewable signals and human-approved routing.
            Start with a scoped evaluation rather than unverified conversion promises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/discovery/#dq" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Start free Discovery
            </a>
            <a href="/contact/" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-purple-400 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Discuss a pilot
            </a>
          </div>
        </header>

        <section aria-labelledby="workflow-heading" className="mt-14">
          <h2 id="workflow-heading" className="text-2xl font-bold text-white">A practical qualification workflow</h2>
          <p className="mt-3 max-w-3xl text-slate-300">A proposed implementation approach, tailored to the data and processes available at your organization.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {workflow.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <p className="text-sm font-bold text-purple-300">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="inputs-heading" className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 id="inputs-heading" className="text-xl font-bold text-white">Inputs worth evaluating</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Company size, sector and ideal-customer fit</li>
              <li>Declared needs and requested services</li>
              <li>Opted-in engagement and contact history</li>
              <li>Sales-qualified outcomes for baseline comparison</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-bold text-white">Controls before automation</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Permissioned data access and privacy review</li>
              <li>Transparent scoring and documented overrides</li>
              <li>Human approval for outreach and commercial commitments</li>
              <li>Periodic checks for data quality and unfair outcomes</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="related-heading" className="mt-14">
          <h2 id="related-heading" className="text-2xl font-bold text-white">Explore related Zion apps</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedApps.map((app) => (
              <a key={app.href} href={app.href} className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-colors hover:border-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <h3 className="font-semibold text-white group-hover:text-purple-300">{app.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{app.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-purple-300">View app details</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-400">Product capabilities and results depend on validation, integration and project scope. This overview does not guarantee a specific conversion uplift or SLA.</p>
        </section>

        <footer className="mt-14 border-t border-slate-800 pt-7">
          <p className="text-sm font-semibold text-white">Explore the Apps Network catalog in your language</p>
          <nav aria-label="Apps Network catalog languages" className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {catalogLanguages.map((language) => (
              <a key={language.href} href={language.href} className="text-purple-300 underline-offset-4 hover:text-pink-300 hover:underline">
                {language.name}
              </a>
            ))}
          </nav>
          <p className="mt-3 text-xs text-slate-400">These links open localized catalog indexes; this app overview is currently in English.</p>
        </footer>
      </div>
    </main>
  );
}
