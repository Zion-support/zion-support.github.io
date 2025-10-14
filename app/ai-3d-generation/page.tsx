import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Box, Brain, Eye, Zap, CheckCircle, Star, Users, Clock, Target, BarChart3, Globe, Shield, Sparkles, PenTool, Image, Video, Mic, Code, Mail, MessageSquare, Calendar, DollarSign, Cube, Layers, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package } from 'lucide-react'

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Modeling',
      description: 'Generate complex 3D models from text descriptions, sketches, or reference images using advanced AI algorithms.'
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-400" />,
      title: 'Real-time Rendering',
      description: 'High-quality real-time rendering with photorealistic lighting, shadows, and materials for stunning visuals.'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Instant Generation',
      description: 'Create detailed 3D models in seconds with our optimized AI processing and cloud-based infrastructure.'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: 'Precision Control',
      description: 'Fine-tune every aspect of your 3D models with precise controls for dimensions, materials, and textures.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Animation Ready',
      description: 'Generate 3D models that are ready for animation with proper rigging and bone structure.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Multi-Format Export',
      description: 'Export your 3D models in all major formats including OBJ, FBX, STL, and GLTF for any platform.'
    }
  ]

  const generationTypes = [
    {
      icon: <Box className="w-8 h-8 text-cyan-400" />,
      title: 'Product Design',
      description: 'Create detailed 3D models for product visualization, prototyping, and manufacturing.',
      price: '$0.50/model',
      features: ['High detail', 'Manufacturing ready', 'Material options', 'Scale accuracy']
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'Character Creation',
      description: 'Generate realistic 3D characters for games, films, and virtual experiences.',
      price: '$2.00/character',
      features: ['Facial details', 'Body proportions', 'Clothing options', 'Animation ready']
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: 'Architecture',
      description: 'Create detailed architectural models and building visualizations.',
      price: '$5.00/building',
      features: ['Floor plans', 'Interior design', 'Landscaping', 'Lighting setup']
    },
    {
      icon: <Car className="w-8 h-8 text-orange-400" />,
      title: 'Vehicle Design',
      description: 'Generate detailed 3D vehicles for automotive design and visualization.',
      price: '$3.00/vehicle',
      features: ['Exterior design', 'Interior details', 'Wheel options', 'Color variations']
    },
    {
      icon: <Package className="w-8 h-8 text-pink-400" />,
      title: 'Packaging Design',
      description: 'Create 3D packaging mockups for product presentation and marketing.',
      price: '$1.00/package',
      features: ['Brand integration', 'Material textures', 'Print ready', 'Multiple angles']
    },
    {
      icon: <Heart2 className="w-8 h-8 text-blue-400" />,
      title: 'Art & Sculpture',
      description: 'Generate artistic 3D sculptures and decorative objects.',
      price: '$1.50/artwork',
      features: ['Artistic styles', 'Detail levels', 'Material options', 'Export formats']
    }
  ]

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators and designers',
      features: [
        '100 3D models/month',
        'Basic AI models',
        'Standard resolution',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for design agencies and studios',
      features: [
        '500 3D models/month',
        'Advanced AI models',
        'High resolution',
        'Priority support',
        'All export formats',
        'Animation tools',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited models',
        'Custom AI training',
        '4K resolution',
        'Dedicated support',
        'API access',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '10M+', label: '3D Models Generated', icon: <Box className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-emerald-400" /> },
    { number: '< 30s', label: 'Generation Time', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Export Formats', icon: <Globe className="w-6 h-6 text-orange-400" /> }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      company: '3D Design Studio',
      content: 'Zion Tech Group\'s AI 3D Generation has revolutionized our workflow. We can now create detailed 3D models in minutes instead of hours, dramatically increasing our productivity.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Game Development Co.',
      content: 'The character generation is incredible. We\'ve created hundreds of unique characters for our game in just a few days. The quality is outstanding and the models are animation-ready.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Architecture Firm',
      content: 'The architectural visualization capabilities are amazing. We can now present our designs to clients with photorealistic 3D models that help them visualize the final result.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Advanced 3D Model Creation | Zion Tech Group</title>
        <meta name="description" content="Create stunning 3D models with AI-powered generation. From product design to character creation, generate high-quality 3D content in seconds with 99.9% accuracy." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, 3D design, product visualization, character creation, architectural modeling, 3D animation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-generation" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Box className="w-4 h-4" />
              <span>AI-Powered 3D Generation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI 3D Generation</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create stunning 3D models with AI-powered generation. From product design to character creation, 
              generate high-quality 3D content in seconds with our advanced artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI 3D Generation?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven 3D creation with our proven results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">3D Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to create stunning 3D models with artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Generation Types Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Generation <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Create any type of 3D content you need with our versatile AI generation platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generationTypes.map((type, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {type.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {type.price}
                    </div>
                    <div className="space-y-1">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact"
                      className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your 3D creation needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creators Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join thousands of creators using our AI platform to bring their ideas to life in 3D.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Create Stunning <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">3D Content?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of creators using our AI platform to generate high-quality 3D models 
                in seconds. Start your free trial today and bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AI3DGenerationPage
