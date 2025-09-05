import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  ArrowRight,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  FileText,
  Video,
  Users,
  Zap,
  Globe,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const supportChannels = [
  {
    name: 'Email Support',
    description: 'Get help via email within 24 hours',
    icon: Mail,
    contact: 'kleber@ziontechgroup.com',
    responseTime: '24 hours',
    color: 'from-blue-600 to-purple-600'
  },
  {
    name: 'Live Chat',
    description: 'Chat with our support team in real-time',
    icon: MessageCircle,
    contact: 'Available 9 AM - 6 PM EST',
    responseTime: 'Immediate',
    color: 'from-green-600 to-blue-600'
  },
  {
    name: 'Phone Support',
    description: 'Speak directly with our support team',
    icon: Phone,
    contact: '+1 (555) 123-4567',
    responseTime: 'Immediate',
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Video Call',
    description: 'Schedule a video call for complex issues',
    icon: Video,
    contact: 'Schedule via email',
    responseTime: '24 hours',
    color: 'from-orange-600 to-red-600'
  }
];

const faqItems = [
  {
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! First, create an account and generate your API key. Then, check out our quick start guide to make your first API call. We also provide SDKs for popular programming languages to make integration even easier.'
  },
  {
    question: 'What programming languages do you support?',
    answer: 'We provide SDKs for JavaScript, Python, Go, Java, and C#. You can also use our REST API with any programming language that supports HTTP requests.'
  },
  {
    question: 'How does pricing work?',
    answer: 'We offer flexible pricing based on usage. You can start with our free tier and scale up as needed. Pricing is based on API calls, data processing, and storage usage. Check our pricing page for detailed information.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest. We are SOC 2 Type II compliant and follow industry best practices for data protection.'
  },
  {
    question: 'Do you offer support?',
    answer: 'Yes! We offer multiple support channels including email, chat, and phone support. Our documentation and guides are also comprehensive resources for self-service support.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You will continue to have access to your account until the end of your current billing period.'
  }
];

const supportResources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: FileText,
    href: '/docs',
    color: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    icon: Video,
    href: '/guides',
    color: 'from-green-600 to-blue-600'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users and experts',
    icon: Users,
    href: '/community',
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Status Page',
    description: 'Real-time service status and updates',
    icon: Shield,
    href: '/status',
    color: 'from-orange-600 to-red-600'
  }
];

const supportStats = [
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'Support' },
  { number: '< 1hr', label: 'Response Time' },
  { number: '95%', label: 'Satisfaction' }
];

export default function SupportPage() {
  return (
    <Layout
      title="Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group's AI and cloud services. Multiple support channels available 24/7."
      keywords="support, help, customer service, technical support, documentation, FAQ"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              We're here to help you succeed. Get support through multiple channels 
              and access our comprehensive knowledge base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#support-channels"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:border-blue-300 hover:text-white transition-all duration-200"
              >
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section id="support-channels" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Support Channels
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Choose the support channel that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{channel.name}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="text-blue-600 font-semibold mb-2">{channel.contact}</p>
                <p className="text-sm text-gray-500">Response time: {channel.responseTime}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Support Resources
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Access our comprehensive knowledge base and resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportResources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link
                  href={resource.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Browse Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}