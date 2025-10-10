'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cube, Zap, Palette, Camera, CheckCircle, ArrowRight, Sparkles, Layers } from 'lucide-react';
const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: '3D Model Generation',
      description: 'AI-powered 3D model generation from text descriptions, images, or sketches with high-quality output.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D conversion', 'High-quality models', 'Multiple formats']
    },
    {
      icon: Zap,
      title: 'Real-time Rendering',
      description: 'Real-time 3D rendering with advanced lighting, materials, and effects for stunning visual results.',
      benefits: ['Real-time rendering', 'Advanced lighting', 'Material systems', 'Visual effects']
    },
    {
      icon: Palette,
      title: 'Material & Texture AI',
      description: 'AI-generated materials and textures that automatically adapt to your 3D models and scenes.',
      benefits: ['AI textures', 'Material generation', 'Automatic adaptation', 'Custom styles']
    },
    {
      icon: Camera,
      title: '3D Animation',
      description: 'AI-powered 3D animation generation with natural movement and physics-based simulations.',
      benefits: ['Motion generation', 'Physics simulation', 'Character animation', 'Scene animation']
    },
    {
      icon: Sparkles,
      title: 'Style Transfer',
      description: 'Apply artistic styles to 3D models and scenes using advanced AI style transfer techniques.',
      benefits: ['Artistic styles', 'Style transfer', 'Custom aesthetics', 'Brand consistency']
    },
    {
      icon: Layers,
      title: 'Scene Composition',
      description: 'AI-assisted scene composition and layout optimization for professional 3D environments.',
      benefits: ['Scene composition', 'Layout optimization', 'Environment design', 'Professional quality']
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced 3D AI Solutions</title>
        <meta name="description" content="Revolutionary AI-powered 3D generation services including model creation, animation, rendering, and scene composition for modern applications." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, 3D animation, 3D rendering, artificial intelligence, computer graphics, 3D design" />
        <meta property="og:title" content="AI 3D Generation - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered 3D generation services including model creation, animation, rendering, and scene composition for modern applications." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI 3D Generation - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary AI-powered 3D generation services including model creation, animation, rendering, and scene composition for modern applications." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                AI 3D Generation
              </h1>
              <p className="text-xl mb-8">
                Transform your ideas into stunning 3D models and animations with cutting-edge AI technology
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our AI 3D Generation Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover: shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <feature.icon className="h-8 w-8 text-purple-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create with AI?
            </h2>
            <p className="text-xl mb-8">
              Contact our AI 3D experts to bring your creative vision to life
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AI3DGenerationPage;