'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Video, Play, Zap, Users, Shield, Clock, Star, CheckCircle, ArrowRight, Sparkles, Camera, Edit, Music, Upload, Download, Smartphone, Globe, BarChart, Target, Rocket, Phone, Mail } from 'lucide-react';

const AIVideoCreatorPage: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: 'AI Video Generation',
      description: 'Create professional videos from text prompts in minutes',
      color: 'text-pink-400'
    },
    {
      icon: Camera,
      title: 'Smart Editing',
      description: 'AI-powered video editing with automatic cuts and transitions',
      color: 'text-purple-400'
    },
    {
      icon: Music,
      title: 'Audio Generation',
      description: 'Generate voiceovers, music, and sound effects with AI',
      color: 'text-blue-400'
    },
    {
      icon: Edit,
      title: 'Auto Captions',
      description: 'Automatically generate and sync captions for all videos',
      color: 'text-green-400'
    },
    {
      icon: Upload,
      title: 'Template Library',
      description: 'Access thousands of professional video templates',
      color: 'text-yellow-400'
    },
    {
      icon: Smartphone,
      title: 'Multi-format Export',
      description: 'Export videos optimized for all platforms and devices',
      color: 'text-indigo-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$199',
      period: '/month',
      description: 'Perfect for content creators and marketers',
      features: [
        '10 AI-generated videos per month',
        'Basic editing tools',
        'Standard templates',
        'HD export quality',
        'Email support',
        '10GB storage'
      ],
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for agencies and businesses',
      features: [
        '50 AI-generated videos per month',
        'Advanced editing tools',
        'Premium templates',
        '4K export quality',
        'Priority support',
        '100GB storage',
        'Team collaboration',
        'Custom branding'
      ],
      color: 'border-pink-500',
      buttonColor: 'bg-pink-500 hover:bg-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited AI-generated videos',
        'Professional editing suite',
        'Full template library',
        '8K export quality',
        '24/7 dedicated support',
        'Unlimited storage',
        'Advanced analytics',
        'API access',
        'White-label solution'
      ],
      color: 'border-purple-500',
      buttonColor: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const videoStats = [
    { label: 'Videos Created', value: '1M+', icon: Video },
    { label: 'Time Saved', value: '90%', icon: Clock },
    { label: 'User Satisfaction', value: '4.8/5', icon: Star },
    { label: 'Export Formats', value: '20+', icon: Download }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Content Creator',
      company: 'Digital Media Co',
      content: 'AI Video Creator has transformed my content production. I can now create professional videos in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Marketing Director',
      company: 'BrandFirst',
      content: 'The AI-generated voiceovers are incredibly natural. Our video engagement has increased by 300% since using this tool.',
      rating: 5
    },
    {
      name: 'John Lee',
      role: 'Video Producer',
      company: 'Creative Studio',
      content: 'The template library is amazing and the AI editing suggestions are spot-on. This tool has revolutionized our workflow.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Video Creator - Professional Video Production | Zion Tech Group</title>
        <meta name="description" content="Create professional videos with AI. Generate videos from text, smart editing, auto captions, and multi-format export." />
        <meta name="keywords" content="AI video, video creation, video editing, content creation, video automation, video templates" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-video-creator" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-bg matrix-rain data-stream">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch quantum-float hologram-flicker">
                AI Video Creator
              </h1>
              <p className="text-xl md:text-2xl text-pink-400 mb-8 font-medium cyber-glow neon-advanced cyber-scan-overlay">
                Professional Video Production with AI
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
                Create stunning videos from text prompts, edit with AI assistance, and export in multiple formats. 
                Perfect for content creators, marketers, and businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Play className="w-5 h-5 mr-2 inline" />
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Video className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </a>
              </div>
            </div>
          </section>

          {/* Video Stats */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {videoStats.map((stat, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 text-center quantum-float">
                  <stat.icon className="w-12 h-12 text-pink-400 mx-auto mb-4 quantum-entanglement" />
                  <div className="text-3xl font-bold text-white mb-2 neon-advanced">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Powerful Video Creation Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 hover:scale-105 transition-all duration-300 quantum-float">
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4 quantum-entanglement`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-advanced">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Choose Your Video Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced quantum-hologram p-8 relative ${plan.color} ${plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-pink-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${plan.buttonColor}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Loved by Content Creators
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 quantum-float">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card-advanced quantum-hologram p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-advanced">
                Start Creating Amazing Videos Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of creators who are already using AI Video Creator to produce 
                professional content faster and more efficiently than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIVideoCreatorPage;