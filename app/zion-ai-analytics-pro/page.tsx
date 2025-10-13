import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Database, Eye } from 'lucide-react';

export default function ZionAiAnalyticsProPage() {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Powerful AI-driven analytics for deep business insights",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor your business metrics in real-time with live dashboards",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources and platforms",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Predictive Insights",
      description: "Get predictive analytics and forecasting capabilities",
      icon: <Eye className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics platform for comprehensive business intelligence and insights." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion AI Analytics Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}