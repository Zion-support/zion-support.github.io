'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, CheckCircle, Clock, Shield, TrendingUp, BarChart, MessageCircle, FileText, Cpu, Send, BarChart3, Target, DollarSign, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

// Icon mapping for serialization
const iconMap = {
  Zap,
  Brain,
  Settings,
  Globe,
  Users,
  Star,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  BarChart,
  MessageCircle,
  FileText,
  Cpu,
  Send,
  BarChart3,
  Target,
  DollarSign,
  Activity,
  Lock,
  CreditCard,
  Database,
  Building2,
  Sparkles,
  PieChart,
  ArrowRight
};

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: 'Brain',
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: 'Settings',
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: 'Globe',
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automated customer support with intelligent routing and response generation',
      icon: 'MessageCircle',
      benefits: ['24/7 Support', 'Instant Responses', 'Multi-language Support', 'Sentiment Analysis']
    },
    {
      title: 'Data Processing',
      description: 'Automated data collection, processing, and analysis workflows',
      icon: 'Database',
      benefits: ['Real-time Processing', 'Data Validation', 'Error Detection', 'Automated Reporting']
    },
    {
      title: 'Marketing Automation',
      description: 'Intelligent marketing campaigns and customer engagement automation',
      icon: 'Target',
      benefits: ['Personalized Campaigns', 'Behavioral Triggers', 'A/B Testing', 'Performance Analytics']
    },
    {
      title: 'Financial Operations',
      description: 'Automated financial processes and compliance monitoring',
      icon: 'DollarSign',
      benefits: ['Invoice Processing', 'Payment Automation', 'Compliance Checks', 'Financial Reporting']
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Improve process efficiency by 80%',
    'Eliminate human errors in repetitive tasks',
    'Enable 24/7 operations without human intervention',
    'Scale operations instantly based on demand',
    'Focus human resources on strategic activities'
  ];

  const stats = [
    { number: '95%', label: 'Process Accuracy', icon: 'CheckCircle' },
    { number: '60%', label: 'Cost Reduction', icon: 'DollarSign' },
    { number: '80%', label: 'Time Savings', icon: 'Clock' },
    { number: '24/7', label: 'Availability', icon: 'Shield' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            AI Automation Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business operations with intelligent automation that learns, adapts, 
            and scales with your organization's needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.number}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Core Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven automation capabilities that transform how your business operates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <IconComponent className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Automation Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI automation can revolutionize different aspects of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = iconMap[useCase.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-10 h-10 text-purple-400 mr-4" />
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose AI Automation?
              </h2>
              <p className="text-gray-300 mb-8">
                Our AI automation solutions are designed to deliver measurable results, 
                reduce operational costs, and improve efficiency across your organization.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Implementation Process</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Assessment</h4>
                    <p className="text-gray-300 text-sm">Analyze your current processes and identify automation opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Design</h4>
                    <p className="text-gray-300 text-sm">Create custom automation workflows tailored to your business needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Deploy</h4>
                    <p className="text-gray-300 text-sm">Implement and test automation solutions in your environment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Optimize</h4>
                    <p className="text-gray-300 text-sm">Monitor performance and continuously improve automation processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your automation journey today and experience the power of AI-driven business transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Automation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;