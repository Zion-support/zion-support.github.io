'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Clock, Award, TrendingUp, Mic, 
  Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, 
  Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, 
  Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, 
  Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, 
  Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, 
  Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, 
  Wink, Kiss, Tongue, Package, DollarSign, Brain, Zap, Shield, 
  BarChart, MessageCircle, Eye, FileText, Users, Target, Settings, 
  Calendar, CheckSquare, Workflow, Cpu, Database, Globe, Smartphone, 
  Lock, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, 
  PieChart, LineChart, Activity, Search, Filter, Download, Upload, 
  Share, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Headphones, 
  Speaker, VolumeX as VolumeOff, Play as PlayIcon, Pause as PauseIcon
} from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Mic className="w-8 h-8 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding context and intent in conversations'
    },
    {
      icon: <Volume2 className="w-8 h-8 text-purple-400" />,
      title: 'Voice Synthesis',
      description: 'High-quality text-to-speech with multiple voice options and languages'
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: 'AI Learning',
      description: 'Machine learning algorithms that improve responses over time'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with end-to-end encryption'
    }
  ];

  const capabilities = [
    'Voice commands and control',
    'Multi-language support',
    'Custom voice training',
    'Integration with existing systems',
    'Real-time transcription',
    'Sentiment analysis',
    'Conversation memory',
    'API integration'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99/month',
      features: ['Basic voice commands', '5 voice profiles', 'Standard support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      features: ['Advanced NLP', 'Unlimited voice profiles', 'Priority support', 'Custom integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Full customization', 'Dedicated support', 'On-premise deployment', 'SLA guarantee'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group | Intelligent Voice Solutions</title>
        <meta name="description" content="Advanced AI voice assistant with natural language processing, voice synthesis, and intelligent conversation capabilities for businesses." />
        <meta name="keywords" content="AI voice assistant, voice AI, natural language processing, voice synthesis, conversational AI" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              AI Voice <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Assistant</span>
            </h1>
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform your business with intelligent voice assistants that understand, learn, and respond 
              naturally to provide exceptional customer experiences.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Voice AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI voice assistant combines cutting-edge technology with natural conversation flow 
              to deliver exceptional user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Voice AI Features
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI voice assistant is equipped with state-of-the-art capabilities that make 
                interactions feel natural and intelligent.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Mic className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Try Voice Commands</h3>
                <p className="text-gray-300 mb-6">
                  Experience the power of our AI voice assistant with interactive demos.
                </p>
                <button
                  onClick={() => setIsListening(!isListening)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                  }`}
                >
                  {isListening ? 'Stop Listening' : 'Start Listening'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs and scale with your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-gray-800 rounded-xl p-8 relative ${plan.popular ? 'border-2 border-cyan-500' : 'border border-gray-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  {plan.price === 'Custom' && (
                    <p className="text-gray-400">Contact us for pricing</p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI voice assistant revolutionize how you interact with customers. 
              Get started with a free consultation and custom implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceAssistantPage;