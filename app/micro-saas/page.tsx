'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, Mail, Phone, MapPin } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const microSAASServices = [
    {
      id: 'ai-content-writer',
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality, SEO-optimized content 10x faster with our advanced AI writing assistant.',
      icon: '✍️',
      category: 'content',
      price: '$29/month',
      features: [
        '50+ Content Templates',
        'SEO Optimization',
        '50+ Languages Support',
        'Brand Voice Training',
        'Plagiarism Detection',
        'Real-time Collaboration'
      ],
      benefits: [
        'Save 20+ hours per week',
        'Increase content output by 1000%',
        'Improve SEO rankings by 300%',
        'Reduce content costs by 80%'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-writer',
      demo: 'https://demo.ziontechgroup.com/content-writer'
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website in minutes with our no-code AI platform.',
      icon: '🤖',
      category: 'automation',
      price: '$49/month',
      features: [
        'No-Code Builder',
        'Multi-language Support',
        'Live Chat Integration',
        'Analytics Dashboard',
        'Custom Branding',
        'API Integration'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer support',
        'Handle 1000+ conversations simultaneously',
        'Increase customer satisfaction by 40%'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot',
      demo: 'https://demo.ziontechgroup.com/chatbot'
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Suite',
      description: 'Automate your email campaigns with AI-powered personalization and optimization.',
      icon: '📧',
      category: 'marketing',
      price: '$39/month',
      features: [
        'AI Subject Line Generator',
        'Smart Segmentation',
        'A/B Testing Automation',
        'Send Time Optimization',
        'Personalization Engine',
        'Advanced Analytics'
      ],
      benefits: [
        'Increase open rates by 200%',
        'Boost click-through rates by 150%',
        'Reduce unsubscribe rates by 50%',
        'Save 15+ hours per week'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-email',
      demo: 'https://demo.ziontechgroup.com/email-marketing'
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-generated posts and optimal scheduling.',
      icon: '📱',
      category: 'marketing',
      price: '$59/month',
      features: [
        'Multi-platform Publishing',
        'AI Content Generation',
        'Optimal Timing Analysis',
        'Hashtag Optimization',
        'Engagement Analytics',
        'Competitor Analysis'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Save 25+ hours per week',
        'Grow followers by 200%',
        'Improve brand awareness by 150%'
      ],
      link: 'https://ziontechgroup.com/ai-social',
      demo: 'https://demo.ziontechgroup.com/social-media'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Business Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      icon: '📊',
      category: 'analytics',
      price: '$79/month',
      features: [
        'Real-time Dashboards',
        'Predictive Analytics',
        'Custom Reports',
        'Data Visualization',
        'Automated Insights',
        'ROI Tracking'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify growth opportunities',
        'Reduce analysis time by 90%',
        'Increase revenue by 25%'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-analytics',
      demo: 'https://demo.ziontechgroup.com/analytics'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Pro',
      description: 'Provide 24/7 intelligent customer support with our AI-powered helpdesk solution.',
      icon: '💬',
      category: 'support',
      price: '$99/month',
      features: [
        'Multi-channel Support',
        'Ticket Automation',
        'Knowledge Base AI',
        'Sentiment Analysis',
        'Escalation Management',
        'Performance Metrics'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Handle 10x more tickets',
        'Improve customer satisfaction',
        'Cut support costs by 70%'
      ],
      link: 'https://ziontechgroup.com/ai-support',
      demo: 'https://demo.ziontechgroup.com/support'
    },
    {
      id: 'ai-sales-automation',
      title: 'AI Sales Automation',
      description: 'Automate your sales process with AI-powered lead scoring and follow-up automation.',
      icon: '📈',
      category: 'sales',
      price: '$69/month',
      features: [
        'Lead Scoring AI',
        'Email Sequences',
        'CRM Integration',
        'Pipeline Management',
        'Performance Tracking',
        'ROI Analytics'
      ],
      benefits: [
        'Increase conversion rates by 200%',
        'Reduce sales cycle by 50%',
        'Qualify leads automatically',
        'Boost revenue by 150%'
      ],
      link: 'https://ziontechgroup.com/ai-sales',
      demo: 'https://demo.ziontechgroup.com/sales'
    },
    {
      id: 'ai-inventory-manager',
      title: 'AI Inventory Manager',
      description: 'Optimize your inventory with AI-powered demand forecasting and automated reordering.',
      icon: '📦',
      category: 'operations',
      price: '$89/month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Supplier Management',
        'Cost Analysis',
        'Reporting Dashboard'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Lower inventory costs by 30%',
        'Improve cash flow',
        'Eliminate manual processes'
      ],
      link: 'https://ziontechgroup.com/ai-inventory',
      demo: 'https://demo.ziontechgroup.com/inventory'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Streamline project management with AI-powered task allocation and progress tracking.',
      icon: '📋',
      category: 'productivity',
      price: '$49/month',
      features: [
        'Smart Task Assignment',
        'Progress Prediction',
        'Resource Optimization',
        'Risk Assessment',
        'Team Collaboration',
        'Performance Analytics'
      ],
      benefits: [
        'Complete projects 40% faster',
        'Reduce project costs by 25%',
        'Improve team productivity',
        'Minimize project risks'
      ],
      link: 'https://ziontechgroup.com/ai-projects',
      demo: 'https://demo.ziontechgroup.com/projects'
    },
    {
      id: 'ai-finance-manager',
      title: 'AI Finance Manager',
      description: 'Automate financial management with AI-powered expense tracking and budget optimization.',
      icon: '💰',
      category: 'finance',
      price: '$59/month',
      features: [
        'Expense Categorization',
        'Budget Optimization',
        'Financial Forecasting',
        'Tax Preparation',
        'Investment Analysis',
        'Compliance Monitoring'
      ],
      benefits: [
        'Save 20+ hours per month',
        'Reduce financial errors by 95%',
        'Optimize tax savings',
        'Improve cash flow management'
      ],
      link: 'https://ziontechgroup.com/ai-finance',
      demo: 'https://demo.ziontechgroup.com/finance'
    },
    {
      id: 'ai-hr-assistant',
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, onboarding, and employee management.',
      icon: '👥',
      category: 'hr',
      price: '$79/month',
      features: [
        'Resume Screening',
        'Interview Scheduling',
        'Onboarding Automation',
        'Performance Tracking',
        'Employee Analytics',
        'Compliance Management'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve candidate quality',
        'Streamline onboarding',
        'Enhance employee satisfaction'
      ],
      link: 'https://ziontechgroup.com/ai-hr',
      demo: 'https://demo.ziontechgroup.com/hr'
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer',
      description: 'Boost your website rankings with AI-powered SEO analysis and optimization recommendations.',
      icon: '🔍',
      category: 'seo',
      price: '$39/month',
      features: [
        'Keyword Research',
        'Content Optimization',
        'Technical SEO Audit',
        'Competitor Analysis',
        'Rank Tracking',
        'Performance Reports'
      ],
      benefits: [
        'Increase organic traffic by 300%',
        'Improve search rankings',
        'Save 15+ hours per week',
        'Boost conversion rates'
      ],
      link: 'https://ziontechgroup.com/ai-seo',
      demo: 'https://demo.ziontechgroup.com/seo'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSAASServices.length },
    { id: 'content', name: 'Content & Writing', count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'marketing', name: 'Marketing', count: microSAASServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automation', count: microSAASServices.filter(s => s.category === 'automation').length },
    { id: 'sales', name: 'Sales', count: microSAASServices.filter(s => s.category === 'sales').length },
    { id: 'support', name: 'Support', count: microSAASServices.filter(s => s.category === 'support').length },
    { id: 'operations', name: 'Operations', count: microSAASServices.filter(s => s.category === 'operations').length },
    { id: 'productivity', name: 'Productivity', count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'finance', name: 'Finance', count: microSAASServices.filter(s => s.category === 'finance').length },
    { id: 'hr', name: 'HR', count: microSAASServices.filter(s => s.category === 'hr').length },
    { id: 'seo', name: 'SEO', count: microSAASServices.filter(s => s.category === 'seo').length }
  ];

  const filteredServices = activeTab === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-blue-400 transition-colors">Services</Link>
              <Link href="/about" className="text-white hover:text-blue-400 transition-colors">About</Link>
              <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Powerful AI-driven tools for modern businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our suite of intelligent micro SAAS applications. 
              Each tool is designed to solve specific business challenges with AI-powered automation.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Instant Setup</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Get started in minutes with our intuitive interfaces</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Affordable Pricing</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Starting from just $29/month with no hidden fees</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your data</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">📞</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">24/7 Support</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Round-the-clock support from our expert team</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white cyber-glow'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className={`cyber-card hologram-card p-6 hover:shadow-2xl transition-all duration-300 relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2">/month</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-cyan-300">
                          <TrendingUp className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a 
                      href={service.link}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a 
                      href={service.demo}
                      className="w-full border border-blue-600 text-blue-400 py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center text-sm"
                    >
                      Try Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MicroSAASPage;