'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cube, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Ai3dGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: '3D Model Generation',
      description: 'AI-powered 3D model creation from text descriptions, images, or sketches.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D modeling', 'Sketch-based generation', 'Real-time preview']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Generate high-quality 3D prototypes in minutes instead of hours.',
      benefits: ['Fast iteration cycles', 'Multiple design options', 'Automated optimization', 'Quality validation']
    },
    {
      icon: Eye,
      title: 'Visual Quality',
      description: 'Produce photorealistic 3D models with advanced rendering capabilities.',
      benefits: ['High-resolution output', 'Material accuracy', 'Lighting optimization', 'Texture mapping']
    },
    {
      icon: Palette,
      title: 'Custom Styling',
      description: 'Apply custom styles, materials, and textures to generated 3D models.',
      benefits: ['Style transfer', 'Material libraries', 'Color customization', 'Texture variations']
    }
  ];

  const benefits = [
    'Reduce 3D modeling time by 90%',
    'Generate unlimited design variations',
    'No 3D modeling expertise required',
    'Seamless integration with existing workflows',
    'High-quality output suitable for production',
    'Cost-effective alternative to traditional modeling'
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation technology for rapid prototyping and design innovation." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, rapid prototyping, design automation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into stunning 3D models with our revolutionary AI-powered generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to create amazing 3D models</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
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
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI 3D Generation?</h2>
              <p className="text-xl text-gray-300">Transform your design process with cutting-edge AI technology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Target className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your 3D Design Process?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of designers and developers already using our AI 3D generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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
