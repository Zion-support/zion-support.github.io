import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const faqCategories = [
  {
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        question: 'What services does Zion Tech Group offer?',
        answer: 'We offer comprehensive AI services, IT solutions, and micro SAAS products including machine learning, cloud migration, cybersecurity, and custom software development.'
      },
      {
        question: 'How can I get started with your services?',
        answer: 'Contact us through our website, call us at +1 302 464 0950, or email kleber@ziontechgroup.com to discuss your needs and get a personalized quote.'
      },
      {
        question: 'Do you offer 24/7 support?',
        answer: 'Yes, we provide 24/7 technical support for all our services to ensure your systems run smoothly around the clock.'
      }
    ]
  },
  {
    title: 'AI Services',
    icon: MessageSquare,
    questions: [
      {
        question: 'What AI technologies do you specialize in?',
        answer: 'We specialize in machine learning, natural language processing, computer vision, predictive analytics, and custom AI model development.'
      },
      {
        question: 'How long does AI implementation take?',
        answer: 'Implementation timelines vary based on complexity, typically ranging from 2-12 weeks for most AI solutions.'
      }
    ]
  },
  {
    title: 'IT Services',
    icon: Clock,
    questions: [
      {
        question: 'Do you provide cloud migration services?',
        answer: 'Yes, we offer comprehensive cloud migration services for AWS, Azure, and Google Cloud platforms with minimal downtime.'
      },
      {
        question: 'What cybersecurity services do you offer?',
        answer: 'Our cybersecurity services include threat detection, vulnerability assessments, security audits, incident response, and compliance management.'
      }
    ]
  }
];

export default function HelpPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to frequently asked questions and contact our support team." />
        <meta name="keywords" content="help, support, FAQ, contact, Zion Tech Group, AI services, IT services" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Help & Support
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Find answers to your questions and get the support you need
              </motion.p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <category.icon className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        {openCategory === category.title ? (
                          <ChevronDown className="w-5 h-5 text-gray-500 ml-auto" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500 ml-auto" />
                        )}
                      </div>
                    </button>
                    
                    {openCategory === category.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-4">
                          {category.questions.map((faq, faqIndex) => (
                            <div key={faqIndex} className="border-l-4 border-blue-500 pl-4">
                              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact our support team for personalized assistance
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/ai-services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}