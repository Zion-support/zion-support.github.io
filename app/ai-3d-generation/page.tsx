import React from 'react';
import { CheckCircle, ArrowRight, Cube, Zap, Palette, Download, Star, DollarSign, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Cube className="w-8 h-8 text-blue-500" />,
      title: 'AI 3D Model Generation',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D generation', 'Sketch-to-3D modeling', 'Multiple format support']
    },
    {
      icon: <Palette className="w-8 h-8 text-green-500" />,
      title: 'Automatic Texturing',
      description: 'AI-powered automatic texturing and material application for realistic 3D models.',
      benefits: ['Smart material selection', 'Automatic UV mapping', 'PBR material generation', 'Texture optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Real-time Rendering',
      description: 'High-quality real-time rendering with AI-optimized lighting and shading effects.',
      benefits: ['Real-time preview', 'AI lighting optimization', 'Global illumination', 'Ray tracing support']
    },
    {
      icon: <Download className="w-8 h-8 text-orange-500" />,
      title: 'Multi-format Export',
      description: 'Export 3D models in various formats compatible with popular 3D software and game engines.',
      benefits: ['OBJ, FBX, GLTF support', 'Game engine compatibility', 'Animation export', 'LOD generation']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        '50 3D model generations/month',
        'Basic texturing',
        'Standard resolution (1024x1024)',
        'Common format exports',
        'Email support',
        'Commercial license included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for creative professionals',
      features: [
        '200 3D model generations/month',
        'Advanced texturing & materials',
        'High resolution (4K)',
        'All format exports',
        'Priority support',
        'API access',
        'Custom model training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large teams and studios',
      features: [
        'Unlimited 3D generations',
        'Premium texturing & materials',
        'Ultra-high resolution (8K)',
        'Custom format support',
        'Dedicated support',
        'Full API access',
        'Custom AI model training',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Generate 3D assets, characters, and environments for games',
      icon: <Cube className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Architecture Visualization',
      description: 'Create 3D models of buildings and interior spaces',
      icon: <Palette className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Product Design',
      description: 'Prototype and visualize product concepts in 3D',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Marketing & Advertising',
      description: 'Create stunning 3D visuals for marketing campaigns',
      icon: <Download className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Game Developer, Pixel Studios',
      content: 'AI 3D Generation has revolutionized our asset creation process. We can now create 10x more 3D models in the same time.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Architect, DesignCorp',
      content: 'The quality of 3D models generated from our sketches is incredible. It saves us weeks of manual modeling work.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Product Designer, TechFlow',
      content: 'Perfect for rapid prototyping. We can visualize our product ideas in 3D within minutes instead of days.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality 3D models with AI. Text-to-3D, image-to-3D, automatic texturing, and real-time rendering. Perfect for game development, architecture, and product design." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, text-to-3D, image-to-3D, 3D rendering, game development, architecture visualization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create stunning 3D models with the power of artificial intelligence. Generate, texture, and render 3D assets from text descriptions, images, or sketches in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Try Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI 3D Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create professional 3D models with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
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

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perfect For</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industries and use cases that benefit from AI 3D generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI 3D Generation Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your 3D creation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Creators Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from professionals using AI 3D Generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Amazing 3D Models?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven 3D generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI3DGenerationPage;