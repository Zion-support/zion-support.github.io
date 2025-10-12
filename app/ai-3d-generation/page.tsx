import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Cube, Zap, Users, BarChart3, Clock, Palette, Camera, Layers } from 'lucide-react'

export default function AI3DGenerationPage() {
  const features = [
    {
      icon: <Cube className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate stunning 3D models from text descriptions or 2D images using advanced AI algorithms.'
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: 'Text-to-3D Generation',
      description: 'Transform text prompts into detailed 3D models with realistic textures and materials.'
    },
    {
      icon: <Camera className="w-8 h-8 text-green-500" />,
      title: 'Image-to-3D Conversion',
      description: 'Convert 2D images into full 3D models with depth and volume using computer vision.'
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: 'Animation Generation',
      description: 'Create smooth animations and motion sequences for your 3D models automatically.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Rendering',
      description: 'High-quality real-time rendering with support for various lighting and material effects.'
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'Smart Optimization',
      description: 'AI automatically optimizes models for performance without sacrificing visual quality.'
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create game assets, characters, and environments quickly and efficiently.',
      icon: <Cube className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Architecture Visualization',
      description: 'Generate 3D architectural models and walkthroughs from blueprints.',
      icon: <Layers className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Product Design',
      description: 'Prototype and visualize product designs before manufacturing.',
      icon: <Palette className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'AR/VR Content',
      description: 'Create immersive 3D content for augmented and virtual reality applications.',
      icon: <Camera className="w-6 h-6 text-orange-400" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small projects and individual creators',
      features: [
        '100 3D models per month',
        'Basic text-to-3D generation',
        'Standard resolution output',
        'Email support',
        'Basic templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for professional designers and studios',
      features: [
        '500 3D models per month',
        'Advanced AI generation',
        'High-resolution output',
        'Animation support',
        'Priority support',
        'Custom materials',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large teams and enterprise applications',
      features: [
        'Unlimited 3D models',
        'All AI features included',
        '4K resolution output',
        'Custom AI training',
        'Dedicated support',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10K+', label: '3D Models Generated', icon: <Cube className="w-6 h-6" /> },
    { number: '50+', label: 'File Formats Supported', icon: <Layers className="w-6 h-6" /> },
    { number: '99.5%', label: 'Accuracy Rate', icon: <BarChart3 className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Processing', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced 3D Modeling with AI</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation platform. Create game assets, architectural visualizations, and product designs effortlessly." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, text-to-3D, image-to-3D, game development, architecture visualization, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI 3D{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Generation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your ideas into stunning 3D models with our AI-powered generation platform. 
            Create game assets, architectural visualizations, and product designs effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All AI Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI 3D Generation platform comes packed with advanced features to create 
              professional-quality 3D models that bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how our AI 3D Generation platform can transform your creative workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to scale with your 3D generation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Stunning 3D Models?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start generating professional 3D models with our AI platform. 
              Join thousands of creators already using our technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}