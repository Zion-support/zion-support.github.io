import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing and Industrial AI Solutions | Zion Tech Group',
  description: 'AI solutions for manufacturing, industrial operations, and supply chain - predictive maintenance, quality control automation, supply chain optimization, robotics integration, and energy management.',
  alternates: { canonical: '/industries/manufacturing' },
};

const challenges = ['Unplanned downtime costing 5-20pct of production capacity', 'Manual quality inspection bottlenecks', 'Supply chain disruptions and inventory waste', 'Energy costs consuming 20-40pct of operating budget', 'Labor shortages and skills gaps'];
const solutions = [['AI Predictive Maintenance', '/ai-services/ai-predictive-maintenance', 'Equipment health monitoring and failure prediction'], ['AI Computer Vision', '/ai-services/ai-computer-vision', 'Automated quality inspection at production line speed'], ['AI Supply Chain Optimizer', '/ai-services/ai-supply-chain-optimizer', 'Demand forecasting and inventory optimization'], ['AI Robotics Integration', '/ai-services/ai-robotics-integration', 'Autonomous manufacturing and fleet coordination']];
const stats = ['60pct reduction in unplanned downtime', '50pct faster quality inspection', '25pct energy cost savings'];
const name = 'Manufacturing and Industrial AI Solutions';
const pricing = {'start': '$699', 'pro': '$1599', 'ent': '$3499'};

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 min-h-screen">
      <section className="container-page relative mx-auto max-w-5xl px-4 pt-20 lg:pt-28">

        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-6xl">🏭</div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{name}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">AI solutions for manufacturing, industrial operations, and supply chain - predictive maintenance, quality control automation, supply chain optimization, robotics integration, and energy management.</p>
        </div>

        {/* Industry Challenges */}
        <div className="mb-16 rounded-xl border border-slate-700/80 bg-slate-900/60 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Industry Challenges We Solve</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-slate-800/40 p-4">
                <span className="mt-0.5 text-rose-400">✖</span>
                <span className="text-slate-300">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Metrics */}
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center">
              <div className="text-2xl font-bold text-cyan-300">{s}</div>
            </div>
          ))}
        </div>

        {/* Featured Solutions */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-white">Featured AI Solutions for {name}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map(([name2, href, desc], i) => (
              <Link key={i} href={href} className="group rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 transition-colors hover:border-cyan-400/40 hover:bg-slate-800/60">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">{name2}</h3>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-cyan-400">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16 rounded-xl border border-slate-700/80 bg-slate-900/60 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Industry-Specific Pricing</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-700/50 bg-slate-800/40 p-6 text-center">
              <div className="text-sm text-slate-400">Starter</div>
              <div className="mt-2 text-2xl font-bold text-white">{pricing.start}/mo</div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
                <span>Core AI features</span>
                <span>Email support</span>
                <span>Basic analytics</span>
              </div>
              <Link href="/contact" className="mt-6 inline-block w-full rounded-lg bg-slate-700 px-4 py-2 text-sm text-white hover:bg-slate-600">Get Started</Link>
            </div>
            <div className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 p-6 text-center">
              <div className="text-sm text-cyan-300">Professional</div>
              <div className="mt-2 text-2xl font-bold text-white">{pricing.pro}/mo</div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
                <span>All Starter features</span>
                <span>Priority support</span>
                <span>Advanced analytics</span>
                <span>Custom integrations</span>
              </div>
              <Link href="/contact" className="mt-6 inline-block w-full rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400">Get Started</Link>
            </div>
            <div className="rounded-lg border border-slate-700/50 bg-slate-800/40 p-6 text-center">
              <div className="text-sm text-slate-400">Enterprise</div>
              <div className="mt-2 text-2xl font-bold text-white">{pricing.ent}/mo</div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
                <span>Everything in Pro</span>
                <span>Dedicated account manager</span>
                <span>SLA guarantee</span>
                <span>24/7 support</span>
              </div>
              <Link href="/contact" className="mt-6 inline-block w-full rounded-lg bg-slate-700 px-4 py-2 text-sm text-white hover:bg-slate-600">Contact Sales</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 rounded-xl border border-violet-500/20 bg-violet-500/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to Transform Your {name} Operations?</h2>
          <p className="mb-6 text-slate-300">Schedule a free consultation with our industry experts to discover the right AI solutions for your needs.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">Schedule Free Consultation</Link>
            <Link href="/solutions" className="rounded-full border border-slate-600 bg-slate-800 px-6 py-3 text-sm text-white hover:bg-slate-700">Explore All Solutions</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 text-center">
          <p className="text-sm text-slate-400 mb-3">Mobile: +1 302 464 0950 | E-mail: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008 Middletown DE 19709</p>
        </div>

      </section>
    </div>
  );
}
