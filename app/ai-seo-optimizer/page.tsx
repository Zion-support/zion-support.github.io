'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Target, TrendingUp, CheckCircle, Clock, BarChart, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, Brain, Eye, Database, Settings, Users, Zap, MessageSquare, Calendar, Download, Upload, Filter, RefreshCw, Link, FileText, Monitor, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AISEOOptimizerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Keyword Research',
      description: 'Advanced AI-powered keyword discovery and analysis for maximum search visibility',
      benefits: ['Long-tail keyword discovery', 'Search volume analysis', 'Competitor keyword tracking', 'Trend prediction']
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'Intelligent content analysis and optimization recommendations',
      benefits: ['SEO score analysis', 'Content gap identification', 'Readability optimization', 'Semantic keyword integration']
    },
    {
      icon: BarChart,
      title: 'Technical SEO Analysis',
      description: 'Comprehensive technical SEO auditing and optimization',
      benefits: ['Site speed analysis', 'Mobile optimization', 'Schema markup', 'Core Web Vitals']
    },
    {
      icon: TrendingUp,
      title: 'Ranking Tracking',
      description: 'Real-time keyword ranking monitoring and competitor analysis',
      benefits: ['Position tracking', 'Competitor analysis', 'Ranking alerts', 'Performance reports']
    }
  ];

  const seoCategories = [
    {
      title: 'On-Page SEO',
      description: 'Optimize individual pages for better search rankings',
      icon: FileText,
      features: ['Title tag optimization', 'Meta descriptions', 'Header structure', 'Internal linking']
    },
    {
      title: 'Technical SEO',
      description: 'Improve website technical performance and crawlability',
      icon: Settings,
      features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup', 'XML sitemaps']
    },
    {
      title: 'Content SEO',
      description: 'Create and optimize content for search engines',
      icon: MessageSquare,
      features: ['Content strategy', 'Keyword optimization', 'Content freshness', 'User intent matching']
    },
    {
      title: 'Local SEO',
      description: 'Optimize for local search visibility',
      icon: MapPin,
      features: ['Google My Business', 'Local citations', 'Location pages', 'Review management']
    },
    {
      title: 'E-commerce SEO',
      description: 'Specialized SEO for online stores',
      icon: ShoppingCart,
      features: ['Product optimization', 'Category pages', 'Search filters', 'Conversion optimization']
    },
    {
      title: 'Voice Search SEO',
      description: 'Optimize for voice search and featured snippets',
      icon: Mic,
      features: ['Featured snippets', 'Voice queries', 'FAQ optimization', 'Natural language']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89/month',
      description: 'Perfect for small websites and blogs',
      features: [
        'Up to 5 websites',
        'Basic keyword research',
        'On-page optimization',
        'Monthly reports',
        'Email support',
        'Basic competitor analysis'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 websites',
        'Advanced AI features',
        'Technical SEO analysis',
        'Weekly reports',
        'Priority support',
        'Advanced competitor analysis',
        'Content optimization',
        'Ranking tracking'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizations and SEO agencies',
      features: [
        'Unlimited websites',
        'Full AI suite',
        'Custom SEO strategies',
        'Daily reports',
        '24/7 dedicated support',
        'White-label reports',
        'API access',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Analytics integration' },
    { name: 'Google Search Console', icon: '🔍', description: 'Search data' },
    { name: 'WordPress', icon: '📝', description: 'CMS integration' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce platform' },
    { name: 'WooCommerce', icon: '🛍️', description: 'E-commerce plugin' },
    { name: 'Magento', icon: '🏪', description: 'E-commerce platform' },
    { name: 'Squarespace', icon: '⬜', description: 'Website builder' },
    { name: 'Wix', icon: '🎨', description: 'Website builder' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Director, TechStartup',
      content: 'AI SEO Optimizer increased our organic traffic by 300% in just 3 months. The AI recommendations are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'CEO, E-commerce Plus',
      content: 'Our search rankings improved dramatically after using AI SEO Optimizer. The technical SEO analysis helped us fix critical issues we never knew existed.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'SEO Manager, Digital Agency',
      content: 'This tool has revolutionized our SEO workflow. The AI-powered keyword research and content optimization save us hours every week.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI SEO Optimizer - Advanced SEO Analysis & Optimization | Zion Tech Group"
        description="Transform your SEO strategy with AI-powered keyword research, content optimization, and technical analysis. Achieve 300% organic traffic growth with our intelligent SEO optimizer."
        keywords={['AI SEO', 'SEO optimization', 'keyword research', 'technical SEO', 'content optimization', 'search rankings']}
        canonicalUrl="https://ziontechgroup.com/ai-seo-optimizer"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Search className="w-4 h-4" />
                AI-Powered SEO Optimization
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI SEO Optimizer
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your SEO strategy with AI-powered keyword research, content optimization, and technical analysis. 
                Achieve 300% organic traffic growth with our intelligent SEO optimizer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Traffic Growth</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">SEO Factors</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your SEO strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Categories Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Comprehensive SEO Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cover all aspects of SEO with our comprehensive AI-powered analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoCategories.map((category, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-sm text-white font-semibold mb-1">{integration.name}</div>
                  <div className="text-xs text-gray-400">{integration.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your SEO needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI SEO Optimizer ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI SEO Optimizer to transform their search visibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your SEO Strategy?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven SEO optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI SEO Optimizer Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AISEOOptimizerPage;
