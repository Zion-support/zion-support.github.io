'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Brain, FileText, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, TrendingUp } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
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
    }
  ];

  const pricingTiers = [
    {
      name: "Creator",
      price: "$99",
      period: "/month",
      description: "Perfect for individual creators and small teams",
      features: [,
        "Up to 10,000 words/month",
        "5 content types",
        "Basic templates",
        "Email support",
        "Standard analytics",
        "Mobile app access"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and content teams",
      features: [,
        "Up to 50,000 words/month",
        "All content types",
        "Advanced templates",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "API access",
        "Custom branding"
      ],
      popular: true,
    },
    {
      name: "Enterprise"
      price: "$799",
      period: "/month",
      description: "For large organizations with high-volume content needs",
      features: [,
        "Unlimited words",
        "Everything in Professional",
        "Custom content types",
        "24/7 dedicated support",
        "White-label options",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false,
    }
  ];

  const testimonials = [
    {
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
          </div>
        </div>
      </div>

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your content creation needs;
            </p>
          </div>

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
                  </div>

                  <Link;
                  <div className="mb-6"></div>
                    <span className="text-5xl font-bold text-white">{tier.price}</span><span className="text-gray-400 text-lg">{tier.period}</span><Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'}
                    }`}
                  >Get Started</Link>
                  >
                    Get Started;
                    <ArrowRight className="w-4 h-4 ml-2" />
                  <div className="space-y-4">{tier.features.map((feature, featureIndex) => (</div>
                    <div key={featureIndex} className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">What Our Customers Say<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Join thousands of content creators using AI Content Studio<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">
              What Our Customers Say;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of content creators using AI Content Studio;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 transition-all duration-300">,</div>
                <div className="flex justify-center mb-4">,
                  {[...Array(5)].map((_, i) => (</div>
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">What Our Customers Say</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Join thousands of content creators using AI Content Studio</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                </p>

                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">{testimonial.avatar}</div>
                  </div>
                  <div></div>
                    <h4 className="text-white font-bold">{testimonial.name}<p className="text-cyan-400 text-sm">{testimonial.role}</p><p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Ready to Transform Your Content Creation?<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join thousands of content creators already using AI Content Studio to produce amazing content faster.</p>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIContentStudioPage;
