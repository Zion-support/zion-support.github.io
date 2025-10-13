import React from 'react';'import { Helmet } from 'react-helmet-async';'import { Brain, Shield, Zap, BarChart3, Database, TrendingUp } from 'lucide-react';'
export default function FiveGDataAnalyticsPage() {
  const features = [
    {
      title: "Real-time Analytics","      description: "Process massive data streams in real-time with 5G's ultra-low latency",'      icon: <BarChart3 className="w-8 h-8" />"    },
    {
      title: "Edge Computing","      description: "Deploy analytics at the edge for instant insights and reduced latency","      icon: <Database className="w-8 h-8" />"    },
    {
      title: "Predictive Intelligence","      description: "Advanced AI models for predictive analytics and forecasting","      icon: <Brain className="w-8 h-8" />"    },
    {
      title: "Secure Data Processing","      description: "Enterprise-grade security for sensitive data analytics","      icon: <Shield className="w-8 h-8" />"    },
    {
      title: "High-Speed Processing","      description: "Leverage 5G's high bandwidth for rapid data processing",'      icon: <Zap className="w-8 h-8" />"    },
    {
      title: "Growth Insights","      description: "Drive business growth with actionable data insights","      icon: <TrendingUp className="w-8 h-8" />"    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions by Zion Tech Group" />"      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"        <div className="text-center mb-16">"          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">"            5G Data Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"            Transform your business with real-time data analytics powered by 5G technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">"              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">"                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"              <p className="text-gray-300">{feature.description}</p>"            </div>
          ))}
        </div>

        <div className="mt-16 text-center">"          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">"            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Transform Your Data Analytics?</h2>"            <p className="text-gray-300 mb-6">"              Contact us to learn how 5G data analytics can revolutionize your business operations.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">"              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}