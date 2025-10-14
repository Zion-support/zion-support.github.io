import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Get detailed assistance via email',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business Hours',
      responseTime: 'Within 5 minutes'
    },
    {
      icon: DocumentTextIcon,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'Self-service',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Simply contact us through any of our support channels, and our team will guide you through the onboarding process.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We guarantee response times: Phone support is immediate, email within 2 hours, and live chat within 5 minutes during business hours.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 phone and email support for all our clients. Live chat is available during business hours.'
    },
    {
      question: 'How can I track my support ticket?',
      answer: 'Once you submit a support request, you\'ll receive a ticket number that you can use to track the status of your request.'
    },
    {
      question: 'What if I need emergency support?',
      answer: 'For critical issues, call our emergency hotline at +1 (302) 464-0950. Our team will prioritize your request immediately.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get 24/7 support for all your technology needs. Contact our expert team via phone, email, or live chat." />
        <meta name="keywords" content="support, help desk, technical support, customer service, 24/7 support" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get 24/7 support for all your technology needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <QuestionMarkCircleIcon className="w-16 h-16 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
                Support Center
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">24/7</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get 24/7 support for all your technology needs. Our expert team is here to help you succeed.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 gradient-text">
                How Can We Help?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportOptions.map((option, index) => (
                  <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <option.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                    <p className="text-gray-300 mb-6">{option.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="font-semibold mr-2">Contact:</span>
                        <span className="text-white">{option.contact}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="font-semibold mr-2">Availability:</span>
                        <span className="text-green-400">{option.availability}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="font-semibold mr-2">Response Time:</span>
                        <span className="text-cyan-400">{option.responseTime}</span>
                      </div>
                    </div>
                    <Link 
                      to="/contact"
                      className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect"
                    >
                      Get Support <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 gradient-text">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <QuestionMarkCircleIcon className="w-6 h-6 text-purple-400 mr-3" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 ml-9">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Contact Support
              </Link>
              <a 
                href="tel:+13024640950"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;