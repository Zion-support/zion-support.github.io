'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Users, Target, ArrowRight, Brain, Zap, Shield, Clock, Activity, TrendingUp, Star, Phone, Mail, MapPin, BarChart, MessageSquare, Eye, Sparkles, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown } from 'lucide-react';

const AICRMAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Customer Management',
      description: 'AI-powered customer relationship management with intelligent insights and automation.',
      benefits: ['Customer profiling', 'Behavior analysis', 'Predictive insights', 'Automated follow-ups']
    },
    {
      icon: Target,
      title: 'Lead Scoring',
      description: 'Intelligent lead scoring and qualification using AI algorithms and machine learning.',
      benefits: ['Lead prioritization', 'Scoring algorithms', 'Qualification automation', 'Conversion prediction']
    },
    {
      icon: Brain,
      title: 'Sales Intelligence',
      description: 'AI-powered sales insights and recommendations for better decision making.',
      benefits: ['Sales forecasting', 'Opportunity analysis', 'Performance insights', 'Recommendation engine']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and productivity.',
      benefits: ['Workflow automation', 'Task automation', 'Process optimization', 'Time savings']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting for better business insights and decision making.',
      benefits: ['Real-time analytics', 'Custom reports', 'Performance tracking', 'Data visualization']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security and compliance for customer data protection.',
      benefits: ['Data encryption', 'Access control', 'Compliance management', 'Audit trails']
    }
  ];

  const benefits = [
    'Increase sales by 40%',
    'Improve lead conversion by 60%',
    'Reduce manual tasks by 80%',
    'Enhance customer satisfaction by 50%',
    'Enable data-driven decisions',
    'Automate sales processes',
    'Scale sales operations',
    'Improve team productivity'
  ];

  const useCases = [
    {
      title: 'Sales Management',
      description: 'Streamline sales processes and improve team performance with AI insights',
      icon: '💼'
    },
    {
      title: 'Lead Generation',
      description: 'Identify and qualify high-value leads with AI-powered scoring and analysis',
      icon: '🎯'
    },
    {
      title: 'Customer Support',
      description: 'Enhance customer support with AI-powered insights and automation',
      icon: '🎧'
    },
    {
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns and improve customer engagement',
      icon: '📢'
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict sales outcomes and optimize revenue with AI forecasting',
      icon: '📈'
    },
    {
      title: 'Customer Analytics',
      description: 'Gain deep insights into customer behavior and preferences',
      icon: '📊'
    }
  ];

  return (
    <Helmet>
        <title>AI CRM Assistant - Zion Tech Group</title>
        <meta name="description" content="Transform your customer relationship management with our AI CRM Assistant. Intelligent automation, lead scoring, and sales insights for better business growth." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, lead scoring, CRM AI, business intelligence" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI CRM Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationship management with our AI CRM Assistant. Intelligent automation, 
              lead scoring, and sales insights for better business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced CRM Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI CRM Assistant combines cutting-edge technology with sales expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From sales to marketing, our AI CRM Assistant serves diverse business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI CRM Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of customer relationship management with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your CRM?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses who are already using our AI CRM Assistant
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div></div></div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICRMAssistantPage;
