'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'AI-powered 3D model generation from text descriptions',
    'High-resolution 3D asset creation (up to 8K textures)',
    'Automatic UV mapping and texture generation',
    'Real-time 3D model optimization and LOD generation',
    'Support for multiple 3D formats (OBJ, FBX, GLTF, STL)',
    'Procedural texture and material generation',
    '3D model animation and rigging automation',
    'VR/AR ready model optimization',
    'Batch processing for multiple models',
    'Custom neural network training for specific styles'
  ];

  const benefits = [
    'Reduce 3D asset creation time by 95%',
    'Lower production costs by 80%',
    'Generate unlimited 3D content variations',
    'Accelerate game development workflows',
    'Create photorealistic architectural visualizations',
    'Enable rapid prototyping for product design',
    'Generate 3D content for marketing materials',
    'Create immersive VR/AR experiences',
    'Automate 3D asset pipeline for studios',
    'Enable non-technical users to create 3D content'
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Generate 3D characters, environments, and props for games',
      icon: Gamepad2,
      benefits: ['Faster asset creation', 'Consistent art style', 'Reduced development time']
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Create photorealistic 3D models for architectural visualization',
      icon: Building,
      benefits: ['Realistic renders', 'Client presentations', 'Virtual tours']
    },
    {
      title: 'Product Design',
      description: 'Generate 3D prototypes and design variations',
      icon: Factory,
      benefits: ['Rapid prototyping', 'Design iteration', 'Cost reduction']
    },
    {
      title: 'Marketing & Advertising',
      description: 'Create 3D content for campaigns and social media',
      icon: Video,
      benefits: ['Engaging content', 'Brand differentiation', 'Social media impact']
    }
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$499',
      period: '/month',
      description: 'Perfect for individual creators and small studios',
      features: [
        'Up to 100 3D models per month',
        'Standard resolution (2K textures)',
        'Basic animation support',
        'OBJ and FBX export',
        'Email support',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for game studios and design agencies',
      features: [
        'Up to 500 3D models per month',
        'High resolution (4K textures)',
        'Advanced animation and rigging',
        'All format exports',
        'Priority support',
        'Custom style training',
        'Batch processing',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,999',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited 3D models',
        'Ultra-high resolution (8K textures)',
        'Full animation pipeline',
        'All format exports',
        'Dedicated support',
        'Custom neural networks',
        'On-premise deployment',
        'SLA guarantee',
        'Custom integrations',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const technologies = [
    'NeRF', '3D GANs', 'Blender API', 'Unity Integration', 'Unreal Engine',
    'TensorFlow 3D', 'PyTorch3D', 'Open3D', 'Custom 3D Models', 'Procedural Generation',
    'Mesh Processing', 'Texture Synthesis', 'Material Generation', 'Animation AI'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Model Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered 3D model generation and asset creation. Generate high-quality 3D models from text descriptions for games, architecture, and design. Starting at $499/month." />
        <meta name="keywords" content="ai 3d generation, 3d model creation, procedural generation, game assets, architectural visualization, 3d ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI 3D Model Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning 3D models and assets using AI. Generate high-quality 3D content from text descriptions 
            for games, architecture, product design, and more. Transform your creative workflow with cutting-edge AI technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">8K</div>
              <div className="text-gray-300">Max Resolution</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300">3D Formats</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Generation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced 3D Generation Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Transform Your 3D Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} 3D Generation Plan`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Technologies & Integrations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your 3D Workflow?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start generating amazing 3D content with AI today and transform your creative process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI3DGenerationPage;