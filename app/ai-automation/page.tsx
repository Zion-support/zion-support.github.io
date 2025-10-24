<<<<<<< HEAD
<<<<<<<< HEAD:app/ai-automation/page.tsx
'use client';
import React from 'react';
import Head from "next/head";

import Link from 'next/link';
import { 
  ArrowRight, Zap, Brain, Settings, Globe, Users, Star, CheckCircle,
  Clock, Shield, TrendingUp, BarChart, MessageCircle, FileText, Cpu
} from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: Users
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: BarChart
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: MessageCircle
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: FileText
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 months'
  ];

  const stats = [
    { number: '70%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Automated Operations', icon: Clock },
    { number: '99.9%', label: 'Accuracy Rate', icon: Shield },
    { number: '3-6', label: 'Months ROI', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span> Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
=======
import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function AIAutomationPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Feature 1',
      description: 'Description of the first key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Feature 2',
      description: 'Description of the second key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Feature 3',
      description: 'Description of the third key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Feature 4',
      description: 'Description of the fourth key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    }
  ];

  const stats = [
    { number: '95%', label: 'Success Rate' },
    { number: '80%', label: 'Efficiency Gain' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent automation solutions for your business.
>>>>>>> origin/main
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Automation Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI automation solutions come with advanced features designed to streamline your business processes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real-World Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our AI automation solutions are transforming businesses across different industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI automation solutions are designed to deliver measurable results and transform your business operations.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation</h3>
                  <p className="text-gray-300">
                    Our AI-powered automation learns from your business processes and continuously optimizes performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let our experts help you identify automation opportunities and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Automation Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
========
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, CheckCircle, Clock, Shield, TrendingUp, BarChart, MessageCircle, FileText, Cpu, Send, BarChart3, Target, DollarSign, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react'
'use client'
    "title": 'Workflow Automation',
      "description": 'Automate complex business processes with intelligent workflow management.',
    "title": 'Intelligent Decision Making',
      "description": 'AI-powered decision making based on data analysis and business rules.',
    "title": 'Custom Integrations',
      "description": 'Seamlessly integrate with your existing systems and third-party applications.',
    "title": 'Scalable Solutions',
    "description": 'Automation solutions that grow with your business and adapt to changing needs.',
      "title": 'Customer Service',
    "description": 'Automate ticket routing, response generation, and issue resolution.'
      "title": 'Data Processing',
    "description": 'Automate data collection, validation, and analysis workflows.'
      "title": 'Marketing Automation',
    "description": 'Automate email campaigns, lead scoring, and customer segmentation.'
      "title": 'Financial Operations',
    "description": 'Automate invoice processing, expense management, and financial reporting.'
  'Reduce operational costs by up to 70%'
    'Increase productivity and efficiency'
    'Eliminate human errors in repetitive tasks'
    '24/7 automated operations'
    'Scalable and adaptable solutions'
    'ROI within 3-6 months'
    { "number": '70%', "label": 'Cost Reduction',
    { "number": '24/7', "label": 'Automated Operations',
    { "number": '99.9%', "label": 'Accuracy Rate';,
    { "number": '3-6', "label": 'Months ROI'
>>>>>>>> origin/main:app-backup/ai-automation/page.tsx
=======

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Contact us today to learn more about our solutions.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/main
