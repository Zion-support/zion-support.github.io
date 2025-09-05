import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Download,
  Star,
  Users,
  Zap,
  Shield,
  Cloud,
  Brain
} from 'lucide-react';

const supportCategories = [
  {
    name: 'Getting Started',
    icon: Zap,
    description: 'Quick start guides and onboarding resources',
    articles: 12,
    color: 'blue'
  },
  {
    name: 'AI Services',
    icon: Brain,
    description: 'Help with AI models and machine learning',
    articles: 18,
    color: 'purple'
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Cloud infrastructure and deployment support',
    articles: 15,
    color: 'green'
  },
  {
    name: 'Security',
    icon: Shield,
    description: 'Cybersecurity and compliance assistance',
    articles: 10,
    color: 'red'
  },
  {
    name: 'Billing & Account',
    icon: FileText,
    description: 'Account management and billing questions',
    articles: 8,
    color: 'orange'
  },
  {
    name: 'API Documentation',
    icon: BookOpen,
    description: 'Technical documentation and API guides',
    articles: 25,
    color: 'indigo'
  }
];

const faqs = [
  {
    question: 'How do I get started with your AI services?',
    answer: 'Getting started is easy! Simply contact our team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best AI solutions for your business.',
    category: 'Getting Started'
  },
  {
    question: 'What is your typical response time for support requests?',
    answer: 'We pride ourselves on fast response times. For critical issues, we respond within 1 hour. For general support requests, we respond within 4 hours during business hours. Enterprise customers receive 24/7 support.',
    category: 'General'
  },
  {
    question: 'Do you offer training for your solutions?',
    answer: 'Yes! We provide comprehensive training for all our solutions, including hands-on workshops, documentation, and ongoing support. Training is included with all our service packages.',
    category: 'Training'
  },
  {
    question: 'How secure is my data with your services?',
    answer: 'Security is our top priority. We use enterprise-grade encryption, follow industry best practices, and are compliant with SOC 2, ISO 27001, and other relevant security standards. Your data is protected at all times.',
    category: 'Security'
  },
  {
    question: 'Can I integrate your services with my existing systems?',
    answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing systems. We provide APIs, SDKs, and custom integration services to ensure smooth connectivity with your current infrastructure.',
    category: 'Integration'
  },
  {
    question: 'What happens if I need to scale my solution?',
    answer: 'Our solutions are built to scale with your business. We offer flexible scaling options and can adjust your plan as your needs grow. Our team will work with you to ensure smooth scaling without disruption.',
    category: 'Scaling'
  }
];

const supportChannels = [
  {
    name: 'Help Center',
    icon: HelpCircle,
    description: 'Search our knowledge base for instant answers',
    responseTime: 'Instant',
    availability: '24/7',
    action: 'Browse Articles',
    color: 'blue'
  },
  {
    name: 'Live Chat',
    icon: MessageSquare,
    description: 'Chat with our support team in real-time',
    responseTime: '< 2 minutes',
    availability: 'Mon-Fri 9AM-6PM EST',
    action: 'Start Chat',
    color: 'green'
  },
  {
    name: 'Phone Support',
    icon: Phone,
    description: 'Call us for immediate assistance',
    responseTime: 'Immediate',
    availability: 'Mon-Fri 9AM-6PM EST',
    action: 'Call +1 302 464 0950',
    color: 'purple'
  },
  {
    name: 'Email Support',
    icon: Mail,
    description: 'Send us a detailed message',
    responseTime: '< 4 hours',
    availability: '24/7',
    action: 'Send Email',
    color: 'orange'
  }
];

const resources = [
  {
    title: 'API Documentation',
    description: 'Complete API reference and integration guides',
    icon: BookOpen,
    type: 'Documentation',
    size: '2.5 MB',
    downloads: 1250
  },
  {
    title: 'Getting Started Guide',
    description: 'Step-by-step guide to get up and running quickly',
    icon: FileText,
    type: 'PDF',
    size: '1.2 MB',
    downloads: 890
  },
  {
    title: 'Video Tutorials',
    description: 'Video walkthroughs of key features and workflows',
    icon: Video,
    type: 'Video Series',
    size: '45 min',
    downloads: 2100
  },
  {
    title: 'Best Practices Guide',
    description: 'Industry best practices and recommendations',
    icon: Star,
    type: 'PDF',
    size: '3.1 MB',
    downloads: 750
  }
];

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Getting Started', 'General', 'Training', 'Security', 'Integration', 'Scaling'];

  return (
    <>
      <Head>
        <title>Support - Zion Tech Group | Help Center & Customer Support</title>
        <meta name="description" content="Get help with Zion Tech Group services. Access our knowledge base, contact support, and find answers to common questions about our AI and technology solutions." />
        <meta name="keywords" content="support, help center, customer service, technical support, AI support" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get help and support for all our technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
        <meta property="og:type" content="website" />
      </Head>

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
                How Can We Help?
                <span className="block text-blue-400">Expert Support When You Need It</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get the help you need with our comprehensive support resources and expert assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                    channel.color === 'blue' ? 'border-l-4 border-blue-500' :
                    channel.color === 'green' ? 'border-l-4 border-green-500' :
                    channel.color === 'purple' ? 'border-l-4 border-purple-500' : 'border-l-4 border-orange-500'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    channel.color === 'blue' ? 'bg-blue-100' :
                    channel.color === 'green' ? 'bg-green-100' :
                    channel.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                  }`}>
                    <channel.icon className={`w-8 h-8 ${
                      channel.color === 'blue' ? 'text-blue-600' :
                      channel.color === 'green' ? 'text-green-600' :
                      channel.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{channel.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{channel.description}</p>
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500 mb-1">Response Time</div>
                    <div className="font-medium">{channel.responseTime}</div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-1">Availability</div>
                    <div className="font-medium text-sm">{channel.availability}</div>
                  </div>
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    channel.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                    channel.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700' :
                    channel.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}>
                    {channel.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find help organized by topic and service area
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    category.color === 'blue' ? 'bg-blue-100' :
                    category.color === 'purple' ? 'bg-purple-100' :
                    category.color === 'green' ? 'bg-green-100' :
                    category.color === 'red' ? 'bg-red-100' :
                    category.color === 'orange' ? 'bg-orange-100' : 'bg-indigo-100'
                  }`}>
                    <category.icon className={`w-8 h-8 ${
                      category.color === 'blue' ? 'text-blue-600' :
                      category.color === 'purple' ? 'text-purple-600' :
                      category.color === 'green' ? 'text-green-600' :
                      category.color === 'red' ? 'text-red-600' :
                      category.color === 'orange' ? 'text-orange-600' : 'text-indigo-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{category.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{category.description}</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to the most common questions about our services
              </p>
              
              {/* Category Filter */}
              <div className="flex justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFaq === index ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Resources & Downloads</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive documentation and resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center">{resource.title}</h3>
                  <p className="text-gray-600 text-center mb-4 text-sm">{resource.description}</p>
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500 mb-1">Type</div>
                    <div className="font-medium text-sm">{resource.type}</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500 mb-1">Size</div>
                    <div className="font-medium text-sm">{resource.size}</div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-1">Downloads</div>
                    <div className="font-medium text-sm">{resource.downloads.toLocaleString()}</div>
                  </div>
                  <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}