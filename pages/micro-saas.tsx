import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function MicroSaaS() {
  const products = [
    {
      name: 'Smart Invoices',
      desc: 'AI-assisted invoicing with automated reconciliation and late-fee nudges.',
      price: 29,
      link: '/services/crm'
    },
    {
      name: 'Lead Enricher',
      desc: 'Enrich leads with company data, tech stack, and buying signals.',
      price: 39,
      link: '/services/ai-analytics'
    },
    {
      name: 'Support Copilot',
      desc: 'Embed a safe AI copilot into your help center and chat.',
      price: 49,
      link: '/services/nlp-chatbots'
    },
    {
      name: 'Store Vision',
      desc: 'Computer vision for retail heatmaps and OOS detection (camera optional).',
      price: 99,
      link: '/services/computer-vision'
    }
  ];

  return (
    <Layout
      title="Micro SaaS - Zion Tech Group"
      description="A curated suite of focused micro SaaS tools that deliver ROI quickly, from AI support copilots to analytics and billing automation."
      canonical="https://ziontechgroup.com/micro-saas"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Micro SaaS</h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Lightweight, specialized products you can deploy in days—not months. Each product
            integrates with popular CRMs, support tools, and data warehouses.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <p className="mt-4 text-slate-900 text-xl font-bold">${p.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
              <div className="mt-4 flex items-center gap-3">
                <Link href={p.link} className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Learn more</Link>
                <Link href="/schedule-demo" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">Schedule demo</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/pricing" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">See all pricing</Link>
        </div>
      </section>
    </Layout>
  );
}