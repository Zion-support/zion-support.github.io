'use client';
import React, { useState } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, Settings, Calendar, FileText, MessageSquare, Star, Award, Clock, DollarSign, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Rocket, Briefcase, PieChart, Mail as MailIcon, Headphones, CreditCard, ShoppingCart, Camera, Music, Gamepad2, BookOpen, Wrench, Lightbulb, Heart, Car, Home, Plane, Train, Ship, Truck, Bike, Bus, Taxi, Motorcycle, Anchor, Compass, Map, Navigation, Route, Flag, Trophy, Medal, Crown, Gem, Diamond, Star as StarIcon, Moon, Sun, Cloud as CloudIcon, Snowflake, Umbrella, Zap as ZapIcon, Flame, Droplets, Wind, Thermometer, Eye, Ear, Nose, Mouth, Hand, Foot, Fingerprint, Scan, QrCode, Barcode, Tag, Label, Ticket, Coupon, Gift, Present, Box, Package, Archive, Folder, File, Document, Image, Video, Audio, Download, Upload, Share, Link, Copy, Cut, Paste, Save, Edit, Delete, Trash, Refresh, Rotate, Move, Drag, Drop, Click, Touch, Swipe, Pinch, Zoom, Search, Filter, Sort, List, Grid, Table, Layout, Design, Paint, Brush, Palette, Color, Palette as PaletteIcon, Palette as PaletteIcon2, Palette as PaletteIcon3, Palette as PaletteIcon4, Palette as PaletteIcon5, Palette as PaletteIcon6, Palette as PaletteIcon7, Palette as PaletteIcon8, Palette as PaletteIcon9, Palette as PaletteIcon10 } from 'lucide-react';

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      category: 'Productivity & Project Management',
      icon: Briefcase,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning and team collaboration with AI insights',
          features: ['Smart Task Assignment', 'Risk Prediction', 'Resource Optimization', 'Progress Analytics', 'Team Performance Insights'],
          pricing: '$29/month per user',
          freeTrial: '14 days',
          popular: true,
          icon: '📊',
          benefits: ['40% faster project completion', '25% better resource utilization', '90% accurate deadline predictions']
        },
        {
          name: 'AI Workflow Automator',
          description: 'Automate repetitive tasks and streamline business processes',
          features: ['Process Mapping', 'Automation Rules', 'Integration Hub', 'Performance Monitoring', 'Custom Workflows'],
          pricing: '$49/month for up to 10 workflows',
          freeTrial: '7 days',
          popular: true,
          icon: '⚡',
          benefits: ['60% time savings', '95% error reduction', 'Unlimited automation possibilities']
        },
        {
          name: 'AI Meeting Assistant',
          description: 'Smart meeting scheduling, transcription, and action item tracking',
          features: ['Smart Scheduling', 'Live Transcription', 'Action Item Extraction', 'Meeting Analytics', 'Calendar Integration'],
          pricing: '$19/month per user',
          freeTrial: '30 days',
          popular: false,
          icon: '🎯',
          benefits: ['50% reduction in meeting time', '100% accurate transcripts', 'Automatic follow-ups']
        }
      ]
    },
    {
      category: 'Marketing & Sales',
      icon: Target,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media posting, engagement, and analytics',
          features: ['Content Calendar', 'Auto Posting', 'Engagement Tracking', 'Hashtag Optimization', 'Competitor Analysis'],
          pricing: '$39/month for 5 social accounts',
          freeTrial: '14 days',
          popular: true,
          icon: '📱',
          benefits: ['300% increase in engagement', '80% time savings', 'Real-time performance insights']
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Intelligent email campaigns with personalization and automation',
          features: ['Smart Segmentation', 'A/B Testing', 'Send Time Optimization', 'Template Library', 'Performance Analytics'],
          pricing: '$59/month for up to 10,000 subscribers',
          freeTrial: '14 days',
          popular: true,
          icon: '📧',
          benefits: ['45% higher open rates', '60% better click-through rates', 'Automated personalization']
        },
        {
          name: 'AI Lead Generation Engine',
          description: 'Automated lead finding, qualification, and nurturing',
          features: ['Lead Scoring', 'Contact Discovery', 'Email Sequences', 'CRM Integration', 'Conversion Tracking'],
          pricing: '$79/month for up to 1,000 leads',
          freeTrial: '7 days',
          popular: false,
          icon: '🎯',
          benefits: ['200% more qualified leads', '50% faster lead response', 'Automated follow-up sequences']
        }
      ]
    },
    {
      category: 'Customer Support & Communication',
      icon: Headphones,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Customer Support Bot',
          description: '24/7 intelligent customer support with natural language processing',
          features: ['Multi-language Support', 'Ticket Routing', 'Knowledge Base', 'Sentiment Analysis', 'Human Handoff'],
          pricing: '$99/month for up to 1,000 conversations',
          freeTrial: '14 days',
          popular: true,
          icon: '🤖',
          benefits: ['90% query resolution rate', '24/7 availability', 'Instant response times']
        },
        {
          name: 'AI Live Chat Assistant',
          description: 'Real-time chat support with AI-powered responses and escalation',
          features: ['Live Chat Widget', 'AI Responses', 'Agent Handoff', 'Chat Analytics', 'Custom Branding'],
          pricing: '$49/month for up to 5 agents',
          freeTrial: '14 days',
          popular: false,
          icon: '💬',
          benefits: ['85% customer satisfaction', '3x faster response times', 'Seamless human handoff']
        },
        {
          name: 'AI Voice Assistant',
          description: 'Custom voice assistants for customer service and internal operations',
          features: ['Voice Recognition', 'Natural Responses', 'Integration APIs', 'Custom Training', 'Analytics Dashboard'],
          pricing: '$199/month for up to 10,000 calls',
          freeTrial: '7 days',
          popular: false,
          icon: '🎤',
          benefits: ['95% accuracy in voice recognition', 'Multilingual support', 'Custom voice training']
        }
      ]
    },
    {
      category: 'Analytics & Business Intelligence',
      icon: BarChart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence with predictive analytics and insights',
          features: ['Custom Dashboards', 'Predictive Analytics', 'Data Visualization', 'Automated Reports', 'Alert System'],
          pricing: '$79/month for up to 10 data sources',
          freeTrial: '14 days',
          popular: true,
          icon: '📈',
          benefits: ['Real-time insights', 'Predictive forecasting', 'Automated reporting']
        },
        {
          name: 'AI Sales Forecasting',
          description: 'Advanced sales prediction and revenue optimization',
          features: ['Revenue Forecasting', 'Pipeline Analysis', 'Deal Probability', 'Trend Analysis', 'ROI Tracking'],
          pricing: '$59/month for up to 5 sales reps',
          freeTrial: '14 days',
          popular: false,
          icon: '💰',
          benefits: ['90% accurate forecasts', '25% revenue increase', 'Optimized sales strategies']
        },
        {
          name: 'AI Performance Tracker',
          description: 'Comprehensive performance monitoring and optimization recommendations',
          features: ['KPI Tracking', 'Performance Alerts', 'Optimization Tips', 'Team Analytics', 'Goal Setting'],
          pricing: '$39/month for up to 50 users',
          freeTrial: '30 days',
          popular: false,
          icon: '📊',
          benefits: ['20% performance improvement', 'Real-time monitoring', 'Actionable insights']
        }
      ]
    },
    {
      category: 'Content & Creative',
      icon: FileText,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        {
          name: 'AI Content Generator',
          description: 'Create high-quality content for blogs, social media, and marketing',
          features: ['Blog Writing', 'Social Media Posts', 'Email Content', 'Product Descriptions', 'SEO Optimization'],
          pricing: '$29/month for up to 100 articles',
          freeTrial: '14 days',
          popular: true,
          icon: '✍️',
          benefits: ['10x faster content creation', 'SEO-optimized content', 'Multiple content formats']
        },
        {
          name: 'AI Design Assistant',
          description: 'AI-powered design tool for graphics, logos, and marketing materials',
          features: ['Logo Creation', 'Social Media Graphics', 'Banner Design', 'Template Library', 'Brand Consistency'],
          pricing: '$49/month for unlimited designs',
          freeTrial: '7 days',
          popular: false,
          icon: '🎨',
          benefits: ['Professional designs in minutes', 'Brand-consistent graphics', 'Unlimited revisions']
        },
        {
          name: 'AI Video Creator',
          description: 'Automated video creation for marketing and social media',
          features: ['Video Templates', 'Auto Editing', 'Text-to-Video', 'Music Library', 'Export Options'],
          pricing: '$79/month for up to 50 videos',
          freeTrial: '7 days',
          popular: false,
          icon: '🎬',
          benefits: ['Professional videos in minutes', 'Multiple export formats', 'Royalty-free assets']
        }
      ]
    },
    {
      category: 'E-commerce & Sales',
      icon: ShoppingCart,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI E-commerce Optimizer',
          description: 'Optimize your online store for better conversions and sales',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'A/B Testing'],
          pricing: '$99/month for up to 1,000 products',
          freeTrial: '14 days',
          popular: true,
          icon: '🛒',
          benefits: ['35% increase in conversions', '20% higher average order value', 'Automated optimization']
        },
        {
          name: 'AI Inventory Manager',
          description: 'Smart inventory management with demand forecasting',
          features: ['Demand Forecasting', 'Stock Alerts', 'Supplier Management', 'Cost Optimization', 'Analytics Dashboard'],
          pricing: '$69/month for up to 5,000 SKUs',
          freeTrial: '14 days',
          popular: false,
          icon: '📦',
          benefits: ['30% reduction in stockouts', '25% cost savings', 'Automated reordering']
        },
        {
          name: 'AI Pricing Optimizer',
          description: 'Dynamic pricing optimization based on market conditions and demand',
          features: ['Dynamic Pricing', 'Competitor Analysis', 'Demand Forecasting', 'Price Testing', 'Revenue Optimization'],
          pricing: '$89/month for up to 500 products',
          freeTrial: '7 days',
          popular: false,
          icon: '💲',
          benefits: ['15% revenue increase', 'Competitive pricing', 'Automated adjustments']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our clients see an average ROI of 250% within the first 6 months',
      stat: '250%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 80% with intelligent automation',
      stat: '80%'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Starting from just $19/month with no setup fees',
      stat: '$19/mo'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee',
      stat: '99.9%'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        '14-day free trial',
        'Standard integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        '30-day free trial',
        'Premium integrations',
        'Custom workflows'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'All AI features',
        '24/7 phone support',
        'Custom trial period',
        'All integrations',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'AI Project Manager Pro has transformed how we manage projects. We\'ve seen 40% faster completion times and our team productivity has skyrocketed.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'The AI Social Media Manager increased our engagement by 300% in just 2 months. It\'s like having a full marketing team at a fraction of the cost.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'CustomerFirst Corp',
      role: 'Customer Success Manager',
      content: 'Our AI Customer Support Bot handles 90% of queries instantly. Customer satisfaction has never been higher, and our support team can focus on complex issues.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI-Powered Micro SAAS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our intelligent micro SAAS applications. 
              From project management to customer support, we have the tools you need to succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">250% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">14-Day Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SAAS applications designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </div>
                      )}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-3xl">{service.icon}</span>
                        <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Free Trial:</span>
                          <span className="text-sm font-medium text-green-400">{service.freeTrial}</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                        Start Free Trial
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their operations with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}