import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const innovationCategories = [
  {
    icon: '🧠',
    title: 'AI Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    color: 'from-violet-500 to-purple-600',
    count: '5+ Services'
  },
  {
    icon: '⚛️',
    title: 'Quantum Tech',
    description: 'Quantum computing, DNA computing, and quantum internet infrastructure',
    color: 'from-indigo-500 to-blue-600',
    count: '6+ Services'
  },
  {
    icon: '🌌',
    title: 'Space & Metaverse',
    description: 'Space mining automation and metaverse development platforms',
    color: 'from-teal-500 to-emerald-600',
    count: '4+ Services'
  },
  {
    icon: '🏙️',
    title: 'Enterprise IT',
    description: 'Autonomous DevOps and zero-trust security solutions',
    color: 'from-blue-500 to-cyan-600',
    count: '5+ Services'
  },
  {
    icon: '🧬',
    title: 'Biotech & Neural',
    description: 'Synthetic biology automation and neural interface platforms',
    color: 'from-green-500 to-emerald-600',
    count: '3+ Services'
  },
  {
    icon: '🤖',
    title: 'Robotics & Automation',
    description: 'Swarm robotics orchestration and autonomous systems',
    color: 'from-orange-500 to-red-600',
    count: '2+ Services'
  }
];

const features = [
  {
    icon: '🚀',
    title: 'First-to-Market',
    description: 'We&apos;re the first to bring many of these revolutionary technologies to market, giving you a competitive advantage.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: '🧠',
    title: 'AI-First Approach',
    description: 'Every service is built with AI at its core, ensuring maximum efficiency and intelligence.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Our platforms are designed for speed and performance, handling the most demanding workloads.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    description: 'Military-grade security protocols ensure your data and operations are always protected.',
    color: 'from-green-500 to-emerald-600'
  }
];

export default function Innovations2034Page() {
  return (
    <>
      <Head>
        <title>2034 Cutting-Edge Innovations | Zion Tech Group</title>
        <meta property="og:title" content="2034 Cutting-Edge Innovations | Zion Tech Group" />
        <meta property="og:description" content="Experience the future with our revolutionary 2034 micro SAAS services, IT solutions, and AI platforms." />
        <meta property="og:url" content="https://ziontechgroup.com/2034-innovations" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                <span className="text-3xl md:text-5xl">2034</span>
                <br />
                <span className="text-5xl md:text-7xl">Cutting-Edge</span>
                <br />
                <span className="text-6xl md:text-8xl">Innovations</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                Experience the future with our revolutionary micro SAAS services, IT solutions, and AI platforms. From AI consciousness to space mining automation, we&apos;re building tomorrow&apos;s technology today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Innovations
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Innovation Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Innovation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2034 innovations span across multiple cutting-edge technology domains, each designed to revolutionize industries and accelerate human progress.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="text-purple-400 font-semibold">{category.count}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We&apos;re not just another technology company. We&apos;re pioneers building the future, one breakthrough innovation at a time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the ranks of forward-thinking organizations that are already leveraging our 2034 innovations to transform their industries and accelerate their growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}