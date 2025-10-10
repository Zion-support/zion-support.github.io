'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Image, 
  Video, 
  FileText, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Target,
  MessageSquare,
  Settings,
  Database,
  Cloud,
  Lock,
  Award,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Calendar,
  DollarSign,
  PieChart,
  Activity,
  UserCheck,
  MailCheck,
  PhoneCall,
  MessageCircle,
  CalendarCheck,
  TargetIcon,
  Zap as Lightning,
  Shield as Security,
  Globe as World,
  Smartphone as Mobile,
  Monitor as Desktop,
  Headphones as Support,
  FileText as Document,
  Calendar as Schedule,
  DollarSign as Money,
  PieChart as Chart,
  Activity as Analytics,
  UserCheck as Verified,
  MailCheck as EmailVerified,
  PhoneCall as Call,
  MessageCircle as Chat,
  CalendarCheck as Scheduled,
  Palette,
  Brush,
  Scissors,
  Camera,
  Mic,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Link,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  Volume2,
  VolumeX,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Filter,
  Layers,
  Grid,
  Layout,
  Columns,
  Rows,
  Square as Square2,
  Circle as Circle2,
  Triangle as Triangle2,
  Hexagon as Hexagon2,
  Octagon as Octagon2
} from 'lucide-react';

const AiContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, emails, social media, and more',
      details: ['50+ content types', 'SEO optimization', 'Tone adjustment', 'Plagiarism check']
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Create stunning visuals with AI-powered image generation and editing',
      details: ['Text-to-image', 'Style transfer', 'Background removal', 'Image enhancement']
    },
    {
      icon: Video,
      title: 'AI Video Creation',
      description: 'Produce professional videos with AI-powered editing and effects',
      details: ['Auto-editing', 'Voice synthesis', 'Subtitle generation', 'Template library']
    },
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate code snippets, functions, and complete applications',
      details: ['Multiple languages', 'Code completion', 'Bug fixing', 'Documentation']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate content creation workflows and publishing processes',
      details: ['Content scheduling', 'Multi-platform publishing', 'Approval workflows', 'Analytics tracking']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access and content protection',
      details: ['Role-based access', 'Content encryption', 'Audit trails', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$299',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        'Up to 5 users',
        '100 AI generations/day',
        'Basic templates',
        'Standard support',
        'Basic analytics',
        'Social media integration',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for marketing teams',
      features: [
        'Up to 25 users',
        '500 AI generations/day',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Full integrations',
        'API access',
        'Custom workflows',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Unlimited generations',
        'Custom templates',
        'Dedicated support',
        'Advanced security',
        'Custom development',
        'SLA guarantee',
        'Dedicated account manager',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const contentTypes = [
    { name: 'Blog Posts', icon: FileText, description: 'SEO-optimized articles' },
    { name: 'Social Media', icon: MessageSquare, description: 'Engaging social content' },
    { name: 'Email Marketing', icon: Mail, description: 'Convertible email campaigns' },
    { name: 'Product Descriptions', icon: Target, description: 'Compelling product copy' },
    { name: 'Ad Copy', icon: BarChart3, description: 'High-converting advertisements' },
    { name: 'Press Releases', icon: Globe, description: 'Professional announcements' },
    { name: 'Case Studies', icon: Users, description: 'Detailed success stories' },
    { name: 'White Papers', icon: Document, description: 'In-depth research reports' },
    { name: 'Video Scripts', icon: Video, description: 'Engaging video content' },
    { name: 'Podcast Scripts', icon: Mic, description: 'Structured audio content' },
    { name: 'Landing Pages', icon: Globe, description: 'High-converting pages' },
    { name: 'Email Sequences', icon: Mail, description: 'Automated email flows' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 20+ Hours/Week',
      description: 'Automate content creation and focus on strategy'
    },
    {
      icon: TrendingUp,
      title: 'Increase Engagement by 60%',
      description: 'AI-optimized content performs better'
    },
    {
      icon: Target,
      title: 'Improve Conversion Rates',
      description: 'Data-driven content that converts'
    },
    {
      icon: Users,
      title: 'Scale Content Production',
      description: 'Create more content with the same team'
    }
  ];

  const stats = [
    { value: '20+', label: 'Hours Saved', description: 'Per week per user' },
    { value: '60%', label: 'Engagement Increase', description: 'Average improvement' },
    { value: '99.9%', label: 'Uptime', description: 'Reliable service' },
    { value: '50+', label: 'Content Types', description: 'Supported formats' },
    { value: '24/7', label: 'Support', description: 'Always available' },
    { value: '10K+', label: 'Creators', description: 'Trust our platform' }
  ];

  const tools = [
    {
      icon: FileText,
      title: 'Text Editor',
      description: 'Advanced text editing with AI assistance',
      features: ['Grammar check', 'Style suggestions', 'Tone adjustment', 'SEO optimization']
    },
    {
      icon: Image,
      title: 'Image Editor',
      description: 'Professional image editing and generation',
      features: ['AI generation', 'Background removal', 'Color correction', 'Filter effects']
    },
    {
      icon: Video,
      title: 'Video Editor',
      description: 'AI-powered video creation and editing',
      features: ['Auto-editing', 'Voice synthesis', 'Subtitle generation', 'Template library']
    },
    {
      icon: Code,
      title: 'Code Generator',
      description: 'Generate code snippets and applications',
      features: ['Multiple languages', 'Code completion', 'Bug fixing', 'Documentation']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group | Complete Content Creation Suite</title>
        <meta name="description" content="Complete AI-powered content creation suite with writing, image generation, video editing, and social media automation. Save 20+ hours per week and increase engagement by 60%." />
        <meta name="keywords" content="AI content creation, content studio, AI writing, image generation, video editing, social media automation, content marketing" />
        <meta property="og:title" content="AI Content Studio - Zion Tech Group" />
        <meta property="og:description" content="Complete content creation suite with AI-powered writing, image generation, and video editing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-studio" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Content Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Content Studio
              </span>
              <br />
              <span className="text-white">Complete Creation Suite</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create stunning content with AI-powered writing, image generation, video editing, 
              and social media automation. Save 20+ hours per week and increase engagement by 60%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Code className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful Content Creation Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, edit, and publish amazing content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to videos, we support all your content needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{type.name}</h3>
                  <p className="text-gray-400 text-xs">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Professional Content Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading tools for content creation and editing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI content studio transforms content creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 scale-105' 
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of creators already using our AI content studio 
                to produce amazing content faster and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Code className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300">Ready to revolutionize your content creation?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your content creation needs"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiContentStudioPage;