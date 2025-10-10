'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Cube, Zap, Eye, Palette, Download, ArrowRight, Sparkles } from 'lucide-react';

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
      title: 'Real-time Rendering',
      description: 'Experience lightning-fast 3D rendering with our optimized graphics pipeline.',
      benefits: ['Instant preview', 'High FPS', 'Optimized performance', 'Cross-platform support']
    },
    {
      icon: Eye,
      title: 'Photorealistic Textures',
      description: 'Create stunning, lifelike textures and materials with AI assistance.',
      benefits: ['Procedural generation', 'Style transfer', 'Material libraries', 'Custom shaders']
    },
    {
      icon: Palette,
      title: 'Animation & Rigging',
      description: 'Automated character rigging and animation generation for your 3D models.',
      benefits: ['Auto-rigging', 'Motion capture', 'Keyframe animation', 'Physics simulation']
    }
  ];

  const applications = [
    'Game Development',
    'Architectural Visualization',
    'Product Design',
    'Film & Animation',
    'VR/AR Experiences',
    'E-commerce',
    'Education & Training',
    'Medical Visualization'
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D generation technology. Create stunning 3D models, textures, and animations from text descriptions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI 3D Generation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your ideas into stunning 3D models with our cutting-edge AI technology. 
                Generate photorealistic 3D content from simple text descriptions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  Start Creating
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Powerful 3D Generation Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((app, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white">{app}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Amazing 3D Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators who are already using our AI 3D generation technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started Free
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download SDK
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DGenerationPage;