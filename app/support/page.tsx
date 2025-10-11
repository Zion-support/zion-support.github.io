'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1-302-464-0950',
      hours: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@ziontechgroup.com',
      hours: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan. We\'ll guide you through every step of the process.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish. We provide detailed project timelines during the consultation phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive ongoing support including monitoring, maintenance, updates, and 24/7 technical assistance. Our support plans are tailored to your specific needs.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including Python, TensorFlow, PyTorch, React, Node.js, AWS, Azure, GCP, and many more. We choose the best technology stack for your specific requirements.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'Data security is our top priority. We implement industry-standard security measures including encryption, secure data transmission, access controls, and compliance with GDPR, HIPAA, and other regulations.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in integrating our solutions with existing systems. We work with your current infrastructure to ensure seamless integration and minimal disruption to your operations.'
    },
    {
      question: 'What if I need changes after implementation?',
      answer: 'We understand that business needs evolve. We offer flexible maintenance and update services to accommodate changes and improvements to your AI solutions as your business grows.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs to help your team understand and effectively use the AI solutions we implement. Training can be conducted on-site or remotely.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get the support you need from our expert team through multiple channels.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300">Choose the support channel that works best for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{channel.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className="text-cyan-400 font-semibold mb-2">{channel.contact}</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <p>Hours: {channel.hours}</p>
                  <p>Response: {channel.responseTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 mb-8">Find answers to common questions about our services.</p>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Can't find what you're looking for? Our support team is ready to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;