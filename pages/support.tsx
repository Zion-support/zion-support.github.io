<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> pr-11914
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Video, 
  Users 
} from 'lucide-react';

const supportChannels = [
  {
<<<<<<< HEAD
    icon: Phone,,
    contact: '+1 302 464 0950',
    availability: '24/7 for Enterprise',
    action: 'Call Now'
  },
  {
    icon: Mail,,
    contact: 'support@ziontechgroup.com',
    availability: '24/7 Response',
    action: 'Send Email'
  },
  {
    icon: MessageCircle,,
    contact: 'Available on website',
    availability: 'Business Hours',
    action: 'Start Chat'
  }
];

const resources = [
  {
    icon: FileText,,
    href: '/docs'
  },
  {
    icon: Video,,
    href: '/tutorials'
  },
  {
    icon: BookOpen,,
    href: '/knowledge-base'
=======
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help with our 24/7 live chat support',
    availability: '24/7'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: 'Mon-Fri 9AM-6PM EST'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: '24/7'
  },
  {
    icon: Video,
    title: 'Video Calls',
    description: 'Schedule screen sharing sessions for complex issues',
    availability: 'By appointment'
>>>>>>> pr-11914
  }
];

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all your technology needs." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Center</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed with comprehensive support options.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Support</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    {channel.availability}
                  </div>
                </motion.div>
              ))}
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const supportOptions = [
  {
    title: 'Live Chat Support',
    description: 'Get instant help with our live chat support available 24/7.',
    icon: MessageCircle,
    availability: '24/7',
    responseTime: '< 2 minutes'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts for complex issues.',
    icon: Phone,
    availability: 'Mon-Fri 9AM-6PM',
    responseTime: 'Immediate'
  },
  {
    title: 'Email Support',
    description: 'Send us detailed descriptions and we\'ll get back to you quickly.',
    icon: Mail,
    availability: '24/7',
    responseTime: '< 4 hours'
  },
  {
    title: 'Priority Support',
    description: 'Dedicated support for enterprise customers with SLA guarantees.',
    icon: Clock,
    availability: '24/7',
    responseTime: '< 1 hour'
  }
];

const faqs = [
  {
    question: 'How quickly can I get support?',
    answer: 'Our response times vary by support type. Live chat typically responds within 2 minutes, while email support responds within 4 hours.'
  },
  {
    question: 'Do you offer 24/7 support?',
    answer: 'Yes, we provide 24/7 support through live chat and email. Phone support is available during business hours.'
  },
  {
    question: 'What types of issues can you help with?',
    answer: 'We can help with technical issues, billing questions, account management, and general product guidance.'
  },
  {
    question: 'Is there a cost for support?',
    answer: 'Basic support is included with all plans. Premium support features are available for enterprise customers.'
  }
];

export default function Support() {
  return (
    <Layout>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all your technology needs. 24/7 support available." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get help and support for all your technology needs. We're here to help you succeed.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Support Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Availability:</span>
                          <span className="font-medium">{option.availability}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time:</span>
                          <span className="font-medium">{option.responseTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
>>>>>>> pr-11913
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-xl text-gray-600">Explore our comprehensive documentation and guides</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Link
                      href={resource.href}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Access Resource
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us now for urgent support needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/help"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Help Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> pr-11914
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Can't find what you're looking for? Contact our support team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </button>
                <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}