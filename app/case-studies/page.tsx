import Link from 'next/link';
import { CONTACT_INFO } from '../utils/seoConstants';

export const metadata = {
  title: 'Case Studies',
  description: 'Real-world case studies showcasing how Zion Tech Group delivers AI and IT solutions across industries.',
};

export default function CaseStudiesPage() {
  const studies = [
    {
      industry: 'Healthcare',
      title: 'AI-Powered Diagnostics for Regional Hospital Network',
      challenge: '10 hospitals struggling with diagnostic delays and radiologist shortages.',
      solution: 'Deployed AI diagnostic imaging assistant with 94% accuracy, reducing read times from 48h to 2h.',
      results: ['87% faster diagnosis', '$2.4M annual savings', '30% improvement in patient outcomes'],
      services: ['AI Medical Diagnosis', 'HL7/FHIR Integration', 'HIPAA Compliance'],
    },
    {
      industry: 'Financial Services',
      title: 'Fraud Detection Engine for Regional Bank',
      challenge: '$18M annual losses from fraudulent transactions across 200K accounts.',
      solution: 'Real-time ML fraud detection with behavioral analytics and automated blocking.',
      results: ['94% fraud detection rate', '$12M saved annually', '0.01% false positive rate'],
      services: ['Fraud Detection AI', 'Real-time Analytics', 'SOC 2 Compliance'],
    },
    {
      industry: 'E-Commerce',
      title: 'Personalization Platform for Fashion Retailer',
      challenge: '3.2% conversion rate, high cart abandonment, generic product recommendations.',
      solution: 'AI-powered recommendation engine with dynamic pricing and personalized email flows.',
      results: ['340% conversion increase', '28% higher AOV', '62% cart abandonment reduction'],
      services: ['AI Recommendations', 'Dynamic Pricing', 'Email Automation'],
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance for Automotive Supplier',
      challenge: $6M/year in unplanned downtime across 5 production lines.',
      solution: 'IoT sensor network + ML failure prediction with automated work orders.',
      results: ['73% downtime reduction', '$4.2M saved', '99.1% prediction accuracy'],
      services: ['Predictive Maintenance', 'IoT Integration', 'Digital Twin'],
    },
    {
      industry: 'Logistics',
      title: 'Route Optimization for 3PL Provider',
      challenge: Fuel costs 35% over budget, on-time delivery at 81%.',
      solution: 'AI route optimization with real-time traffic, weather, and capacity planning.',
      results: ['22% fuel savings', '96% on-time delivery', '18% more deliveries/day'],
      services: ['Route Optimization', 'Fleet Management', 'Real-time Tracking'],
    },
    {
      industry: 'Legal',
      title: 'Contract Intelligence for Law Firm',
      challenge: 40+ hours/week spent on manual contract review for M&A due diligence.',
      solution: 'AI contract analyzer extracting clauses, risks, and obligations automatically.',
      results: ['65% faster review', '99.2% clause detection', '4x more contracts processed'],
      services: ['Legal Document AI', 'Contract Lifecycle', 'Risk Assessment'],
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Case Studies</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Real Results,<br /><span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Real Impact</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            See how Zion Tech Group has helped organizations across industries transform with AI and IT solutions.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {studies.map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">{s.industry}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
                <div className="grid gap-4 sm:grid-cols-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-red-400 mb-1">Challenge</p>
                    <p className="text-sm text-slate-300">{s.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-blue-400 mb-1">Solution</p>
                    <p className="text-sm text-slate-300">{s.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-emerald-400 mb-1">Results</p>
                    <ul className="text-sm text-slate-300 space-y-1">
                      {s.results.map((r, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.services.map((svc, j) => (
                    <span key={j} className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-400">{svc}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Write Your Success Story?</h2>
            <p className="text-slate-300 mb-6">Let's discuss how we can transform your business with AI and IT solutions.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg">
                Start Your Project
              </Link>
              <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-purple-400">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
