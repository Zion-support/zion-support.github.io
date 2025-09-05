import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  Users,
  Zap,
  Shield
} from 'lucide-react';

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: '< 2 minutes',
    color: 'blue'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    color: 'green'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: '24/7',
    responseTime: '< 4 hours',
    color: 'purple'
  },
  {
    icon: HelpCircle,
    title: 'Help Center',
    description: 'Browse our comprehensive knowledge base',
    availability: '24/7',
    responseTime: 'Instant',
    color: 'orange'
  }
];

const faqCategories = [
  {
    name: 'Getting Started',
    icon: BookOpen,
    count: 12,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'Account & Billing',
    icon: Users,
    count: 8,
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Technical Issues',
    icon: Zap,
    count: 15,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'API & Integration',
    icon: FileText,
    count: 10,
    color: 'bg-orange-100 text-orange-800'
  }
];

const quickLinks = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: BookOpen,
    href: '/docs'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    icon: Video,
    href: '/tutorials'
  },
  {
    title: 'Status Page',
    description: 'Check system status and uptime',
    icon: Shield,
    href: '/status'
  },
  {
    title: 'Contact Sales',
    description: 'Speak with our sales team',
    icon: Users,
    href: '/contact'
  }
];

export default function Support() {
  return (
    <Layout 
      title="Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group's services. 24/7 support, documentation, and resources to help you succeed."
      keywords="support, help, documentation, contact, customer service, technical support, Zion Tech Group"
    >
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's services. 24/7 support, documentation, and resources to help you succeed." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                How Can We Help?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Get the support you need to succeed with our comprehensive 
                help resources and expert assistance.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-lg text-gray-600">
                Choose the support channel that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className={`w-12 h-12 bg-${channel.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <channel.icon className={`w-6 h-6 text-${channel.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Zap className="w-4 h-4 mr-2" />
                      {channel.responseTime}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Help Center
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.count} articles</p>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    Browse Articles
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-lg text-gray-600">
                Popular resources and tools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
                >
                  <div className="flex items-center mb-3">
                    <link.icon className="w-6 h-6 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{link.description}</p>
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-3 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Call +1 302 464 0950
              </a>
              <a href="mailto:support@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Email Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}