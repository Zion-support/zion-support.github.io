'use client';
import React from 'react';
<<<<<<< HEAD
import { FileText, PenTool, Target, CheckCircle, Phone, Mail, MapPin, Star, ArrowRight, Users, Zap, Globe, Lock, Settings, Activity, TrendingUp, Brain, Shield } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, PenTool, Target, CheckCircle, Phone, Mail, MapPin, ArrowRight, Star, Users, Brain, Zap, Globe, Shield, Clock, Activity, TrendingUp } from 'lucide-react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Blog Post Generation',
<<<<<<< HEAD
      description: 'Create engaging, SEO-optimized blog posts that rank well and drive traffic',
      benefits: ['SEO optimization', 'Research integration', 'Multiple formats', 'Scheduling']
=======
      description: 'Generate high-quality blog posts with SEO optimization and engaging content.',
      benefits: ['SEO optimization', 'Engaging content', 'Research integration', 'Brand voice consistency']
>>>>>>> origin/main
    },
    {
      icon: PenTool,
      title: 'Social Media Content',
<<<<<<< HEAD
      description: 'Generate platform-specific social media content that drives engagement',
=======
      description: 'Create engaging social media posts across all platforms with AI assistance.',
>>>>>>> origin/main
      benefits: ['Platform optimization', 'Hashtag research', 'Engagement prediction', 'Visual content']
    },
    {
      icon: Target,
      title: 'Marketing Copy',
<<<<<<< HEAD
      description: 'Create compelling marketing copy that converts visitors into customers',
      benefits: ['Conversion optimization', 'A/B testing', 'Personalization', 'Call-to-action optimization']
    },
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI models that understand context and create human-like content',
      benefits: ['Natural language', 'Context awareness', 'Brand voice', 'Quality assurance']
=======
      description: 'Generate compelling marketing copy that converts visitors into customers.',
      benefits: ['Conversion optimization', 'A/B testing', 'Audience targeting', 'Performance tracking']
    },
    {
      icon: Brain,
      title: 'Content Intelligence',
      description: 'AI-powered content analysis and optimization for better performance.',
      benefits: ['Performance analysis', 'Content optimization', 'Trend analysis', 'ROI tracking']
    },
    {
      icon: Zap,
      title: 'Content Automation',
      description: 'Automate content workflows and publishing across multiple channels.',
      benefits: ['Workflow automation', 'Multi-channel publishing', 'Scheduling', 'Content calendars']
>>>>>>> origin/main
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
<<<<<<< HEAD
      description: 'Generate content in 50+ languages with cultural context and localization',
      benefits: ['50+ languages', 'Cultural adaptation', 'Localization', 'Translation']
    },
    {
      icon: Shield,
      title: 'Content Quality Control',
      description: 'Built-in quality checks and plagiarism detection for professional content',
      benefits: ['Quality scoring', 'Plagiarism detection', 'Grammar checking', 'Style consistency']
    }
=======
      description: 'Generate content in multiple languages with cultural adaptation.',
      benefits: ['Multi-language', 'Cultural adaptation', 'Localization', 'Translation']
    }
=======
const $1: React.FC = () => {
  const features = [,
    'Blog Post Generation',
    'Social Media Content',
    'Product Descriptions',
    'SEO Optimization',
    'Email Campaigns',
    'Ad Copy Creation',
    'Content Planning',
    'Brand Voice Consistency'
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
  ];

  const benefits = [
    'Increase content output by 10x',
    'Improve SEO rankings by 150%',
<<<<<<< HEAD
    'Maintain brand voice consistency',
    'Save 80% of writing time',
    'Scale content across platforms',
    'Reduce content creation costs'
=======
    'Save 80% of content creation time',
    'Increase engagement by 200%',
    'Enable consistent brand voice',
    'Automate content workflows',
    'Scale content across channels',
    'Enhance content quality'
>>>>>>> origin/main
  ];

  const useCases = [
    {
      title: 'Blog Writing',
      description: 'High-quality blog posts that engage readers and rank well in search engines',
<<<<<<< HEAD
      icon: '📝',
      features: ['SEO optimization', 'Research integration', 'Multiple formats', 'Scheduling']
=======
<<<<<<< HEAD
      icon: '📝'
=======
      icon: FileText,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
    },
    {
      title: 'Social Media',
      description: 'Engaging social media content that drives engagement and conversions',
<<<<<<< HEAD
      icon: '📱',
      features: ['Platform optimization', 'Hashtag research', 'Engagement prediction', 'Visual content']
=======
<<<<<<< HEAD
      icon: '📱'
=======
      icon: PenTool,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
    },
    {
      title: 'Marketing Copy',
      description: 'Compelling marketing copy that converts visitors into customers',
<<<<<<< HEAD
      icon: '🎯',
      features: ['Conversion optimization', 'A/B testing', 'Personalization', 'Call-to-action optimization']
    },
    {
      title: 'Email Marketing',
      description: 'AI-optimized email campaigns with personalization and high open rates',
      icon: '📧',
      features: ['Subject optimization', 'Personalization', 'A/B testing', 'Content variation']
    },
    {
      title: 'Product Descriptions',
      description: 'Compelling product descriptions that highlight benefits and drive sales',
      icon: '🛍️',
      features: ['Benefit highlighting', 'Feature descriptions', 'SEO optimization', 'Conversion focus']
    },
    {
      title: 'Ad Copy Creation',
      description: 'High-converting ad copy for all platforms and marketing channels',
      icon: '📢',
      features: ['Platform optimization', 'A/B testing', 'Conversion focus', 'Audience targeting']
    }
  ];

  const pricing = [
    {
      name: 'Writer',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual content creators',
      features: [
        'Basic content generation',
        '5 content types',
        'Email support',
        'Standard templates',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for content teams and agencies',
      features: [
        'Advanced content generation',
        'All content types',
        'Priority support',
        'Custom templates',
        'Up to 5 users',
        'Advanced analytics',
        'Brand voice training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
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
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Pro',
      role: 'Content Manager',
      quote: 'AI Content Writer increased our content output by 10x while maintaining quality. Our blog traffic grew by 300%.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Brand',
      role: 'Marketing Director',
      quote: 'The SEO optimization features improved our organic traffic by 250%. Content creation is now effortless.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Social Media Agency',
      role: 'Content Strategist',
      quote: 'Multi-platform content generation saved us 30+ hours per week. Our client satisfaction increased dramatically.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
<<<<<<< HEAD
      icon: '📢'
    },
    {
      title: 'E-commerce Content',
      description: 'Product descriptions and e-commerce content that drives sales',
      icon: '🛒'
    },
    {
      title: 'Email Campaigns',
      description: 'Personalized email campaigns that improve open and click rates',
      icon: '📧'
    },
    {
      title: 'Technical Writing',
      description: 'Clear and concise technical documentation and user guides',
      icon: '📋'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with our AI Content Writer. Generate high-quality blog posts, social media content, and marketing copy with AI assistance." />
        <meta name="keywords" content="AI content writer, content creation, blog writing, social media content, marketing copy, content AI" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Writer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content creation with our AI Content Writer. Generate high-quality blog posts, 
              social media content, and marketing copy with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Writing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
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
                Advanced Content Writing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Content Writer combines cutting-edge technology with writing expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From blogs to marketing, our AI Content Writer serves diverse content needs
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
                Why Choose Our AI Content Writer?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of content creation with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
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
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of writers who are already using our AI Content Writer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
=======
      icon: Target,
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
>>>>>>> origin/main
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
<<<<<<< HEAD
          <div className="text-6xl mb-6 animate-bounce">✍️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Content Writer
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Write Better Content with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Create high-quality, SEO-optimized content at scale with our advanced AI-powered 
            content writer. Blogs, social media, marketing copy, and more.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">More Content</div>
=======
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Content Writer">
            AI Content Writer;</h1>
          </h1>,
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">,
            Generate high-quality content with AI-powered writing assistance for blogs, social media, and marketing materials.
          </p>
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $79/month</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Content Writer">AI Content Writer</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Generate high-quality content with AI-powered writing assistance for blogs, social media, and marketing materials.</p><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $79/month</section>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="cyber-card p-8"></div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">)
              Content Features;)
            </h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
>>>>>>> origin/main
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">150%</div>
              <div className="text-gray-300">SEO Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Writing
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Writing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI capabilities for superior content creation
            </p>
=======
        {/* Benefits */}
        <section className="mb-16">
          <div className="cyber-card p-8"></div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Benefits<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Content Benefits;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div><p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
>>>>>>> origin/main
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-cyan-400" />
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
=======
        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Use Cases<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Content Use Cases;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Use Cases</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <useCase.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3><p className="text-gray-300">{useCase.description}</p>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Content Types Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of content with AI-powered writing tools
            </p>
<<<<<<< HEAD
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{useCase.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="text-cyan-400 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Content Writer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your content strategy with intelligent writing assistance
            </p>
          </div>

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
              Content Writer Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right plan for your writing needs
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

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations transformed their content strategy
            </p>
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

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Better Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Get Free Trial</a>
              >
                Get Free Trial;
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" >Call +1 302 464 0950</Phone>
              </Phone>
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950;
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
            </div>
          </div>
        </section>
      </main>

      <Footer />
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/main
  );
};

export default AIContentWriterPage;
