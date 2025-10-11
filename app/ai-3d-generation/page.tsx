'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart, Brain, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Box,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate complex 3D models from text descriptions or 2D images using advanced AI algorithms.',
      benefits: ['Text-to-3D generation', 'Image-to-3D conversion', 'Automated topology optimization', 'Real-time preview']
    },
    {
      icon: Palette,
      title: 'Intelligent Texturing',
      description: 'Automatically apply realistic textures and materials to your 3D models with AI assistance.',
      benefits: ['Smart material selection', 'Procedural texturing', 'PBR material generation', 'UV mapping automation']
    },
    {
      icon: Eye,
      title: 'Advanced Rendering',
      description: 'High-quality rendering with ray tracing, global illumination, and real-time preview capabilities.',
      benefits: ['Ray tracing support', 'Global illumination', 'Real-time preview', 'Batch rendering']
    },
    {
      icon: Zap,
      title: 'Animation Generation',
      description: 'Create smooth animations and rigs automatically using AI-powered motion generation.',
      benefits: ['Auto-rigging', 'Motion capture', 'Keyframe generation', 'Physics simulation']
    },
    {
      icon: Brain,
      title: 'Game Development',
      description: 'Rapidly prototype and create 3D assets for games with AI assistance.',
      benefits: ['Character generation', 'Environment creation', 'Asset optimization', 'LOD generation']
    },
    {
      icon: Target,
      title: 'Architecture Visualization',
      description: 'Create stunning architectural visualizations and walkthroughs with AI-generated 3D models.',
      benefits: ['Building generation', 'Interior design', 'Landscape creation', 'Lighting optimization']
    },
    {
      icon: BarChart,
      title: 'Product Design',
      description: 'Design and visualize products with AI-powered 3D modeling and rendering.',
      benefits: ['Concept visualization', 'Prototype generation', 'Material testing', 'Design iteration']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Automated quality checks and optimization for 3D models and animations.',
      benefits: ['Model validation', 'Performance optimization', 'Error detection', 'Standards compliance']
    }
  ];

  const stats = [
    { number: '10x', label: 'Faster 3D Creation' },
    { number: '95%', label: 'Time Reduction' },
    { number: '1000+', label: '3D Models Generated' },
    { number: '24/7', label: 'AI Processing' }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D generation services for games, architecture, and product design." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-20 px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI 3D Generation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your ideas into stunning 3D models with cutting-edge AI technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                How AI 3D Generation Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Input</h3>
                  <p className="text-gray-300">
                    Provide text descriptions, 2D images, or sketches as input for your 3D model.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI Processing</h3>
                  <p className="text-gray-300">
                    Our advanced AI algorithms analyze your input and generate detailed 3D models.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Output</h3>
                  <p className="text-gray-300">
                    Receive high-quality 3D models ready for use in games, architecture, or product design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default AI3DGenerationPage;