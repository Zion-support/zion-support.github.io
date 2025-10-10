'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, Mail, ArrowRight, Brain, Target, BarChart, Globe, Database, Award } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that learn and adapt to your business needs over time.',
      benefits: ['Adaptive workflows', 'Self-healing processes', 'Dynamic optimization', 'Real-time adjustments']
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Continuously optimize business processes for maximum efficiency and performance.',
      benefits: ['Performance monitoring', 'Efficiency metrics', 'Optimization suggestions', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'Secure Automation',
      description: 'Enterprise-grade security for all automated processes and data handling.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance monitoring']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly integrate and automate data flows across all your systems.',
      benefits: ['Multi-source integration', 'Real-time sync', 'Data validation', 'Error handling']
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Automation solutions that scale with your business growth and requirements.',
      benefits: ['Auto-scaling', 'Load balancing', 'Resource optimization', 'Global deployment']
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase process efficiency by 80%',
    'Eliminate human errors in repetitive tasks',
    'Enable 24/7 automated operations',
    'Improve customer response times by 70%',
    'Free up staff for strategic initiatives'
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automated customer support with intelligent routing and response generation',
      icon: '🤖'
    },
    {
      title: 'Data Processing',
      description: 'Automated data collection, validation, and analysis workflows',
      icon: '📊'
    },
    {
      title: 'Document Management',
      description: 'Intelligent document processing and workflow automation',
      icon: '📄'
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, payments, and financial reporting',
      icon: '💰'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline processes, reduce costs, and increase efficiency with intelligent automation." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
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
              Transform your business with intelligent automation that learns, adapts, and optimizes 
              your processes for maximum efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Automation Assessment
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Intelligent Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered automation platform provides comprehensive solutions for every aspect of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Automation Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI automation can transform different areas of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their operations with our automation solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your automation journey today and discover how AI can transform your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;