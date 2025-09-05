import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search,
  HelpCircle,
  FileText,
  Video,
  BookOpen,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Code
} from 'lucide-react';

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "< 2 minutes",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Email Support",
    description: "Send us detailed questions and get comprehensive answers",
    icon: Mail,
    availability: "24/7",
    responseTime: "< 4 hours",
    color: "from-purple-500 to-purple-600"
  }
];

const supportTopics = [
  {
    title: "Technical Issues",
    description: "Problems with our services, APIs, or integrations",
    icon: Zap,
    articles: 25,
    color: "from-red-500 to-red-600"
  },
  {
    title: "Account & Billing",
    description: "Account management, billing questions, and payments",
    icon: Users,
    articles: 15,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Getting Started",
    description: "Onboarding guides and getting started tutorials",
    icon: BookOpen,
    articles: 20,
    color: "from-green-500 to-green-600"
  },
  {
    title: "API & Integration",
    description: "API documentation, integration guides, and examples",
    icon: FileText,
    articles: 30,
    color: "from-purple-500 to-purple-600"
  }
];

const faqItems = [
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Contact our team for a free consultation, and we'll help you choose the right solution for your needs. We'll guide you through the entire onboarding process."
  },
  {
    question: "What are your support hours?",
    answer: "We offer 24/7 support through live chat and email. Phone support is available Monday through Friday, 9 AM to 6 PM EST. Enterprise clients have dedicated support channels."
  },
  {
    question: "How quickly do you respond to support requests?",
    answer: "Response times vary by channel: Live chat responses are typically under 2 minutes, email responses within 4 hours, and phone support is immediate during business hours."
  },
  {
    question: "Do you provide training for your services?",
    answer: "Yes! We offer comprehensive training programs including documentation, video tutorials, webinars, and hands-on workshops to help you get the most out of our services."
  }
];

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation",
    icon: FileText,
    href: "/docs",
    count: "50+ articles"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides and walkthroughs",
    icon: Video,
    href: "/tutorials",
    count: "25+ videos"
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: Code,
    href: "/api-docs",
    count: "15+ APIs"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and get peer support",
    icon: Users,
    href: "/community",
    count: "500+ members"
  }
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  return (
    <MainLayout 
      title="Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Live chat, phone support, documentation, and comprehensive resources."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How Can We{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Help You?
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Get the support you need to succeed with our technology solutions. 
                We're here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Support</h2>
                <p className="text-gray-600">Find answers quickly with our search functionality</p>
              </motion.div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available 24/7 to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {channel.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {channel.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          {channel.availability}
                        </div>
                        <div className="flex items-center justify-center text-sm text-gray-500">
                          <Zap className="w-4 h-4 mr-2" />
                          {channel.responseTime}
                        </div>
                      </div>
                      <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        Get Help Now
                      </button>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Topic
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find help articles organized by topic for faster resolution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedTopic(topic.title)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${topic.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {topic.articles} articles
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {topic.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick answers to common support questions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Support Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access comprehensive resources to help you succeed with our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {resource.description}
                      </p>
                      <div className="text-xs text-gray-500 mb-4">
                        {resource.count}
                      </div>
                      <Link
                        href={resource.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Still Need Help?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Our support team is ready to assist you. Contact us through any of these channels.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-blue-100 mb-4">+1 302 464 0950</p>
                    <p className="text-sm text-blue-200">Mon-Fri 9AM-6PM EST</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-blue-100 mb-4">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-blue-200">24/7 Support</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                    <p className="text-blue-100 mb-4">Available Now</p>
                    <p className="text-sm text-blue-200">Instant Response</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}