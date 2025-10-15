import React from "react";
import { Helmet } from 'react-helmet-async';

const FiveGDataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Data Analytics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics and insights for enterprise applications." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">5G Data Analytics</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage 5G network data for actionable insights and business intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">Process and analyze 5G data in real-time for instant insights.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Network Optimization</h3>
              <p className="text-gray-300">Use analytics to optimize 5G network performance and coverage.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Predictive Insights</h3>
              <p className="text-gray-300">AI-powered predictive analytics for proactive network management.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGDataAnalyticsPage;