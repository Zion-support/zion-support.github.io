<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Code,
  Smartphone,
  Server
} from 'lucide-react';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05

const serviceCategories = [
  {
    title: 'AI Services',
<<<<<<< HEAD
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    services: ['AI Analytics', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions and infrastructure management',
    icon: Network,
    services: ['Cloud Migration', 'System Integration', 'Network Security', 'Data Management'],
    link: '/it-services',
    color: 'from-green-500 to-blue-600'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative micro software solutions for specific business needs',
    icon: Cloud,
    services: ['Workflow Automation', 'Project Management', 'Customer Analytics', 'API Integration'],
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Security',
    description: 'Advanced cybersecurity and data protection solutions',
    icon: Shield,
    services: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance Management'],
    link: '/security',
    color: 'from-red-500 to-orange-600'
  },
  {
    title: 'Automation',
    description: 'Intelligent automation solutions to streamline operations',
    icon: Zap,
    services: ['Process Automation', 'Workflow Optimization', 'Task Scheduling', 'Integration Hub'],
    link: '/automation',
    color: 'from-yellow-500 to-red-600'
  },
  {
    title: 'Analytics',
    description: 'Data-driven insights and business intelligence solutions',
    icon: BarChart3,
    services: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Reporting'],
    link: '/analytics',
    color: 'from-indigo-500 to-purple-600'
=======
    icon: Brain,
    description: 'Cutting-edge artificial intelligence solutions that transform your business',
    href: '/ai-services',
    color: 'from-purple-500 to-pink-500',
    services: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scalable cloud infrastructure and migration services',
    href: '/cloud-solutions',
    color: 'from-blue-500 to-cyan-500',
    services: ['Cloud Migration', 'Infrastructure as Code', 'DevOps', 'Container Orchestration']
  },
  {
    title: 'Security Services',
    icon: Shield,
    description: 'Comprehensive cybersecurity solutions to protect your business',
    href: '/security',
    color: 'from-red-500 to-orange-500',
    services: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
  },
  {
    title: 'Performance Optimization',
    icon: Zap,
    description: 'Optimize your applications for maximum performance and efficiency',
    href: '/performance',
    color: 'from-yellow-500 to-orange-500',
    services: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Testing']
  },
  {
    title: 'Digital Transformation',
    icon: Globe,
    description: 'Transform your business with modern digital solutions',
    href: '/digital-transformation',
    color: 'from-green-500 to-teal-500',
    services: ['Process Automation', 'Legacy Modernization', 'API Development', 'Integration Services']
  },
  {
    title: 'Consulting',
    icon: Users,
    description: 'Expert guidance to help you make the right technology decisions',
    href: '/consulting',
    color: 'from-indigo-500 to-purple-500',
    services: ['Technology Strategy', 'Architecture Review', 'Vendor Selection', 'Project Management']
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
<<<<<<< HEAD
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Countries Served' }
];

const benefits = [
  {
    title: 'Expert Team',
    description: 'Experienced professionals with deep industry knowledge',
    icon: Users
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Latest technologies and innovative solutions',
    icon: Target
  },
  {
    title: 'Scalable Solutions',
    description: 'Solutions that grow with your business',
    icon: Globe
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful implementations',
    icon: Award
=======
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your current systems and understand your business goals.',
    icon: Database
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive strategy tailored to your specific needs.',
    icon: Code
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We execute the solution with precision and attention to detail.',
    icon: Server
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'We continuously monitor and optimize for maximum performance.',
    icon: Zap
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
];

export default function ServicesOverviewPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Services Overview - Zion Tech Group"
      description="Comprehensive overview of our technology services and solutions designed to transform your business."
      keywords="services, technology solutions, AI, IT, micro SAAS, security, automation, analytics"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
=======
    <>
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud solutions, security, and digital transformation." />
        <meta name="keywords" content="technology services, AI, cloud, security, digital transformation, consulting" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology services designed to transform your business operations, 
                enhance security, and drive innovation across all technology domains.
=======
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation journey.
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
<<<<<<< HEAD
            </div>
=======
            </motion.div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </section>

        {/* Service Categories */}
<<<<<<< HEAD
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to meet all your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Services:</h4>
                      <ul className="space-y-1">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={category.link}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to meet your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={category.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Case Studies
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/consulting"
                  className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Free Consultation
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}