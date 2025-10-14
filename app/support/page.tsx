import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group support page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>
          <p className="text-xl text-gray-600">
            Welcome to our support page.
          </p>
        </div>
=======
import { Link } from 'react-router-dom';
import { ArrowRight, Circle, Phone, Mail, MessageCircle, FileText, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 4 hours'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Simply contact our sales team through the contact form or schedule a consultation. We\'ll assess your needs and provide a customized solution.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 2 hours during business hours and within 24 hours for urgent issues outside business hours.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support for critical issues and our live chat is available around the clock for immediate assistance.'
    },
    {
      question: 'Can I schedule a technical consultation?',
      answer: 'Absolutely! You can schedule a technical consultation with our experts to discuss your specific requirements and get personalized recommendations.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI, cloud, and cybersecurity solutions." />
        <meta name="keywords" content="support, help, technical support, customer service, documentation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We're here to help you succeed. Get the support you need with our 
                comprehensive help resources and expert assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors text-center group">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <option.icon className="w-12 h-12 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {option.availability}
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {option.responseTime}
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Get Started
                    <Right className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and support
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is ready to help you 
                with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Contact Support
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SupportPage;
=======
export default SupportPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
