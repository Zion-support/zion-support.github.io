import React from 'react';
// Metadata handled by React Helmet
import { Activity, CheckCircle, ArrowRight, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Uptime & SLO Monitor | Zion Tech Group - Micro SaaS',
  description: 'Global synthetic monitoring, latency SLOs, and burn-rate alerts with runbook links for fast incident response.',
  keywords: 'synthetic monitoring, SLO, SLA tracking, burn-rate alerts, uptime monitoring, status page',
};

export default function ApiUptimeSloMonitorPage() {
  const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' } as const;
  const features = [
    'HTTP and browser-based checks from multiple regions',
    'Latency/error budgets and burn-rate alerts',
    'On-call rotations and escalation policies',
    'Dashboards and public status pages',
    'Jira/PagerDuty/Slack integrations',
  ];
  const benefits = [
    'Reduced MTTR and fewer incidents',
    'Clear SLOs and compliance reporting',
    'Improved customer trust',
  ];
  const pricing = '$79 - $499/month';
  const delivery = '1 week';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 text-white rounded-lg"><Activity className="w-6 h-6" /></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">API Uptime & SLO Monitor</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Global synthetic checks, burn-rate alerts, and status pages that keep you ahead of incidents.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 text-blue-600 font-semibold"><DollarSign className="w-4 h-4" /> {pricing}</div>
              <div className="flex items-center gap-2 text-sky-600 font-semibold mt-2"><Clock className="w-4 h-4" /> {delivery}</div>
            </div>
            <div className="p-4 bg-white rounded-lg border text-sm text-gray-700">
              Market average: $99 - $699/month. We focus on SRE-first SLOs and actionable alerts over noise.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Business Benefits</h2>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start text-gray-700 text-sm">
                    <ArrowRight className="w-4 h-4 text-sky-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 p-6 bg-blue-600 text-white rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold">Add reliability guardrails today</p>
                <p className="text-blue-100 text-sm">Call {contact.phone} • {contact.email}</p>
              </div>
              <div className="flex gap-3">
                <a href={`tel:${contact.phone}`} className="px-5 py-3 bg-white text-blue-700 rounded-lg font-semibold">Call</a>
                <a href={`mailto:${contact.email}?subject=API Uptime & SLO Monitor - Demo Request`} className="px-5 py-3 border-2 border-white rounded-lg font-semibold">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

