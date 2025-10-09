'use client';
import React from 'react';
import Link from 'next/link';
import { Target, Brain, TrendingUp, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Lead Qualification',
      description: 'AI-powered lead scoring and qualification to focus on high-value prospects',
      benefits: ['Automated scoring', 'Behavioral analysis', 'Priority ranking']
    },
    {
      icon: Target,
      title: 'Sales Forecasting',
      description: 'Predictive analytics for accurate sales forecasting and pipeline management',
      benefits: ['Revenue prediction', 'Pipeline analysis', 'Risk assessment']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-driven insights to optimize sales processes and improve conversion rates',
      benefits: ['Process optimization', 'A/B testing', 'Performance metrics']
    }
  ];

  const salesProcesses = [
    {
      title: 'Lead Generation',
      description: 'Automated lead generation and nurturing campaigns',
      icon: Target,
      features: ['Prospect identification', 'Email sequences', 'Follow-up automation']
    },
    {
      title: 'Pipeline Management',
      description: 'Intelligent pipeline tracking and opportunity management',
      icon: TrendingUp,
      features: ['Deal tracking', 'Stage progression', 'Forecasting']
    },
    {
      title: 'Customer Retention',
      description: 'AI-powered customer success and retention strategies',
      icon: Users,
      features: ['Churn prediction', 'Upselling opportunities', 'Customer health scores']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Sales Automation
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Accelerate your sales process with AI-powered automation that identifies, 
              qualifies, and converts leads more effectively. Increase revenue by 40% 
              while reducing manual work by 60%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Boost Your Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                See It In Action
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Sales Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI sales automation platform combines machine learning, predictive analytics, 
              and workflow automation to supercharge your sales performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales Processes Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">End-to-End Sales Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate every stage of your sales process from lead generation to customer retention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salesProcesses.map((process, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <process.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{process.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{process.description}</p>
                <ul className="space-y-2">
                  {process.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Sales Automation?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">40% Revenue Increase</h3>
                    <p className="text-gray-300">Average revenue increase within 3 months of implementation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">60% Time Savings</h3>
                    <p className="text-gray-300">Reduce manual sales tasks and focus on closing deals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Higher Conversion</h3>
                    <p className="text-gray-300">Improve conversion rates with AI-optimized sales processes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Automate Your Sales?</h3>
              <p className="text-gray-300 mb-6">
                Join hundreds of sales teams already using our AI automation 
                to close more deals and grow revenue faster.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Start Your Sales Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Sales Performance
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop losing deals to inefficient processes. Our AI sales automation will help you 
            close more deals, faster, and with less effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISalesAutomationPage;