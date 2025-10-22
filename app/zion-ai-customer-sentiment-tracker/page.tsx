'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Zion Ai Customer Sentiment Tracker</title>
        <meta name="description" content="Learn about Zion Ai Customer Sentiment Tracker services and solutions at Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Ai Customer Sentiment Tracker
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about Zion Ai Customer Sentiment Tracker services and solutions at Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}