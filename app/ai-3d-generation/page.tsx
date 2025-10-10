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
      description: 'Create 3D assets in seconds, not hours, with our optimized AI processing pipeline.',
      benefits: ['Sub-second generation', 'Batch processing', 'GPU acceleration', 'Cloud scaling']
    },
    {
      icon: Eye,
      title: 'Photorealistic Quality',
      description: 'Generate stunning, photorealistic 3D models with advanced rendering techniques.',
      benefits: ['High-resolution output', 'Realistic materials', 'Advanced lighting', 'Professional quality']
    },
    {
      icon: Palette,
      title: 'Style Transfer & Customization',
      description: 'Apply different artistic styles and customize 3D models to match your vision.',
      benefits: ['Style adaptation', 'Custom textures', 'Color variations', 'Artistic filters']
    },
    {
      icon: Download,
      title: 'Universal Export',
      description: 'Export to all major 3D formats compatible with popular game engines and design tools.',
      benefits: ['OBJ, FBX, GLTF support', 'Game engine ready', 'CAD compatibility', 'Animation support']
    },
    {
      icon: Sparkles,
      title: 'Smart Optimization',
      description: 'Automatically optimize 3D models for performance without sacrificing quality.',
      benefits: ['LOD generation', 'Polygon reduction', 'Texture optimization', 'Performance tuning']
    }
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Create unlimited 3D assets for games, from characters to environments.',
      icon: '🎮'
    },
    {
      title: 'Architecture & Design',
      description: 'Generate 3D models for architectural visualization and interior design.',
      icon: '🏗️'
    },
    {
      title: 'E-commerce',
      description: 'Create 3D product models for enhanced online shopping experiences.',
      icon: '🛒'
    },
    {
      title: 'VR/AR Applications',
      description: 'Generate immersive 3D content for virtual and augmented reality.',
      icon: '🥽'
    },
    {
      title: 'Film & Animation',
      description: 'Create 3D assets for movies, TV shows, and animated content.',
      icon: '🎬'
    },
    {
      title: 'Education & Training',
      description: 'Develop interactive 3D learning materials and simulations.',
      icon: '📚'
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation. Create stunning 3D assets from text descriptions in seconds with our advanced AI technology." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, game development, 3D assets" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 3D
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Generation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform text descriptions into stunning 3D models with our revolutionary AI technology. 
            Create photorealistic 3D assets in seconds, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Start Creating
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced AI technology makes 3D model generation fast, easy, and incredibly powerful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
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
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From game development to architectural visualization, our AI 3D generation technology 
              has applications across multiple industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI 3D Generation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Traditional 3D modeling is time-consuming and expensive. Our AI technology revolutionizes 
                the process, making 3D content creation accessible to everyone.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to revolutionize your 3D content creation? Start generating amazing 3D models 
                with just a text description.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Try Free Demo
                </button>
                <button className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing 3D Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using AI to generate stunning 3D models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Creating Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;