import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, Database, Code, Smartphone, Cpu, Server, Wifi, Star, TrendingUp, Users, Award, MessageCircle, Eye, BarChart3, FileText, Bot, Target, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, brand voice training, and multi-language support.',
      features: ['SEO-optimized content', 'Brand voice customization', '50+ languages', 'Content scheduling', 'Plagiarism detection'],
      price: '$49/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content Creation'
    },
    {
      icon: <Bot className="w-8 h-8 text-emerald-400" />,
      title: 'AI Chatbot Enterprise',
      description: 'Intelligent customer support chatbots with natural language processing and multi-channel integration.',
      features: ['24/7 customer support', 'Multi-language support', 'CRM integration', 'Analytics dashboard', 'Custom training'],
      price: '$99/month',
      link: '/ai-chatbot-enterprise',
      popular: true,
      category: 'Customer Service'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting capabilities.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      price: '$79/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-400" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority classification.',
      features: ['Smart email sorting', 'Auto-responses', 'Meeting scheduling', 'Priority detection', 'Template library'],
      price: '$29/month',
      link: '/ai-email-assistant',
      popular: true,
      category: 'Communication'
    },
    {
      icon: <Eye className="w-8 h-8 text-red-400" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis for object detection, facial recognition, and content moderation.',
      features: ['Object detection', 'Facial recognition', 'Content moderation', 'Quality analysis', 'Real-time processing'],
      price: '$149/month',
      link: '/ai-computer-vision',
      popular: false,
      category: 'Computer Vision'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and automated security response using machine learning algorithms.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      link: '/ai-cybersecurity-suite',
      popular: true,
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, automation, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI services tailored to meet your specific business needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 group-hover:-translate-y-2 relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI solutions can drive innovation and growth in your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </Link>
                  <Link
                    to="/it-services"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Explore IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
