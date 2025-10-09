'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Zap, Workflow, Target, CheckCircle, Phone, Mail, Brain, Database, Settings, Globe, BarChart, Users } from 'lucide-react';

const AIWorkflowAutomation: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Intelligent workflow automation with machine learning and decision-making capabilities',
      benefits: ['Smart decision making', 'Learning algorithms', 'Adaptive workflows']
    },
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding',
      benefits: ['No coding required', 'Visual design', 'Pre-built templates']
    },
    {
      icon: Database,
      title: '500+ Integrations',
      description: 'Connect with all your business tools and data sources seamlessly',
      benefits: ['CRM integration', 'ERP systems', 'Cloud platforms']
    },
    {
      icon: Target,
      title: 'Process Optimization',
      description: 'Automatically optimize workflows for maximum efficiency and performance',
      benefits: ['Performance analytics', 'Bottleneck detection', 'Continuous improvement']
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Create tailored automation solutions for your specific business needs',
      benefits: ['Custom logic', 'Business rules', 'Conditional flows']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track workflow performance and ROI',
      benefits: ['Performance metrics', 'ROI tracking', 'Custom reports']
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'Basic Automation',
      price: '$99',
      period: '/month',
      benefits: ['5 workflows', 'Basic integrations', 'Email support']
    },
    {
      icon: Workflow,
      title: 'Professional',
      price: '$299',
      period: '/month',
      benefits: ['Unlimited workflows', 'Advanced integrations', 'Priority support']
    },
    {
      icon: Brain,
      title: 'Enterprise',
      price: '$599',
      period: '/month',
      benefits: ['Custom AI models', 'Dedicated support', 'White-label options']
    }
  ];

  const stats = [
    { number: '90%', label: 'Time Savings' },
    { number: '75%', label: 'Error Reduction' },
    { number: '500+', label: 'Integrations' },
    { number: '24/7', label: 'Automation' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation Platform - Zion Tech Group"
        description="Automate business processes with AI-powered workflows. 90% time savings, 500+ integrations, and intelligent decision making. No coding required."
        keywords={['workflow automation', 'business process automation', 'AI workflows', 'process optimization', 'workflow builder']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Workflow Automation Platform
              </h1>
              <p className="text-xl md:text-2xl text-yellow-400 mb-8">
                Automate any business process with intelligent workflows
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered workflow automation platform helps businesses eliminate manual tasks, 
                reduce errors by 75%, and save 90% of processing time with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Powerful Automation Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-yellow-400">
                      <feature.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
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
          </section>

          {/* Services Section */}
          <section className="py-16 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Automation Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-cyan-400">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400 mb-4">{service.period}</div>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href="/contact"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center mt-4"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIWorkflowAutomation;