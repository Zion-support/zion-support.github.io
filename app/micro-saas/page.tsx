'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const features = [
    {
      title: 'Rapid Development',
      description: 'Build and deploy micro-SaaS applications in weeks, not months',
      icon: Zap,
      benefits: [
        'Pre-built templates and components',
        'Automated deployment pipelines',
        'Scalable architecture patterns',
        'Quick MVP development'
      ]
    },
    {
      title: 'Multi-Tenant Architecture',
      description: 'Secure, scalable multi-tenant infrastructure for SaaS applications',
      icon: Users,
      benefits: [
        'Isolated tenant data',
        'Customizable branding',
        'Flexible pricing tiers',
        'User management system'
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and business intelligence built-in',
      icon: BarChart3,
      benefits: [
        'Real-time dashboards',
        'User behavior tracking',
        'Revenue analytics',
        'Custom reporting'
      ]
    },
    {
      title: 'API-First Design',
      description: 'RESTful APIs and webhooks for seamless integrations',
      icon: Cloud,
      benefits: [
        'RESTful API endpoints',
        'Webhook support',
        'Third-party integrations',
        'SDK and documentation'
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance features',
      icon: Shield,
      benefits: [
        'Data encryption',
        'GDPR compliance',
        'SOC 2 certification',
        'Regular security audits'
      ]
    },
    {
      title: 'Customer Support',
      description: 'Built-in customer support and communication tools',
      icon: MessageSquare,
      benefits: [
        'In-app messaging',
        'Ticket system',
        'Knowledge base',
        'Live chat integration'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for solo developers and small teams',
      features: [
        'Up to 1,000 users',
        'Basic analytics',
        'Email support',
        'Standard templates',
        '1 custom domain'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing SaaS businesses',
      features: [
        'Up to 10,000 users',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        '5 custom domains',
        'API access',
        'Webhook support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        'Dedicated support',
        'White-label solution',
        'Unlimited domains',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce development time by 70%',
    'Lower infrastructure costs by 60%',
    'Faster time to market',
    'Built-in scalability',
    'Enterprise-grade security',
    '24/7 monitoring and support'
  ];

  const stats = [
    { label: 'Micro-SaaS Built', value: '100+', icon: Star },
    { label: 'Active Users', value: '1M+', icon: Users },
    { label: 'Uptime', value: '99.9%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: CheckCircle }
  ];

  return (
    <>
      <Helmet>
        <title>Micro-SaaS Platform - Zion Tech Group | Build & Deploy SaaS Applications</title>
        <meta name="description" content="Build and deploy micro-SaaS applications with our comprehensive platform. Multi-tenant architecture, analytics, and enterprise features included." />
        <meta name="keywords" content="micro-saas, SaaS platform, multi-tenant, SaaS development, cloud applications, API-first" />
        <meta property="og:title" content="Micro-SaaS Platform - Zion Tech Group" />
        <meta property="og:description" content="Build and deploy micro-SaaS applications with our comprehensive platform" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro-SaaS Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build, deploy, and scale micro-SaaS applications with our comprehensive platform. Everything you need to launch your SaaS business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold py-4 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
              >
                Start Building
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 ${
                    tier.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400">/{tier.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-800/50 text-white border border-slate-700 hover:border-cyan-400/50'
                    }`}
                  >
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Micro-SaaS?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building your SaaS application today with our comprehensive platform and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold py-4 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;