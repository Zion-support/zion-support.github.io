'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
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

  const pricing = [
    {
      name: 'Creator',
      price: '$199/month',
      description: 'Perfect for individual creators',
      features: [
        '10 models/month',
        'Basic textures',
        'Standard quality',
        'Email support',
        'API access',
        'HD output'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing businesses',
      features: [
        '50 models/month',
        'Premium textures',
        'High quality',
        'Priority support',
        'Custom training',
        '4K output',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      description: 'For large organizations',
      features: [
        'Unlimited models',
        'Premium textures',
        'Custom training',
        'Priority support',
        'White-label'
      ],
      popular: false
    }
  ];

  const technologies = [
    'NeRF (Neural Radiance Fields)', '3D GANs', 'Point Cloud Processing',
    'Mesh Generation', 'Texture Synthesis', '3D Reconstruction',
    'Shape Optimization', 'Material Generation', 'Lighting Models'
  ];

  const useCases = [
    {
      title: 'Product Design',
      description: 'Create rapid prototypes and visualize product concepts',
      icon: '🎨',
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Generate 3D assets for games, movies, and VR experiences',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Props and objects', 'Animation rigs']
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Create realistic architectural visualizations and virtual tours',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Landscape planning', 'Virtual showrooms']
    },
    {
      title: 'Education & Training',
      description: 'Develop interactive 3D learning materials and simulations',
      icon: '📚',
      examples: ['Anatomical models', 'Historical reconstructions', 'Scientific visualizations', 'Training simulations']
    },
    {
      title: 'E-commerce',
      description: 'Generate product visualizations and AR experiences',
      icon: '🛒',
      examples: ['Product showcases', 'AR try-ons', 'Virtual catalogs', 'Interactive demos']
    },
    {
      title: 'Marketing & Advertising',
      description: 'Create compelling 3D visuals for campaigns and presentations',
      icon: '📢',
      examples: ['Ad visuals', 'Presentation graphics', 'Social media content', 'Brand assets']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI 3D Generation - Advanced 3D Model Creation | Zion Tech Group</title>
        <meta name="description" content="Transform your 3D workflow with our cutting-edge AI 3D generation technology. Create high-quality models, textures, and assets automatically." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, texture synthesis, 3D assets, NeRF, 3D GANs, 3D visualization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-generation" />
      </Helmet>

      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cube className="w-4 h-4" />
              <span>AI 3D Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your 3D workflow with cutting-edge AI that generates high-quality models and textures automatically.
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
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI 3D generation technology offers cutting-edge capabilities for creating realistic, high-quality 3D assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI 3D generation can transform your creative workflow across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <ArrowRight className="w-3 h-3 text-purple-400 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your 3D generation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-colors ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies Used
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 3D generation solution is built with state-of-the-art AI technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your 3D Workflow?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about our AI 3D generation technology and how it can transform your creative workflow.
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
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;