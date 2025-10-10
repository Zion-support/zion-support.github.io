'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Eye, Download, Sparkles, Building, Package, Megaphone, GraduationCap, ShoppingCart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate complex 3D models from text descriptions using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Real-time generation', 'High-quality output', 'Multiple formats']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Create 3D assets in minutes instead of hours with our optimized AI pipeline.',
      benefits: ['90% faster creation', 'Batch processing', 'Real-time preview', 'Instant results']
    },
    {
      icon: Palette,
      title: 'Advanced Texturing',
      description: 'AI-generated textures and materials that look photorealistic and professional.',
      benefits: ['PBR materials', 'Custom textures', 'Style transfer', 'UV mapping']
    },
    {
      icon: Camera,
      title: 'Rendering Ready',
      description: 'Models optimized for real-time rendering with proper LOD and optimization.',
      benefits: ['Game-ready assets', 'VR/AR compatible', 'Mobile optimized', 'Export ready']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Built-in quality checks ensure every generated model meets professional standards.',
      benefits: ['Auto-validation', 'Error detection', 'Quality scoring', 'Manual review']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share and collaborate on 3D projects with your team in real-time.',
      benefits: ['Version control', 'Team sharing', 'Comments system', 'Project management']
    }
  ];

  const benefits = [
    'Reduce 3D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3D artists'
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Create characters, environments, and props for video games',
      icon: Cube
    },
    {
      title: 'Architecture Visualization',
      description: 'Generate 3D models for architectural presentations and VR tours',
      icon: Building
    },
    {
      title: 'Product Design',
      description: 'Rapid prototyping and visualization for product development',
      icon: Package
    },
    {
      title: 'Marketing & Advertising',
      description: 'Create 3D assets for campaigns, social media, and presentations',
      icon: Megaphone
    },
    {
      title: 'Education & Training',
      description: 'Interactive 3D content for educational and training applications',
      icon: GraduationCap
    },
    {
      title: 'E-commerce',
      description: '3D product models for online stores and virtual showrooms',
      icon: ShoppingCart
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        '100 3D models per month',
        'Basic texturing',
        'Standard quality',
        'Email support',
        'Common formats export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '500 3D models per month',
        'Advanced texturing',
        'High quality output',
        'Priority support',
        'All formats export',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited 3D models',
        'Premium texturing',
        'Ultra-high quality',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation technology. Create professional 3D assets in minutes." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, text to 3D, 3D assets, game development, architecture visualization" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 3D
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Generation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into stunning 3D models with our cutting-edge AI technology. 
            Create professional 3D assets in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Start Creating 3D Models
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI 3D Generation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced AI technology creates high-quality 3D models from simple text descriptions, 
              revolutionizing how you approach 3D content creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI 3D Generation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of 3D content creation with our revolutionary AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI 3D generation technology is perfect for a wide range of industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <app.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your 3D generation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${tier.popular ? 'border-purple-400 bg-purple-500/10' : 'border-white/10'} hover:bg-white/10 transition-all duration-300`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white' 
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing 3D Models?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using AI to revolutionize their 3D workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;