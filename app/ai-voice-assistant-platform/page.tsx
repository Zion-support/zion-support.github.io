'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Mic, Brain, Zap, Shield, Clock, ArrowRight, Phone, Mail, MapPin, Target, TrendingUp, Settings, FileText, MessageCircle, DollarSign, Globe, Smartphone, Lock, Database, Cloud, Code, BarChart3, PieChart, Activity, AlertCircle, CheckSquare, Plus, Edit, Trash2, Eye, Download, Share2, Filter, Search, Bell, BellOff, Star as StarIcon, Heart, ThumbsUp, ThumbsDown, MessageSquare, Send, Paperclip, Image, Video, File, Folder, FolderOpen, Tag, Tags, Flag, Bookmark, Archive, Trash, RefreshCw, RotateCcw, Save, Upload, Download as DownloadIcon, ExternalLink, Link, Copy, Share, MoreHorizontal, MoreVertical, Settings as SettingsIcon, User, UserPlus, UserMinus, UserCheck, UserX, Crown, Award, Medal, Trophy, Gift, Sparkles, Rocket, Zap as ZapIcon, Lightning, Fire, Water, Wind, Earth, Sun, Moon, Planet, Galaxy, Atom, Dna, Cpu, HardDrive, MemoryStick, Wifi, Bluetooth, Battery, Plug, Power, Energy, Electric, Nuclear, Quantum, Hologram, Matrix, Cyber, Neural, Ai, Robot, Bot, Android, Ios, Windows, Linux, Mac, Chrome, Firefox, Safari, Edge, Opera, Brave, Tor, Vpn, Security, Privacy, Encryption, Decryption, Key, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Shield as ShieldIcon, Sword, Armor, Castle, Fortress, Wall, Gate, Door, Window, Roof, Floor, Ceiling, Wall as WallIcon, Brick, Stone, Wood, Metal, Glass, Plastic, Rubber, Fabric, Leather, Fur, Silk, Cotton, Wool, Linen, Hemp, Bamboo, Cork, Paper, Cardboard, Foam, Sponge, Gel, Liquid, Gas, Solid, Plasma, Crystal, Diamond, Gold, Silver, Bronze, Copper, Iron, Steel, Aluminum, Titanium, Platinum, Palladium, Rhodium, Iridium, Osmium, Ruthenium, Rhenium, Tungsten, Molybdenum, Chromium, Vanadium, Manganese, Cobalt, Nickel, Zinc, Cadmium, Mercury, Lead, Tin, Antimony, Bismuth, Polonium, Astatine, Radon, Francium, Radium, Actinium, Thorium, Protactinium, Uranium, Neptunium, Plutonium, Americium, Curium, Berkelium, Californium, Einsteinium, Fermium, Mendelevium, Nobelium, Lawrencium, Rutherfordium, Dubnium, Seaborgium, Bohrium, Hassium, Meitnerium, Darmstadtium, Roentgenium, Copernicium, Nihonium, Flerovium, Moscovium, Livermorium, Tennessine, Oganesson } from 'lucide-react';

const AiVoiceAssistantPlatform: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and sentiment for human-like conversations.',
      benefits: ['Intent recognition', 'Context understanding', 'Sentiment analysis', 'Multi-language support']
    },
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'State-of-the-art speech-to-text technology with 99% accuracy and real-time processing.',
      benefits: ['99% accuracy', 'Real-time processing', 'Noise cancellation', 'Accent adaptation']
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Intelligent automation that handles complex workflows and integrates with your existing systems.',
      benefits: ['Workflow automation', 'System integration', 'Task scheduling', 'Smart responses']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard that tracks usage, performance, and user satisfaction metrics.',
      benefits: ['Usage analytics', 'Performance metrics', 'User satisfaction', 'Optimization insights']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, compliance management, and data protection.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'Data privacy', 'Secure hosting']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Deployment',
      description: 'Deploy your voice assistant across websites, mobile apps, smart devices, and IoT platforms.',
      benefits: ['Web integration', 'Mobile apps', 'Smart devices', 'IoT platforms']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice recognition',
        'Standard templates',
        'Email support',
        'Basic analytics',
        '5GB storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced NLP features',
        'Custom voice models',
        'Priority support',
        'Advanced analytics',
        '50GB storage',
        'API access',
        'Multi-platform deployment'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$1,199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited interactions',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Custom development',
        'Unlimited storage',
        'Advanced security',
        'Training & onboarding'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'SmartHome Solutions',
      content: 'The voice assistant has transformed our customer support. We handle 70% more inquiries with 90% customer satisfaction. The integration was seamless.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager',
      company: 'RetailTech Inc.',
      content: 'The natural language processing is incredible. Our customers can speak naturally and the assistant understands perfectly. Response time improved by 80%.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'David Rodriguez',
      role: 'Operations Director',
      company: 'Healthcare Plus',
      content: 'The multi-platform deployment helped us reach patients across all touchpoints. The voice assistant handles appointment scheduling and patient inquiries 24/7.',
      rating: 5,
      avatar: 'DR'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice assistant platform with natural language processing, voice recognition, and smart automation. Deploy across multiple platforms with 99% accuracy." />
        <meta name="keywords" content="AI voice assistant, voice recognition, natural language processing, conversational AI, voice automation, smart assistant" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
                  <Brain className="w-4 h-4 mr-2 animate-spin" />
                  AI Voice Assistant Platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
                  Build Intelligent
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    Voice Assistants
                  </span>
                </h1>
                <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg max-w-4xl mx-auto animate-fade-in delay-200">
                  Advanced AI voice assistant platform with 99% accuracy voice recognition, natural language processing, and smart automation. Deploy across multiple platforms and devices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-300">
                <a 
                  href="tel:+13024640950" 
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl hover:shadow-blue-500/25"
                  aria-label="Call us at +1 302 464 0950"
                >
                  <span className="flex items-center justify-center">
                    Call +1 302 464 0950
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-center hover:shadow-2xl hover:shadow-cyan-500/25"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  <span className="flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in delay-500">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
                  <div className="text-gray-300 text-sm font-medium">Voice Accuracy</div>
                  <div className="text-cyan-400 text-xs mt-1">AI Recognition</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">70%</div>
                  <div className="text-gray-300 text-sm font-medium">More Inquiries</div>
                  <div className="text-purple-400 text-xs mt-1">Handled Automatically</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">90%</div>
                  <div className="text-gray-300 text-sm font-medium">Customer Satisfaction</div>
                  <div className="text-green-400 text-xs mt-1">Voice Interactions</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">80%</div>
                  <div className="text-gray-300 text-sm font-medium">Faster Response</div>
                  <div className="text-orange-400 text-xs mt-1">Voice Automation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Advanced Voice AI Features
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Everything you need to create, deploy, and manage intelligent voice assistants.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
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

        {/* Pricing Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Voice AI Pricing Plans
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Choose the plan that fits your voice assistant needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/25 scale-105' 
                    : 'border-gray-600 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={plan.name === 'Enterprise' ? 'tel:+13024640950' : 'mailto:kleber@ziontechgroup.com'}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Customer Success Stories
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                See how businesses are transforming customer experience with our AI voice assistant platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-cyan-400 font-bold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Your Voice Assistant?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join businesses worldwide that have already transformed customer experience with our AI voice assistant platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                aria-label="Call us at +1 302 464 0950"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiVoiceAssistantPlatform;