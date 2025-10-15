<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Share2, 
  TrendingUp, 
  Users, 
  Calendar, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Target,
  MessageSquare,
  Image,
  Video,
  Hash,
  Globe
} from 'lucide-react';

const AiSocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Automatically create engaging posts, captions, and hashtags using advanced AI algorithms"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience engagement patterns"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and performance metrics across all social platforms"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Insights",
      description: "Deep analysis of your followers' demographics, interests, and behavior patterns"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Auto-Responses",
      description: "AI-powered automated responses to comments and messages"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campaign Optimization",
      description: "Continuous optimization of your social media campaigns for maximum ROI"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and influencers",
      features: [
        "3 Social Media Accounts",
        "50 AI-Generated Posts/Month",
        "Basic Analytics",
        "Auto-Scheduling",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "10 Social Media Accounts",
        "200 AI-Generated Posts/Month",
        "Advanced Analytics",
        "Auto-Responses",
        "Priority Support",
        "Team Collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and marketing teams",
      features: [
        "Unlimited Social Accounts",
        "Unlimited AI Posts",
        "Custom Analytics",
        "White-label Options",
        "24/7 Phone Support",
        "API Access",
        "Custom Integrations"
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: "Facebook", icon: <Globe className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Instagram", icon: <Image className="w-6 h-6" />, color: "text-pink-600" },
    { name: "Twitter", icon: <Hash className="w-6 h-6" />, color: "text-blue-400" },
    { name: "LinkedIn", icon: <Users className="w-6 h-6" />, color: "text-blue-700" },
    { name: "TikTok", icon: <Video className="w-6 h-6" />, color: "text-black" },
    { name: "YouTube", icon: <Video className="w-6 h-6" />, color: "text-red-600" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="Revolutionary AI-powered social media management platform. Automate content creation, scheduling, and analytics across all major platforms. Start your free trial today!" />
        <meta name="keywords" content="AI social media manager, automated social media, content generation, social media analytics, social media scheduling, AI marketing" />
        <meta property="og:title" content="AI Social Media Manager - Zion Tech Group" />
        <meta property="og:description" content="Transform your social media presence with AI-powered automation and insights." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Social Media Management Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Social Media
                </span>
                <br />
                <span className="text-white">Manager</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your social media presence with AI-powered content creation, 
                smart scheduling, and advanced analytics. Save 10+ hours per week while 
                increasing engagement by 300%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-400 text-sm">Increase in Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Hours Saved Weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your social media presence efficiently and effectively
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Supported Platforms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one unified dashboard
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className={`w-12 h-12 mx-auto mb-3 ${platform.color} group-hover:scale-110 transition-transform duration-300`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-white font-semibold">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your social media management needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
                    : 'border-cyan-500/20'
                } hover:border-cyan-400/40 transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI to supercharge their social media presence. 
                Start your free trial today - no credit card required!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Share2, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Play,
  Activity,
  Shield,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Image,
  Video,
  Hash
} from 'lucide-react';

const AiSocialMediaManagerPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI algorithms tailored to your brand voice.",
      benefits: ["Brand voice consistency", "Trending hashtag suggestions", "Content calendar automation", "Multi-platform optimization"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics dashboard with real-time performance metrics and competitor analysis.",
      benefits: ["Real-time metrics", "Engagement tracking", "ROI analysis", "Competitor benchmarking"]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience behavior and platform algorithms.",
      benefits: ["Optimal timing", "Cross-platform scheduling", "Content queue management", "Automated posting"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Intelligence",
      description: "Deep audience insights and segmentation to create targeted content that resonates with your followers.",
      benefits: ["Audience segmentation", "Demographic analysis", "Interest mapping", "Behavior prediction"]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Engagement Automation",
      description: "Automated responses, comment management, and community engagement to maintain active social presence.",
      benefits: ["Auto-responses", "Comment moderation", "Community management", "Sentiment analysis"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Optimization",
      description: "AI-driven strategies to increase followers, engagement rates, and overall social media performance.",
      benefits: ["Growth strategies", "Engagement optimization", "Viral content prediction", "Performance forecasting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "month",
      description: "Perfect for small businesses and influencers",
      features: [
        "3 social media accounts",
        "50 posts per month",
        "Basic analytics",
        "Content calendar",
        "Email support",
        "5GB media storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "10 social media accounts",
        "Unlimited posts",
        "Advanced analytics",
        "AI content generation",
        "Priority support",
        "50GB media storage",
        "Team collaboration",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited accounts",
        "Unlimited posts",
        "Full AI suite",
        "Custom integrations",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "API access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Digital Marketing Pro",
      role: "Social Media Manager",
      content: "AI Social Media Manager has increased our engagement by 300% and saved us 20 hours per week. The AI content suggestions are spot-on!",
      rating: 5
    },
    {
      name: "David Kim",
      company: "E-commerce Plus",
      role: "Marketing Director",
      content: "The analytics and audience insights have helped us understand our customers better than ever. ROI increased by 250% in just 3 months.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      company: "Creative Agency Co.",
      role: "Account Manager",
      content: "Managing multiple client accounts is now effortless. The automation features and smart scheduling have revolutionized our workflow.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Automated Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Transform your social media presence with AI-powered content generation, scheduling, analytics, and engagement automation. Grow your audience and increase engagement." />
        <meta name="keywords" content="AI social media, social media automation, content generation, social media analytics, engagement automation, social media management" />
        <meta property="og:title" content="AI Social Media Manager - Zion Tech Group" />
        <meta property="og:description" content="AI-powered social media management platform with automated content generation and analytics" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Social Media Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Social Media Manager
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your social media presence with AI-powered content generation, smart scheduling, 
                  and automated engagement. Grow your audience and increase engagement by 300%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to dominate social media with AI-powered automation and insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Simple Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your social media needs. All plans include our core AI features.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Our Clients Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of businesses that have transformed their social media presence with our AI platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Social Media?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and see how AI can revolutionize your social media strategy. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
      </div>
    </>
  );
};

export default AiSocialMediaManagerPage;