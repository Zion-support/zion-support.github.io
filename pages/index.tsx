import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Globe, 
  Award, 
  Brain, 
  Network, 
  Cloud, 
  Zap, 
  Shield
} from 'lucide-react';
=======
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Cpu, Star, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Enterprise Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
<<<<<<< HEAD
  { number: '24/7', label: 'Support Available' }
=======
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Countries Served' }
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
];

const services = [
  {
<<<<<<< HEAD
    icon: Brain,
    title: 'AI Services',
    description: 'Transform your business with cutting-edge artificial intelligence solutions.',
    href: '/ai-services'
  },
  {
    icon: Network,
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and support services for modern businesses.',
    href: '/it-services'
  },
  {
    icon: Cloud,
    title: 'Micro SaaS',
    description: 'Scalable software solutions designed for rapid growth and efficiency.',
    href: '/micro-saas'
=======
    title: 'AI Services',
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
  }
];

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times',
    icon: Zap
  },
  {
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
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
  }
];

const features = [
  '24/7 Expert Support',
  '99.9% Uptime Guarantee',
  'Scalable Solutions',
  'Enterprise Security',
  'Custom Development',
  'Cloud Migration'
];

export default function HomePage() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Zion Tech Group - AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS products. Expert technology solutions for modern enterprises." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
=======
    <Layout
      title="Zion Tech Group - Leading Technology Solutions"
      description="Transform your business with our comprehensive AI services, IT solutions, and micro SAAS platforms. Expert technology solutions for modern businesses."
      keywords="AI services, IT solutions, micro SAAS, technology, innovation, business transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="text-blue-400">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We deliver cutting-edge AI services, IT solutions, and micro SaaS products that drive growth, efficiency, and innovation for modern enterprises.
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI & Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading provider of innovative AI services, IT solutions, and micro SAAS platforms. 
                Empowering businesses to thrive in the digital age.
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
=======
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors"
                >
                  <div className="p-4 bg-blue-500 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
=======
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
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
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine deep technical expertise with a passion for innovation to deliver solutions that truly transform businesses.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="p-4 bg-green-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-300 text-sm">500+ successful projects delivered</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="p-4 bg-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300 text-sm">50+ skilled professionals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="p-4 bg-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300 text-sm">Serving clients worldwide</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="p-4 bg-blue-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Secure & Reliable</h3>
                  <p className="text-gray-300 text-sm">99.9% uptime guarantee</p>
                </div>
=======
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
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

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
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
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their technology needs.
=======
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals and drive growth.
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
=======
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
}