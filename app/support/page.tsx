'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Search, FileText, Video, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate',
      contact: '+1 302 464 0950',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Video,
      title: 'Video Support',
      description: 'Schedule a video call for complex technical issues',
      availability: 'By appointment',
      responseTime: 'Within 2 hours',
      contact: 'Schedule Call',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'getting-started'
    },
    {
      id: 2,
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary based on complexity, but most projects are completed within 2-8 weeks. We provide detailed project plans during the consultation phase.',
      category: 'implementation'
    },
    {
      id: 3,
      question: 'Do you provide training for our team?',
      answer: 'Yes! We provide comprehensive training sessions for your team to ensure they can effectively use and maintain the solutions we implement.',
      category: 'training'
    },
    {
      id: 4,
      question: 'What kind of support do you offer after implementation?',
      answer: 'We offer 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems continue to perform at their best.',
      category: 'support'
    },
    {
      id: 5,
      question: 'Can your solutions integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure and software stack.',
      category: 'integration'
    },
    {
      id: 6,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards.',
      category: 'security'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: FileText,
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI services, IT solutions, and Micro SaaS tools. Our AI services include chatbots, analytics, computer vision, and automation. IT services cover cloud infrastructure, cybersecurity, DevOps, and custom development. Micro SaaS tools provide ready-to-use business applications.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'Getting started is easy! Contact us for a free consultation where we assess your needs and recommend the best solutions. You can call us at (302) 464-0950, email kleber@ziontechgroup.com, or fill out our contact form.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide free consultations for all potential clients. During the consultation, we assess your current setup, discuss your goals, and provide recommendations for AI and IT solutions that can help your business grow.'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: MessageSquare,
      questions: [
        {
          question: 'How long does it take to implement AI solutions?',
          answer: 'Implementation time varies based on complexity. Simple chatbots can be deployed in 2-4 weeks, while complex AI systems may take 3-6 months. We provide detailed timelines during the consultation phase.'
        },
        {
          question: 'Do I need technical expertise to use your AI tools?',
          answer: 'No! Our AI solutions are designed to be user-friendly. We provide comprehensive training and ongoing support to ensure your team can effectively use and manage the AI tools.'
        },
        {
          question: 'Can AI solutions integrate with my existing systems?',
          answer: 'Yes, our AI solutions are designed to integrate seamlessly with existing business systems including CRM, ERP, databases, and other enterprise applications. We handle all integration work as part of our service.'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Headphones,
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform for your specific needs and budget.'
        },
        {
          question: 'Do you provide 24/7 IT support?',
          answer: 'Yes, we offer 24/7 emergency support for critical issues. Our standard support hours are Monday-Friday 9AM-6PM EST, with emergency support available around the clock for urgent technical problems.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable.'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our services',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      icon: Search,
      link: '/knowledge-base'
    },
    {
      title: 'Status Page',
      description: 'Real-time status of all our services',
      icon: CheckCircle,
      link: '/status'
    }
  ];

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredQuestions = filteredCategories.flatMap(category =>
    category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get 24/7 support for your AI and IT solutions. Contact our expert team via phone, email, live chat, or video support." />
        <meta name="keywords" content="support, help, technical support, AI support, IT support, customer service" />
      </Helmet>
      
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get <span className="text-cyan-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help! Get 24/7 support for all your AI and IT solutions through multiple channels.
            </p>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{channel.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{channel.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div className="flex items-center justify-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {channel.responseTime}
                    </div>
                  </div>
                  
                  {channel.contact.startsWith('+') || channel.contact.includes('@') ? (
                    <a
                      href={channel.contact.startsWith('+') ? `tel:${channel.contact}` : `mailto:${channel.contact}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block"
                    >
                      {channel.contact}
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                      {channel.contact}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Helpful <span className="text-cyan-400">Resources</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={index}
                    href={resource.link}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{resource.description}</p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Call Us Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SupportPage;
