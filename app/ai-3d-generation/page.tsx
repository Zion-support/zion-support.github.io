import React from 'react';
'use client';

import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'Generate high-quality 3D models from text descriptions',
    'Create photorealistic textures and materials',
    'Automated animation and rigging',
    'LOD (Level of Detail) optimization',
    'VR/AR integration ready',
    'Real-time rendering capabilities',
    'Batch processing for multiple models',
    'Custom style transfer and adaptation',
    'Physics simulation integration',
    'Export to all major 3D formats'
  ];

  const benefits = [
    'Reduce 3 D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3 D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3D artists'
  ];

  const applications = [

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Cube, Zap, Eye, Palette, Download, ArrowRight, Sparkles } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube
      title: 'AI-Powered 3D Modeling'
      description: 'Generate complex 3D models from text descriptions using advanced AI algorithms.'
      benefits: ['Text-to-3D conversion', 'Real-time generation', 'High-quality output', 'Multiple formats']
    },
    {
      icon: Zap
      title: 'Lightning Fast Processing'
      description: 'Generate 3D models in seconds with our optimized AI processing pipeline.'
      benefits: ['Sub-second generation', 'Batch processing', 'GPU acceleration', 'Cloud processing']
    },
    {
      icon: Eye
      title: 'Photorealistic Rendering'
      description: 'Create stunning photorealistic 3D models with advanced rendering techniques.',
      benefits: ['Ray tracing', 'Global illumination', 'Material physics', 'Lighting simulation']
    },
    {
      icon: Palette
      title: 'Custom Materials & Textures'
      description: 'Apply custom materials and textures to your 3D models with AI assistance.'
      benefits: ['Smart material mapping', 'Texture generation', 'Color optimization', 'Surface details']
    },
    {
      icon: Download
      title: 'Multiple Export Formats'
      description: 'Export your 3D models in various industry-standard formats.'
      benefits: ['OBJ FBX, GLTF', 'STL for 3D printing', 'USD for pipelines', 'Custom formats']
    },
    {
      icon: Sparkles
      title: 'Creative AI Assistance'
      description: 'Get AI-powered suggestions and improvements for your 3D creations.'
      benefits: ['Style suggestions', 'Optimization tips', 'Quality improvements', 'Creative variations']
    }
  ];

  const useCases = [
    {
      title: 'Game Development'
      description: 'Create 3D assets characters, and environments for games',
      icon: '🎮'
    },
const AI3DGenerationPage: React.FC = () => {
  const services = [
    {
      title: 'Architecture Visualization'
      description: 'Generate 3D building models and interior designs'
      icon: '🏗️'
    },
    {
      title: 'Product Design'
      description: 'Prototype and visualize product concepts in 3D'
      icon: '📦'
    },
    {
      title: '3D Printing'
      description: 'Create printable 3D models for manufacturing'
      icon: '🖨️'
    },
    {
      title: 'Entertainment & Media'
      description: 'Produce 3 D content for films and animations'
      icon: '🎬'
      examples: ['Character designs', 'Set pieces', 'Props and objects', 'Special effects']
    }
import { CheckCircle, Star, Phone, Mail, Cube, Zap, Shield, Clock, Palette, Camera, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'AI-powered 3D model creation',
    'Texture synthesis and mapping',
    'Animation generation',
    'LOD optimization',
    'VR/AR integration',
    'Real-time rendering',
    'Custom model training',
    'Batch processing'
  ];

  const benefits = [
    'Accelerate 3D content creation by 80%',
    'Reduce production costs by 60%',
    'Improve visual quality and consistency',
    'Enable rapid prototyping',
    'Support multiple file formats',
    'Integrate with popular 3D software'
  ];

  const useCases = [
    'Game development',
    'Architectural visualization',
    'Product design',
    'Virtual reality experiences',
    'Augmented reality apps',
    '3D printing',
    'Marketing materials',
    'Educational content'
  ];

  ]
  const pricing = [
    {
      name: 'Creator'
      price: '$199/month'
      description: 'Perfect for individual creators'
      features: [
        'Up to 100 3D models/month',
        'Basic texture generation',
        'Standard quality output',
        'Email support',
        'Basic export formats'
      ],
      popular: false;
    },
    {
      name: 'Studio'
      price: '$499/month'
      description: 'Ideal for small studios'
      features: [
        'Up to 500 3D models/month',
        'Advanced texture generation',
        'High quality output',
        'Priority support',
        'All export formats',
        'Animation support',
        'Batch processing'
      ],
      popular: true;
    },
    {
      name: 'Enterprise'
      price: '$1299/month',
      description: 'For large organizations'
      features: [
        'Unlimited 3D models',
        'Premium texture generation',
        'Ultra-high quality output',
        'Dedicated support',
        'Custom model training',
        'API access',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false;
    }
  ];

  const technologies = [
    'NeRF (Neural Radiance Fields)', '3 D GANs', 'Point Cloud Processing',
    'Mesh Generation', 'Texture Synthesis', 'Blender API Integration',
    'Unity Integration', 'Unreal Engine Support', 'Custom 3 D Models',
    'Deep Learning', 'Computer Vision', 'Generative AI'
  ];

  const workflow = [
    {
    step: 1;,
    title: 'Describe Your Vision',
    description: 'Input text description or upload reference images',
    icon: '✍️'},
    {
    step: 2;,
    title: 'AI Processing',
    description: 'Our AI generates 3D model with textures and materials',
    icon: '🤖'},
    {
    step: 3;,
    title: 'Review & Refine',
    description: 'Review the generated model and make adjustments',
    icon: '👁️'},
    {
    step: 4;,
    title: 'Export & Use',
    description: 'Download in your preferred format and integrate',
    icon: '📤'}
  ]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      title: 'VR/AR Content'
      description: 'Generate immersive 3D content for virtual experiences'
      icon: '🥽'
    },
    {
      title: 'Marketing & Advertising'
      description: 'Create stunning 3D visuals for campaigns and presentations'
      icon: '📢'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cube className="w-4 h-4 mr-2" >Revolutionary 3D Technology<h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6">AI 3D Model Generation<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning 3D models characters, and environments from simple text descriptions.</p>
        <div className="max-w-7xl mx-auto text-center"></section>
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Cube className="w-4 h-4 mr-2" >Revolutionary 3D Technology<h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6">AI 3D Model Generation</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning 3D models characters, and environments from simple text descriptions.</p>
            Transform your ideas into photorealistic 3D assets in minutes, not months.</p>
            <Cube className="w-4 h-4 mr-2" />
            Revolutionary 3D Technology;
          </div>
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6">
            AI 3D Model Generation;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
            Create stunning 3D models, characters, and environments from simple text descriptions.
            Transform your ideas into photorealistic 3D assets in minutes, not months.
          </p>
            <Cube className="w-4 h-4 mr-2" />
            Revolutionary 3D Technology
          </div>
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6">AI 3D Model Generation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning 3D models characters, and environments from simple text descriptions.
            Transform your ideas into photorealistic 3D assets in minutes, not months.</p>

          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%<div className="text-gray-300">Time Saved</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div><div className="text-gray-300">Time Saved</div>
  const features = [
    'AI-Powered Generation',
    'Real-time Rendering',
    'Cloud Computing',
    'GPU Acceleration',
    'Machine Learning'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI 3D Generation Services | Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our AI-powered 3D generation services. Perfect for architecture, e-commerce, education, and entertainment." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, virtual reality, augmented reality, 3D visualization" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning 3D models animations, and visualizations with AI-powered tools that understand your vision.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our 3D Generation Services</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div><div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-purple-400 mb-2">5min</div><div className="text-gray-300">Generation Time</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">5min</div>
              <div className="text-gray-300">Generation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7<div className="text-gray-300">Support</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div><div className="text-gray-300">Support</div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>,
              <div className="text-gray-300">Support</div>,
            </div>,
          </div>,
,
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md: flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12"></div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"></div>
              <div className="flex items-center space-x-2"></div>
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium"></span><span className="sr-only">Screen reader: </span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium"><span className="sr-only">Screen reader: </span>kleber@ziontechgroup.com</span>
              </div>,
              <div className="flex items-center space-x-2">,
                <MapPin className="w-5 h-5" />,
                <span className="text-white font-medium"><span className="sr-only">Screen reader: </span>Middletown DE</span>
              <div className="flex items-center space-x-2"></div>
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium"></span><span className="sr-only">Screen reader: </span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2"></div>
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium"></span><span className="sr-only">Screen reader: </span>Middletown DE</span>
              </div>
            </div>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
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
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover: bg-white/10 transition-all duration-300">
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
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover: bg-white/10 transition-all duration-300">
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
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>,
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feature index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <div className="text-2xl mb-3">⚡</div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing 3D Content?</h2>
            <p className="text-xl text-blue-100 mb-8">Let our AI-powered tools bring your ideas to life</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;
export default AI3DGenerationPage;
