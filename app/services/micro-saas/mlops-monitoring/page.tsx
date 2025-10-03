// import React from 'react';
// Metadata handled by React Helmet
import * as Lucide from 'lucide-react';
const { Activity, Bell, Database, BarChart3, Shield, CheckCircle, Mail, Phone, ArrowRight } = Lucide as any;

export const metadata: Metadata = {
  title: 'MLOps Monitoring | Zion Tech Group',
  description: 'Production ML monitoring for drift, data quality, feature health, and performance regression with alerts.',
  keywords: 'MLOps monitoring, model drift, data quality, feature store, ML observability',
};

export default function MLOpsMonitoringPage() {
  const contactInfo = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' };
  const plans = [
    { name: 'Essentials', price: '$249', features: ['Drift detection', 'Metrics dashboards', 'Email alerts'] },
    { name: 'Pro', price: '$699', features: ['Data quality checks', 'Feature health', 'Slack/PagerDuty', 'Canary support'], popular: true },
    { name: 'Enterprise', price: '$1,299', features: ['Custom probes', 'Private networking', 'SLA & SSO', 'Managed onboarding'] },
  ];

  const references = [
    { name: 'Evidently AI (concepts)', url: 'https://www.evidentlyai.com/' },
    { name: 'Great Expectations', url: 'https://greatexpectations.io/' },
    { name: 'OpenTelemetry', url: 'https://opentelemetry.io/' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-slate-100">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-semibold">
            <Activity className="w-4 h-4" /> AI & Analytics
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mt-6">MLOps Monitoring</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Detect drift, ensure data quality, and keep models healthy in production—before issues hit customers.</p>
          <div className="flex justify-center gap-4 mt-8">
            <a href={`tel:${contactInfo.phone}`} className="px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700"><Phone className="w-5 h-5 inline mr-2" /> {contactInfo.phone}</a>
            <a href={`mailto:${contactInfo.email}?subject=MLOps Monitoring Demo`} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"><Mail className="w-5 h-5 inline mr-2" /> Request Demo</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl"><BarChart3 className="w-6 h-6 text-violet-600" /><h3 className="mt-3 font-semibold">Performance</h3><p className="text-gray-600 text-sm mt-2">Latency, error, and accuracy tracking by segment.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><Database className="w-6 h-6 text-violet-600" /><h3 className="mt-3 font-semibold">Data Quality</h3><p className="text-gray-600 text-sm mt-2">Schema, range, and distribution checks.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><Shield className="w-6 h-6 text-violet-600" /><h3 className="mt-3 font-semibold">Drift & Bias</h3><p className="text-gray-600 text-sm mt-2">Detect drift and fairness regressions.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><Bell className="w-6 h-6 text-violet-600" /><h3 className="mt-3 font-semibold">Alerts</h3><p className="text-gray-600 text-sm mt-2">Slack/PagerDuty with runbook links.</p></div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-sm ${p.popular ? 'ring-2 ring-violet-600' : ''}`}>
                {p.popular && (<div className="-mt-12 mb-6 text-center"><span className="inline-block bg-violet-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span></div>)}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-2 text-3xl font-bold">{p.price}<span className="text-base text-gray-600">/month</span></div>
                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {p.features.map((f) => (<li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> {f}</li>))}
                </ul>
                <a href={`mailto:${contactInfo.email}?subject=MLOps Monitoring - ${p.name}`} className="mt-8 inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700">Choose {p.name}<ArrowRight className="w-4 h-4 ml-2" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">External References</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((r) => (
              <li key={r.name} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"><a href={r.url} target="_blank" rel="noopener noreferrer" className="text-violet-700 font-semibold hover:underline">{r.name}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

