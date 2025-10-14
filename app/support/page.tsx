import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle, MessageCircle, Phone, Mail, BookOpen, Headphones } from 'lucide-react';

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
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation',
      action: 'Browse Docs',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We typically respond to support requests within 24 hours. For urgent issues, our live chat and phone support are available during business hours for immediate assistance.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support for our enterprise clients. Our support team is always available to help with critical issues and ensure your systems run smoothly.'
    },
    {
      question: 'Can I schedule a demo of your services?',
      answer: 'Absolutely! We offer personalized demos to show you how our solutions can benefit your business. You can schedule a demo through our contact form or by calling us directly.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in AI and machine learning, cloud computing, data analytics, web development, mobile apps, and cybersecurity. Our team stays updated with the latest technologies and best practices.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training for all our solutions. This includes documentation, video tutorials, and hands-on training sessions to ensure your team can effectively use our tools.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Get Help & Assistance | Zion Tech Group</title>
        <meta name="description" content="Get support for Zion Tech Group's AI and IT solutions. Live chat, phone support, email assistance, and comprehensive documentation." />
        <meta name="keywords" content="support, help, assistance, live chat, phone support, documentation, FAQ, customer service" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Support
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need through our multiple channels.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                    <p className="text-gray-300 mb-6">{option.description}</p>
                    <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                      {option.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services and support.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+15551234567"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;