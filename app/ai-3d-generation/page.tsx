'use client';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Cube, 
  Zap, 
  Eye, 
  Download, 
  Upload, 
  Settings, 
  Wand2, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Award,
  Camera,
  Video,
  Image,
  Layers,
  RotateCcw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Box,
  Cylinder,
  Sphere
} from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
=======
import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Cube, ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2

  const features = [
    {
      icon: Cube,
      title: 'AI 3D Model Generation',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches using advanced AI',
      benefits: ['Text-to-3D conversion', 'Image-to-3D conversion', 'Sketch-to-3D conversion', 'High-resolution output']
    },
    {
      icon: Wand2,
      title: 'Intelligent Animation',
      description: 'Create realistic animations with AI-powered motion generation and physics simulation',
      benefits: ['Auto-rigging', 'Motion capture', 'Physics simulation', 'Realistic movement']
    },
    {
      icon: Eye,
      title: 'Real-time Rendering',
      description: 'Ultra-fast rendering with ray tracing and global illumination for photorealistic results',
      benefits: ['Ray tracing', 'Global illumination', 'Real-time preview', '4K output']
    },
    {
      icon: Layers,
      title: 'Material Generation',
      description: 'AI-generated materials and textures with PBR (Physically Based Rendering) support',
      benefits: ['PBR materials', 'Procedural textures', 'Material variation', 'UV mapping']
    },
    {
      icon: Camera,
      title: 'Virtual Photography',
      description: 'Create stunning product shots and architectural visualizations with AI camera positioning',
      benefits: ['Auto camera angles', 'Lighting optimization', 'Composition analysis', 'Professional shots']
    },
    {
      icon: Video,
      title: 'Video Generation',
      description: 'Generate 3D videos and animations from static models with AI-powered motion',
      benefits: ['3D video creation', 'Motion graphics', 'Cinematic effects', 'Export to multiple formats']
    }
  ];

  const pricingTiers = [
    {
      name: '3D Creator',
      price: '$299',
      period: '/month',
      description: 'Perfect for individual creators and small studios',
      features: [
        '10 3D models per month',
        'Basic animation tools',
        'Standard rendering',
        'HD output (1080p)',
        'Basic materials library',
        'Email support',
        'Commercial license'
      ],
      popular: false
    },
    {
      name: '3D Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for professional designers and agencies',
      features: [
        '50 3D models per month',
        'Advanced animation suite',
        'Ray tracing rendering',
        '4K output',
        'Full materials library',
        'Priority support',
        'API access',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: '3D Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large studios and enterprise clients',
      features: [
        'Unlimited 3D models',
        'Full animation suite',
        'Real-time ray tracing',
        '8K output',
        'Custom material creation',
        '24/7 dedicated support',
        'White-label solution',
        'On-premise deployment',
        'Custom integrations',
        'Unlimited team members'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Generation Speed',
      description: 'Lightning-fast 3D model generation with AI optimization',
      metrics: ['10x faster than traditional', 'Real-time preview', 'Batch processing']
    },
    {
      title: 'Quality Output',
      description: 'Professional-grade 3D models suitable for any industry',
      metrics: ['4K resolution', 'PBR materials', 'Industry standards']
    },
    {
      title: 'Creative Freedom',
      description: 'Unlimited creative possibilities with AI assistance',
      metrics: ['Any style', 'Any complexity', 'Custom parameters']
    },
    {
      title: 'Integration',
      description: 'Seamless integration with popular 3D software',
      metrics: ['Blender', 'Maya', '3ds Max', 'Unity', 'Unreal Engine']
    }
  ];

  const useCases = [
    {
      title: 'Product Design',
      description: 'Create photorealistic product visualizations for marketing and e-commerce',
      icon: Box,
      examples: ['Furniture', 'Electronics', 'Fashion', 'Automotive']
    },
    {
      title: 'Architecture',
      description: 'Generate architectural visualizations and virtual tours',
      icon: Square,
      examples: ['Interior design', 'Exterior rendering', 'Urban planning', 'Real estate']
    },
    {
      title: 'Gaming',
      description: 'Create 3D assets and characters for games and virtual worlds',
      icon: Triangle,
      examples: ['Characters', 'Environments', 'Props', 'Animations']
    },
    {
      title: 'Film & TV',
      description: 'Generate 3D assets for movies, TV shows, and commercials',
      icon: Video,
      examples: ['Props', 'Sets', 'Characters', 'Special effects']
    },
    {
      title: 'Education',
      description: 'Create educational 3D content and interactive learning materials',
      icon: Layers,
      examples: ['Scientific models', 'Historical reconstructions', 'Anatomy', 'Chemistry']
    },
    {
      title: 'VR/AR',
      description: 'Generate 3D content for virtual and augmented reality applications',
      icon: Eye,
      examples: ['VR environments', 'AR objects', 'Interactive content', 'Immersive experiences']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: '3D Artist',
      company: 'Creative Studios Inc.',
      content: 'The AI 3D Generation Studio has revolutionized our workflow. We can now create high-quality 3D models in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Designer',
      company: 'Tech Innovations Ltd.',
      content: 'The quality of generated models is incredible. They look like they were created by professional 3D artists.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Research Director',
      company: 'University of Technology',
      content: 'We use this for creating educational 3D content. The AI understands complex scientific concepts and creates accurate visualizations.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 matrix-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 rotate-slow">
                <Cube className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white cyber-text neon-pulse">
                AI 3D Generation Studio
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto neon-glow-cyan">
              Create stunning 3D models, animations, and visualizations with AI-powered tools. 
              From concept to final render, bring your ideas to life in 3D.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">AI-Powered</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">4K Quality</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">Real-time</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-glow-cyan">
            Powerful 3D Creation Tools
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to create professional 3D content with AI assistance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="futuristic-card hover-lift p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white mr-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-cyan-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From product design to entertainment, our AI 3D tools serve every creative need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white mr-4">
                    <useCase.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-cyan-400 text-sm">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Advanced capabilities that set us apart from traditional 3D software
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
              <p className="text-gray-300 mb-4">{capability.description}</p>
              <div className="space-y-1">
                {capability.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-cyan-400 font-semibold text-sm">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for creators of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`futuristic-card hover-lift p-8 relative ${
                tier.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Creators Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from 3D artists and designers who have transformed their workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="futuristic-card p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Creating in 3D Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of creators who are already using AI to bring their ideas to life in 3D.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AI3DGenerationPage;
=======
export default AI3DGenerationPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
