'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Code, Users, Shield, BarChart, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered decision making and learning capabilities.',
      icon: Workflow,
      benefits: ['Reduced manual work', 'Improved accuracy', 'Faster processing', 'Cost savings']
    },
    {
      title: 'Smart Workflow Optimization',
      description: 'Optimize your workflows with AI that learns from patterns and suggests improvements.',
      icon: TrendingUp,
      benefits: ['Continuous improvement', 'Better resource allocation', 'Enhanced efficiency', 'Real-time optimization']
    },
    {
      title: 'Automated Decision Making',
      description: 'Let AI make intelligent decisions based on data patterns and business rules.',
      icon: Brain,
      benefits: ['Consistent decisions', '24/7 availability', 'Data-driven insights', 'Reduced human error']
    },
    {
      title: 'Intelligent Document Processing',
      description: 'Automatically extract, process, and route documents with AI-powered understanding.',
      icon: FileText,
      benefits: ['Faster processing', 'Improved accuracy', 'Reduced manual work', 'Better organization']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate customer inquiries, ticket routing, and response generation.',
      icon: MessageCircle,
      impact: '75% reduction in response time'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: DollarSign,
      impact: '90% faster processing'
    },
    {
      title: 'HR Process Automation',
      description: 'Automate recruitment, onboarding, and employee management processes.',
      icon: Users,
      impact: '60% time savings'
    },
    {
      title: 'Supply Chain Automation',
      description: 'Automate inventory management, order processing, and logistics optimization.',
      icon: Package,
      impact: '40% cost reduction'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic work'
    },
    {
      icon: Shield,
      title: 'Improved Accuracy',
      description: 'Reduce human errors with AI-powered validation'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Significant reduction in operational costs'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Easily scale automation as your business grows'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group | Intelligent Process Automation</title>
        <meta name="description" content="Transform your business with AI Automation solutions. Intelligent process automation, workflow optimization, and smart decision-making for better efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation, RPA" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Automation
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with intelligent automation. Our AI-powered solutions automate complex processes, 
              optimize workflows, and make smart decisions to drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Automation Features
              </h2>
              <p className="text-xl text-gray-300">
                Leverage cutting-edge AI to automate and optimize your business processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300">
                See how AI automation transforms different business functions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="text-cyan-400 font-semibold">{useCase.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Automation?
              </h2>
              <p className="text-xl text-gray-300">
                Experience the transformative power of intelligent automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how AI automation can transform your business processes and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Start Automation Journey</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiAutomationPage;