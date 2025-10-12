import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AICybersecuritySuiteProPage() {
  return (
    <>
      <Helmet>
        <title>A I Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered cybersecurity suite with threat detection, zero-trust architecture, and real-time monitoring. 99.9% threat detection accuracy. Starting at $199/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Cybersecurity Suite Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Protect your organization with AI-powered cybersecurity that detects and prevents threats in real-time. 
            Achieve 99.9% threat detection accuracy with zero-trust architecture and automated incident response.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}