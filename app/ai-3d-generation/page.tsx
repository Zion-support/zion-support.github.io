'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Box, Zap, Eye, Palette, Download, ArrowRight, Sparkles } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Box,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate complex 3D models from text descriptions using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Real-time generation', 'High-quality output', 'Multiple formats']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Create 3D assets in minutes instead of hours with our optimized AI pipeline.',
      benefits: ['90% faster than traditional methods', 'Batch processing', 'Real-time preview', 'Instant results']
    },
    {
      icon: Eye,
      title: 'Photorealistic Quality',
      description: 'Generate stunning, photorealistic 3D models with advanced rendering techniques.',
      benefits: ['High-resolution textures', 'Realistic lighting', 'Material accuracy', 'Professional quality']
    },
    {
      icon: Palette,
      title: 'Style Customization',
      description: 'Apply custom styles and artistic directions to your 3D models.',
      benefits: ['Multiple art styles', 'Custom color schemes', 'Brand consistency', 'Creative freedom']
    }
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Create characters, environments, and assets for games',
      icon: '🎮'
    },
    {
      title: 'Architecture & Design',
      description: 'Generate 3D models for architectural visualization',
      icon: '🏗️'
    },
    {
      title: 'E-commerce',
      description: 'Create product visualizations and 3D catalogs',
      icon: '🛒'
    },
    {
      title: 'VR/AR Experiences',
      description: 'Build immersive 3D content for virtual and augmented reality',
      icon: '🥽'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation technology. Create photorealistic assets in minutes." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  AI 3D Generation
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Transform your ideas into stunning 3D models with our advanced AI technology. 
                  Create photorealistic assets in minutes, not hours.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                    <Box className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-medium">AI-Powered</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Lightning Fast</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                    <Eye className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Photorealistic</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Powerful 3D Generation Features
                  </h2>
                  <p className="text-xl text-gray-300">
                    Everything you need to create professional 3D content
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Applications
                  </h2>
                  <p className="text-xl text-gray-300">
                    Perfect for a wide range of industries and use cases
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {applications.map((app, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center hover:from-slate-700 hover:to-slate-600 transition-all">
                      <div className="text-4xl mb-4">{app.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {app.title}
                      </h3>
                      <p className="text-gray-300">
                        {app.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Ideas into 3D?
                </h2>
                <p className="text-xl text-cyan-100 mb-8">
                  Start creating stunning 3D models today with our AI-powered platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Demo
                  </button>
                </div>
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