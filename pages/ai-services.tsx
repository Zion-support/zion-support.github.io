import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function AIServices() {
  const plans = [
    {
      name: 'Starter',
      price: 1499,
      features: [
        'AI strategy workshop (2h)',
        'One AI use-case blueprint',
        'Proof-of-concept using OpenAI or Gemini',
        'Data readiness checklist',
        'Security and compliance baseline'
      ]
    },
    {
      name: 'Growth',
      price: 4999,
      features: [
        '2 production-ready AI workflows',
        'Retrieval Augmented Generation (RAG) setup',
        'Evaluation harness and guardrails',
        'Observability dashboards (latency, cost, quality)',
        'Fine-tuning or adapters where applicable'
      ]
    },
    {
      name: 'Scale',
      price: 12999,
      features: [
        'Multi-model routing and fallbacks',
        'Private vector DB + encryption at rest',
        'A/B testing and human feedback loops',
        'SLA, on-call, and monthly optimization',
        'Enterprise SSO and compliance add-ons'
      ]
    }
  ];

  const solutions = [
    {
      title: 'AI Analytics Co-pilot',
      desc: 'Natural-language insights over your business data with secure connectors.',
      link: '/services/ai-analytics'
    },
    {
      title: 'NLP Chatbots',
      desc: 'Sales and support bots with tools, memory, and safe actions.',
      link: '/services/nlp-chatbots'
    },
    {
      title: 'Computer Vision',
      desc: 'Detection, OCR, quality control, and video analytics pipelines.',
      link: '/services/computer-vision'
    },
    {
      title: 'Predictive Analytics',
      desc: 'Propensity scoring, forecasting, and anomaly detection for ops.',
      link: '/services/predictive-analytics'
    }
  ];

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Production-grade AI solutions: RAG, chatbots, analytics co-pilots, computer vision, and predictive models with security and observability."
      canonical="https://ziontechgroup.com/ai-services"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            AI Services
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            We design, build, and operate safe, reliable AI systems. From discovery to
            production, our teams deliver measurable outcomes with transparent cost control
            and rigorous evaluation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <Link key={s.title} href={s.link} className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <span className="mt-4 inline-block text-sm text-blue-600">Explore →</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold text-slate-900 text-center">Pricing</h2>
        <p className="mt-2 text-slate-600 text-center">Typical market ranges; final pricing depends on scope.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">${plan.price}<span className="text-base font-normal text-slate-500">/project</span></p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Link href="/request-quote" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Request quote
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Questions? Call <a href="tel:+13024640950" className="text-blue-600">+1 302 464 0950</a> or email
            {' '}<a href="mailto:kleber@ziontechgroup.com" className="text-blue-600">kleber@ziontechgroup.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}