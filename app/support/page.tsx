'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Search, FileText, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri: 9AM-6PM EST',
      icon: <Phone className="w-8 h-8" />,
      priority: 'High'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get written responses',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7 response within 4 hours',
      icon: <Mail className="w-8 h-8" />,
      priority: 'Medium'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      icon: <MessageCircle className="w-8 h-8" />,
      priority: 'High'
    }
  ];

  const faqCategories = [
    {
      title: 'AI Services',
      questions: [
        {
          question: 'How do I get started with AI services?',
          answer: 'Contact our team for a free consultation to assess your needs and create a customized AI strategy.'
        },
        {
          question: 'What AI technologies do you support?',
          answer: 'We support machine learning, natural language processing, computer vision, and predictive analytics.'
        },
        {
          question: 'How long does AI implementation take?',
          answer: 'Implementation timelines vary from 2-12 weeks depending on complexity and scope of the project.'
        }
      ]
    },
    {
      title: 'IT Services',
      questions: [
        {
          question: 'Do you provide 24/7 support?',
          answer: 'Yes, we offer 24/7 emergency support for critical issues and standard business hours for general inquiries.'
        },
        {
          question: 'What cloud platforms do you work with?',
          answer: 'We work with AWS, Azure, Google Cloud, and other major cloud providers.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, and compliance monitoring.'
        }
      ]
    },
    {
      title: 'Micro SaaS',
      questions: [
        {
          question: 'Can I try micro SaaS tools before purchasing?',
          answer: 'Yes, all our micro SaaS tools offer free trials with no credit card required.'
        },
        {
          question: 'Do you provide training for micro SaaS tools?',
          answer: 'Yes, we provide comprehensive training, documentation, and video tutorials for all our tools.'
        },
        {
          question: 'Can micro SaaS tools be customized?',
          answer: 'Absolutely! We offer customization options to fit your specific business requirements.'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: <FileText className="w-6 h-6" />,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <Zap className="w-6 h-6" />,
      link: '/tutorials'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: <Users className="w-6 h-6" />,
      link: '/community'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group - 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all Zion Tech Group services. Phone, email, and chat support available. Expert help when you need it." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, IT support, 24/7 support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert help when you need it. Our support team is here 24/7 to assist you with any questions or issues.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="mb-4">
                    <p className="text-cyan-400 font-medium">{channel.contact}</p>
                    <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    channel.priority === 'High' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {channel.priority} Priority
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {faqCategories.map((category, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-white/10 pb-4 last:border-b-0">
                        <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                        <p className="text-gray-300 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is ready to help you with any questions or issues. 
                Contact us through any of our support channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;