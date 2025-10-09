'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, TrendingUp, Users, BarChart, Clock, CheckCircle, ArrowRight, Star, Globe, Smartphone, Code, Database, Cloud, Lock, Zap, Brain, MessageSquare } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI automatically scores and qualifies leads based on behavior, demographics, and engagement patterns.'
    },
    {
      icon: MessageSquare,
      title: 'Automated Outreach',
      description: 'Personalized email sequences, follow-ups, and social media engagement powered by AI.'
    },
    {
      icon: BarChart,
      title: 'Sales Forecasting',
      description: 'Predictive analytics to forecast sales performance and identify opportunities.'
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'Track and optimize the entire customer journey from awareness to conversion.'
    },
    {
      icon: Clock,
      title: 'Follow-up Automation',
      description: 'Intelligent follow-up sequences that adapt based on customer responses and behavior.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous optimization of sales processes based on AI insights and performance data.'
    }
  ];

  const capabilities = [
    {
      title: 'Lead Generation',
      description: 'Automatically identify and capture high-quality leads from multiple sources.',
      icon: Target
    },
    {
      title: 'Email Marketing',
      description: 'AI-powered email campaigns with personalization and A/B testing capabilities.',
      icon: MessageSquare
    },
    {
      title: 'CRM Integration',
      description: 'Seamless integration with existing CRM systems for unified data management.',
      icon: Database
    },
    {
      title: 'Social Selling',
      description: 'Automated social media engagement and content sharing for sales teams.',
      icon: Globe
    },
    {
      title: 'Meeting Scheduling',
      description: 'Intelligent calendar management and meeting scheduling with prospects.',
      icon: Clock
    },
    {
      title: 'Pipeline Management',
      description: 'Visual pipeline tracking with AI-powered insights and recommendations.',
      icon: BarChart
    }
  ];

  const benefits = [
    'Increase lead conversion by up to 85%',
    'Reduce sales cycle time by 40%',
    'Improve lead qualification accuracy',
    'Automate 80% of repetitive sales tasks',
    'Boost sales team productivity by 60%',
    'Generate 3x more qualified leads'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI Sales Automation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Sales
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your sales process with AI that identifies, qualifies, and nurtures leads while optimizing every step of the sales funnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Sales Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI sales automation platform combines lead intelligence, predictive analytics, and automated workflows to maximize your sales performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Sales Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From lead generation to closing deals, our AI handles every aspect of the sales process with intelligence and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Sales Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI sales automation delivers quantifiable results that transform your sales performance and revenue growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-gray-300 mb-6">Lead Conversion Increase</div>
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 mb-6">Faster Sales Cycle</div>
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-gray-300">More Qualified Leads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Sales?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of sales teams already using AI to close more deals, faster, and with less effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;