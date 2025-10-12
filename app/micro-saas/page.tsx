'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Target, MessageCircle, BarChart3, ArrowRight, CheckCircle, Star, Users, Award, Zap, Brain, Shield } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const featuredServices = [
    {
      icon: Code,
      title: 'Zion AI Code Assistant',
      description: 'AI-powered code generation, analysis, and optimization in 50+ programming languages',
      price: 'From $29/month',
      link: '/zion-ai-code-assistant',
      color: 'from-purple-500 to-pink-500',
      features: ['50+ Languages', '60% Faster Development', '90% Bug Detection', 'Real-time Analysis']
    },
    {
      icon: Target,
      title: 'Zion AI Project Manager',
      description: 'Intelligent project management with AI-powered task prioritization and predictive analytics',
      price: 'From $19/month',
      link: '/zion-ai-project-manager',
      color: 'from-cyan-500 to-blue-500',
      features: ['40% Faster Delivery', '95% On-Time', '60% Risk Reduction', 'Smart Collaboration']
    },
    {
      icon: MessageCircle,
      title: 'Zion AI Customer Support Pro',
      description: 'Revolutionary AI-powered customer support automation with 95% accuracy',
      price: 'From $39/month',
      link: '/zion-ai-customer-support-pro',
      color: 'from-green-500 to-emerald-500',
      features: ['2s Response Time', '60% Cost Reduction', '24/7 Availability', 'Multi-Channel']
    },
    {
      icon: BarChart3,
      title: 'Zion AI Data Analytics Pro',
      description: 'Advanced AI-powered data analytics with real-time insights and interactive dashboards',
      price: 'From $49/month',
      link: '/zion-ai-data-analytics-pro',
      color: 'from-orange-500 to-red-500',
      features: ['300% Faster Insights', '95% Accuracy', '100+ Data Sources', 'Real-time Processing']
    }
  ];

  const allServices = [
    { name: 'Zion Analytics Pro', link: '/zion-analytics-pro', description: 'Advanced business intelligence and analytics' },
    { name: 'Zion Chat AI', link: '/zion-chat-ai', description: 'Intelligent conversational AI platform' },
    { name: 'Zion Security Shield', link: '/zion-security-shield', description: 'Comprehensive cybersecurity protection' },
    { name: 'Zion Cloud Vault', link: '/zion-cloud-vault', description: 'Secure cloud storage and backup solutions' },
    { name: 'Zion Content Studio', link: '/zion-content-studio', description: 'AI-powered content creation and management' },
    { name: 'Zion CRM Intelligence', link: '/zion-crm-intelligence', description: 'Smart customer relationship management' },
    { name: 'Zion Data Sync', link: '/zion-data-sync', description: 'Automated data synchronization across platforms' },
    { name: 'Zion Lead Magnet', link: '/zion-lead-magnet', description: 'AI-driven lead generation and nurturing' },
    { name: 'Zion Project Master', link: '/zion-project-master', description: 'Advanced project management and tracking' },
    { name: 'Zion Email Automation', link: '/zion-email-automation', description: 'Intelligent email marketing automation' },
    { name: 'Zion Inventory Smart', link: '/zion-inventory-smart', description: 'AI-powered inventory management' },
    { name: 'Zion Invoice Genius', link: '/zion-invoice-genius', description: 'Automated invoicing and payment processing' },
    { name: 'Zion Workflow Automation', link: '/zion-workflow-automation', description: 'Business process automation platform' },
    { name: 'Zion Performance Monitor', link: '/zion-performance-monitor', description: 'Real-time performance monitoring and optimization' },
    { name: 'Zion Compliance Manager', link: '/zion-compliance-manager', description: 'Automated compliance monitoring and reporting' },
    { name: 'Zion Social Scheduler', link: '/zion-social-scheduler', description: 'AI-powered social media management' },
    { name: 'Zion AI Video Editor', link: '/zion-ai-video-editor', description: 'Automated video editing and production' },
    { name: 'Zion AI Translator Pro', link: '/zion-ai-translator-pro', description: 'Advanced AI translation services' },
    { name: 'Zion AI Code Reviewer', link: '/zion-ai-code-reviewer', description: 'Automated code review and quality assurance' },
    { name: 'Zion Customer Insights', link: '/zion-customer-insights', description: 'AI-powered customer behavior analysis' }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: Zap },
    { number: '10K+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive collection of AI-powered micro SAAS solutions. From code assistance to project management, transform your business with our innovative tools." />
        <meta name="keywords" content="micro-saas, AI solutions, business tools, automation, productivity software" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive collection of AI-powered micro SAAS solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our comprehensive collection of AI-powered micro SAAS solutions. 
                From development tools to project management, we have everything you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Explore All Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and powerful micro SAAS solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-gray-400 text-sm">Starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solution Suite</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our full range of micro SAAS solutions designed for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Choose from our comprehensive suite of micro SAAS solutions and start your transformation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View All Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;