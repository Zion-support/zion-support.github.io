import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Zap,
  Shield,
  Users,
  BarChart3,
  Globe,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  CreditCard,
  Calendar,
  Phone,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasServices = [
  {
    title: 'AI-Powered Lead Scoring Platform',
    description: 'Intelligent lead qualification and scoring using machine learning algorithms to identify high-value prospects.',
    icon: Target,
    features: ['Machine Learning Models', 'Real-time Scoring', 'CRM Integration', 'Analytics Dashboard'],
    pricing: 'Starting at $99/month',
    popular: false
  },
  {
    title: 'Automated Social Media Scheduler',
    description: 'AI-driven social media management tool that optimizes posting times and content for maximum engagement.',
    icon: Zap,
    features: ['Smart Scheduling', 'Content Optimization', 'Multi-platform Support', 'Performance Analytics'],
    pricing: 'Starting at $49/month',
    popular: true
  },
  {
    title: 'Customer Support Chatbot',
    description: 'Intelligent chatbot solution that provides 24/7 customer support with natural language processing.',
    icon: Shield,
    features: ['NLP Processing', 'Multi-language Support', 'Integration APIs', 'Analytics & Reporting'],
    pricing: 'Starting at $79/month',
    popular: false
  },
  {
    title: 'Business Analytics Dashboard',
    description: 'Comprehensive analytics platform that provides real-time insights into business performance and KPIs.',
    icon: BarChart3,
    features: ['Real-time Data', 'Custom Dashboards', 'Data Visualization', 'Export Capabilities'],
    pricing: 'Starting at $129/month',
    popular: true
  }
];

const industries = [
  {
    icon: Building,
    title: 'Real Estate',
    description: 'Property management and lead generation solutions',
    services: ['Property Analytics', 'Lead Management', 'CRM Integration', 'Market Analysis']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Online store optimization and customer engagement tools',
    services: ['Inventory Management', 'Customer Analytics', 'Automated Marketing', 'Sales Tracking']
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Learning management and student engagement platforms',
    services: ['Course Management', 'Student Analytics', 'Progress Tracking', 'Assessment Tools']
  },
  {
    icon: Home,
    title: 'Healthcare',
    description: 'Patient management and healthcare analytics solutions',
    services: ['Patient Records', 'Appointment Scheduling', 'Health Analytics', 'Compliance Tools']
  }
];

const features = [
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Get your micro SAAS up and running in days, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption and compliance'
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from startup to enterprise'
  },
  {
    icon: Users,
    title: 'Multi-tenant Support',
    description: 'Serve multiple clients with isolated, secure environments'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 1,000 users',
      'Basic analytics',
      'Email support',
      'Standard security',
      '1 custom integration'
    ],
    popular: false,
    setupFee: '$200',
    trialPeriod: '7 days'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      'Up to 10,000 users',
      'Advanced analytics',
      'Priority support',
      'Enhanced security',
      '5 custom integrations',
      'API access',
      'Custom branding'
    ],
    popular: true,
    setupFee: '$600',
    trialPeriod: '14 days'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited users',
      'Custom analytics',
      '24/7 dedicated support',
      'Enterprise security',
      'Unlimited integrations',
      'Full API access',
      'White-label solution',
      'Custom development'
    ],
    popular: false,
    setupFee: 'Custom',
    trialPeriod: '30 days'
  }
];

const stats = [
  { number: '50+', label: 'Micro SAAS Solutions' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '30', label: 'Days Free Trial' }
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SAAS Solutions - Zion Tech Group"
      description="Custom micro SAAS solutions built with modern technology. Scalable, secure, and designed to grow with your business."
      keywords="micro saas, custom software, saas development, business solutions, software as a service"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Custom-built micro SAAS solutions that solve specific business problems with modern technology and scalable architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized software solutions designed to address specific business challenges with modern technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-2 ${service.popular ? 'border-blue-500' : 'border-gray-100'}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized micro SAAS solutions tailored for specific industries and their unique requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-sm text-gray-600">
                      • {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technology and designed for scalability, security, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative ${plan.popular ? 'border-2 border-blue-500' : 'border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Setup: {plan.setupFee} • Trial: {plan.trialPeriod}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Track Record</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Delivering reliable micro SAAS solutions with proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Micro SAAS?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let our expert team help you create a custom micro SAAS solution that solves your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}