'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Workflow } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Mining',
      description: 'Discover and analyze your business processes using AI to identify optimization opportunities.',
      benefits: ['Process discovery', 'Bottleneck identification', 'Efficiency analysis', 'Automation recommendations']
    },
    {
      icon: Workflow,
      title: 'Smart Workflow Automation',
      description: 'Automate complex business workflows with AI that learns and adapts to your needs.',
      benefits: ['Visual workflow builder', 'Conditional logic', 'Exception handling', 'Performance monitoring']
    },
    {
      icon: Zap,
      title: 'Real-time Decision Making',
      description: 'Make intelligent decisions in real-time based on data patterns and business rules.',
      benefits: ['Instant responses', 'Data-driven decisions', 'Risk assessment', 'Opportunity detection']
    },
    {
      icon: Target,
      title: 'Goal-Oriented Automation',
      description: 'Set business goals and let AI automatically optimize processes to achieve them.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic alignment', 'ROI measurement']
    },
    {
      icon: Shield,
      title: 'Secure Automation',
      description: 'Enterprise-grade security and compliance for all automated processes.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance support']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Monitor and analyze the performance of your automated processes in real-time.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Trend analysis', 'Optimization insights']
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Increase process efficiency by 60%',
    'Eliminate human errors and inconsistencies',
    'Scale operations without proportional staff increases',
    'Improve customer satisfaction with faster responses'
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate customer inquiries, ticket routing, and response generation',
      icon: '🎧'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automate invoice processing, expense management, and financial reporting',
      icon: '💰'
    },
    {
      title: 'HR Process Automation',
      description: 'Streamline recruitment, onboarding, and employee management processes',
      icon: '👥'
    },
    {
      title: 'Sales Process Automation',
      description: 'Automate lead qualification, follow-ups, and sales pipeline management',
      icon: '📈'
    },
    {
      title: 'IT Operations Automation',
      description: 'Automate system monitoring, incident response, and maintenance tasks',
      icon: '⚙️'
    },
    {
      title: 'Marketing Automation',
      description: 'Automate campaign management, lead nurturing, and performance tracking',
      icon: '📢'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group | Intelligent Process Automation</title>
        <meta name="description" content="Transform your business with AI-powered automation. Streamline workflows, reduce costs, and increase efficiency with intelligent process automation." />
        <meta name="keywords" content="AI automation, process automation, workflow automation, intelligent automation, business process automation" />
        <meta property="og:title" content="AI Automation - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with AI-powered automation solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Automation
            </h1>
            <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
              Intelligent Process Automation for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with AI-powered automation that learns, adapts, and optimizes 
              your workflows to deliver unprecedented efficiency and cost savings.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Powerful AI Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI automation platform can revolutionize your business processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and operational excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI automation can transform different areas of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our AI automation experts help you identify opportunities and implement intelligent 
                automation solutions that transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Call: (302) 464-0950
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

export default AiAutomationPage;
