import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Check, Star, Zap, Shield, Users, Globe, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const aiServices = [
    {
      name: 'AI Email Responder',
      monthly: '$2,500',
      yearly: '$25,000',
      features: [
        'Smart email categorization',
        'Automated response generation',
        'Sentiment analysis',
        'CRM integration',
        'Multi-language support'
      ],
      popular: false
    },
    {
      name: 'AI Content Creation',
      monthly: '$1,500',
      yearly: '$15,000',
      features: [
        'Automated blog posts',
        'Social media content',
        'SEO optimization',
        'Multi-format creation',
        'Brand voice consistency'
      ],
      popular: true
    },
    {
      name: 'Computer Vision',
      monthly: '$5,000',
      yearly: '$50,000',
      features: [
        'Real-time object detection',
        'Quality control systems',
        'Facial recognition',
        'Video analytics',
        'Custom model training'
      ],
      popular: false
    },
    {
      name: 'Predictive Analytics',
      monthly: '$6,000',
      yearly: '$60,000',
      features: [
        'Sales forecasting',
        'Customer churn prediction',
        'Financial risk assessment',
        'Market trend analysis',
        'Real-time dashboards'
      ],
      popular: false
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure',
      monthly: '$5,000',
      yearly: '$50,000',
      features: [
        'Multi-cloud architecture',
        'Auto-scaling setup',
        'Disaster recovery',
        'Cost optimization',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Cybersecurity',
      monthly: '$3,000',
      yearly: '$30,000',
      features: [
        'Zero-trust architecture',
        'Compliance automation',
        'Penetration testing',
        'Incident response',
        'Security monitoring'
      ],
      popular: false
    },
    {
      name: 'Network Infrastructure',
      monthly: '$2,000',
      yearly: '$20,000',
      features: [
        'SD-WAN solutions',
        'Network security',
        'Wireless optimization',
        'VoIP systems',
        'Performance tuning'
      ],
      popular: false
    },
    {
      name: 'IT Support',
      monthly: '$1,500',
      yearly: '$15,000',
      features: [
        '24/7/365 support',
        'Remote troubleshooting',
        'Software management',
        'Hardware procurement',
        'User training'
      ],
      popular: false
    }
  ];

  const microSaaSServices = [
    {
      name: 'Personal Finance Manager',
      monthly: '$9.99',
      yearly: '$99.99',
      features: [
        'Expense categorization',
        'Budget recommendations',
        'Investment optimization',
        'Bill automation',
        'Credit monitoring'
      ],
      popular: true
    },
    {
      name: 'Smart Home Energy',
      monthly: '$19.99',
      yearly: '$199.99',
      features: [
        'Energy monitoring',
        'Smart scheduling',
        'Cost optimization',
        'Solar tracking',
        'Environmental reporting'
      ],
      popular: false
    },
    {
      name: 'Mental Health Companion',
      monthly: '$14.99',
      yearly: '$149.99',
      features: [
        'Mood tracking',
        'Wellness recommendations',
        'Meditation exercises',
        'Progress insights',
        'Therapist matching'
      ],
      popular: false
    },
    {
      name: 'Language Learning',
      monthly: '$29.99',
      yearly: '$299.99',
      features: [
        'AI conversation practice',
        'Personalized learning',
        'Pronunciation feedback',
        'VR experiences',
        'Multi-language support'
      ],
      popular: false
    }
  ];

  const enterpriseFeatures = [
    'Custom development',
    'Dedicated support team',
    'SLA guarantees',
    'On-site consultation',
    'Training and documentation',
    'Priority feature requests',
    'White-label solutions',
    'API access'
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SaaS applications. Choose the perfect plan for your business needs. Contact us for custom enterprise solutions." />
        <meta name="keywords" content="Zion Tech Group pricing, AI services pricing, IT solutions pricing, micro SaaS pricing, technology consulting rates, enterprise solutions pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All our services come with enterprise-grade security, 24/7 support, and scalable solutions.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8">
                <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Yearly
                  <span className="ml-1 text-sm text-green-600 font-medium">(Save 17%)</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services</h2>
              <p className="text-lg text-gray-600">
                Cutting-edge artificial intelligence solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  service.popular ? 'border-blue-500' : 'border-gray-200'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {billingCycle === 'monthly' ? service.monthly : service.yearly}
                    </div>
                    <p className="text-gray-500">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive information technology solutions for enterprise needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  service.popular ? 'border-green-500' : 'border-gray-200'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {billingCycle === 'monthly' ? service.monthly : service.yearly}
                    </div>
                    <p className="text-gray-500">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600">
                Scalable software solutions for individuals and small businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  service.popular ? 'border-purple-500' : 'border-gray-200'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      {billingCycle === 'monthly' ? service.monthly : service.yearly}
                    </div>
                    <p className="text-gray-500">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Enterprise Solutions</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Need a custom solution? We offer tailored enterprise packages with dedicated support and advanced features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <Check className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our pricing and services
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-600">
                  Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a> to discuss your needs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in the support?</h3>
                <p className="text-gray-600">
                  All our services include 24/7 technical support, regular updates, security patches, and performance monitoring. Enterprise clients receive dedicated support teams and priority response times.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my plan later?</h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade or downgrade your plan at any time. We'll prorate any changes and ensure a smooth transition without service interruption.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer free trials?</h3>
                <p className="text-gray-600">
                  Yes, we offer 14-day free trials for most of our services. This allows you to test our solutions and see the value before committing to a paid plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business or contact us for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </Link>
              <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}