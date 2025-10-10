'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cpu, FileText, Mail, TrendingUp, Target, Calendar, BarChart, Users, Code, Shield, Cloud, Zap, CheckCircle, ArrowRight, Clock, Award, Star, Rocket, Layers, PieChart, Activity, Globe, Smartphone, Settings, Database, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      icon: FileText,
      title: 'AI Content Writer',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.',
      features: ['50+ Templates', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training'],
      pricing: '$29/month',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      popular: false
    },
    {
      icon: BarChart,
      title: 'Smart Analytics',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      pricing: '$49/month',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      popular: true
    },
    {
      icon: Calendar,
      title: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management.',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Time Tracking', 'Calendar Integration'],
      pricing: '$19/month',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Tracking', 'Tax Preparation'],
      pricing: '$15/month',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      popular: false
    },
    {
      icon: Target,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking.',
      features: ['AI Prioritization', 'Team Collaboration', 'Progress Tracking', 'Deadline Alerts'],
      pricing: '$39/month',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      popular: false
    },
    {
      icon: Users,
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.',
      features: ['Lead Scoring', 'Contact Management', 'Sales Pipeline', 'Email Integration'],
      pricing: '$59/month',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      popular: true
    },
    {
      icon: Mail,
      title: 'Email Optimizer',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.',
      features: ['Subject Line AI', 'Send Time Optimization', 'A/B Testing', 'Performance Analytics'],
      pricing: '$25/month',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      popular: false
    },
    {
      icon: MessageCircle,
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics.',
      features: ['Content Creation', 'Auto-scheduling', 'Performance Analytics', 'Multi-platform Support'],
      pricing: '$45/month',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      popular: false
    },
    {
      icon: Code,
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: ['Code Completion', 'Debugging Help', 'Code Review', 'Multi-language Support'],
      pricing: '$39/month',
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      popular: false
    },
    {
      icon: Settings,
      title: 'API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools.',
      features: ['API Creation', 'Documentation Generation', 'Testing Tools', 'Rate Limiting'],
      pricing: '$59/month',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      popular: false
    },
    {
      icon: Shield,
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      features: ['AI Issue Detection', 'Priority Scoring', 'Resolution Suggestions', 'Team Collaboration'],
      pricing: '$25/month',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      popular: false
    },
    {
      icon: FileText,
      title: 'Doc Generator',
      description: 'Automatically generate technical documentation, API docs, and user guides from code.',
      features: ['Auto Documentation', 'API Docs', 'User Guides', 'Multiple Formats'],
      pricing: '$19/month',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      popular: false
    }
  ];

  const categories = [
    {
      title: 'Productivity Tools',
      description: 'Boost your team\'s productivity with AI-powered tools',
      services: microSaasServices.slice(0, 4)
    },
    {
      title: 'Marketing & Sales',
      description: 'Accelerate your marketing and sales efforts',
      services: microSaasServices.slice(4, 8)
    },
    {
      title: 'Developer Tools',
      description: 'Enhance your development workflow',
      services: microSaasServices.slice(8, 12)
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in minutes with our easy-to-use interfaces and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all your business data and processes.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance for all micro SAAS tools.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Over 10,000 businesses trust our micro SAAS solutions for their daily operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Affordable, powerful AI-driven micro SAAS tools for modern businesses. 50+ ready-to-use applications for productivity, marketing, and development." />
        <meta name="keywords" content="micro saas, business tools, productivity software, AI tools, marketing automation, development tools" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS">
            Micro SAAS
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            AI-Powered Business Tools for Modern Teams
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Affordable, powerful AI-driven micro SAAS tools designed for modern businesses. 
            Choose from 50+ ready-to-use applications that boost productivity, streamline workflows, 
            and drive growth without the complexity of enterprise software.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              📧 Get Free Trial
            </a>
          </div>
        </section>

        {/* Categories */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                {category.title}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${service.bgColor} ${service.borderColor} border relative`}
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${service.bgColor}`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${service.color}`}>{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-xl font-bold mb-4 ${service.color} neon-text`}>
                      {service.pricing}
                    </div>
                    <a
                      href="/contact"
                      className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${service.color} border-2 border-current hover:bg-current hover:text-slate-900`}
                    >
                      Try Free
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Micro SAAS Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                description: 'Perfect for small teams getting started',
                features: ['5 Tools Access', 'Basic Support', 'Standard Templates', 'Email Support'],
                color: 'text-gray-400',
                bgColor: 'bg-gray-500/10',
                borderColor: 'border-gray-500/30'
              },
              {
                name: 'Professional',
                price: '$99',
                period: '/month',
                description: 'Ideal for growing businesses',
                features: ['Unlimited Tools', 'Priority Support', 'Custom Templates', 'Phone & Email Support', 'API Access'],
                color: 'text-cyan-400',
                bgColor: 'bg-cyan-500/10',
                borderColor: 'border-cyan-500/30',
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large organizations with specific needs',
                features: ['All Tools + Custom', 'Dedicated Support', 'Custom Development', 'On-premise Options', 'SLA Guarantee'],
                color: 'text-purple-400',
                bgColor: 'bg-purple-500/10',
                borderColor: 'border-purple-500/30'
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300 ${tier.bgColor} ${tier.borderColor} border relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.color}`}>{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${tier.color}`}>{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${tier.color} border-2 border-current hover:bg-current hover:text-slate-900`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start your free trial today and discover how our micro SAAS tools can transform your business operations. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center">
                📧 Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;