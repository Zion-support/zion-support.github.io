import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
=======
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  BarChart3
=======
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Code, 
  Cloud, 
  Shield, 
  Brain, 
  Server, 
  Database, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Globe
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
} from 'lucide-react';

const services = [
  {
<<<<<<< HEAD
    title: 'AI Services',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
    icon: Brain,
    href: '/ai-services',
    features: [
      'Machine Learning Solutions',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Chatbots',
      'Process Automation'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and digital transformation services for modern businesses.',
    icon: Shield,
    href: '/it-services',
    features: [
      'Infrastructure Setup',
      'Cloud Migration',
      'Security Solutions',
      'Network Management',
      'System Integration',
      'Technical Support'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Micro SaaS',
    description: 'Custom micro software-as-a-service solutions designed for specific business needs.',
    icon: Cloud,
    href: '/micro-saas',
    features: [
      'Custom Web Applications',
      'API Development',
      'Database Design',
      'User Management',
      'Payment Integration',
      'Scalable Architecture'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We understand your business needs, challenges, and goals through detailed consultation.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'We create a comprehensive strategy and roadmap tailored to your specific requirements.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our expert team builds and implements the solution using cutting-edge technologies.'
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'We deploy the solution and ensure everything works seamlessly in your environment.'
  },
  {
    step: '05',
    title: 'Support',
    description: 'We provide ongoing support and maintenance to keep your systems running optimally.'
  }
];

const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Uptime Guarantee', value: '99.9%' },
  { label: 'Support Response', value: '< 1hr' }
];
<<<<<<< HEAD
=======
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import {
  Brain,
  Cloud,
  Database,
  Shield,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Cpu,
  Settings
} from 'lucide-react';
<<<<<<< HEAD

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions and machine learning models',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting',
        'Model deployment & scaling'
      ],
      href: '/ai-services',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure for your business',
      icon: Cloud,
      features: [
        'Cloud migration & strategy',
        'Multi-cloud architecture',
        'Serverless computing',
        'Container orchestration',
        'Cloud security & compliance',
        '24/7 monitoring & support'
      ],
      href: '/cloud-solutions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Comprehensive IT solutions to keep your business running smoothly',
      icon: Cpu,
      features: [
        'Network infrastructure',
        'System administration',
        'IT support & maintenance',
        'Security implementation',
        'Backup & disaster recovery',
        'Technology consulting'
      ],
      href: '/it-services',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'database-solutions',
      title: 'Database Solutions',
      description: 'Optimize your data management with our database expertise',
      icon: Database,
      features: [
        'Database design & optimization',
        'Data migration services',
        'Performance tuning',
        'Backup & recovery solutions',
        'Data warehousing',
        'Real-time analytics'
      ],
      href: '/database-solutions',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions',
      icon: Shield,
      features: [
        'Security assessment & auditing',
        'Threat detection & response',
        'Identity & access management',
        'Compliance & governance',
        'Security training',
        'Incident response planning'
      ],
      href: '/security',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business needs',
      icon: Code,
      features: [
        'Web application development',
        'Mobile app development',
        'API development & integration',
        'Legacy system modernization',
        'Microservices architecture',
        'Quality assurance & testing'
      ],
      href: '/custom-development',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const serviceCategories = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive solutions for large organizations',
      services: ['AI Strategy', 'Cloud Migration', 'Digital Transformation', 'Security Consulting'],
      href: '/enterprise-solutions'
    },
    {
      title: 'Startup Solutions',
      description: 'Scalable solutions for growing businesses',
      services: ['MVP Development', 'Cloud Infrastructure', 'AI Integration', 'Growth Consulting'],
      href: '/startup-solutions'
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for different industries',
      services: ['Healthcare', 'Finance', 'E-commerce', 'Manufacturing'],
      href: '/industries'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436

export default function ServicesPage() {
=======
    title: 'Micro SaaS Solutions',
    description: 'Build and scale your software-as-a-service business with our comprehensive micro SaaS platform.',
    icon: Code,
    features: ['Rapid Development', 'Scalable Architecture', 'Multi-tenant Support', 'API Integration'],
    pricing: 'Starting at $2,999/month'
  },
  {
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure solutions including cloud migration, security, and maintenance.',
    icon: Server,
    features: ['Cloud Migration', 'Security Hardening', '24/7 Monitoring', 'Disaster Recovery'],
    pricing: 'Starting at $1,999/month'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage artificial intelligence to automate processes and gain valuable insights from your data.',
=======
import Link from 'next/link';
import { Brain, Network, Zap, Shield, Users, Globe, Award, Star, TrendingUp, Clock, DollarSign, BarChart3, Settings, Code, Database, Server, MessageSquare, FileText, Mic, Search, Calendar, Package, ClipboardList, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
    icon: Brain,
    features: ['Custom AI Models', 'Data Analytics', 'Process Automation', 'Predictive Insights'],
    pricing: 'Starting at $3,999/month'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive cybersecurity solutions and compliance support.',
    icon: Shield,
    features: ['Threat Detection', 'Compliance Auditing', 'Security Training', 'Incident Response'],
    pricing: 'Starting at $2,499/month'
  },
  {
    title: 'Cloud Services',
    description: 'Optimize your cloud infrastructure with our expert cloud management and optimization services.',
    icon: Cloud,
    features: ['Cloud Strategy', 'Cost Optimization', 'Performance Tuning', 'Migration Support'],
    pricing: 'Starting at $1,499/month'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and reporting solutions.',
    icon: Database,
    features: ['Data Visualization', 'Real-time Dashboards', 'Custom Reports', 'Predictive Analytics'],
    pricing: 'Starting at $1,799/month'
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Proven Expertise',
    description: 'Over 500 successful projects completed across various industries'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 support from our team of experienced professionals'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with local expertise and support'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: '99% client satisfaction rate with rigorous quality standards'
  }
];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import {
  Brain,
  Cloud,
  Database,
  Shield,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Cpu
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions and machine learning models',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting',
        'Model deployment & scaling'
      ],
      href: '/ai-services',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure for your business',
      icon: Cloud,
      features: [
        'Cloud migration & strategy',
        'Multi-cloud architecture',
        'Serverless computing',
        'Container orchestration',
        'Cloud security & compliance',
        '24/7 monitoring & support'
      ],
      href: '/cloud-solutions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Comprehensive IT solutions to keep your business running smoothly',
      icon: Cpu,
      features: [
        'Network infrastructure',
        'System administration',
        'IT support & maintenance',
        'Security implementation',
        'Backup & disaster recovery',
        'Technology consulting'
      ],
      href: '/it-services',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'database-solutions',
      title: 'Database Solutions',
      description: 'Optimize your data management with our database expertise',
      icon: Database,
      features: [
        'Database design & optimization',
        'Data migration services',
        'Performance tuning',
        'Backup & recovery solutions',
        'Data warehousing',
        'Real-time analytics'
      ],
      href: '/database-solutions',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions',
      icon: Shield,
      features: [
        'Security assessment & auditing',
        'Threat detection & response',
        'Identity & access management',
        'Compliance & governance',
        'Security training',
        'Incident response planning'
      ],
      href: '/security',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business needs',
      icon: Code,
      features: [
        'Web application development',
        'Mobile app development',
        'API development & integration',
        'Legacy system modernization',
        'Microservices architecture',
        'Quality assurance & testing'
      ],
      href: '/custom-development',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const serviceCategories = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive solutions for large organizations',
      services: ['AI Strategy', 'Cloud Migration', 'Digital Transformation', 'Security Consulting'],
      href: '/enterprise-solutions'
    },
    {
      title: 'Startup Solutions',
      description: 'Scalable solutions for growing businesses',
      services: ['MVP Development', 'Cloud Infrastructure', 'AI Integration', 'Growth Consulting'],
      href: '/startup-solutions'
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for different industries',
      services: ['Healthcare', 'Finance', 'E-commerce', 'Manufacturing'],
      href: '/industries'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb

export default function Services() {
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Explore our comprehensive technology services including AI solutions, IT services, and Micro SaaS development. Transform your business today." />
        <meta name="keywords" content="AI services, IT services, Micro SaaS, technology solutions, digital transformation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-white font-semibold">Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
            </div>
=======
      <div className="min-h-screen bg-gray-50">
=======
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From AI development to cloud solutions, we provide end-to-end technology services 
              that drive business growth and digital transformation.
            </p>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
    <MainLayout
      title="Our Services - Zion Tech Group"
      description="Discover our comprehensive range of technology services including AI solutions, cloud services, cybersecurity, and custom development. Transform your business with our expertise."
      keywords="AI services, cloud solutions, cybersecurity, custom development, IT services, technology consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
<<<<<<< HEAD
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions to transform your business and drive growth. 
                From AI and cloud services to cybersecurity and custom development.
              </p>
=======
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and drive digital transformation.
              </p>
=======
        <meta name="description" content="Comprehensive technology services including micro SaaS, IT infrastructure, AI solutions, and cybersecurity." />
      </Head>

      <div className="min-h-screen bg-gray-50">
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
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
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
=======
<<<<<<< HEAD
        {/* Services Grid */}
<<<<<<< HEAD
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
=======
        <section className="py-20 bg-white">
=======
<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
=======
<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-20 bg-white">
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold mb-4">
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
=======
                  <div className="text-gray-600 font-medium">{stat.label}</div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Process Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery
              </p>
            </motion.div>
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
=======
        {/* Benefits Section */}
=======
=======
        {/* Benefits Section */}
=======
<<<<<<< HEAD
        {/* Benefits Section */}
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and understand your business goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Planning</h3>
              <p className="text-gray-600">We create a detailed project plan with timelines and milestones.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Development</h3>
              <p className="text-gray-600">We build your solution using cutting-edge technologies and best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Deployment</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Contact Us Today
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
        {/* Main Services */}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-6 ${service.bgColor}`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-white ${service.iconColor}`}>
                          <service.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 ml-4">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right solution category for your business size and industry needs.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={category.href}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                      Explore Category
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
                </motion.div>
              ))}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Certified professionals with years of experience'
                  },
                  {
                    icon: Zap,
                    title: 'Fast Delivery',
                    description: 'Agile development with rapid deployment'
                  },
                  {
                    icon: Shield,
                    title: 'Secure & Reliable',
                    description: 'Enterprise-grade security and 99.9% uptime'
                  },
                  {
                    icon: Globe,
                    title: 'Global Support',
                    description: '24/7 support across multiple time zones'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
=======
<<<<<<< HEAD
        {/* Stats Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
=======
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss your project and find the perfect solution for your business needs
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@ziontechgroup.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help you achieve your business goals. 
                Get a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Learn More About Us
                </Link>
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Code, Database, Smartphone, Server, Lock, BarChart3 } from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    category: "AI Services",
    icon: Brain,
    color: "blue",
    description: "80+ cutting-edge AI solutions",
    services: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Computer Vision & Image Recognition",
      "Predictive Analytics",
      "AI Chatbots & Virtual Assistants",
      "Quantum AI Solutions"
    ],
    href: "/ai-services"
  },
  {
    category: "IT Services",
    icon: Network,
    color: "green",
    description: "70+ comprehensive IT solutions",
    services: [
      "Cloud Infrastructure & Migration",
      "Cybersecurity & Zero-Trust Architecture",
      "DevOps & CI/CD Implementation",
      "System Integration & Modernization",
      "IT Consulting & Strategy",
      "Quantum Computing Solutions"
    ],
    href: "/it-services"
  },
  {
    category: "Micro SaaS",
    icon: Cloud,
    color: "purple",
    description: "85+ innovative micro SaaS platforms",
    services: [
      "Custom SaaS Development",
      "API Development & Integration",
      "Multi-tenant Architecture",
      "Subscription Management",
      "Real-time Analytics",
      "Scalable Cloud Solutions"
    ],
    href: "/micro-saas"
  }
];

const additionalServices = [
  {
    title: "Web Development",
    icon: Code,
    description: "Modern, responsive web applications built with cutting-edge technologies"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps for iOS and Android"
  },
  {
    title: "Database Solutions",
    icon: Database,
    description: "Scalable database design, optimization, and migration services"
  },
  {
    title: "Cloud Services",
    icon: Server,
    description: "Complete cloud infrastructure setup, management, and optimization"
  },
  {
    title: "Security Services",
    icon: Lock,
    description: "Comprehensive cybersecurity solutions and compliance management"
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    description: "Business intelligence and data analytics solutions"
  }
];

export default function ServicesPage() {
  return (
    <Layout
      title="Our Services - AI, IT & Micro SaaS Solutions"
      description="Explore our comprehensive range of AI services, IT solutions, and micro SaaS platforms. 235+ services designed to transform your business."
      keywords="AI services, IT services, micro SaaS, web development, mobile apps, cloud solutions, cybersecurity"
      ogTitle="Our Services - Zion Tech Group"
      ogDescription="Discover our 235+ technology services designed to accelerate your digital transformation."
      ogUrl="https://ziontechgroup.com/services"
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              235+ Technology Solutions
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From AI-powered solutions to comprehensive IT services and innovative micro SaaS platforms, 
              we provide everything you need to transform your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three comprehensive categories covering all aspects of modern technology needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-${service.color}-100 p-3 rounded-lg mr-4`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.category}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700 font-semibold`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your core technology needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime guarantee"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "95+ certified professionals with 15+ years experience"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your needs and define project requirements"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop a comprehensive solution strategy and roadmap"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the solution with agile development methodology"
              },
              {
                step: "04",
                title: "Support",
                description: "Provide ongoing maintenance and optimization services"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can transform your business. 
            Get a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> 116b25af07b61a9d40e22653e4aa531d26ffec3e
=======
    </>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}