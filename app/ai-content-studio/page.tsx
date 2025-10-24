<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React  from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { ArrowRight } from 'lucide-react';
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { FileText } from 'lucide-react';
const AIContentStudioZionTechGroup = () => {
  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality articles, blogs, and marketing copy with advanced AI writing models",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Generation",
      description: "Create professional videos from text prompts with AI-powered video generation technology",
      icon: <Video className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Image Creation",
      description: "Generate stunning visuals, graphics, and artwork using cutting-edge AI image models",
      icon: <Image className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Content Optimization",
      description: "Optimize content for SEO, engagement, and conversion with AI-powered analysis",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

<<<<<<< HEAD
  const pricingPlans = [
    {
      name: "Creator",
<<<<<<< HEAD
      price: "$79",
      period: "month",
      description: "Perfect for individual content creators",
      features: [
        "100 AI-generated articles per month",
        "50 AI-generated images per month",
        "10 AI-generated videos per month",
        "Basic SEO optimization",
=======
      price: "$99",
      period: "/month",
      description: "Perfect for individual creators and small teams",
      features: [
        "Up to 10,000 words/month",
        "5 content types",
        "Basic templates",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
<<<<<<< HEAD
      name: "Studio Pro",
      price: "$149",
      period: "month",
      description: "Ideal for content teams and agencies",
      features: [
        "Unlimited AI-generated content",
        "Advanced video generation",
        "Premium image creation",
        "Advanced SEO optimization",
=======
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and content teams",
      features: [
        "Up to 50,000 words/month",
        "All content types",
        "Advanced templates",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        "Priority support",
        "Team collaboration",
        "Custom brand templates",
        "API access"
      ],
      popular: true
    },
    {
<<<<<<< HEAD
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For large content operations",
      features: [
        "Everything in Studio Pro",
        "Custom AI model training",
        "White-label solution",
        "Dedicated support team",
        "SLA guarantee",
=======
      name: "Enterprise"
      price: "$799",
      period: "/month",
      description: "For large organizations with high-volume content needs",
      features: [
        "Unlimited words",
        "Everything in Professional",
        "Custom content types",
        "24/7 dedicated support",
        "White-label options",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        "Custom integrations",
        "Advanced analytics",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
<<<<<<< HEAD
      name: "Lisa Wang",
      role: "Content Manager",
      company: "Creative Agency",
      content: "Zion AI Content Studio has transformed our content creation process. We can now produce high-quality content at scale like never before.",
      rating: 5,
      avatar: "LW"
    },
=======
      name: "Sarah Martinez"
      role: "Content Marketing Manager",
      company: "GrowthCorp",
      content: "AI Content Studio has revolutionized our content creation process. We now produce 5x more content with better quality and consistency.",
      rating: 5;
      avatar: "SM"},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    {
      name: "David Kim",
      role: "Marketing Director",
      company: "TechStart Inc",
      content: "The AI-powered video generation is incredible. We've reduced our video production time by 80% while maintaining quality.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Maria Garcia",
      role: "Creative Director",
<<<<<<< HEAD
      company: "Design Studio",
      content: "The design automation features are game-changing. We can create professional visuals in minutes instead of hours.",
      rating: 5,
      avatar: "MG"
    }
=======
      company: "BrandStudio",
      content: "The visual design tools are incredible. We can create professional graphics in minutes instead of hours, and the AI suggestions are spot-on.",
      rating: 5;
      avatar: "JW"},
    {
      name: "Maria Garcia"
      role: "Social Media Manager",
      company: "DigitalFirst",
      content: "The social media content generation is a game-changer. Our engagement rates have increased by 200% since we started using AI Content Studio.",
      rating: 5;
      avatar: "MG"}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];

export default function AiContentStudioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Content Studio - Zion Tech Group</title>
        <meta name="description" content="Ai Content Studio solutions by Zion Tech Group" />
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { CheckCircle, ArrowRight } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      title: 'AI Content Generation',
      description: 'Generate high-quality content using advanced AI algorithms',
      benefits: ['Automated writing', 'Content optimization', 'Multi-language support']
=======
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
<<<<<<< HEAD
      title: 'Collaboration',
      description: 'Work together with your team on content projects',
      benefits: ['Real-time editing', 'Comments', 'Version control']
=======
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
    }
  ];

<<<<<<< HEAD
  const benefits = [
<<<<<<< HEAD
    'Increase content production by 10x',
    'Improve engagement by 200%',
    'Save 50+ hours per week',
    'Reduce content costs by 70%',
    'Enable consistent branding',
    'Automate content workflows'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Content Studio | Zion Tech Group</title>
        <meta name="description" content="Professional AI content studio solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai content studio, AI solutions, IT services, Zion Tech Group" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Content Studio</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai content studio solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        {/* Animated Background */}
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"><div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Palette className="w-4 h-4" />
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
              AI Content Studio;)
            </h1>)
),
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">),
              Create, Design, and Publish Content with AI;
            </p>

            </p>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
              <Link;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
      ></Link>
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </Link>

              <Link;
                to="/demo"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              ></Link>
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo;
              </Link>
            </div>,
          </div>,
,
          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-20">,
            {stats.map((stat, index) => (
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <stat.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>,
                </div>,
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div><div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
=======
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Content Studio Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern business needs
=======
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"></h2>
              Powerful Content Creation Features;
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">,
              Everything you need to create, design, and publish amazing content;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered content studio for creative and marketing teams." />
        <meta name="keywords" content="AI content studio, content creation, artificial intelligence, creative tools, marketing automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI-powered content studio for creative and marketing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
=======
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Content Studio
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent solutions powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
<<<<<<< HEAD
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
=======
            </div></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div></div></div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
=======
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">,
                    <feature.icon className="w-8 h-8 text-white" />,
                  </div>,
,
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">,
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed"></p>
                    {feature.description}
                  </p>

                  <div className="space-y-2"></div>
                    {feature.benefits.map((benefit, benefitIndex) => (
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                    ))}
                  </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
      {/* Content Types Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">Create Any Type of Content</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">From blog posts to social media, we support all your content needs</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{contentTypes.map((type, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6"></div>
                  <type.icon className="w-8 h-8 text-white" />
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text"></h2>
              Create Any Type of Content;
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">,
              From blog posts to social media, we support all your content needs;
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">,
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">,
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">Simple, Transparent Pricing</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Choose the plan that fits your content creation needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingTiers.map((tier, index) => (</div><div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>{tier.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">Most Popular</span>
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">,
              Simple, Transparent Pricing;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"></p>
              Choose the plan that fits your content creation needs;
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}></div>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full"></span>
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3><p className="text-gray-400 mb-6">{tier.description}</p>

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
                  ></Link>
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
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text"></h2>
              What Our Customers Say;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"></p>
              Join thousands of content creators using AI Content Studio;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 transition-all duration-300">,
                <div className="flex justify-center mb-4">,
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-6 leading-relaxed"></p>
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
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text"></h2>
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Join thousands of content creators already using AI Content Studio to produce amazing content faster.
            </p>

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
      ></Link>
                <span className="relative z-10">Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </Link>

              <div className="flex items-center space-x-6 text-gray-300"></div>
                <div className="flex items-center"></div>
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors"></a>
                    +1 (302) 464-0950;
                  </a>
                </div>
                <div className="flex items-center"></div>
                  <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors"></a>
                    kleber@ziontechgroup.com;
                  </a>
                </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
<<<<<<< HEAD
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Content Studio?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your content creation with our AI Content Studio solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
        </section>
      </div>
      <Footer />
<<<<<<< HEAD
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
export default AIContentStudioPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
=======
export default AIContentStudioPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
      </div>,
    </div>);
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AIContentStudio() {

  return (
    <>
      <title>AI Content Studio - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AI Content Studio</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI content studio services coming soon.</p>

              Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function AicontentstudioPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Ai Content Studio - Zion Tech Group</title>
        <meta name="description" content="Professional ai content studio services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Content Studio</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai content studio services coming soon.</p>
          
<<<<<<< HEAD
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
=======
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
