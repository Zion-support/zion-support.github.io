'use client';
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import {
  Palette,
  Brain,
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  Zap,
  Target,
  BarChart,
  MessageSquare,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  Lock,
  Database,
  Cloud,
  Code,
  Smartphone,
  Settings,
  Search,
  Bot,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Brain, FileText, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, TrendingUp } from 'lucide-react';
>>>>>>> origin/main

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate high-quality content using advanced AI models and natural language processing',
      benefits: ['Text generation', 'Image creation', 'Video production', 'Audio synthesis']
    },
    {
      icon: Palette,
      title: 'Creative Design Tools',
      description: 'Professional design tools with AI assistance for graphics, layouts, and visual content',
      benefits: ['Auto-design', 'Template generation', 'Brand consistency', 'Visual optimization']
    },
    {
      icon: FileText,
      title: 'Content Management',
      description: 'Comprehensive content management system with version control and collaboration features',
      benefits: ['Version control', 'Team collaboration', 'Content scheduling', 'Performance tracking']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to optimize content for search engines and improve visibility',
      benefits: ['Keyword research', 'Content optimization', 'Meta tag generation', 'Performance analytics']
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Create automated workflows for content creation, publishing, and distribution',
      benefits: ['Workflow automation', 'Scheduled publishing', 'Multi-platform distribution', 'Performance monitoring']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track content performance and optimize strategies',
      benefits: ['Performance metrics', 'Engagement tracking', 'ROI analysis', 'Trend identification']
=======
<<<<<<< HEAD
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning visual content with AI-powered design tools and templates.',
      benefits: ['AI design generation', 'Custom templates', 'Brand consistency', 'High-quality output']
    },
    {
      icon: Brain,
      title: 'Content Intelligence',
      description: 'AI-powered content analysis and optimization for better performance and engagement.',
      benefits: ['Performance analysis', 'Engagement prediction', 'Content optimization', 'Trend analysis']
    },
    {
      icon: FileText,
      title: 'Multi-Format Content',
      description: 'Generate content in multiple formats including text, images, videos, and audio.',
      benefits: ['Multi-format support', 'Cross-platform compatibility', 'Automated conversion', 'Quality optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Collaborate with team members in real-time with AI-powered suggestions and feedback.',
      benefits: ['Real-time editing', 'Team collaboration', 'AI suggestions', 'Version control']
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Create content tailored to specific audiences with AI-powered personalization.',
      benefits: ['Audience analysis', 'Personalization', 'A/B testing', 'Performance tracking']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights to optimize content performance.',
      benefits: ['Performance metrics', 'Engagement analytics', 'ROI tracking', 'Custom reports']
=======
      title: "AI Content Generation",
      description: "Create high-quality content in seconds with our advanced AI writing assistant that understands your brand voice and tone.",
      icon: Brain,
      benefits: ["Multiple content types", "Brand voice training", "SEO optimization"]
    },
    {
      title: "Visual Design Tools",
      description: "Design stunning visuals with AI-powered tools that create professional graphics, infographics, and social media content.",
      icon: Palette,
      benefits: ["Auto-design generation", "Brand consistency", "Multiple formats"]
    },
    {
      title: "Content Planning",
      description: "Plan and organize your content strategy with AI-powered insights and automated content calendars.",
      icon: Calendar,
      benefits: ["Content calendar", "Trend analysis", "Optimal timing"]
    },
    {
      title: "Multi-format Support",
      description: "Create content for all platforms including blogs, social media, emails, and marketing materials.",
      icon: FileText,
      benefits: ["Blog posts", "Social media", "Email campaigns", "Press releases"]
    },
    {
      title: "Collaboration Tools",
      description: "Work seamlessly with your team using real-time collaboration features and approval workflows.",
      icon: Users,
      benefits: ["Real-time editing", "Comment system", "Approval workflows"]
    },
    {
      title: "Analytics & Insights",
      description: "Track content performance and get AI-powered recommendations for improvement.",
      icon: BarChart,
      benefits: ["Performance tracking", "AI recommendations", "ROI analysis"]
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Improve engagement by 200%',
    'Save 50+ hours per week',
    'Reduce content costs by 70%',
    'Enable consistent branding',
    'Automate content workflows',
    'Scale content across channels',
    'Enhance content quality'
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: 'Blog Posts',
      description: 'AI-powered blog content creation with SEO optimization and research integration',
      icon: '📝',
      features: ['SEO optimization', 'Research integration', 'Multiple formats', 'Scheduling']
    },
    {
      title: 'Social Media',
      description: 'Platform-specific social media content with engagement optimization',
      icon: '📱',
      features: ['Platform optimization', 'Hashtag research', 'Engagement prediction', 'Visual content']
    },
    {
      title: 'Video Content',
      description: 'Professional video creation with AI-powered editing and optimization',
      icon: '🎥',
      features: ['Script generation', 'Auto-editing', 'Multiple formats', 'Thumbnail creation']
    },
    {
      title: 'Email Marketing',
      description: 'AI-optimized email campaigns with personalization and A/B testing',
      icon: '📧',
      features: ['Personalization', 'A/B testing', 'Subject optimization', 'Content variation']
    },
    {
      title: 'Web Content',
      description: 'Website content creation with conversion optimization and user experience focus',
      icon: '🌐',
      features: ['Conversion optimization', 'UX writing', 'Landing pages', 'Product descriptions']
    },
    {
      title: 'E-books & Guides',
      description: 'Long-form content creation with structured information and professional formatting',
      icon: '📚',
      features: ['Structured content', 'Professional formatting', 'Research integration', 'Multi-format export']
=======
<<<<<<< HEAD
      title: 'Marketing Campaigns',
      description: 'Create compelling marketing campaigns with AI-powered content generation',
      icon: '📢'
    },
    {
      title: 'Social Media',
      description: 'Generate engaging social media content across all platforms',
      icon: '📱'
    },
    {
      title: 'E-commerce',
      description: 'Create product descriptions, ads, and promotional content',
      icon: '🛒'
    },
    {
      title: 'Blog & Articles',
      description: 'Generate high-quality blog posts and articles with AI assistance',
      icon: '📝'
    },
    {
      title: 'Video Content',
      description: 'Create engaging video content with AI-powered editing and production',
      icon: '🎬'
    },
    {
      title: 'Educational Content',
      description: 'Generate educational materials, courses, and training content',
      icon: '📚'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Create stunning content with our AI Content Studio. Advanced design tools, content generation, and collaboration features for better content creation." />
        <meta name="keywords" content="AI content studio, content creation, design tools, content generation, marketing automation, content AI" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-8">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Studio
            </h1>
=======
      name: "Blog Posts",
      icon: FileText,
      description: "Long-form articles optimized for SEO and engagement",
      features: ["SEO optimization", "Readability analysis", "Keyword research"]
    },
    {
      name: "Social Media",
      icon: MessageSquare,
      description: "Engaging posts for all social media platforms",
      features: ["Platform optimization", "Hashtag suggestions", "Visual content"]
    },
    {
      name: "Email Marketing",
      icon: Mail,
      description: "Professional email campaigns that convert",
      features: ["Subject line optimization", "Personalization", "A/B testing"]
    },
    {
      name: "Video Scripts",
      icon: Video,
      description: "Compelling scripts for video content",
      features: ["Story structure", "Call-to-action", "Engagement hooks"]
    },
    {
      name: "Product Descriptions",
      icon: ShoppingCart,
      description: "Persuasive product copy that drives sales",
      features: ["Feature highlighting", "Benefit focus", "Conversion optimization"]
    },
    {
      name: "Press Releases",
      icon: Globe2,
      description: "Professional press releases and announcements",
      features: ["News format", "Media targeting", "Distribution ready"]
>>>>>>> origin/main
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Improve content quality and consistency',
    'Reduce content creation costs by 80%',
    'Enhance SEO performance and visibility',
    'Streamline content workflows',
    'Scale content across multiple platforms'
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual content creators',
      features: [
        'Basic AI content generation',
        '5 content types',
        'Email support',
        'Standard templates',
        '1 user account',
        'Basic analytics'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false,
>>>>>>> origin/main
    },
    {
      name: 'Studio',
      price: '$299',
      period: '/month',
      description: 'Ideal for content teams and agencies',
      features: [
        'Advanced AI generation',
        'All content types',
        'Priority support',
        'Custom templates',
        'Up to 10 users',
        'Advanced analytics',
        'Workflow automation',
        'Team collaboration'
      ],
<<<<<<< HEAD
      popular: true
=======
      popular: true,
>>>>>>> origin/main
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Full AI suite',
        'Custom content types',
        'Dedicated support',
        'White-label solution',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantee',
        'Training & consulting'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false,
>>>>>>> origin/main
    }
  ];

  const testimonials = [
    {
<<<<<<< HEAD
      name: 'Sarah Johnson',
      company: 'Content Marketing Agency',
      role: 'Creative Director',
      quote: 'AI Content Studio transformed our workflow. We now produce 5x more content with better quality and consistency.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Brand',
      role: 'Marketing Manager',
      quote: 'The SEO optimization features improved our organic traffic by 300%. Content creation is now effortless.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Social Media Agency',
      role: 'Content Strategist',
      quote: 'Multi-platform content generation saved us 20+ hours per week. Our client satisfaction increased dramatically.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">🎨</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Content Studio
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Your Complete Content Creation Hub
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Create, manage, and optimize content across all platforms with our comprehensive 
            AI-powered content studio. From ideation to publication, we've got you covered.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">More Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">6</div>
              <div className="text-gray-300">Content Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Creating
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
=======
      name: "Sarah Martinez"
      role: "Content Marketing Manager",
      company: "GrowthCorp",
      content: "AI Content Studio has revolutionized our content creation process. We now produce 5x more content with better quality and consistency.",
      rating: 5,
      avatar: "SM"},
    {
      name: "James Wilson",
      role: "Creative Director",
      company: "BrandStudio",
      content: "The visual design tools are incredible. We can create professional graphics in minutes instead of hours, and the AI suggestions are spot-on.",
      rating: 5,
      avatar: "JW"},
    {
      name: "Maria Garcia"
      role: "Social Media Manager",
      company: "DigitalFirst",
      content: "The social media content generation is a game-changer. Our engagement rates have increased by 200% since we started using AI Content Studio.",
      rating: 5,
      avatar: "MG"}
  ];

  const stats = [
    { number: "1 M+", label: "Content Pieces Created", icon: FileText },
    { number: "95%", label: "Time Saved", icon: Clock },
    { number: "300%", label: "Engagement Increase", icon: TrendingUp },
    { number: "24/7", label: "AI Assistance", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}<div className="relative py-20 overflow-hidden">{/* Animated Background */}</div>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}</div>
      <div className="relative py-20 overflow-hidden">
        {/* Animated Background */}</div>
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"><div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Palette className="w-4 h-4" />
              <span>Complete Content Creation Suite<h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">AI Content Studio</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Create, Design, and Publish Content with AI<p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">The ultimate content creation platform powered by AI. Generate high-quality content,</p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div><div className="relative py-20 overflow-hidden">{/* Animated Background */}</div>
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div><div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Palette className="w-4 h-4" />
              <span>Complete Content Creation Suite</span><h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">AI Content Studio</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Create, Design, and Publish Content with AI</p><p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">The ultimate content creation platform powered by AI. Generate high-quality content,</p>
              design stunning visuals, and manage your entire content workflow in one place.</p>
              <span>Complete Content Creation Suite</span>
            </div>
)
            <h1 className="text-6xl md: text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">)
              AI Content Studio;)</h1>
            </h1>)
),
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">),
              Create, Design, and Publish Content with AI;
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate content creation platform powered by AI. Generate high-quality content)
              design stunning visuals, and manage your entire content workflow in one place.
            </p>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
              <Link;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
      >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" /></div>
              </Link>

              <Link;
                to="/demo"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" >View Demo</Eye>
              </Eye>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">{stats.map((stat, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"><div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}<div className="text-gray-400 font-medium">{stat.label}</div>
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo;
              </Link>
            </div>,
          </div>,
,
          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-20">,
            {stats.map((stat, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,</div>
                    <stat.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>,
                </div>,
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div><div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
>>>>>>> origin/main
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Content Studio Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create amazing content at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-cyan-400" />
=======
      {/* Features Section */}
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">Powerful Content Creation Features<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Everything you need to create, design, and publish amazing content<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"><div className="relative z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{feature.title}<p className="text-gray-400 mb-6 leading-relaxed">{feature.description}<div className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</div>
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
              Powerful Content Creation Features;
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">,
              Everything you need to create, design, and publish amazing content;
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">,</div>
                    <feature.icon className="w-8 h-8 text-white" />,
                  </div>,
,
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">,
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (</div>
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300"></div>
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">Powerful Content Creation Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Everything you need to create, design, and publish amazing content</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div className="relative z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{feature.title}</h3><p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p><div className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</div>
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300"></div>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </div>
>>>>>>> origin/main
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Content Types Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Content Types Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of content with AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="text-cyan-400 font-semibold">{feature}</span>
                    </div>
=======
      {/* Content Types Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">Create Any Type of Content<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">From blog posts to social media, we support all your content needs<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{contentTypes.map((type, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6"></div>
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">Create Any Type of Content</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">From blog posts to social media, we support all your content needs</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{contentTypes.map((type, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6"></div>
                  <type.icon className="w-8 h-8 text-white" />
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              Create Any Type of Content;
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">,
              From blog posts to social media, we support all your content needs;
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {contentTypes.map((type, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">,</div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">,</div>
                  <type.icon className="w-8 h-8 text-white" />,
                </div>,
,
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{type.description}</p><div className="space-y-2">{type.features.map((feature, featureIndex) => (</div>
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300"></div>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
>>>>>>> origin/main
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Content Studio?
=======
      {/* Pricing Section */}
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">Simple, Transparent Pricing<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Choose the plan that fits your content creation needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingTiers.map((tier, index) => (<div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>{tier.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">Simple, Transparent Pricing</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Choose the plan that fits your content creation needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingTiers.map((tier, index) => (</div><div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>{tier.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">Most Popular</span>
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">,
              Simple, Transparent Pricing;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your content strategy with intelligent automation
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Content Studio Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right plan for your content needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
=======
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingTiers.map((tier, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>
                {tier.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3><p className="text-gray-400 mb-6">{tier.description}</p>

                  <div className="mb-6"></div>
                    <span className="text-5xl font-bold text-white">{tier.price}<span className="text-gray-400 text-lg">{tier.period}<Link
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
>>>>>>> origin/main
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
=======
      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">What Our Customers Say<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Join thousands of content creators using AI Content Studio<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">
              What Our Customers Say;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations transformed their content strategy
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
=======
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 transition-all duration-300">,</div>
                <div className="flex justify-center mb-4">,
                  {[...Array(5)].map((_, i) => (</div>
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
>>>>>>> origin/main
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
=======
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Ready to Transform Your Content Creation?<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join thousands of content creators already using AI Content Studio to produce amazing content faster.</p>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Content Creation?
>>>>>>> origin/main
            </h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
              Start creating amazing content with AI today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
=======
              Create stunning content with our AI Content Studio. Advanced design tools, 
              content generation, and collaboration features for better content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-rose-400 text-rose-300 px-8 py-4 rounded-lg font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Content Studio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Content Studio combines cutting-edge technology with creative expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-rose-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link;
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Ready to Transform Your Content Creation?</h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join thousands of content creators already using AI Content Studio to produce amazing content faster.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
      >
                <span className="relative z-10">Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" /></div>
              </Link>

              <div className="flex items-center space-x-6 text-gray-300"></div>
                <div className="flex items-center"></div>
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 (302) 464-0950</a>
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 (302) 464-0950;
                  </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From marketing to education, our AI Content Studio serves diverse content needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Studio?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of content creation with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Amazing Content?
              </h2>
              <p className="text-xl text-rose-100 mb-8">
                Join thousands of creators who are already using our AI Content Studio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
>>>>>>> origin/main
            </div>
          </div>
        </section>
      </main>

      <Footer />
<<<<<<< HEAD
    </div>
  );
};

export default AIContentStudioPage;
=======
    </>
  );
};

export default AIContentStudioPage;
>>>>>>> origin/main
