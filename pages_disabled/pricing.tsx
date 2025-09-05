<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react'
=======
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';

const plans = [;
  {}
    name: "Starter","
    price: "$2,000","
    period: "/month","
    description: "Perfect for small businesses getting started with AI","
    features: [;
      "Basic AI consultation","
      "Email support","
      "Monthly check-ins","
      "Basic analytics dashboard","
      "Up to 5 team members"";
    ],
    limitations: [;
      "Limited AI models","
      "Basic customization","
      "Standard response time"";
    ],
    popular: false,
    cta: "Get Started""
  },
  {}
    name: "Professional","
    price: "$5,000","
    period: "/month","
    description: "Ideal for growing companies with advanced needs","
    features: [;
      "Advanced AI solutions","
      "Priority support","
      "Weekly check-ins","
      "Custom analytics dashboard","
      "Up to 25 team members","
      "API access","
      "Custom integrations","
      "Training sessions"";
    ],
    limitations: [;
      "Limited to 2 custom models"";
    ],
    popular: true,
    cta: "Most Popular""
  },
  {}
    name: "Enterprise","
    price: "Custom","
    period: "","
    description: "Tailored solutions for large organizations","
    features: [;
      "Unlimited AI solutions","
      "24/7 dedicated support","
      "Daily check-ins","
      "Custom analytics platform","
      "Unlimited team members","
      "Full API access","
      "Custom integrations","
      "Dedicated training program","
      "SLA guarantee","
      "Custom development"";
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales""
  }
;];

const addOns = [;
  {}
    name: "Additional AI Models","
    price: "$500","
    period: "/month per model","
    description: "Add more AI models to your plan"";
  },
  {}
    name: "Priority Support","
    price: "$200","
    period: "/month","
    description: "Get faster response times and dedicated support"";
  },
  {}
    name: "Custom Development","
    price: "$150","
    period: "/hour","
    description: "Custom features and integrations"";
  },
  {}
    name: "Training Sessions","
    price: "$1,000","
    period: "/session","
    description: "Team training and onboarding sessions"";
  }
;];

const faqs = [;
  {}
    question: "Can I change my plan anytime?","
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.""
  },
  {}
    question: "Do you offer custom pricing?","
    answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.""
  },
  {}
    question: "What payment methods do you accept?","
    answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.""
  },
  {}
    question: "Is there a free trial available?","
    answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started.""
  }
;];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');',

  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Pricing - Zion Tech Group</title>;
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and technology consulting. Choose the plan that fits your business needs." />"
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h1 className="text-5xl font-bold mb-6">");
              Simple, Transparent Pricing,
            </h1>;
            <p className="text-xl text-blue-100 mb-8">";
              Choose the plan that fits your business needs. No hidden fees, no surprises.,
            </p>;
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">"
              <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-white' : 'text-blue-300'}`}>;
                Monthly;
              </span>;
              <button;
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}',
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"";
              >;
                <span;
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${}
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1',
                  }`}
                />,
              </button>;
              <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-white' : 'text-blue-300'}`}>;
                Yearly;
                <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">";
                  Save 20%;
                </span>;
              </span>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Pricing Plans */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-7xl mx-auto">";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";
              {plans.map((plan, index) => (,
                <motion.div}),
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${}
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : '',
                  }`}
                  whileHover={{ y: -5 }}
                >,
                  {plan.popular && (;
                    <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">";
                      <Star className="w-4 h-4 inline mr-1" />"}),
                      Most Popular;
                    </div>;
                  )}
                  <div className="p-8">";
                    <div className="text-center mb-8">";
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">";
                        {plan.name}
                      </h3>,
                      <p className="text-gray-600 mb-4">";
                        {plan.description}
                      </p>,
                      <div className="flex items-baseline justify-center">";
                        <span className="text-5xl font-bold text-gray-900">";
                          {plan.price}
                        </span>,
                        <span className="text-gray-600 ml-1">";
                          {plan.period}
                        </span>,
                      </div>;
                    </div>;

                    <div className="space-y-4 mb-8">";
                      {plan.features.map((feature, featureIndex) => (,
                        <div key={featureIndex} className="flex items-start">"
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />";
                          <span className="text-gray-700">{feature}</span>"
                        </div>;
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (,
                        <div key={limitationIndex} className="flex items-start">"
                          <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />";
                          <span className="text-gray-500">{limitation}</span>"
                        </div>;
                      ))}
                    </div>,

                    <Link;
                      href={plan.name === 'Enterprise' ? '/contact' : '/contact'}',
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${}
                        plan.popular,
                          ? 'bg-blue-600 text-white hover:bg-blue-700'';
                          : 'bg-gray-900 text-white hover:bg-gray-800'';
                      }`}
                    >,
                      {plan.cta}
                    </Link>,
                  </div>;
                </motion.div>;
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* Add-ons */}
      <section className="py-16 bg-white">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <div className="text-center mb-12">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                Add-ons & Extras;
              </h2>;
              <p className="text-xl text-gray-600">";
                Enhance your plan with additional services;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">";
              {addOns.map((addOn, index) => (,
                <motion.div}),
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow""
                  whileHover={{ y: -2 }}
                >,
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                    {addOn.name}
                  </h3>,
                  <div className="text-2xl font-bold text-blue-600 mb-2">";
                    {addOn.price}
                    <span className="text-sm text-gray-600 font-normal">"
                      {addOn.period}
                    </span>,
                  </div>;
                  <p className="text-gray-600 text-sm">";
                    {addOn.description}
                  </p>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* FAQ */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto">";
            <div className="text-center mb-12">";
              <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                Frequently Asked Questions;
              </h2>;
            </div>;

            <div className="space-y-6">";
              {faqs.map((faq, index) => (,
                <motion.div}),
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md""
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >,
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                    {faq.question}
                  </h3>,
                  <p className="text-gray-600">";
                    {faq.answer}
                  </p>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h2 className="text-3xl font-bold text-white mb-4">";
              Ready to Get Started?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">";
              Contact our team to discuss your needs and find the perfect plan;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link;
                href="/contact"";
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"";
              >;
                Contact Sales;
                <ArrowRight className="w-4 h-4" />";
              </Link>;
              <Link;
                href="/contact"";
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"";
              >;
                Start Free Trial;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
import React from 'react'
>>>>>>> pr-11913
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircle,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3
} from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: 'per month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Basic AI integration',
      'Cloud hosting',
      'Email support',
      'Standard security',
      'Basic analytics'
    ],
    limitations: [
      'Limited customization',
      'No priority support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: 'per month',
    description: 'Ideal for growing businesses',
    features: [
      'Advanced AI capabilities',
      'Custom integrations',
      'Priority support',
      'Enhanced security',
      'Advanced analytics',
      'API access',
      'Custom branding'
    ],
    limitations: [],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with complex needs',
    features: [
      'Full AI suite',
      'Custom development',
      '24/7 dedicated support',
      'Enterprise security',
      'Custom analytics',
      'Unlimited integrations',
      'White-label solutions',
      'Dedicated account manager'
    ],
    limitations: [],
    popular: false
  }
]

const addOns = [
  {
    name: 'Additional Storage',
    price: '$10',
    period: 'per 100GB/month',
    description: 'Extra cloud storage for your data'
  },
  {
    name: 'Premium Support',
    price: '$50',
    period: 'per month',
    description: '24/7 priority support and faster response times'
  },
  {
    name: 'Custom Integrations',
    price: '$200',
    period: 'per integration',
    description: 'Custom API integrations with third-party services'
  }
]

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our technology solutions and services." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
=======
import React from 'react';
import Head from 'next/head';
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose the perfect plan for your business needs
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-lg shadow-md p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star size={16} className="mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li key={limitationIndex} className="flex items-center">
                      <X size={20} className="text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-500 line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Add-On Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3>
                  <p className="text-gray-600 mb-4">{addOn.description}</p>
                  <div className="text-2xl font-bold text-blue-600">
                    {addOn.price}
                    <span className="text-sm text-gray-600 ml-1">{addOn.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-6">Contact us for a personalized quote tailored to your specific needs</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Sales
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
<<<<<<< HEAD
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
=======
      </div>
    </>
  )
}
>>>>>>> pr-11913
