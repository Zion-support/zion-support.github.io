'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, Cube, Palette, Download, Upload, Settings, Brain, Sparkles, Camera, Gamepad2, Building } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: 'AI 3D Model Generation',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches using advanced AI',
      benefits: ['Text-to-3D conversion', 'Image-to-3D conversion', 'Sketch-to-3D conversion', 'High-resolution output']
    },
    {
      icon: Palette,
      title: 'Automatic Texturing',
      description: 'AI-powered texture generation and material application for realistic 3D models',
      benefits: ['Procedural textures', 'Material libraries', 'UV mapping', 'PBR materials']
    },
    {
      icon: Settings,
      title: 'Model Optimization',
      description: 'Automatically optimize 3D models for different platforms and performance requirements',
      benefits: ['LOD generation', 'Polygon reduction', 'Texture compression', 'Platform optimization']
    },
    {
      icon: Download,
      title: 'Multi-Format Export',
      description: 'Export 3D models in various formats for different applications and platforms',
      benefits: ['OBJ, FBX, GLTF', 'Game engine ready', '3D printing formats', 'Web optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$199/month',
      description: 'Perfect for individual creators and small projects',
      features: [
        'Up to 100 3D models/month',
        'Standard resolution (2K)',
        'Basic texturing',
        '5 export formats',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$599/month',
      description: 'Ideal for design studios and game developers',
      features: [
        'Up to 1,000 3D models/month',
        'High resolution (4K)',
        'Advanced texturing',
        'All export formats',
        'Priority support',
        'Custom model training',
        'Batch processing',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      description: 'For large organizations and production studios',
      features: [
        'Unlimited 3D models',
        'Ultra-high resolution (8K)',
        'Professional texturing',
        'Custom formats',
        '24/7 dedicated support',
        'Custom AI training',
        'White-label solution',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create game assets, characters, and environments with AI-generated 3D models',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapons & props', 'Animation rigs']
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Generate architectural visualizations and virtual property tours',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Landscape planning', 'Virtual tours']
    },
    {
      title: 'E-commerce',
      description: 'Create 3D product models for online stores and AR experiences',
      icon: '🛍️',
      examples: ['Product visualization', 'AR try-on', 'Interactive catalogs', 'Marketing materials']
    },
    {
      title: 'Education & Training',
      description: 'Develop educational 3D content and training simulations',
      icon: '🎓',
      examples: ['Anatomical models', 'Historical reconstructions', 'Scientific visualizations', 'Training simulators']
    }
  ];

  const technicalSpecs = [
    { spec: 'Model Quality', value: 'Up to 8K resolution' },
    { spec: 'Generation Speed', value: '2-5 minutes per model' },
    { spec: 'Supported Formats', value: '20+ formats' },
    { spec: 'AI Training Data', value: '10M+ 3D models' },
    { spec: 'API Response Time', value: '< 30 seconds' },
    { spec: 'Uptime SLA', value: '99.9%' },
    { spec: 'Data Security', value: 'Enterprise encryption' },
    { spec: 'Cloud Storage', value: 'Unlimited' }
  ];

  const industries = [
    {
      name: 'Gaming',
      description: 'Create immersive game worlds with AI-generated 3D assets',
      icon: Gamepad2,
      benefits: ['Faster asset creation', 'Consistent art style', 'Reduced costs', 'Scalable production']
    },
    {
      name: 'Architecture',
      description: 'Visualize architectural designs with photorealistic 3D models',
      icon: Building,
      benefits: ['Client presentations', 'Design iterations', 'Virtual walkthroughs', 'Marketing materials']
    },
    {
      name: 'E-commerce',
      description: 'Enhance online shopping with interactive 3D product models',
      icon: Cube,
      benefits: ['Better product visualization', 'Reduced returns', 'Increased conversions', 'AR integration']
    },
    {
      name: 'Education',
      description: 'Create engaging educational content with 3D visualizations',
      icon: Brain,
      benefits: ['Interactive learning', 'Complex concepts', 'Visual understanding', 'Student engagement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Model Generation - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality 3D models with AI. Create game assets, architectural visualizations, and product models from text or images. Starting at $199/month." />
        <meta name="keywords" content="ai 3d generation, 3d model creation, text to 3d, image to 3d, 3d ai, game assets, architectural visualization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary 3D AI Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI 3D Model Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate high-quality 3D models from text descriptions, images, or sketches. Perfect for game development, architecture, e-commerce, and education.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8K</div>
              <div className="text-gray-300">Resolution</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">2-5min</div>
              <div className="text-gray-300">Generation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-gray-300">Export Formats</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">10M+</div>
              <div className="text-gray-300">Training Data</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced 3D Generation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <industry.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="text-left space-y-1">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-gray-400">• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-left space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} 3D Generation Plan`}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{spec.value}</div>
                <div className="text-gray-300">{spec.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Creating 3D Models with AI
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your ideas into stunning 3D models with our advanced AI technology. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI3DGenerationPage;