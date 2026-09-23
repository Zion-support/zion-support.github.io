import Link from 'next/link';

export const metadata = {
  title: 'ReadMe — Developer-First API Documentation Platform | Zion Tech Group',
  description: 'ReadMe is the leading interactive API documentation platform that transforms OpenAPI/Swagger specs into beautiful, interactive developer portals. Used by 500,000+ companies including Stripe, Twilio, and Plaid, ReadMe provides auto-generated docs, try-it-now API explorers, changelogs, and developer analytics. Its platform includes AI-powered search, personalized onboarding flows, and Usage Insights that show which endpoints generate the most errors, traffic, and revenue. ReadMe reduces support tickets by 40% and improves developer onboarding time from days to minutes.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/readme-api-documentation-platform',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">ReadMe — Developer-First API Documentation Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">ReadMe is the leading interactive API documentation platform that transforms OpenAPI/Swagger specs into beautiful, interactive developer portals. Used by 500,000+ companies including Stripe, Twilio, and Plaid, ReadMe provides auto-generated docs, try-it-now API explorers, changelogs, and developer analytics. Its platform includes AI-powered search, personalized onboarding flows, and Usage Insights that show which endpoints generate the most errors, traffic, and revenue. ReadMe reduces support tickets by 40% and improves developer onboarding time from days to minutes.</p>
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
            <li>Interactive API explorer: developers test endpoints directly in the browser with live responses</li>
            <li>Swagger/OpenAPI import: auto-generate docs from OpenAPI 2.0/3.0/3.1 specs in minutes</li>
            <li>Developer analytics: track API usage, error rates, developer adoption, and time-to-first-call</li>
            <li>Versioning and changelogs: automatic version diffs and human-readable changelog generation</li>
            <li>AI-powered search: natural language queries that find the right endpoint or guide</li>
            <li>Custom branding: white-label portals with custom CSS, domain, and brand elements</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce developer support tickets by 40% with self-serve interactive documentation</li>
            <li>Improve time-to-first-API-call from days to minutes with guided onboarding</li>
            <li>Understand developer behavior: which endpoints drive adoption vs. cause errors</li>
            <li>Keep docs and code in sync automatically from OpenAPI specification</li>
            <li>Used by 500,000+ companies including Stripe, Twilio, and Plaid</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (public docs for open-source)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$99/month (private docs + custom domain)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (SSO + audit logs + dedicated CSM)</p>
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
