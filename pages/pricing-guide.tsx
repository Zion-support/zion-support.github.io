import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { CheckCircle, Star, Zap, Shield, Brain, Cloud, Code, ArrowRight } from 'lucide-react';

export default function PricingGuide() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI automation',
        'Cloud infrastructure setup',
        'Email support',
        'Monthly reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI solutions',
        'Custom cloud architecture',
        'Priority support',
        'Weekly reporting',
        'Security monitoring',
        'API integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI transformation',
        'Multi-cloud architecture',
        '24/7 dedicated support',
        'Real-time monitoring',
        'Custom development',
        'Compliance management',
        'Training & onboarding'
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      icon: Brain,
      title: 'AI Services',
      services: [
        { name: 'AI Content Creation', price: 'From $199/mo' },
        { name: 'AI Email Automation', price: 'From $149/mo' },
        { name: 'AI Customer Support', price: 'From $179/mo' },
        { name: 'AI Financial Analytics', price: 'From $299/mo' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Cost Optimization', price: 'Assessments $4k–$12k' },
        { name: 'MLOps Platform Setup', price: 'Starting $15k–$60k' },
        { name: 'Data Engineering', price: 'Starting $10k–$40k' },
        { name: 'IoT Edge Computing', price: 'From $399/mo' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      services: [
        { name: 'SOC-as-a-Service', price: 'From $3k/mo' },
        { name: 'Compliance Copilot', price: 'From $249/mo' },
        { name: 'Security Audits', price: 'Starting $5k–$15k' },
        { name: 'Zero-Trust Implementation', price: 'Starting $10k–$30k' }
      ]
    },
    {
      icon: Code,
      title: 'Micro SaaS',
      services: [
        { name: 'Mobile Survey Platform', price: 'From $99/mo' },
        { name: 'Predictive Maintenance', price: 'From $299/mo' },
        { name: 'AI Content Localization', price: 'From $199/mo' },
        { name: 'Custom Applications', price: 'Starting $8k–$25k' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing Guide - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, cloud solutions, cybersecurity, and micro SaaS platforms. Get custom quotes for your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-guide" />
      </Head>
      
      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Transparent Pricing for
                <span className="text-blue-600 block">Technology Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Get clear, upfront pricing for our AI services, cloud solutions, and custom development. 
                No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
              <p className="text-xl text-gray-600">Choose the package that fits your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border-2 p-8 ${
                    tier.popular
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-gray-600 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
              <p className="text-xl text-gray-600">Detailed pricing for individual services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex justify-between items-center">
                          <span className="text-gray-700">{service.name}</span>
                          <span className="text-blue-600 font-medium">{service.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Every business is unique. Contact us for a personalized pricing proposal tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <SimpleFooter />
    </>
  );
}