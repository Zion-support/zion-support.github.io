export const metadata = {
  title: 'Data Quality & Observability | Zion Tech Group',
  description: 'Unified data quality, lineage, and observability platform for analytics and AI.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Quality & Observability</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl">
            Ensure trustworthy analytics and AI with end-to-end data quality checks, lineage, anomaly detection, and SLAs across pipelines and warehouses.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Capabilities</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Column-level lineage and impact analysis</li>
              <li>• Freshness, volume, schema, and distribution tests</li>
              <li>• Anomaly detection with adaptive thresholds</li>
              <li>• SLA monitoring, alerting, and incident workflows</li>
              <li>• dbt, Airflow, Dagster, and Great Expectations integration</li>
              <li>• BI and reverse ETL observability</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Snowflake, BigQuery, Redshift, Databricks</li>
              <li>• Fivetran, Airbyte, Meltano</li>
              <li>• Looker, Tableau, Power BI, Mode</li>
              <li>• PagerDuty, Slack, Jira</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><span className="font-semibold">Team</span>: $799/month</li>
              <li><span className="font-semibold">Business</span>: $1,999/month</li>
              <li><span className="font-semibold">Enterprise</span>: custom</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">Market comps: Monte Carlo, Bigeye, Acceldata $1k–$5k+/mo</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Outcomes</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• 90% reduction in data incidents</li>
              <li>• 70% faster root-cause analysis</li>
              <li>• 50% fewer false alerts</li>
              <li>• Improved trust in executive dashboards</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Talk to an Expert</h3>
            <p className="text-gray-700 text-sm mb-4">We assess your stack and implement guardrails tailored to your data mesh.</p>
            <div className="flex gap-3">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Contact</a>
              <a href="tel:+13024640950" className="border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

