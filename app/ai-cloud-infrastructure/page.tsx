'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, CheckCircle, Phone, Mail, Shield, CheckCircle, Phone, Mail } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'AI-Powered Cloud Management',
      description: 'Intelligent cloud resource optimization and automated scaling based on demand patterns',
      color: 'text-purple-400'
    },
    {
      icon: Server,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud infrastructure with AI-driven optimization',
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'Smart Data Management',
      description: 'AI-powered data storage, backup, and recovery solutions with predictive analytics',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security monitoring and compliance management for cloud infrastructure',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic cloud management',
        'Standard security',
        'Email support',
        'Basic monitoring',
        '1 cloud engineer'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 servers',
        'Advanced AI optimization',
        'Enhanced security',
        'Priority support',
        'Advanced analytics',
        'Automated scaling',
        '3 cloud engineers'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Custom AI models',
        '24/7 monitoring',
        'Dedicated support team',
        'White-label solution',
        'Custom integrations',
        '10+ cloud engineers'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud with AI-powered optimization and cost reduction',
      icon: Cloud,
      result: '50% cost savings'
    },
    {
      title: 'Auto Scaling',
      description: 'Intelligent scaling based on demand patterns and performance metrics',
      icon: Server,
      result: '99.9% uptime'
    },
    {
      title: 'Data Backup',
      description: 'AI-powered backup and disaster recovery with predictive failure detection',
      icon: Database,
      result: 'Zero data loss'
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous security monitoring and threat detection across cloud infrastructure',
      icon: Shield,
      result: '24/7 protection'
    }
  ];

  const benefits = [
    { metric: '99.9%', label: 'Uptime SLA', color: 'text-green-400' },
    { metric: '50%', label: 'Cost Reduction', color: 'text-blue-400' },
    { metric: '24/7', label: 'Monitoring', color: 'text-purple-400' },
    { metric: 'Zero', label: 'Downtime', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cloud Infrastructure - Intelligent Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your cloud infrastructure with AI-powered management, optimization, and security. Reduce costs by 50% and achieve 99.9% uptime." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, cloud optimization, hybrid cloud, cloud security, cloud migration" />
        <meta property="og:title" content="AI Cloud Infrastructure - Intelligent Cloud Solutions" />
        <meta property="og:description" content="Transform your cloud infrastructure with AI-powered management and optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cloud-infrastructure" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cloud className="w-4 h-4" />
            <span>AI-Powered Cloud</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Cloud Infrastructure
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your cloud infrastructure with AI-powered management, optimization, and security.
            Reduce costs by 50% and achieve 99.9% uptime with intelligent cloud solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
      >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
        className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
      >
              Get Cloud Assessment
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-gray-400 text-sm">Industry-leading cloud performance</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Cloud Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Infrastructure Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'} hover:border-blue-500/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-lg border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Cloud?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 2,000+ organizations already using our AI Cloud Infrastructure to reduce costs and improve performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
      >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

AICloudInfrastructurePage.displayName = 'AICloudInfrastructurePage';

export default AICloudInfrastructurePage;