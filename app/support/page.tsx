import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Mail, Phone, BookOpen, Clock, Shield, Users } from 'lucide-react';

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
      description: 'Speak directly with our technical experts',
      action: 'Call Now',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Browse our comprehensive knowledge base',
      action: 'View Docs',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for non-urgent requests.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 emergency support for critical issues. Standard support is available Monday-Friday 9AM-6PM PST.'
    },
    {
      question: 'What types of support do you provide?',
      answer: 'We provide technical support, implementation assistance, troubleshooting, training, and consultation for all our AI and IT solutions.'
    },
    {
      question: 'Is there a cost for support?',
      answer: 'Basic support is included with all our services. Premium support plans are available for enhanced response times and dedicated resources.'
    },
    {
      question: 'How do I escalate a support issue?',
      answer: 'You can escalate issues through our support portal, by calling our priority support line, or by contacting your account manager directly.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we offer comprehensive training programs including online tutorials, documentation, webinars, and hands-on workshops.'
    }
  ];

  const supportStats = [
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 2 hours',
      description: 'Average response time'
    },
    {
      icon: Shield,
      title: 'Uptime',
      value: '99.9%',
      description: 'Service availability'
    },
    {
      icon: Users,
      title: 'Expert Team',
      value: '50+',
      description: 'Support specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Get Help | Zion Tech Group</title>
        <meta name="description" content="Get comprehensive support for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />
        <meta name="keywords" content="support, help, technical support, AI support, IT support, documentation, troubleshooting" />
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
              We're here to help you succeed. Get the support you need with our comprehensive help resources and expert assistance.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              How Can We Help You?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{option.description}</p>
                    <button className={`w-full bg-gradient-to-r ${option.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}>
                      {option.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Stats */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Support Performance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {supportStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-cyan-400 mb-1">{stat.title}</div>
                    <div className="text-gray-300 text-sm">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;