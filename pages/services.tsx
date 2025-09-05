<<<<<<< HEAD
import React from 'react';
=======
import { motion } from 'framer-motion';
>>>>>>> main
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { Brain, Network, Cloud, CheckCircle, Star, Zap, Shield } from 'lucide-react';

=======
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Zap, Shield } from 'lucide-react';
=======
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
<<<<<<< HEAD
=======
  Target,
  TrendingUp,
  Globe,
  Database,
  Lock,
>>>>>>> main
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
<<<<<<< HEAD
=======
  Settings,
  Database,
>>>>>>> main
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
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
// Import our new service data
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';
import { real2025Q4AugmentedBatch } from '../data/real-2025-q4-augmented-batch';
import { real2029Q3Additions } from '../data/real-2029-q3-additions';
import { validatedServices2025Q4 } from '../data/real-validated-2025-q4-additions';
import { real2035Q2Additions } from '../data/real-2035-q2-additions';
import { real2036ServiceExpansions } from '../data/real-2036-service-expansions';
import { innovative2036MicroSaasServices } from '../data/innovative-2036-micro-saas-services';
import { innovative2036ITServices } from '../data/innovative-2036-it-services';
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';

// Import our new innovative services
import { innovative2037Services } from '../data/innovative-2037-services';
import { advanced2038Services } from '../data/advanced-2038-services';
import { revolutionary2039Services } from '../data/revolutionary-2039-services';

// Import our latest 2040 innovative services
import { innovative2040MicroSaasServices } from '../data/innovative-2040-micro-saas-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { innovative2040AIServices } from '../data/innovative-2040-ai-services';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Helper function to get service category
const getServiceCategory = (service: unknown) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: unknown) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: unknown) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: unknown) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

// Create unified services array
const allServices = [
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...emergingTechServices,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  ...industryRealServices,
  ...real2025Q4AugmentedBatch,
  ...real2029Q3Additions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  // Our new innovative services
  ...innovative2037Services,
  ...advanced2038Services,
  ...revolutionary2039Services,
  // Our latest 2040 innovative services
  ...innovative2040MicroSaasServices,
  ...innovative2040ITServices,
  ...innovative2040AIServices
];

const categories = [
=======
const services = [
>>>>>>> main
  {
    title: "AI Services",
<<<<<<< HEAD
    description: "Cutting-edge artificial intelligence solutions including machine learning, natural language processing, computer vision, and autonomous systems.",
    icon: Brain,
<<<<<<< HEAD
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
=======
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Fraud Detection", "Voice AI", "Content Generation", "Autonomous Systems", "Quantum Computing", "Neural Interfaces"],
    pricing: "Starting at $1,000/month",
    count: "40+ Services",
>>>>>>> main
    popular: true
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology services including cloud infrastructure, cybersecurity, edge computing, and digital transformation.",
    icon: Network,
<<<<<<< HEAD
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
=======
    href: "/it-services",
    features: ["Cloud Infrastructure", "Cybersecurity", "System Administration", "Network Management", "DevOps & CI/CD", "Data Center Migration", "Edge Computing", "5G Networks", "AI Infrastructure", "Blockchain"],
    pricing: "Starting at $120/hour",
    count: "35+ Services",
<<<<<<< HEAD
=======
=======
    description: "Cutting-edge artificial intelligence solutions to transform your business operations",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    pricing: "Starting at $2,000/month",
    count: "15+ Services",
>>>>>>> main
    popular: true
  },
  {
    title: "IT Services",
    description: "Comprehensive IT solutions for modern businesses",
    icon: Settings,
    href: "/it-services",
    features: ["Cloud Migration", "Cybersecurity", "System Integration", "IT Consulting"],
    pricing: "Starting at $150/hour",
    count: "20+ Services",
>>>>>>> main
>>>>>>> main
    popular: true
  },
  {
    title: "Micro SaaS",
<<<<<<< HEAD
    description: "Scalable software as a service solutions designed for specific business needs, rapid deployment, and innovative functionality.",
    icon: Cloud,
<<<<<<< HEAD
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
=======
    href: "/micro-saas",
    features: ["Custom Applications", "API Development", "Database Solutions", "Integration Services", "Workflow Automation", "Lead Management", "AI-Powered Tools", "Smart Contracts", "Content Moderation", "Energy Management"],
    pricing: "Starting at $29/month",
    count: "45+ Products",
=======
    description: "Specialized software solutions for specific business needs",
    icon: Package,
    href: "/micro-saas",
<<<<<<< HEAD
    features: ["AI-Powered Tools", "Blockchain Analytics", "Smart Energy Management", "Voice AI Assistants", "Predictive Maintenance", "Smart Contracts", "Green Technology", "Advanced Automation"],
    pricing: "Starting at $29/month",
    count: "45+ Products",
=======
    features: ["Custom Development", "API Integration", "Scalable Architecture", "24/7 Support"],
    pricing: "Starting at $99/month",
    count: "25+ Products",
>>>>>>> main
>>>>>>> main
>>>>>>> main
    popular: true
  }
];

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "50+ certified professionals with years of experience"
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "500+ successful projects delivered"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development with rapid deployment"
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description: "Round-the-clock technical support"
=======
const mainServices = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions to transform your business operations",
    icon: Brain,
    href: "/ai-services",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Chatbots",
      "Process Automation"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "IT Services",
    description: "Comprehensive information technology solutions for modern businesses",
    icon: Network,
    href: "/it-services",
    features: [
      "Cloud Migration",
      "Infrastructure Management",
      "Network Security",
      "System Integration",
      "IT Consulting",
      "24/7 Support"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions for specific business needs",
    icon: Cloud,
    href: "/micro-saas",
    features: [
      "Custom Applications",
      "API Development",
      "Data Management",
      "User Analytics",
      "Scalable Architecture",
      "Multi-tenant Solutions"
    ],
    color: "from-green-500 to-emerald-500"
>>>>>>> main
>>>>>>> main
  }
];

export default function ServicesPage() {
  return (
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI services, IT services, and Micro SaaS solutions. Expert team delivering innovative results." />
        <meta name="keywords" content="AI services, IT services, Micro SaaS, cloud solutions, technology consulting" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
          <motion.div,
    initial={{ opacity: 0, y: 30 }}
>>>>>>> main
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation.
              <br /><br />
              <span className="text-lg text-blue-300 font-semibold">
                📞 Call: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div,
    className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide end-to-end technology solutions tailored to your business needs. From AI-powered automation to robust IT infrastructure and scalable SaaS applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div,
    key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
=======
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions to transform your business
              </p>
>>>>>>> main
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
<<<<<<< HEAD
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
=======
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
>>>>>>> main
>>>>>>> main
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                  whileHover={{ y: -5 }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {service.count}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                  </div>

                  <Link,
    href={service.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
=======
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{service.pricing}</span>
                    <Link
                      href={service.href}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div,
    className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our expertise, proven track record, and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div,
    key={index}
=======
        {/* Stats Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
>>>>>>> main
                <motion.div
                  key={index}
>>>>>>> main
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
<<<<<<< HEAD
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
=======
<<<<<<< HEAD
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
          <motion.div,
    initial={{ opacity: 0, y: 30 }}
>>>>>>> main
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
>>>>>>> main
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

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
=======
>>>>>>> main
      </div>
    </Layout>
>>>>>>> main
  );
}
