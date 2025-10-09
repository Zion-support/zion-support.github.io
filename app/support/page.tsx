'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, Users, HelpCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: '24/7 Emergency Support',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your technical questions',
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-blue-400'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant support through our website chat',
      contact: 'Available on website',
      availability: 'Business hours (9 AM - 6 PM EST)',
      color: 'text-purple-400'
    }
  ];

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'We provide 24/7 emergency support for critical issues. Standard support is available Monday-Friday, 9 AM - 6 PM EST.'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'Emergency issues are addressed immediately. Standard support requests receive a response within 2 hours during business hours.'
    },
    {
      question: 'Do you provide remote support?',
      answer: 'Yes, we offer secure remote support for most technical issues. We use encrypted connections and require your permission before accessing your systems.'
    },
    {
      question: 'What types of issues can you help with?',
      answer: 'We provide support for all our services including AI solutions, cloud infrastructure, cybersecurity, and custom software development.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get technical support for all Zion Tech Group services. 24/7 emergency support, email support, and live chat available." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help you succeed. Get the support you need for all our services.
              </p>
            </div>

            {/* Support Options */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Get Support</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {supportOptions.map((option, index) => (
                  <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6`}>
                      <option.icon className={`w-8 h-8 ${option.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                    <p className="text-gray-300 mb-6">{option.description}</p>
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-cyan-400">{option.contact}</p>
                      <p className="text-sm text-gray-400">{option.availability}</p>
                    </div>
                    <button className="w-full cyber-button py-3 px-6 rounded-lg font-semibold">
                      Contact Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="cyber-card p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                      <HelpCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 ml-8">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 cyber-card">
                <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to assist you with any technical questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Support
                  </a>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SupportPage;