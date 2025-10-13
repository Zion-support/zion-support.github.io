import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, Mail, Phone, MessageCircle, Book, Video, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage = () => {
  const supportOptions = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      icon: <Mail className="w-8 h-8" />,
      responseTime: 'Within 24 hours',
      availability: '24/7',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: <MessageCircle className="w-8 h-8" />,
      responseTime: 'Immediate',
      availability: '9 AM - 6 PM EST',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: <Phone className="w-8 h-8" />,
      responseTime: 'Immediate',
      availability: '9 AM - 6 PM EST',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Call',
      description: 'Screen sharing and video consultation',
      icon: <Video className="w-8 h-8" />,
      responseTime: 'Scheduled',
      availability: 'By appointment',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply sign up for a free trial, and our team will guide you through the setup process. We also offer personalized onboarding sessions to help you get the most out of our platform.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including email, live chat, phone, and video consultations. Our support team is available 24/7 for critical issues and during business hours for general inquiries.'
    },
    {
      question: 'How quickly can I expect a response?',
      answer: 'Response times vary by support channel: Live chat and phone support provide immediate assistance, email support typically responds within 24 hours, and video consultations can be scheduled within 1-2 business days.'
    },
    {
      question: 'Do you offer training for your products?',
      answer: 'Yes! We provide comprehensive training including documentation, video tutorials, webinars, and personalized training sessions. Our team will ensure your team is fully equipped to use our solutions effectively.'
    },
    {
      question: 'What if I need custom integrations?',
      answer: 'Our technical team can help with custom integrations and configurations. We offer professional services to ensure our solutions work seamlessly with your existing systems and workflows.'
    },
    {
      question: 'Is there a knowledge base or documentation?',
      answer: 'Absolutely! We maintain a comprehensive knowledge base with detailed documentation, step-by-step guides, API references, and troubleshooting articles. You can access it anytime through our support portal.'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: <Book className="w-6 h-6" />,
      href: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <Video className="w-6 h-6" />,
      href: '/tutorials'
    },
    {
      title: 'Webinars',
      description: 'Live training sessions and Q&A',
      icon: <Users className="w-6 h-6" />,
      href: '/webinars'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: <MessageCircle className="w-6 h-6" />,
      href: '/community'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Get Help with Our AI Solutions</title>
        <meta name="description" content="Get comprehensive support for our AI solutions and micro SAAS products. 24/7 support, documentation, training, and expert assistance." />
        <meta name="keywords" content="support, help, AI support, technical support, customer service, documentation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              We're Here to Help
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Get the support you need to succeed with our AI solutions. Our expert team is ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/docs"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              <Book className="w-5 h-5 mr-2" />
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{option.title}</h3>
                <p className="text-gray-300 text-sm text-center mb-4">{option.description}</p>
                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {option.responseTime}
                  </div>
                  <div className="text-sm text-cyan-400">{option.availability}</div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                  Get Help
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our support services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Self-Service Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive knowledge base and learning materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.href}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our support team is standing by to assist you. Don't hesitate to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">support@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Live Chat</h3>
              <p className="text-cyan-400">Available 9 AM - 6 PM EST</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Video className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;