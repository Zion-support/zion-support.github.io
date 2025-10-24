<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function AIVoiceAssistant() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Ai Voice Assistant solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Voice Assistant</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai voice assistant solutions designed to meet your business needs.
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
            </div>
          </div>
        </div>
      </div>
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Mic, Volume2, Headphones, Phone } from 'lucide-react'
=======
'use client';
import React, { useState, useEffect } from 'react';
import {
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Settings, 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw,
  Languages,
  Headphones,
  MessageSquare,
  Phone,
  Video,
  FileText,
  Calendar,
  Mail,
  Search,
  Command,
  Sparkles,
  Bot,
  Cpu,
  Wifi,
  Battery,
  Signal;
} from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en-US');
  const [voiceMode, setVoiceMode] = useState('conversational');

  useEffect(() => {
    setIsLoaded(true);
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

const AiVoiceAssistantPage: React.FC = () => {
  const serviceType = 'ai'
  
  const features = [
    {
<<<<<<< HEAD
      icon: Mic,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech recognition with high accuracy and multi-language support.',
      benefits: ['Multi-language support', 'Noise cancellation', 'Real-time processing', 'Custom wake words']
    },
    {
      icon: Volume2,
      title: 'Intelligent Responses',
      description: 'AI-powered responses that understand context and provide helpful answers.',
      benefits: ['Context awareness', 'Natural conversations', 'Learning capabilities', 'Personalized responses']
    },
    {
      icon: Headphones,
      title: 'Voice Synthesis',
      description: 'High-quality voice synthesis with natural-sounding speech.',
      benefits: ['Multiple voices', 'Emotion control', 'Speed adjustment', 'Custom voice training']
    },
    {
      icon: Phone,
      title: 'Multi-Platform Support',
      description: 'Works across all your devices and platforms seamlessly.',
      benefits: ['Mobile apps', 'Web integration', 'Smart speakers', 'API access']
    },
=======
      icon: Brain;
      title: 'Natural Language Processing',
      description: 'Advanced NLP with 99.5% accuracy in understanding context and intent',
      stats: '99.5% accuracy'},
    {
      icon: Languages;
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages with real-time translation capabilities',
      stats: '50+ languages'},
    {
      icon: Headphones;
      title: 'Custom Voice Training',
      description: 'Train the AI with your voice patterns and speaking style',
      stats: 'Custom voices'},
    {
      icon: Zap;
      title: 'Real-Time Processing',
      description: 'Ultra-low latency voice processing for natural conversations',
      stats: '<100ms latency'},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    {
      icon: Shield,
      title: 'Privacy & Security',
<<<<<<< HEAD
      description: 'Enterprise-grade security with complete data privacy protection.',
      benefits: ['End-to-end encryption', 'Data privacy', 'Secure storage', 'Compliance ready']
    },
    {
      icon: Users,
      title: 'Team Integration',
      description: 'Seamlessly integrate with your existing team workflows.',
      benefits: ['Team management', 'Role-based access', 'Collaboration tools', 'Workflow automation']
    }
  ]
=======
      description: 'End-to-end encryption with local processing options',
      stats: 'Bank-level security'},
    {
      icon: Globe;
      title: 'Cloud & Edge Computing',
      description: 'Hybrid processing for optimal performance and privacy',
      stats: 'Hybrid processing'}
  ];

  const capabilities = [
    {
      category: 'Productivity',
      items: [
        'Schedule meetings and appointments',
        'Send emails and messages',
        'Create and edit documents',
        'Set reminders and alarms',
        'Manage calendar events',
        'Take voice notes'
      ]
    },
    {
      category: 'Communication',
      items: [
        'Make phone calls',
        'Send text messages',
        'Video conference calls',
        'Voice-to-text transcription',
        'Real-time translation',
        'Voice mail management'
      ]
    },
    {
      category: 'Information',
      items: [
        'Answer questions',
        'Provide weather updates',
        'News and updates',
        'Web search results',
        'Calculate and convert',
        'Look up contacts'
      ]
    },
    {
      category: 'Entertainment',
      items: [
        'Play music and podcasts',
        'Tell jokes and stories',
        'Play games',
        'Read audiobooks',
        'Control smart devices',
        'Stream content'
      ]
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
<<<<<<< HEAD
      description: 'Perfect for small businesses getting started with AI voice assistants',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice recognition',
        'Standard responses',
=======
      description: 'Perfect for individuals and personal use',
      features: [
        '1 voice profile',
        '5 languages',
        'Basic commands',
        'Cloud processing',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        'Email support',
        'Basic analytics'
      ],
<<<<<<< HEAD
      popular: false
    },
=======
      popular: false;
      cta: 'Start Free Trial'},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
<<<<<<< HEAD
      description: 'Ideal for growing businesses with advanced voice AI needs',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced voice recognition',
        'Custom responses',
        'Priority support',
=======
      description: 'Ideal for professionals and small teams',
      features: [
        '3 voice profiles',
        '15 languages',
        'Advanced commands',
        'Custom voice training',
        'Priority support',
        'API access',
        'Team collaboration'
      ],
      popular: true;
      cta: 'Start Free Trial'},
    {
      name: 'Enterprise'
      price: '$199',
      period: '/month',
      description: 'For large organizations and businesses',
      features: [
        'Unlimited voice profiles',
        'All 50+ languages',
        'Custom integrations',
        'On-premise deployment',
        '24/7 support',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        'Advanced analytics',
        'API access'
      ],
<<<<<<< HEAD
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete AI voice solution for large organizations',
      features: [
        'Unlimited interactions',
        'Custom voice models',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { label: 'Voice Interactions', value: '1M+', icon: Mic },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Response Time', value: '<200ms', icon: Zap },
    { label: 'Accuracy Rate', value: '98%', icon: Target }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Voice Assistant | Zion Tech Group</title>
        <meta name="description" content="Professional AI voice assistant solutions for modern businesses. Natural language processing and voice recognition." />
        <meta name="keywords" content="AI voice assistant, voice recognition, speech synthesis, natural language processing, voice AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Voice Assistant
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Voice Assistant
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our intelligent AI voice assistant. 
              Provide exceptional customer service and automate tasks with natural voice interactions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
<<<<<<< HEAD
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Try Demo
              </Link>
            </div>
=======
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Voice AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI voice assistant comes equipped with cutting-edge features designed to 
                provide natural, intelligent, and efficient voice interactions.
              </p>
<<<<<<< HEAD
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
=======
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
=======
      popular: false;
      cta: 'Contact Sales'}
  ];

  const testimonials = [
    {
      name: 'Sarah Chen'
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'The AI Voice Assistant has revolutionized how I manage my daily tasks. The natural conversation flow is incredible.',
      rating: 5;
      avatar: 'SC'},
    {
      name: 'Michael Rodriguez'
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'We use it for our international team meetings. The real-time translation feature is a game-changer.',
      rating: 5;
      avatar: 'MR'},
    {
      name: 'Emily Johnson'
      role: 'Executive Assistant',
      company: 'Global Inc',
      content: 'Scheduling and managing my executive\'s calendar has never been easier. The AI understands context perfectly.',
      rating: 5;
      avatar: 'EJ'}
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">)
      {/* Animated Background */})
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10"></div>
        {/* Header */}
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-cyan-400/30"></div>
              <Bot className="w-5 h-5 text-cyan-400" />
      </div><div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div><div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div><div className="relative z-10">{/* Header */}</div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-cyan-400/30"></div>
              <Bot className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">AI Voice Assistant Pro</span><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Voice Assistant Pro</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">Advanced AI-powered voice assistant with natural language processing, 
              multi-language support, and custom voice training. Transform how you </p>
              interact with technology through intelligent voice commands.</p>
              <span className="text-cyan-400 font-medium">AI Voice Assistant Pro</span>
            </div>
            
            <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"></h1>
              AI Voice Assistant Pro;
            </h1>
            ,
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">,
              Advanced AI-powered voice assistant with natural language processing;
              multi-language support, and custom voice training. Transform how you;
              interact with technology through intelligent voice commands.
            </p>

            {/* Interactive Demo */}
            <div className="max-w-2xl mx-auto mb-12"></div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"></div>
                <div className="flex items-center justify-center space-x-4 mb-6"></div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening ? 'bg-red-500 animate-pulse' : 'bg-cyan-500'
                  }`}></div>
                    {isListening ?</div> <MicOff className="w-8 h-8 text-white" >: <Mic className="w-8 h-8 text-white" >}</Mic>
                  </Mic>
                  <div className="text-center"></div>
                    <h3 className="text-lg font-semibold mb-2">Try Voice Commands</h3><p className="text-gray-400 text-sm">Click the microphone to start</p>
                  </div>
                </div>
                
                <div className="space-y-3"></div>
                  <button 
                    onClick={() =>setIsListening(!isListening)}</button></<<<butto>className</butto></butto>="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  ></button>
                    {isListening ? 'Stop Listening' : 'Start Listening'}</button>
                  <button;
                    onClick={() => setIsListening(!isListening)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105",
                  >,
                    {isListening ? 'Stop Listening' : 'Start Listening'}
                  </button>
                  
                  <div className="flex space-x-2"></div>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"></button>
                      <Play className="w-4 h-4 mx-auto" />
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"></butto>
                      <Pause className="w-4 h-4 mx-auto" /></Paus>
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"></butto>
                      <RotateCcw className="w-4 h-4 mx-auto" /></RotateCc>
                    </button>
                  </div>,
                </div>,
              </div>,
            </div>,
,
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">Start Free Trial</button>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"></butto>
                <Play className="w-5 h-5 mr-2" >Watch Demo</Pla>
              </Play>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" />
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"></button>
                Start Free Trial;
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"></button>
                <Play className="w-5 h-5 mr-2" />
                Watch Demo;
              </button>
            </div>,
          </div>,
,
          {/* Features Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-20">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover: border-cyan-400/40 transition-all duration-300 group">,
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">,
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-3">{feature.description}</p><div className="text-cyan-400 font-semibold text-sm">{feature.stats}</div>
              </div>
            ))}
          </div>

          {/* Capabilities */}
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></h2>
              Powerful Capabilities;
            </h2>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {capabilities.map((category, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"></div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.category}<ul className="space-y-2">{category.items.map((item, itemIndex) => (</ul>
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Powerful Capabilities</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{capabilities.map((category, index) => (</div>
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"></div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.category}</h3><ul className="space-y-2">{category.items.map((item, itemIndex) => (</ul>
                      <li key={itemIndex} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your voice AI needs. 
                All plans include our core features with no setup fees.
              </p>
<<<<<<< HEAD
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700 hover:border-cyan-400/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
=======
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
          {/* Pricing */}
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-600'
                }`}>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></h2>
              Simple, Transparent Pricing;
            </h2>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover: scale-105 ${}
                  plan.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-600'}
                }`}></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
                        Most Popular;
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white' }
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'}
                  }`}></button>
                    {plan.cta}
                  </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
<<<<<<< HEAD
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Voice AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI voice assistant to 
              enhance customer experience and automate voice interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Voice AI Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
=======
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
<<<<<<< HEAD
    </>
  )
}
=======
    </React.Fragment>
  );
=======
          {/* Testimonials */}
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></h2>
              What Our Users Say;
            </h2>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"></div>
                  <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center"></div>
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">What Our Users Say</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"></div>
                  <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">{testimonial.avatar}</div>
                    </div>
                    <div></div>
                      <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30"></div>
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Voice Experience?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of users who have revolutionized their productivity with AI Voice Assistant Pro.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">Start Your Free Trial</button>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"></butto>
                <Phone className="w-5 h-5 mr-2" >Contact Sales</Phon>
              </Phone>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"></button>
                Start Your Free Trial;
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"></button>
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales;
              </button>
            </div>
          </div>
        </div>
      </div>,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

export default AiVoiceAssistantPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {Mic, Brain, CheckCircle, ArrowRight, Zap, Settings, Globe, Clock, Link as LinkIcon, Workflow} from 'lucide-react';

export default function AIVoiceAssistant() {const features = [{
      icon: <Brain className="w-5h-5ml-2"   />,
      title: 'Natural Language Understanding',
      description: 'Advanced AI processes complex voice commands and maintains context across conversations'},
    {icon: <Volume2 className="w-5h-5ml-2"   />,
      title: 'Human-like Voice Synthesis',
      description: 'Generate natural, expressive speech with customizable voices and emotional tones'},
    {icon: <Clock className="w-5h-5ml-2"   />,
      title: '24/7 Availability',
      description: 'Always-on voice assistant that can handle tasks, answer questions, and provide support'},
    {icon: <Target className="w-5h-5ml-2"   />,
      title: 'Multi-platform Integration',
      description: 'Seamlessly integrate with mobile apps, websites, smart devices, and IoT systems'}]

  const assistantFeatures = [{category: 'Voice Capabilities',
      items: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Emotion Detection', 'Multi-language Support', 'Noise Cancellation']},
    {category: 'Task Management',
      items: ['Calendar Management', 'Email Handling', 'Reminder Setting', 'Task Creation', 'Meeting Scheduling', 'Note Taking']},
    {category: 'Integration',
      items: ['Mobile Apps', 'Web Applications', 'Smart Home Devices', 'CRM Systems', 'ERP Integration', 'API Access']},
    {category: 'Customization',
      items: ['Custom Voice Training', 'Personality Settings', 'Command Customization', 'Brand Voice', 'Response Templates', 'Workflow Automation']}
  ]

  const pricingPlans = [{name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice features',
        'Standard voices',
        'Email support',
        'Mobile app access',
        'Basic integrations'],
      popular: false;},
    {name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 10,000 interactions/month',
        'Advanced voice features',
        'Custom voice training',
        'Priority support',
        'Advanced integrations',
        'Analytics dashboard',
        'API access'],
      popular: true;},
    {name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited interactions',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'],
      popular: false;}
  ]

  const testimonials = [{name: 'David Park',
      company: 'Smart Home Solutions',
      content: 'AI Voice Assistant transformed our customer experience. The natural conversation flow is incredible.',
      rating: 5;},
    {name: 'Sarah Johnson',
      company: 'Healthcare Provider',
      content: 'Our patients love the voice assistant for appointment scheduling. It handles complex requests perfectly.',
      rating: 5;},
    {name: 'Mike Chen',
      company: 'E-commerce Platform',
      content: 'Voice shopping has increased our sales by 40%. The voice recognition accuracy is outstanding.',
      rating: 5;}]

  return (
    <Layout;</Layout></Layout>
      title="AI Voice Assistant - Intelligent Voice Solutions | Zion Tech Group"
      description="Transform user interaction with AI-powered voice assistants. Natural language processing, human-like voice synthesis, and seamless integration. Start your free trial today."
      keywords="AI voice assistant, voice AI, speech recognition, voice synthesis, conversational AI, voice automation" /></Layout>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h1 className="w-5h-5ml-2"   /></h1>
                AI <span className="w-5h-5ml-2"   />Voice Assistant</span>
              </h1>
              <p className="w-5h-5ml-2">Create intelligent voice assistants that understand natural speech, execute commands,
                and provide hands-free automation for your business and personal needs.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building;
                </Link>
                <Link to="/ai-services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">View All AI Services;
                </Link>
              </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2"   /></h2>
                Powerful <span className="w-5h-5ml-2"   />Features</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to build, deploy, and manage intelligent voice assistants;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="text-centergroup"   /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <feature.icon className="w-10h-10text-cyan-400"    /></feature>
                  </div>
                  <h3 className="w-5h-5ml-2"   />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
  ))}
            </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2"   /></h2>
                Use <span className="w-5h-5ml-2"   />Cases</span>
              </h2>
              <p className="w-5h-5ml-2">Discover how our AI voice assistants can transform your business operations;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover: border-cyan-400/40 transition-all duration-300 group hover: transformhove,
  r:scale-105"   /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <useCase.icon className="w-6 h-6tex t-cyan-400"    /></useCase>
                  </div>
                  <h3 className="w-5h-5ml-2"   />{useCase.title}
                  </h3>
                  <p className="w-5h-5ml-2">{useCase.description}
                  </p>
                </div>
  ))}
            </div>
        </section>
        {/* Pricing Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2"   /></h2>
                Simple <span className="w-5h-5ml-2"   />Pricing</span>
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your voice assistant needs;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h3 className="w-5h-5ml-2"   />Starter</h3>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">$99<span className="w-5h-5ml-2"   />/month</span></div>
                <ul className="w-5h-5ml-2"   /></ul>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Up to 1,000 voice commands/month;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Basic speech recognition;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Email support;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Standard integrations;
                  </li>
                </ul>
                <Link to="/contact" className="w-fullbg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover: from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started;
                </Link>
              </div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <span className="w-5h-5ml-2"   />Most Popular;
                  </span>
                </div>
                <h3 className="w-5h-5ml-2"   />Professional</h3>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">$199<span className="w-5h-5ml-2"   />/month</span></div>
                <ul className="w-5h-5ml-2"   /></ul>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Up to 10,000 voice commands/month;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Advanced speech recognition;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Priority support;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Custom wake words;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Analytics dashboard;
                  </li>
                </ul>
                <Link to="/contact" className="w-fullbg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started;
                </Link>
              </div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h3 className="w-5h-5ml-2"   />Enterprise</h3>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Custom</div>
                <ul className="w-5h-5ml-2"   /></ul>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Unlimited voice commands;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Custom AI training;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    24/7 dedicated support;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    White-label solution;
                  </li>
                  <li className="w-5h-5ml-2"   /></li>
                    <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                    Custom development;
                  </li>
                </ul>
                <Link to="/contact" className="w-fullborder border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300block">Contact Sales;
                </Link>
              </div>
          </div>
        </section>
        {/* CTA Section */}

              <h2 className="text-4 xl font-bold text-whitemb-6">Ready to Build Your AI Voice Assistant?
                Start creating intelligent voice assistants that understand and respond to natural speech.

                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building Now
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">Learn More About Us

  );
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AivoiceassistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai voice assistant services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Voice Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai voice assistant services coming soon.</p>
          
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
