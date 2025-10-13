import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap, Database, BarChart3, TrendingUp } from 'lucide-react';

export default function FiveGDataAnalyticsPage() {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Process massive data streams in real-time with 5G's ultra-low latency capabilities",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Advanced Insights",
      description: "Leverage AI-powered analytics to extract meaningful insights from 5G network data",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Predictive Modeling",
      description: "Anticipate network performance and user behavior with machine learning algorithms",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Secure Data Processing",
      description: "Enterprise-grade security for sensitive 5G network and user data",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Visual Dashboards",
      description: "Interactive dashboards for comprehensive 5G network monitoring and analysis",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Quick deployment and integration with existing 5G infrastructure",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Data Analytics Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of 5G networks with advanced data analytics and real-time insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G Data Analytics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300 mb-4">
                Process massive amounts of 5G network data in real-time, enabling instant decision-making and optimization.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">AI-Powered Insights</h3>
              <p className="text-gray-300 mb-4">
                Leverage artificial intelligence and machine learning to uncover patterns and predict network behavior.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Scalable Architecture</h3>
              <p className="text-gray-300 mb-4">
                Built to scale with your 5G network growth, handling increasing data volumes seamlessly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Comprehensive Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Monitor network performance, user experience, and security metrics across your entire 5G infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}