'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
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
      description: 'Create characters, environments, and props instantly',
      icon: Cube
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Generate 3D models for visualization and marketing',
      icon: Palette
    },
    {
      title: 'E-commerce',
      description: 'Create product 3D models for better customer experience',
      icon: Camera
    },
    {
      title: 'Education & Training',
      description: 'Develop interactive 3D learning materials',
      icon: Users
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Up to 100 3D models per month',
        'Basic text-to-3D generation',
        'Standard quality output',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: [
        'Up to 500 3D models per month',
        'Advanced AI generation',
        'High-quality output',
        'Priority support',
        'All export formats',
        'Custom style training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited 3D models',
        'Custom AI model training',
        'Ultra-high quality output',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform text descriptions into stunning 3D models with our AI-powered 3D generation platform. Create, customize, and export 3D assets in minutes." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, text-to-3D, 3D assets, game development, architecture visualization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-cyan-400">3D Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with our advanced AI technology. 
                Create photorealistic 3D assets from simple text descriptions in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Creating
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to create professional 3D content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-white font-semibold">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications Across Industries
              </h2>
              <p className="text-xl text-gray-300">
                See how AI 3D generation transforms various sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <app.icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300">
                Experience the future of 3D content creation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing for every need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                  tier.popular ? 'border-cyan-400' : 'border-white/20'
                } relative`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-cyan-400 mr-3" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Ideas into 3D Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to generate stunning 3D content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our AI 3D generation platform? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center justify-center">
                <Phone className="text-cyan-400 mr-3" size={24} />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="text-cyan-400 mr-3" size={24} />
                <span className="text-white">3d@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="text-cyan-400 mr-3" size={24} />
                <span className="text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DGenerationPage;