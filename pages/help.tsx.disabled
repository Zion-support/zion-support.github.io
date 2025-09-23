import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/MainLayout';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Download, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';

const faqCategories = [
  {
<<<<<<< HEAD
    id: 'overview',
    title: 'Understanding Our Services',
    description: 'Overview of all available services and solutions',
    readTime: '7 min read',
    type: 'Overview'
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Everything about our AI and machine learning solutions.',
    icon: HelpCircle,
    color: 'green',
    articles: [
      {
        title: 'AI Implementation Guide',
        description: 'How to implement AI solutions in your business',
        readTime: '10 min read',
        type: 'Guide'
      },
      {
        title: 'Machine Learning Models',
        description: 'Understanding different ML models and their applications',
        readTime: '8 min read',
        type: 'Technical'
      },
      {
        title: 'AI Best Practices',
        description: 'Tips and best practices for AI development',
        readTime: '6 min read',
        type: 'Best Practice'
      }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment solutions.',
    icon: Cloud,
    color: 'blue',
    articles: [
      {
        title: 'Cloud Migration Guide',
        description: 'Step-by-step guide to migrating to the cloud',
        readTime: '12 min read',
        type: 'Guide'
      },
      {
        title: 'Cloud Security',
        description: 'Best practices for securing your cloud infrastructure',
        readTime: '9 min read',
        type: 'Security'
      }
    ]
  }
];

const helpCategories = [
  {
    title: 'Getting Started',
    description: 'New to our platform? Start here.',
    icon: BookOpen,
    color: 'blue',
    articles: helpArticles
=======
    title: 'Getting Started',
    icon: BookOpen,
    faqs: [
      {
        question: 'How do I get started with Zion Tech Group services?',
        answer: 'Getting started is easy! Simply contact us through our contact form, call us at +1 302 464 0950, or email us at kleber@ziontechgroup.com. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
      },
      {
        question: 'What services do you offer?',
        answer: 'We offer comprehensive AI services, IT solutions, and micro SaaS development. This includes machine learning, natural language processing, computer vision, cloud infrastructure, cybersecurity, and custom software development.'
      },
      {
        question: 'Do you provide AI training for our team?',
        answer: 'Yes! We offer comprehensive training programs to help your team understand and effectively use the AI solutions we implement. This includes documentation, workshops, and ongoing support.'
      }
    ]
  },
  {
    title: 'Technical Support',
    icon: MessageCircle,
    faqs: [
      {
        question: 'What is your response time for technical issues?',
        answer: 'We provide 24/7 technical support with guaranteed response times: Critical issues within 1 hour, High priority within 4 hours, and Standard issues within 24 hours.'
      },
      {
        question: 'Do you offer remote support?',
        answer: 'Yes, we provide remote support for most technical issues. Our team can securely access your systems to diagnose and resolve problems quickly and efficiently.'
      },
      {
        question: 'What technologies do you support?',
        answer: 'We support a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Docker, Kubernetes, TensorFlow, PyTorch, and many more.'
      }
    ]
  },
  {
    title: 'Billing & Pricing',
    icon: FileText,
    faqs: [
      {
        question: 'How do you price your services?',
        answer: 'Our pricing is based on project complexity, scope, and timeline. We offer flexible pricing models including hourly rates, project-based pricing, and retainer agreements. Contact us for a detailed quote.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget and project timeline.'
      },
      {
        question: 'What is included in your support?',
        answer: 'Our support includes bug fixes, security updates, performance optimization, and minor feature enhancements. Major new features may require additional project work.'
      }
    ]
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
  }
];

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

<<<<<<< HEAD
  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find documentation, tutorials, and support resources." />
        <meta name="keywords" content="help, support, documentation, FAQ, tutorials, guides" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help <span className="text-blue-600">Center</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find answers, get support, and learn how to make the most of our services.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
  const filteredFaqs = faqCategories
    .filter(category => !selectedCategory || category.title === selectedCategory)
    .flatMap(category => category.faqs)
    .filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Find answers to frequently asked questions, get technical support, and access our comprehensive help resources."
      keywords="help, support, FAQ, technical support, documentation, troubleshooting"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Help <span className="text-blue-600">Center</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to your questions and get the support you need.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse by Category</h2>
                <p className="text-xl text-gray-600">
                  Find help organized by topic for easier navigation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {faqCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedCategory === category.title
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {category.faqs.length} articles available
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      {selectedCategory === category.title ? 'Hide' : 'View'} Articles
                      {selectedCategory === category.title ? (
                        <ChevronDown className="ml-2 w-4 h-4" />
                      ) : (
                        <ChevronRight className="ml-2 w-4 h-4" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {searchTerm ? 'Search Results' : 'Frequently Asked Questions'}
                </h2>
                <p className="text-xl text-gray-600">
                  {searchTerm 
                    ? `Found ${filteredFaqs.length} results for "${searchTerm}"`
                    : 'Find answers to common questions about our services and support.'
                  }
                </p>
              </motion.div>

              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {expandedFaq === index ? (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center py-12"
                >
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse our categories above.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center text-white">
                    <Phone className="w-6 h-6 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Mail className="w-6 h-6 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    <span>Live Chat Available</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Support
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/docs"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View Documentation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
  );
};

export default HelpPage;