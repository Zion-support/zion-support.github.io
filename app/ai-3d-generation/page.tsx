<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
export default function Ai3DGenerationZionTechGroup() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
    'Reduce 3D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3D artists'
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Generate characters, environments, and props for games',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapon designs', 'Vehicle models']
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Cube, Zap, Eye, Palette, Download, ArrowRight, Sparkles } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate complex 3D models from text descriptions using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Real-time generation', 'High-quality output', 'Multiple formats']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Generate 3D models in seconds with our optimized AI processing pipeline.',
      benefits: ['Sub-second generation', 'Batch processing', 'GPU acceleration', 'Cloud processing']
    },
    {
      icon: Eye,
      title: 'Photorealistic Rendering',
      description: 'Create stunning, photorealistic 3D models with advanced rendering techniques.',
      benefits: ['Ray tracing', 'Global illumination', 'Material physics', 'Lighting simulation']
    },
    {
<<<<<<< HEAD
      icon: Palette,
      title: 'Custom Materials & Textures',
      description: 'Apply custom materials and textures to your 3D models with AI assistance.',
      benefits: ['Smart material mapping', 'Texture generation', 'Color optimization', 'Surface details']
    },
    {
      icon: Download,
      title: 'Multiple Export Formats',
      description: 'Export your 3D models in various industry-standard formats.',
      benefits: ['OBJ, FBX, GLTF', 'STL for 3D printing', 'USD for pipelines', 'Custom formats']
    },
    {
      icon: Sparkles,
      title: 'Creative AI Assistance',
      description: 'Get AI-powered suggestions and improvements for your 3D creations.',
      benefits: ['Style suggestions', 'Optimization tips', 'Quality improvements', 'Creative variations']
    }
  ];

  const useCases = [
    {
      title: 'Game Development',
      description: 'Create 3D assets, characters, and environments for games',
      icon: '🎮'
    },
    {
      title: 'Architecture Visualization',
      description: 'Generate 3D building models and interior designs',
      icon: '🏗️'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Create 3D visualizations and virtual tours',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Furniture layouts', 'Landscape designs']
    },
    {
<<<<<<< HEAD
      title: 'E-commerce',
      description: 'Generate product visualizations and AR experiences',
      icon: '🛒',
      examples: ['Product models', 'AR try-ons', 'Virtual showrooms', 'Packaging designs']
    },
    {
      title: 'Education & Training',
      description: 'Create interactive 3D learning materials',
      icon: '📚',
      examples: ['Anatomical models', 'Historical reconstructions', 'Scientific visualizations', 'Training simulations']
    },
    {
      title: 'Entertainment & Media',
      description: 'Produce 3D content for films and animations',
      icon: '🎬',
      examples: ['Character designs', 'Set pieces', 'Props and objects', 'Special effects']
    },
    {
      title: 'Manufacturing',
      description: 'Design and prototype products in 3D',
      icon: '🏭',
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    }
  ];

import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Cube, Palette, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'AI-powered 3D model generation',
    'Automatic texture synthesis',
    'Real-time 3D rendering',
    'Multiple format support',
    'Custom model training',
    'Batch processing',
    'API integration',
    'Cloud-based processing',
    'High-resolution output',
    'Animation support',
    'Lighting optimization',
    'Material generation',
    'Shape optimization',
    'Color palette generation',
    'Marketing materials',
    'Educational content'
  ];

  const benefits = [
    'Faster 3D asset creation',
    'Reduced production costs',
    'Consistent quality output',
    'Scalable generation process',
    'Custom model training',
    'Real-time preview',
    'Multiple format export',
    'Cloud-based processing',
    'API integration',
    'Batch processing capabilities'
  ];

  const useCases = [
    {
      title: 'Gaming',
      description: 'Create 3D assets for games and virtual worlds',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapons and tools', 'Vehicles and props']
    },
    {
      title: 'Architecture',
      description: 'Generate 3D models for architectural visualization',
      icon: '🏗️',
      examples: ['Building designs', 'Interior layouts', 'Landscape models', 'Furniture pieces']
    },
    {
      title: 'Entertainment & Media',
      description: 'Produce 3D content for films and animations',
      icon: '🎬',
      examples: ['Character designs', 'Set pieces', 'Props and objects', 'Special effects']
    },
    {
      title: 'Manufacturing',
      description: 'Design and prototype products in 3D',
      icon: '🏭',
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    }
  ];

=======
      title: '3D Printing',
      description: 'Create printable 3D models for manufacturing',
      icon: '🖨️'
    }
  ];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  const pricing = [
    {
      plan: 'Starter',
      price: '$199/month',
<<<<<<< HEAD
      features: ['Up to 10 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$599/month',
      features: ['Up to 50 models/month', 'Advanced textures', 'High quality', 'Animation support', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,999/month',
      features: ['Unlimited models', 'Premium textures', 'Custom training', 'Priority support', 'White-label'],
=======
      description: 'Perfect for individual creators',
      features: [
        'Up to 100 3D models/month',
        'Basic texture generation',
        'Standard quality output',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$499/month',
      description: 'Ideal for small studios',
      features: [
        'Up to 500 3D models/month',
        'Advanced texture generation',
        'High quality output',
        'Priority support',
        'All export formats',
        'Animation support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited 3D models',
        'Custom AI training',
        'Highest quality output',
        'Dedicated support',
        'Custom integrations',
        'White-label options'
      ],
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      popular: false
    }
  ];

<<<<<<< HEAD
  const technologies = [
    'Neural Radiance Fields',
    'Generative Adversarial Networks',
    '3D Convolutional Networks',
    'Point Cloud Processing',
    'Mesh Generation',
    'Texture Synthesis',
    'Real-time Rendering',
    'Cloud Computing',
    'GPU Acceleration',
    'Machine Learning'
  ];

  return (
=======
    icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
  }
  ]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-022b
    <>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
      <Helmet>
<<<<<<< HEAD
        <title>Ai 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Ai 3D Generation solutions by Zion Tech Group" />
=======
        <title>Ai 3d Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered 3D generation solutions for businesses" />
        <meta name="keywords" content="AI, 3D generation, artificial intelligence, business solutions" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-022b
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai 3D Generation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai 3d generation solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai 3d Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai 3d generation solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
=======

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI 3D Generation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional AI 3D generation services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive AI 3D generation solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Create Amazing 3D Models?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get started with our AI 3D generation platform today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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
        </main>
        
        <Footer />
      </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
  );
}
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 3D Generation
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Studio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into stunning 3D models with our advanced AI-powered generation platform. 
            Create photorealistic 3D assets in seconds, not hours.
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
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced AI technology makes 3D model generation accessible to everyone, 
              from beginners to professional artists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
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
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From gaming to architecture, our AI 3D generation platform serves diverse industries 
              with specialized tools and workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to match your creative needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400/20' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white' 
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing 3D Models?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using AI to bring their ideas to life in 3D.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

import {Box, Palette, Zap, CheckCircle, ArrowRight, Star, Brain, Layers} from 'lucide-react';

import {ArrowRight} from 'lucide-react';

export default function Ai3DGeneration() {return (
    <>
      <title>Ai3DGeneration - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Ai3DGeneration</h1>
            <p className="text-lg text-gray-300 mb-8">Professional ai3dgeneration services coming soon.</p>

              Contact Us

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Ai3dgenerationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Professional ai 3d generation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai 3D Generation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai 3d generation services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default Ai3dGenerationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
