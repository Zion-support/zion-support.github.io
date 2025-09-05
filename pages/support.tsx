import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Headphones, MessageCircle, Mail, Phone, Clock, CheckCircle, ArrowRight, FileText, Video, Users } from 'lucide-react';
import Layout from '../components/Layout';

const supportChannels = [
  {
    title: 'Live Chat',
    description: 'Get instant help with our live chat support',
    icon: MessageCircle,
    availability: '24/7',
    responseTime: 'Instant',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    icon: Mail,
    availability: '24/7',
    responseTime: 'Within 24 hours',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Video Call',
    description: 'Schedule a video call for complex technical issues',
    icon: Video,
    availability: 'By appointment',
    responseTime: 'Same day',
    color: 'from-orange-500 to-orange-600'
  }
];

const supportResources = [
  {
    title: 'Knowledge Base',
    description: 'Comprehensive documentation and guides',
    icon: FileText,
    link: '/docs'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    icon: Video,
    link: '/tutorials'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users and experts',
    icon: Users,
    link: '/community'
  },
  {
    title: 'Status Page',
    description: 'Real-time system status and updates',
    icon: CheckCircle,
    link: '/status'
  }
];

const faqs = [
  {
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! Contact our sales team at +1 302 464 0950 or email kleber@ziontechgroup.com for a consultation.'
  },
  {
    question: 'What support options are available?',
    answer: 'We offer 24/7 live chat, phone support, email support, and video calls. Our support team is always ready to help.'
  },
  {
    question: 'How quickly can you resolve issues?',
    answer: 'Most issues are resolved within 24 hours. Critical issues receive immediate attention and are typically resolved within 4 hours.'
  },
  {
    question: 'Do you provide training for your solutions?',
    answer: 'Yes! We provide comprehensive training including documentation, video tutorials, and live training sessions for your team.'
  }
];

export default function SupportPage() {
  return (
    <Layout
      title="Support - Zion Tech Group"
      description="Get the help you need with our comprehensive support services. 24/7 assistance for all your technology needs."
      keywords="support, help, assistance, technical support, customer service"
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
                Support & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support services. We're here to assist you 24/7.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Support Channels
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available through multiple channels.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-32 bg-gradient-to-r ${channel.color} flex items-center justify-center`}>
                    <channel.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {channel.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {channel.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Available: {channel.availability}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>Response: {channel.responseTime}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
                      Get Support
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Support Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive library of resources to help you get the most out of our services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <resource.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link
                    href={resource.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our support services.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us today for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}