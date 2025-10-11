'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Transform raw data into actionable insights with our powerful analytics platform.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning to discover patterns and predict future trends.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources seamlessly.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Dashboards',
      description: 'Monitor key metrics and KPIs with interactive, real-time dashboards.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Grow with your business with our scalable BI infrastructure.'
    }
  ];

  const benefits = [
    'Improved decision-making with data-driven insights',
    'Reduced operational costs through process optimization',
    'Enhanced customer understanding and targeting',
    'Real-time monitoring of business performance',
    'Predictive analytics for future planning',
    'Automated reporting and alerting systems'
  ];

  return (
    <>
      <Helmet>
        <title>Business Intelligence Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced business intelligence solutions powered by AI and machine learning." />
        <meta name="keywords" content="business intelligence, data analytics, BI solutions, data visualization, AI insights, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Business Intelligence Solutions
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Transform your data into actionable insights with our advanced business intelligence 
                  platform powered by AI and machine learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                  <a
                    href="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Demo
                  </a>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Why Choose Our BI Solutions?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our business intelligence platform helps organizations make better decisions 
                    through data-driven insights and predictive analytics.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Industry Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Financial Services</h3>
                    <p className="text-gray-300">
                      Risk assessment, fraud detection, and portfolio optimization through 
                      advanced analytics and machine learning.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
                    <p className="text-gray-300">
                      Patient data analysis, treatment optimization, and predictive 
                      healthcare analytics for better outcomes.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
                    <p className="text-gray-300">
                      Customer behavior analysis, inventory optimization, and 
                      personalized recommendation engines.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our experts help you implement a comprehensive business intelligence 
                  solution tailored to your organization's needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BusinessIntelligencePage;