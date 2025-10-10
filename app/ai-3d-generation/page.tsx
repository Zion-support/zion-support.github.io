'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
      title: 'VR/AR Content',
      description: 'Generate immersive 3D content for virtual experiences',
      icon: '🥽'
    },
    {
      title: 'Marketing & Advertising',
      description: 'Create stunning 3D visuals for campaigns and presentations',
      icon: '📢'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            Transform your ideas into stunning 3D models with our advanced AI-powered generation technology. 
            Create photorealistic 3D assets from simple text descriptions in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Start Creating
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI 3D Generation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge AI technology makes 3D model creation accessible to everyone, 
              from beginners to professional designers.
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

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI 3D generation can transform your creative workflow across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing 3D Models?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using our AI 3D generation technology 
            to bring their ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;