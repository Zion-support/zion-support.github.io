'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

<<<<<<< HEAD
const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

=======
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {}
  Search,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  FileText,
  Video,
  Download,
  ExternalLink;
} from 'lucide-react';

const $1: React.FC = () => {
const HelpPage: React.FC = () => {}
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      title: 'Getting Started'
      icon: BookOpen,
      questions: [
        {,
    {}
      title: 'Getting Started',
      icon: BookOpen,
      questions: [
        {}
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact our sales team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'},
        {}
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including workflow automation, customer support, data analytics, content generation, healthcare solutions, fintech platforms, and much more. Check our services page for a complete list.'
        },
        {}
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide free initial consultations to assess your needs and recommend the best solutions for your business. Contact us to schedule yours today.'}
      ]
    },
    {
      title: 'Technical Support'
      icon: HelpCircle,
      questions: [,
        {,
    {}
      title: 'Technical Support',
      icon: HelpCircle,
      questions: [
        {}
          question: 'How do I access technical support?',
          answer: 'You can access technical support through our support portal, email support@ziontechgroup.com, or call our 24/7 support line at +1 (302) 464-0950.'
        },
        {}
          question: 'What are your support hours?',
          answer: 'We provide 24/7 technical support for all our clients. Our support team is always available to help with any issues or questions you may have.'},
        {}
          question: 'How do I report a bug or issue?',
          answer: 'You can report bugs through our support portal, email support@ziontechgroup.com, or contact your dedicated account manager. We typically respond within 2 hours.'
        }
      ]
    },
    {
      title: 'Billing & Pricing'
      icon: FileText,
      questions: [,
        {,
    {}
      title: 'Billing & Pricing',
      icon: FileText,
      questions: [
        {}
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including subscription-based plans, project-based pricing, and enterprise agreements. Contact our sales team for a customized quote.'
        },
        {}
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we offer volume discounts for enterprise clients and long-term contracts. Contact our sales team to discuss your specific needs and pricing options.'
        },
        {}
          question: 'How do I update my billing information?',
          answer: 'You can update your billing information through your account dashboard or contact our billing team at billing@ziontechgroup.com.'}
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'Documentation'
      description: 'Comprehensive guides and API documentation'
      icon: BookOpen,
    {}
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      link: '/docs',
      color: 'text-blue-400'},
    {
      title: 'Video Tutorials'
      description: 'Step-by-step video guides'
      icon: Video,
    {}
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
      color: 'text-purple-400'},
    {}
      title: 'Download Resources',
      description: 'Templates, guides, and tools',
      icon: Download,
      link: '/downloads',
      color: 'text-green-400'},
    {
      title: 'Community Forum'
      description: 'Connect with other users'
      icon: MessageSquare,
    {}
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: MessageSquare,
      link: '/community',
      color: 'text-cyan-400'}
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support'
    {}
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 technical support',
      contact: '+1 (302) 464-0950',
      action: 'Call Now'},
    {
      icon: Mail,
      title: 'Email Support'
    {}
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@ziontechgroup.com',
      action: 'Send Email'},
    {
      icon: MessageSquare,
      title: 'Live Chat'
    {}
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: 'Start Chat'}
  ];

  const toggleCategory = (categoryTitle: string) => {,
  const toggleCategory = (categoryTitle: string) => {}
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
=======
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 overflow-hidden">)
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Help Center;</h1>
          </h1>,
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
            Find answers, get support, and learn how to make the most of our AI solutions;
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto"></div>
            <div className="relative"></div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input;
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>,
          </div>,
        </div>,
      </section>,
,
      {/* Quick Links */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {quickLinks.map((link, index) => (</div>
              <a;
                key={index}
                href={link.link}
                className="cyber-card p-6 hover: scale-105 transition-all duration-300 group",
              >,
                <div className="flex items-center mb-4">,</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {quickLinks.map((link, index) => (</div>
            {quickLinks.map((link, index) => (}
              <a
                key={index}
                href={link.link}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4"></div>
                  <link.icon className={`w-8 h-8 ${link.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white group-hover: text-cyan-400 transition-colors">,
                    {link.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{link.description}</p>
                <div className="flex items-center text-cyan-400 group-hover: text-cyan-300 transition-colors">,</div>
                  <span className="text-sm font-medium">Learn More</span>,
                  <ArrowRight className="w-4 h-4 ml-2" />,
                </div>,
              </a>,
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions;
            </p>
          </div>,
,
          <div className="space-y-6">,
            {faqCategories.map((category, categoryIndex) => (</div>
              <div key={categoryIndex} className="cyber-card"></div>
                <button;
          </div>

          <div className="space-y-6"></div>
            {faqCategories.map((category, categoryIndex) => (</div>
              <div key={categoryIndex} className="cyber-card"></div>
            {faqCategories.map((category, categoryIndex) => (}
              <div key={categoryIndex} className="cyber-card"></div>
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center"></div>
                    <category.icon className="w-6 h-6 text-cyan-400 mr-4" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  {expandedCategory === category.title ? (}
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-cyan-400" /></ChevronRigh>
                  )}
                </button>

                {expandedCategory === category.title && (}
                  <div className="px-6 pb-6 space-y-4"></div>
                    {category.questions.map((faq, faqIndex) => (</div>
                      <div key={faqIndex} className="border-l-2 border-cyan-400/30 pl-4"></div>
                    {category.questions.map((faq, faqIndex) => (}
                      <div key={faqIndex} className="border-l-2 border-cyan-400/30 pl-4"></div>
                        <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
=======
      {/* Contact Support */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
=======
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {contactMethods.map((method, index) => (</div>
              <div key={index} className="cyber-card p-8 text-center hover: scale-105 transition-all duration-300">,</div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">,</div>
                  <method.icon className="w-8 h-8 text-white" />,
                </div>,
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {contactMethods.map((method, index) => (</div>
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
            {contactMethods.map((method, index) => (}
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{method.contact}</div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all">,
                  {method.action}
                </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
=======
      <Footer /></Footer>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
    </div>
  );
};

export default PagePage;