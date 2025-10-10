'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Cube, Palette, Layers, Camera } from 'lucide-react';

const Ai3dGenerationPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered 3D Generation',
      description: 'Advanced AI algorithms that generate high-quality 3D models from text descriptions.',
      benefits: ['Text-to-3D conversion', 'Real-time generation', 'High-quality output', 'Custom specifications']
    },
    {
      icon: Cube,
      title: 'Advanced 3D Modeling',
      description: 'Create complex 3D models with precision and detail using AI assistance.',
      benefits: ['Complex geometries', 'Detailed textures', 'Realistic materials', 'Professional quality']
    },
    {
      icon: Palette,
      title: 'Material & Texture AI',
      description: 'AI-powered material generation and texture mapping for realistic 3D objects.',
      benefits: ['Smart material selection', 'Automatic texturing', 'Realistic finishes', 'Custom material creation']
    },
    {
      icon: Layers,
      title: 'Multi-Layer Processing',
      description: 'Process multiple 3D layers simultaneously for complex scene generation.',
      benefits: ['Layer management', 'Batch processing', 'Scene composition', 'Efficient workflows']
    }
  ];

  const benefits = [
    'Reduce 3D modeling time by up to 80%',
    'Generate photorealistic 3D models from text',
    'Create custom 3D assets for any industry',
    'Scale 3D production without additional artists',
    'Integrate with existing 3D workflows seamlessly'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
            <Cube className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm font-medium">AI 3D Generation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI 3D Generation
          </h1>
          
          <p className="text-xl md:text-2xl text-teal-400 mb-8 font-medium">
            Create Stunning 3D Models with AI
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your ideas into photorealistic 3D models using our advanced AI technology. 
            Generate complex 3D assets, materials, and textures from simple text descriptions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #14b8a6, #0d9488)'}}
            >
              Start Free Trial
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">80%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">4K</div>
              <div className="text-gray-300">Resolution Output</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Processing</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Powerful 3D Generation Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-teal-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
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
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Why Choose Our AI 3D Generation?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators using our AI 3D Generation platform to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #14b8a6, #0d9488)'}}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ai3dGenerationPage;