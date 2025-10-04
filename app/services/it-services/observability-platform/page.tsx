import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { ActivitySquare, ChartBar, Bug, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ObservabilityPlatformPage() {
  const title = 'Observability Platform (Logs, Metrics, Traces, RUM) — Zion Tech Group';
  const description = 'Design and operate a unified observability stack with SLOs, alerting, tracing, and cost-optimized telemetry.';

  const features = [
    'Architecture for OpenTelemetry pipelines and collectors',
    'Metrics, logs, traces, and RUM dashboards (Grafana, Datadog, New Relic)',
    'Golden signals, SLOs/SLIs, and actionable alerting',
    'Trace-driven root cause analysis and error budgets',
    'Cost controls, sampling, and retention policies',
    'On-call runbooks and incident response playbooks'
  ];

  const pricing = [
    { name: 'Starter', price: '$2,000/month', details: ['Up to 250 GB/month', 'Dashboards', 'Email support'] },
    { name: 'Growth', price: '$5,000/month', details: ['Up to 2 TB/month', 'SLOs & On-call', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', details: ['High volume', 'Multi-region', 'Dedicated SRE'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/it-services/observability-platform" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-indigo-700">
              <ActivitySquare className="w-8 h-8" />
              <span className="font-semibold">IT Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Observability Platform</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">Talk to an Expert</Link>
              <a href="#pricing" className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Outcomes</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center"><ChartBar className="w-5 h-5 text-indigo-700 mr-2" />Faster MTTR and fewer incidents</div>
                <div className="flex items-center"><Bug className="w-5 h-5 text-indigo-700 mr-2" />Proactive issue detection</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((tier, i) => (
                <div key={i} className="border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-extrabold text-indigo-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Observability That Pays For Itself</h2>
            <p className="opacity-90 mb-6">Cut noise, control costs, and restore visibility across microservices and clouds.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

