'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      description: 'Create 3D models in seconds instead of hours with our optimized AI processing.',
      benefits: ['Sub-second generation', 'Batch processing', 'GPU acceleration', 'Cloud scaling']
    },
    {
      icon: Eye,
      title: 'Photorealistic Quality',
      description: 'Generate stunning, photorealistic 3D models with advanced neural rendering.',
      benefits: ['High-resolution output', 'Realistic materials', 'Advanced lighting', 'Detail preservation']
    },
    {
      icon: Palette,
      title: 'Style Transfer',
      description: 'Apply any artistic style to your 3D models with AI-powered style transfer.',
      benefits: ['Multiple art styles', 'Custom style training', 'Real-time preview', 'Batch application']
    },
    {
      icon: Download,
      title: 'Universal Export',
      description: 'Export your 3D models in all major formats for any platform or engine.',
      benefits: ['OBJ, FBX, GLTF', 'Game engine ready', 'VR/AR compatible', 'Web optimized']
    },
    {
      icon: Sparkles,
      title: 'Smart Optimization',
      description: 'Automatically optimize models for performance without losing visual quality.',
      benefits: ['LOD generation', 'Texture compression', 'Polygon reduction', 'Performance tuning']
    }
  ];

  const benefits = [
    'Generate 3D models from text descriptions',
    'Create models in seconds, not hours',
    'Export to all major 3D formats',
    'No 3D modeling experience required',
    'Cloud-based processing for scalability',
    'Professional-quality results every time'
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Text-to-3D AI Technology</title>
        <meta name="description" content="Transform text descriptions into stunning 3D models with our AI-powered 3D generation technology. Fast, accurate, and professional-quality results." />
        <meta name="keywords" content="AI 3D generation, text to 3D, 3D modeling AI, artificial intelligence, 3D design, computer graphics" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI 3D Generation
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into stunning 3D models with our cutting-edge AI technology. 
              Generate professional-quality 3D content from simple text descriptions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Creating 3D Models
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
                Powerful 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered 3D generation technology combines cutting-edge machine learning 
                with intuitive design tools to create professional-quality 3D models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  Start Creating
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Generation Speed</span>
                      <span>10x faster</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Quality Score</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Format Support</span>
                      <span>15+ formats</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Generate 3D Models with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating stunning 3D models from text descriptions today. 
              No 3D modeling experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Generating
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AI3DGenerationPage;