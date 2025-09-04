import React from 'react';
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cybersecurity, cloud solutions, and digital transformation." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Services
              </h3>
              <p className="text-gray-600 mb-4">
                Machine learning, natural language processing, and computer vision solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Predictive Analytics</li>
                <li>• Chatbot Development</li>
                <li>• Image Recognition</li>
                <li>• Custom AI Models</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cybersecurity
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced security solutions to protect your digital assets and data.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Security Audits</li>
                <li>• Threat Detection</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure and migration services.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cloud Migration</li>
                <li>• Infrastructure Setup</li>
                <li>• DevOps Implementation</li>
                <li>• Monitoring & Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}