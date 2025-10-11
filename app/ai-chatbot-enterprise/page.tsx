'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, MessageCircle} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiChatbotEnterprisePage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Enterprise-Grade Chatbots',
      description: 'Scalable, secure chatbots designed for enterprise environments.',
      benefits: ['High scalability', 'Enterprise security', 'Multi-tenant support', 'Advanced analytics']
    },
    {
      icon: Brain,
      title: 'Advanced AI Capabilities',
      description: 'Sophisticated AI with enterprise-level natural language processing.',
      benefits: ['Advanced NLP', 'Context awareness', 'Multi-language support', 'Custom training']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance for sensitive data.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'High-performance chatbots with 99.9% uptime and fast response times.',
      benefits: ['High availability', 'Fast responses', 'Load balancing', 'Auto-scaling']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and reporting for enterprise insights.',
      benefits: ['Performance metrics', 'User analytics', 'Conversation insights', 'Custom reports']
    },
    {
      icon: Target,
      title: 'Custom Integration',
      description: 'Seamless integration with enterprise systems and workflows.',
      benefits: ['ERP integration', 'CRM connectivity', 'API connections', 'Workflow automation']
    }
  ];

  const services = [
    {
      title: 'Enterprise Implementation',
      description: 'Complete enterprise chatbot implementation with full support.',
      icon: MessageCircle,
      benefits: ['Full implementation', 'System integration', 'User training', 'Ongoing support']
    },
    {
      title: 'Custom Development',
      description: 'Custom chatbot development for specific enterprise requirements.',
      icon: Brain,
      benefits: ['Custom features', 'Specialized training', 'Integration support', 'Testing']
    },
    {
      title: 'Managed Services',
      description: 'Fully managed chatbot services for enterprise operations.',
      icon: Shield,
      benefits: ['24/7 monitoring', 'Performance optimization', 'Issue resolution', 'Regular updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Chatbot Enterprise - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade AI chatbot solutions for large-scale deployments with advanced security and compliance." />
        <meta name="keywords" content="AI chatbot enterprise, enterprise chatbots, conversational AI, enterprise AI, chatbot solutions" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Chatbot Enterprise</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade AI chatbot solutions for large-scale deployments with advanced security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise Chatbot Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI technology designed for enterprise-scale deployments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive enterprise chatbot solutions for your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready for Enterprise Chatbots?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our enterprise chatbot platform today and transform your customer interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiChatbotEnterprisePage;