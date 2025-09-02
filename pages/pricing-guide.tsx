import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { CheckCircle, Star, ArrowRight, Calculator, Clock, Users, Zap } from 'lucide-react';

export default function PricingGuide() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$8,000',
      period: 'one-time',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI integration',
        'Up to 5 users',
        'Email support',
        'Basic analytics',
        'Standard security',
        '1 month implementation'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: '$25,000',
      period: 'one-time',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Up to 25 users',
        'Priority support',
        'Advanced analytics',
        'Enhanced security',
        '3 months implementation',
        'Custom integrations',
        'Training included'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI development',
        'Unlimited users',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Maximum security',
        '6+ months implementation',
        'Full customization',
        'Dedicated team',
        'SLA guarantee'
      ],
      popular: false,
      color: 'indigo'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Star,
      services: [
        { name: 'AI Chatbot Development', price: '$8k - $25k', description: 'Custom conversational AI solutions' },
        { name: 'Machine Learning Models', price: '$15k - $60k', description: 'Predictive analytics and automation' },
        { name: 'Computer Vision', price: '$20k - $80k', description: 'Image and video analysis systems' },
        { name: 'Natural Language Processing', price: '$12k - $40k', description: 'Text analysis and language understanding' }
      ]
    },
    {
      title: 'IT Services',
      icon: Zap,
      services: [
        { name: 'Cloud Migration', price: '$5k - $25k', description: 'Move to cloud infrastructure' },
        { name: 'DevOps Implementation', price: '$10k - $40k', description: 'Automated deployment and monitoring' },
        { name: 'Cybersecurity Assessment', price: '$4k - $12k', description: 'Comprehensive security evaluation' },
        { name: 'System Integration', price: '$8k - $30k', description: 'Connect existing systems' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Users,
      services: [
        { name: 'Custom SaaS Platform', price: '$15k - $100k', description: 'Tailored software solutions' },
        { name: 'API Development', price: '$5k - $20k', description: 'RESTful and GraphQL APIs' },
        { name: 'Mobile App Development', price: '$10k - $50k', description: 'iOS and Android applications' },
        { name: 'Web Application', price: '$8k - $35k', description: 'Modern web applications' }
      ]
    }
  ];

  const factors = [
    {
      icon: Calculator,
      title: 'Project Complexity',
      description: 'Simple integrations cost less than complex custom developments'
    },
    {
      icon: Clock,
      title: 'Timeline',
      description: 'Rush projects may incur additional costs for expedited delivery'
    },
    {
      icon: Users,
      title: 'Team Size',
      description: 'Larger teams and more stakeholders can affect project scope'
    },
    {
      icon: Zap,
      title: 'Customization',
      description: 'Highly customized solutions require more development time'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing Guide - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SaaS development. Get detailed pricing information and request a custom quote." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-guide" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Transparent Pricing Guide
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get clear, upfront pricing for our AI services, IT solutions, and micro SaaS development. 
                No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-lg text-gray-600">
                Flexible pricing options to fit your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`relative rounded-lg p-8 ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white shadow-2xl transform scale-105' 
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                      {tier.name}
                    </h3>
                    <div className="mb-2">
                      <span className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                        {tier.price}
                      </span>
                      <span className={`text-lg ${tier.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                        /{tier.period}
                      </span>
                    </div>
                    <p className={`${tier.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                      {tier.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          tier.popular ? 'text-green-300' : 'text-green-500'
                        }`} />
                        <span className={tier.popular ? 'text-white' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-white text-purple-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Pricing</h2>
              <p className="text-lg text-gray-600">
                Detailed pricing for our core service categories
              </p>
            </div>
            
            <div className="space-y-12">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                          <span className="text-blue-600 font-bold">{service.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Affects Pricing?</h2>
              <p className="text-lg text-gray-600">
                Understanding the factors that influence project costs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {factors.map((factor, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <factor.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about our pricing and services
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer payment plans?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer flexible payment plans for larger projects. We can split payments across 
                  project milestones or set up monthly payment arrangements.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in the pricing?
                </h3>
                <p className="text-gray-600">
                  Our pricing includes development, testing, deployment, documentation, and initial support. 
                  Ongoing maintenance and additional features are quoted separately.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I get a custom quote?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Every project is unique. Contact us for a detailed custom quote based on 
                  your specific requirements and timeline.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer discounts for long-term projects?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer volume discounts for multi-month projects and retainer agreements. 
                  Contact us to discuss your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a detailed quote for your project. No obligation, just transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}