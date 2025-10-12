'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Sparkles, Cpu, Video, Share2, Mail } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI analytics',
      price: '$299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      color: 'from-purple-500 to-pink-500',
      href: '/ai-analytics'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that understand and respond to customer queries',
      price: '$199/month',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics'],
      color: 'from-blue-500 to-cyan-500',
      href: '/ai-chatbot-builder'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials',
      price: '$149/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling'],
      color: 'from-green-500 to-emerald-500',
      href: '/ai-content-generation'
    },
    {
      icon: Video,
      title: 'AI Video Generator',
      description: 'Create professional videos in minutes with AI-powered script generation',
      price: '$29/month',
      features: ['AI script generation', 'Professional templates', 'One-click publishing', 'Performance analytics'],
      color: 'from-purple-500 to-pink-500',
      href: '/zion-ai-video-generator'
    },
    {
      icon: Share2,
      title: 'AI Social Scheduler',
      description: 'AI-powered social media management with content generation and scheduling',
      price: '$19/month',
      features: ['AI content generation', 'Smart scheduling', 'Multi-platform support', 'Advanced analytics'],
      color: 'from-blue-500 to-cyan-500',
      href: '/zion-ai-social-scheduler-pro'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'AI-powered email marketing with content generation and automation',
      price: '$29/month',
      features: ['AI content generation', 'Smart segmentation', 'Automated workflows', 'ROI tracking'],
      color: 'from-orange-500 to-red-500',
      href: '/zion-ai-email-marketing-pro'
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support',
      description: 'AI-powered customer support chatbot with multi-channel support',
      price: '$49/month',
      features: ['Advanced AI understanding', '24/7 instant responses', 'Smart escalation', 'Real-time analytics'],
      color: 'from-green-500 to-emerald-500',
      href: '/zion-ai-customer-support-pro'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation',
      price: '$249/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring'],
      color: 'from-orange-500 to-red-500',
      href: '/ai-automation'
    }
  ];

  const stats = [
    { number: '300+', label: 'AI Models Deployed', icon: Brain },
    { number: '95%', label: 'Accuracy Rate', icon: Target },
    { number: '50+', label: 'AI Projects Completed', icon: CheckCircle },
    { number: '24/7', label: 'AI Monitoring', icon: Award }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Faster Decision Making',
      description: 'Get instant insights and recommendations from your data with AI-powered analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Automate complex processes and workflows with AI that learns and adapts',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description: 'Increase productivity and reduce costs with AI-powered solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your data and systems with AI-powered security solutions',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our AI services including chatbots, content generation, analytics, and automation. Get started with cutting-edge AI solutions today." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI chatbots, AI analytics, AI automation, AI content generation" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions to transform your business operations and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Transform Business
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Harness the power of artificial intelligence to automate processes, gain insights, 
                and drive innovation across your organization.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From chatbots to content generation, we provide comprehensive AI solutions 
                that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.href}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep business understanding 
                to deliver solutions that drive real results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg mb-4`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI services can help automate processes, gain insights, 
              and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;