import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Service = {
  name: string;
  summary: string;
  pricing: string;
  link: string;
};

const microSaaS: Service[] = [
  {
    name: 'Cloud Cost Guard (FinOps Assistant)',
    summary: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    pricing: 'Starting at $299/month',
    link: '/services/cloud-cost-guard'
  },
  {
    name: 'AI Content Generator',
    summary: 'Automated content creation using advanced AI models for blogs, social media, and marketing.',
    pricing: 'Starting at $199/month',
    link: '/services/ai-content-generator'
  }
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services including micro SaaS products, AI services, and IT solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation.
            </p>
          </div>

          {/* Micro SaaS Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Micro SaaS Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaS.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.pricing}
                    </span>
                    <Link href={service.link} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Contact Us
              </Link>
              <Link href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}