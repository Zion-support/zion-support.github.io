import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Cube, Zap, Palette, Cpu } from 'lucide-react'

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that generate high-quality 3D models from text descriptions or 2D images.',
      benefits: ['Natural language processing', 'Image-to-3D conversion', 'Style transfer', 'Quality enhancement']
    },
    {
      icon: Cube,
      title: '3D Model Generation',
      description: 'Create detailed 3D models for games, AR/VR, product visualization, and architectural visualization.',
      benefits: ['Game assets', 'Product prototypes', 'Architectural models', 'Medical visualization']
    },
    {
      icon: Palette,
      title: 'Material & Texture AI',
      description: 'Intelligent material generation and texture mapping for realistic 3D models.',
      benefits: ['Procedural textures', 'Material libraries', 'PBR materials', 'Custom shaders']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Fast 3D generation with real-time preview and iterative refinement capabilities.',
      benefits: ['Real-time preview', 'Iterative refinement', 'Batch processing', 'Cloud rendering']
    },
    {
      icon: Cpu,
      title: 'Advanced Rendering',
      description: 'High-quality rendering with support for various output formats and quality levels.',
      benefits: ['Multiple formats', 'Quality presets', 'Animation support', 'Export options']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard with usage statistics and performance metrics.',
      benefits: ['Usage analytics', 'Performance metrics', 'Cost tracking', 'Optimization insights']
    }
  ]

  const benefits = [
    'Reduce 3D modeling time by up to 80%',
    'Generate high-quality models from simple descriptions',
    'Support for multiple 3D formats and platforms',
    'Real-time collaboration and sharing capabilities',
    'Integration with popular 3D software and game engines',
    'Cost-effective alternative to traditional 3D modeling'
  ]

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced 3D AI Solutions</title>
        <meta name="description" content="Revolutionary AI-powered 3D generation technology that creates high-quality 3D models from text descriptions and 2D images. Perfect for games, AR/VR, and product visualization." />
        <meta name="keywords" content="AI 3D generation, artificial intelligence, 3D modeling, text-to-3D, image-to-3D, game development, AR VR" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered 3D generation technology that creates high-quality 3D models from text descriptions and 2D images. Perfect for games, AR/VR, and product visualization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI 3D Features
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge technology for next-generation 3D content creation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-teal-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your creative workflow with intelligent 3D generation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your 3D Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of 3D content creation with our AI-powered generation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
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