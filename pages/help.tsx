import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  Download,
  Star,
  Users,
  Settings,
  Shield,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';

const helpCategories = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    description: 'Learn the basics and get up and running quickly',
    articles: [
      {
        title: 'How to create your account',
        description: 'Step-by-step guide to setting up your Zion Tech Group account',
        readTime: '3 min read',
        popular: true
      },
      {
        title: 'First steps with our platform',
        description: 'Essential first steps to maximize your experience',
        readTime: '5 min read',
        popular: true
      },
      {
        title: 'Understanding your dashboard',
        description: 'Navigate and customize your dashboard effectively',
        readTime: '4 min read',
        popular: false
      },
      {
        title: 'Setting up your profile',
        description: 'Complete your profile for better service',
        readTime: '2 min read',
        popular: false
      }
    ]
  },
  {
    title: 'AI Services',
    icon: Brain,
    description: 'Everything about our AI and machine learning services',
    articles: [
      {
        title: 'How to use AI models',
        description: 'Learn how to implement and use our AI models',
        readTime: '8 min read',
        popular: true
      },
      {
        title: 'Training custom models',
        description: 'Guide to training your own AI models',
        readTime: '12 min read',
        popular: true
      },
      {
        title: 'API integration guide',
        description: 'Integrate our AI services into your applications',
        readTime: '10 min read',
        popular: false
      },
      {
        title: 'Troubleshooting AI issues',
        description: 'Common AI service issues and solutions',
        readTime: '6 min read',
        popular: false
      }
    ]
  },
  {
    title: 'IT Services',
    icon: Settings,
    description: 'Support for our IT infrastructure and services',
    articles: [
      {
        title: 'Cloud setup and configuration',
        description: 'Configure your cloud infrastructure properly',
        readTime: '15 min read',
        popular: true
      },
      {
        title: 'Security best practices',
        description: 'Keep your systems secure with our guidelines',
        readTime: '10 min read',
        popular: true
      },
      {
        title: 'Monitoring and alerts',
        description: 'Set up monitoring for your IT infrastructure',
        readTime: '7 min read',
        popular: false
      },
      {
        title: 'Backup and recovery',
        description: 'Implement proper backup strategies',
        readTime: '9 min read',
        popular: false
      }
    ]
  },
  {
    title: 'Micro SaaS',
    icon: Cloud,
    description: 'Help with our micro SaaS platforms and tools',
    articles: [
      {
        title: 'Platform overview',
        description: 'Understanding our micro SaaS ecosystem',
        readTime: '6 min read',
        popular: true
      },
      {
        title: 'Customization options',
        description: 'Customize platforms to fit your needs',
        readTime: '8 min read',
        popular: true
      },
      {
        title: 'Integration with existing tools',
        description: 'Connect with your current workflow',
        readTime: '5 min read',
        popular: false
      },
      {
        title: 'User management',
        description: 'Manage users and permissions effectively',
        readTime: '4 min read',
        popular: false
      }
    ]
  },
  {
    title: 'Billing & Account',
    icon: Shield,
    description: 'Account management and billing information',
    articles: [
      {
        title: 'Understanding your bill',
        description: 'Breakdown of charges and billing cycles',
        readTime: '3 min read',
        popular: true
      },
      {
        title: 'Payment methods',
        description: 'Add and manage payment methods',
        readTime: '2 min read',
        popular: true
      },
      {
        title: 'Upgrading your plan',
        description: 'How to upgrade or change your plan',
        readTime: '4 min read',
        popular: false
      },
      {
        title: 'Cancellation policy',
        description: 'Understanding our cancellation terms',
        readTime: '3 min read',
        popular: false
      }
    ]
  },
  {
    title: 'Technical Support',
    icon: Zap,
    description: 'Technical issues and troubleshooting',
    articles: [
      {
        title: 'System requirements',
        description: 'Minimum requirements for our services',
        readTime: '2 min read',
        popular: true
      },
      {
        title: 'Common error messages',
        description: 'Understanding and fixing common errors',
        readTime: '5 min read',
        popular: true
      },
      {
        title: 'Performance optimization',
        description: 'Tips to improve system performance',
        readTime: '7 min read',
        popular: false
      },
      {
        title: 'Data migration',
        description: 'Moving data between systems',
        readTime: '10 min read',
        popular: false
      }
    ]
  }
];

const faqs = [
  {
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply create an account, choose your service plan, and our team will guide you through the setup process. We offer free consultations to help you select the right solutions for your needs.'
  },
  {
    question: 'What support options are available?',
    answer: 'We offer multiple support channels including 24/7 email support, live chat during business hours, phone support, and comprehensive documentation. Premium customers also get dedicated account managers.'
  },
  {
    question: 'How secure is my data?',
    answer: 'Security is our top priority. We use enterprise-grade encryption, follow SOC 2 compliance standards, and implement strict access controls. All data is encrypted both in transit and at rest.'
  },
  {
    question: 'Can I integrate your services with my existing systems?',
    answer: 'Yes! Our services are designed to integrate seamlessly with existing systems through APIs, webhooks, and standard protocols. Our team can help you plan and implement integrations.'
  },
  {
    question: 'What happens if I need to scale my services?',
    answer: 'Our services are built to scale automatically. You can upgrade your plan at any time, and our team will help you optimize your infrastructure for growth.'
  },
  {
    question: 'Do you offer training for your services?',
    answer: 'Yes! We provide comprehensive training including documentation, video tutorials, webinars, and hands-on workshops. We also offer custom training programs for teams.'
  }
];

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    action: 'Start Chat'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    availability: '24/7',
    responseTime: 'Within 4 hours',
    action: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    action: 'Call Now'
  }
];

export default function HelpPage() {
  return (
    <Layout 
      title="Help Center - Zion Tech Group | Support & Documentation"
      description="Get help with Zion Tech Group services. Find answers, documentation, tutorials, and contact our support team for assistance."
      keywords="help, support, documentation, FAQ, tutorials, customer service, technical support"
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help Center
                <span className="block text-blue-400">We're Here to Help</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers, get support, and learn how to make the most of our services. 
                Our comprehensive help center has everything you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and answers..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find help organized by topic and service area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <category.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{article.title}</h4>
                            <p className="text-xs text-gray-500">{article.readTime}</p>
                          </div>
                          {article.popular && (
                            <Star className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      View All Articles
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to the most common questions about our services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our support team is ready to help you with any questions or issues.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {method.availability}
                  </div>
                  <div className="text-sm text-gray-500 mb-6">
                    Response: {method.responseTime}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    {method.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                If you can't find what you're looking for, our team is here to help. 
                Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}