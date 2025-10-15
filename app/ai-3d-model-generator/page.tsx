'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  PaintBrushIcon, 
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CogIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  BuildingOfficeIcon,
  TrendingUpIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: CubeIcon,
      title: 'AI 3D Generation',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches with 98.5% accuracy',
      benefits: ['Text-to-3D generation', 'Image-to-3D conversion', 'Sketch-to-3D modeling']
    },
    {
      icon: PaintBrushIcon,
      title: 'Advanced Texturing',
      description: 'AI-powered texturing and material application for photorealistic 3D models',
      benefits: ['Automatic texturing', 'Material generation', 'UV mapping optimization']
    },
    {
      icon: EyeIcon,
      title: 'Real-time Preview',
      description: 'Real-time 3D model preview and editing with instant feedback and adjustments',
      benefits: ['Live preview', 'Real-time editing', 'Instant feedback']
    },
    {
      icon: CogIcon,
      title: 'Export & Integration',
      description: 'Export to all major 3D formats and integrate with popular design tools',
      benefits: ['Multiple export formats', 'Tool integration', 'API access']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual creators and designers',
      features: [
        'Up to 50 models/month',
        'Basic AI generation',
        'Standard textures',
        'Email support',
        'Web interface',
        'Basic export formats',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for professional designers and studios',
      features: [
        'Up to 200 models/month',
        'Advanced AI generation',
        'Premium textures',
        'Priority support',
        'Desktop app',
        'All export formats',
        'API access',
        'Custom training',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Comprehensive solution for large companies and agencies',
      features: [
        'Unlimited models',
        'Full AI generation suite',
        'Custom models',
        '24/7 dedicated support',
        'Enterprise features',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const industries = [
    'Gaming', 'Architecture', 'Product Design', 'Film & VFX', 'E-commerce',
    'Education', 'Healthcare', 'Automotive', 'Fashion', 'Real Estate'
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Generate 3D assets for games, characters, and environments',
      icon: CubeIcon,
      impact: 'Reduce asset creation time by 70%'
    },
    {
      title: 'Product Visualization',
      description: 'Create 3D models for product catalogs and marketing materials',
      icon: BuildingOfficeIcon,
      impact: 'Increase conversion rates by 40%'
    },
    {
      title: 'Architectural Visualization',
      description: 'Generate 3D models for architectural presentations and client reviews',
      icon: LightBulbIcon,
      impact: 'Improve client approval by 60%'
    },
    {
      title: 'E-commerce',
      description: 'Create 3D product models for online stores and AR experiences',
      icon: TrendingUpIcon,
      impact: 'Boost sales by 35%'
    }
  ];

  const metrics = [
    { metric: '98.5%', label: 'Generation Accuracy' },
    { metric: '70%', label: 'Time Savings' },
    { metric: '50+', label: 'Export Formats' },
    { metric: '24/7', label: 'AI Processing' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI 3D Model Generator Pro - Advanced 3D Generation AI | Zion Tech Group"
        description="Transform 3D creation with our AI-powered model generator. Text-to-3D, image-to-3D, advanced texturing, and real-time preview. Starting at $99/month."
        keywords="AI 3D model generator, 3D generation AI, text-to-3D, image-to-3D, 3D modeling, 3D design, 3D visualization, 3D technology"
        canonicalUrl="https://ziontechgroup.com/ai-3d-model-generator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Zion AI 3D Model Generator Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize 3D creation with AI-powered model generation from text, images, and sketches. 
                <br className="hidden sm:block" />
                <span className="text-purple-400 font-semibold">Create photorealistic 3D models 70% faster with 98.5% accuracy</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25 neon-border-animated"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                {metrics.map((metric, index) => (
                  <div key={index} 
                    className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">{metric.metric}</div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3D Generation Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Cutting-edge AI technology designed specifically for 3D creators to generate high-quality models instantly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Industry <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI 3D generator is used across multiple industries for various applications and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 text-center"
                >
                  <div className="text-sm font-medium text-gray-300 group-hover:text-pink-300 transition-colors">
                    {industry}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Real-World <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See how 3D creators and professionals are using our AI generator to create amazing 3D content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Transparent <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your 3D creation needs. All plans include core AI generation features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-purple-500 shadow-purple-500/20' 
                      : 'border-slate-700 hover:border-purple-500 hover:shadow-purple-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of 3D creators who are already using AI to generate stunning 3D content.
              <br className="hidden sm:block" />
              <span className="text-purple-400 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;