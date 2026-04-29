/* eslint-disable */
import Metadata from 'next';
import ROIImpactEstimator from '../components/ROIImpactEstimator';
import SolutionFinder from '../components/home/SolutionFinder';
import { AI_SERVICE_LINKS } from '../constants/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'AI Experiments | Zion Tech Group',
  description:
    'Try interactive AI-powered tools in your browser, including an automation ROI estimator and a solution finder that maps you to the right Zion AI products.',
  alternates: { canonical: '/ai-experiments' },
};

export default function AIExperimentsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-8rem] h-[22rem] w-[22rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">Interactive AI</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI experiments you can try in your browser
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300">
            Explore a few of the same intelligent experiences we use to design and validate production AI rollouts —
            from automation ROI modeling to solution discovery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact?topic=project&source=ai-experiments"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
             data-cta-event="cta_contact" data-cta-label="page">
              Talk about a pilot
            </a>
            <a
              href="/zion-ai-autonomous-ops-hub"
              className="inline-flex items-center rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-purple-400 hover:text-white"
            >
              Learn about Autonomous Ops
            </a>
            <a
              href="/ai/solutions-configurator"
              className="inline-flex items-center rounded-xl border border-sky-500/70 bg-sky-500/10 px-6 py-2.5 text-sm font-semibold text-sky-100 shadow-lg shadow-sky-900/40 transition hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-500/20"
            >
              Try solutions configurator
            </a>
            <a
              href="/ai/url-audit-assistant"
              className="inline-flex items-center rounded-xl border border-slate-600 bg-slate-900/70 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-white"
            >
              Audit a URL checklist
            </a>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">Estimator</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Automation ROI sandbox</h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Use the sliders to model how AI automation can impact your team&apos;s hours, savings, and payback period
              across support, sales, or engineering workflows.
            </p>
            <div className="mt-6">
              <ROIImpactEstimator />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 sm:p-8">
            <SolutionFinder
              apps={AI_SERVICE_LINKS.slice(0, 24).map((service) => ({
                name: service.name,
                href: service.href,
                category: 'AI Services',
                description: 'Explore this AI service to see how it fits your roadmap.',
                icon: '✨',
              }))}
            />
            <p className="mt-4 text-xs text-slate-400">
              Looking for something else? Browse the full{' '}
              <a href="/ai-services" className="font-semibold text-purple-300 hover:text-purple-200">
                AI Services
              </a>{' '}
              catalog or the{' '}
              <a href="/solutions" className="font-semibold text-purple-300 hover:text-purple-200">
                solutions library
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

