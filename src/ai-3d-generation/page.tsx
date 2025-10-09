import React from 'react';
<<<<<<< HEAD
import { Camera, Play, Download, Share, Star, CheckCircle, Zap, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    '3D Model Generation',
    'Animation Creation',
    'Texture Mapping',
    'Rendering',
    'VR/AR Support',
    'Export Formats',
    'AI Texturing',
    'Lighting Setup',
    'Material Library',
    'Scene Composition'
  ];

  const benefits = [
    'Professional 3D content',
    'Time savings',
    'No 3D skills needed',
    'High quality output',
    'Cost-effective',
    'Scalable production'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: ['Unlimited models', 'Premium textures', '4K rendering', 'API access', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license'],
=======
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const,
  AI3DGenerationPage: React.FC = () => {/* TODO: Fix JSX expression */}
    },


    {
      title: 'Architecture & Real Estate',
      description: 'Create 3D visualizations and virtual tours',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Furniture layouts', 'Landscape designs']
    },
    {
      title: 'E-commerce',
      description: 'Generate product visualizations and AR experiences',
      icon: '🛒',
      examples: ['Product models', 'AR try-ons', 'Virtual showrooms', 'Packaging designs']
    },
    {
      title: 'Education & Training',
      description: 'Create interactive 3D learning materials',
      icon: '📚',
      examples: ['Anatomical models', 'Historical reconstructions', 'Scientific visualizations', 'Training simulations']
    },
    {
      title: 'Entertainment & Media',
      description: 'Produce 3D content for films and animations',
      icon: '🎬',
      examples: ['Character designs', 'Set pieces', 'Props and objects', 'Special effects']
    },
    {
      title: 'Manufacturing',
      description: 'Design and prototype products in 3D',
      icon: '🏭',
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    }
  ];



  const features = [
    'AI-powered 3D model generation',
    'Automatic texture synthesis',
    'Real-time 3D rendering',
    'Multiple format support',
    'Custom model training',
    'Batch processing',
    'API integration',
    'Cloud-based processing',
    'High-resolution output',
    'Animation support',
    'Lighting optimization',
    'Material generation',
    'Shape optimization',
    'Color palette generation',
    'Marketing materials',
    'Educational content'
  ];



  const benefits = [
    'Faster 3D asset creation',
    'Reduced production costs',
    'Consistent quality output',
    'Scalable generation process',
    'Real-time preview',
    'Multiple format export',
    'Batch processing capabilities'
  ];

  const useCases = [


    {
      title: 'Gaming',
      description: 'Create 3D assets for games and virtual worlds',
      examples: ['Character models', 'Environment assets', 'Weapons and tools', 'Vehicles and props']
    },
    {
      title: 'Architecture',
      description: 'Generate 3D models for architectural visualization',
      examples: ['Building designs', 'Interior layouts', 'Landscape models', 'Furniture pieces']
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$199/month',
      features: ['Up to 10 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$599/month',
      features: ['Up to 50 models/month', 'Advanced textures', 'High quality', 'Animation support', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,999/month',
      features: ['Unlimited models', 'Premium textures', 'Custom training', 'Priority support', 'White-label'],
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
      popular: false
    }
  ];

<<<<<<< HEAD
  return (
    <>
      <SEOOptimizer
        title="AI 3D Generation Studio - Create 3D Models & Animations with AI | Zion Tech Group"
        description="Create professional 3D models, animations, and virtual environments with AI 3D Generation Studio. No 3D skills needed, starting at $299/month."
        keywords={['AI 3D generation', '3D models', '3D animation', 'VR AR content', '3D automation', 'AI 3D']}
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text">
                  AI 3D Generation Studio
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Create 3D models, animations, and virtual environments with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  View Gallery
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI 3D Generation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
=======


  const technologies = [
    'Neural Radiance Fields',
    'Generative Adversarial Networks',
    '3D Convolutional Networks',
    'Point Cloud Processing',
    'Mesh Generation',
    'Texture Synthesis',
    'Real-time Rendering',
    'Cloud Computing',
    'GPU Acceleration',
    'Machine Learning'
  ];

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation /></Navigation>"
      <main className="pt-24 pb-16 px-4"></main>"
        <div className="max-w-7xl mx-auto"></div>
          {/* Hero Section */}"
          <section className="text-center mb-16"></section>"
            <h1 className="text-4xl,
  sm:text-5xl,"
  md:text-6xl font-bold text-white mb-6 neon-text"></h1>
              AI 3D Generation;
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Create stunning 3D models, animations, and visualizations with AI-powered tools that understand your vision.
            </p>"
            <div className="flex flex-col,"
  sm:flex-row gap-4 justify-center"></div>
              <a></a>"
                href="te,"
  l:+13024640950""
                className="cyber-button inline-flex items-center space-x-2"
              >"
                <Phone className="w-4 h-4" /></Phone>)
                <span>Call (302) 464-0950</span>

              </a>"
                href="mailt,"
  o:kleber@ziontechgroup.com""
                className="cyber-button-outline inline-flex items-center space-x-2""
                <Mail className="w-4 h-4" /></Mail>

                <span>Get Quote</span>
              </a>
            </div>
          </section>

          {/* Features Section */}"
          <section id="features" className="mb-16"></section>"
            <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
              Powerful 3D Generation Features;
            </h2>"
            <div className="grid,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-8"></div>
              {/* TODO: Fix JSX expression */}"
                <div key={index} className="cyber-card p-6"></div>"
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </section>


          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our 3D AI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-300 text-sm">

                      Transform your 3D workflow with cutting-edge AI that generates high-quality models and textures automatically.
                    </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
                  </div>
                </div>
              ))}
            </div>
          </section>

<<<<<<< HEAD
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose AI 3D Generation Studio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
=======
          {/* Use Cases Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {useCase.examples.map((example, idx) => (

                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
<<<<<<< HEAD
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
=======

              Pricing Plans
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300">per month</p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />

                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Choose Plan
                  </button>

                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <span className="text-gray-300 font-medium">{tech}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
<<<<<<< HEAD
          <section className="text-center mb-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Create Amazing 3D Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading companies using AI 3D generation technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AI3DGenerationPage;
=======
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Create in 3D?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your ideas into stunning 3D reality with our AI-powered generation tools.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>

  );
};


export default AI3DGenerationPage;"`






>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
