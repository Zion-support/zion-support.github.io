'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      description: 'Create 3D assets in minutes instead of hours with our optimized AI pipeline.',
      benefits: ['90% faster than traditional methods', 'Batch processing', 'Real-time preview', 'Instant results']
    },
    {
      icon: Eye,
      title: 'Photorealistic Quality',
      description: 'Generate stunning, photorealistic 3D models with advanced rendering techniques.',
      benefits: ['High-resolution textures', 'Realistic lighting', 'Material accuracy', 'Professional quality']
    },
    {
      icon: Palette,
      title: 'Style Transfer & Customization',
      description: 'Apply any artistic style or customize models to match your brand requirements.',
      benefits: ['Style adaptation', 'Brand consistency', 'Custom materials', 'Flexible design']
    }
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Create characters, environments, and props for games with AI-generated 3D assets.',
      icon: '🎮'
    },
    {
      title: 'Architecture & Design',
      description: 'Generate architectural visualizations and interior design elements quickly.',
      icon: '🏗️'
    },
    {
      title: 'E-commerce',
      description: 'Create product visualizations and 3D configurators for online stores.',
      icon: '🛒'
    },
    {
      title: 'VR/AR Experiences',
      description: 'Build immersive virtual and augmented reality content with AI-generated 3D models.',
      icon: '🥽'
    },
    {
      title: 'Film & Animation',
      description: 'Produce 3D assets for movies, TV shows, and animated content efficiently.',
      icon: '🎬'
    },
    {
      title: 'Education & Training',
      description: 'Create interactive 3D learning materials and simulation environments.',
      icon: '🎓'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small projects and individual creators',
      features: [
        '100 3D models per month',
        'Basic text-to-3D generation',
        'Standard quality output',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and creative agencies',
      features: [
        '500 3D models per month',
        'Advanced AI features',
        'High-quality rendering',
        'Priority support',
        'All export formats',
        'Batch processing',
        'Custom style training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited 3D models',
        'Custom AI model training',
        'Dedicated support team',
        'API access',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform text into stunning 3D models with our AI-powered 3D generation service. Create photorealistic assets for games, VR, architecture, and more." />
        <meta name="keywords" content="AI 3D generation, text to 3D, 3D modeling, game development, VR AR, architecture visualization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-Powered
                <span className="text-gradient block">3D Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with our advanced AI technology. 
                Create photorealistic assets for games, VR, architecture, and more in minutes, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-futuristic text-lg px-8 py-4">
                  Start Creating Now
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Examples
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Powerful AI Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                    <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
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

          {/* Applications Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Applications & Use Cases
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applications.map((app, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-4xl mb-4">{app.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                    <p className="text-gray-300">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Choose Your Plan
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                    plan.popular ? 'border-cyan-400/50 scale-105' : 'border-white/20'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-300 mt-2">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Create Amazing 3D Content?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of creators who are already using AI to revolutionize their 3D workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-futuristic text-lg px-8 py-4">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AI3DGenerationPage;