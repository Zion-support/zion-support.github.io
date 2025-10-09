'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Brain, BarChart, Users, CheckCircle, ArrowRight, Star, Globe, Phone, MapPin, TrendingUp, Shield, Clock, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaas: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      name: 'AI Project Manager',
      path: '/ai-project-manager',
      description: 'Intelligent project planning with AI-powered analytics and resource optimization',
      icon: '📊',
      price: '$49/mo',
      features: ['95% on-time delivery', 'Resource optimization', 'Predictive analytics'],
      popular: true
    },
    {
      name: 'AI Social Media Manager',
      path: '/ai-social-media-manager',
      description: 'Automated social media management with AI content generation and scheduling',
      icon: '📱',
      price: '$29/mo',
      features: ['300% engagement increase', 'Auto-scheduling', 'Multi-platform support'],
      popular: true
    },
    {
      name: 'AI Analytics Dashboard',
      path: '/ai-analytics-dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics',
      icon: '📈',
      price: '$39/mo',
      features: ['45% conversion increase', 'Real-time data', 'Predictive insights'],
      popular: true
    },
    {
      name: 'AI Email Marketing',
      path: '/ai-email-marketing',
      description: 'Intelligent email campaigns with AI content generation and smart segmentation',
      icon: '📧',
      price: '$19/mo',
      features: ['65% higher open rates', 'Smart segmentation', 'A/B testing'],
      popular: true
    },
    {
      name: 'AI Customer Support Bot',
      path: '/ai-customer-support-bot',
      description: '24/7 AI-powered customer support with natural language processing',
      icon: '🤖',
      price: '$79/mo',
      features: ['90% resolution rate', '24/7 availability', 'Multi-language support'],
      popular: true
    },
    {
      name: 'AI Content Generator',
      path: '/ai-content-generation',
      description: 'AI-powered content creation for blogs, social media, emails, and marketing',
      icon: '✍️',
      price: '$39/mo',
      features: ['100+ content pieces/day', 'Multi-format support', 'Brand voice matching'],
      popular: true
    },
    {
      name: 'AI Code Review Assistant',
      path: '/ai-code-generation',
      description: 'Automated code analysis and review with intelligent suggestions',
      icon: '🔍',
      price: '$99/mo',
      features: ['Automated code review', 'Security analysis', 'Performance optimization'],
      popular: false
    },
    {
      name: 'AI SEO Optimizer',
      path: '/ai-seo-optimizer',
      description: 'AI-driven SEO optimization with automated keyword research and content optimization',
      icon: '🎯',
      price: '$49/mo',
      features: ['Keyword research', 'Content optimization', 'Rank tracking'],
      popular: false
    },
    {
      name: 'AI Invoice Generator',
      path: '/ai-invoice-generator',
      description: 'Automated invoicing system with AI-powered data extraction and processing',
      icon: '🧾',
      price: '$29/mo',
      features: ['Auto-invoice generation', 'Payment tracking', 'Tax calculations'],
      popular: false
    },
    {
      name: 'AI Lead Scoring',
      path: '/ai-lead-scoring',
      description: 'Intelligent lead qualification and scoring with predictive analytics',
      icon: '🎯',
      price: '$59/mo',
      features: ['Lead scoring', 'Predictive analytics', 'CRM integration'],
      popular: false
    },
    {
      name: 'AI Time Tracker',
      path: '/ai-time-tracker',
      description: 'Smart time tracking with AI-powered productivity insights and reporting',
      icon: '⏰',
      price: '$19/mo',
      features: ['Auto time tracking', 'Productivity insights', 'Team reporting'],
      popular: false
    },
    {
      name: 'AI Expense Tracker',
      path: '/ai-expense-tracker',
      description: 'Intelligent expense management with AI-powered categorization and reporting',
      icon: '💰',
      price: '$29/mo',
      features: ['Auto categorization', 'Receipt scanning', 'Expense reports'],
      popular: false
    }
  ];

  const categories = [
    {
      name: 'Most Popular',
      services: microSaasServices.filter(service => service.popular),
      color: 'text-cyan-400'
    },
    {
      name: 'Marketing & Sales',
      services: microSaasServices.filter(service => 
        ['AI Social Media Manager', 'AI Email Marketing', 'AI SEO Optimizer', 'AI Lead Scoring'].includes(service.name)
      ),
      color: 'text-pink-400'
    },
    {
      name: 'Productivity & Management',
      services: microSaasServices.filter(service => 
        ['AI Project Manager', 'AI Time Tracker', 'AI Expense Tracker'].includes(service.name)
      ),
      color: 'text-green-400'
    },
    {
      name: 'Analytics & Intelligence',
      services: microSaasServices.filter(service => 
        ['AI Analytics Dashboard', 'AI Customer Support Bot', 'AI Code Review Assistant'].includes(service.name)
      ),
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-enhanced particle-system-enhanced">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-flicker-enhanced">
            Micro SAAS Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Powerful AI Tools for Modern Businesses
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of AI-powered micro SAAS solutions designed to transform your business operations. 
            From project management to customer support, we have the tools you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button px-8 py-4 text-lg"
              style={{background: 'linear-gradient(45deg, #00ffff, #8b5cf6)'}}
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">AI Tools Available</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </section>

        {/* Categories */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text ${category.color}`}>
              {category.name}
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              {category.name === 'Most Popular' 
                ? 'Our most popular AI-powered micro SAAS solutions'
                : `AI-powered ${category.name.toLowerCase()} solutions for your business`
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card quantum-field p-8 cyber-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 neon-flicker-enhanced">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full cyber-button text-center block py-3 px-6 rounded-lg font-bold transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card-enhanced holographic-card quantum-field p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who have revolutionized their operations with our AI-powered micro SAAS solutions. 
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <Link
                to="/contact"
                className="cyber-button px-8 py-4 text-lg"
                style={{background: 'linear-gradient(45deg, #00ffff, #8b5cf6)'}}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaas;