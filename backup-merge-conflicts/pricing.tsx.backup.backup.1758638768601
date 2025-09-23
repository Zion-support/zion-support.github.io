<<<<<<< HEAD

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
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
>>>>>>> main
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  DollarSign,
  Clock,
  Users,
  Zap,
  Shield,
  Brain,
  Cloud,
  Network
} from 'lucide-react';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';
>>>>>>> cursor/expand-services-advertise-and-build-project-9473

const pricingPlans = [
  {
<<<<<<< HEAD
    name: 'AI Services',
    icon: Brain,
    description: 'Machine Learning, Computer Vision, NLP',
    plans: [
      {
        name: 'Starter',
        price: '$1,000',
        period: '/month',
        description: 'Perfect for small businesses',
        features: [
          'Basic ML model development',
          'Data preprocessing',
          'Model deployment',
          'Email support',
          'Monthly reports'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$3,500',
        period: '/month',
        description: 'Ideal for growing companies',
        features: [
          'Advanced ML models',
          'Custom model training',
          'Real-time predictions',
          'Priority support',
          'Weekly reports',
          'A/B testing'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$10,000',
        period: '/month',
        description: 'For large organizations',
        features: [
          'Custom AI solutions',
          'Dedicated team',
          '24/7 support',
          'Custom integrations',
          'Real-time monitoring',
          'Unlimited models'
        ],
        popular: false
      }
    ]
  },
  {
    name: 'IT Services',
    icon: Network,
    description: 'Cloud, DevOps, Cybersecurity',
    plans: [
      {
        name: 'Basic',
        price: '$120',
        period: '/hour',
        description: 'Consulting and support',
        features: [
          'IT consulting',
          'System maintenance',
          'Security audits',
          'Email support',
          'Basic monitoring'
        ],
        popular: false
      },
      {
        name: 'Standard',
        price: '$200',
        period: '/hour',
        description: 'Comprehensive IT services',
        features: [
          'Cloud migration',
          'DevOps implementation',
          'Security hardening',
          'Priority support',
          'Advanced monitoring',
          'Backup solutions'
        ],
        popular: true
      },
      {
        name: 'Premium',
        price: '$350',
        period: '/hour',
        description: 'Full-service IT management',
        features: [
          'Dedicated team',
          '24/7 monitoring',
          'Custom solutions',
          'Emergency support',
          'Compliance management',
          'Performance optimization'
        ],
        popular: false
      }
    ]
  },
  {
    name: 'Micro SaaS',
    icon: Cloud,
    description: 'Custom SaaS solutions',
    plans: [
      {
        name: 'Startup',
        price: '$19',
        period: '/month',
        description: 'For new businesses',
        features: [
          'Basic SaaS platform',
          'User management',
          'Basic analytics',
          'Email support',
          'Standard hosting'
        ],
        popular: false
      },
      {
        name: 'Growth',
        price: '$99',
        period: '/month',
        description: 'For growing businesses',
        features: [
          'Advanced features',
          'Custom integrations',
          'Advanced analytics',
          'Priority support',
          'Scalable hosting',
          'API access'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$499',
        period: '/month',
        description: 'For large organizations',
        features: [
          'Custom development',
          'White-label solution',
          'Dedicated support',
          'Custom hosting',
          'Advanced security',
          'Unlimited users'
        ],
        popular: false
      }
    ]
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

export default function PricingPage() {
  return (
    <Layout 
      title="Pricing - Zion Tech Group | Transparent Pricing for AI, IT & SaaS Services"
      description="View our transparent pricing for AI services, IT solutions, and Micro SaaS platforms. No hidden fees, flexible plans for businesses of all sizes."
      keywords="pricing, AI services pricing, IT services cost, SaaS pricing, transparent pricing, business solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. No hidden fees, no surprises. 
                All plans include our commitment to quality and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Custom Quote
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
=======
    name: "Starter",
    price: "$2,000",
    period: "per month",
    description: "Perfect for small businesses getting started",
    features: [
      "Basic AI integration",
      "Email support",
      "Standard security",
      "Up to 5 users",
      "Basic analytics"
    ],
    limitations: [
      "Limited customization",
      "No priority support"
    ],
    popular: false,
    color: "blue"
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "per month",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Advanced AI capabilities",
      "Priority support",
      "Enhanced security",
      "Up to 25 users",
      "Advanced analytics",
      "Custom integrations",
      "Training sessions"
    ],
    limitations: [],
    popular: true,
    color: "purple"
  },
  {
    name: "Enterprise",
    price: "$15,000",
    period: "per month",
    description: "Comprehensive solution for large organizations",
    features: [
      "Full AI suite",
      "24/7 dedicated support",
      "Enterprise security",
      "Unlimited users",
      "Custom analytics",
      "Full customization",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    limitations: [],
    popular: false,
    color: "green"
  }
];

const addOns = [
  {
    name: "Additional Users",
    price: "$50",
    period: "per user/month",
    description: "Add more users to your plan"
  },
  {
    name: "Custom Development",
    price: "$200",
    period: "per hour",
    description: "Custom features and integrations"
  },
  {
    name: "Training Sessions",
    price: "$500",
    period: "per session",
    description: "Team training and onboarding"
  },
  {
    name: "Priority Support",
    price: "$1,000",
    period: "per month",
    description: "24/7 priority support"
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, IT, and micro SaaS services. Choose the plan that fits your business needs." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Pricing</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transparent pricing for our comprehensive AI, IT, and micro SaaS services.
              </p>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {pricingPlans.map((service, serviceIndex) => (
              <motion.div
                key={serviceIndex}
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.name}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{service.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {service.plans.map((plan, planIndex) => (
                    <motion.div
                      key={planIndex}
                      className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative ${
                        plan.popular ? 'ring-2 ring-blue-500' : ''
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: planIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                          <span className="text-gray-500 ml-1">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                          plan.popular
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering exceptional value and results for every client
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: 'Transparent Pricing',
                  description: 'No hidden fees or surprises. What you see is what you pay.'
                },
                {
                  icon: Clock,
                  title: 'Fast Delivery',
                  description: 'Quick turnaround times without compromising on quality.'
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Experienced professionals with proven track records.'
                },
                {
                  icon: Shield,
                  title: 'Quality Guarantee',
                  description: '100% satisfaction guarantee on all our services.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
=======
        {/* Billing Toggle */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    billingPeriod === 'yearly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly (20% off)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-3" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-ons</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enhance your plan with additional services and features.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{addOn.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{addOn.price}</span>
                    <span className="text-gray-600 ml-1">{addOn.period}</span>
                  </div>
                  <p className="text-gray-600">{addOn.description}</p>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and custom quote tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
=======
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us to discuss your specific needs and get a custom quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </>
<<<<<<< HEAD
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  );
>>>>>>> main
}