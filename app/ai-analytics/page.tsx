import React from "react";
import { Helmet } from "react-helmet-async";

const AiAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics solutions by Zion Tech Group." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced analytics powered by artificial intelligence to drive your business forward.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
            <p className="text-gray-300">
              Forecast future trends and make data-driven decisions with AI-powered predictions.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Insights</h3>
            <p className="text-gray-300">
              Get instant insights from your data with real-time AI analysis and reporting.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Custom Dashboards</h3>
            <p className="text-gray-300">
              Personalized dashboards that adapt to your business needs and KPIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAnalyticsPage;
