import Head from 'next/head';

export default function ITServices() {
  const items = [
    {
      title: 'Platform Engineering for Kubernetes',
      description: 'Golden paths, templates, GitOps, policy guardrails, and SRE dashboards',
      pricing: '$6,000 - $28,000/month',
    },
    {
      title: 'Data Compliance Toolkit (SOC 2/HIPAA/GDPR)',
      description: 'Controls, evidence capture, DPIA workflows, and continuous monitoring',
      pricing: '$2,500 - $14,000/month',
    },
    {
      title: 'Observability Stack (OpenTelemetry + Grafana)',
      description: 'Unified logs, metrics, traces, SLOs, and cost-optimized pipelines',
      pricing: '$1,800 - $9,500/month',
    },
  ];

  return (
    <>
      <Head>
        <title>IT Services — Zion Tech Group</title>
        <meta name="description" content="Cloud, platform engineering, compliance, and observability services." />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10">IT Services</h1>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {items.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow border border-slate-200">
                <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                <p className="text-slate-600 mb-3">{s.description}</p>
                <p className="text-sm text-slate-500"><strong>Pricing:</strong> {s.pricing}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

