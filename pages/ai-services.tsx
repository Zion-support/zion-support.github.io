import Head from 'next/head';
import Link from 'next/link';

export default function AIServices() {
  const title = 'AI Services — Zion Tech Group';
  const description = 'Cutting-edge AI solutions including autonomous systems, MLOps, and intelligent automation.';

  const aiServices = [
    {
      title: 'RAG Platform-in-a-Box',
      description: 'Retrieval augmented generation stack with connectors, governance, and analytics',
      pricing: '$4,000 - $18,000/month',
      delivery: '4-8 weeks',
    },
    {
      title: 'MLOps as a Service',
      description: 'Training, evaluation, deployment, monitoring, and compliance',
      pricing: '$3,500 - $16,000/month',
      delivery: '4-8 weeks',
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10">AI Services</h1>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {aiServices.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow border border-slate-200">
                <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                <p className="text-slate-600 mb-3">{s.description}</p>
                <p className="text-sm text-slate-500"><strong>Pricing:</strong> {s.pricing} • <strong>Delivery:</strong> {s.delivery}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold">Request a Proposal</Link>
          </div>
        </div>
      </main>
    </>
  );
}

