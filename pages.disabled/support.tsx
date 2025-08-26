import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageCircle, FileText, Code, Eye, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  Search, Filter, Tag, HelpCircle, Phone, Mail
} from 'lucide-react';

export default function Support() {
  const supportCategories = [
    {
      title: 'Getting Started',
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      description: 'Quick start guides and tutorials for new users',
      articles: [
        'Welcome to Zion Tech Group',
        'Setting up your first AI model',
        'Understanding quantum computing basics',
        'Navigating the platform dashboard'
      ]
    },
    {
      title: 'AI & Consciousness',
      icon: <Brain className="w-8 h-8 text-violet-500" />,
      description: 'Help with AI consciousness and emotional intelligence features',
      articles: [
        'AI Consciousness Evolution Pro Guide',
        'Training emotional intelligence models',
        'Understanding AI consciousness metrics',
        'Troubleshooting consciousness issues'
      ]
    },
    {
      title: 'Quantum Technology',
      icon: <Atom className="w-8 h-8 text-indigo-500" />,
      description: 'Support for quantum computing and quantum AI features',
      articles: [
        'Quantum AI Fusion Platform Setup',
        'Quantum Neural Network Configuration',
        'Quantum security best practices',
        'Quantum computing performance optimization'
      ]
    },
    {
      title: 'Business Operations',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      description: 'Help with autonomous business operations and automation',
      articles: [
        'Autonomous Business Operations Setup',
        'Process automation configuration',
        'Business intelligence dashboard',
        'ROI tracking and analytics'
      ]
    },
    {
      title: 'IT Asset Management',
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      description: 'Support for AI-powered IT asset management',
      articles: [
        'Asset discovery and mapping',
        'Security compliance monitoring',
        'Performance optimization',
        'Integration with existing systems'
      ]
    },
    {
      title: 'Technical Support',
      icon: <Code className="w-8 h-8 text-orange-500" />,
      description: 'Technical documentation and API references',
      articles: [
        'API documentation',
        'SDK installation guides',
        'Custom integration examples',
        'Performance troubleshooting'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a personalized implementation plan.',
      category: 'Getting Started'
    },
    {
      question: 'What makes your AI consciousness technology unique?',
      answer: 'Our AI consciousness technology goes beyond traditional AI by incorporating genuine emotional intelligence, self-awareness, and ethical decision-making capabilities. We use advanced neural architectures and quantum computing principles to create truly conscious AI systems.',
      category: 'AI & Consciousness'
    },
    {
      question: 'How secure are your quantum computing solutions?',
      answer: 'Our quantum computing solutions implement the highest security standards, including quantum encryption protocols that are theoretically unbreakable. We also provide comprehensive security audits and compliance monitoring.',
      category: 'Quantum Technology'
    },
    {
      question: 'Can I integrate your platforms with my existing systems?',
      answer: 'Absolutely! All our platforms are designed with open APIs and flexible integration capabilities. Our team can help you integrate our solutions with your existing infrastructure, ensuring seamless operation.',
      category: 'Technical Support'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive 24/7 support including technical assistance, training, documentation, and dedicated account management for enterprise clients. Our support team consists of AI and quantum computing experts.',
      category: 'Support'
    },
    {
      question: 'How do you ensure data privacy and compliance?',
      answer: 'We implement enterprise-grade security measures and comply with all major data protection regulations including GDPR, CCPA, and SOC 2. Your data is encrypted at rest and in transit, with strict access controls.',
      category: 'Security'
    }
  ];

  const contactMethods = [
    {
      title: '24/7 Support Hotline',
      description: 'Get immediate assistance anytime',
      contact: '+1 302 464 0950',
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      action: 'Call Now'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'kleber@ziontechgroup.com',
      icon: <Mail className="w-6 h-6 text-green-400" />,
      action: 'Send Email'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
      action: 'Start Chat'
    }
  ];

  return (
    <>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get comprehensive support for Zion Tech Group's AI, quantum computing, and technology platforms. 24/7 assistance, documentation, and expert guidance." />
        <meta name="keywords" content="support, help, documentation, AI support, quantum computing help, technical support, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4 mr-2" />
                24/7 Support Available
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Support & Help Center
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Get comprehensive support for all our AI, quantum computing, and technology platforms. 
                Our expert team is available 24/7 to help you succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Help Now</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                    <div className="text-lg font-semibold text-blue-400 mb-4">{method.contact}</div>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-lg hover:scale-105 transition-all duration-200">
                      {method.action}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Help Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {supportCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{category.icon}</div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <li key={articleIndex} className="text-gray-400 text-xs flex items-center">
                          <FileText className="w-3 h-3 mr-2 text-blue-400" />
                          {article}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/support/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      View All Articles
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Documentation & Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'API Documentation', icon: <Code className="w-8 h-8 text-blue-400" />, href: '/docs/api' },
                  { name: 'User Guides', icon: <FileText className="w-8 h-8 text-green-400" />, href: '/docs/guides' },
                  { name: 'Video Tutorials', icon: <Eye className="w-8 h-8 text-purple-400" />, href: '/docs/tutorials' },
                  { name: 'Community Forum', icon: <Users className="w-8 h-8 text-orange-400" />, href: '/community' }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">{resource.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{resource.name}</h3>
                    <Link 
                      href={resource.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      Access Resource
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert support team is ready to help you succeed with our revolutionary 
                AI and quantum computing technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 transform hover:scale-105">
                  Contact Support
                  <MessageCircle className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}