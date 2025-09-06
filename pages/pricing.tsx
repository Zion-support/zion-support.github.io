import React, { useState } from 'react';
import Head from 'next/head';
import {
  Check, Star, Zap, Shield, Users, Lightbulb, Rocket, Settings, Globe, Code, Cloud, Database, Factory, Network, Award, CheckCircle, ArrowRight, Phone, Clock, Mail, MapPin, ChevronDown, ChevronRight, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight as ChevronRightIcon,
} from 'lucide-react';

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {
  enhancedRealMicroSaasServices,
  getServicesByCategory,
  getPopularServices,
} from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const toggleBillingCycle = (cycle: 'monthly' | 'yearly') => {
    setBillingCycle(cycle);
  };

  const getPrice = (monthlyPrice: number, yearlyPrice: number) => {
    return billingCycle === 'monthly' ? monthlyPrice : yearlyPrice;
  };

  const pricingPlans = [
    {
      name: 'Starter',
      price: { monthly: 99, yearly: 990 },
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI integration',
        'Email support',
        'Standard templates',
        'Basic analytics',
        'Up to 5 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: { monthly: 299, yearly: 2990 },
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Up to 25 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 999, yearly: 9990 },
      description: 'For large organizations',
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'Custom development',
        'Enterprise analytics',
        'Unlimited users',
        'Full API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const microSaaSPlans = [
    {
      name: 'Basic',
      price: { monthly: 29, yearly: 290 },
      description: 'Essential micro SaaS features',
      features: [
        '1 micro SaaS product',
        'Basic analytics',
        'Email support',
        'Standard hosting'
      ]
    },
    {
      name: 'Pro',
      price: { monthly: 99, yearly: 990 },
      description: 'Advanced micro SaaS capabilities',
      features: [
        'Up to 5 micro SaaS products',
        'Advanced analytics',
        'Priority support',
        'Premium hosting',
        'Custom domains'
      ]
    },
    {
      name: 'Enterprise',
      price: { monthly: 299, yearly: 2990 },
      description: 'Full micro SaaS suite',
      features: [
        'Unlimited micro SaaS products',
        'Enterprise analytics',
        '24/7 support',
        'Dedicated hosting',
        'White-label options'
      ]
    }
  ];

  const itServicesPlans = [
    {
      name: 'Consultation',
      price: { monthly: 150, yearly: 1500 },
      description: 'IT consulting and strategy',
      features: [
        'Monthly consultation',
        'Strategy planning',
        'Technology assessment',
        'Implementation roadmap'
      ]
    },
    {
      name: 'Managed Services',
      price: { monthly: 500, yearly: 5000 },
      description: 'Complete IT management',
      features: [
        '24/7 monitoring',
        'Proactive maintenance',
        'Security management',
        'Backup solutions',
        'Help desk support'
      ]
    },
    {
      name: 'Custom Development',
      price: { monthly: 2000, yearly: 20000 },
      description: 'Bespoke IT solutions',
      features: [
        'Custom software development',
        'System integration',
        'Cloud migration',
        'Legacy system modernization',
        'Dedicated team'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise clients.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all our services.'
    }
  ];

  return (
    <UltraFuturisticBackground>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent, flexible pricing for AI, IT, and Micro SaaS services." />
      </Head>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => toggleBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                <span className="ml-2 px-2 py-1 bg-green-600 text-white text-sm rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${getPrice(plan.price.monthly, plan.price.yearly)}
                    </span>
                    <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}