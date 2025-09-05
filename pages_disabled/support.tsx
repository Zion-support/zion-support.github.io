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

  },
  {
    title: "Email Support",
    description: "Send us detailed questions and get comprehensive answers",
    icon: Mail,
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
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for our services',
    href: '/tutorials'
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Searchable database of articles and solutions',
    href: '/knowledge-base'

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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We're Here to Help
                <span className="block text-yellow-400">24/7 Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Get the support you need to make the most of our technology solutions.

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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
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

            </div>
          </div>
        </section>

        {/* FAQ Section */}
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

          </div>
        </section>
      </div>
    </MainLayout>
  );
}