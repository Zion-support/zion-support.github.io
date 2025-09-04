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

  const categories = Array.from(new Set(microSaaSServices.map(s => s.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Micro SaaS Products — Zion Tech Group</title>
        <meta name="description" content="Ready-to-deploy micro SaaS products including cloud cost optimization, document processing, API management, and more. Transform your business with innovative solutions." />
        <link rel="canonical" href={`${contact.site}/micro-saas`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Micro SaaS Products
        </h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Ready-to-deploy SaaS solutions that solve real business problems. From cloud cost optimization 
          to document processing, our micro SaaS products deliver immediate value with minimal setup time.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Started</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
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