import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Cpu, Star, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout
      title="Zion Tech Group - AI-Powered IT Solutions"
      description="Leading provider of AI-powered IT services, micro SaaS solutions, and cutting-edge technology consulting. Transform your business with our innovative approach."
      keywords="AI services, IT consulting, micro SaaS, technology solutions, artificial intelligence, business automation"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-6xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                Transform Your Business with{' '}
                <span className="text-blue-600">AI-Powered</span> Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Leading provider of cutting-edge AI services, IT solutions, and micro SaaS platforms. 
                We help businesses leverage technology to achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive technology solutions designed to drive your business forward.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    title: 'AI Services',
                    description: '100+ cutting-edge AI solutions including machine learning, natural language processing, and computer vision.',
                    features: ['Machine Learning', 'NLP & Chatbots', 'Computer Vision', 'Predictive Analytics'],
                    href: '/ai-services'
                  },
                  {
                    icon: Network,
                    title: 'IT Services',
                    description: '85+ comprehensive IT services covering cloud infrastructure, cybersecurity, and system integration.',
                    features: ['Cloud Migration', 'Cybersecurity', 'System Integration', 'DevOps'],
                    href: '/it-services'
                  },
                  {
                    icon: Cloud,
                    title: 'Micro SaaS',
                    description: '120+ innovative micro SaaS solutions for modern businesses seeking scalable, cost-effective tools.',
                    features: ['Business Tools', 'Productivity Apps', 'Analytics Platforms', 'Automation Tools'],
                    href: '/micro-saas'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
                <p className="text-xl text-gray-600">
                  We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Award, title: 'Expert Team', description: 'Certified professionals with 10+ years experience' },
                  { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security and 99.9% uptime' },
                  { icon: Zap, title: 'Fast Delivery', description: 'Rapid deployment and quick time-to-market' },
                  { icon: Globe, title: 'Global Reach', description: 'Serving clients worldwide with local support' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how we can help transform your business with AI and technology.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center text-white">
                    <Phone className="w-6 h-6 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Mail className="w-6 h-6 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6 mr-2" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;