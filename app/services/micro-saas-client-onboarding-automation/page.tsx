import Link from 'next/link';

export const metadata = {
  title: 'Micro-SaaS Client Onboarding Automation | Zion Tech Group',
  description: 'Automated welcome sequences, document collection, task checklists, and progress tracking in one streamlined platform. Designed for SaaS companies and professional services firms that want to deliver a polished, consistent onboarding experience at scale.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/micro-saas-client-onboarding-automation',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Micro-SaaS Client Onboarding Automation</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Automated welcome sequences, document collection, task checklists, and progress tracking in one streamlined platform. Designed for SaaS companies and professional services firms that want to deliver a polished, consistent onboarding experience at scale.</p>
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
            <li>Automated welcome email and SMS sequences with personalized messaging, timing rules, and conditional branching</li>
            <li>Secure document collection portal with e-signature support, file type validation, and automatic reminders</li>
            <li>Customizable task checklists with role-based assignments, due dates, dependencies, and completion tracking</li>
            <li>Real-time progress tracking dashboard showing onboarding stage, bottlenecks, and time-to-completion metrics</li>
            <li>CRM and project management integrations with HubSpot, Salesforce, Asana, Monday.com, and Slack</li>
            <li>Client-facing portal with branded experience, status updates, and self-service resource access</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduces onboarding time by 60% with automated workflows that eliminate manual follow-ups</li>
            <li>Improves client satisfaction with a professional, consistent experience from day one</li>
            <li>Increases completion rates with automated reminders and a clear, guided onboarding path</li>
            <li>Frees up team capacity by replacing repetitive onboarding tasks with self-service automation</li>
            <li>Provides visibility into onboarding bottlenecks with analytics that drive continuous process improvement</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">$59/mo</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$149/mo</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">$349/mo</p>
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
