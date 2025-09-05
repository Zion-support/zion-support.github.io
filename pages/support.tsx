<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  Shield
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const supportChannels = [
  {
<<<<<<< HEAD
=======
  Shield
} from 'lucide-react';

const supportChannels = [
  {
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
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
    <Layout 
      title="Support - Zion Tech Group | 24/7 Technical Support & Help Center"
      description="Get expert technical support for all Zion Tech Group services. 24/7 phone support, live chat, email support, and comprehensive help resources."
      keywords="technical support, help desk, customer service, 24/7 support, IT support, troubleshooting"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
=======
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "< 2 minutes",
    color: "blue"
=======
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Video, BookOpen } from 'lucide-react';

const faqCategories = [
  'General',
  'Technical Support',
  'Billing',
  'Account Management',
  'API Documentation'
];

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What services does Zion Tech Group offer?',
    answer: 'We offer comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, custom development, and digital transformation consulting.'
  },
  {
    id: 2,
    category: 'Technical Support',
    question: 'How do I get technical support?',
    answer: 'You can reach our technical support team through multiple channels: email support@ziontechgroup.com, phone at +1 302 464 0950, or through our support portal. We offer 24/7 support for enterprise clients.'
  },
  {
    id: 3,
    category: 'Billing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely through our encrypted payment system.'
  },
  {
    id: 4,
    category: 'Account Management',
    question: 'How do I update my account information?',
    answer: 'You can update your account information by logging into your client portal or contacting your account manager. Changes are typically processed within 24 hours.'
  },
  {
    id: 5,
    category: 'API Documentation',
    question: 'Where can I find API documentation?',
    answer: 'Our comprehensive API documentation is available in the Resources section of our website. You can also access it directly through your client portal or contact our technical team for assistance.'
  },
  {
    id: 6,
    category: 'Technical Support',
    question: 'What is your response time for support requests?',
    answer: 'Our response times vary by priority level: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (72 hours). Enterprise clients receive priority support.'
  }
];

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our support team',
    contact: '+1 302 464 0950',
    availability: '24/7 for Enterprise',
    action: 'Call Now'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  },
  {
    title: "Email Support",
    description: "Send us detailed questions and get comprehensive answers",
    icon: Mail,
<<<<<<< HEAD
    availability: "24/7",
    responseTime: "< 4 hours",
    color: "green"
=======
    title: 'Email Support',
    description: 'Send us a detailed message',
    contact: 'support@ziontechgroup.com',
    availability: '24/7 Response',
    action: 'Send Email'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    contact: 'Available on website',
    availability: 'Business Hours',
    action: 'Start Chat'
  }
];

const resources = [
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    href: '/docs'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
    color: "purple"
  },
  {
    title: "Video Call",
    description: "Schedule a screen sharing session for complex issues",
    icon: Video,
<<<<<<< HEAD
    availability: "By appointment",
    responseTime: "Same day",
    color: "orange"
=======
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for our services',
    href: '/tutorials'
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Searchable database of articles and solutions',
    href: '/knowledge-base'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  }
];

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "How do I get started with Zion Tech Group services?",
        answer: "Getting started is easy! Simply contact us through our website or call us directly. We'll schedule a consultation to understand your needs and provide a customized solution."
      },
      {
        question: "What information do I need to provide for a consultation?",
        answer: "We'll need basic information about your company, current technology stack, specific requirements, timeline, and budget. Don't worry if you're not sure about all details - we'll help guide you through the process."
      },
      {
        question: "How long does the onboarding process take?",
        answer: "The onboarding process typically takes 1-2 weeks, depending on the complexity of your project. We'll provide a detailed timeline during our initial consultation."
      }
    ]
  },
  {
    title: "Technical Support",
    questions: [
      {
        question: "What if I encounter technical issues?",
        answer: "Our technical support team is available 24/7 through multiple channels including live chat, email, and phone. We guarantee a response within 2 minutes for critical issues."
      },
      {
        question: "Do you provide training for your solutions?",
        answer: "Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and hands-on sessions with our experts."
      },
      {
        question: "Can you help with integration with existing systems?",
        answer: "Absolutely! Our team specializes in seamless integration with existing systems. We'll work with your current infrastructure to ensure smooth implementation."
      }
    ]
  },
  {
    title: "Billing & Pricing",
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including project-based, retainer, and subscription options. Pricing depends on the scope and complexity of your requirements."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget."
      },
      {
        question: "Is there a free trial available?",
        answer: "We offer free consultations and proof-of-concept demonstrations. For ongoing services, we can discuss trial periods based on your specific needs."
      }
    ]
  }
];

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    icon: FileText,
    href: "/docs"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
    href: "/tutorials"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and experts",
    icon: Users,
    href: "/community"
  },
  {
    title: "Status Page",
    description: "Real-time service status and updates",
    icon: Globe,
    href: "/status"
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "support@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709",
  hours: "24/7 Support Available"
};

export default function SupportPage() {
<<<<<<< HEAD
  return (
    <MainLayout 
      title="Support Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. 24/7 support, documentation, tutorials, and expert assistance."
      keywords="support, help, customer service, technical support, documentation, tutorials, FAQ"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
=======
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout
      title="Support - Zion Tech Group"
      description="Get help and support for all your technology needs. 24/7 support available for enterprise clients."
      keywords="support, help, technical support, customer service, documentation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
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
<<<<<<< HEAD
=======
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We're here to help you succeed. Get support through multiple channels, 
                access comprehensive resources, and connect with our expert team.
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We're Here to Help
                <span className="block text-yellow-400">24/7 Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Get the support you need to make the most of our technology solutions.
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact-support"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#faq"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Browse FAQ
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available 24/7 to assist with any questions or issues.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-${channel.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <channel.icon className={`w-8 h-8 text-${channel.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {channel.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{channel.availability}</span>
                      </div>
                      <div className="text-gray-500">
                        Response: {channel.responseTime}
                      </div>
                    </div>
                    <button className={`w-full mt-4 bg-${channel.color}-600 hover:bg-${channel.color}-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors`}>
                      Get Help
                    </button>
                  </div>
                </motion.div>
              ))}
=======
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Choose your preferred support channel</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    <p className="text-lg font-medium text-gray-900 mb-2">{channel.contact}</p>
                    <p className="text-sm text-gray-500 mb-4">{channel.availability}</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      {channel.action}
                    </button>
                  </motion.div>
                );
              })}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </div>
          </div>
        </section>

        {/* FAQ Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services and support.
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-md p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                  </div>
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* FAQ Section */}
        <section className="py-16 bg-white">
=======
        {/* Resources Section */}
        <section className="py-20 bg-white">
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
=======
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Helpful Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access comprehensive resources to help you get the most out of our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <Link href={resource.href} className="block">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                        <resource.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">
                        {resource.description}
                      </p>
                    </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                  </Link>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
=======
          </div>
        </section>

        {/* Contact Support Section */}
        <section id="contact-support" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with our support team through your preferred method.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{contactInfo.phone}</div>
                        <div className="text-sm text-gray-600">24/7 Support</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{contactInfo.email}</div>
                        <div className="text-sm text-gray-600">Email Support</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">{contactInfo.hours}</div>
                        <div className="text-sm text-gray-600">Response Time: &lt; 2 minutes</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe your issue or question..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
=======
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions</p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {faqCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our expert team is ready to assist you with any questions or issues you may have.
<<<<<<< HEAD
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
                  Contact Support
=======
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our expert team is ready to assist you with any questions or issues. 
                Don't hesitate to reach out - we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Browse Documentation
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </Link>
=======
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
                  Contact Support
                </Link>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </div>
            </motion.div>
=======

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-3">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                      <HelpCircle className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
    </MainLayout>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}