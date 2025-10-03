import React from 'react';
type Metadata = { title: string; description: string; keywords?: string[] };
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Partners | Zion Tech Group',
  description: 'Strategic partnerships with cloud, AI, and security leaders to deliver reliable, scalable solutions.',
  keywords: ['technology partners', 'cloud partners', 'AI partners', 'Zion Tech Group'],
};

export default function PartnersPage() {
  const partners = [
    {
      name: 'AWS Partner (Select Tier)',
      description: 'Cloud migrations, cost optimization, serverless architectures, and AI/ML on AWS.',
      link: 'https://aws.amazon.com/partners/',
      badge: 'Cloud'
    },
    {
      name: 'Microsoft Partner',
      description: 'Azure landing zones, DevOps, data platforms, and OpenAI integrations.',
      link: 'https://partner.microsoft.com/',
      badge: 'Cloud & AI'
    },
    {
      name: 'Google Cloud Partner',
      description: 'Data analytics, Vertex AI, MLOps, and multi-cloud architectures on GCP.',
      link: 'https://cloud.google.com/partners',
      badge: 'Data & AI'
    },
    {
      name: 'Cloudflare Partner',
      description: 'Zero Trust security, WAF, CDN performance, and edge compute deployments.',
      link: 'https://www.cloudflare.com/partners/',
      badge: 'Security'
    },
    {
      name: 'Datadog Partner',
      description: 'Full-stack observability, logs, APM, RUM, and AI-driven incident response.',
      link: 'https://www.datadoghq.com/partner/',
      badge: 'Observability'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Partners</h1>
          <p className="text-lg text-gray-600 max-w-3xl">We collaborate with industry leaders to deliver secure, scalable, and cost-efficient outcomes. Together we accelerate time-to-value for AI, micro SaaS, and IT transformations.</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <div key={i} className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{p.badge}</span>
              </div>
              <p className="text-gray-600 mb-4">{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Partner with Zion Tech Group</h2>
          <p className="text-gray-600 mb-6">Let’s co-create value and deliver measurable outcomes for our clients.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:kleber@ziontechgroup.com?subject=Partnership Inquiry" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">Become a Partner</a>
            <Link to="/case-studies" className="bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-lg">View Success Stories</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

