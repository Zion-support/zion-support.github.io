'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { FileText, Brain, Zap, Shield, TrendingUp, Users, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Globe, Settings, Award, Database, Cpu, Wifi, Smartphone, Monitor, Laptop, Tablet, PieChart, LineChart, Activity, Eye, Lock, RefreshCw, Download, Share, Filter, Search, Calendar, AlertCircle, ThumbsUp, ThumbsDown, MessageSquare, Send, BarChart, DollarSign, Headphones, Bot, CreditCard, Cloud, Camera, Mic, Video, Image, Palette, Brush, Scissors, Play, Pause, Stop, Volume2, VolumeX } from 'lucide-react';

const AiContentStudioProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Advanced AI algorithms create high-quality content across all formats and platforms',
      benefits: ['Blog posts & articles', 'Social media content', 'Email campaigns', 'Product descriptions']
    },
    {
      icon: Video,
      title: 'AI Video Creation',
      description: 'Generate professional videos with AI-powered editing, voiceovers, and animations',
      benefits: ['Auto video editing', 'AI voiceovers', 'Motion graphics', 'Template library']
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Create stunning visuals with AI-powered image generation and editing tools',
      benefits: ['AI image creation', 'Photo editing', 'Logo design', 'Social media graphics']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline content creation with automated workflows and batch processing',
      benefits: ['Content scheduling', 'Batch processing', 'Workflow automation', 'Team collaboration']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track content performance with detailed analytics and optimization suggestions',
      benefits: ['Performance tracking', 'A/B testing', 'ROI analysis', 'Optimization insights']
    },
    {
      icon: Settings,
      title: 'Multi-Platform Publishing',
      description: 'Publish content across all platforms with one-click distribution and scheduling',
      benefits: ['Multi-platform sync', 'Scheduling tools', 'Cross-platform optimization', 'Analytics integration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 100 content pieces/month',
        'Basic AI generation',
        'Image & video editing',
        'Standard templates',
        '1 user account',
        'Email support',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$299',
      period: '/month',
      description: 'Ideal for content teams',
      features: [
        'Up to 1,000 content pieces/month',
        'Advanced AI generation',
        'Full video & image suite',
        'Premium templates',
        '5 team members',
        'Priority support',
        'Advanced integrations',
        'Brand kit',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited content pieces',
        'Custom AI models',
        'Full creative suite',
        'Custom templates',
        'Unlimited team members',
        '24/7 dedicated support',
        'Custom integrations',
        'API access',
        'SLA guarantee',
        'Custom training & onboarding'
      ],
      popular: false
    }
  ];

  const contentTypes = [
    { name: 'Blog Posts', icon: FileText, description: 'Long-form articles' },
    { name: 'Social Media', icon: Globe, description: 'Posts for all platforms' },
    { name: 'Email Marketing', icon: Mail, description: 'Newsletters & campaigns' },
    { name: 'Video Content', icon: Video, description: 'YouTube, TikTok, Instagram' },
    { name: 'Podcast Scripts', icon: Mic, description: 'Audio content scripts' },
    { name: 'Product Descriptions', icon: ShoppingCart, description: 'E-commerce content' },
    { name: 'Ad Copy', icon: Target, description: 'Advertising content' },
    { name: 'Press Releases', icon: Send, description: 'PR & news content' },
    { name: 'Case Studies', icon: BarChart, description: 'Business content' },
    { name: 'White Papers', icon: FileText, description: 'Technical content' },
    { name: 'Landing Pages', icon: Monitor, description: 'Web page content' },
    { name: 'Email Sequences', icon: Mail, description: 'Automated email flows' },
    { name: 'Social Media Stories', icon: Smartphone, description: 'Story content' },
    { name: 'Video Scripts', icon: Video, description: 'Video content scripts' },
    { name: 'Infographics', icon: BarChart, description: 'Visual content' },
    { name: 'Presentations', icon: Monitor, description: 'Slide decks' },
    { name: 'Webinars', icon: Users, description: 'Educational content' },
    { name: 'Tutorials', icon: Play, description: 'How-to content' },
    { name: 'Newsletters', icon: Mail, description: 'Regular updates' },
    { name: 'Custom Content', icon: Settings, description: 'Bespoke content types' }
  ];

  const testimonials = [
    {
      name: 'Maria Garcia',
      company: 'Content Marketing Co.',
      role: 'Content Director',
      content: 'AI Content Studio Pro increased our content output by 500% while maintaining quality. The AI understands our brand voice perfectly.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Kim',
      company: 'Digital Agency Pro',
      role: 'Creative Director',
      content: 'The video creation tools are incredible. We can produce professional videos in minutes instead of hours. ROI was achieved in just 2 weeks.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Plus',
      role: 'Marketing Manager',
      content: 'The multi-platform publishing feature saved us 20 hours per week. Our content now reaches more audiences with consistent quality.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const stats = [
    { number: '500%', label: 'Content Output', icon: TrendingUp },
    { number: '90%', label: 'Time Saved', icon: Clock },
    { number: '50+', label: 'Content Types', icon: FileText },
    { number: '200+', label: 'Templates', icon: Settings },
    { number: '24/7', label: 'AI Generation', icon: Zap },
    { number: '1000+', label: 'Happy Creators', icon: Users }
  ];

  const contentTools = [
    {
      title: 'AI Writer',
      description: 'Advanced AI writing assistant for all content types',
      icon: FileText,
      features: ['Blog posts', 'Social media', 'Email content', 'Product descriptions']
    },
    {
      title: 'Video Editor',
      description: 'AI-powered video editing and creation tools',
      icon: Video,
      features: ['Auto editing', 'Voiceovers', 'Transitions', 'Effects library']
    },
    {
      title: 'Image Generator',
      description: 'AI image creation and editing platform',
      icon: Image,
      features: ['AI generation', 'Photo editing', 'Logo design', 'Graphics creation']
    },
    {
      title: 'Audio Studio',
      description: 'Professional audio recording and editing',
      icon: Mic,
      features: ['Voice recording', 'Audio editing', 'Podcast production', 'Sound effects']
    },
    {
      title: 'Design Studio',
      description: 'Graphic design and visual content creation',
      icon: Palette,
      features: ['Graphic design', 'Templates', 'Brand assets', 'Visual content']
    },
    {
      title: 'Publishing Hub',
      description: 'Multi-platform content distribution and scheduling',
      icon: Send,
      features: ['Multi-platform', 'Scheduling', 'Analytics', 'Optimization']
    }
  ];

  const integrations = [
    { name: 'WordPress', icon: Globe, description: 'Blog platform' },
    { name: 'Shopify', icon: Monitor, description: 'E-commerce platform' },
    { name: 'Mailchimp', icon: Mail, description: 'Email marketing' },
    { name: 'HubSpot', icon: Target, description: 'Marketing automation' },
    { name: 'Salesforce', icon: Database, description: 'CRM integration' },
    { name: 'Facebook', icon: Globe, description: 'Social media' },
    { name: 'Instagram', icon: Camera, description: 'Visual platform' },
    { name: 'YouTube', icon: Video, description: 'Video platform' },
    { name: 'TikTok', icon: Smartphone, description: 'Short-form video' },
    { name: 'LinkedIn', icon: Users, description: 'Professional network' },
    { name: 'Twitter', icon: MessageSquare, description: 'Social media' },
    { name: 'Pinterest', icon: Target, description: 'Visual discovery' },
    { name: 'Google Drive', icon: Cloud, description: 'Cloud storage' },
    { name: 'Dropbox', icon: Cloud, description: 'File sharing' },
    { name: 'Canva', icon: Palette, description: 'Design platform' },
    { name: 'Adobe Creative', icon: Brush, description: 'Creative suite' },
    { name: 'Figma', icon: Palette, description: 'Design tool' },
    { name: 'Slack', icon: MessageSquare, description: 'Team communication' },
    { name: 'Trello', icon: Settings, description: 'Project management' },
    { name: 'Custom APIs', icon: Settings, description: 'Bespoke integrations' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Studio Pro - Advanced Content Creation Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered content creation platform with video editing, image generation, and multi-platform publishing. Increase content output by 500% and save 90% time." />
        <meta name="keywords" content="AI content creation, content marketing, video editing, image generation, content automation, multi-platform publishing" />
        <meta property="og:title" content="AI Content Studio Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered content creation platform with video editing and image generation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-studio-pro" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                AI Content Studio Pro
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Content
                </span>
                <br />
                <span className="text-4xl md:text-6xl">That Converts</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered content creation platform with video editing, 
                image generation, and multi-platform publishing. Increase content output by 500% 
                and save 90% of your time.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>500% Content Output</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>90% Time Saved</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>50+ Content Types</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Multi-Platform Publishing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#demo" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-cyan-400 mr-1" />
                  <span>1000+ Creators</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-green-400 mr-1" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-purple-400 mr-1" />
                  <span>Copyright Safe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">AI Content Studio Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology combined with professional creative tools to deliver 
                content that engages and converts across all platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-cyan-400">50+ Content Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create any type of content with our AI-powered tools. From blog posts to videos, 
                we cover all your content needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {contentTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{type.name}</h3>
                  <p className="text-gray-400 text-xs">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional <span className="text-cyan-400">Content Tools</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional content in one platform. 
                From writing to video editing, we have it all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect <span className="text-cyan-400">20+ Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with your existing tools and platforms for 
                complete content workflow automation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{integration.name}</h3>
                  <p className="text-gray-400 text-xs">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include 24/7 support 
                and 30-day money-back guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need a custom solution?</p>
              <a 
                href="/contact" 
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Contact our sales team →
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-cyan-400">Creators Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join 1000+ creators using AI Content Studio Pro to scale their content production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 1000+ creators using AI Content Studio Pro to scale their content production 
              and save time. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ 30-day free trial • ✓ No credit card required • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiContentStudioProPage;