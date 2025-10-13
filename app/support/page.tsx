import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Right, Circle, MessageCircle, Mail, Phone, BookOpen } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 24 hours',
      action: 'Send Email',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance during business hours',
      action: 'Call Now',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Browse our comprehensive knowledge base and guides',
      action: 'View Docs',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours during business days. For urgent issues, we provide phone support during business hours.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support for our enterprise clients. Our support team is available around the clock to ensure your systems are always running smoothly.'
    },
    {
      question: 'Can I schedule a consultation?',
      answer: 'Absolutely! You can schedule a free consultation through our contact form or by calling us directly. We\'ll discuss your requirements and provide recommendations.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in AI/ML solutions, cloud infrastructure, cybersecurity, digital transformation, and custom software development using the latest technologies.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training for all our solutions. This includes documentation, video tutorials, and hands-on training sessions for your team.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Contact our support team, browse documentation, or schedule a consultation." />
        <meta name="keywords" content="support, help, contact, documentation, technical support, customer service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Help You?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our dedicated support team is here to help you succeed with our AI and IT solutions. 
              Choose the support option that works best for you.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{option.description}</p>
                  <button className={`bg-gradient-to-r ${option.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    {option.action}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">support@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">24/7 Response</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300">Available Now</p>
                <p className="text-gray-400 text-sm">Instant Support</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Us
                <Right className="w-5 h-5" />
              </Link>
              <Link
                to="/tutorials"
                className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Tutorials
                <Right className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;