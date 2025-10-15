'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  EyeIcon,
  AdjustmentsHorizontalIcon,
  PaintBrushIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: CubeIcon,
      title: 'AI 3D Generation',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches using advanced AI',
      stats: '10,000+ models generated'
    },
    {
      icon: PaintBrushIcon,
      title: 'Text-to-3D',
      description: 'Create detailed 3D models from simple text descriptions with photorealistic quality',
      stats: '95% accuracy rate'
    },
    {
      icon: EyeIcon,
      title: 'Image-to-3D',
      description: 'Convert 2D images into full 3D models with automatic depth mapping and texture generation',
      stats: '50+ image formats'
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Real-time Editing',
      description: 'Edit and modify 3D models in real-time with AI-powered suggestions and optimization',
      stats: '< 100ms response'
    },
    {
      icon: PrinterIcon,
      title: '3D Printing Ready',
      description: 'Export models optimized for 3D printing with automatic support generation and error checking',
      stats: 'Print-ready output'
    },
    {
      icon: ChartBarIcon,
      title: 'Quality Analytics',
      description: 'Analyze model quality, polygon count, and optimization suggestions for better performance',
      stats: 'Real-time metrics'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '100 models/month',
        'Basic AI generation',
        'Standard quality',
        'STL/OBJ export',
        'Email support',
        'Web interface'
      ],
      popular: false,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '500 models/month',
        'Advanced AI features',
        'High quality output',
        'All export formats',
        'Priority support',
        'API access',
        'Batch processing',
        'Custom textures'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited models',
        'Premium AI features',
        'Ultra-high quality',
        'Custom integrations',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantee',
        'White-label solution'
      ],
      popular: false,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Generate characters, props, and environments for games with consistent art style.',
      icon: CubeIcon
    },
    {
      title: '3D Printing',
      description: 'Create custom designs and prototypes for 3D printing with automatic optimization.',
      icon: PrinterIcon
    },
    {
      title: 'Architecture',
      description: 'Generate building models, furniture, and interior designs from descriptions.',
      icon: EyeIcon
    },
    {
      title: 'Product Design',
      description: 'Create product prototypes and visualizations for marketing and development.',
      icon: PaintBrushIcon
    }
  ];

  const testimonials = [
    {
      name: 'James Rodriguez',
      role: 'Game Developer',
      company: 'Pixel Studios',
      content: 'Zion AI 3D Generator has revolutionized our asset creation. We can now generate hundreds of models in hours instead of weeks.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      role: 'Product Designer',
      company: 'DesignCorp',
      content: 'The text-to-3D feature is incredible. I can describe what I want and get a perfect 3D model in minutes.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: '3D Artist',
      company: 'CreativeWorks',
      content: 'The quality of generated models is outstanding. They look like they were created by professional 3D artists.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Generate high-quality 3D models from text descriptions and images using advanced AI. Perfect for game development, 3D printing, and design."
        keywords="AI 3D generator, 3D model generation, text-to-3D, image-to-3D, 3D printing, game development, 3D design"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-purple-900/30"></div>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Create stunning 3D models from text descriptions and images with AI. Perfect for game development, 
                3D printing, architecture, and product design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-400/25 neon-border-animated">
                  Try Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2">10K+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Models Generated</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2">95%</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-100ms hover:shadow-lg hover:shadow-pink-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-400 mb-1 lg:mb-2">100ms</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Response Time</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">50+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Export Formats</div>
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
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to create professional-quality 3D models with AI-powered generation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-cyan-400 font-medium neon-text">{feature.stats}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect For <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From game development to product design, our AI 3D generator adapts to your creative needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
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
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your 3D modeling needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative ${plan.popular ? 'scale-105' : ''} holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
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
                What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Users Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of creators who have transformed their 3D modeling workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
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
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-purple-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience the future of 3D model generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-cyan-500/25">
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