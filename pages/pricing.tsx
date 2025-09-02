import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Check, Star, ArrowRight, Zap, Shield, Users, Clock } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with technology',
      features: [
        'Basic AI consultation',
        'IT support (8 hours/month)',
        'Email support',
        'Basic security monitoring',
        'Monthly reporting',
        'Up to 5 users'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=starter'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced technology needs',
      features: [
        'Advanced AI services',
        'IT support (20 hours/month)',
        'Priority support',
        'Advanced security monitoring',
        'Weekly reporting',
        'Up to 25 users',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact?plan=professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Full AI implementation',
        'Dedicated IT team',
        '24/7 support',
        'Enterprise security',
        'Real-time reporting',
        'Unlimited users',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ];

  const addOns = [
    {
      name: 'Micro SaaS Development',
      price: '$15,000',
      description: 'Custom micro SaaS solution development and deployment',
      features: ['Custom development', 'Cloud deployment', '3 months support']
    },
    {
      name: 'AI Model Training',
      price: '$8,000',
      description: 'Custom AI model training for your specific use case',
      features: ['Data preparation', 'Model training', 'Performance optimization']
    },
    {
      name: 'Security Audit',
      price: '$5,000',
      description: 'Comprehensive security assessment and recommendations',
      features: ['Vulnerability assessment', 'Compliance review', 'Action plan']
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SaaS development. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent <span className="text-blue-600">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your business needs. All plans include our core services 
                with the flexibility to scale as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative rounded-lg p-8 ${
                  plan.popular 
                    ? 'bg-blue-50 border-2 border-blue-600 shadow-lg' 
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href} className="block">
                    <div className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      {plan.cta}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enhance your plan with these specialized services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{addon.price}</div>
                  <p className="text-gray-600 mb-4">{addon.description}</p>
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional value through our comprehensive approach
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
                <p className="text-gray-600">Quick deployment and setup with minimal disruption to your business operations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards to protect your data and systems.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-600">Dedicated support team with deep expertise in AI, IT, and software development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my plan later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in support?</h3>
                <p className="text-gray-600">Support includes email assistance, phone support (for Professional and Enterprise plans), and access to our knowledge base.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-600">Yes, our Enterprise plan includes custom development and we can create tailored solutions for your specific needs.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
                <p className="text-gray-600">No setup fees for any of our plans. You only pay the monthly subscription fee.</p>
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
              Contact us today to discuss your needs and find the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}