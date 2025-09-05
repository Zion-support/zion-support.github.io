<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ChevronDown, HelpCircle } from 'lucide-react';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Services' },
    { id: 'billing', name: 'Billing' },
    { id: 'technical', name: 'Technical' },
    { id: 'support', name: 'Support' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer a comprehensive range of technology services including AI and machine learning solutions, cloud infrastructure, cybersecurity, custom software development, database solutions, and digital transformation consulting. Our services are designed to help businesses of all sizes leverage technology for growth and efficiency.',
      category: 'general',
      tags: ['services', 'overview', 'technology']
    },
    {
      id: 2,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form, call us directly, or schedule a consultation. We\'ll discuss your needs, assess your current technology stack, and recommend the best solutions for your business. Our team will guide you through the entire process from initial consultation to implementation.',
      category: 'general',
      tags: ['getting-started', 'consultation', 'process']
    },
    {
      id: 3,
      question: 'Do you offer custom development services?',
      answer: 'Yes! We specialize in custom software development tailored to your specific business needs. Our team can build web applications, mobile apps, APIs, microservices, and more. We work with modern technologies and follow best practices to ensure scalable, maintainable, and secure solutions.',
      category: 'services',
      tags: ['custom-development', 'software', 'applications']
    },
    {
      id: 4,
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours during business days. For critical issues, we provide 24/7 emergency support for our enterprise clients. Our support team is available via email, phone, and live chat to help you resolve any issues quickly.',
      category: 'support',
      tags: ['support', 'response-time', 'emergency']
    },
    {
      id: 5,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001. We also follow OWASP security guidelines and conduct regular penetration testing to ensure the highest level of security.',
      category: 'technical',
      tags: ['security', 'encryption', 'compliance']
    },
    {
      id: 6,
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We provide comprehensive integration services and APIs that allow you to seamlessly connect our solutions with your existing business systems and workflows. Our team has experience with a wide range of technologies and can help you integrate with virtually any system.',
      category: 'technical',
      tags: ['integration', 'APIs', 'existing-systems']
    },
    {
      id: 7,
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models to suit different business needs. Our pricing is based on project scope, complexity, and ongoing support requirements. We provide transparent pricing with no hidden fees and offer both fixed-price and time-and-materials options. Contact us for a detailed quote tailored to your specific needs.',
      category: 'billing',
      tags: ['pricing', 'cost', 'billing']
    },
    {
      id: 8,
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions to ensure your team can effectively use and maintain them. Our training includes documentation, video tutorials, hands-on workshops, and ongoing support. We also offer customized training programs based on your specific requirements.',
      category: 'support',
      tags: ['training', 'documentation', 'workshops']
    },
    {
      id: 9,
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Node.js, Python, Java, .NET, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. Our team stays up-to-date with the latest technologies and best practices to provide you with cutting-edge solutions.',
      category: 'technical',
      tags: ['technologies', 'programming', 'cloud']
    },
    {
      id: 10,
      question: 'How do you ensure project quality?',
      answer: 'We follow rigorous quality assurance processes including code reviews, automated testing, manual testing, and continuous integration. Our team uses industry-standard tools and methodologies to ensure high-quality deliverables. We also provide regular project updates and involve you in the review process.',
      category: 'services',
      tags: ['quality', 'testing', 'process']
    },
    {
      id: 11,
      question: 'Do you offer maintenance and support after project completion?',
      answer: 'Yes! We provide ongoing maintenance and support services to ensure your solutions continue to perform optimally. Our support includes bug fixes, updates, security patches, performance monitoring, and technical assistance. We offer various support packages to meet your specific needs.',
      category: 'support',
      tags: ['maintenance', 'support', 'updates']
    },
    {
      id: 12,
      question: 'Can you help with digital transformation?',
      answer: 'Absolutely! Digital transformation is one of our core services. We help businesses modernize their processes, adopt new technologies, and create digital-first strategies. Our approach includes assessment, strategy development, implementation, and change management to ensure successful transformation.',
      category: 'services',
      tags: ['digital-transformation', 'modernization', 'strategy']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const popularQuestions = faqs.filter(faq => 
    faq.tags.includes('getting-started') || 
    faq.tags.includes('services') || 
    faq.tags.includes('pricing')
  );

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about our services, pricing, support, and more. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical questions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import { Plus, Minus, HelpCircle, Search } from 'lucide-react';
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, and micro SaaS solutions. Our services include machine learning, natural language processing, cloud infrastructure, and custom software development."
      },
      {
        question: "How can I get started with your services?",
        answer: "You can get started by contacting us through our website, calling us at +1 302 464 0950, or emailing us at kleber@ziontechgroup.com. We'll schedule a consultation to discuss your specific needs."
      },
      {
        question: "Do you offer custom solutions?",
        answer: "Yes, we specialize in creating custom solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop the perfect solution."
      }
    ]
  },
  {
    category: "AI Services",
    questions: [
      {
        question: "What AI technologies do you work with?",
        answer: "We work with a wide range of AI technologies including machine learning, natural language processing, computer vision, deep learning, and generative AI. We stay up-to-date with the latest advancements in AI."
      },
      {
        question: "How long does it take to develop an AI solution?",
        answer: "The timeline depends on the complexity of the project. Simple AI solutions can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our consultation."
      },
      {
        question: "Do you provide AI training and support?",
        answer: "Yes, we provide comprehensive training and ongoing support for all our AI solutions. This includes user training, documentation, and technical support to ensure successful implementation."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including project-based pricing, hourly rates, and subscription plans. Our pricing depends on the scope and complexity of the project. Contact us for a detailed quote."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget and project timeline."
      },
      {
        question: "Is there a free consultation?",
        answer: "Yes, we offer free initial consultations to discuss your project requirements and provide recommendations. This helps us understand your needs and provide accurate pricing."
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer: "We provide comprehensive support including 24/7 technical support, regular maintenance, updates, and training. Our support team is always available to help with any issues or questions."
      },
      {
        question: "How do I contact support?",
        answer: "You can contact our support team through email at kleber@ziontechgroup.com, phone at +1 302 464 0950, or through our online support portal. We typically respond within 24 hours."
      },
      {
        question: "Do you provide documentation?",
        answer: "Yes, we provide comprehensive documentation for all our solutions including user guides, API documentation, and technical specifications. All documentation is regularly updated."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Layout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about our AI services, IT solutions, pricing, and support. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, AI services, IT support, pricing, help"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
=======
              initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, support, and more. 
                Can't find what you're looking for? Contact us directly.
              </p>
=======
                Frequently Asked <span className="text-blue-600">Questions</span>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact us directly.
              </p>
<<<<<<< HEAD
=======
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Find Your Answer
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Search through our frequently asked questions or browse by category.
                </p>
              </motion.div>

              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for questions, topics, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Popular Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here are the most commonly asked questions from our clients.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {popularQuestions.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {expandedItems.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedItems.has(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200"
                        >
                          <div className="p-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
=======
        {/* FAQ Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqs.map((section, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    {section.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.questions.map((faq, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div
                          key={questionIndex}
                          className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-lg font-semibold text-gray-900">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. Contact us directly for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call: +1 302 464 0950
                </a>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
              </div>
            </motion.div>
          </div>
        </section>

        {/* All FAQ Questions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse through all our frequently asked questions organized by category.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {faq.question}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full mr-2">
                              {categories.find(c => c.id === faq.category)?.name}
                            </span>
                            <span>{faq.tags.join(', ')}</span>
                          </div>
                        </div>
                        {expandedItems.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedItems.has(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200"
                        >
                          <div className="p-6">
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
                  className="text-center py-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or contact us directly.</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. 
                Contact us directly and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/help"
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  Visit Help Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Have more questions or ready to begin your project? 
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </Layout>
=======
<<<<<<< HEAD
    </MainLayout>
=======
    </>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
  );
}