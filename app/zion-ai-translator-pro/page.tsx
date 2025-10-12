import React from 'react';
export default ZionAiTranslatorProPage;
'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ZionAiTranslatorProPage() {
  return (
    <></>
      <Helmet></Helmet>
        <title>Zion Ai Translator Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Translator Pro services by Zion Tech Group. Professional AI and IT solutions." /></meta>
        <meta name="keywords" content="zion-ai-translator-pro, AI solutions, IT services" /></meta>
    <><Helmet>
        <title>ZionAiTranslatorPro - Zion Tech Group</title>
        <meta name="description" content="Professional zion ai translator pro solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">ZionAiTranslatorPro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional zion ai translator pro solutions coming soon.</p>
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
