'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code, Calculator, Calendar, Compass, PieChart, TrendingDown, Phone, Mail, MapPin, Cube, Layers, Camera, Download, Upload, RotateCcw, Move, Scale, RotateCw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: "AI 3D Model Generation",
      description: "Generate high-quality 3D models from text descriptions or 2D images using advanced AI",
      benefits: ["Text-to-3D generation", "Image-to-3D conversion", "High-quality output"]
    },
    {
      icon: Layers,
      title: "Advanced Texturing",
      description: "Automatically apply realistic textures and materials to your 3D models",
      benefits: ["Automatic texturing", "Material generation", "Realistic rendering"]
    },
    {
      icon: Camera,
      title: "360° Rendering",
      description: "Create stunning 360-degree renders and animations of your 3D models",
      benefits: ["360° views", "Animation support", "Multiple formats"]
    },
    {
      icon: Scale,
      title: "Smart Scaling",
      description: "Intelligent scaling and optimization for different use cases and platforms",
      benefits: ["Auto-optimization", "Platform-specific scaling", "Performance tuning"]
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$79",
      period: "per month",
      description: "Perfect for individual creators and small projects",
      features: [
        "Up to 50 3D models/month",
        "Basic texturing",
        "Standard resolution",
        "Email support",
        "Basic templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "per month",
      description: "Ideal for professionals and growing businesses",
      features: [
        "Up to 200 3D models/month",
        "Advanced texturing",
        "High resolution",
        "Priority support",
        "API access",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "per month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited 3D models",
        "Premium texturing",
        "4K resolution",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: Building,
      title: "Architecture & Design",
      description: "Create detailed 3D models for architectural visualization and design",
      benefits: ["Architectural models", "Interior design", "Urban planning"]
    },
    {
      icon: Video,
      title: "Gaming & Entertainment",
      description: "Generate 3D assets for games, movies, and virtual experiences",
      benefits: ["Game assets", "Character models", "Environment design"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Create 3D product models for enhanced online shopping experiences",
      benefits: ["Product visualization", "Interactive models", "AR integration"]
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Develop 3D educational content and training simulations",
      benefits: ["Educational models", "Training simulations", "Interactive learning"]
    }
  ];

  const testimonials = [
    {
      name: "Emma Rodriguez",
      role: "3D Artist",
      company: "Digital Creations Studio",
      content: "The AI 3D Generation tool has revolutionized my workflow. I can create complex 3D models in minutes that would normally take hours or days.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Game Developer",
      company: "Virtual Worlds Inc",
      content: "The quality of the generated 3D models is incredible. The AI understands context and creates models that perfectly match our vision.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Architect",
      company: "Future Architecture",
      content: "This tool has transformed how we present our designs to clients. The 3D models are so realistic and detailed that clients can truly visualize the final result.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 cyber-grid-advanced"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-8">
            <Cube className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-medium">AI 3D Generation Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-enhanced">
            Create 3D Worlds with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into stunning 3D models with our revolutionary AI-powered generation engine. 
            From text descriptions to photorealistic 3D assets in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Creating
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
              View Gallery
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Creation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">4K</div>
              <div className="text-gray-300">Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Export Formats</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Powerful 3D Generation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI to create stunning 3D models with unprecedented speed and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-purple-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
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
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Endless Possibilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI 3D generation can transform your creative workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-pink-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Choose Your Creation Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your 3D generation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-ultra p-8 relative ${plan.popular ? 'border-2 border-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'neon-button-ultra' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Trusted by Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what artists and developers say about our AI 3D generation platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-ultra p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.role}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
            Ready to Create in 3D?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using AI to bring their ideas to life in 3D
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Creating Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AI3DGenerationPage;