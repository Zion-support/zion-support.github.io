'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  CheckCircleIcon, 
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  PhotoIcon,
  DocumentTextIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  EyeIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('characters');

  const features = [
    {
      icon: CubeIcon,
      title: 'Text-to-3D Generation',
      description: 'Generate detailed 3D models from text descriptions using advanced AI algorithms and neural networks.',
      benefits: ['Natural language input', 'High-quality models', 'Multiple formats', 'Custom specifications']
    },
    {
      icon: PhotoIcon,
      title: 'Image-to-3D Conversion',
      description: 'Convert 2D images into fully textured 3D models with depth and realistic geometry.',
      benefits: ['2D to 3D conversion', 'Automatic texturing', 'Depth estimation', 'Geometry reconstruction']
    },
    {
      icon: PaintBrushIcon,
      title: 'AI Texturing & Materials',
      description: 'Apply realistic textures and materials to 3D models using AI-powered material generation.',
      benefits: ['Realistic materials', 'PBR textures', 'Custom materials', 'UV mapping']
    },
    {
      icon: CpuChipIcon,
      title: 'Smart Optimization',
      description: 'Automatically optimize 3D models for different platforms and performance requirements.',
      benefits: ['LOD generation', 'Polygon reduction', 'Texture compression', 'Platform optimization']
    },
    {
      icon: EyeIcon,
      title: 'Real-time Preview',
      description: 'Preview and interact with 3D models in real-time with advanced rendering capabilities.',
      benefits: ['Interactive preview', 'Real-time rendering', 'Lighting simulation', 'Animation preview']
    },
    {
      icon: ClockIcon,
      title: 'Rapid Generation',
      description: 'Generate complex 3D models in minutes instead of hours with our optimized AI pipeline.',
      benefits: ['Fast generation', 'Batch processing', 'Queue management', 'Priority processing']
    }
  ];

  const modelCategories = [
    {
      id: 'characters',
      name: 'Characters & Avatars',
      description: 'Create realistic human and creature models for games and VR',
      examples: ['Human avatars', 'Fantasy creatures', 'Animals', 'Robots'],
      price: '$29',
      time: '5-15 min'
    },
    {
      id: 'objects',
      name: 'Objects & Props',
      description: 'Generate everyday objects and props for scenes and environments',
      examples: ['Furniture', 'Vehicles', 'Weapons', 'Tools'],
      price: '$19',
      time: '3-10 min'
    },
    {
      id: 'environments',
      name: 'Environments',
      description: 'Create detailed 3D environments and landscapes',
      examples: ['Buildings', 'Landscapes', 'Interiors', 'Cities'],
      price: '$49',
      time: '10-30 min'
    },
    {
      id: 'abstract',
      name: 'Abstract & Artistic',
      description: 'Generate abstract and artistic 3D models for creative projects',
      examples: ['Sculptures', 'Abstract shapes', 'Art pieces', 'Conceptual models'],
      price: '$39',
      time: '5-20 min'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for hobbyists',
      features: [
        '10 models/month',
        'Basic quality (1K textures)',
        'Standard formats (OBJ, FBX)',
        'Email support',
        'Web preview',
        'Basic materials',
        '1GB storage'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for professionals',
      features: [
        '50 models/month',
        'High quality (4K textures)',
        'All formats (OBJ, FBX, GLTF, STL)',
        'Priority support',
        'Advanced materials',
        'Real-time preview',
        '10GB storage',
        'API access',
        'Batch processing',
        'Custom materials'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For studios and teams',
      features: [
        'Unlimited models',
        'Ultra quality (8K textures)',
        'All formats + custom',
        '24/7 support',
        'Premium materials',
        'Advanced rendering',
        'Unlimited storage',
        'White-label options',
        'Dedicated server',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create characters, environments, and assets for video games',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapons & tools', 'UI elements']
    },
    {
      title: 'Architecture & Design',
      description: 'Generate 3D models for architectural visualization and design',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Furniture', 'Landscape elements']
    },
    {
      title: '3D Printing',
      description: 'Create models optimized for 3D printing and manufacturing',
      icon: '🖨️',
      examples: ['Prototypes', 'Custom parts', 'Artistic prints', 'Functional objects']
    },
    {
      title: 'VR/AR Applications',
      description: 'Develop 3D content for virtual and augmented reality experiences',
      icon: '🥽',
      examples: ['VR environments', 'AR objects', 'Interactive models', 'Spatial content']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Game Developer',
      company: 'Pixel Studios',
      content: 'Zion AI 3D Model Generator has revolutionized our asset creation pipeline. We can now prototype game assets 10x faster than traditional methods.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Architect',
      company: 'DesignWorks Architecture',
      content: 'The AI-generated 3D models are incredibly detailed and realistic. Our clients love seeing their projects in 3D before construction begins.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: '3D Artist',
      company: 'Creative Solutions',
      content: 'As a freelance 3D artist, this tool has helped me take on more projects and deliver higher quality work in less time.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Create stunning 3D models with AI-powered generation. Features text-to-3D, image-to-3D conversion, realistic texturing, and multiple export formats."
        keywords="AI 3D model generator, 3D modeling, text to 3D, image to 3D, 3D assets, game development, 3D printing, VR AR models"
        canonicalUrl="https://ziontechgroup.com/ai-3d-model-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-indigo-300 text-sm font-medium">AI-Powered 3D Generation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI 3D Model Generator
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Create stunning 3D models from text descriptions and images using advanced AI. 
                Generate characters, objects, environments, and more in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  View Gallery
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>3 free models</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Multiple formats</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>4K textures</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Categories */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Choose Your Model Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate 3D models for any purpose with our specialized AI models
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modelCategories.map((category) => (
                <div key={category.id} className={`bg-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id ? 'border-indigo-500' : 'border-slate-700'
                }`}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CubeIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-indigo-400">{category.price}</div>
                      <div className="text-sm text-gray-500">{category.time}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {category.examples.map((example, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {selectedCategory === category.id ? 'Selected' : 'Select Category'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional 3D models with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3D Model Demo */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Try 3D Model Generation
              </h2>
              <p className="text-xl text-gray-300">
                Enter a description and watch AI create your 3D model
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Describe your 3D model
                  </label>
                  <textarea
                    className="w-full h-32 p-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="e.g., A detailed medieval knight with armor and sword, realistic style..."
                  />
                  <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors">
                    Generate 3D Model
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    3D Model Preview
                  </label>
                  <div className="w-full h-64 bg-slate-700 border border-slate-600 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <CubeIcon className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                      <p className="text-indigo-400">3D Model will appear here</p>
                      <p className="text-sm text-gray-500">Interactive 3D viewer</p>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
                      Download OBJ
                    </button>
                    <button className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
                      Download FBX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Perfect for Every 3D Project
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From game development to 3D printing, create models for any purpose
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your 3D modeling needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative bg-slate-800 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Trusted by 3D Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users have to say about their 3D modeling experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Creating 3D Models Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of creators who are already building amazing 3D content with AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-indigo-100">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;