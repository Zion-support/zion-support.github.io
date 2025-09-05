import React from 'react';
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
    <MainLayout
      title="Our Services - Zion Tech Group"
      description="Discover our comprehensive range of technology services including AI solutions, cloud services, cybersecurity, and custom development. Transform your business with our expertise."
      keywords="AI services, cloud solutions, cybersecurity, custom development, IT services, technology consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>
          </div>
        </section>

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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

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
          </div>
        </section>

        {/* CTA Section */}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
      </div>
    </>
  );
}