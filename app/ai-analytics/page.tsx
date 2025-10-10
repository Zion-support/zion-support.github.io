'use client';
import React, { useState, useEffect } from 'react';
import { BarChart, TrendingUp, Users, Target, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin, Eye, Sparkles, Globe, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

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
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Identify opportunities for improvement with AI-driven performance analysis and recommendations.',
      benefits: ['ROI analysis', 'Efficiency metrics', 'Cost optimization', 'Growth opportunities']
    }
  ];

  const analyticsServices = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced analytics platform',
      icon: BarChart,
      features: ['Data visualization', 'Custom dashboards', 'Real-time monitoring', 'Predictive modeling'],
      benefits: ['Better decisions', 'Increased efficiency', 'Cost reduction', 'Competitive advantage'],
      price: 'Starting at $499/month'
    },
    {
      title: 'Customer Analytics',
      description: 'Understand your customers better with AI-powered behavioral analysis and segmentation',
      icon: Users,
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value'],
      benefits: ['Higher retention', 'Better targeting', 'Improved satisfaction', 'Increased revenue'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Marketing Analytics',
      description: 'Optimize your marketing campaigns with detailed performance tracking and AI insights',
      icon: Target,
      features: ['Campaign tracking', 'Attribution modeling', 'ROI analysis', 'A/B testing'],
      benefits: ['Higher conversion', 'Better ROI', 'Optimized spend', 'Data-driven decisions'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial performance with automated reporting and predictive financial modeling',
      icon: TrendingUp,
      features: ['Financial reporting', 'Budget analysis', 'Forecasting', 'Risk assessment'],
      benefits: ['Better planning', 'Risk mitigation', 'Cost control', 'Growth insights'],
      price: 'Starting at $599/month'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track sales, customer behavior, and inventory with comprehensive e-commerce analytics',
      icon: 'shopping-cart',
      examples: ['Sales tracking', 'Customer journey', 'Product performance', 'Inventory optimization']
    },
    {
      title: 'SaaS Metrics',
      description: 'Monitor key SaaS metrics like MRR, churn, and user engagement',
      icon: 'cloud',
      examples: ['MRR tracking', 'Churn analysis', 'User engagement', 'Feature adoption']
    },
    {
      title: 'Marketing Performance',
      description: 'Measure and optimize marketing campaigns across all channels',
      icon: 'megaphone',
      examples: ['Campaign ROI', 'Channel attribution', 'Lead scoring', 'Conversion tracking']
    },
    {
      title: 'Operations Analytics',
      description: 'Optimize business operations with data-driven insights and automation',
      icon: 'cog',
      examples: ['Process optimization', 'Resource allocation', 'Performance monitoring', 'Efficiency metrics']
    }
  ];

  return (
    <>
      <SEOOptimizer 
        title="AI Analytics Services - Zion Tech Group | Advanced Business Intelligence"
        description="Transform your data into actionable insights with our AI-powered analytics solutions. Real-time dashboards, predictive analytics, and automated reporting."
        keywords="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Analytics Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics platform. 
                Make data-driven decisions that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Analytics Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {analyticsServices.map((service, index) => (
                  <div key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-12 h-12 text-cyan-400 mr-4 group-hover:text-cyan-300 transition-colors" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      <a
                        href="tel:+13024640950"
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                  Why Choose Our AI Analytics?
                </h2>
                <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                  Our analytics solutions are designed to provide deep insights and drive business growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:bg-cyan-500 transition-colors">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-xl text-cyan-400 mb-8 neon-glow">
                Our AI analytics solutions are designed to deliver measurable results. 
                All implementations include free trials, dedicated support, and ongoing optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Analytics Strategy
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAnalyticsPage;