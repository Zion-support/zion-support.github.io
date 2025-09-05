import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  Code,
  Database,
  Smartphone,
  BarChart3,
  CreditCard,
  Settings,
  Lock
} from 'lucide-react';
import Layout from '../components/Layout';

const features = [
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description: 'Built for the cloud with auto-scaling and high availability.',
    benefits: ['Auto-scaling', 'High Availability', 'Global CDN', 'Load Balancing']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption and compliance.',
    benefits: ['Data Encryption', 'SOC 2 Compliance', 'GDPR Ready', 'Multi-Factor Auth']
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance.',
    benefits: ['Sub-second Load Times', 'Caching Strategy', 'CDN Integration', 'Performance Monitoring']
  },
  {
    icon: Users,
    title: 'Multi-Tenant',
    description: 'Secure multi-tenancy for different user groups.',
    benefits: ['User Isolation', 'Custom Branding', 'Role-Based Access', 'White-label Options']
  }
];

const services = [
  {
    icon: Code,
    title: 'Custom SaaS Development',
    description: 'Bespoke software solutions tailored to your specific business needs.',
    features: [
      'Custom Features',
      'API Development',
      'Third-party Integrations',
      'Custom Workflows',
      'Advanced Analytics',
      'Mobile Apps'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Comprehensive data solutions for your SaaS platform.',
    features: [
      'Data Warehousing',
      'Real-time Analytics',
      'Data Visualization',
      'ETL Processes',
      'Data Security',
      'Backup & Recovery'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Seamless payment processing and subscription management.',
    features: [
      'Subscription Billing',
      'Payment Gateways',
      'Invoice Generation',
      'Tax Calculation',
      'Refund Management',
      'Financial Reporting'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Settings,
    title: 'Platform Management',
    description: 'Complete platform administration and maintenance.',
    features: [
      'User Management',
      'System Monitoring',
      'Performance Optimization',
      'Security Updates',
      'Backup Management',
      '24/7 Support'
    ],
    color: 'from-orange-500 to-orange-600'
  }
];

const technologies = [
  {
    name: 'React & Next.js',
    description: 'Modern frontend framework for responsive web applications.',
    icon: Code
  },
  {
    name: 'Node.js & Express',
    description: 'Scalable backend development with JavaScript.',
    icon: Database
  },
  {
    name: 'PostgreSQL',
    description: 'Robust relational database for complex data management.',
    icon: Database
  },
  {
    name: 'AWS/Azure',
    description: 'Cloud infrastructure for scalability and reliability.',
    icon: Cloud
  },
  {
    name: 'Docker & Kubernetes',
    description: 'Containerization and orchestration for deployment.',
    icon: Settings
  },
  {
    name: 'Stripe/PayPal',
    description: 'Secure payment processing and subscription management.',
    icon: CreditCard
  }
];

const pricing = [
  {
    name: 'Starter',
    price: '$2,999',
    period: 'one-time',
    description: 'Perfect for small businesses and startups.',
    features: [
      'Up to 100 users',
      'Basic features',
      'Email support',
      'Standard security',
      'Mobile responsive',
      'Basic analytics'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$7,999',
    period: 'one-time',
    description: 'Ideal for growing businesses with advanced needs.',
    features: [
      'Up to 1,000 users',
      'Advanced features',
      'Priority support',
      'Enhanced security',
      'Custom integrations',
      'Advanced analytics',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    description: 'Tailored solutions for large organizations.',
    features: [
      'Unlimited users',
      'Custom features',
      'Dedicated support',
      'Enterprise security',
      'White-label options',
      'Custom development',
      'SLA guarantee'
    ],
    popular: false
  }
];

const stats = [
  { number: '100+', label: 'SaaS Projects Delivered' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '50+', label: 'Integrations Available' },
  { number: '24/7', label: 'Support Available' }
];

export default function MicroSAASPage() {
  return (
    <Layout
      title="Micro SaaS - Zion Tech Group"
      description="Custom micro SaaS solutions built with modern technologies. Scalable, secure, and cost-effective software as a service platforms."
      keywords="micro SaaS, custom SaaS development, software as a service, SaaS platform, subscription software"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS
              </span>{' '}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build scalable, secure, and profitable micro SaaS applications tailored to your specific business needs and market requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Your SaaS
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View Examples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our micro SaaS platforms are built with modern technologies and best practices to ensure scalability, security, and profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>• {benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end micro SaaS development services from concept to deployment and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and secure micro SaaS applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Micro SaaS Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your micro SaaS project. All plans include our core development services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you create a profitable micro SaaS business with our proven development process and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                View Examples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}