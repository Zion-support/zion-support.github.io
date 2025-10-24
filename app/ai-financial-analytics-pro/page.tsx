'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiFinancialAnalyticsProPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">AI Financial Analytics Pro</h1>
            <p className="text-xl text-gray-300 mb-8">Advanced financial analytics powered by AI</p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
              <p className="text-xl text-gray-300">Advanced AI solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Analytics</h3>
                <p className="text-gray-300">Comprehensive financial data analysis and insights.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
                <p className="text-gray-300">Live tracking of financial metrics and performance.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Modeling</h3>
                <p className="text-gray-300">AI-powered forecasting and trend analysis.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiFinancialAnalyticsProPage;