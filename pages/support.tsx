import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, Clock, CheckCircle, ArrowRight, FileText, Users, Settings, HelpCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const supportChannels = [
  {
    title: "Email Support",
    description: "Get help via email with detailed responses",
    icon: Mail,
    responseTime: "Within 24 hours",
    availability: "24/7",
    contact: "kleber@ziontechgroup.com",
    color: "blue"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our support team",
    icon: Phone,
    responseTime: "Immediate",
    availability: "Mon-Fri 9AM-6PM EST",
    contact: "+1 302 464 0950",
    color: "green"
  },
  {
    title: "Live Chat",
    description: "Chat with us in real-time on our website",
    icon: MessageSquare,
    responseTime: "Within 5 minutes",
    availability: "Mon-Fri 9AM-6PM EST",
    contact: "Available on website",
    color: "purple"
  }
];

const supportTopics = [
  {
    title: "Technical Support",
    description: "Get help with technical issues and troubleshooting",
    icon: Settings,
    articles: [
      "API Integration Issues",
      "Authentication Problems",
      "Performance Optimization",
      "Error Troubleshooting"
    ]
  },
  {
    title: "Account & Billing",
    description: "Questions about your account and billing",
    icon: FileText,
    articles: [
      "Billing Questions",
      "Account Management",
      "Payment Issues",
      "Subscription Changes"
    ]
  },
  {
    title: "General Questions",
    description: "General information and guidance",
    icon: HelpCircle,
    articles: [
      "Service Information",
      "Getting Started",
      "Feature Requests",
      "Partnership Inquiries"
    ]
  }
];

const faqItems = [
  {
    question: "How do I submit a support ticket?",
    answer: "You can submit a support ticket by emailing us at kleber@ziontechgroup.com or using our contact form. Please include a detailed description of your issue and any relevant error messages or screenshots."
  },
  {
    question: "What information should I include in my support request?",
    answer: "Please include your account information, a detailed description of the issue, steps to reproduce the problem, any error messages, and relevant screenshots or log files. This helps us resolve your issue faster."
  },
  {
    question: "Do you offer phone support?",
    answer: "Yes, we offer phone support Monday through Friday from 9 AM to 6 PM EST. You can reach us at +1 302 464 0950. For urgent issues outside business hours, please email us and we'll respond as soon as possible."
  },
  {
    question: "How quickly will I receive a response?",
    answer: "We typically respond to email inquiries within 24 hours, phone calls are answered immediately during business hours, and live chat responses are usually within 5 minutes during business hours."
  }
];

const supportStats = [
  { number: "99%", label: "Customer Satisfaction" },
  { number: "< 2hrs", label: "Average Response Time" },
  { number: "24/7", label: "Email Support" },
  { number: "95%", label: "Issues Resolved" }
];

export default function SupportPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <MainLayout
      title="Support - Zion Tech Group"
      description="Get help and support for our services. Contact our support team via email, phone, or live chat. We're here to help you succeed."
      keywords="support, help, customer service, technical support, contact, assistance, troubleshooting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We're Here to{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Help
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Our support team is dedicated to helping you succeed with our technology solutions. 
                Get the help you need when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/faq" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
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
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available through multiple channels to ensure you get the help you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  green: "from-green-500 to-green-600",
                  purple: "from-purple-500 to-purple-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[channel.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {channel.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {channel.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-green-500" />
                        <span className="font-semibold">Response Time:</span>
                        <span className="ml-2">{channel.responseTime}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="font-semibold">Availability:</span>
                        <span className="ml-2">{channel.availability}</span>
                      </div>
                    </div>

                    <div className="text-lg font-semibold text-gray-900 mb-4">
                      {channel.contact}
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colorClasses[channel.color as keyof typeof colorClasses]} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                    >
                      <span>Get Help</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Topics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Support Topics
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find help organized by topic. Click on any topic to see related articles and resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedTopic(selectedTopic === topic.title ? null : topic.title)}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {topic.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {topic.description}
                    </p>

                    <div className="space-y-2">
                      {topic.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {article}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick answers to frequently asked support questions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Contact us directly and we'll be happy to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us Now
                </Link>
                <Link href="/faq" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Browse FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}