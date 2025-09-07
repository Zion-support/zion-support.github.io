import React from 'react';
import Head from 'next/head';

export default function AIPoweredCybersecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI-Powered Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Cybersecurity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered cybersecurity solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Threat Detection</h3>
            <p className="text-gray-300">
              AI-powered threat detection and analysis.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Automated Response</h3>
            <p className="text-gray-300">
              Automated incident response and mitigation.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Behavioral Analytics</h3>
            <p className="text-gray-300">
              Advanced behavioral analytics for security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}