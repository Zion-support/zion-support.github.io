import Head from 'next/head';
import Link from 'next/link';

export default function MicroSaaS() {
  const products = [
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, security scanning, and quality metrics with Git integration',
      pricing: 'From $299/month',
    },
    {
      title: 'Smart Invoice & Payment Automation',
      description: 'AP automation with AI invoice processing, payment matching, and cash flow analytics',
      pricing: 'From $199/month',
    },
    {
      title: 'Smart Inventory Management',
      description: 'Predictive demand, automated reorder points, and real-time analytics',
      pricing: 'From $249/month',
    },
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS — Zion Tech Group</title>
        <meta name="description" content="Production-ready micro SaaS products with clear pricing and fast delivery." />
      </Head>
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10">Micro SaaS Products</h1>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow border border-slate-200">
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-slate-600 mb-3">{p.description}</p>
                <p className="text-sm text-slate-500"><strong>Pricing:</strong> {p.pricing}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold">Get a Demo</Link>
          </div>
        </div>
      </main>
    </>
  );
}

