import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function EmailSignaturePage() {
  return (
    <></>
      <Helmet></Helmet>
        <title />AI Email Signature Manager - Professional Email Signatures | Zion Tech Group</title>
        <meta name="description" content="Create and manage professional email signatures for your team. Beautiful templates, team management, and analytics included." /></meta>
        <meta name="keywords" content="email signature, email marketing, team management, professional signatures, email branding" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/email-signature"  /></link>
    <><Helmet>
        <title>EmailSignature - Zion Tech Group</title>
        <meta name="description" content="Professional email signature solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">EmailSignature</h1>
          <p className="text-lg text-gray-300 mb-8">Professional email signature solutions coming soon.</p>
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
