import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
import Layout from '../components/Layout';

const stats = [
  { number: '100+', label: 'AI & Technology Solutions' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Countries Served' }
];

const services = [
  {
    title: 'AI Services',
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
  }
];

export default function HomePage() {
  return (
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
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
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
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

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
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
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
      </div>
    </Layout>
  );
}