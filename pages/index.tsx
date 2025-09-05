import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Enterprise Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

const services = [
  {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="text-blue-400">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We deliver cutting-edge AI services, IT solutions, and micro SaaS products that drive growth, efficiency, and innovation for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
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
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}