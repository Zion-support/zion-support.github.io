'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, Target, TrendingUp, FileText, Zap, Shield, CheckCircle, ArrowRight, Users, Clock, DollarSign, Workflow, Settings, Star } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes for maximum efficiency.',
      benefits: ['Machine learning algorithms', 'Process optimization', 'Adaptive workflows', 'Smart decision making']
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline complex business workflows with intelligent automation and orchestration.',
      benefits: ['End-to-end automation', 'Process orchestration', 'Exception handling', 'Workflow monitoring']
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment of automation solutions with minimal disruption.',
      benefits: ['Fast implementation', 'Minimal downtime', 'Easy configuration', 'Quick ROI']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting to measure automation effectiveness and ROI.',
      benefits: ['Performance metrics', 'ROI tracking', 'Efficiency reports', 'Optimization insights']
    }
  ];

  const automationTypes = [
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Automate document handling, data extraction, and processing workflows.',
      features: ['OCR and text extraction', 'Document classification', 'Data validation', 'Automated routing']
    },
    {
      icon: Users,
      title: 'Customer Service',
      description: 'AI-powered customer service automation for improved response times and satisfaction.',
      features: ['Chatbot automation', 'Ticket routing', 'Response generation', 'Sentiment analysis']
    },
    {
      icon: Settings,
      title: 'IT Operations',
      description: 'Automate IT processes, monitoring, and maintenance tasks for better efficiency.',
      features: ['System monitoring', 'Automated backups', 'Incident response', 'Resource management']
    },
    {
      icon: DollarSign,
      title: 'Financial Processes',
      description: 'Automate financial workflows, reporting, and compliance processes.',
      features: ['Invoice processing', 'Financial reporting', 'Compliance checks', 'Audit trails']
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Increase process efficiency by 60%',
    'Improve accuracy and reduce errors',
    'Scale operations without additional staff',
    '24/7 automated operations',
    'Faster decision making',
    'Cost savings and ROI',
    'Enhanced compliance and audit trails'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses starting with automation',
      features: [
        '5 automation workflows',
        'Basic AI features',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with complex automation needs',
      features: [
        '20 automation workflows',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with extensive automation requirements',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'Dedicated support',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Automation solutions. Intelligent process automation, workflow optimization, and smart decision-making for better efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation, RPA" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation solutions. Streamline processes, reduce manual work, and boost productivity with AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage cutting-edge AI technology to automate your business processes and drive efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Types
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Comprehensive automation solutions for every aspect of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <type.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of AI Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the transformative power of AI automation for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Choose the plan that fits your automation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Start your automation journey today and discover how AI can transform your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiAutomationPage;