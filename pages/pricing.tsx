import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEO/SEOHead';
import ErrorBoundary from '../src/components/ErrorBoundary';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  Brain,
  Cloud,
  Database,
  Code,
  Network
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      icon: Zap,
      features: [
        'Basic AI Services',
        'Standard IT Support',
        'Email Support',
        'Basic Analytics',
        'Up to 5 Users',
        '1 Project Included'
      ],
      limitations: [
        'Limited AI Processing',
        'Standard Response Time',
        'Basic Security Features'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=starter'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 599,
      yearlyPrice: 5999,
      icon: Shield,
      features: [
        'Advanced AI Services',
        'Priority IT Support',
        'Phone & Email Support',
        'Advanced Analytics',
        'Up to 25 Users',
        '5 Projects Included',
        'Custom Integrations',
        'Advanced Security'
      ],
      limitations: [
        'Limited Custom Development',
        'Standard SLA'
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/contact?plan=professional'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 1299,
      yearlyPrice: 12999,
      icon: Globe,
      features: [
        'Premium AI Services',
        '24/7 Dedicated Support',
        'Dedicated Account Manager',
        'Custom Analytics Dashboard',
        'Unlimited Users',
        'Unlimited Projects',
        'Full Custom Development',
        'Enterprise Security',
        'SLA Guarantee',
        'Training & Onboarding'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ];

  const services = [
    {
      name: 'AI Services',
      icon: Brain,
      description: 'Machine learning, natural language processing, and AI automation',
      startingPrice: '$199/month'
    },
    {
      name: 'IT Services',
      icon: Network,
      description: 'Infrastructure management, security, and technical support',
      startingPrice: '$299/month'
    },
    {
      name: 'Micro SaaS',
      icon: Cloud,
      description: 'Custom software solutions and SaaS development',
      startingPrice: '$499/month'
    },
    {
      name: 'Web Development',
      icon: Code,
      description: 'Custom web applications and e-commerce solutions',
      startingPrice: '$399/month'
    },
    {
      name: 'Cloud Services',
      icon: Cloud,
      description: 'Cloud infrastructure and migration services',
      startingPrice: '$199/month'
    },
    {
      name: 'Database Solutions',
      icon: Database,
      description: 'Database design, optimization, and administration',
      startingPrice: '$299/month'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise clients can also pay via invoice.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you reach your limits and offer options to upgrade or purchase additional capacity.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, annual plans include a 15% discount compared to monthly billing.'
    }
  ];

  return (
    <ErrorBoundary>
      <SEOHead
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI services, IT solutions, and micro SaaS development. Choose the plan that fits your business needs."
        keywords="pricing, AI services pricing, IT services cost, SaaS development pricing, enterprise solutions"
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core services 
              with the flexibility to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 px-2 py-1 bg-cyan-500 text-white text-xs rounded-full">
                  Save 15%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center">
                      <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.href}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individual Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need specific services? We also offer individual service pricing 
              for businesses that want to pick and choose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-600 mb-4">{service.startingPrice}</div>
                <Link
                  href="/contact"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Have questions about our pricing? We've got answers.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your plan or contact us for a custom solution tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
            >
              Contact Sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing-guide"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
            >
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </ErrorBoundary>
  );
}