'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageCircle, FileText, HelpCircle, Clock, CheckCircle, ChevronDown, ChevronUp, ArrowRight, Users, Shield, Star } from 'lucide-react';

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
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish. We provide detailed project plans with milestones and regular updates.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes, we offer comprehensive training programs for your team including hands-on workshops, documentation, and ongoing support to ensure successful implementation and adoption.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern development stacks. Our team stays current with the latest technologies and best practices.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards. All data is handled according to strict security protocols and privacy regulations.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for critical issues',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond quickly',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'docs.ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Self-service'
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'Essential support for small businesses',
      features: [
        'Email support',
        'Business hours response',
        'Basic documentation',
        'Community forum access'
      ],
      price: 'Included',
      icon: CheckCircle
    },
    {
      name: 'Professional Support',
      description: 'Enhanced support for growing businesses',
      features: [
        'Priority email support',
        'Phone support',
        'Extended hours',
        'Advanced documentation',
        'Video tutorials'
      ],
      price: '$99/month',
      icon: Star,
      popular: true
    },
    {
      name: 'Enterprise Support',
      description: 'Comprehensive support for large organizations',
      features: [
        '24/7 phone support',
        'Dedicated account manager',
        'Custom documentation',
        'On-site training',
        'SLA guarantees'
      ],
      price: 'Custom',
      icon: Shield
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions, contact our support team, and access our knowledge base." />
        <meta name="keywords" content="support, help, customer service, FAQ, documentation, technical support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get help and support for our AI and IT solutions. Find answers to common questions, contact our support team, and access our knowledge base.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <channel.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-sm text-gray-500 mb-2">
                    <strong>Contact:</strong> {channel.contact}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    <strong>Availability:</strong> {channel.availability}
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Response Time:</strong> {channel.responseTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Find answers to common questions about our services and solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cyan-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-600" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the support plan that fits your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <tier.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold text-cyan-600">{tier.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {tier.price === 'Included' ? 'Included' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our support team and we'll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default SupportPage;