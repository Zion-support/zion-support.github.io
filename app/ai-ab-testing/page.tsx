'use client';
import React from 'react';
import { CheckCircle, BarChart, Target, Zap, Phone, Mail, MapPin, Star, Award, Users, TrendingUp, Brain, Shield, Clock, Globe, Smartphone, Laptop } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIABTestingPage: React.FC = () => {
  const features = [
    'AI-powered test hypothesis generation',
    'Automatic statistical significance calculation',
    'Intelligent test duration optimization',
    'Real-time performance monitoring and alerts',
    'Advanced segmentation and targeting',
    'Multi-variate testing capabilities',
    'Automated winner selection and implementation',
    'Comprehensive analytics and reporting',
    'Integration with all major platforms',
    'Predictive modeling for test outcomes'
  ];

  const benefits = [
    'Increase conversion rates by up to 400%',
    'Reduce testing time by 70%',
    'Improve test accuracy by 95%',
    'Automate 90% of testing processes',
    'Make data-driven decisions with confidence',
    'Scale testing across all marketing channels',
    'Optimize user experience continuously',
    'Maximize ROI on marketing investments'
  ];

  const testTypes = [
    {
      title: 'Landing Page Optimization',
      description: 'AI-powered testing for headlines, CTAs, and page layouts',
      icon: '🎯',
      metrics: ['Conversion rate', 'Bounce rate', 'Time on page', 'Click-through rate']
    },
    {
      title: 'Email Marketing',
      description: 'Intelligent subject line and content testing',
      icon: '📧',
      metrics: ['Open rate', 'Click rate', 'Unsubscribe rate', 'Revenue per email']
    },
    {
      title: 'E-commerce Testing',
      description: 'Product page and checkout optimization',
      icon: '🛒',
      metrics: ['Add to cart rate', 'Checkout completion', 'Average order value', 'Revenue']
    },
    {
      title: 'Mobile App Testing',
      description: 'UI/UX optimization for mobile applications',
      icon: '📱',
      metrics: ['App store rating', 'User retention', 'Session duration', 'In-app purchases']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 concurrent tests',
        'Basic AI features',
        'Standard analytics',
        'Email support',
        'Basic integrations',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 concurrent tests',
        'Advanced AI algorithms',
        'Real-time analytics',
        'Priority support',
        'Custom integrations',
        'Advanced reporting',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499/month',
      description: 'For large organizations',
      features: [
        'Unlimited tests',
        'Custom AI training',
        'Dedicated support',
        'White-label solutions',
        'Advanced analytics',
        'Custom deployment',
        'SLA guarantee',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const integrations = [
    'Google Analytics', 'Adobe Analytics', 'Mixpanel', 'Amplitude', 'Hotjar',
    'Optimizely', 'VWO', 'Unbounce', 'Mailchimp', 'HubSpot', 'Salesforce',
    'Shopify', 'WooCommerce', 'Magento', 'Custom APIs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BarChart className="w-4 h-4" />
            <span>AI Testing Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI A/B Testing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The most intelligent A/B testing platform powered by AI. Automatically generate test hypotheses, 
            optimize test duration, and maximize conversion rates with machine learning.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">400%</div>
              <div className="text-gray-300">Conversion Boost</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Testing</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Test Accuracy</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
              <div className="text-gray-300">Automation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Testing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our AI A/B Testing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Advanced AI algorithms automatically optimize your tests for maximum conversion and ROI.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Test Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Comprehensive Testing Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testTypes.map((testType, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{testType.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{testType.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{testType.description}</p>
                <ul className="space-y-2">
                  {testType.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="text-sm text-pink-400 flex items-center">
                      <TrendingUp className="w-3 h-3 text-pink-400 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Seamless Integrations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <span key={index} className="cyber-card px-4 py-2 text-sm">
                {integration}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Flexible Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-pink-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} A/B Testing Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                      : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                  }`}
                >
                  Start Testing
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Conversions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have maximized their conversion rates with our AI-powered testing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI A/B Testing Inquiry"
                className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Test Setup
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIABTestingPage;
