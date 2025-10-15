'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  CubeIcon as CubeIconSolid,
  BeakerIcon,
  EyeIcon,
  MapIcon,
  CurrencyDollarIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

const ZionAI3DModelGeneratorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: CubeIcon,
      title: 'AI 3D Generation',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches with 99.2% accuracy.',
      stats: '1M+ 3D models generated'
    },
    {
      icon: PaintBrushIcon,
      title: 'Texture & Material AI',
      description: 'Automatically generate realistic textures, materials, and lighting for 3D models using AI.',
      stats: '500,000+ textures created'
    },
    {
      icon: EyeIcon,
      title: 'Real-time Rendering',
      description: 'Advanced real-time rendering engine with photorealistic output and multiple export formats.',
      stats: '60 FPS real-time rendering'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration Tools',
      description: 'Team collaboration features with version control, commenting, and project sharing.',
      stats: '50,000+ teams using'
    },
    {
      icon: ChartBarIcon,
      title: 'Animation Support',
      description: 'AI-powered animation generation and rigging for characters and objects.',
      stats: '100,000+ animations created'
    },
    {
      icon: CogIcon,
      title: 'API Integration',
      description: 'RESTful API for seamless integration with existing 3D workflows and pipelines.',
      stats: '99.9% uptime guarantee'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual creators and freelancers',
      features: [
        'Up to 100 3D models/month',
        'Basic texture generation',
        'Standard rendering quality',
        'Personal projects only',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Studio Pro',
      price: '$299',
      period: '/month',
      description: 'Ideal for design studios and creative agencies',
      features: [
        'Unlimited 3D models',
        'Advanced texture AI',
        'High-quality rendering',
        'Team collaboration (up to 10 users)',
        'Priority support',
        'All export formats',
        'API access',
        'Commercial license'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large companies and game studios',
      features: [
        'Everything in Studio Pro',
        'Unlimited team members',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'White-label options',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      title: '3D Artist',
      company: 'Creative Studio Pro',
      content: 'Zion AI 3D Model Generator has revolutionized my workflow. I can create complex models in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Game Developer',
      company: 'Indie Game Studio',
      content: 'The texture generation AI is incredible. It saves us weeks of work on each project and the quality is outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Architect',
      company: 'Modern Architecture Group',
      content: 'The real-time rendering capabilities have transformed how we present our designs to clients. The quality is photorealistic.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI 3D Model Generator - AI-Powered 3D Creation Platform | Zion Tech Group"
        description="Create stunning 3D models with AI-powered generation, texture creation, and real-time rendering. 99.2% accuracy, 1M+ models generated."
        keywords="AI 3D model generator, 3D creation, texture generation, real-time rendering, 3D modeling AI, game development, architectural visualization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <CubeIconSolid className="w-5 h-5 text-violet-400 mr-2" />
                <span className="text-violet-400 font-medium">AI 3D Creation Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Zion AI 3D Model Generator
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create stunning 3D models with AI-powered generation, texture creation, and real-time rendering. 
                Achieve 99.2% accuracy in model generation and bring your creative visions to life instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-violet-400 text-violet-300 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">99.2%</div>
                  <div className="text-gray-300 text-sm">Generation Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">1M+</div>
                  <div className="text-gray-300 text-sm">3D Models Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">60 FPS</div>
                  <div className="text-gray-300 text-sm">Real-time Rendering</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Teams Using</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced AI 3D Creation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 3D creation technology solutions designed to accelerate your creative workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-violet-400 font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your 3D creation needs. All plans include our core AI generation features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-violet-500 shadow-lg shadow-violet-500/25' 
                    : 'border-slate-700 hover:border-violet-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-violet-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700'
                      : 'border-2 border-violet-400 text-violet-300 hover:bg-violet-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by 3D Creators Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what 3D artists and creators are saying about Zion AI 3D Model Generator.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of 3D creators who trust Zion AI 3D Model Generator for their creative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAI3DModelGeneratorPage;