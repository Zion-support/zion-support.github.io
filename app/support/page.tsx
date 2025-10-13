import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  HelpCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Zap,
  Brain,
  Globe,
  BarChart3,
  Cloud,
  Settings,
  Monitor,
  Smartphone,
  CheckCircle,
  Target,
  TrendingUp,
  MessageSquare,
  Phone,
  Mail,
  Search,
  BookOpen,
  FileText,
  Video,
  Download
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      title: 'Getting Started',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        'Quick Start Guide',
        'Account Setup',
        'First Steps',
        'Basic Configuration',
        'User Onboarding'
      ]
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      articles: [
        'AI Analytics Setup',
        'Machine Learning Models',
        'Data Integration',
        'Model Training',
        'Performance Optimization'
      ]
    },
    {
      title: 'IT Solutions',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      articles: [
        'Cloud Infrastructure',
        'Security Configuration',
        'Network Setup',
        'Monitoring Setup',
        'Backup & Recovery'
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      articles: [
        'Platform Overview',
        'Feature Configuration',
        'Integration Setup',
        'Customization',
        'API Documentation'
      ]
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageSquare className="w-6 h-6" />,
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: <Mail className="w-6 h-6" />,
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: <Phone className="w-6 h-6" />,
      availability: 'Business Hours',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session with our team',
      icon: <Video className="w-6 h-6" />,
      availability: 'By Appointment',
      responseTime: 'Scheduled',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: <BookOpen className="w-6 h-6" />,
      type: 'Documentation',
      items: 150
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      icon: <Video className="w-6 h-6" />,
      type: 'Videos',
      items: 75
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      icon: <FileText className="w-6 h-6" />,
      type: 'Articles',
      items: 300
    },
    {
      title: 'Download Center',
      description: 'SDKs, tools, and sample code downloads',
      icon: <Download className="w-6 h-6" />,
      type: 'Downloads',
      items: 50
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your platform?',
      answer: 'Getting started is easy! Sign up for a free trial, complete the onboarding wizard, and follow our quick start guide. Our support team is available 24/7 to help you get up and running quickly.'
    },
    {
      question: 'What support channels are available?',
      answer: 'We offer multiple support channels including live chat, email support, phone support, and video calls. All channels are available 24/7 except phone support which is available during business hours.'
    },
    {
      question: 'How quickly will I get a response?',
      answer: 'Response times vary by channel: Live chat responses are typically under 2 minutes, email responses within 4 hours, and phone support provides immediate assistance during business hours.'
    },
    {
      question: 'Do you offer training for new users?',
      answer: 'Yes! We provide comprehensive training including video tutorials, documentation, live training sessions, and personalized onboarding assistance to ensure you get the most out of our platform.'
    },
    {
      question: 'Can I schedule a demo or consultation?',
      answer: 'Absolutely! You can schedule a personalized demo or consultation with our experts. Contact our sales team or use the booking form on our website to schedule a session.'
    },
    {
      question: 'What if I need custom integration help?',
      answer: 'Our technical team can help with custom integrations and configurations. We offer professional services for complex implementations and can work with your team to ensure successful deployment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Support - Get Help & Support | Zion Tech Group</title>
        <meta name="description" content="Get comprehensive support for all Zion Tech Group services. 24/7 live chat, documentation, video tutorials, and expert assistance to help you succeed." />
        <meta name="keywords" content="support, help, documentation, tutorials, customer service, technical support, AI support, IT support" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <HelpCircle className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">24/7 Expert Support</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
              We're Here to Help
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get comprehensive support for all our services. Our expert team is available 24/7 
            to help you succeed with our AI, IT, and micro SAAS solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our knowledge base..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your preferred support channel and get help when you need it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportChannels.map((channel, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {channel.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {channel.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 text-sm">
                  {channel.description}
                </p>
                <div className="space-y-2 text-center">
                  <div className="text-xs text-gray-400">
                    <span className="font-medium">Available:</span> {channel.availability}
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="font-medium">Response:</span> {channel.responseTime}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Knowledge Base Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Knowledge Base
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions and learn how to use our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-sm text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                      <ArrowRight className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {article}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of resources to master our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 text-sm">
                  {resource.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400">
                    {resource.items} {resource.type}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to the most common questions about our support
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FuturisticCard
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our support team is ready to help you succeed. Contact us through any of our 
              support channels and we'll get back to you quickly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Contact Support
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>24/7 Support • Expert Assistance • Quick Response Times</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Support;