'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const features = [
    'AI-powered 3D model generation',
    'Text-to-3D conversion',
    'Image-to-3D conversion',
    'Real-time rendering',
    'Multiple export formats',
    'Custom material generation',
    'Animation support',
    'VR/AR compatibility',
    'Batch processing',
    'Cloud rendering',
    'Collaborative editing',
    'API integration'
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '50 3D models/month',
        'Basic AI generation',
        'Standard quality',
        'Email support',
        'Web interface'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '200 3D models/month',
        'Advanced AI generation',
        'High-quality output',
        'Priority support',
        'API access',
        'Custom materials',
        'Animation tools'
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
        'Premium AI models',
        '24/7 phone support',
        'Custom integrations',
        'White-label options',
        'Advanced analytics',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Generate 3D assets, characters, and environments for games with AI-powered creativity.',
      icon: CubeIcon
    },
    {
      title: 'Architecture',
      description: 'Create 3D models of buildings, interiors, and landscapes for architectural visualization.',
      icon: EyeIcon
    },
    {
      title: 'Product Design',
      description: 'Generate 3D prototypes and product models for design and manufacturing.',
      icon: SparklesIcon
    },
    {
      title: 'VR/AR Content',
      description: 'Create immersive 3D content for virtual and augmented reality applications.',
      icon: CpuChipIcon
    }
  ];

  const supportedFormats = [
    'OBJ', 'FBX', 'GLTF', 'STL', 'PLY', '3DS', 'DAE', 'BLEND', 'USD', 'USDZ'
  ];

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Revolutionary AI-powered 3D model generation from text and images. Create stunning 3D assets for games, architecture, and VR/AR. Start your free trial today."
        keywords="AI 3D model generator, 3D modeling, text to 3D, image to 3D, 3D assets, game development, architecture visualization, VR AR content"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Cyber Elements */}
          <div className="floating-cyber-elements">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="cyber-element" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text-glow">
                  AI 3D Model Generator
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Create stunning 3D models from text descriptions and images using advanced AI. Perfect for game development, architecture, and VR/AR content creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-orange-400/25 holographic-border">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Revolutionary <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">3D AI</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI 3D Model Generator uses cutting-edge neural networks to create photorealistic 3D models from simple text descriptions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">All Major Formats</span> Supported
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Export your 3D models in any format you need for your specific use case.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {supportedFormats.map((format, index) => (
                <div key={index} 
                  className="cyber-card-advanced p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <CubeIcon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <span className="text-gray-300 text-sm font-medium">{format}</span>
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
                Perfect for <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From game developers to architects, our AI 3D Model Generator adapts to your creative needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your 3D modeling needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`group relative ${plan.popular ? 'cyber-card-advanced scale-105' : 'cyber-card-advanced'} p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-text-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400 neon-text-glow">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'cyber-button bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' 
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Create Amazing 3D Models Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial and experience the power of AI-powered 3D model generation. No credit card required.
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