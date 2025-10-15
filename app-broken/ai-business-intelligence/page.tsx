import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiBusinessIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Advanced AI business intelligence solutions" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          AI Business Intelligence
        </h1>
        <p className="text-xl text-gray-300 text-center">
          Transform your business with AI-powered intelligence solutions
        </p>
      </div>
    </div>
  );
}