import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD:pages/pricing.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses getting started with AI',
      popular: false,
      features: [
        'Basic AI consultation',
        'Up to 5 hours of support',
        'Email support',
        'Basic analytics dashboard',
        'Standard response time'
      ],
      limitations: [
        'No phone support',
        'Limited customization'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses with advanced needs',
      popular: true,
      features: [
        'Advanced AI consultation',
        'Up to 20 hours of support',
        'Priority email support',
        'Advanced analytics dashboard',
        'Fast response time',
        'Custom integrations',
        'Monthly strategy calls'
      ],
      limitations: [
        'No dedicated account manager'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 999,
      period: 'month',
      description: 'Complete solution for large organizations',
      popular: false,
      features: [
        'Unlimited AI consultation',
        'Unlimited support hours',
        '24/7 phone support',
        'Custom analytics dashboard',
        'Instant response time',
        'Full customization',
        'Weekly strategy calls',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      limitations: [],
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Additional Support Hours',
      price: 50,
      period: 'hour',
      description: 'Extra consultation and support time'
    },
    {
      name: 'Custom Development',
      price: 150,
      period: 'hour',
      description: 'Bespoke AI solutions and integrations'
    },
    {
      name: 'Training Sessions',
      price: 200,
      period: 'session',
      description: 'Team training on AI tools and best practices'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for the Professional plan. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all plans.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and technology consulting. Choose the plan that fits your business needs." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Pricing Plans
=======

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
<<<<<<< HEAD
</Head>
        <title>Pricing - Zion Tech Group</title>"
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and technology consulting. Choose the plan that fits your business needs." />"
</meta>
      </$1>
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
</section>
        <div className="container mx-auto px-4">"
</div>
          <div className="max-w-4xl mx-auto text-center">"
</div>
            <h1 className="text-5xl font-bold mb-6">"
</h1>
>>>>>>> cursor/expand-services-advertise-and-build-project-0033:pages_disabled/pricing.tsx
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose the perfect plan for your business needs
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${billingPeriod === 'monthly' ? "text-white" : 'text-blue-300'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingPeriod === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${billingPeriod === 'yearly' ? "text-white" : 'text-blue-300'}`}>
                Yearly (Save 20%)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                    plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 inline mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">
                          ${billingPeriod === 'yearly' ? Math.round(plan.price * 0.8) : plan.price}
                        </span>
                        <span className="text-xl text-gray-500 ml-1">
                          /{plan.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-start">
                          <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500">{limitation}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href={plan.name === 'Enterprise' ? "/contact" : '/contact'}
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600">
                Enhance your plan with these add-on services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {addOn.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {addOn.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600">
                    ${addOn.price}/{addOn.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD:pages/pricing.tsx
  );
};

export default Pricing;
=======
=======
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI, IT, and Micro SaaS services." />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Pricing</h1>
        <p className="text-gray-700">Contact us for a customized quote that fits your business needs.</p>
      </main>
    </div>
  );
>>>>>>> ff4fe8fcd43 (Add services-extended catalog with real offerings; fix critical utilities; quarantine broken pages for stability; build passes)
}
>>>>>>> cursor/expand-services-advertise-and-build-project-0033:pages_disabled/pricing.tsx
