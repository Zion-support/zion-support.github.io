import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  CheckCircle,
  Star,
  Users,
  Building,
  ArrowRight,
  Phone,
  Mail,
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  Award,
} from 'lucide-react';

export default function PricingGuide() {
<<<<<<< HEAD
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
=======
  const pricingTiers = [
  {
      name: 'Startup',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for startups and small businesses',
      icon: Users,
      features: [
<<<<<<< HEAD
        'Basic AI automation',
        'Cloud infrastructure setup',
        'Email support',
        'Monthly reporting',
        'Up to 5 team members',
        'Basic security features',
=======
        'Basic AI automation,Cloud infrastructure setup,Email support,Monthly reporting,Up to 5 team members,Basic security features'
>>>>>>> main
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing businesses',
      icon: Building,
      features: [
<<<<<<< HEAD
        'Advanced AI solutions',
        'Full cloud migration',
        'Priority support',
        'Weekly reporting',
        'Up to 25 team members',
        'Advanced security',
        'API integrations',
        'Custom dashboards',
=======
        'Advanced AI solutions,Full cloud migration,Priority support,Weekly reporting,Up to 25 team members,Advanced security,API integrations,Custom dashboards'
>>>>>>> main
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: Award,
      features: [
<<<<<<< HEAD
        'Custom AI development',
        'Multi-cloud architecture',
        '24/7 dedicated support',
        'Real-time monitoring',
        'Unlimited team members',
        'Enterprise security',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees',
=======
        'Custom AI development,Multi-cloud architecture,24/7 dedicated support,Real-time monitoring,Unlimited team members,Enterprise security,Custom integrations,Dedicated account manager,SLA guarantees'
>>>>>>> main
      ],
      popular: false,
    },
  ];

  const addOnServices = [
  {
      name: 'AI Development',
      price: '$150/hour',
      description: 'Custom AI model development and training',
    },
    {
      name: 'Cloud Migration',
      price: '$5, 000',
      description: 'Complete cloud infrastructure migration',
    },
    {
      name: 'Security Audit',
      price: '$3, 500',
      description: 'Comprehensive security assessment and recommendations',
    },
    {
      name: 'Training & Support',
      price: '$200/hour',
<<<<<<< HEAD
      description: 'Team training and ongoing technical support',
    },
=======
      description: 'Team training and ongoing technical support'
>>>>>>> main
    }
>>>>>>> main
  ];

  return (
    <>
      <Head>
        <title>Pricing Guide - Zion Tech Group</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, cloud solutions, and technology consulting. Choose the plan that fits your business needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
=======
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
>>>>>>> main
                Transparent Pricing
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Choose the perfect plan for your business needs. No hidden fees,
                no surprises.
              </p>
<<<<<<< HEAD
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  Contact Sales
                </Button>
=======
              <div className="flex items-center justify-center space-x-4 text-blue-100">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Cancel anytime</span>
                </div>
>>>>>>> main
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 sm: py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business
              </p>
            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

            <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>
              {plans.map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''}`}>
                  {plan.popular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                      <Badge className='bg-blue-500 text-white'>Most Popular</Badge>
=======
            
>>>>>>> main
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
>>>>>>> main
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {tier.price}
                      </span>
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
                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Add-ons Section */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Add-on Services
=======
        {/* Add-on Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Additional Services
>>>>>>> main
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your plan with specialized services
              </p>
            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {addOns.map((addon, index) => (
                <Card key={index} className='p-6 text-center hover: shadow-lg transition-shadow duration-300'>
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4'>
                    <addon.icon className='h-6 w-6 text-blue-600' />
=======
            
>>>>>>> main
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow"
                >
                  <div className="text-center">
                    <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
<<<<<<< HEAD
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {service.price}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
=======
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">{service.price}</p>
                    <p className="text-gray-600 text-sm">{service.description}</p>
>>>>>>> main
>>>>>>> main
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
<<<<<<< HEAD
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
=======
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
>>>>>>> main
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I change my plan anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and we&apos;ll prorate any
                  billing differences.
                </p>
                '
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What&apos;s included in the Enterprise plan?
                </h3>
                '
                <p className="text-gray-600">
                  The Enterprise plan includes everything in Professional plus
                  custom development, dedicated support, SLA guarantees, and a
                  dedicated account manager.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer custom pricing?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer custom pricing for large-scale projects and
                  enterprise clients. Contact us to discuss your specific
                  requirements.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards, bank transfers, and can
                  accommodate enterprise billing arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> main
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote tailored
              to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
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
