import React from 'react';
export default AiIntegrationServicesPage;
'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiIntegrationServicesPage() {
  return (
    <></>
      <Helmet></Helmet>
        <title>Ai Integration Services - Zion Tech Group</title>
        <meta name="description" content="Ai Integration Services services by Zion Tech Group. Professional AI and IT solutions." /></meta>
        <meta name="keywords" content="ai-integration-services, AI solutions, IT services" /></meta>
    <><Helmet>
        <title>AiIntegrationServices - Zion Tech Group</title>
        <meta name="description" content="Professional ai integration services solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiIntegrationServices</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai integration services solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div></>
  );
}
