import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from './components/layout/MainLayout';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  HelpCircle,
  BookOpen,
  FileText,
  Users,
  Zap,
  Shield,
  MessageCircle
} from 'lucide-react';

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help with our 24/7 live chat support',
    availability: '24/7'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    contact: '+1 302 464 0950',
    hours: '24/7 Emergency Support',
    response: 'Immediate'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    contact: 'kleber@ziontechgroup.com',
    hours: 'Monday - Friday: 9 AM - 6 PM EST',
    response: 'Within 2 hours'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help through our live chat system',
    contact: 'Available on website',
    hours: 'Monday - Friday: 9 AM - 6 PM EST',
    response: 'Immediate'
  }
];

const faqs = [
  {
    question: 'What support do you provide after project completion?',
    answer: 'We provide 30 days of free support after project completion, including bug fixes, minor adjustments, and technical guidance. Extended support plans are available for ongoing maintenance.'
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'We respond to emergency requests within 1 hour, standard requests within 2-4 hours, and general inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you provide training for the solutions you build?',
    answer: 'Yes, we provide comprehensive training sessions for all team members who will be using the solutions we develop. This includes documentation, video tutorials, and hands-on training sessions.'
  },
  {
    question: 'What if I need changes to my existing solution?',
    answer: 'We offer flexible maintenance and enhancement services. Small changes can often be handled quickly, while larger modifications will be quoted separately based on scope and complexity.'
  },
  {
    question: 'Do you provide 24/7 monitoring for critical systems?',
    answer: 'Yes, we offer 24/7 monitoring services for critical business systems. This includes real-time alerts, automated backups, and immediate response to any issues.'
  },
  {
    question: 'How do I escalate a critical issue?',
    answer: 'For critical issues, call our emergency hotline at +1 302 464 0950. You can also email kleber@ziontechgroup.com with "URGENT" in the subject line for immediate attention.'
  }
];

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    href: '/docs'
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    description: 'Searchable database of common questions and solutions',
    href: '/knowledge-base'
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users and share experiences',
    href: '/community'
  },
  {
    icon: Zap,
    title: 'Status Page',
    description: 'Real-time status of all our services and systems',
    href: '/status'
  }
];

export default function SupportPage() {
  return (
    <MainLayout 
      title="Support - Zion Tech Group | 24/7 Technical Support & Help Center"
      description="Get expert technical support for all Zion Tech Group services. 24/7 phone support, live chat, email support, and comprehensive help resources."
      keywords="technical support, help desk, customer service, 24/7 support, IT support, troubleshooting"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Center</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We're here to help you succeed. Get expert technical support, find answers to common questions, 
                and access comprehensive resources to maximize your success with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Call +1 302 464 0950
                </a>
                <Link 
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Submit Ticket
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{channel.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{channel.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700"><strong>Contact:</strong> {channel.contact}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700"><strong>Hours:</strong> {channel.hours}</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700"><strong>Response:</strong> {channel.response}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    {channel.title === 'Phone Support' ? (
                      <a 
                        href={`tel:${channel.contact}`}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
                      >
                        Call Now
                      </a>
                    ) : channel.title === 'Email Support' ? (
                      <a 
                        href={`mailto:${channel.contact}`}
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
                      >
                        Send Email
                      </a>
                    ) : (
                      <Link 
                        href="/contact"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
                      >
                        Start Chat
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and support
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                      <HelpCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 ml-8">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access documentation, guides, and community resources
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link 
                    href={resource.href}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Access Resource <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get Support
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We're here to help you succeed with our comprehensive support services.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
    </div>
    </MainLayout>
  );
}