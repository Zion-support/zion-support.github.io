'use client';
import React from 'react';
import { Target, TrendingUp, Users, BarChart, Clock, CheckCircle, ArrowRight, Star, Shield, Zap, Phone, Mail } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI-powered lead scoring that automatically identifies high-value prospects and prioritizes sales efforts.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Forecasting',
      description: 'Predictive analytics that forecast sales performance and identify opportunities for growth.'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation based on behavior, preferences, and purchase history.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard providing insights into sales performance and optimization opportunities.'
    },
    {
      icon: Clock,
      title: 'Automated Follow-ups',
      description: 'Smart follow-up sequences that nurture leads and maintain customer relationships automatically.'
    },
    {
      icon: Shield,
      title: 'Pipeline Management',
      description: 'AI-driven pipeline management that identifies bottlenecks and suggests optimization strategies.'
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Increase conversion rates by 35%' },
    { icon: CheckCircle, text: 'Reduce sales cycle time by 50%' },
    { icon: CheckCircle, text: 'Improve lead qualification accuracy' },
    { icon: CheckCircle, text: 'Automate 80% of sales tasks' },
    { icon: CheckCircle, text: 'Boost revenue by 40%' },
    { icon: CheckCircle, text: 'Enhance customer relationships' }
  ];

  const salesProcesses = [
    {
      title: 'Lead Generation',
      description: 'Automated lead identification and qualification using AI algorithms',
      icon: Target
    },
    {
      title: 'Email Marketing',
      description: 'Personalized email campaigns with automated sending and tracking',
      icon: Mail
    },
    {
      title: 'Phone Outreach',
      description: 'AI-assisted phone scripts and call scheduling optimization',
      icon: Phone
    },
    {
      title: 'Follow-up Sequences',
      description: 'Automated follow-up workflows that nurture leads through the sales funnel',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Sales Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your sales process with intelligent automation that identifies opportunities, 
              nurtures leads, and closes deals faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">35%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Sales Cycle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Task Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Revenue Boost</div>
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
              Comprehensive AI-powered sales tools that drive results and maximize revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Sales Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent sales automation that drives results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <benefit.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Processes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automated Sales Processes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline every aspect of your sales process with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salesProcesses.map((process, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Sales Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start closing more deals with AI-powered sales automation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Get Started Now
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;