'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart, TrendingUp, Target, Zap, Shield } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track and analyze performance metrics across all your business operations.',
      benefits: ['KPI monitoring', 'ROI analysis', 'Growth tracking', 'Benchmarking']
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and track business goals with AI-powered recommendations for optimization.',
      benefits: ['Smart goal setting', 'Progress tracking', 'Achievement alerts', 'Performance insights']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically with AI-driven insights and recommendations.',
      benefits: ['Scheduled reports', 'Custom templates', 'Data visualization', 'Export options']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data and analytics.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group | Advanced Business Intelligence</title>
        <meta name="description" content="Transform your business with AI-powered analytics and insights. Get real-time dashboards, predictive analytics, and intelligent recommendations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered analytics and insights. Get real-time dashboards, predictive analytics, and intelligent recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAnalyticsPage;