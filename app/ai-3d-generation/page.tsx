'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Cube, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart, Brain, Shield } from 'lucide-react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AI3DGenerationPage: React.FC = () => {

  const features = [
    {
      icon: Cube,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate high-quality 3D models from text descriptions or 2D images using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D generation', 'Automated modeling', 'High-quality output']
    },
    {
      icon: Zap,
      title: 'Real-Time Generation',
      description: 'Create 3D content in real-time with lightning-fast processing and instant preview capabilities.',
      benefits: ['Instant generation', 'Real-time preview', 'Fast iteration', 'Live editing']
    },
    {
      icon: Eye,
      title: 'Advanced Rendering',
      description: 'Professional-grade rendering with realistic lighting, materials, and textures.',
      benefits: ['Photorealistic output', 'Advanced lighting', 'Material simulation', 'High-resolution rendering']
    },
    {
      icon: Palette,
      title: 'Creative Tools',
      description: 'Comprehensive suite of tools for customizing and enhancing your 3D creations.',
      benefits: ['Material editor', 'Texture mapping', 'Color customization', 'Style transfer']
    },
    {
      icon: Brain,
      title: 'Intelligent Optimization',
      description: 'AI-driven optimization for performance, quality, and resource efficiency.',
      benefits: ['Auto-optimization', 'Performance tuning', 'Quality enhancement', 'Resource management']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Secure cloud-based processing with enterprise-grade security and compliance.',
      benefits: ['Data encryption', 'Secure processing', 'Compliance ready', 'Access controls']
    }
  ]

  const useCases = [
    {
      title: 'Game Development',
      description: 'Rapidly generate 3D assets, characters, and environments for games.',
      icon: Target,
      benefits: ['Character creation', 'Environment design', 'Asset generation', 'Animation ready']
    },
    {
      title: 'Architecture & Design',
      description: 'Create detailed 3D models for architectural visualization and design.',
      icon: BarChart,
      benefits: ['Building visualization', 'Interior design', 'Urban planning', 'Client presentations']
    },
    {
      title: 'E-commerce',
      description: 'Generate product visualizations and 3D models for online stores.',
      icon: CheckCircle,
      benefits: ['Product visualization', '360° views', 'AR integration', 'Marketing assets']
    },
    {
      title: 'Education & Training',
      description: 'Create interactive 3D content for educational and training purposes.',
      icon: Brain,
      benefits: ['Educational models', 'Training simulations', 'Interactive content', 'VR integration']
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual creators and small projects',
      features: [
        '100 3D generations/month',
        'Basic rendering quality',
        'Standard support',
        'Community access',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for professional designers and agencies',
      features: [
        '500 3D generations/month',
        'High-quality rendering',
        'Priority support',
        'Advanced tools',
        'All export formats',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large teams and enterprise needs',
      features: [
        'Unlimited generations',
        'Ultra-high quality rendering',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, design automation, 3D assets" />
      </Helmet>
      
      <Navigation />
      
      <main $1>
        {/* Hero Section */}
      </main>
          </div>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
              </h1>
              <p Revolutionary AI-powered 3D model generation and design automation solutions>
                  $2
                </p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button Start Creating
                  >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button $2>
                  $2
                </button>
                </button>
                </button>
              </div>
            </div>
          </div>
        </section>
            {/* Features Section */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 2>
                  Powerful AI Features
                </h2>
              </h2>
              <p Advanced AI technology that transforms your creative ideas into stunning 3D models>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul $1>
            {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            {benefit}
          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
            {/* Use Cases Section */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 2>
                  Industry Applications
                </h2>
              </h2>
              <p Discover how AI 3D generation is transforming various industries>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul $1>
            {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            {benefit}
          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
            {/* Pricing Section */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 2>
                  Choose Your Plan
                </h2>
              </h2>
              <p Flexible pricing options to match your creative needs>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {pricingTiers.map((tier, index) => (
                <div $1>
            {tier.popular && (
                    <div className="text-center mb-4">
                      <span Most Popular>
                  $2
                </span>
                      </span>
                    </div>
                  )}
          </div>
          </div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{tier.description}</p>
                  </div>
                  <ul $1>
            {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
            {feature}
          </div>
                      </li>
                    ))}
                  </ul>
                  <button $2>
                  $2
                </button>
                </button>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
            {/* CTA Section */}
          </div>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 2>
                  Ready to Create Amazing 3D Content?
                </h2>
            </h2>
            <p Join thousands of creators who are already using AI to bring their ideas to life>
                  $2
                </p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button $2>
                  $2
                </button>
                </button>
              </button>
              <button $2>
                  $2
                </button>
                </button>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default AI3DGenerationPage