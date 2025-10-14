import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
  const [searchQuery, setSearchQuery] = useState('');

import React, { useState } from 'react';
import { Helmet  } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap, MessageSquare  } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC  = () => {

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.',
      category: 'Support'
    },
    {
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards.',
      category: 'Security'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions.'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1-302-464-0950',
      availability: '24/7'
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire implementation process.',
      category: 'Getting Started'
'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Video, BookOpen, Headphones } from 'lucide-react'

const SupportPage: React.FC  = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const faqs = [
    {
      category: 'General',
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Contact us through our consultation page or call us directly. We\'ll schedule a free initial consultation to understand your needs and recommend the best solutions.'
    },
    {
      category: 'Technical',
      question: 'What technical support do you provide?',
      answer: 'We provide 24/7 technical support for all our services. Our support team includes certified engineers who can help with implementation, troubleshooting, and optimization.'
    },
    {
      category: 'Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise clients. All payments are processed securely through our encrypted payment system.'
    },
    {
      category: 'Technical',
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions. Training is included with all our service plans.'
    },
    {
      category: 'General',
      question: 'Can I customize your solutions for my specific needs?',
      answer: 'Absolutely! All our solutions are designed to be customizable. Our team works closely with you to tailor solutions that meet your specific business requirements and objectives.'
    },
    {
      category: 'Technical',
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. We have redundant systems and monitoring in place to ensure maximum availability and quick recovery from any issues.'
    }
  ]

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern development stacks.'
    };
  ];
  const supportChannels = [
    {
  return (
    <div className="min-h-screen pt-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="text-cyan-400">Support</span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Get help and support for our AI and IT solutions.
          </p>
                </div>
      </div>
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for critical issues'
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 302 464 0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
      description: 'Send us an email and we\'ll respond quickly',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Knowledge Base',
      description: 'Browse our documentation',
      contact: 'Self-service resources',
      availability: 'Available 24/7'
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Immediate'
    }
  ]

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    }
  ]

      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                {/* Hero Section */}
                <section className="relative py-20 px-4 overflow-hidden"></section>
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Technical
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
                Support
              </span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Get expert help and support for your AI and IT solutions. 
              Our team is here to ensure your success.
            </p>
    <div className="min-h-screen bg-gray-50"></div>
      <Helmet></Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, contact support, and access resources." />
        <meta name="keywords" content="support, help, documentation, FAQ, contact support, technical support" />
      </Helmet>
  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span> Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              We're here to help! Get the support you need with our comprehensive help center and dedicated support team.
            </p>
                </div>
        </div>
                </section>
                {/* Search Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="cyber-card"></div>
            <div className="text-center mb-8"></div>
              <h2 className="text-2xl font-bold text-white mb-4">How can we help you?</h2>
              <p className="text-gray-300">Search our knowledge base or contact our support team</p>
                </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6"></div>
              <div className="flex-1 relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Categories</option>
                <option value="General">General</option>
                <option value="Technical">Technical</option>
                <option value="Billing">Billing</option>
                </select>
            </div>
                </div>
        </div>
                </section>
                {/* Support Channels */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300"></p>
              Choose the support channel that works best for you.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
              ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h3>
                {channel.title}
                </h3>
                <p className="text-gray-300 mb-4"></p>
                {channel.description}
                </p>
                <div className="text-cyan-400 font-semibold mb-2"></div>
                {channel.contact}
                </div>
                <div className="text-sm text-gray-400"></div>
                  <div>Available: {channel.availability}
                </div>
                  <div>Response: {channel.responseTime}
                </div>
                </div>
              </div>
            ))}
                </div>
                </div>
      </section>
                </div>
        </div>
                </section>
                {/* Support Hours */}
                <section className="py-16 px-4"></section>
        </section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"></div>
              <div className="text-center mb-8"></div>
                <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>
                <p className="text-xl text-gray-300">We're here when you need us</p>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
                <div></div>
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>
                  <p className="text-gray-300">24/7 for critical issues</p>
                  <p className="text-gray-300">Emergency support included</p>
                </div>
                <div></div>
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            ))
          </div>
                </section>
      </div>
      
      <Footer />
                {/* FAQ Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300"></p>
              Find answers to common questions about our services.
            </p>
                </div>
          
          <div className="space-y-6"></div>
                {filteredFaqs.map((faq, index) => (
              <div key={index} className="cyber-card"></div>
                <div className="flex items-start justify-between"></div>
                  <div className="flex-1"></div>
                    <div className="flex items-center mb-2"></div>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3"></span>
                {faq.category}
                </span>
                </div>
                    <h3 className="text-lg font-semibold text-white mb-3"></h3>
                {faq.question}
                </h3>
                    <p className="text-gray-300"></p>
                {faq.answer}
                </p>
                </div>
                </div>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Resources Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-300"></p>
              Access our comprehensive library of resources and guides.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {resources.map((resource, index) => (
              <div key={index} className="cyber-card text-center group hover:bg-white/20 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h3>
                {resource.title}
                </h3>
                <p className="text-gray-300 mb-4"></p>
                {resource.description}
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center mx-auto group-hover:translate-x-1 transition-transform"></button>
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                </div>
            ))}
                </div>
                </div>
      </section>
                </div>
  );
};

      {/* FAQ Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"></div>
              <h3 className="text-lg font-semibold text-white mb-2">How do I get started?</h3>
              <p className="text-gray-300">Simply contact us through any of our support channels and we'll guide you through the setup process.</p>
                </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"></div>
              <h3 className="text-lg font-semibold text-white mb-2">What are your business hours?</h3>
              <p className="text-gray-300">We provide 24/7 support through our live chat and email systems. Phone support is available during business hours.</p>
                </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"></div>
              <h3 className="text-lg font-semibold text-white mb-2">How quickly can you resolve issues?</h3>
              <p className="text-gray-300">Most issues are resolved within 24 hours, with critical issues receiving immediate attention.</p>
                </div>
                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="cyber-button"></button>
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </button>
            <button className="cyber-button-secondary"></button>
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </button>
                </div>
        </div>
                </section>

      <Footer />
    </div>
  )
}

export default SupportPage
