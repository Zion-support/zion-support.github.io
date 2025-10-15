import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiBusinessIntelligenceProPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Ai Business Intelligence Pro Solutions',
      description: 'Professional ai business intelligence pro services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ai business intelligence pro implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your ai business intelligence pro needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Ai Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai business intelligence pro solutions and services" />
        <meta name="keywords" content="ai, business, intelligence, pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-bold text-whitemb-6">
              AI Business Intelligence Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your data into actionable insights with AI-powered business intelligence
            </p>
          </div>
          
          <div className="gridmd:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI Analytics</h3>
              <p className="text-gray-300">
                Advanced AI algorithms for deep data analysis and insights.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <BarChart3 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Dashboards</h3>
              <p className="text-gray-300">
                Live dashboards with real-time business metrics and KPIs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">
                Forecast trends and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default AiBusinessIntelligenceProPage;
