// import React from 'react';
// Metadata handled by React Helmet
import { BarChart3, CheckCircle, ArrowRight, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Pipeline Cost Inspector | Zion Tech Group - Micro SaaS',
  description: 'Analyze warehouse queries and orchestration runs to identify costly patterns, propose fixes, and auto-open PRs for optimization.',
  keywords: 'data pipeline costs, warehouse optimization, dbt, Airflow, Dagster, BigQuery, Snowflake, ETL cost, query optimization',
};

export default function DataPipelineCostInspectorPage() {
  const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' } as const;
  const features = [
    'Hotspot detection for queries and jobs',
    'Materialization and partitioning recommendations',
    'Cost anomaly alerts and budgets',
    'dbt/Airflow/Dagster integration',
    'Git PR hints to optimize SQL/ETL',
  ];
  const benefits = [
    'Lower warehouse and compute bills',
    'Faster jobs and stable SLAs',
    'Developer time savings with PR hints',
  ];
  const pricing = '$199 - $1,299/month';
  const delivery = '2-3 weeks';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-600 text-white rounded-lg"><BarChart3 className="w-6 h-6" /></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Data Pipeline Cost Inspector</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Identify and fix the most expensive queries and jobs across your data platform. Receive actionable recommendations and ready-to-merge PR hints.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 text-orange-600 font-semibold"><DollarSign className="w-4 h-4" /> {pricing}</div>
              <div className="flex items-center gap-2 text-amber-600 font-semibold mt-2"><Clock className="w-4 h-4" /> {delivery}</div>
            </div>
            <div className="p-4 bg-white rounded-lg border text-sm text-gray-700">
              Market average: $250 - $1,600/month. Includes dbt/Airflow/Dagster connectors and PR hinting for faster adoption.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Business Benefits</h2>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start text-gray-700 text-sm">
                    <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-orange-600 text-white rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold">Cut data spend with actionable fixes</p>
                <p className="text-orange-100 text-sm">Call {contact.phone} • {contact.email}</p>
              </div>
              <div className="flex gap-3">
                <a href={`tel:${contact.phone}`} className="px-5 py-3 bg-white text-orange-700 rounded-lg font-semibold">Call</a>
                <a href={`mailto:${contact.email}?subject=Data Pipeline Cost Inspector - Demo Request`} className="px-5 py-3 border-2 border-white rounded-lg font-semibold">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

