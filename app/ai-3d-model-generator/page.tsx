'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  EyeIcon,
  ClockIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  PlayIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: CubeIcon,
      title: 'AI 3D Model Generation',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D conversion', 'Sketch-to-3D conversion']
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Advanced Customization',
      description: 'Fine-tune generated models with detailed parameters, materials, textures, and lighting adjustments.',
      benefits: ['Material customization', 'Texture mapping', 'Lighting control']
    },
    {
      icon: PhotoIcon,
      title: 'Multiple Export Formats',
      description: 'Export your 3D models in all major formats including OBJ, FBX, STL, GLTF, and more.',
      benefits: ['20+ export formats', 'High-resolution output', 'Animation support']
    },
    {
      icon: EyeIcon,
      title: 'Real-time Preview',
      description: 'Preview and interact with your 3D models in real-time with our advanced 3D viewer.',
      benefits: ['Interactive 3D viewer', '360° rotation', 'Zoom and pan controls']
    },
    {
      icon: SparklesIcon,
      title: 'AI Texture Generation',
      description: 'Automatically generate realistic textures and materials for your 3D models using AI.',
      benefits: ['Procedural textures', 'Realistic materials', 'PBR workflow']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Commercial License',
      description: 'Use generated models for commercial purposes with full commercial licensing included.',
      benefits: ['Commercial use rights', 'No attribution required', 'Full ownership']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 50 models/month',
        'Basic AI generation',
        'Standard quality',
        'Email support',
        'OBJ/STL export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        'Up to 200 models/month',
        'Advanced AI features',
        'High quality output',
        'Priority support',
        'All export formats',
        'Custom materials',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited models',
        'All AI features',
        'Ultra-high quality',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create 3D assets for games, characters, environments, and props with AI assistance.',
      icon: PlayIcon
    },
    {
      title: 'Architecture Visualization',
      description: 'Generate 3D models for architectural designs, interior spaces, and urban planning.',
      icon: CubeIcon
    },
    {
      title: 'Product Design',
      description: 'Create 3D prototypes and visualizations for product design and manufacturing.',
      icon: AdjustmentsHorizontalIcon
    },
    {
      title: '3D Printing',
      description: 'Generate 3D models optimized for 3D printing with proper geometry and supports.',
      icon: CubeIcon
    },
    {
      title: 'VR/AR Content',
      description: 'Create immersive 3D content for virtual and augmented reality applications.',
      icon: EyeIcon
    },
    {
      title: 'Marketing Materials',
      description: 'Generate 3D models for marketing campaigns, presentations, and visual content.',
      icon: PhotoIcon
    }
  ];

  const testimonials = [
    {
      name: 'James Wilson',
      role: 'Game Developer',
      content: 'Zion AI 3D Model Generator has revolutionized our asset creation pipeline. We can now generate high-quality 3D models in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Architect',
      content: 'The AI-generated 3D models are incredibly detailed and realistic. Perfect for client presentations and design visualization.',
      rating: 5
    },
    {
      name: 'Mark Rodriguez',
      role: 'Product Designer',
      content: 'The customization options are amazing. I can fine-tune every aspect of the generated models to match my exact requirements.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Generate high-quality 3D models from text, images, or sketches using advanced AI. Perfect for game development, architecture, and product design."
        keywords="AI 3D model generator, 3D modeling, text-to-3D, image-to-3D, 3D assets, game development, architecture visualization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI 3D Model Generator
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Create stunning 3D models from text descriptions, images, or sketches using advanced AI technology. Perfect for game development, architecture, and product design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-orange-400/25 neon-border-animated">
                  Try Live Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">20+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Export Formats</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm sm:text-base">Preview</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">Commercial</div>
                  <div className="text-gray-300 text-sm sm:text-base">License</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">3D Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Experience the most comprehensive AI-powered 3D model generation platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-orange-400 font-medium neon-text">AI Powered</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect For <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From game development to architecture, our AI 3D generator adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4 group-hover:text-orange-300 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Choose Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Flexible pricing options designed to meet your 3D modeling needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'hover:shadow-orange-500/20 border-2 border-orange-500' : 'hover:shadow-red-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'cyber-button' 
                      : 'border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Creators <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of creators who have transformed their 3D workflow with our AI generator.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-orange-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Create Amazing 3D Models Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial and experience the future of AI-powered 3D model generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-orange-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;