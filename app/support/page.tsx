'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Video, Users } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation, and we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support and maintenance packages including 24/7 monitoring, regular updates, and technical support to ensure your systems run smoothly.'
    },
    {
      question: 'What security measures do you implement?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing systems. We work with all major platforms and can create custom integrations as needed.'
    },
    {
      question: 'What happens if I need to scale my solution?',
      answer: 'Our solutions are built to scale. We can easily add resources, users, or features as your business grows, ensuring your investment continues to provide value.'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8 text-cyan-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7 Emergency Support',
      contact: '+1 (302) 464-0950'
    },
    {
      icon: <Mail className="w-8 h-8 text-green-400" />,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      availability: 'Mon-Fri: 9AM-6PM EST',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'Live Chat',
      description: 'Instant support through our website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      contact: 'Available on website'
    },
    {
      icon: <Video className="w-8 h-8 text-yellow-400" />,
      title: 'Video Support',
      description: 'Screen sharing and remote assistance',
      availability: 'By appointment',
      contact: 'Schedule via email'
    }
  ];

  const resources = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs'
    },
    {
      icon: <Video className="w-6 h-6 text-green-400" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      link: '/community'
    },
    {
      icon: <FileText className="w-6 h-6 text-yellow-400" />,
      title: 'Knowledge Base',
      description: 'Searchable database of solutions',
      link: '/knowledge-base'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get comprehensive support for your AI and IT solutions. 24/7 phone support, email assistance, live chat, and extensive documentation." />
        <meta name="keywords" content="support, help, technical support, customer service, documentation, FAQ" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help! Get the support you need for your AI and IT solutions with our comprehensive support services.
              </p>
            </div>

            {/* Support Channels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {supportChannels.map((channel, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-sm text-cyan-400 mb-2">{channel.availability}</p>
                  <p className="text-sm text-gray-400">{channel.contact}</p>
                </div>
              ))}
            </div>

            {/* Search */}
            <div className="mb-16">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Helpful Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.link}
                    className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      {resource.icon}
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm">{resource.description}</p>
                    <ArrowRight className="w-4 h-4 text-cyan-400 mt-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our expert support team is ready to help you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Support
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