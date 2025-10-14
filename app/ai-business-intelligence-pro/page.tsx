import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart3, TrendingUp } from 'lucide-react';

const AIBusinessIntelligenceProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Business Intelligence Pro
            </h1>
<p className="Transform your data into actionable insights with AI-powered business intelligence
               ">$2</p>
          </div>
          
          <div className="grid md:grid-cols-3gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 borderborder-white/20">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3  ">AI Analytics</h3>
<p className="Advanced AI algorithms for deep data analysis and insights.
                 ">$2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 borderborder-white/20">
              <BarChart3 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3  ">Real-time Dashboards</h3>
<p className="Live dashboards with real-time business metrics and KPIs.
                 ">$2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 borderborder-white/20">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3  ">Predictive Analytics</h3>
<p className="Forecast trends and make data-driven decisions.
                 ">$2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBusinessIntelligenceProPage;