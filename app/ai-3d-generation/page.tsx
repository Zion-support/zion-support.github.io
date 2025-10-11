'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Box, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart, Brain, Shield} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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
      benefits: ['Motion capture', 'Keyframe generation', 'Rigging automation', 'Animation blending']
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
      title: 'Education & Training',
      description: 'Create interactive 3D educational content and training simulations.',
      benefits: ['Educational models', 'Interactive simulations', 'VR/AR content', 'Training scenarios']
    }
  ]

  const services = [
    {
      icon: <Box className="w-8 h-8" />,
      title: '3D Model Generation',
      description: 'Create custom 3D models from text descriptions or reference images.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D modeling', 'Custom model creation', 'Quality optimization']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Material & Texture Design',
      description: 'Generate realistic materials and textures for your 3D models.',
      benefits: ['PBR material generation', 'Procedural texturing', 'UV mapping', 'Material optimization']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Animation Services',
      description: 'Create smooth animations and rigs for your 3D models.',
      benefits: ['Character rigging', 'Motion capture', 'Keyframe animation', 'Animation optimization']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Rendering & Visualization',
      description: 'High-quality rendering and visualization services for your 3D content.',
      benefits: ['Ray tracing', 'Global illumination', 'Post-processing', 'Batch rendering']
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Faster Development',
      description: 'Reduce 3D asset creation time by up to 80% with AI assistance.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Cost Effective',
      description: 'Lower development costs while maintaining high-quality output.'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Creative Freedom',
      description: 'Explore unlimited creative possibilities with AI-powered generation.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Consistent high-quality output with automated optimization.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered 3D generation services for games, architecture, and product design." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, text-to-3D, 3D animation, game development" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI 3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into stunning 3D models with our advanced AI-powered generation technology.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered 3D generation technology brings your ideas to life with unprecedented speed and quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="w-12 h-12 text-purple-400 mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI 3D generation services for all your creative needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="w-12 h-12 text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of 3D content creation with our AI-powered solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 text-purple-400 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing 3D Content?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's bring your ideas to life with our AI-powered 3D generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Start Your 3D Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AI3DGenerationPage