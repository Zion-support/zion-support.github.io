import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Right, Circle, MessageCircle, Mail, Phone, BookOpen, Clock, Shield, Zap } from 'lucide-react';

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
      question: 'What are your support hours?',
      answer: 'We provide 24/7 support for all our clients. Our technical team is always available to help you with any issues or questions.'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'We respond to critical issues within 1 hour, high priority issues within 4 hours, and general inquiries within 24 hours.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we offer comprehensive training programs for all our solutions, including online tutorials, documentation, and live training sessions.'
    },
    {
      question: 'What if I need custom development?',
      answer: 'Our team can provide custom development services to meet your specific requirements. Contact us to discuss your needs.'
    },
    {
      question: 'Do you offer maintenance and updates?',
      answer: 'Yes, we provide ongoing maintenance, updates, and security patches for all our solutions to ensure optimal performance.'
    },
    {
      question: 'How do I report a bug or issue?',
      answer: 'You can report bugs through our support portal, email, or live chat. We track all issues and provide regular updates on resolution status.'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support whenever you need it'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Secure and confidential support for all your needs'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Quick resolution times for all support requests'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get expert support for all your AI and IT solutions. 24/7 assistance from our technical team." />
        <meta name="keywords" content="support, help, technical assistance, AI support, IT support" />
        <link rel="canonical" href="/support" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need, when you need it. Our expert support team is here 
                to assist you with all your AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center text-white`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {option.description}
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                      {option.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Support?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're committed to providing exceptional support for all our clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our support services
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you 
                with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  Contact Support
                  <Right className="w-5 h-5 ml-2" />
                </Link>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;