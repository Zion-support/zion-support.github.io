import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Shield,
  Settings,
  BarChart3,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    href: '/ai-services',
    features: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Fraud Detection',
      'Voice AI',
      'Content Generation'
    ],
    pricing: 'Starting at $1,000/month',
    count: '25+ AI Solutions',
    popular: true
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions to power your digital transformation',
    icon: Network,
    href: '/it-services',
    features: [
      'Cloud Migration',
      'Cybersecurity',
      'Infrastructure Management',
      'Digital Transformation',
      'DevOps Implementation',
      'Network Design',
      'Database Administration'
    ],
    pricing: 'Starting at $1,500/month',
    count: '18+ IT Solutions',
    popular: true
  },
  {
    title: 'Micro SaaS',
    description: 'Innovative software as a service solutions for specialized business needs',
    icon: Cloud,
    href: '/micro-saas',
    features: [
      'AI Content Marketing',
      'Smart Lead Management',
      'Analytics Dashboard',
      'Workflow Automation',
      'Customer Support Bot',
      'Inventory Management',
      'Email Marketing',
      'Project Management'
    ],
    pricing: 'Starting at $19/month',
    count: '20+ Products',
    popular: true
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Expert Team',
    description: 'Certified professionals with years of experience'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock technical support'
  },
  {
    icon: Award,
    title: 'Fast Delivery',
    description: 'Agile development with rapid deployment'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We analyze your requirements and propose the best solution'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Detailed project planning with clear milestones and timelines'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build and implement your solution with regular updates'
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'Launch your solution with full support and training'
  }
];

export default function ServicesPage() {
  return (
    <Layout
      title="Services - Zion Tech Group"
      description="Comprehensive technology solutions including AI services, IT solutions, and Micro SaaS products"
      keywords="services, AI services, IT services, micro SaaS, technology solutions, digital transformation"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Comprehensive technology solutions to power your digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions to help your business thrive in the digital age
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-6">
                      <IconComponent className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{service.count}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise and commitment to quality
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver successful projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our expert team help you leverage cutting-edge technology to drive growth and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}