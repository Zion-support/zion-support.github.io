'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  EyeIcon, 
  CubeIcon, 
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CpuChipIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: CubeIcon,
      title: 'Text to 3D',
      description: 'Generate detailed 3D models from simple text descriptions using advanced AI technology.',
      benefits: ['Natural language input', 'High-quality models', 'Multiple styles']
    },
    {
      icon: EyeIcon,
      title: 'Image to 3D',
      description: 'Convert 2D images into fully textured 3D models with accurate depth and proportions.',
      benefits: ['2D to 3D conversion', 'Texture mapping', 'Proportional accuracy']
    },
    {
      icon: PaintBrushIcon,
      title: 'Style Transfer',
      description: 'Apply different artistic styles and materials to your 3D models automatically.',
      benefits: ['Multiple art styles', 'Material variations', 'Custom textures']
    },
    {
      icon: CpuChipIcon,
      title: 'Export Options',
      description: 'Export your 3D models in various formats for different platforms and use cases.',
      benefits: ['Multiple formats', 'Platform compatibility', 'Quality options']
    }
  ];

  const useCases = [
    { name: 'Game Development', icon: '🎮', description: 'Create characters, props, and environments for games' },
    { name: 'Architecture', icon: '🏗️', description: 'Generate building models and interior designs' },
    { name: 'Product Design', icon: '📱', description: 'Prototype products and visualize concepts' },
    { name: '3D Printing', icon: '🖨️', description: 'Create models ready for 3D printing' },
    { name: 'VR/AR', icon: '🥽', description: 'Generate assets for virtual and augmented reality' },
    { name: 'Marketing', icon: '📺', description: 'Create 3D visuals for advertising and presentations' }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$79',
      period: '/month',
      description: 'Perfect for individual creators and small projects',
      features: [
        'Up to 100 3D models per month',
        'Basic text to 3D generation',
        'Standard image to 3D',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for professionals and growing businesses',
      features: [
        'Unlimited 3D models',
        'Advanced text to 3D',
        'High-quality image to 3D',
        'Priority support',
        'All export formats',
        'Style transfer',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Dedicated support team',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      role: 'Game Developer',
      company: 'Pixel Studios',
      content: 'AI 3D Model Generator has revolutionized our asset creation process. We can now create 10x more 3D models in the same time.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Architect',
      company: 'DesignWorks Architecture',
      content: 'The text to 3D feature is incredible. I can quickly visualize client concepts and iterate on designs much faster.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Designer',
      company: 'InnovateTech',
      content: 'This tool has transformed our prototyping process. We can now create realistic 3D models in minutes instead of hours.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="AI-powered 3D model generation from text and images. Create stunning 3D models for games, architecture, and product design with advanced AI technology."
        keywords="AI 3D model generator, text to 3D, image to 3D, 3D modeling AI, game development, architecture visualization, product design"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
                <EyeIcon className="w-5 h-5 text-violet-400 mr-2" />
                <span className="text-violet-300 text-sm font-medium">AI 3D Model Generator</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  AI 3D Model Generator
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create stunning 3D models from text descriptions or images using advanced AI technology. 
                Perfect for game development, architecture, and product design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-violet-400 text-violet-300 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">50+</div>
                  <div className="text-gray-300">Export Formats</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">99%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Perfect for <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From game development to architecture, our AI 3D generator serves every creative need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-violet-300 transition-colors">
                      {useCase.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Generation Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered 3D model generation tools designed for maximum creativity and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Flexible <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your 3D modeling needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-violet-500 shadow-lg shadow-violet-500/25' 
                    : 'border-slate-700 hover:border-violet-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-violet-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700'
                      : 'border-2 border-violet-400 text-violet-300 hover:bg-violet-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Loved by <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Creative Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how creators are revolutionizing their workflows with AI 3D Model Generator.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-violet-500 transition-all duration-300">
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
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Amazing <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">3D Models</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators bringing their ideas to life with AI-powered 3D model generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 inline ml-2" />
              </button>
              <button className="border-2 border-violet-400 text-violet-300 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;