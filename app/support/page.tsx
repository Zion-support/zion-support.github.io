import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      title: 'Email Support',
      description: 'Get help via email with detailed responses within 24 hours.',
      contact: 'support@ziontechgroup.com',
      responseTime: '24 hours',
      availability: '24/7'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts for immediate assistance.',
      contact: '(302) 464-0950',
      responseTime: 'Immediate',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time for quick questions.',
      contact: 'Available on website',
      responseTime: 'Immediate',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation for self-service.',
      contact: 'docs.ziontechgroup.com',
      responseTime: 'Immediate',
      availability: '24/7'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes! We offer comprehensive support packages including monitoring, maintenance, updates, and 24/7 technical support to ensure your AI solutions continue to perform optimally.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We maintain SOC 2 Type II compliance, implement end-to-end encryption, and follow industry best practices for data protection and security.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure, whether it\'s on-premises, cloud-based, or hybrid environments.'
    },
    {
      question: 'What if I need to scale my AI solution?',
      answer: 'Our solutions are built to scale with your business. We provide flexible scaling options and can adjust resources as your needs grow.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help! Get the support you need to make the most of our AI and IT solutions.
          </p>
        </div>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <div className="text-sm text-gray-400 mb-2">
                  <strong>Contact:</strong> {option.contact}
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  <strong>Response:</strong> {option.responseTime}
                </div>
                <div className="text-sm text-gray-400">
                  <strong>Available:</strong> {option.availability}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  {item.question}
                </h3>
                <p className="text-gray-300 ml-8">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our expert team is ready to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
