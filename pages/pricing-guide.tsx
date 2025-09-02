import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

export default function PricingGuide() {
  const plans = [
    {
      name: 'Starter', price: '$99',
      period: '/month', description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 team members', 'Basic AI services',
        'Email support', 'Standard templates',
        'Basic analytics', '1GB storage'
      ], popular: false,
      cta: 'Start Free Trial'
    }, {
      name: 'Professional',
      price: '$299', period: '/month',
      description: 'Ideal for growing businesses', features: [
        'Up to 25 team members',
        'Advanced AI services', 'Priority support',
        'Custom templates', 'Advanced analytics',
        '10GB storage', 'API access',
        'Custom integrations'
      ], popular: true,
      cta: 'Start Free Trial'
    }, {
      name: 'Enterprise',
      price: 'Custom', period: '',
      description: 'For large organizations', features: [
        'Unlimited team members',
        'Full AI suite', '24/7 dedicated support',
        'White-label options', 'Custom analytics',
        'Unlimited storage', 'Full API access',
        'Custom development', 'SLA guarantee'
      ], popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Credits', price: '$0.10',
      description: 'Per AI-generated content piece', icon: Brain
    },
    {
      name: 'Extra Storage', price: '$5',
      description: 'Per 10GB per month', icon: Database
    },
    {
      name: 'Priority Support', price: '$99',
      description: 'Per month for faster response', icon: Shield
    },
    {
      name: 'Custom Development', price: '$150',
      description: 'Per hour for custom features', icon: Network
    }
  ];

  const faqs = [
    {
            question: 'Can I change my plan at any time?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Is there a free trial available?', answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    }, {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
    }, {
      question: 'Do you offer discounts for annual subscriptions?',
      answer: 'Yes, we offer 20% off when you pay annually. This applies to all plans except Enterprise.'
    },
    {
      question: 'What happens if I exceed my plan limits?', answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional credits as needed.'
    },
    {
      question: 'Is there a setup fee?', answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on custom requirements.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Pricing Guide - Zion Tech Group</title>
        <meta name='description' content='Transparent pricing for all our AI and technology solutions' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                Transparent Pricing
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Simple, Transparent Pricing
              </h1>
              <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Choose Your Plan
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                All plans include our core AI services, with additional features and support based on your needs.
              </p>
            </div>

            <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>
              {plans.map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''}`}>
                  {plan.popular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                      <Badge className='bg-blue-500 text-white'>Most Popular</Badge>
                    </div>
                  )}
                  <div className='text-center mb-8'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.name}</h3>
                    <p className='text-gray-600 mb-4'>{plan.description}</p>
                    <div className='flex items-baseline justify-center'>
                      <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
                      <span className='text-gray-600 ml-1'>{plan.period}</span>
                    </div>
                  </div>

                  <ul className='space-y-4 mb-8'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center text-gray-700'>
                        <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className='w-full' variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Add-on Services
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Enhance your plan with additional services and features as your business grows.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {addOns.map((addon, index) => (
                <Card key={index} className='p-6 text-center hover: shadow-lg transition-shadow duration-300'>
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4'>
                    <addon.icon className='h-6 w-6 text-blue-600' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{addon.name}</h3>
                  <div className='text-2xl font-bold text-blue-600 mb-2'>{addon.price}</div>
                  <p className='text-gray-600 text-sm'>{addon.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Frequently Asked Questions
              </h2>
              <p className='text-xl text-gray-600'>
                Get answers to common questions about our pricing and plans.
              </p>
            </div>

            <div className='space-y-8'>
              {faqs.map((faq, index) => (
                <Card key={index} className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>{faq.question}</h3>
                  <p className='text-gray-600'>{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Get Started?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
              Join thousands of businesses already using our platform to transform their operations.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}