import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Settings, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Download, 
  BookOpen, 
  MessageSquare, 
  Workflow, 
  Target, 
  Cpu, 
  Database,
  Cloud,
  Globe,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that learns from your business processes and continuously improves efficiency.'
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly orchestrate complex business workflows across multiple systems and departments.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Dynamic optimization of business operations based on real-time data and market conditions.'
    },
    {
      icon: Shield,
      title: 'Secure Operations',
      description: 'Enterprise-grade security with role-based access control and audit trails for all operations.'
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Automated inventory management, demand forecasting, and supplier coordination.',
      icon: Workflow
    },
    {
      title: 'Customer Service',
      description: 'Intelligent chatbots, ticket routing, and automated customer support workflows.',
      icon: Users
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, expense management, and financial reporting.',
      icon: BarChart3
    },
    {
      title: 'HR & Recruitment',
      description: 'Automated candidate screening, onboarding processes, and performance management.',
      icon: Users
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve process efficiency by 60%',
    'Eliminate manual errors and delays',
    '24/7 automated operations',
    'Scalable infrastructure for growth',
    'Real-time monitoring and analytics'
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Logistics',
    'Technology',
    'Energy',
    'Education'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2"/>
              Autonomous Operations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered automation that orchestrates complex operations, 
              optimizes processes, and drives unprecedented efficiency across your organization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border border-green-400/40 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to automate and optimize your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300">
              Proven solutions across diverse business domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Transform Your Business Operations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 text-left"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Automate Your Operations?
            </h3>
            <p className="text-gray-300 mb-6">
              Join leading organizations that have transformed their business operations with our autonomous platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/request-quote"
                className="inline-flex items-center px-6 py-3 border border-green-400/40 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;
