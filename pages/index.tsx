import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Zap,
  Shield,
  CheckCircle,
  Users,
  Globe,
  Award,
  Building,
  Rocket,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Settings,
  BarChart3,
  Cpu,
  Car,
  MessageSquare,
  Phone,
  FileText,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Lock,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Handshake
} from 'lucide-react';
=======
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
import Layout from '../components/Layout';
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

const stats = [
  { number: '500+', label: 'Projects Completed', icon: CheckCircle },
  { number: '200+', label: 'Happy Clients', icon: Users },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '99%', label: 'Client Satisfaction', icon: Star }
];

const services = [
  {
<<<<<<< HEAD
=======
    title: 'AI Services',
<<<<<<< HEAD
    description: 'Cutting-edge artificial intelligence solutions',
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
    icon: Brain,
    title: 'AI Services',
    description: 'Transform your business with cutting-edge artificial intelligence solutions.',
    href: '/ai-services',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
<<<<<<< HEAD
=======
    title: 'IT Services',
    description: 'Comprehensive IT solutions and support',
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
    icon: Network,
    title: 'IT Services',
    description: 'Comprehensive IT solutions to keep your business running smoothly.',
    href: '/it-services',
    features: ['Infrastructure Management', 'Cloud Migration', 'Cybersecurity', 'Technical Support']
  },
  {
    icon: Cloud,
<<<<<<< HEAD
    title: 'Micro SaaS',
    description: 'Scalable software solutions designed for modern businesses.',
    href: '/micro-saas',
    features: ['Custom Development', 'API Integration', 'Scalable Architecture', '24/7 Support']
  }
];

const solutions = [
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with innovative technology solutions.',
    href: '/solutions/digital-transformation'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security solutions and best practices.',
    href: '/solutions/cybersecurity'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with powerful analytics tools.',
    href: '/solutions/data-analytics'
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Connect and manage your devices with intelligent IoT platforms.',
    href: '/solutions/iot'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, href: '/industries/healthcare' },
  { name: 'Finance', icon: DollarSign, href: '/industries/finance' },
  { name: 'Education', icon: BookOpen, href: '/industries/education' },
  { name: 'Manufacturing', icon: Settings, href: '/industries/manufacturing' },
  { name: 'Retail', icon: ShoppingCart, href: '/industries/retail' },
  { name: 'Government', icon: Building, href: '/industries/government' }
=======
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600'
  }
];

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times',
    icon: Zap
  },
  {
=======
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
=======
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
<<<<<<< HEAD
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Countries Served' }
=======
  { number: '2,500+', label: 'Projects Completed' },
  { number: '305+', label: 'Services & Solutions' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
];

const services = [
  {
<<<<<<< HEAD
    title: 'AI Services',
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    description: '20+ cutting-edge AI solutions including machine learning, computer vision, NLP, and quantum AI',
    icon: Brain,
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600',
    stats: '20+ AI Solutions',
    pricing: 'Starting at $1,800/month'
  },
  {
    title: 'IT Services',
    description: '25+ comprehensive IT services from cloud infrastructure to quantum computing and 6G networks',
    icon: Network,
    link: '/it-services',
    color: 'from-green-500 to-blue-600',
    stats: '25+ IT Services',
    pricing: 'Starting at $1,999/month'
  },
  {
    title: 'Micro SAAS',
    description: '30+ innovative micro SaaS solutions for modern businesses across all industries',
    icon: Cloud,
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600',
    stats: '30+ SaaS Solutions',
    pricing: 'Starting at $15/month'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration services, and DevOps automation',
    icon: Globe,
    link: '/cloud-solutions',
    color: 'from-indigo-500 to-cyan-600',
    stats: 'Multi-Cloud Support',
    pricing: 'Starting at $1,800/month'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions with AI-powered threat detection and zero-trust architecture',
    icon: Shield,
    link: '/cybersecurity',
    color: 'from-red-500 to-orange-600',
    stats: '24/7 Protection',
    pricing: 'Starting at $2,000/month'
  },
  {
    title: 'Quantum Computing',
    description: 'Next-generation quantum computing infrastructure and quantum AI solutions',
    icon: Cpu,
    link: '/quantum-computing',
    color: 'from-violet-500 to-purple-600',
    stats: 'Future Technology',
    pricing: 'Starting at $19,999/month'
=======
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions for automation, analytics, and intelligent decision-making.',
    icon: Brain,
    price: 'Starting at $3,500/month',
    features: ['Custom ML Models', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions'],
    timeline: '4-8 weeks',
    benefits: ['80% efficiency gain', 'Real-time insights', 'Automated processes'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions with enterprise-grade security and performance.',
    icon: Cloud,
    price: 'Starting at $2,000/month',
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
    timeline: '2-4 weeks',
    benefits: ['99.9% uptime', '50% cost reduction', 'Global scalability'],
    marketPrice: '$3,000-8,000/month'
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Specialized software solutions tailored for specific business needs.',
    icon: Network,
    price: 'Starting at $1,500/month',
    features: ['Custom Development', 'API Integration', 'Multi-tenant', 'Analytics'],
    timeline: '3-6 weeks',
    benefits: ['Faster deployment', 'Lower maintenance', 'Focused features'],
    marketPrice: '$2,500-6,000/month'
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
];

const features = [
  {
<<<<<<< HEAD
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times',
    icon: Zap
  },
  {
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee',
    icon: Shield
  },
  {
    title: 'Global Reach',
    description: 'Serving clients worldwide with local support',
    icon: Globe
  },
  {
    title: 'Award Winning',
    description: 'Recognized for excellence in technology innovation',
    icon: Award
=======
    name: 'Artificial Intelligence',
    description: 'Advanced AI and ML technologies',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cloud Computing',
    description: 'Scalable cloud infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Cybersecurity',
    description: 'Enterprise-grade security',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Automation',
    description: 'Process automation solutions',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
];

<<<<<<< HEAD
export default function HomePage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <MainLayout
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services."
      keywords="technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We deliver cutting-edge AI, IT services, and micro SaaS solutions that drive innovation and growth for businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    <Layout
      title="Zion Tech Group - Leading Technology Solutions"
      description="Transform your business with our comprehensive AI services, IT solutions, and micro SAAS platforms. Expert technology solutions for modern businesses."
      keywords="AI services, IT solutions, micro SAAS, technology, innovation, business transformation"
    >
      <div className="min-h-screen bg-gray-50">
=======
const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    role: 'CTO',
    content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 75%.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'StartupXYZ',
    role: 'CEO',
    content: 'Outstanding service and support. They delivered our micro SaaS solution ahead of schedule and under budget.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'Global Solutions',
    role: 'VP Technology',
    content: 'Their cloud migration services were seamless. We achieved 99.9% uptime from day one.',
    rating: 5
  }
];

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, and micro SaaS applications. Transform your business with cutting-edge technology." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-4 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-8 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
=======
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
          </div>
<<<<<<< HEAD
          
=======

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI & Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading provider of innovative AI services, IT solutions, and micro SAAS platforms. 
                Empowering businesses to thrive in the digital age.
=======
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                Leading provider of <span className="text-blue-400 font-semibold">AI services</span>, 
                <span className="text-purple-400 font-semibold"> IT solutions</span>, and 
                <span className="text-cyan-400 font-semibold"> micro SaaS applications</span>. 
                Transform your business with cutting-edge technology.
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
<<<<<<< HEAD
                  className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-sm md:text-base"
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI & Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading provider of innovative AI services, IT solutions, and micro SAAS platforms. 
                Empowering businesses to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                >
                  View Services
                </Link>
<<<<<<< HEAD
=======
              </div>
              
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
=======
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className="text-center p-4"
=======
                  className="text-center"
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
                  className="text-center"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
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

        {/* Services Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-16 md:py-20 bg-gray-50">
=======
        <section className="py-20 bg-gray-50">
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
        <section className="py-20 bg-gray-50">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-center mb-12 md:mb-16"
=======
              className="text-center mb-16"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
<<<<<<< HEAD
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                Comprehensive technology solutions designed to accelerate your business growth and innovation.
=======
        {/* Featured Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your digital transformation
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 group"
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm md:text-base"
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {service.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">(4.9/5)</span>
                    </div>
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300"
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
=======
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="text-xs text-green-600 font-medium">
                        Market Average: {service.marketPrice}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Timeline: {service.timeline}</span>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2" />
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                  </Link>
<<<<<<< HEAD
                </motion.div>
              ))}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions designed to meet the unique needs of modern businesses.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of technology solutions designed to solve complex business challenges.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <Link href={solution.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience across various industries, delivering tailored solutions that drive results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <Link href={industry.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
=======
        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Technologies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Contact Information Section */}
        <section className="py-20 bg-gray-100">
=======
        {/* Features Section */}
        <section className="py-20 bg-white">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
<<<<<<< HEAD
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch With Our Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business? Contact our team of experts for a free consultation and personalized solution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                  +1 302 464 0950
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 mb-4">Visit our headquarters</p>
                <p className="text-gray-700 font-medium">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </motion.div>
=======
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white mb-2">Ready to join them?</div>
                  <div className="text-gray-300">Get your free consultation today</div>
                </div>
              </div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
              animate={{ opacity: 1, y: 0 }}
=======
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals and drive growth.
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our expert team help you leverage cutting-edge technology to drive growth and innovation.
                <br className="hidden md:block" />
                <span className="text-blue-200 font-semibold">Get your free consultation today!</span>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn More About Us
                </Link>
=======
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  );
}