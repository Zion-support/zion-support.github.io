import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const categories = [
    { name: 'AI Services', href: '/ai-services', blurb: 'Autonomous agents, RAG, MLOps, analytics' },
    { name: 'Micro SaaS', href: '/micro-saas', blurb: 'Vertical products with fast ROI' },
    { name: 'IT Services', href: '/it-services', blurb: 'Cloud, platform engineering, security' },
  ];

  return (
    <>
      <Head>
        <title>Services — Zion Tech Group</title>
        <meta name="description" content="Explore AI, IT, and micro SaaS services by Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10">Our Services</h1>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((c) => (
              <Link key={c.name} href={c.href}>
                <a className="block bg-white rounded-xl p-6 shadow hover:shadow-lg border border-slate-200">
                  <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
                  <p className="text-slate-600">{c.blurb}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

