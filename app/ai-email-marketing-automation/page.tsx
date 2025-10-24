"use client";

import React from 'react';
import { Mail, Target, BarChart, Zap, Users, TrendingUp, Send, Calendar } from 'lucide-react';

const AIEmailMarketingAutomationPage = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Campaigns',
      description: 'Create personalized email campaigns that convert with AI-driven content generation.'
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience for targeted and relevant messaging.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-cyan-400" />,
      title: 'Advanced Analytics',
      description: 'Track open rates, click-through rates, and conversion metrics in real-time.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-cyan-400" />,
      title: 'Automated Workflows',
      description: 'Set up complex email sequences that trigger based on user behavior.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Email Marketing <span className="text-cyan-400">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation, 
            personalization, and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingAutomationPage;