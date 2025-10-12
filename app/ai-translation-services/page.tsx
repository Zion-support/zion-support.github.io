import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiTranslationServicesPage() {
  return (
    <></>
      <Helmet></Helmet>
        <title>AI Translation Services - Multilingual Communication | Zion Tech Group</title>
        <meta name="description" content="Break language barriers with AI-powered translation services. Real-time translation, document processing, and multilingual support for global businesses." /></meta>
        <meta name="keywords" content="AI translation, multilingual, language services, real-time translation, document translation, global communication" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-translation-services"  /></link>
    <><Helmet>
        <title>AiTranslationServices - Zion Tech Group</title>
        <meta name="description" content="Professional ai translation services solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiTranslationServices</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai translation services solutions coming soon.</p>
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
