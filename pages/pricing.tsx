import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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

const pricingPlans = [
  {
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
              initial={{ opacity: 0, y: 20 }}
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
            </motion.div>
          </div>
        </section>

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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
