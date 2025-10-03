import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function DataPlatformModernizationPage() {
  const title = 'Data Platform Modernization (dbt + Snowflake) — Zion Tech Group';
  const description = 'Modern ELT with dbt, Snowflake/BigQuery, and governed metrics layer for reliable BI and lower costs.';

  const features = [
    'Warehouse migration and dimensional modeling',
    'dbt transformation pipelines and CI',
    'Semantic layer and metrics governance',
    'Orchestration and observability',
    'Cost control and performance tuning',
    'Data quality tests and SLAs'
  ];

  const pricing = [
    { name: 'Foundation', price: '$25,000/project', details: ['Assessment & roadmap', 'Pilot dbt project', 'Basic observability'] },
    { name: 'Scale', price: '$75,000/project', details: ['Full pipeline suite', 'Metrics layer', 'Cost/perf tuning'] },
    { name: 'Enterprise', price: '$180,000/project', details: ['Multi-domain program', 'SLA & quality gates', 'Enablement & training'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/it-services/data-platform-modernization" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-cyan-700">
              <BarChart3 className="w-8 h-8" />
              <span className="font-semibold">IT Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Data Platform Modernization (dbt + Snowflake)</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700">Get Proposal</Link>
              <a href="#pricing" className="border border-cyan-600 text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Deliverables</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
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
                  <div className="text-3xl font-extrabold text-cyan-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Trust Your Metrics</h2>
            <p className="opacity-90 mb-6">A governed data platform your teams will rely on for decisions.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-700">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80">364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

