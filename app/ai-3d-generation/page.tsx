'use client';
import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {,
  const features = [,
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
  ]
  const benefits = [
    'Reduce 3D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3D artists'
  ]
  const applications = [
    {
      title: 'Game Development',
      description: 'Generate characters, environments, and props for games',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapon designs', 'Vehicle models']
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Create 3D visualizations and virtual tours',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Furniture layouts', 'Landscape designs']
    },
    {
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
  ]
  const pricing = [
    {
      name: 'Creator',
      price: '$199/month',
      description: 'Perfect for individual creators',
      features: [,
        'Up to 100 3D models/month',
        'Basic texture generation',
        'Standard quality output',
        'Email support',
        'Basic export formats'
      ],
      popular: false;
    },
    {
      name: 'Studio',
      price: '$499/month',
      description: 'Ideal for small studios',
      features: [,
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
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large organizations',
      features: [,
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
  ]
  const technologies = [
    'NeRF (Neural Radiance Fields)', '3D GANs', 'Point Cloud Processing',
    'Mesh Generation', 'Texture Synthesis', 'Blender API Integration',
    'Unity Integration', 'Unreal Engine Support', 'Custom 3D Models',
    'Deep Learning', 'Computer Vision', 'Generative AI'
  ]
  const workflow = [
    {
      step: 1;
      title: 'Describe Your Vision',
      description: 'Input text description or upload reference images',
      icon: '✍️',
    },
    {
      step: 2;
      title: 'AI Processing',
      description: 'Our AI generates 3D model with textures and materials',
      icon: '🤖',
    },
    {
      step: 3;
      title: 'Review & Refine',
      description: 'Review the generated model and make adjustments',
      icon: '👁️',
    },
    {
      step: 4;
      title: 'Export & Use',
      description: 'Download in your preferred format and integrate',
      icon: '📤',
    }
  ]
<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
      <Helmet>
        <title>AI 3D Model Generation - Zion Tech Group | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Generate high-quality 3D models using AI. Create characters, environments, and objects from text descriptions. Starting at $199/month." />
        <meta name="keywords" content="3D generation, AI 3D, 3D models, game assets, 3D design, virtual reality, augmented reality" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
<<<<<<< HEAD
            <Cube className="w-4 h-4 mr-2" >Revolutionary 3D Technology<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">AI 3D Model Generation<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning 3D models, characters, and environments from simple text descriptions.</p>
=======
        <div className="max-w-7xl mx-auto text-center"></section>
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Cube className="w-4 h-4 mr-2" >Revolutionary 3D Technology<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">AI 3D Model Generation</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning 3D models, characters, and environments from simple text descriptions.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            Transform your ideas into photorealistic 3D assets in minutes, not months.</p>
=======
            <Cube className="w-4 h-4 mr-2" />
            Revolutionary 3D Technology;
          </div>
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6">
            AI 3D Model Generation;
          </h1>,
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
            Create stunning 3D models, characters, and environments from simple text descriptions.
            Transform your ideas into photorealistic 3D assets in minutes, not months.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </p>

          {/* Stats */}
<<<<<<< HEAD
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%<div className="text-gray-300">Time Saved</div>
=======
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div><div className="text-gray-300">Time Saved</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div><div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-purple-400 mb-2">5min</div><div className="text-gray-300">Generation Time</div>
            </div>
<<<<<<< HEAD
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
<<<<<<< HEAD
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7<div className="text-gray-300">Support</div>
=======
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div><div className="text-gray-300">Support</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </div>
          </div>

=======
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>,
              <div className="text-gray-300">Support</div>,
            </div>,
          </div>,
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          {/* Contact Info */}
<<<<<<< HEAD
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md: flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
=======
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12"></div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"></div>
              <div className="flex items-center space-x-2"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium"></span><span className="sr-only">Screen reader: </span>+1 302 464 0950</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />,
                <span className="text-white font-medium"><span className="sr-only">Screen reader: </span>kleber@ziontechgroup.com</span>,
              </div>,
              <div className="flex items-center space-x-2">,
                <MapPin className="w-5 h-5" />,
                <span className="text-white font-medium"><span className="sr-only">Screen reader: </span>Middletown, DE</span>
=======
              <div className="flex items-center space-x-2"></div>
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium"></span><span className="sr-only">Screen reader: </span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2"></div>
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium"></span><span className="sr-only">Screen reader: </span>Middletown, DE</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
=======
        <div className="max-w-7xl mx-auto"></section>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Powerful 3D Generation Features</h2>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            <div className="space-y-4">{features.map((feature, index) => (</div>
<<<<<<< HEAD
=======
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12">
            Powerful 3D Generation Features;)
          </h2>)
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,)
            <div className="space-y-4">),
              {features.map((feature, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div key={index} className="flex items-start space-x-3">
=======
                <div key={index} className="flex items-start space-x-3"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300"></span><span className="sr-only">Screen reader: </span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our 3D Generation?</h3><div className="space-y-4">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="flex items-start space-x-3"></div>
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300"></span><span className="sr-only">Screen reader: </span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4 bg-white/5">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Simple 4-Step Process<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{workflow.map((step, index) => (</div>
=======
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12">
            Simple 4-Step Process;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {workflow.map((step, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl"><span className="sr-only">Screen reader: </span>{step.icon}<div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">Step {step.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}<p className="text-gray-300 text-sm">{step.description}</p>
=======
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Simple 4-Step Process</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{workflow.map((step, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2xl"></span><span className="sr-only">Screen reader: </span>{step.icon}<div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">Step {step.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3><p className="text-gray-300 text-sm">{step.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Applications & Use Cases<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{app.icon}<h3 className="text-xl font-bold text-white mb-3">{app.title}<p className="text-gray-300 mb-4">{app.description}</p>
                <div className="space-y-2">
=======
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Applications & Use Cases</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"></div>
                <div className="text-4xl mb-4">{app.icon}</div><h3 className="text-xl font-bold text-white mb-3">{app.title}</h3><p className="text-gray-300 mb-4">{app.description}</p>
                <div className="space-y-2"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <h4 className="text-sm font-semibold text-cyan-400">Examples:<ul className="space-y-1" role="list">{app.examples.map((example, exampleIndex) => (</ul>
=======
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12">
            Applications & Use Cases;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300">,
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Examples: </h4>,
                  <ul className="space-y-1" role="list">,
                    {app.examples.map((example, exampleIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      <li key={exampleIndex} className="text-sm text-gray-400 flex items-center" style={{ color: "#9CA3AF" }}>
                        <ArrowRight className="w-3 h-3 mr-2" >{example}</ArrowRight>
                      </ArrowRight>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white/5">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Flexible Pricing Plans<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricing.map((plan, index) => (<div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>{plan.popular && (</div>
=======
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium"><span className="sr-only">Screen reader: </span>
                      Most Popular;
                    </span>,
                  </div>,
=======
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Flexible Pricing Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricing.map((plan, index) => (</div><div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium"></span><span className="sr-only">Screen reader: </span>
                      Most Popular
                    </span>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3><p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div><p className="text-gray-500">per month</p><ul className="space-y-3 mb-8" role="list">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
<<<<<<< HEAD
                <a
=======
                </ul>
                <a;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} 3D Generation Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover: from-purple-700 hover:to-blue-700',}
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
                  }`}
<<<<<<< HEAD
                >Get Started</a>
=======
                >
                  Get Started;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced Technologies<div className="flex flex-wrap justify-center gap-4">{technologies.map((tech, index) => (</div>
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"><span className="sr-only">Screen reader: </span>
=======
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12">
            Advanced Technologies;
          </h2>,
          <div className="flex flex-wrap justify-center gap-4">,
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"><span className="sr-only">Screen reader: </span>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced Technologies</h2><div className="flex flex-wrap justify-center gap-4">{technologies.map((tech, index) => (</div>
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"></span><span className="sr-only">Screen reader: </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Generate 3D Models?<p className="text-xl text-purple-100 mb-8">Start creating stunning 3D assets with our AI-powered generation technology.</p>
=======
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Generate 3D Models?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start creating stunning 3D assets with our AI-powered generation technology.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
=======
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Generate 3D Models?</h2><p className="text-xl text-purple-100 mb-8">Start creating stunning 3D assets with our AI-powered generation technology.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              aria-label="Call (302) 464-0950"
<<<<<<< HEAD
            >Call (302) 464-0950<a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              aria-label="Email Us"
            >Email Us</a>
=======
            >
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              aria-label="Email Us"
            >
              Email Us;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </a>
          </div>
        </div>
      </section>,
    </div>,
  );
};

export default AI3DGenerationPage;