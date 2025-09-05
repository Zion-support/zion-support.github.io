import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Users,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI',
    icon: Zap,
    color: 'blue',
    popular: false,
    features: [
      'Up to 5 AI models',
      'Basic machine learning tools',
      'Email support',
      'Standard data processing',
      'Basic analytics dashboard',
      'Monthly model updates',
      '10GB data storage',
      'API access'
    ],
    limitations: [
      'Limited to 1,000 API calls/month',
      'Basic support only',
      'No custom model training'
    ],
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: '/month',
    description: 'Ideal for growing companies with advanced needs',
    icon: Shield,
    color: 'purple',
    popular: true,
    features: [
      'Up to 20 AI models',
      'Advanced ML algorithms',
      'Priority support',
      'Custom data processing',
      'Advanced analytics',
      'Weekly model updates',
      '100GB data storage',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager',
      'Training and onboarding',
      'SLA guarantee'
    ],
    limitations: [
      'Up to 50,000 API calls/month',
      'Standard business hours support'
    ],
    cta: 'Start Free Trial',
    href: '/contact'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    icon: Cloud,
    color: 'green',
    popular: false,
    features: [
      'Unlimited AI models',
      'Custom ML development',
      '24/7 dedicated support',
      'Enterprise data processing',
      'Custom analytics platform',
      'Real-time model updates',
      'Unlimited data storage',
      'Full API access',
      'Custom integrations',
      'Dedicated team',
      'On-site training',
      '99.9% SLA guarantee',
      'Custom security compliance',
      'White-label solutions',
      'Advanced monitoring'
    ],
    limitations: [],
    cta: 'Contact Sales',
    href: '/contact'
  }
];

const servicePricing = [
  {
    name: 'AI Services',
    icon: Brain,
    startingPrice: '$150',
    unit: '/hour',
    description: 'Custom AI development and implementation',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Strategy Consulting'
    ]
  },
  {
    name: 'IT Services',
    icon: Cloud,
    startingPrice: '$120',
    unit: '/hour',
    description: 'Comprehensive IT solutions and support',
    features: [
      'Cloud Infrastructure Setup',
      'DevOps Implementation',
      'System Administration',
      'Network Security',
      'IT Consulting'
    ]
  },
  {
    name: 'Micro SaaS',
    icon: Zap,
    startingPrice: '$29',
    unit: '/month',
    description: 'Ready-to-use SaaS solutions',
    features: [
      'Pre-built SaaS Platforms',
      'White-label Solutions',
      'API Integration',
      'User Management',
      'Analytics Dashboard'
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    startingPrice: '$200',
    unit: '/hour',
    description: 'Advanced security solutions',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Consulting',
      'Security Implementation',
      'Incident Response'
    ]
  }
];

const faqs = [
  {
    question: 'What is included in the free trial?',
    answer: 'Our free trial includes access to all Professional plan features for 14 days, with no credit card required. You can test our AI models, use our analytics dashboard, and experience our support quality.'
  },
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
  },
  {
    question: 'Do you offer custom pricing?',
    answer: 'Absolutely! For Enterprise customers with specific needs, we offer custom pricing and solutions. Contact our sales team to discuss your requirements.'
  },
  {
    question: 'What support options are available?',
    answer: 'We offer email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for any of our plans. You only pay the monthly subscription fee, and we handle all the technical setup at no extra cost.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'We offer a 30-day money-back guarantee for all plans. If you\'re not satisfied, we\'ll provide a full refund within the first 30 days.'
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('Professional');

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group | Transparent Technology Pricing</title>
        <meta name="description" content="View our transparent pricing for AI services, IT solutions, and technology consulting. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="zion tech pricing, AI services pricing, IT consulting rates, technology pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for all our technology services and solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simple, Transparent Pricing
                <span className="block text-blue-400">Choose What Works for You</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                No hidden fees, no surprises. Choose the plan that fits your business needs and scale as you grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    billingPeriod === 'monthly'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    billingPeriod === 'yearly'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      plan.color === 'blue' ? 'bg-blue-100' :
                      plan.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.color === 'blue' ? 'text-blue-600' :
                        plan.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-3">Limitations:</h4>
                      <div className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start">
                            <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <a
                    href={plan.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pricing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent hourly rates for our professional services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePricing.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-blue-600">{service.startingPrice}</span>
                      <span className="text-gray-500 ml-1">{service.unit}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center block font-medium"
                  >
                    Get Quote
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Got questions? We've got answers. Here are some common questions about our pricing.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Choose your plan and start transforming your business with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}