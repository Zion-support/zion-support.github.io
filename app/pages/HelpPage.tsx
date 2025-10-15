import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MessageSquare, Phone, Mail, Calendar, Clock, Star, Users, Award, Globe, Zap, BookOpen, ExternalLink, HelpCircle, FileText, Video, Download, ChevronDown, ChevronRight } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      articles: 12,
      description: 'Learn the basics and get up and running quickly'
    },
    {
      title: 'Account & Billing',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      articles: 8,
      description: 'Manage your account, billing, and subscription'
    },
    {
      title: 'API & Integration',
      icon: <Globe className="w-6 h-6 text-green-400" />,
      articles: 15,
      description: 'Integrate our services with your applications'
    },
    {
      title: 'Troubleshooting',
      icon: <HelpCircle className="w-6 h-6 text-red-400" />,
      articles: 10,
      description: 'Common issues and how to resolve them'
    },
    {
      title: 'Security & Privacy',
      icon: <Award className="w-6 h-6 text-purple-400" />,
      articles: 6,
      description: 'Keep your data secure and understand our privacy practices'
    },
    {
      title: 'Advanced Features',
      icon: <Star className="w-6 h-6 text-orange-400" />,
      articles: 9,
      description: 'Unlock the full potential of our platform'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply create an account, choose your plan, and follow our onboarding guide. We provide step-by-step tutorials and 24/7 support to help you get up and running quickly.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise customers can also pay via invoice with net 30 terms.',
      category: 'Account & Billing'
    },
    {
      id: 3,
      question: 'How do I integrate your API into my application?',
      answer: 'Our API documentation provides comprehensive guides and code examples. You can also use our SDKs for popular programming languages, or contact our developer support team for custom integration assistance.',
      category: 'API & Integration'
    },
    {
      id: 4,
      question: 'What should I do if I encounter an error?',
      answer: 'First, check our troubleshooting guide for common solutions. If the issue persists, contact our support team with details about the error, including any error messages and steps to reproduce the issue.',
      category: 'Troubleshooting'
    },
    {
      id: 5,
      question: 'How do you protect my data?',
      answer: 'We use enterprise-grade security measures including encryption at rest and in transit, regular security audits, and compliance with industry standards. Your data is never shared with third parties without your explicit consent.',
      category: 'Security & Privacy'
    },
    {
      id: 6,
      question: 'Can I customize the features to fit my needs?',
      answer: 'Yes! Our platform is highly customizable. You can configure settings, create custom workflows, and use our API to build custom integrations. Enterprise customers get additional customization options.',
      category: 'Advanced Features'
    }
  ];

  const supportChannels = [
    {
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'Send Email'
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-400" />,
      title: 'Schedule Call',
      description: 'Book a dedicated session with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      action: 'Book Now'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      type: 'Documentation',
      items: 25
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      icon: <Video className="w-6 h-6 text-red-400" />,
      type: 'Videos',
      items: 15
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      icon: <FileText className="w-6 h-6 text-green-400" />,
      type: 'Articles',
      items: 50
    },
    {
      title: 'Download Center',
      description: 'SDKs, tools, and resources for developers',
      icon: <Download className="w-6 h-6 text-purple-400" />,
      type: 'Downloads',
      items: 12
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, documentation, and contact our expert support team." />
        <meta name="keywords" content="help center, support, documentation, FAQ, troubleshooting, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              How Can We
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers to your questions, access our documentation, and get the support you need 
              to succeed with our AI and IT solutions.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-purple-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Browse Help Topics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the information you need organized by topic and category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <Link
                key={index}
                to="/help"
                className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  <span className="mr-2">{category.articles} articles</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Zap className="w-4 h-4 mr-2" />
                    {channel.responseTime}
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl hover:border-purple-500/50 transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                      <span className="text-sm text-purple-400">{faq.category}</span>
                    </div>
                    {expandedFAQ === faq.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                <p className="text-gray-400">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of resources and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to="/resources"
                className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  <span className="mr-2">{resource.items} {resource.type}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpPage;