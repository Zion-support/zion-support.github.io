import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiEmailMarketingProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI email marketing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">AI Email Marketing Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced AI email marketing solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}