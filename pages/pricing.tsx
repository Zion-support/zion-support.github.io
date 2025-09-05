import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { CheckCircle, Star, ArrowRight, Phone, Mail, Zap, Shield, Users, Clock } from 'lucide-react';

const pricingPlans = [
  {
    name: 'AI Services',
    description: 'Comprehensive AI solutions for modern businesses',
    icon: Zap,
    color: 'blue',
    plans: [
      {
        name: 'Starter',
        price: '$1,500',
        period: '/month',
        description: 'Perfect for small businesses getting started with AI',
        features: [
          'Basic AI consultation',
          'Simple automation tools',
          'Email support',
          'Monthly reports',
          'Up to 5 AI models'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$3,500',
        period: '/month',
        description: 'Advanced AI solutions for growing businesses',
        features: [
          'Custom AI model development',
          'Advanced analytics',
          'Priority support',
          'Weekly reports',
          'Up to 20 AI models',
          'API integration',
          'Training & documentation'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored AI solutions for large organizations',
        features: [
          'Unlimited AI models',
          'Dedicated AI team',
          '24/7 support',
          'Real-time monitoring',
          'Custom integrations',
          'On-site training',
          'SLA guarantee'
        ],
        popular: false
      }
    ]
  },
  {
    name: 'IT Services',
    description: 'Complete IT infrastructure and support solutions',
    icon: Shield,
    color: 'green',
    plans: [
      {
        name: 'Basic',
        price: '$120',
        period: '/hour',
        description: 'Essential IT support and maintenance',
        features: [
          'Remote support',
          'System monitoring',
          'Basic security',
          'Email support',
          'Monthly maintenance'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$180',
        period: '/hour',
        description: 'Comprehensive IT services for growing businesses',
        features: [
          'On-site support',
          'Advanced security',
          'Cloud management',
          'Priority support',
          'Weekly maintenance',
          'Backup solutions',
          'Network optimization'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Full-service IT management for large organizations',
        features: [
          'Dedicated IT team',
          '24/7 monitoring',
          'Advanced security suite',
          'Custom solutions',
          'SLA guarantee',
          'On-site support',
          'Strategic planning'
        ],
        popular: false
      }
    ]
  },
  {
    name: 'Micro SaaS',
    description: 'Innovative micro SaaS platforms for modern businesses',
    icon: Users,
    color: 'purple',
    plans: [
      {
        name: 'Starter',
        price: '$19',
        period: '/month',
        description: 'Essential micro SaaS tools for small teams',
        features: [
          'Basic platform access',
          'Standard features',
          'Email support',
          'Monthly updates',
          'Up to 5 users'
        ],
        popular: false
      },
      {
        name: 'Business',
        price: '$49',
        period: '/month',
        description: 'Advanced micro SaaS solutions for growing businesses',
        features: [
          'Full platform access',
          'Advanced features',
          'Priority support',
          'Weekly updates',
          'Up to 25 users',
          'API access',
          'Custom integrations'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored micro SaaS solutions for large organizations',
        features: [
          'Unlimited users',
          'Custom features',
          'Dedicated support',
          'Real-time updates',
          'White-label options',
          'Custom development',
          'SLA guarantee'
        ],
        popular: false
      }
    ]
  }
];

const features = [
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise costs'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated support from our team of experts'
  },
  {
    icon: Clock,
    title: 'Fast Implementation',
    description: 'Quick setup and deployment for all services'
  }
];

export default function PricingPage() {
  return (
    <Layout 
      title="Pricing - Zion Tech Group | Transparent & Competitive Pricing"
      description="View our transparent pricing for AI services, IT solutions, and micro SaaS platforms. Starting from $19/month with no hidden fees. Get a free quote today."
      keywords="pricing, AI services pricing, IT services pricing, micro SaaS pricing, transparent pricing"
    >
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
                Transparent Pricing
                <span className="block text-blue-400">No Hidden Fees, No Surprises</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Choose the perfect plan for your business needs. All our services come with transparent pricing, 
                expert support, and guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Quote
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the service category that best fits your business needs and budget.
              </p>
            </motion.div>

            <div className="space-y-20">
              {pricingPlans.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="text-center mb-12">
                    <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{service.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.plans.map((plan, planIndex) => (
                      <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: planIndex * 0.1 }}
                        className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                          plan.popular ? `border-${service.color}-500` : 'border-gray-200'
                        } relative overflow-hidden`}
                      >
                        {plan.popular && (
                          <div className={`absolute top-0 right-0 bg-${service.color}-500 text-white px-4 py-2 text-sm font-semibold`}>
                            Most Popular
                          </div>
                        )}
                        
                        <div className="p-8">
                          <div className="text-center mb-8">
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                            <p className="text-gray-600 mb-6">{plan.description}</p>
                            <div className="flex items-baseline justify-center">
                              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                              <span className="text-gray-500 ml-2">{plan.period}</span>
                            </div>
                          </div>

                          <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Link
                            href="/contact"
                            className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                              plan.popular
                                ? `bg-${service.color}-600 hover:bg-${service.color}-700 text-white`
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}
                          >
                            Get Started
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Pricing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in transparent, fair pricing that delivers real value to your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and custom quote tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Quote
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}