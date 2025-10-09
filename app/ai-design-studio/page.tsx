'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIDesignStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI Logo Generation',
      description: 'Create professional logos in seconds with AI-powered design tools and brand guidelines.',
      benefits: ['Instant logo creation', 'Brand consistency', 'Multiple variations', 'High-resolution exports']
    },
    {
      icon: Camera,
      title: 'Image Enhancement',
      description: 'Enhance and edit images with AI-powered tools for professional-quality results.',
      benefits: ['Auto-enhancement', 'Background removal', 'Color correction', 'Style transfer']
    },
    {
      icon: FileText,
      title: 'Brand Identity Kit',
      description: 'Generate complete brand identity packages including colors, fonts, and guidelines.',
      benefits: ['Color palettes', 'Typography selection', 'Brand guidelines', 'Style consistency']
    },
    {
      icon: Target,
      title: 'Marketing Materials',
      description: 'Create social media posts, banners, flyers, and other marketing materials automatically.',
      benefits: ['Social media templates', 'Banner generation', 'Print materials', 'Digital assets']
    },
    {
      icon: BarChart,
      title: 'Design Analytics',
      description: 'Track design performance and get insights on what resonates with your audience.',
      benefits: ['Performance metrics', 'A/B testing', 'Audience insights', 'Design optimization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with team members on design projects with real-time editing and feedback.',
      benefits: ['Real-time editing', 'Comment system', 'Version control', 'Team workflows']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 50 designs/month',
        'Basic AI tools',
        'Standard templates',
        'Email support',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 200 designs/month',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Up to 5 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited designs',
        'Full AI suite',
        'Custom development',
        'Dedicated support',
        'White-label options',
        'Unlimited users',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div><Helmet>
        <title>AI Design Studio - Zion Tech Group</title>
        <meta name="description" content="AI-powered design studio for logo creation, brand identity, and marketing materials. Create professional designs in seconds with advanced AI tools." />
        <meta name="keywords" content="AI design studio, logo generator, brand identity, graphic design, marketing materials, design automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-design-studio" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Design Studio">
                AI Design Studio
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Create Professional Designs with AI
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Transform your creative process with our AI-powered design studio. 
                Generate logos, brand identities, marketing materials, and visual content 
                in seconds with professional-quality results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#pricing"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Designing Free
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">5sec</div>
                  <div className="text-sm text-gray-300">Logo Generation</div>
                </div>
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">1000+</div>
                  <div className="text-sm text-gray-300">Design Templates</div>
                </div>
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2 neon-text">HD</div>
                  <div className="text-sm text-gray-300">High-Resolution Exports</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center neon-text">
              Advanced Design Features
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Everything you need to create stunning visual content
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-8 energy-pulse">
                  <div className="text-4xl mb-6 text-center cyber-scan-line">
                    <feature.icon className="w-12 h-12 text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center neon-text">
              Choose Your Design Plan
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Start creating amazing designs today
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400 neon-text">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Design Studio Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Amazing Designs?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start designing with AI today and create professional visuals in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Design Studio Free Trial Request"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Designing Free
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIDesignStudioPage;