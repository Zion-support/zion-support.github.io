'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Workflow, Clock, Shield } from 'lucide-react'

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that understand and optimize your business processes automatically.',
      benefits: ['Process Learning', 'Pattern Recognition', 'Intelligent Routing', 'Adaptive Optimization']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Create and deploy complex workflows that run automatically without human intervention.',
      benefits: ['Drag-and-Drop Builder', 'Conditional Logic', 'Multi-Step Processes', 'Real-Time Execution']
    },
    {
      icon: Target,
      title: 'Process Optimization',
      description: 'Continuously analyze and improve your workflows for maximum efficiency and performance.',
      benefits: ['Performance Analytics', 'Bottleneck Detection', 'Efficiency Metrics', 'Optimization Suggestions']
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Scale your automation efforts across your entire organization with enterprise-grade solutions.',
      benefits: ['Enterprise Integration', 'Multi-Department Support', 'Centralized Management', 'Unlimited Scaling']
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Increase process efficiency by 60%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without proportional staff increases',
    'Improve compliance and audit trails',
    'Enable 24/7 automated operations'
  ];

  const automationTypes = [
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Automate complex business processes across departments'
    },
    {
      icon: Clock,
      title: 'Time-Based Automation',
      description: 'Schedule and trigger automated workflows based on time intervals'
    },
    {
      icon: Shield,
      title: 'Compliance Automation',
      description: 'Ensure regulatory compliance with automated monitoring and reporting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group | Intelligent Process Automation</title>
        <meta name="description" content="Transform your business with AI-powered workflow automation solutions. Increase efficiency, reduce costs, and scale operations with intelligent automation." />
        <meta name="keywords" content="AI workflow automation, business process automation, intelligent automation, workflow optimization" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with AI-powered workflow automation solutions. Increase efficiency, reduce costs, and scale operations with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform provides everything you need to streamline and optimize your business processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
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

      {/* Automation Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Types of Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive automation solutions for every aspect of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center mb-6">
                  <type.icon className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
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
              Why Choose Our AI Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven workflow automation that transforms your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to implement AI-powered workflow automation that transforms your business operations.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center mx-auto">
            Start Automating Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWorkflowAutomationPage;