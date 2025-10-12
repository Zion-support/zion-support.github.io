'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Palette, Zap, CheckCircle, ArrowRight, Star, Brain, Layers } from 'lucide-react';

const Ai3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Box className="w-8 h-8 text-cyan-400" />,
      title: 'AI 3D Model Generation',
      description: 'Create stunning 3D models from text descriptions or 2D images using advanced AI',
      benefits: ['10x faster than traditional methods', 'Unlimited creativity', 'Professional quality output']
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: 'Intelligent Texturing',
      description: 'AI-powered material and texture generation for realistic 3D models',
      benefits: ['Photorealistic textures', 'Automatic UV mapping', 'Material optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Real-time Rendering',
      description: 'High-quality 3D rendering with real-time preview and optimization',
      benefits: ['Instant preview', 'GPU acceleration', 'Multiple output formats']
    },
    {
      icon: <Layers className="w-8 h-8 text-red-400" />,
      title: 'Animation Generation',
      description: 'Create smooth 3D animations and motion graphics with AI assistance',
      benefits: ['Automated keyframing', 'Natural motion', 'Export to all formats']
    }
  ];

  const useCases = [
    {
      title: 'Product Visualization',
      description: 'Create photorealistic 3D models for e-commerce and marketing',
      price: '$199/month',
      features: ['Product modeling', '360° views', 'AR integration', 'Marketing assets']
    },
    {
      title: 'Architectural Visualization',
      description: 'Generate 3D architectural models and walkthroughs',
      price: '$299/month',
      features: ['Building models', 'Interior design', 'Landscape design', 'Virtual tours']
    },
    {
      title: 'Game Development',
      description: 'Create 3D assets and characters for games and VR experiences',
      price: '$399/month',
      features: ['Character modeling', 'Environment design', 'Asset optimization', 'Game integration']
    },
    {
      title: 'Medical Visualization',
      description: 'Generate 3D medical models for education and research',
      price: '$499/month',
      features: ['Anatomical models', 'Surgical planning', 'Educational content', 'Research tools']
    }
  ];

  const stats = [
    { number: '50,000+', label: '3D Models Generated', icon: <Box className="w-6 h-6 text-cyan-400" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-green-400" /> },
    { number: '10x', label: 'Faster Creation', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'AI Processing', icon: <Brain className="w-6 h-6 text-red-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced 3D Modeling & Visualization</title>
        <meta name="description" content="Revolutionize 3D creation with AI-powered generation. Create stunning 3D models, textures, and animations from text or images. Perfect for product visualization, architecture, and game development." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, 3D visualization, product visualization, architectural rendering, game assets, 3D animation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-generation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
              <Cube className="w-4 h-4" />
              <span>AI-Powered 3D Creation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI 3D{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Generation
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your ideas into stunning 3D reality with AI-powered generation. Create photorealistic models, 
              textures, and animations from simple text descriptions or 2D images.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View 3D Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3D Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities that bring your 3D visions to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                3D <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with AI-powered 3D generation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-3xl font-bold text-purple-400 mb-6">
                    {useCase.price}
                  </div>
                  <div className="space-y-3 mb-6">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Create in 3D?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of creators using our AI 3D generation platform to bring their ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Creating
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ai3DGenerationPage;