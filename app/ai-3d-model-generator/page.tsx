'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  EyeIcon,
  PaintBrushIcon,
  CogIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PlayIcon,
  PauseIcon,
  StopIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: CubeIcon,
      title: 'AI 3D Generation',
      description: 'Generate high-quality 3D models from text descriptions or 2D images',
      details: ['Text-to-3D generation', 'Image-to-3D conversion', 'Style transfer', 'Real-time generation']
    },
    {
      icon: PaintBrushIcon,
      title: 'Advanced Texturing',
      description: 'Create realistic textures and materials with AI-powered algorithms',
      details: ['Procedural texturing', 'Material generation', 'UV mapping', 'PBR materials']
    },
    {
      icon: EyeIcon,
      title: '3D Visualization',
      description: 'Interactive 3D viewer with real-time rendering and animation',
      details: ['Real-time rendering', 'Animation support', 'Lighting controls', 'Camera controls']
    },
    {
      icon: CpuChipIcon,
      title: 'AI Optimization',
      description: 'Automatically optimize 3D models for different use cases',
      details: ['LOD generation', 'Mesh optimization', 'Texture compression', 'Performance tuning']
    },
    {
      icon: DocumentTextIcon,
      title: 'Multiple Formats',
      description: 'Export to all major 3D formats and game engines',
      details: ['OBJ, FBX, GLTF', 'Unity, Unreal Engine', 'Blender compatibility', 'Custom formats']
    },
    {
      icon: BoltIcon,
      title: 'Real-time Processing',
      description: 'Generate 3D models in real-time with cloud processing',
      details: ['Cloud rendering', 'Batch processing', 'API integration', 'WebGL support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '50 3D models/month',
        'Basic text-to-3D',
        'Standard quality',
        '5 texture variations',
        'Email support',
        'Web interface'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for professionals and studios',
      features: [
        '500 3D models/month',
        'Advanced text-to-3D',
        'High quality generation',
        'Unlimited textures',
        'Image-to-3D conversion',
        'Real-time processing',
        'Priority support',
        'API access',
        'Custom AI models'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited 3D models',
        'Enterprise-grade generation',
        'Custom AI training',
        'Advanced optimization',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantee',
        'White-label options',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create 3D assets for games with AI-generated models and textures.',
      icon: '🎮',
      benefits: ['Faster asset creation', 'Consistent art style', 'Reduced costs', 'Unlimited variations']
    },
    {
      title: 'Architecture Visualization',
      description: 'Generate 3D models for architectural presentations and client meetings.',
      icon: '🏗️',
      benefits: ['Quick prototyping', 'Realistic visualization', 'Client presentations', 'Design iterations']
    },
    {
      title: 'Product Design',
      description: 'Create 3D prototypes and visualizations for product development.',
      icon: '📱',
      benefits: ['Rapid prototyping', 'Design validation', 'Marketing materials', 'Manufacturing prep']
    },
    {
      title: 'VR/AR Content',
      description: 'Generate 3D content for virtual and augmented reality applications.',
      icon: '🥽',
      benefits: ['Immersive experiences', 'Interactive content', 'Real-time generation', 'Optimized models']
    },
    {
      title: 'E-commerce',
      description: 'Create 3D product models for online stores and catalogs.',
      icon: '🛒',
      benefits: ['Product visualization', 'Interactive shopping', 'Reduced returns', 'Better engagement']
    },
    {
      title: 'Education',
      description: 'Create educational 3D content for learning and training.',
      icon: '🎓',
      benefits: ['Interactive learning', 'Complex concepts', 'Visual understanding', 'Engaging content']
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Thompson',
      role: 'Game Developer',
      company: 'Pixel Studios',
      content: 'Zion AI 3D Model Generator has revolutionized our game development process. We can create unique 3D assets 10x faster than traditional methods, saving us months of work.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Architect',
      company: 'DesignWorks',
      content: 'The AI-generated 3D models are incredibly detailed and realistic. Our clients are amazed by the quality and speed of our presentations. It has become an essential tool in our workflow.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Product Designer',
      company: 'InnovateTech',
      content: 'Creating 3D prototypes used to take weeks. Now with Zion AI, we can generate multiple variations in minutes. The quality is professional-grade and ready for production.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Revolutionary AI-powered 3D model generation from text and images. Create high-quality 3D assets for games, architecture, and product design with advanced AI technology."
        keywords="AI 3D model generator, 3D modeling, text-to-3D, image-to-3D, 3D assets, game development, architecture visualization, product design"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(25)].map((_, i) => (
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
                Generate high-quality 3D models from text descriptions or 2D images. Perfect for game development, architecture, and product design.
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
              
              {/* 3D Generation Demo */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Try AI 3D Generation</h3>
                    <p className="text-sm text-gray-400">Describe what you want to create in 3D</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <input 
                        type="text" 
                        placeholder="e.g., A futuristic car with neon lights"
                        className="w-full max-w-md bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button className="flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
                        <CubeIcon className="w-5 h-5 mr-2" />
                        Generate 3D Model
                      </button>
                      <button className="flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors">
                        <EyeIcon className="w-5 h-5 mr-2" />
                        Upload Image
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-300">Input</span>
                          <span className="text-xs text-orange-400">Text Description</span>
                        </div>
                        <div className="w-full h-32 bg-slate-600 rounded flex items-center justify-center">
                          <span className="text-gray-400">Text input area</span>
                        </div>
                      </div>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-300">Generated 3D Model</span>
                          <span className="text-xs text-green-400">✓ Ready</span>
                        </div>
                        <div className="w-full h-32 bg-slate-600 rounded flex items-center justify-center">
                          <span className="text-gray-400">3D model preview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">10x</div>
                  <div className="text-gray-300 text-sm lg:text-base">Faster Creation</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm lg:text-base">Export Formats</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">4K</div>
                  <div className="text-gray-300 text-sm lg:text-base">Texture Quality</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm lg:text-base">Generation</div>
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
                Everything you need to create professional 3D models with AI assistance.
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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
                Perfect for <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See how professionals use our AI 3D model generator across different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
                Simple <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the plan that fits your 3D modeling needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'hover:shadow-orange-500/30 border-2 border-orange-500' : 'hover:shadow-orange-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400 neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-lg shadow-orange-500/25' 
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}>
                    {plan.cta}
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
                Trusted by <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Professionals</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See what professionals are saying about our AI 3D model generator.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SparklesIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic group-hover:text-white transition-colors">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-orange-300 transition-colors">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                    </div>
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
              Ready to Create in 3D?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience the future of 3D model generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-orange-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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