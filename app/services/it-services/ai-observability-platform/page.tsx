// import React from 'react';

export const metadata = {
  title: 'AI Observability Platform | IT Services | Zion Tech Group',
  description: 'Unified logs, metrics, traces with AI anomaly detection, SLOs, and guided RCA for modern platforms.',
};

export default function AIObservabilityPlatformPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  };

  const features = [
    'OpenTelemetry-native ingest for logs, metrics, traces',
    'Service dependency maps and golden signals',
    'AI-driven anomaly detection and incident summarization',
    'SLOs with burn-rate alerts and error budgets',
    'RCA graph across layers (app, infra, network)',
    'Runbooks, auto-remediations, and chat integrations',
  ];

  const benefits = [
    'Reduce MTTR by 60%+',
    'Fewer false positives and alert fatigue',
    'Faster on-call handoffs and incident reviews',
    'Higher reliability and customer satisfaction',
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3">AI Observability Platform</h1>
          <p className="text-slate-300 max-w-3xl">
            Detect, triage, and resolve incidents faster with unified telemetry and AI-powered insights.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg">Call {contact.phone}</a>
            <a href={`mailto:${contact.email}?subject=AI Observability Platform`} className="px-6 py-3 border border-white/40 rounded-lg font-semibold">Email {contact.email}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            {features.map((f, i) => (<li key={i} className="text-gray-700">{f}</li>))}
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            {benefits.map((b, i) => (<li key={i} className="text-gray-700">{b}</li>))}
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6">
              <div className="font-bold text-lg text-gray-900">Team</div>
              <div className="text-blue-600 font-extrabold text-2xl mt-2">$1,499/month</div>
              <div className="text-gray-600 mt-2 text-sm">Up to 50 services, email support</div>
            </div>
            <div className="border rounded-xl p-6">
              <div className="font-bold text-lg text-gray-900">Business</div>
              <div className="text-blue-600 font-extrabold text-2xl mt-2">$3,999/month</div>
              <div className="text-gray-600 mt-2 text-sm">200 services, SSO, ticketing integrations</div>
            </div>
            <div className="border rounded-xl p-6">
              <div className="font-bold text-lg text-gray-900">Enterprise</div>
              <div className="text-blue-600 font-extrabold text-2xl mt-2">Custom</div>
              <div className="text-gray-600 mt-2 text-sm">Unlimited, on-call SLAs, private cloud</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="text-gray-700 space-y-1">
            <div>Phone: {contact.phone}</div>
            <div>Email: {contact.email}</div>
            <div>Address: {contact.address}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

// import React from 'react';
import { Link } from 'react-router-dom';

export default function AIObservabilityPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">AI Observability Platform</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            End-to-end observability for modern stacks: logs, metrics, traces, RUM, and AI anomaly detection.
            Correlate issues across services, infra, and user journeys with guided RCA.
          </p>
          <div className="mt-6 text-sm text-gray-600"><span className="font-semibold text-purple-700">Pricing</span>: Team $1,499/month, Scale $3,999/month, Enterprise custom.</div>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Request a Demo</Link>
            <a href="https://ziontechgroup.com" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Visit ziontechgroup.com</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Unified telemetry: OpenTelemetry-native ingestion</li>
              <li>• AI anomaly detection and seasonality-aware baselines</li>
              <li>• Service topology map and golden signals</li>
              <li>• SLOs with error budgets and burn-rate alerts</li>
              <li>• RCA graph with log-pattern mining</li>
              <li>• Integrations: Kubernetes, AWS, Azure, GCP</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcomes</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• 50–70% MTTR reduction</li>
              <li>• 30–40% noise reduction with intelligent alerting</li>
              <li>• Faster deployments with pre/post-release guardrails</li>
              <li>• Uptime improvements and customer experience gains</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Benchmarks</h3>
          <ul className="list-disc pl-6 text-blue-700">
            <li><a href="https://www.datadoghq.com/pricing/" target="_blank" rel="noopener noreferrer" className="hover:underline">Datadog pricing</a></li>
            <li><a href="https://newrelic.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:underline">New Relic pricing</a></li>
            <li><a href="https://grafana.com/pricing/" target="_blank" rel="noopener noreferrer" className="hover:underline">Grafana Cloud pricing</a></li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Email</div>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 font-semibold">kleber@ziontechgroup.com</a>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Phone</div>
            <a href="tel:+13024640950" className="text-blue-600 font-semibold">+1 302 464 0950</a>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Address</div>
            <div className="text-gray-800 font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>
      </section>
    </div>
  );
}

