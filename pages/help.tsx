import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, MessageCircle, Phone, Mail, FileText, Video, Book, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Help: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
        },
        {
          question: 'What information do I need to provide for a project quote?',
          answer: 'We\'ll need details about your project requirements, timeline, budget, and any specific technologies or features you\'re looking for. The more information you provide, the more accurate our quote will be.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary depending on complexity and scope. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months. We\'ll provide a detailed timeline during our consultation.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: FileText,
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, and many others. Our team stays current with the latest technologies and best practices.'
        },
        {
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes! We offer comprehensive maintenance and support packages to ensure your systems continue to run smoothly and stay up-to-date with the latest security patches and improvements.'
        },
        {
          question: 'Can you help with existing systems?',
          answer: 'Absolutely! We can help modernize, optimize, or integrate with your existing systems. Our team has experience working with legacy systems and can provide migration or integration solutions.'
        }
      ]
    },
    {
      title: 'Billing & Payments',
      icon: Users,
      questions: [
        {
          question: 'What are your payment terms?',
          answer: 'Payment terms vary by project type and size. We typically require a deposit to begin work, with milestone payments throughout the project. We accept various payment methods including credit cards, bank transfers, and checks.'
        },
        {
          question: 'Do you offer flexible pricing options?',
          answer: 'Yes! We offer various pricing models including fixed-price projects, hourly rates, and retainer agreements. We\'ll work with you to find the pricing structure that best fits your budget and needs.'
        },
        {
          question: 'What happens if I need to make changes to the project?',
          answer: 'We understand that requirements can change during development. We have a change management process in place to handle scope changes while keeping the project on track and within budget.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      available: 'Available 24/7'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      action: 'Call Now',
      available: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and we\'ll respond quickly',
      action: 'Send Email',
      available: 'Response within 24 hours'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Schedule a screen sharing session',
      action: 'Schedule Call',
      available: 'By appointment'
    }
  ];

  const popularArticles = [
    'How to prepare for a software development project',
    'Understanding cloud migration benefits',
    'AI implementation best practices',
    'Website performance optimization guide',
    'Cybersecurity checklist for small businesses',
    'Mobile app development process overview'
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access helpful resources."
      keywords="help center, support, FAQ, customer service, technical support"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Help
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Center</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to your questions, get technical support, and access helpful resources 
            to make the most of your Zion Tech Group experience.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support option that works best for you. Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500 mb-4">{option.available}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  {option.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our most helpful articles and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article}</h3>
                <p className="text-gray-600 text-sm">Read our comprehensive guide on this topic...</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg"
            >
              Contact Support
            </a>
            <a 
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;