import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, Star, Users, Building, ArrowRight, Phone, Mail, Calculator, TrendingUp, Shield, Clock, Award } from 'lucide-react';

export default function PricingGuide() {
  const pricingTiers = [
  {
      name: 'Startup',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for startups and small businesses',
      icon: Users,
      features: [
        'Basic AI automation,Cloud infrastructure setup,Email support,Monthly reporting,Up to 5 team members,Basic security features'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing businesses',
      icon: Building,
      features: [
        'Advanced AI solutions,Full cloud migration,Priority support,Weekly reporting,Up to 25 team members,Advanced security,API integrations,Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: Award,
      features: [
        'Custom AI development,Multi-cloud architecture,24/7 dedicated support,Real-time monitoring,Unlimited team members,Enterprise security,Custom integrations,Dedicated account manager,SLA guarantees'
      ],
      popular: false
    }
  ];

  const addOnServices = [
  {
      name: 'AI Development',
      price: '$150/hour',
      description: 'Custom AI model development and training'
    },
    {
      name: 'Cloud Migration',
      price: '$5,000',
      description: 'Complete cloud infrastructure migration'
    },
    {
      name: 'Security Audit',
      price: '$3,500',
      description: 'Comprehensive security assessment and recommendations'
    },
    {
      name: 'Training & Support',
      price: '$200/hour',
      description: 'Team training and ongoing technical support'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing Guide - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, cloud solutions, and technology consulting. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Choose the perfect plan for your business needs. No hidden fees, no surprises.
              </p>
              <div className="flex items-center justify-center space-x-4 text-blue-100">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
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
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Additional Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your plan with specialized services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">{service.price}</p>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in the Enterprise plan?</h3>
                <p className="text-gray-600">The Enterprise plan includes everything in Professional plus custom development, dedicated support, SLA guarantees, and a dedicated account manager.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-600">Yes, we offer custom pricing for large-scale projects and enterprise clients. Contact us to discuss your specific requirements.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, bank transfers, and can accommodate enterprise billing arrangements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}