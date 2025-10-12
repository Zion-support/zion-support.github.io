import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MessageCircle, Book, HelpCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SupportPage() {
  const supportOptions = [
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: 'Phone Support',
      description: 'Speak with our support team directly',
      contact: '+1 (302) 464-0950'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available 24/7'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'You can get started by contacting our sales team or filling out our contact form. We\'ll schedule a consultation to understand your needs.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We typically respond to support requests within 24 hours. For urgent issues, please call our phone support line.'
    },
    {
      question: 'Do you offer training for your AI services?',
      answer: 'Yes, we provide comprehensive training and onboarding for all our AI services to ensure you get the most value from our solutions.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time. We offer flexible billing options to meet your needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Contact our support team via email, phone, or live chat." />
        <meta name="keywords" content="support, help, customer service, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Support Center
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed with our services. Get the support you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {option.title}
                </h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <p className="text-purple-400 font-medium">{option.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Contact our support team and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/docs" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}