'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Cube, Zap, Palette, Cpu, Eye, CheckCircle } from 'lucide-react'

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Generation',
      description: 'Advanced AI algorithms that generate high-quality 3D models from text descriptions or 2D images.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D generation', 'Style transfer', 'Quality optimization']
    },
    {
      icon: Cube,
      title: '3D Model Creation',
      description: 'Create detailed 3D models with realistic textures, lighting, and materials using AI assistance.',
      benefits: ['Automated modeling', 'Texture generation', 'Material synthesis', 'Lighting optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Fast 3D generation and rendering capabilities for immediate visualization and iteration.',
      benefits: ['Real-time preview', 'Fast iteration', 'Live editing', 'Instant feedback']
    },
    {
      icon: Palette,
      title: 'Style Customization',
      description: 'Customize 3D models with different artistic styles, colors, and visual effects.',
      benefits: ['Style transfer', 'Color customization', 'Artistic effects', 'Brand consistency']
    },
    {
      icon: Cpu,
      title: 'Advanced Rendering',
      description: 'High-quality rendering with realistic lighting, shadows, and materials for professional results.',
      benefits: ['Ray tracing', 'Global illumination', 'Material physics', 'Professional quality']
    },
    {
      icon: Eye,
      title: 'Visualization Tools',
      description: 'Comprehensive visualization tools for viewing, editing, and presenting 3D models.',
      benefits: ['360° viewing', 'Animation preview', 'Export options', 'Presentation tools']
    }
  ]

  const benefits = [
    'Reduce 3D modeling time by up to 80%',
    'Generate high-quality models from simple descriptions',
    'Automate repetitive modeling tasks',
    'Scale 3D content production efficiently',
    'Maintain consistent quality across projects',
    'Enable non-technical users to create 3D content'
  ]

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced 3D Modeling Solutions</title>
        <meta name="description" content="Revolutionary AI-powered 3D generation technology that creates high-quality 3D models from text descriptions and images. Transform your creative workflow with cutting-edge AI." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, text-to-3D, image-to-3D, 3D visualization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered 3D generation technology that creates high-quality 3D models from text descriptions and images. Transform your creative workflow with cutting-edge AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI 3D Features
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge AI technology that revolutionizes 3D content creation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your 3D workflow with intelligent automation and quality results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your 3D Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of 3D content creation with our AI-powered generation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AI3DGenerationPage