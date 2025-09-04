import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ApiOverview() {
  const contact = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>API Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API overview for Zion Tech Group services. Learn about our REST APIs, authentication, and integration options." />
        <link rel="canonical" href={`${contact.website}/docs/api-overview`} />
      </Head>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">API Overview</h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Service APIs</h3>
              <p className="text-gray-600 mb-4">
                Machine learning and artificial intelligence APIs for natural language processing, computer vision, and predictive analytics.
              </p>
              <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium">
                View AI Services →
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Service APIs</h3>
              <p className="text-gray-600 mb-4">
                Infrastructure and enterprise APIs for cloud management, DevOps, and cybersecurity services.
              </p>
              <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium">
                View IT Services →
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Contact our team to get your API access and start integrating our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get API Access
              </Link>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}