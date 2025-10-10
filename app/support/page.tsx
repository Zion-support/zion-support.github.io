'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Users, Shield, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '(302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      color: 'text-blue-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      color: 'text-green-400'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      color: 'text-purple-400'
    }
  ];

  const faqs = [
    {
      question: 'How do I get technical support?',
      answer: 'You can reach our technical support team through phone, email, or live chat. We provide 24/7 email support and business hours phone/chat support.'
    },
    {
      question: 'What is your response time?',
      answer: 'We aim to respond to all inquiries within 2 hours during business hours. For urgent issues, please call our phone support line.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we offer comprehensive training programs for all our solutions, including documentation, video tutorials, and live training sessions.'
    },
    {
      question: 'How do I report a bug or issue?',
      answer: 'You can report bugs through our support channels or use the bug reporting form in your dashboard. Please include as much detail as possible.'
    },
    {
      question: 'What if I need custom development?',
      answer: 'We offer custom development services. Contact our sales team to discuss your requirements and get a quote for custom solutions.'
    },
    {
      question: 'How do I upgrade my plan?',
      answer: 'You can upgrade your plan through your account dashboard or contact our sales team for assistance with enterprise plans.'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support for critical issues'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced technical professionals'
    },
    {
      icon: Shield,
      title: 'Secure Support',
      description: 'Your data and privacy are protected'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Quick resolution of your issues'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all your technology needs. Our expert team is here to assist you 24/7." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for all your technology needs. Our expert team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-300">Choose the support channel that works best for you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className={`text-lg font-semibold mb-2 ${channel.color}`}>{channel.contact}</div>
                  <div className="text-sm text-gray-400">{channel.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Support?</h2>
              <p className="text-xl text-gray-300">We provide comprehensive support for all your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;