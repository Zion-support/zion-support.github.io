'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Brain, Cloud, Cpu } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  period: string;
  marketPrice: string;
  features: string[];
}

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const aiServices: Service[] = [
    { name: 'AI-Powered Chatbots', price: '$299', period: '/month', marketPrice: '$500-2000', features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration'] },
    { name: 'AI Content Generation', price: '$199', period: '/month', marketPrice: '$300-1500', features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'] },
    { name: 'AI Data Analytics', price: '$399', period: '/month', marketPrice: '$800-3000', features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection'] },
    { name: 'AI Workflow Automation', price: '$349', period: '/month', marketPrice: '$600-2500', features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling'] },
    { name: 'AI Computer Vision', price: '$599', period: '/month', marketPrice: '$1000-5000', features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics'] },
    { name: 'AI Fraud Detection', price: '$799', period: '/month', marketPrice: '$1500-5000', features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection'] }
  ];

  const itServices: Service[] = [
    { name: 'Cloud Infrastructure & Migration', price: '$2,500', period: '/month', marketPrice: '$4000-15000', features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery'] },
    { name: 'Cybersecurity Solutions', price: '$1,800', period: '/month', marketPrice: '$3000-12000', features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring'] },
    { name: 'Database Management', price: '$1,200', period: '/month', marketPrice: '$2000-8000', features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'] },
    { name: 'DevOps & CI/CD', price: '$2,200', period: '/month', marketPrice: '$3500-10000', features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'] },
    { name: 'IT Consulting', price: '$200', period: '/hour', marketPrice: '$300-800', features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation'] },
    { name: 'Custom Software Development', price: '$150', period: '/hour', marketPrice: '$200-500', features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization'] }
  ];

  const microSaasServices: Service[] = [
    { name: 'Zion Analytics Pro', price: '$89', period: '/month', marketPrice: '$150-500', features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors'] },
    { name: 'Zion Chat AI', price: '$149', period: '/month', marketPrice: '$300-800', features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing'] },
    { name: 'Zion Invoice Genius', price: '$49', period: '/month', marketPrice: '$100-300', features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking'] },
    { name: 'Zion Lead Magnet', price: '$99', period: '/month', marketPrice: '$200-600', features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration'] },
    { name: 'Zion Security Shield', price: '$199', period: '/month', marketPrice: '$400-1200', features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'] },
    { name: 'Zion Cloud Vault', price: '$79', period: '/month', marketPrice: '$150-400', features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'] }
  ];

  const getCurrentServices = (): Service[] => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'saas': return microSaasServices;
      default: return aiServices;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'ai': return Brain;
      case 'it': return Cloud;
      case 'saas': return Cpu;
      default: return Brain;
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT',
      features: [
        '2 AI Services Included',
        'Basic Cloud Infrastructure',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard',
        'Up to 5 Users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        '5 AI Services Included',
        'Advanced IT Solutions',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions',
        'Up to 25 Users'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI Services',
        'Custom IT Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee',
        'Unlimited Users'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Affordable AI and IT solutions pricing. Choose from our flexible plans designed for businesses of all sizes. Get started with our AI and IT services today." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, business solutions, affordable AI, enterprise solutions" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Flexible pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our 
              world-class support and cutting-edge technology.
            </p>
          </section>

          {/* Service Tabs */}
          <section className="mb-16">
            <div className="flex justify-center mb-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-1 border border-white/10">
                {[
                  { id: 'ai', label: 'AI Services', icon: Brain },
                  { id: 'it', label: 'IT Services', icon: Cloud },
                  { id: 'saas', label: 'Micro SaaS', icon: Cpu }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentServices().map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    {service.marketPrice && (
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-400/50 scale-105'
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We offer tailored AI and IT solutions for enterprise clients. Contact us for a personalized quote.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PricingPage;
