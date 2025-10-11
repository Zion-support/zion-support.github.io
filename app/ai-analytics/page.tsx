'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Brain, BarChart, Target, TrendingUp, Zap, Eye, Users } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your business performance with AI-driven recommendations and insights.',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets quickly with our high-performance analytics engine.',
    }
  ];

  const benefits = [
    'Real-time data processing and analysis',
    'Customizable dashboard and reporting',
    'AI-powered predictive analytics',
    'Automated insights and recommendations',
    'Scalable cloud infrastructure',
    '24/7 monitoring and alerting'
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion AI | Advanced Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and intelligent recommendations." />
        <meta name="keywords" content="AI analytics, business intelligence, data analysis, predictive analytics, real-time dashboards" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                That Drives Decisions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Get real-time dashboards, predictive analytics, and intelligent recommendations.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our AI Analytics?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start making data-driven decisions with our AI analytics platform. 
              Get insights that matter for your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <Zap className="w-5 h-5" />
              </a>
              <a
                href="/demo"
                className="px-8 py-4 bg-white/10 text-white border border-gray-600 font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                View Demo
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAnalyticsPage;
