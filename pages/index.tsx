import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Network, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Users,
  Shield,
  Zap,
  BarChart3,
  Clock,
  Target
} from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Cpu, Star, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Countries Served' }
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
];

const services = [
  {
    title: 'AI Services',
<<<<<<< HEAD
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    href: '/ai-services',
    features: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'AI Strategy']
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions including cloud computing and cybersecurity',
    icon: Cloud,
    href: '/it-services',
    features: ['Cloud Migration', 'DevOps', 'Cybersecurity', 'Data Analytics']
  },
  {
    title: 'Micro SaaS',
    description: 'Custom software solutions designed for small and medium businesses',
    icon: Zap,
    href: '/micro-saas',
    features: ['SaaS Development', 'API Integration', 'User Management', 'Payment Processing']
  }
];

const benefits = [
  {
    icon: Target,
    title: 'Focused Solutions',
    description: 'Tailored technology solutions that address your specific business needs'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Rapid development and deployment to get you to market quickly'
  },
  {
=======
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
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance for all our solutions'
  },
  {
    icon: BarChart3,
    title: 'Proven Results',
    description: 'Track record of delivering measurable business value'
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'kleber@ziontechgroup.com',
    href: 'mailto:kleber@ziontechgroup.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 302 464 0950',
    href: 'tel:+13024640950'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '364 E Main St STE 1008, Middletown DE 19709',
    href: '#'
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - AI, IT, and Micro SaaS Solutions"
      description="Leading provider of AI, IT services, and Micro SaaS solutions. Transform your business with cutting-edge technology."
      keywords="AI services, IT services, Micro SaaS, technology solutions, business transformation"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with Technology
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We deliver cutting-edge AI, IT, and Micro SaaS solutions that drive growth, 
                efficiency, and innovation for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
<<<<<<< HEAD
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
=======
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
=======
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and innovation.
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
<<<<<<< HEAD
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 mb-4">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
=======
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
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
=======
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver technology solutions that drive real business value
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <benefit.icon className="w-12 h-12" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
=======
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
=======
        {/* Contact Information Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discuss your project and discover how we can help transform your business.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
=======
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Let's discuss how our innovative solutions can help you achieve your goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
      </div>
    </Layout>
  );
}