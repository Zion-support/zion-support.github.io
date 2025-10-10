'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Eye, Zap, Shield, Brain, Globe, Database, Target, Users, BarChart, Settings, Lock, Cloud, Code, FileText, MessageSquare, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Wifi, TrendingUp, Calendar, CheckSquare, Award, Rocket, Layers, BarChart3, Headphones, Smartphone, HardDrive, Printer, Router } from 'lucide-react';

const ZionAiVideoEditorPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'AI-Powered Editing',
      description: 'Automated video editing using advanced AI algorithms for professional results'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Lightning-fast video processing and rendering with cloud-based infrastructure'
    },
    {
      icon: Brain,
      title: 'Smart Content Analysis',
      description: 'Intelligent scene detection, object recognition, and content optimization'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Export',
      description: 'Export to all major platforms with optimized settings for each channel'
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: 'AI Scene Detection',
      description: 'Automatically detect and segment scenes for optimal editing',
      price: 'Included',
      features: [
        'Smart scene boundaries',
        'Content-aware segmentation',
        'Automatic transition suggestions',
        'Scene quality analysis'
      ]
    },
    {
      icon: Mic,
      title: 'AI Audio Enhancement',
      description: 'Intelligent audio processing and enhancement for professional sound',
      price: 'Included',
      features: [
        'Noise reduction and cleanup',
        'Audio level normalization',
        'Voice enhancement',
        'Background music optimization'
      ]
    },
    {
      icon: Target,
      title: 'AI Color Grading',
      description: 'Automatic color correction and cinematic grading',
      price: 'Included',
      features: [
        'One-click color correction',
        'Cinematic color grading',
        'Mood-based color schemes',
        'Brand color matching'
      ]
    },
    {
      icon: Code,
      title: 'AI Text & Graphics',
      description: 'Smart text generation and graphic overlays',
      price: 'Included',
      features: [
        'Auto-generated captions',
        'Smart subtitle placement',
        'Dynamic text animations',
        'Logo and watermark integration'
      ]
    },
    {
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Video performance analytics and optimization suggestions',
      price: 'Included',
      features: [
        'Engagement prediction',
        'Optimal length analysis',
        'Thumbnail optimization',
        'Platform-specific recommendations'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Rendering',
      description: 'High-speed cloud rendering for any video format',
      price: 'Included',
      features: [
        '4K and 8K rendering',
        'Multiple format export',
        'Batch processing',
        'Progress tracking'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for individuals and small creators',
      features: [
        'Up to 10 hours of video processing per month',
        'HD video export (1080p)',
        'Basic AI editing features',
        '5GB cloud storage',
        'Standard support',
        'Watermark on exports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Ideal for content creators and small businesses',
      features: [
        'Up to 50 hours of video processing per month',
        '4K video export',
        'All AI editing features',
        '50GB cloud storage',
        'Priority support',
        'No watermark',
        'Advanced analytics',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'For agencies and large organizations',
      features: [
        'Unlimited video processing',
        '8K video export',
        'All AI features + custom models',
        '500GB cloud storage',
        '24/7 dedicated support',
        'White-label solution',
        'API access',
        'Team collaboration tools',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Save 90% of video editing time with AI automation',
    'Professional-quality results without technical expertise',
    'Automated content optimization for maximum engagement',
    'Multi-platform export with platform-specific optimization',
    'Real-time collaboration and team workflows',
    'Advanced analytics for video performance insights',
    'Scalable cloud infrastructure for any project size',
    'Regular AI model updates and new feature releases'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Video Editor - AI-Powered Video Editing Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered video editing platform. Create professional videos in minutes with automated editing, scene detection, and smart optimization." />
        <meta name="keywords" content="AI video editor, automated video editing, video AI, content creation, video optimization, AI video tools" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion AI Video Editor
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional videos in minutes with our AI-powered video editing platform. 
              Automated editing, smart optimization, and professional results without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Video Editing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI technology handles the complex aspects of video editing, letting you focus on creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Video Editing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered features for professional video creation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-6">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your video editing needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-purple-500/10 scale-105' 
                  : 'border-white/20 hover:bg-white/20'
              }`}>
                {plan.popular && (
                  <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-8">
                  {plan.price}
                  <span className="text-lg text-gray-400 font-normal">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion AI Video Editor?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of video editing with AI-powered automation and optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Video Editing?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start your free trial today and experience the power of AI-driven video editing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiVideoEditorPage;