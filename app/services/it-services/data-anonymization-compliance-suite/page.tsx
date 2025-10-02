import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Data Anonymization & Compliance Suite | Zion Tech Group',
  description: 'Turn-key data masking, tokenization, and anonymization with GDPR/CCPA/HIPAA alignment. Pipelines for warehouses, lakes, and SaaS apps.',
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Data Anonymization & Compliance Suite</h1>
      <p className="text-gray-600 mb-8">
        Production pipelines for masking, tokenization, and anonymization that preserve utility while protecting sensitive attributes. Integrates with modern data stacks and app backends.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        <div className="p-5 border rounded-lg bg-white">
          <h2 className="font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>K-anonymity, l-diversity, t-closeness transformations</li>
            <li>Format-preserving encryption and tokenization</li>
            <li>Catalog scanning and PII auto-detection</li>
            <li>Warehouse jobs for BigQuery, Snowflake, Redshift</li>
            <li>Streaming support via Kafka/Cloud Pub/Sub</li>
          </ul>
        </div>
        <div className="p-5 border rounded-lg bg-white">
          <h2 className="font-semibold mb-2">Compliance</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>GDPR, CCPA, HIPAA-ready policies</li>
            <li>Data retention and lineage reporting</li>
            <li>Audit trails and access reviews</li>
          </ul>
        </div>
        <div className="p-5 border rounded-lg bg-white">
          <h2 className="font-semibold mb-2">Pricing</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Starter: $499/mo up to 1 TB processed</li>
            <li>Growth: $1,499/mo up to 10 TB processed</li>
            <li>Enterprise: Custom, SSO, private networking</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">Market ranges typically $300–$3,000+/mo depending on volume and controls.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-5 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Integrations</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>dbt, Airflow, Fivetran, Meltano</li>
            <li>Warehouse UDFs and stored procedures</li>
            <li>REST API for app-level obfuscation</li>
          </ul>
        </div>
        <div className="p-5 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Observability</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Drift and re-identification risk scoring</li>
            <li>PII scanning reports and coverage heatmaps</li>
            <li>Alerting via Slack, Email, PagerDuty</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Talk to Compliance Engineer</Link>
        <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center justify-center px-5 py-3 border rounded-md hover:bg-gray-50">Email: kleber@ziontechgroup.com</a>
        <a href="tel:+13024640950" className="inline-flex items-center justify-center px-5 py-3 border rounded-md hover:bg-gray-50">Call: +1 302 464 0950</a>
      </div>
      <div className="text-xs text-gray-500 mt-4">Office: 364 E Main St STE 1008, Middletown DE 19709</div>
    </div>
  );
}

