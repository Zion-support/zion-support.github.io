import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Zion Tech Group',
  description:
    'Real-world results from AI implementation, engineering, and security projects. See how organizations achieved measurable outcomes with Zion Tech Group.',
  alternates: { canonical: '/case-studies' },
};

type CaseStudy = {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: 'AI-Powered Customer Support Reduces Response Time by 73%',
    client: 'SaaS Platform (Series B)',
    industry: 'Technology',
    challenge:
      'Support ticket volume grew 4x after product launch. Average response time exceeded 8 hours, and CSAT scores dropped below 70%.',
    solution:
      'Deployed Zion AI Customer Support Pro with intelligent routing and automated tier-1 responses, integrated with existing Zendesk workflows.',
    results: [
      '73% reduction in average response time',
      'CSAT score improved from 68% to 92%',
      '45% of tickets resolved without human intervention',
      '$180K annual savings in support operations',
    ],
    tags: ['AI', 'Customer Support', 'Automation'],
  },
  {
    title: 'DevOps Automation Cuts Deployment Frequency from Weekly to Daily',
    client: 'Fintech Startup',
    industry: 'Financial Services',
    challenge:
      'Manual deployment processes created bottlenecks. Teams spent 40% of sprint time on release coordination instead of building features.',
    solution:
      'Implemented AI-Powered DevOps with automated CI/CD pipelines, environment provisioning, and intelligent deployment scheduling.',
    results: [
      'Deployment frequency increased from weekly to daily',
      'Release failures reduced by 85%',
      '30% increase in developer productivity',
      'Mean time to recovery dropped from 4 hours to 15 minutes',
    ],
    tags: ['DevOps', 'Automation', 'Engineering'],
  },
  {
    title: 'Security Audit Prevents $2M in Potential Data Breach Costs',
    client: 'Healthcare Provider',
    industry: 'Healthcare',
    challenge:
      'Legacy infrastructure with unknown vulnerabilities. Needed HIPAA compliance validation and a modernization plan for patient data systems.',
    solution:
      'Conducted comprehensive cybersecurity audit with Zion Security Shield, including penetration testing, compliance mapping, and remediation planning.',
    results: [
      '47 critical vulnerabilities identified and patched',
      'Full HIPAA compliance achieved',
      'Estimated $2M in avoided breach costs',
      'Ongoing monitoring system implemented',
    ],
    tags: ['Security', 'Compliance', 'Healthcare'],
  },
  {
    title: 'AI Email Marketing Drives 340% Increase in Campaign ROI',
    client: 'E-commerce Brand',
    industry: 'Retail',
    challenge:
      'Generic email campaigns produced declining engagement. Open rates below 12% and conversion rates stagnating at 0.8%.',
    solution:
      'Deployed Zion AI Email Marketing Pro with dynamic segmentation, personalized content generation, and optimal send-time prediction.',
    results: [
      '340% increase in campaign ROI',
      'Open rates improved from 12% to 38%',
      'Conversion rate increased to 4.2%',
      'Revenue per email subscriber up 2.8x',
    ],
    tags: ['AI', 'Marketing', 'Growth'],
  },
  {
    title: 'Predictive Analytics Reduces Supply Chain Disruptions by 60%',
    client: 'Manufacturing Company',
    industry: 'Manufacturing',
    challenge:
      'Frequent supply chain disruptions caused production delays and excess inventory costs averaging $500K per quarter.',
    solution:
      'Implemented Zion AI Predictive Analytics and Supply Chain Optimizer with demand forecasting, supplier risk monitoring, and automated reorder triggers.',
    results: [
      '60% reduction in supply chain disruptions',
      'Inventory carrying costs reduced by 35%',
      '$1.2M annual savings in operational costs',
      'Forecast accuracy improved from 62% to 91%',
    ],
    tags: ['AI', 'Supply Chain', 'Operations'],
  },
  {
    title: 'Smart CRM Automation Increases Qualified Pipeline by 125%',
    client: 'B2B Software Company',
    industry: 'Technology',
    challenge:
      'Sales team spent 60% of time on manual data entry and lead qualification. Pipeline visibility was poor, and lead response time averaged 6 hours.',
    solution:
      'Deployed Zion Smart CRM Automation with AI lead scoring, automated follow-ups, and intelligent deal routing across the sales organization.',
    results: [
      '125% increase in qualified pipeline',
      'Lead response time reduced to under 5 minutes',
      'Sales team productivity increased by 40%',
      '28% improvement in close rates',
    ],
    tags: ['CRM', 'AI', 'Sales'],
  },
];

const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            📈 Case Studies
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Proven Results,{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            See how organizations across industries have achieved measurable outcomes with
            Zion Tech Group solutions and services.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {industries.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-slate-700 bg-slate-900/75 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                  {study.industry}
                </span>
                <span className="text-xs text-slate-400">{study.client}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">{study.title}</h2>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{study.challenge}</p>
                </div>
                <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{study.solution}</p>
                </div>
                <div className="rounded-xl border border-purple-500/30 bg-purple-900/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                    Results
                  </p>
                  <ul className="mt-2 space-y-2">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2 text-sm text-slate-200"
                      >
                        <span className="mt-0.5 text-purple-400">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Want Similar Results?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Every project starts with understanding your specific challenges.
            Let&apos;s discuss how we can help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
