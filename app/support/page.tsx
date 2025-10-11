'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle, ArrowRight, Clock, CheckCircle, Users, Shield } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or schedule a free consultation. We\'ll assess your needs and create a customized plan for your business.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We provide comprehensive support including email support, phone support, and dedicated account management for enterprise clients. Our support team is available 24/7 for critical issues.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple AI integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our consultation.'
    },
    {
      question: 'Do you offer training?',
      answer: 'Yes! We provide comprehensive training for your team on all our solutions. This includes hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our tools.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 2 hours during business hours. For critical issues, we provide immediate response and resolution within 4 hours.'
    },
    {
      question: 'Do you provide documentation and resources?',
      answer: 'Yes, we provide comprehensive documentation, API references, and video tutorials for all our solutions. Our knowledge base is regularly updated with the latest information and best practices.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for critical issues'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Get help quickly with our 2-hour response guarantee'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our support team consists of certified AI and IT professionals'
    },
    {
      icon: Shield,
      title: 'Secure Support',
      description: 'All support interactions are encrypted and secure'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Resolution',
      description: 'We ensure your issues are resolved to your satisfaction'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Help</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need with our comprehensive help resources and expert assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Choose the support channel that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
                <div className="text-sm text-gray-400">{channel.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Support?
            </h2>
            <p className="text-xl text-gray-300">
              We provide exceptional support to ensure your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Contact Support
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SupportPage;