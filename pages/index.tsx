import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Cpu, Star, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Network, 
  Cloud, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Award,
  Cpu,
  Star,
=======
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Building, 
  TrendingUp,
  Cloud,
  Network,
  Shield,
  Zap,
  Globe,
  Code,
  Database,
  Settings,
  Brain,
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
<<<<<<< HEAD
>>>>>>> 957bdd045b2f6b572bc67ae198e0b79701b01c6c

const stats = [
=======

const stats = [
  { number: '100+', label: 'AI & Technology Solutions' },
  { number: '99.9%', label: 'Uptime Guarantee' },
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Enterprise Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

const services = [
  {
    title: 'AI Services',
<<<<<<< HEAD
    description: 'Cutting-edge artificial intelligence solutions for your business',
    icon: Brain,
    href: '/ai-services'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and support services',
    icon: Cpu,
    href: '/it-services'
  },
  {
    title: 'Micro SaaS',
    description: 'Scalable software solutions for growing businesses',
    icon: Cloud,
    href: '/micro-saas'
=======
    description: '35+ cutting-edge AI solutions including machine learning, computer vision, NLP, and quantum AI',
    icon: Brain,
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600',
    count: '35+ Services',
    popular: true
  },
  {
    title: 'IT Services',
    description: '25+ comprehensive IT solutions including cloud, cybersecurity, DevOps, and infrastructure',
    icon: Network,
    link: '/it-services',
    color: 'from-green-500 to-blue-600',
    count: '25+ Services',
    popular: true
  },
  {
    title: 'Micro SAAS',
    description: '40+ innovative micro software solutions for productivity, marketing, and business automation',
    icon: Cloud,
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600',
    count: '40+ Solutions',
    popular: true
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  }
];

const features = [
<<<<<<< HEAD
  '24/7 Expert Support',
  'Enterprise-Grade Security',
  'Scalable Solutions',
  'Cutting-Edge Technology'
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of AI, IT, and Micro SaaS solutions for modern businesses. Transform your operations with our cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Transform Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  AI & Technology
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Leading provider of AI, IT, and Micro SaaS solutions that drive innovation and growth for modern businesses.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
=======
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security protocols and compliance standards"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance and rapid deployment"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide infrastructure and 24/7 support"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions for your specific needs"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Powerful insights from your business data"
  },
  {
    icon: Settings,
    title: "Easy Integration",
    description: "Seamless integration with existing systems"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "ZionTech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, StartupXYZ",
    content: "The micro SaaS solutions are game-changing. We launched our product 6 months ahead of schedule.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "VP Operations, GlobalCorp",
    content: "Outstanding support and innovative solutions. They truly understand enterprise needs.",
    rating: 5
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100+ AI & Technology Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading provider of 100+ innovative AI services, IT solutions, and micro SAAS platforms. 
                From quantum computing to smart automation - we deliver cutting-edge technology that drives real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Explore Services
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
=======
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="text-blue-600 mb-4">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
=======
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    {service.popular && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-sm text-blue-600 font-semibold mb-6">{service.count}</div>
                  <Link
                    href={service.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
=======
        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ZionTech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through innovation, expertise, and unwavering commitment to your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
<<<<<<< HEAD
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature}
                  </h3>
                </motion.div>
              ))}
=======
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by industry leaders worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Innovation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most cutting-edge solutions that are transforming industries worldwide.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quantum AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">Revolutionary quantum-enhanced AI for complex optimization and advanced computational tasks.</p>
                <div className="text-sm text-purple-600 font-semibold">Starting at $5,500/month</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quantum-Safe Cybersecurity</h3>
                <p className="text-gray-600 mb-4">Future-proof security solutions with quantum-resistant encryption and advanced threat protection.</p>
                <div className="text-sm text-green-600 font-semibold">Starting at $4,999/month</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered DevOps Pipeline</h3>
                <p className="text-gray-600 mb-4">Intelligent DevOps automation with AI-driven deployment, testing, and monitoring capabilities.</p>
                <div className="text-sm text-blue-600 font-semibold">Starting at $3,500/month</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Task Automation Platform</h3>
                <p className="text-gray-600 mb-4">AI-powered workflow automation with intelligent task routing and optimization.</p>
                <div className="text-sm text-orange-600 font-semibold">Starting at $55/month</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Computer Vision Solutions</h3>
                <p className="text-gray-600 mb-4">Advanced image and video analysis for object detection, recognition, and automated inspection.</p>
                <div className="text-sm text-teal-600 font-semibold">Starting at $2,800/month</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Voice & Speech Technology</h3>
                <p className="text-gray-600 mb-4">Advanced voice AI solutions including speech recognition, synthesis, and conversational interfaces.</p>
                <div className="text-sm text-indigo-600 font-semibold">Starting at $2,600/month</div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold inline-flex items-center"
              >
                View All 100+ Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI, IT, and Micro SaaS solutions can drive your success
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with 100+ AI & Technology Solutions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative AI services, IT solutions, and micro SAAS platforms can help you achieve your goals and drive growth.
              </p>
              <div className="mb-8 bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-200">📞 Phone</div>
                    <div>+1 302 464 0950</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-200">📧 Email</div>
                    <div>kleber@ziontechgroup.com</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-200">📍 Address</div>
                    <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  );
}
