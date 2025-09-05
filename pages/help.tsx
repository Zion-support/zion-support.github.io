import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Search, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ChevronDown,
  CheckCircle,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Clock,
  User
} from 'lucide-react';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to our platform? Start here to learn the basics.',
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
        title: 'First Project Setup',
        description: 'How to create your first project with us',
        readTime: '10 min read',
        type: 'Guide'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Learn about our AI and machine learning solutions.',
    icon: CheckCircle,
    articles: [
      {
        title: 'AI Development Process',
        description: 'Understanding our AI development methodology',
        readTime: '12 min read',
        type: 'Guide'
      },
      {
        title: 'Machine Learning Models',
        description: 'Types of ML models we work with',
        readTime: '8 min read',
        type: 'Technical'
      },
      {
        title: 'AI Integration Guide',
        description: 'How to integrate AI solutions into your business',
        readTime: '15 min read',
        type: 'Tutorial'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Everything about our cloud computing services.',
    icon: CheckCircle,
    articles: [
      {
        title: 'Cloud Migration Strategy',
        description: 'Planning and executing cloud migration',
        readTime: '20 min read',
        type: 'Guide'
      },
      {
        title: 'Cloud Security Best Practices',
        description: 'Securing your cloud infrastructure',
        readTime: '10 min read',
        type: 'Security'
      },
      {
        title: 'Cost Optimization',
        description: 'Reducing cloud costs while maintaining performance',
        readTime: '12 min read',
        type: 'Optimization'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your business with our security solutions.',
    icon: CheckCircle,
    articles: [
      {
        title: 'Security Assessment',
        description: 'How we evaluate your current security posture',
        readTime: '8 min read',
        type: 'Assessment'
      },
      {
        title: 'Threat Detection',
        description: 'Advanced threat detection and response',
        readTime: '10 min read',
        type: 'Security'
      },
      {
        title: 'Compliance Guidelines',
        description: 'Meeting industry compliance requirements',
        readTime: '15 min read',
        type: 'Compliance'
      }
    ]
  }
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex AI solutions can take 3-6 months. We provide detailed timelines during consultation.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and maintenance services to ensure your solutions continue to perform optimally.'
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of technologies including AI/ML frameworks, cloud platforms (AWS, Azure, GCP), modern web technologies, mobile development, and more.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We implement enterprise-grade security measures including encryption, secure coding practices, regular security audits, and compliance with industry standards.'
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely. We specialize in integrating new solutions with existing systems and can work with your current technology stack.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote based on your needs.'
  }
];

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help with Zion Tech Group's services. Find documentation, guides, FAQs, and support resources for all our technology solutions." />
        <meta name="keywords" content="help center, support, documentation, guides, FAQ, technical support" />
        <meta property="og:title" content="Help Center - Zion Tech Group Support" />
        <meta property="og:description" content="Access our comprehensive help center with guides, documentation, and support resources." />
        <meta property="og:url" content="https://ziontechgroup.com/help" />
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
                Help{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers, guides, and support resources to help you get the most out of our technology solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Help Categories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our organized help resources by category to find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="space-y-2">
                      {category.articles.slice(0, 3).map((article, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{article.title}</span>
                          <span className="text-blue-600">{article.readTime}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/help/${category.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mt-4"
                    >
                      View All Articles
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find quick answers to the most common questions about our services and solutions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
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

        {/* Contact Support Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Can't find what you're looking for? Our support team is here to help you with any questions or issues.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MessageSquare className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Live Chat Support</h3>
                      <p className="text-gray-600">Get instant help from our support team</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Support</h3>
                      <p className="text-gray-600">Send us an email and we'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Support</h3>
                      <p className="text-gray-600">Call us for immediate assistance</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h3>
                  <p className="text-gray-600 mb-6">
                    Get in touch with our expert support team for personalized assistance.
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
                    >
                      Contact Support Team
                    </Link>
                    <div className="text-sm text-gray-600">
                      <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
                      <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}