import * as React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  Search, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ChevronDown,
  HelpCircle,
  MessageCircle,
  BookOpen,
  Clock,
  User,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Everything you need to know to get started',
    icon: BookOpen,
    articles: [
      {
        title: 'Understanding Our Services',
        description: 'Overview of all available services and solutions',
        readTime: '7 min read',
        type: 'Overview'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Step-by-step guide to create and configure your account',
        readTime: '5 min read',
        type: 'Tutorial'
      },
      {
        title: 'First Steps with AI',
        description: 'How to start using our AI-powered features',
        readTime: '10 min read',
        type: 'Guide'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Learn about our AI and machine learning capabilities',
    icon: HelpCircle,
    articles: [
      {
        title: 'AI Model Training',
        description: 'How to train custom AI models for your business',
        readTime: '15 min read',
        type: 'Technical'
      },
      {
        title: 'Data Preparation',
        description: 'Best practices for preparing your data for AI',
        readTime: '12 min read',
        type: 'Guide'
      },
      {
        title: 'Model Deployment',
        description: 'Deploying your AI models to production',
        readTime: '20 min read',
        type: 'Technical'
      }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment guides',
    icon: MessageCircle,
    articles: [
      {
        title: 'Cloud Migration',
        description: 'Migrating your applications to the cloud',
        readTime: '25 min read',
        type: 'Guide'
      },
      {
        title: 'Scaling Applications',
        description: 'How to scale your applications for growth',
        readTime: '18 min read',
        type: 'Technical'
      },
      {
        title: 'Security Best Practices',
        description: 'Keeping your cloud infrastructure secure',
        readTime: '22 min read',
        type: 'Security'
      }
    ]
  }
];

const faqs = [
  {
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! Simply create an account, choose your plan, and follow our onboarding guide. We provide step-by-step instructions and dedicated support throughout the process.'
  },
  {
    question: 'What programming languages do you support?',
    answer: 'We support all major programming languages including JavaScript, Python, Java, C#, Go, and more. Our APIs are language-agnostic and work with any language that can make HTTP requests.'
  },
  {
    question: 'Do you offer 24/7 support?',
    answer: 'Yes! We provide 24/7 support for all our customers. You can reach us via email, phone, or live chat at any time. Enterprise customers also get dedicated support managers.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we specialize in custom solutions tailored to your specific needs. Our team of experts can work with you to design and implement solutions that perfectly fit your business requirements.'
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    contact: '+1 (555) 123-4567',
    availability: '24/7'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: 'support@ziontechgroup.com',
    availability: '24/7'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    contact: 'Available on our website',
    availability: '24/7'
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const filteredArticles = helpCategories.flatMap(category => 
    category.articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions and access our knowledge base." />
        <meta name="keywords" content="help, support, documentation, FAQ, guides, tutorials" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to your questions and get the support you need. 
                Our comprehensive help center is here to assist you.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1">
                            {article.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="text-xs text-gray-500">
                            {article.readTime}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to the most common questions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our support team is here to help you succeed. Choose the best way to reach us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <p className="text-blue-600 font-medium mb-2">
                    {method.contact}
                  </p>
                  <p className="text-sm text-gray-500">
                    {method.availability}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}