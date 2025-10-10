'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.',
      category: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions.',
      category: 'training'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.',
      category: 'customization'
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We typically respond to support requests within 24 hours, with priority support available for enterprise customers.',
      category: 'support'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@ziontechgroup.com',
      availability: '24/7 response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group - Technical Support & Help Center</title>
        <meta name="description" content="Get expert technical support for your AI and IT solutions. Contact our support team, access knowledge base, and get help when you need it." />
        <meta name="keywords" content="technical support, help center, customer support, AI support, IT support, troubleshooting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technical Support
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get expert help and support for your AI and IT solutions. Our team is here to ensure your success.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Support Channels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is ready to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;