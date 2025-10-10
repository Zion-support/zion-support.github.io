'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Brain, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, Phone, Mail, Palette, Camera, Users } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate high-quality 3D models from text descriptions or 2D images',
      benefits: ['Text-to-3D generation', 'Image-to-3D conversion', 'Style transfer', 'Quality optimization']
    },
    {
      icon: Palette,
      title: 'Advanced Texturing',
      description: 'Create realistic textures and materials with AI assistance',
      benefits: ['Procedural texturing', 'Material libraries', 'UV mapping', 'Lighting optimization']
    },
    {
      icon: Camera,
      title: 'Rendering Engine',
      description: 'High-quality rendering with real-time preview capabilities',
      benefits: ['Real-time preview', 'Multiple render engines', 'Animation support', 'Export formats']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quickly iterate and refine 3D designs with AI assistance',
      benefits: ['Fast generation', 'Iterative design', 'Version control', 'Collaboration tools']
    }
  ];

  const industries = [
    {
      title: 'Gaming & Entertainment',
      description: 'Create 3D assets, characters, and environments for games and media',
      icon: Users,
      benefits: ['Character generation', 'Environment design', 'Asset libraries', 'Animation support']
    },
    {
      title: 'Architecture & Construction',
      description: 'Generate 3D architectural models and visualizations',
      icon: Box,
      benefits: ['Building visualization', 'Interior design', 'Urban planning', 'Client presentations']
    },
    {
      title: 'Product Design',
      description: 'Rapid prototyping and visualization for product development',
      icon: Zap,
      benefits: ['Product mockups', 'Design iteration', 'Manufacturing prep', 'Marketing materials']
    },
    {
      title: 'Education & Training',
      description: 'Create educational 3D content and interactive experiences',
      icon: Brain,
      benefits: ['Educational models', 'Interactive content', 'VR/AR support', 'Learning tools']
    }
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$49/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 100 3D models/month',
        'Basic AI generation',
        'Standard textures',
        'Email support',
        'HD rendering'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Ideal for professionals and small teams',
      features: [
        'Up to 500 3D models/month',
        'Advanced AI features',
        'Premium textures',
        'Priority support',
        '4K rendering',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited 3D models',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { value: '10x', label: 'Faster Creation', description: 'Compared to traditional 3D modeling' },
    { value: '95%', label: 'Time Savings', description: 'Reduction in 3D asset creation time' },
    { value: '50+', label: 'Export Formats', description: 'Support for all major 3D formats' },
    { value: '24/7', label: 'AI Processing', description: 'Continuous model generation' }
  ];

  const benefits = [
    'Generate 3D models 10x faster than traditional methods',
    'Reduce 3D asset creation costs by 80%',
    'Create photorealistic 3D content with AI',
    'Support for all major 3D software formats',
    'Real-time collaboration and sharing',
    'Automated optimization and quality enhancement',
    'Extensive library of pre-built 3D assets',
    'API integration for custom workflows'
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation Platform - Zion Tech Group | Create 3D Models with AI</title>
        <meta name="description" content="Generate high-quality 3D models with AI. Text-to-3D, image-to-3D, and advanced texturing for gaming, architecture, product design, and more." />
        <meta name="keywords" content="AI 3D generation, 3D modeling AI, text to 3D, image to 3D, 3D asset creation, procedural generation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI 3D Generation Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate high-quality 3D models with AI. Create stunning 3D assets from text descriptions, images, or sketches. Perfect for gaming, architecture, product design, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Gallery
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced 3D AI Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by cutting-edge AI models and neural networks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
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

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with AI-powered 3D generation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                      <p className="text-gray-300">{industry.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionize your 3D content creation process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your 3D creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    {plan.price !== 'Custom' && <p className="text-gray-400">per month</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Amazing 3D Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start generating professional 3D models with AI. No experience required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View Examples
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DGenerationPage;