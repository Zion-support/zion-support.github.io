import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import Layout from '../components/Layout',
import {,
  CheckCircle,;
  Star,;
  ArrowRight,;
  Zap,;
  Shield,;
  Users,;
  Globe,;
  Phone,;
  Mail,;
  Clock,;
  Award,;
  Target,;
  Rocket,
} from 'lucide-react',
,
const pricingPlans = [,
  {,
    name: 'Starter',;
    price: '$99',;
    period: '/month',;
    description: 'Perfect for small businesses getting started',;
    features: [,
      'Up to 5 users',;
      'Basic AI features',;
      'Email support',;
      'Standard templates',;
      'Basic analytics',;
      'Mobile app access',
    ],;
    cta: 'Get Started',;
    popular: false,;
    color: 'blue',
  ,},;
  {,
    name: 'Professional',;
    price: '$299',;
    period: '/month',;
    description: 'Ideal for growing businesses',;
    features: [,
      'Up to 25 users',;
      'Advanced AI features',;
      'Priority support',;
      'Custom templates',;
      'Advanced analytics',;
      'API access',;
      'Custom integrations',;
      'Training sessions',
    ],;
    cta: 'Start Free Trial',;
    popular: true,;
    color: 'purple',
  ,},;
  {,
    name: 'Enterprise',;
    price: 'Custom',;
    period: '',;
    description: 'For large organizations',;
    features: [,
      'Unlimited users',;
      'Full AI capabilities',;
      '24/7 dedicated support',;
      'Custom development',;
      'Advanced security',;
      'SLA guarantee',;
      'On-premise deployment',;
      'Custom training',
    ],;
    cta: 'Contact Sales',;
    popular: false,;
    color: 'green',
  ,};
],
,
const addOns = [,
  {,
    name: 'Additional Users',;
    price: '$10',;
    period: '/user/month',;
    description: 'Add more team members to your plan',
  ,},;
  {,
    name: 'Advanced Analytics',;
    price: '$50',;
    period: '/month',;
    description: 'Enhanced reporting and data insights',
  ,},;
  {,
    name: 'Custom Integrations',;
    price: '$200',;
    period: '/integration',;
    description: 'Connect with your existing tools',
  ,},;
  {,
    name: 'Priority Support',;
    price: '$100',;
    period: '/month',;
    description: 'Faster response times and dedicated support',
  ,};
],
,
const faqs = [,
  {,
    question: 'Can I change plans anytime?',;
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },;
  {,
    question: 'Is there a free trial?',;
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required.',
  },;
  {,
    question: 'What payment methods do you accept?',;
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
  },;
  {,
    question: 'Do you offer discounts for annual plans?',;
    answer: 'Yes, we offer 20% discount for annual plans paid upfront.',
  };
],
,
export default function Pricing() {,
  return (,
    <Layout,
      title="Pricing - Zion Tech Group",
      description="Transparent pricing for our AI services, IT solutions, and micro SaaS platforms. Choose the plan that fits your business needs.",
      keywords="pricing, plans, AI services pricing, IT services cost, micro SaaS pricing, business plans",
    >,
      <Head>,
        <title>Pricing - Zion Tech Group</title>,
        <meta name="description" content="Transparent pricing for our AI services, IT solutions, and micro SaaS platforms. Choose the plan that fits your business needs." />,
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold mb-6">,
                Simple, Transparent Pricing,
              </h1>,
              <p className="text-xl md: text-2xl mb-8 text-blue-100">,
                Choose the plan that fits your business needs.,
                All plans include our core features with no hidden fees.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Pricing Plans */,};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="max-w-7xl mx-auto grid grid-cols-1 md: grid-cols-3 gap-8">,
              {pricingPlans.map((plan, index) => (,
                <motion.div,
                  key={plan.name};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className={`bg-white rounded-xl p-8 shadow-lg hover: shadow-xl transition-shadow relative ${,
                    plan.popular ? 'ring-2 ring-purple-600 scale-105' : '',
                  ,}`};
                >,
                  {plan.popular && (,
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">,
                      <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">,
                        Most Popular,
                      </span>,
                    </div>,
                  )};
                  <div className="text-center mb-6">,
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>,
                    <div className="flex items-baseline justify-center">,
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>,
                      <span className="text-gray-600 ml-1">{plan.period}</span>,
                    </div>,
                    <p className="text-gray-600 mt-2">{plan.description}</p>,
                  </div>,
                  <ul className="space-y-3 mb-8">,
                    {plan.features.map((feature, idx) => (,
                      <li key={idx} className="flex items-center">,
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />,
                        <span className="text-gray-600">{feature}</span>,
                      </li>,
                    ))};
                  </ul>,
                  <Link,
                    href={plan.name === 'Enterprise' ? '/contact' : '/contact'};
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${,
                      plan.popular,
                        ? 'bg-purple-600 text-white hover: bg-purple-700',
                        : plan.name === 'Enterprise',
                        ? 'bg-green-600 text-white hover:bg-green-700',
                        : 'bg-blue-600 text-white hover:bg-blue-700',
                    ,}`};
                  >,
                    {plan.cta};
                  </Link>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Add-ons Section */};
        <section className="py-16 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Add-ons & Extensions,
              </h2>,
              <p className="text-lg text-gray-600">,
                Enhance your plan with additional features and services,
              </p>,
            </motion.div>,
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">,
              {addOns.map((addon, index) => (,
                <motion.div,
                  key={addon.name};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="bg-white rounded-lg p-6 shadow-lg hover: shadow-xl transition-shadow",
                >,
                  <div className="flex items-center justify-between mb-3">,
                    <h3 className="text-lg font-semibold text-gray-900">{addon.name,}</h3>,
                    <div className="text-right">,
                      <div className="text-xl font-bold text-blue-600">{addon.price}</div>,
                      <div className="text-sm text-gray-500">{addon.period}</div>,
                    </div>,
                  </div>,
                  <p className="text-gray-600">{addon.description}</p>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* FAQ Section */};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Frequently Asked Questions,
              </h2>,
              <p className="text-lg text-gray-600">,
                Common questions about our pricing and plans,
              </p>,
            </motion.div>,
            <div className="max-w-3xl mx-auto space-y-6">,
              {faqs.map((faq, index) => (,
                <motion.div,
                  key={faq.question};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="bg-gray-50 rounded-lg p-6",
                >,
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>,
                  <p className="text-gray-600">{faq.answer}</p>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* CTA Section */};
        <section className="py-16 bg-blue-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>,
            <p className="text-xl mb-8 text-blue-100">,
              Choose your plan and start transforming your business today.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">,
                Get Free Consultation,
              </Link>,
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">,
                Call +1 302 464 0950,
              </a>,
            </div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};