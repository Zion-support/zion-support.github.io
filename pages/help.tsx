import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video,
  FileText, 
  Users, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer AI services, IT services, cloud platforms, cybersecurity, data analytics, and custom software development solutions."
    },
    {
      question: "How do I get started with your services?",
      answer: "You can contact us through our contact form, schedule a consultation, or call us directly at +1 302 464 0950."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support for critical issues and have live chat available around the clock."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including AWS, Azure, Google Cloud, React, Node.js, Python, and many others."
    },
    {
      question: "Do you provide cloud migration services?",
      answer: "Yes, we specialize in cloud migration and can help you move your infrastructure to AWS, Azure, or Google Cloud."
    },
    {
      question: "What is your response time for technical issues?",
      answer: "We respond to critical issues within 2 minutes via live chat and within 4 hours via email."
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      href: '/contact'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed assistance via email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and remote assistance',
      href: '/contact'
    }
  ];

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="help, support, FAQ, customer service, technical support" />
      </Head>

      <ModernHeader />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help & Support Center
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Find answers to your questions and get the support you need
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or solutions..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <Link
                  key={index}
                  href={option.href}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                      <option.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                  </div>
                  <p className="text-gray-600">{option.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or issues
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}