'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cube, Palette, Zap, Target, ArrowRight, CheckCircle, Brain, BarChart, TrendingUp, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: '3D Model Generation',
      description: 'Create stunning 3D models from text descriptions using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'High-quality models', 'Multiple formats', 'Custom styling']
    },
    {
      icon: Palette,
      title: 'Material & Texture AI',
      description: 'Generate realistic materials and textures automatically for your 3D models.',
      benefits: ['Procedural textures', 'Realistic materials', 'Custom patterns', 'PBR workflows']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Accelerate your design process with AI-powered rapid 3D prototyping.',
      benefits: ['Fast iteration', 'Design variations', 'Automated optimization', 'Quick feedback']
    },
    {
      icon: Target,
      title: 'Precision Modeling',
      description: 'Achieve precise 3D models with AI-assisted modeling tools.',
      benefits: ['Exact measurements', 'Geometric accuracy', 'Professional quality', 'Industry standards']
    }
  ];

  const useCases = [
    {
      title: 'Product Design',
      description: 'Create detailed product prototypes and visualizations.',
    },
    {
      title: 'Architecture',
      description: 'Generate 3D architectural models and renderings.',
    },
    {
      title: 'Gaming',
      description: 'Produce game assets and character models.',
    },
    {
      title: 'Animation',
      description: 'Create 3D models for animation and VFX.',
    }
  ];

  const stats = [
    { label: '3D Models Generated', value: '10,000+' },
    { label: 'Time Saved', value: '80%' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Processing Speed', value: '10x Faster' }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, design automation, 3D assets" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with our advanced AI technology. Create, design, and iterate faster than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI capabilities for creating professional 3D content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
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

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI 3D generation technology delivers exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Perfect for a wide range of industries and applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing 3D Content?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start generating professional 3D models with our AI-powered platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AI3DGenerationPage;