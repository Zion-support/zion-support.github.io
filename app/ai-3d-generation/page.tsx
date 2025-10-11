'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Cube, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart, Brain, Shield} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate high-quality 3D models from text descriptions or 2D images using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D generation', 'Automated modeling', 'High-quality output']
    },
    {
      icon: Zap,
      title: 'Real-Time Generation',
      description: 'Create 3D content in real-time with lightning-fast processing and instant preview capabilities.',
      benefits: ['Instant generation', 'Real-time preview', 'Fast iteration', 'Live editing']
    },
    {
      icon: Eye,
      title: 'Advanced Rendering',
      description: 'Professional-grade rendering with realistic lighting, materials, and textures.',
      benefits: ['Photorealistic output', 'Advanced lighting', 'Material simulation', 'High-resolution rendering']
    },
    {
      icon: Palette,
      title: 'Creative Tools',
      description: 'Comprehensive suite of tools for customizing and enhancing your 3D creations.',
      benefits: ['Material editor', 'Texture mapping', 'Color customization', 'Style transfer']
    },
    {
      icon: Brain,
      title: 'Intelligent Optimization',
      description: 'AI-driven optimization for performance, quality, and resource efficiency.',
      benefits: ['Auto-optimization', 'Performance tuning', 'Quality enhancement', 'Resource management']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Secure cloud-based processing with enterprise-grade security and compliance.',
      benefits: ['Data encryption', 'Secure processing', 'Compliance ready', 'Access controls']
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Rapidly generate 3D assets, characters, and environments for games.',
      icon: Target,
      benefits: ['Character generation', 'Environment creation', 'Asset optimization', 'Rapid prototyping']
    },
    {
      title: 'Architecture & Design',
      description: 'Create detailed 3D models for architectural visualization and design.',
      icon: BarChart,
      benefits: ['Building visualization', 'Interior design', 'Landscape modeling', 'Client presentations']
    },
    {
      title: 'Product Design',
      description: 'Generate 3D prototypes and models for product development.',
      icon: Brain,
      benefits: ['Product prototyping', 'Design iteration', 'Visualization', 'Manufacturing prep']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D generation technology for creating high-quality 3D models, characters, and environments." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, 3D assets, game development, architecture" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into stunning 3D reality with our cutting-edge AI-powered generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI 3D Generation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI technology that brings your imagination to life in stunning 3D detail
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI 3D generation can transform your industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Create in 3D?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start generating stunning 3D content with our AI-powered technology. Transform your ideas into reality today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;