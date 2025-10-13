'use client';
import React from 'react';
import { CheckCircle, Star, Phone, Mail, Box, Zap, Shield, Clock, Palette, Camera, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    'AI-powered 3D model creation',
    'Texture synthesis and mapping',
    'Animation generation',
    'LOD optimization',
    'VR/AR integration',
    'Real-time rendering',
    'Custom model training',
    'Batch processing'
  ];

  const benefits = [
    'Accelerate 3D content creation by 80%',
    'Reduce production costs by 60%',
    'Improve visual quality and consistency',
    'Enable rapid prototyping',
    'Support multiple file formats',
    'Integrate with popular 3D software'
  ];

  const useCases = [
    'Game development',
    'Architectural visualization',
    'Product design',
    'Virtual reality experiences',
    'Augmented reality apps',
    '3D printing',
    'Marketing materials',
    'Educational content'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$199/month',
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
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Box className="w-4 h-4" />
            <span>AI 3D Technology</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI 3D Model Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning 3D models, textures, and animations with our advanced AI technology. 
            Perfect for gaming, VR/AR, architecture, and product design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Advanced 3D AI Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Box className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our 3D AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Transform your 3D workflow with cutting-edge AI that generates high-quality models and textures automatically.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
                <p className="text-gray-300 text-sm">
                  Perfect for creating immersive 3D experiences and accelerating design workflows.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['NeRF', '3D GANs', 'Blender API', 'Unity Integration', 'Custom 3D Models', 'OpenGL'].map((tech, index) => (
              <div key={index} className="cyber-card p-4 text-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Amazing 3D Content?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our AI 3D generation technology and how it can transform your creative workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">{/* Hero Section */</div>} <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
              AI 3D Generation;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Advanced AI-powered 3D generation solution for modern businesses;</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover: from-teal-600 hover:to-blue-700 transition-all duration-300">,</button>
                Get Started;
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover: bg-white/10 transition-all duration-300">,</button>
                View Demo;
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features;</h2>
              </h2>
              <p className="text-xl text-gray-300">Advanced AI technology that drives results;</p>
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">,</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                    <feature.icon className="w-8 h-8 text-white" />
                        <li key={idx}className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit} </li>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
        {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              </h2>
              <p className="text-xl text-gray-300">Proven results that drive business growth and efficiency;</p>
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">,</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                    <CheckCircle className="w-8 h-8 text-white" />

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              </h2>
              <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your requirements and get started today;</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover: from-teal-600 hover:to-blue-700 transition-all duration-300">,</button>
                  Contact Us;
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover: bg-white/10 transition-all duration-300">,</button>
                  Learn More;
      <Footer />

  );
};

export default AI3DGenerationPage;
