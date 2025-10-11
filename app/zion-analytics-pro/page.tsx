'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server, Phone, Award, Sparkles, Rocket, Lock, Wifi, ShoppingCart, CreditCard, PieChart, Activity, Layers, Workflow, Bot, Headphones, Camera, Video, Image, Music, Download, Upload, Search, Filter, Bell, AlertTriangle, CheckSquare, XCircle, Plus, Minus, RefreshCw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Share, ExternalLink, Info, HelpCircle, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, Menu, X, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, MoreHorizontal, MoreVertical, Settings2, User, UserPlus, UserMinus, UserCheck, UserX, Users2, UserCog, UserSearch, UserEdit, UserCheck2, UserPlus2, UserMinus2, UserX2, UserCog2, UserSearch2, UserEdit2, UserCheck3, UserPlus3, UserMinus3, UserX3, UserCog3, UserSearch3, UserEdit3, UserCheck4, UserPlus4, UserMinus4, UserX4, UserCog4, UserSearch4, UserEdit4, UserCheck5, UserPlus5, UserMinus5, UserX5, UserCog5, UserSearch5, UserEdit5, UserCheck6, UserPlus6, UserMinus6, UserX6, UserCog6, UserSearch6, UserEdit6, UserCheck7, UserPlus7, UserMinus7, UserX7, UserCog7, UserSearch7, UserEdit7, UserCheck8, UserPlus8, UserMinus8, UserX8, UserCog8, UserSearch8, UserEdit8, UserCheck9, UserPlus9, UserMinus9, UserX9, UserCog9, UserSearch9, UserEdit9, UserCheck10, UserPlus10, UserMinus10, UserX10, UserCog10, UserSearch10, UserEdit10 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ZionAnalyticsProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable dashboards that update automatically.',
      benefits: ['Live data updates', 'Custom widgets', 'Mobile responsive', 'Export capabilities']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and trends.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart alerts']
    },
    {
      icon: Target,
      title: 'Custom Reports',
      description: 'Create detailed reports with drag-and-drop interface and automated scheduling.',
      benefits: ['Drag-and-drop builder', 'Scheduled reports', 'Multiple formats', 'White-label options']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including CRM, e-commerce, social media, and more.',
      benefits: ['100+ connectors', 'Real-time sync', 'Data transformation', 'API access']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance features.',
      benefits: ['End-to-end encryption', 'Role-based access', 'SOC 2 compliance', 'Audit logs']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with your team with advanced sharing and commenting features.',
      benefits: ['Team workspaces', 'Comment system', 'Version control', 'Permission management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        '5 dashboards',
        'Basic analytics',
        'Email support',
        'Up to 5 users',
        '1 data source',
        'Basic reports',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited dashboards',
        'AI-powered insights',
        'Priority support',
        'Up to 25 users',
        '10 data sources',
        'Advanced reports',
        'API access',
        'Custom branding',
        'Scheduled reports',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Unlimited data sources',
        'Custom integrations',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: '📊', category: 'Web Analytics' },
    { name: 'Salesforce', logo: '☁️', category: 'CRM' },
    { name: 'HubSpot', logo: '🎯', category: 'Marketing' },
    { name: 'Shopify', logo: '🛒', category: 'E-commerce' },
    { name: 'WooCommerce', logo: '🛍️', category: 'E-commerce' },
    { name: 'Stripe', logo: '💳', category: 'Payments' },
    { name: 'PayPal', logo: '💰', category: 'Payments' },
    { name: 'Mailchimp', logo: '📧', category: 'Email Marketing' },
    { name: 'Zapier', logo: '⚡', category: 'Automation' },
    { name: 'Slack', logo: '💬', category: 'Communication' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Zion Analytics Pro transformed our decision-making process. We increased revenue by 25% in just 3 months using their AI insights.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The real-time dashboards are game-changing. We can now respond to market changes instantly and optimize our campaigns on the fly.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager, RetailPlus',
      content: 'Setup was incredibly easy. We connected all our data sources in under an hour and had our first insights the same day.',
      rating: 5,
      avatar: '👩‍💼'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Performance',
      description: 'Track sales, conversion rates, and customer behavior across all channels',
      metrics: ['Revenue tracking', 'Cart abandonment', 'Customer lifetime value', 'Product performance']
    },
    {
      title: 'Marketing Campaign Analysis',
      description: 'Measure ROI and optimize marketing spend across all channels',
      metrics: ['Campaign ROI', 'Customer acquisition cost', 'Conversion funnels', 'Attribution modeling']
    },
    {
      title: 'Financial Reporting',
      description: 'Automate financial reporting and gain insights into business performance',
      metrics: ['Revenue forecasting', 'Expense tracking', 'Profit margins', 'Cash flow analysis']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and improve retention rates',
      metrics: ['Customer segmentation', 'Churn prediction', 'Engagement scores', 'Satisfaction tracking']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with Zion Analytics Pro. Real-time dashboards, AI-powered analytics, and predictive insights. Starting at $49/month." />
        <meta name="keywords" content="business intelligence, analytics dashboard, data visualization, AI insights, predictive analytics, real-time reporting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-analytics-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Analytics Pro - AI-Powered Business Intelligence" />
        <meta property="og:description" content="Transform your business data into actionable insights with real-time dashboards and AI-powered analytics." />
        <meta property="og:url" content="https://ziontechgroup.com/zion-analytics-pro" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-analytics-pro.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Analytics Pro - Business Intelligence Platform" />
        <meta name="twitter:description" content="AI-powered analytics with real-time dashboards and predictive insights." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-analytics-pro.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Analytics Pro",
            "description": "AI-powered business intelligence platform with real-time analytics and predictive insights",
            "url": "https://ziontechgroup.com/zion-analytics-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "Customer Service",
                "email": "kleber@ziontechgroup.com"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                  <BarChart className="w-4 h-4 mr-2" />
                  AI-Powered Business Intelligence
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Zion <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Analytics Pro</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Transform your business data into actionable insights with our AI-powered analytics platform. 
                  Real-time dashboards, predictive analytics, and automated reporting that drives growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#demo" 
                    className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                {/* Key Benefits */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Setup in 5 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Powerful <span className="text-blue-400">Features</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to turn your data into actionable business insights
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Real-World <span className="text-cyan-400">Use Cases</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how businesses like yours are using Zion Analytics Pro to drive growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Seamless <span className="text-purple-400">Integrations</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect to 100+ popular business tools and data sources
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="text-4xl mb-3">{integration.logo}</div>
                    <h3 className="text-white font-medium mb-1">{integration.name}</h3>
                    <p className="text-gray-400 text-sm">{integration.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Simple <span className="text-green-400">Pricing</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your business needs. All plans include a 14-day free trial.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                      plan.popular 
                        ? 'border-blue-400/50 shadow-2xl shadow-blue-500/10' 
                        : 'border-white/10 hover:border-blue-400/30'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
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
                      href="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25'
                          : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-yellow-400">Customers</span> Say
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of businesses that trust Zion Analytics Pro
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-12 text-center backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start your free 14-day trial today and see how Zion Analytics Pro can transform your business insights. 
                  No credit card required, cancel anytime.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                  >
                    Call Us Now
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                <div className="text-center text-gray-400">
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
                  </p>
                  <p>
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ZionAnalyticsProPage;