import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Brain, FileText, Image, Video, Music, Globe, Zap, Users, BarChart3, Target, Sparkles } from 'lucide-react';
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { 
  PenTool, 
  FileText, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Type,
  Image,
  Video,
  Mic,
  Palette,
  ShoppingBag,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4

export default function AIContentGenerator() {
  const features = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      icon: FileText,
      title: "AI-Powered Writing",
      description: "Generate high-quality articles, blogs, marketing copy, and technical content with advanced language models"
    },
    {
      icon: Image,
      title: "Visual Content Creation",
      description: "Create stunning images, graphics, and visual assets using AI-powered design tools"
    },
    {
      icon: Video,
      title: "Video Content Generation",
      description: "Produce engaging video content, animations, and multimedia presentations automatically"
    },
    {
      icon: Music,
      title: "Audio Content",
      description: "Generate background music, sound effects, and audio content for your projects"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create content in multiple languages with accurate translations and cultural adaptation"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Optimize content for specific audiences and demographics using AI insights"
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      title: "AI Writing Assistant",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns",
      icon: <PenTool className="h-6 w-6 text-zion-cyan" />
    },
    {
      title: "Multi-Format Support",
      description: "Create content in various formats: text, images, videos, and audio",
      icon: <FileText className="h-6 w-6 text-zion-purple" />
    },
    {
      title: "Brand Voice Consistency",
      description: "Maintain your brand's unique voice across all content pieces",
      icon: <Type className="h-6 w-6 text-zion-blue" />
    },
    {
      title: "SEO Optimization",
      description: "AI-powered SEO suggestions to improve content visibility and ranking",
      icon: <Target className="h-6 w-6 text-zion-cyan" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    }
  ];

  const contentTypes = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      category: "Written Content",
      items: [
        "Blog posts and articles",
        "Marketing copy and ads",
        "Product descriptions",
        "Technical documentation",
        "Social media posts",
        "Email campaigns",
        "Press releases",
        "White papers and reports"
      ]
    },
    {
      category: "Visual Content",
      items: [
        "Social media graphics",
        "Infographics and charts",
        "Product mockups",
        "Brand logos and icons",
        "Website banners",
        "Presentation slides",
        "E-book covers",
        "Marketing materials"
      ]
    },
    {
      category: "Video & Audio",
      items: [
        "Product demos",
        "Explainer videos",
        "Social media clips",
        "Background music",
        "Podcast intros",
        "Sound effects",
        "Voice-overs",
        "Video presentations"
      ]
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Brain, Zap, FileText, Globe, Users, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIContentGenerator() {
  const features = [
    "AI-powered content generation for any industry",
    "SEO-optimized content with keyword research",
    "Multiple content formats (blogs, social media, emails)",
    "Brand voice customization and consistency",
    "Plagiarism-free, original content",
    "Real-time content optimization",
    "Multi-language support (100+ languages)",
    "Content calendar and scheduling",
    "Performance analytics and insights",
    "Team collaboration tools",
    "API access for enterprise integration",
    "24/7 customer support"
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      title: "Blog Posts",
      description: "Long-form articles and blog content",
      icon: <FileText className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Social Media",
      description: "Posts for all major social platforms",
      icon: <Users className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Marketing Copy",
      description: "Ads, landing pages, and promotional content",
      icon: <Target className="h-8 w-8 text-zion-blue" />
    },
    {
      title: "Product Descriptions",
      description: "Compelling product and service descriptions",
      icon: <ShoppingBag className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Email Campaigns",
      description: "Newsletters and email marketing content",
      icon: <Mail className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Video Scripts",
      description: "Scripts for video content and presentations",
      icon: <Video className="h-8 w-8 text-zion-blue" />
    }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
  ];

  const pricingPlans = [
    {
      name: "Starter",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "500 AI-generated content pieces/month",
        "Basic SEO optimization",
        "5 content templates",
        "Email support",
        "Basic analytics"
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      price: "$49",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 50 content pieces/month",
        "Basic AI writing tools",
        "Standard templates",
        "Email support",
        "Basic SEO suggestions"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      ],
      popular: false
    },
    {
      name: "Professional",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "2,000 AI-generated content pieces/month",
        "Advanced SEO optimization",
        "25+ content templates",
        "Priority email support",
        "Advanced analytics & reporting",
        "Team collaboration (up to 5 users)",
        "Custom brand voice training"
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      price: "$149",
      period: "/month",
      description: "Advanced content creation for growing businesses",
      features: [
        "Up to 200 content pieces/month",
        "Advanced AI writing tools",
        "Custom templates",
        "Priority support",
        "Advanced SEO optimization",
        "Brand voice training",
        "Multi-language support"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      ],
      popular: true
    },
    {
      name: "Enterprise",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited AI-generated content",
        "Premium SEO optimization",
        "100+ premium templates",
        "Phone & priority support",
        "Advanced analytics & AI insights",
        "Unlimited team members",
        "Custom AI model training",
        "API access & integrations",
        "Dedicated account manager"
      ],
      popular: false
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
    }
  ];

  const useCases = [
    {
<<<<<<< HEAD
      industry: "Marketing & Advertising",
      description: "Create compelling campaigns, social media content, and brand messaging",
      benefits: ["10x faster content creation", "Improved engagement rates", "Consistent brand voice"]
    },
    {
      industry: "E-commerce",
      description: "Generate product descriptions, marketing materials, and customer communications",
      benefits: ["Automated product content", "SEO-optimized descriptions", "Multilingual support"]
    },
    {
      industry: "Content Marketing",
      description: "Produce high-quality blog posts, articles, and thought leadership content",
      benefits: ["Scalable content production", "SEO optimization", "Audience targeting"]
    },
    {
      industry: "Education & Training",
      description: "Create educational materials, course content, and learning resources",
      benefits: ["Personalized learning content", "Multimedia materials", "Adaptive content"]
    }
  ];

  const stats = [
    { label: "Content Generated", value: "1M+", icon: FileText },
    { label: "Languages Supported", value: "50+", icon: Globe },
    { label: "Content Types", value: "25+", icon: Target },
    { label: "Customer Satisfaction", value: "98%", icon: Users },
    { label: "Time Saved", value: "80%", icon: Zap },
    { label: "ROI Improvement", value: "300%", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Content Innovation
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            AI Content
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Generator</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
            Transform your content creation process with our AI-powered generator. Create high-quality, 
            engaging content across all formats in minutes, not hours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/30 transition-all duration-300">
              Start Creating
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              View Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      title: "Blog Content Creation",
      description: "Generate engaging blog posts, articles, and long-form content optimized for SEO and reader engagement.",
      icon: <FileText className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Social Media Marketing",
      description: "Create compelling social media posts, captions, and campaigns across all platforms.",
      icon: <Globe className="h-8 w-8 text-zion-purple" />
    },
    {
      title: "Email Marketing",
      description: "Generate personalized email campaigns, newsletters, and automated sequences.",
      icon: <Users className="h-8 w-8 text-zion-cyan" />
    },
    {
      title: "Product Descriptions",
      description: "Create compelling product descriptions, features, and marketing copy.",
      icon: <Zap className="h-8 w-8 text-zion-purple" />
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      price: "$399",
      period: "/month",
      description: "Full-scale content creation for large organizations",
      features: [
        "Unlimited content pieces",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director, GrowthBrand",
      content: "Zion's AI Content Generator increased our content output by 300% while maintaining quality. Game-changer!",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Content Creator, TechBlog",
      content: "The AI writing assistant is incredibly intuitive. It understands context and generates engaging content.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "CEO, StartupXYZ",
      content: "We've saved countless hours on content creation. The ROI is immediate and substantial.",
      rating: 5
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    }
  ];

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-slate to-background">
      <SEO 
        title="AI Content Generator - Zion Tech Group" 
        description="Generate high-quality content, code, and documentation using advanced AI models. Starting at $29/month."
        keywords="AI content generator, content creation, AI writing, SEO content, marketing copy"
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-purple-dark to-zion-slate-dark">
      <SEO 
        title="AI Content Generator - Zion Tech Group" 
        description="Create engaging, high-quality content with AI-powered writing tools. Generate blogs, social media posts, and marketing copy instantly."
        keywords="AI content generator, content creation, AI writing, marketing copy, Zion Tech Group"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        canonical="https://ziontechgroup.com/ai-content-generator"
      />

      {/* Hero Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              AI-Powered Content Creation
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            AI Content Generator
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your content creation with AI-powered writing that generates engaging, SEO-optimized content in seconds. 
            From blog posts to marketing copy, our AI understands your brand and delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8 py-4 text-lg">
              <Brain className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            ✍️ AI-Powered Content Creation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            AI Content Generator
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your content creation with AI-powered writing tools. Generate engaging blogs, social media posts, 
            marketing copy, and more in seconds. Maintain your brand voice while scaling your content production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Try Demo
              </Link>
            </Button>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Features Grid */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Content Creation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI content generator combines cutting-edge technology with intuitive design to 
              transform how content is created across all industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Powerful Features for Modern Content Creation
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our AI content generator combines cutting-edge technology with intuitive design to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-slate/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{feature}</span>
                  </div>
                </CardContent>
              </Card>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Content Creation Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI platform combines natural language processing with creative intelligence to deliver content that resonates with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Content Types
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From written content to visual assets, our AI generator supports all your content creation needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-zion-cyan mr-3" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full flex-shrink-0"></div>
                      <span className="text-zion-slate-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI content generator is transforming content creation across diverse industries and applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Perfect for Every Content Need
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Whether you're a marketer, business owner, or content creator, our AI content generator has you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-zion-slate/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-zion-slate-light text-sm">{useCase.description}</p>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      {/* Content Types Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From blog posts to social media content, our AI handles all your content creation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-20 h-20 flex items-center justify-center">
                    {type.icon}
                  </div>
                  <CardTitle className="text-white">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light">
                    {type.description}
                  </CardDescription>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI features.
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI writing features.
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Card key={index} className={`relative ${plan.popular ? 'border-zion-purple border-2 scale-105' : 'border-zion-purple/20'} bg-zion-slate/50 hover:border-zion-purple/40 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-zion-cyan mt-1 flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-zion-purple to-zion-cyan' : 'bg-zion-purple hover:bg-zion-purple-dark'}`}>
                    Get Started
                  </Button>
                </div>
              </Card>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
              <Card key={index} className={`relative ${plan.popular ? 'border-zion-purple scale-105' : 'border-zion-slate-light'} bg-zion-slate-dark/50 transition-all duration-300 hover:shadow-2xl`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have already revolutionized their content production with our AI-powered 
              generator. Start creating amazing content today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      {/* Contact Section */}
      <section className="py-16 px-4 bg-zion-slate/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI content generator to create engaging, high-quality content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan text-white px-8 py-4 text-lg">
              Start Your Free Trial
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Questions? Call us at <a href="tel:+13024640950" className="text-zion-cyan hover:underline">+1 302 464 0950</a></p>
            <p>Or email us at <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
          </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Content Creators
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what our customers say about the transformative power of AI content generation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of creators already using AI to scale their content production and engage their audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78ae
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        </div>
      </section>
    </div>
  );
}