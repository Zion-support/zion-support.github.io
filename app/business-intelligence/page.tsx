'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Target } from 'lucide-react'

export default function BusinessIntelligencePage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Advanced Analytics',
      description: 'Transform your data into actionable insights with powerful business intelligence tools.',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Data visualization', 'Custom reporting']
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to discover patterns and trends in your business data.',
      benefits: ['Machine learning', 'Pattern recognition', 'Automated insights', 'Smart recommendations']
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Strategic Decision Making',
      description: 'Make informed business decisions based on comprehensive data analysis and reporting.',
      benefits: ['KPI tracking', 'Performance metrics', 'Trend analysis', 'Strategic planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence - Zion Tech Group | Data Analytics Solutions</title>
        <meta name="description" content="Transform your business data into actionable insights with our advanced business intelligence solutions. Real-time analytics, AI-powered insights, and strategic decision making." />
        <meta name="keywords" content="business intelligence, data analytics, business insights, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Business Intelligence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business data into actionable insights with our advanced business intelligence solutions. Make informed decisions and drive growth with data-driven strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Data?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our business intelligence solutions help you unlock the power of your data and drive business growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}