'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Cube, Zap, Eye, Palette, Download, ArrowRight, Sparkles, Star, Phone, Mail, MapPin } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate complex 3D models from text descriptions using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Real-time generation', 'High-quality output', 'Multiple formats']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Generate 3D models in seconds with our optimized AI processing pipeline.',
      benefits: ['Sub-second generation', 'Batch processing', 'GPU acceleration', 'Cloud processing']
    },
    {
      icon: Eye,
      title: 'Photorealistic Rendering',
      description: 'Create stunning, photorealistic 3D models with advanced rendering techniques.',
      benefits: ['Ray tracing', 'Global illumination', 'Material physics', 'Lighting simulation']
    },
    {
      icon: Palette,
      title: 'Custom Materials & Textures',
      description: 'Apply custom materials and textures to your 3D models with AI assistance.',
      benefits: ['Smart material mapping', 'Texture generation', 'Color optimization', 'Surface details']
    },
    {
      icon: Download,
      title: 'Multiple Export Formats',
      description: 'Export your 3D models in various industry-standard formats.',
      benefits: ['OBJ, FBX, GLTF', 'STL for 3D printing', 'USD for pipelines', 'Custom formats']
    },
    {
      icon: Sparkles,
      title: 'Creative AI Assistance',
      description: 'Get AI-powered suggestions and improvements for your 3D creations.',
      benefits: ['Style suggestions', 'Optimization tips', 'Quality improvements', 'Creative variations']
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create 3D assets, characters, and environments for games',
      icon: '🎮'
    },
    {
      title: 'Architecture Visualization',
      description: 'Generate 3D building models and interior designs',
      icon: '🏗️'
    },
    {
      title: 'Product Design',
      description: 'Prototype and visualize product concepts in 3D',
      icon: '📦'
    },
    {
      title: '3D Printing',
      description: 'Create printable 3D models for manufacturing',
      icon: '🖨️'
    },
    {
      title: 'Entertainment & Media',
      description: 'Produce 3D content for films and animations',
      icon: '🎬'
    }
  ],

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual creators and small projects',
      features: [
        '100 3D model generations per month',
        'Basic material library',
        'Standard export formats',
        'Email support',
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
        '500 3D model generations per month',
        'Premium material library',
        'All export formats',
        'Priority support',
        'API access',
        'Custom model training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited generations',
        'Custom integrations',
        'Dedicated support',
        'On-premise deployment',
        'Custom AI model training',
        'SLA guarantee'
      ],
      popular: false
    }
  ],
const Component = () => {

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation platform. Create photorealistic models, textures, and animations in seconds." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  AI-Powered 3D Generation
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Transform your ideas into stunning 3D models with our advanced AI technology. 
                  Create photorealistic models, textures, and animations in seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Start Creating
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Powerful 3D Generation Features
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our AI-powered platform offers everything you need to create professional 3D content
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Perfect for Every Industry
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From gaming to architecture, our 3D generation technology adapts to your needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Choose Your Plan
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Flexible pricing options to fit your 3D generation needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`bg-white p-8 rounded-xl border-2 hover:shadow-lg transition-shadow ${
                    plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {plan.price}
                        <span className="text-lg text-gray-600">{plan.period}</span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover: bg-blue-700'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-blue-600">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Amazing 3D Content?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of creators who are already using our AI-powered 3D generation platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  ),
};

export default AI3DGenerationPage;