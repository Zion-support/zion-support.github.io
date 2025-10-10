import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = React.memo(() => {
  const features = [
    'Generate high-quality 3D models from text descriptions',
    'Create photorealistic textures and materials',
    'Automated animation and rigging',
    'LOD (Level of Detail) optimization',
    'VR/AR integration ready',
    'Real-time rendering capabilities',
    'Batch processing for multiple models',
    'Custom style transfer and adaptation',
    'Physics simulation integration',
    'Export to all major 3D formats'
  ];

  const benefits = [
    'Reduce 3D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3D artists'
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Generate characters, environments, and props for games',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapon designs', 'Vehicle models']
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

  const pricing = [
    {
      plan: 'Starter',
      price: '$199/month',
      features: ['Up to 10 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for studios and agencies',
      features: [
        'Up to 1,000 3D models/month',
        'Advanced AI features',
        'High-quality output',
        'Priority support',
        'All format exports',
        'Batch processing',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited 3D models',
        'Premium AI features',
        'Ultra-high quality',
        'Dedicated support',
        'Custom integrations',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI 3D Generation Services | Zion Tech Group</title>
        <meta name="description" content="Create stunning 3D models, animations, and visualizations with AI-powered tools. Reduce production time by 90% and costs by 80%." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, game development, architecture visualization" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning 3D models from text descriptions using cutting-edge AI technology. 
              Transform your ideas into reality in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button-outline inline-flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
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
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Advanced Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <span className="text-sm text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your 3D Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of creators who are already using AI to generate stunning 3D content in minutes instead of hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                View Demo
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
});

AI3DGenerationPage.displayName = 'AI3DGenerationPage';

export default AI3DGenerationPage;