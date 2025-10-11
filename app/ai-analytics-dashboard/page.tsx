'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Target, ArrowRight, CheckCircle, Brain, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive data visualization and real-time insights for informed decision making.',
      benefits: ['Live dashboards', 'Custom metrics', 'Data visualization', 'Performance tracking']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis to predict future outcomes.',
      benefits: ['Trend forecasting', 'Anomaly detection', 'Risk assessment', 'Growth prediction']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Monitor and track progress towards business objectives with intelligent insights.',
      benefits: ['KPI monitoring', 'Progress tracking', 'Goal alignment', 'Performance metrics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for data-driven business insights" />
        <meta name="keywords" content="AI analytics, business intelligence, data dashboard, predictive analytics" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dashboard</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology for comprehensive business intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI analytics can transform your business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

export default AIAnalyticsDashboardPage