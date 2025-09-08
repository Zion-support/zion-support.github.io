import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdvancedServicesShowcase2027() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Mock services data
  const mockServices = [
    {
      id: 'ai-automation',
      name: 'Advanced AI Automation Platform',
      category: 'AI & Automation',
      price: '$2,999/month',
      description: 'Next-generation AI automation for enterprise operations',
      features: ['Intelligent workflow automation', 'Predictive analytics', 'Natural language processing']
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      category: 'Quantum Technology',
      price: '$5,000/month',
      description: 'Quantum computing services for complex problem solving',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography']
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Infrastructure',
      category: 'Infrastructure',
      price: '$1,500/month',
      description: 'Distributed edge computing for IoT and real-time applications',
      features: ['Low latency processing', 'Real-time analytics', 'IoT integration']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Head>
        <title>2027 Advanced Services Showcase - Zion Tech Group | Next-Gen AI & Quantum Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's advanced 2027 services featuring cutting-edge AI automation, quantum computing, and emerging technology solutions." />
        <meta name="keywords" content="2027 services, AI automation, quantum computing, edge computing, emerging technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="2027 Advanced Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Next-generation AI, quantum computing, and emerging technology services for 2027" />
        <meta property="og:url" content="https://ziontechgroup.com/2027-advanced-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2027-advanced-services-showcase" />
      </Head>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            2027 Advanced Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of technology with our advanced AI automation, quantum computing, and emerging technology solutions.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-center hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}