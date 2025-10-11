'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cube, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Ai3dGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: '3D Model Generation',
      description: 'AI-powered 3D model creation from text descriptions and images.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D generation', 'Custom model creation', 'High-quality output']
    },
    {
      icon: Palette,
      title: 'Material & Texture',
      description: 'Intelligent material and texture generation for realistic 3D models.',
      benefits: ['Procedural textures', 'Material libraries', 'UV mapping', 'PBR materials']
    },
    {
      icon: Eye,
      title: 'Visual Quality',
      description: 'High-fidelity 3D rendering with advanced lighting and shading.',
      benefits: ['Ray tracing', 'Global illumination', 'Real-time preview', 'Export options']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized generation pipeline for fast and efficient 3D creation.',
      benefits: ['GPU acceleration', 'Batch processing', 'Cloud rendering', 'Real-time updates']
    }
  ];

  const benefits = [
    'Generate 3D models from text descriptions',
    'Create realistic materials and textures',
    'Export to multiple 3D formats',
    'Real-time preview and editing',
    'Cloud-based processing',
    'API integration for developers',
    'Custom model training',
    'Batch generation capabilities'
  ];

  const stats = [
    { number: '10x', label: 'Faster Generation' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Export Formats' },
    { number: '24/7', label: 'Cloud Processing' }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation technology for creating high-quality 3D assets from text and images" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, 3D assets, text-to-3D, image-to-3D" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into stunning 3D models with our revolutionary AI-powered generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge AI technology for creating professional 3D models
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300">
                Experience the future of 3D content creation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Create?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of creators using our AI 3D generation technology to bring their ideas to life.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Creating
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Generate 3D Models?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start creating stunning 3D models with our AI-powered generation technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Try It Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Examples
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Ai3dGenerationPage;