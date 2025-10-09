'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, Play, Download, Upload, RefreshCw, Settings2, Monitor, Smartphone as Mobile, Laptop, Tablet, Headphones, Mic, Speaker, Wifi, Bluetooth, Battery, WifiOff, Signal, SignalHigh, SignalLow, SignalZero, Signal1, Signal2, Signal3, Signal4, Signal5, Signal6, Signal7, Signal8, Signal9, Signal10 } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      category: 'AI-Powered Productivity Tools',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { 
          name: 'AI Writing Assistant Pro', 
          price: '$29/month', 
          description: 'Advanced AI writing tool with grammar checking, style suggestions, and content optimization',
          features: ['Grammar & Style Check', 'Content Optimization', 'Tone Adjustment', 'Plagiarism Detection', 'Multi-language Support'],
          link: 'https://ziontechgroup.com/ai-writing-assistant',
          popular: true
        },
        { 
          name: 'AI Meeting Scheduler', 
          price: '$19/month', 
          description: 'Intelligent meeting scheduling with calendar integration and time zone management',
          features: ['Calendar Integration', 'Time Zone Detection', 'Conflict Resolution', 'Reminder System', 'Team Coordination'],
          link: 'https://ziontechgroup.com/ai-scheduler'
        },
        { 
          name: 'AI Email Manager', 
          price: '$24/month', 
          description: 'Smart email management with auto-categorization and response suggestions',
          features: ['Auto-categorization', 'Response Suggestions', 'Spam Filtering', 'Priority Detection', 'Follow-up Reminders'],
          link: 'https://ziontechgroup.com/ai-email-assistant'
        },
        { 
          name: 'AI Task Manager', 
          price: '$34/month', 
          description: 'Intelligent task management with priority optimization and deadline tracking',
          features: ['Priority Optimization', 'Deadline Tracking', 'Progress Analytics', 'Team Collaboration', 'Integration APIs'],
          link: 'https://ziontechgroup.com/task-manager-pro'
        }
      ]
    },
    {
      category: 'AI Marketing & Sales Tools',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { 
          name: 'AI Social Media Manager', 
          price: '$49/month', 
          description: 'Automated social media content creation, scheduling, and analytics',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Support'],
          link: 'https://ziontechgroup.com/ai-marketing',
          popular: true
        },
        { 
          name: 'AI Lead Generator', 
          price: '$79/month', 
          description: 'Automated lead generation and qualification with CRM integration',
          features: ['Lead Discovery', 'Contact Enrichment', 'Qualification Scoring', 'CRM Integration', 'Email Outreach'],
          link: 'https://ziontechgroup.com/ai-lead-generation'
        },
        { 
          name: 'AI Email Marketing Pro', 
          price: '$39/month', 
          description: 'Advanced email marketing with personalization and A/B testing',
          features: ['Personalization Engine', 'A/B Testing', 'Segmentation', 'Analytics Dashboard', 'Template Library'],
          link: 'https://ziontechgroup.com/ai-email-assistant'
        },
        { 
          name: 'AI Content Creator', 
          price: '$59/month', 
          description: 'AI-powered content creation for blogs, ads, and marketing materials',
          features: ['Blog Writing', 'Ad Copy Generation', 'Video Scripts', 'SEO Optimization', 'Brand Voice Matching'],
          link: 'https://ziontechgroup.com/ai-content-generation'
        }
      ]
    },
    {
      category: 'AI Analytics & Business Intelligence',
      icon: BarChart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { 
          name: 'AI Analytics Dashboard', 
          price: '$89/month', 
          description: 'Comprehensive business analytics with AI-powered insights and predictions',
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
          link: 'https://ziontechgroup.com/ai-analytics-dashboard',
          popular: true
        },
        { 
          name: 'AI SEO Optimizer', 
          price: '$69/month', 
          description: 'Advanced SEO analysis and optimization with keyword research and competitor analysis',
          features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          link: 'https://ziontechgroup.com/ai-services'
        },
        { 
          name: 'AI Data Visualizer', 
          price: '$49/month', 
          description: 'Advanced data visualization with interactive charts and custom dashboards',
          features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options', 'Collaboration Tools'],
          link: 'https://ziontechgroup.com/smart-analytics'
        },
        { 
          name: 'AI Business Intelligence', 
          price: '$99/month', 
          description: 'Enterprise-grade BI with AI-powered insights and automated reporting',
          features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Mobile Access'],
          link: 'https://ziontechgroup.com/business-intelligence'
        }
      ]
    },
    {
      category: 'AI Development & Technical Tools',
      icon: Code,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { 
          name: 'AI Code Assistant', 
          price: '$79/month', 
          description: 'AI-powered code generation, review, and optimization for developers',
          features: ['Code Generation', 'Code Review', 'Bug Detection', 'Performance Optimization', 'Documentation'],
          link: 'https://ziontechgroup.com/ai-code-generation'
        },
        { 
          name: 'AI API Builder', 
          price: '$59/month', 
          description: 'Automated API development and testing with intelligent documentation',
          features: ['API Generation', 'Auto Testing', 'Documentation', 'Rate Limiting', 'Analytics'],
          link: 'https://ziontechgroup.com/api-docs'
        },
        { 
          name: 'AI Database Optimizer', 
          price: '$69/month', 
          description: 'Intelligent database optimization and query performance enhancement',
          features: ['Query Optimization', 'Index Recommendations', 'Performance Monitoring', 'Backup Management', 'Security Scanning'],
          link: 'https://ziontechgroup.com/database'
        },
        { 
          name: 'AI Testing Suite', 
          price: '$49/month', 
          description: 'Automated testing with AI-powered test case generation and execution',
          features: ['Test Generation', 'Automated Execution', 'Bug Detection', 'Performance Testing', 'Regression Testing'],
          link: 'https://ziontechgroup.com/developer-tools'
        }
      ]
    },
    {
      category: 'AI Creative & Media Tools',
      icon: Palette,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      services: [
        { 
          name: 'AI Video Editor', 
          price: '$79/month', 
          description: 'Automated video editing with AI-powered content creation and optimization',
          features: ['Auto-editing', 'Template Library', 'Brand Consistency', 'Export Options', 'Cloud Storage'],
          link: 'https://ziontechgroup.com/ai-video-generation',
          popular: true
        },
        { 
          name: 'AI Image Generator', 
          price: '$39/month', 
          description: 'AI-powered image creation and editing with advanced filters and effects',
          features: ['Image Generation', 'Style Transfer', 'Background Removal', 'Upscaling', 'Batch Processing'],
          link: 'https://ziontechgroup.com/ai-3d-generation'
        },
        { 
          name: 'AI Music Composer', 
          price: '$49/month', 
          description: 'AI-generated music and sound effects for content creators',
          features: ['Music Generation', 'Style Adaptation', 'Loop Creation', 'Export Options', 'Royalty-free'],
          link: 'https://ziontechgroup.com/ai-music-composition'
        },
        { 
          name: 'AI Voice Cloner', 
          price: '$69/month', 
          description: 'High-quality voice synthesis and cloning for various applications',
          features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language', 'API Integration'],
          link: 'https://ziontechgroup.com/ai-voice-cloning'
        }
      ]
    },
    {
      category: 'AI E-commerce & Business Tools',
      icon: ShoppingCart,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      services: [
        { 
          name: 'AI E-commerce Optimizer', 
          price: '$99/month', 
          description: 'Complete e-commerce optimization with AI-powered recommendations and analytics',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Conversion Tracking'],
          link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
          popular: true
        },
        { 
          name: 'AI Customer Support Bot', 
          price: '$59/month', 
          description: 'Intelligent customer support with 24/7 automated assistance',
          features: ['24/7 Support', 'Multi-language', 'Ticket Routing', 'Knowledge Base', 'Escalation Management'],
          link: 'https://ziontechgroup.com/ai-chatbot-builder'
        },
        { 
          name: 'AI Inventory Manager', 
          price: '$79/month', 
          description: 'Smart inventory management with demand forecasting and optimization',
          features: ['Demand Forecasting', 'Reorder Alerts', 'Cost Optimization', 'Supplier Management', 'Analytics'],
          link: 'https://ziontechgroup.com/ai-services'
        },
        { 
          name: 'AI Pricing Optimizer', 
          price: '$89/month', 
          description: 'Dynamic pricing optimization based on market conditions and demand',
          features: ['Dynamic Pricing', 'Market Analysis', 'Competitor Tracking', 'Profit Optimization', 'A/B Testing'],
          link: 'https://ziontechgroup.com/ai-services'
        }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 AI tools',
        'Basic analytics',
        'Email support',
        'Standard templates',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 AI tools',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'Up to 5 user accounts',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited AI tools',
        'Custom analytics',
        '24/7 phone support',
        'Custom development',
        'Unlimited users',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including AI-powered productivity tools, marketing automation, analytics, and business intelligence. Starting at $19/month." />
        <meta name="keywords" content="micro saas, ai tools, productivity, marketing automation, analytics, business intelligence, saas solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven micro SAAS tools designed to automate, optimize, and transform your business operations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Micro SAAS Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Micro SAAS Categories
          </h2>
          <div className="space-y-16">
            {microSAASServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.category}</h3>
                    <p className="text-gray-300">Specialized tools for specific business needs</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          Learn More <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                      
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                      >
                        Get Started
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tier.name} Plan`}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our micro SAAS solutions today and see the difference AI-powered tools can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;