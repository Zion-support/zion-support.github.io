'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered API Management',
      description: 'Intelligent API routing, load balancing, and optimization using advanced AI algorithms',
      benefits: ['Smart load balancing', 'Predictive scaling', 'Intelligent caching', 'Auto-optimization']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security features including authentication, authorization, and threat detection',
      benefits: ['OAuth 2.0 & JWT', 'Rate limiting', 'DDoS protection', 'API encryption']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast API processing with sub-millisecond response times and 99.9% uptime',
      benefits: ['Sub-ms response times', '99.9% uptime SLA', 'Auto-scaling', 'Global CDN']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Worldwide API distribution with edge computing capabilities for optimal performance',
      benefits: ['Edge computing', 'Global CDN', 'Multi-region deployment', 'Low latency']
    }
  ];

  const benefits = [
    'Reduce API response times by up to 80%',
    'Automatically scale based on traffic patterns',
    'Comprehensive API analytics and monitoring',
    'Built-in security and compliance features',
    'Easy integration with existing systems',
    '24/7 technical support and monitoring'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      description: 'Perfect for small applications',
      features: [
        'Up to 10,000 API calls/month',
        'Basic analytics',
        'Standard support',
        'SSL certificates included'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 API calls/month',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Rate limiting'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'month',
      description: 'For large-scale applications',
      features: [
        'Unlimited API calls',
        'Custom analytics',
        'Dedicated support',
        'White-label solution',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Head>
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions by Zion Tech Group. Intelligent routing, security, and optimization for your APIs." />
        </Head>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span>AI API Management
            </span>
          </h1>
          <p>Transform your API infrastructure with intelligent management, advanced security, and AI-powered optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight> </ArrowRight>button>
            <button>Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Powerful Features</h2>
            <p>Our AI-powered API management platform provides everything you need to build, secure, and scale your APIs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature> </feature>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle>{benefit}
                    </CheckCircle>li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Why Choose Our Platform?</h2>
            <p>Experience the benefits of AI-powered API management for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <p>{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Pricing Plans</h2>
            <p>Choose the perfect plan for your API management needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 ${index === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                <div className="text-center mb-6">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span>{plan.price}</span>
                    <span>/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle>{feature}
                    </CheckCircle>li>
                  ))}
                </ul>
                <button>Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2>Ready to Transform Your APIs?</h2>
          <p>Join thousands of developers who trust our AI-powered API management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button>Start Free Trial
            </button>
            <button>Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer> </Footer>div>
  );
};

export default AIAPIManagementPage;