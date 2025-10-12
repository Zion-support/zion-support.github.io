'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Zap,
  Brain,
  Cloud,
  Shield,
  Code,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  BarChart,
  Cpu,
  Wifi,
  Eye,
  MessageCircle,
  Workflow,
  FileText,
  Calendar,
  Download,
  ExternalLink,
  CreditCard,
  Clock,
  Headphones
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
      icon: Mic,
      title: 'Natural Speech Recognition',
      description: 'Advanced AI-powered speech recognition with 99% accuracy in multiple languages',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Intelligent Understanding',
      description: 'Context-aware natural language processing that understands intent and nuance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Volume2,
      title: 'High-Quality Voice Synthesis',
      description: 'Realistic voice generation with customizable voices and emotional tones',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: 'Customizable Responses',
      description: 'Train the assistant with your specific business knowledge and preferences',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 intelligent voice support with natural conversation flow',
      icon: Headphones,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Home Control',
      description: 'Voice control for IoT devices and home automation systems',
      icon: Home,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Business Automation',
      description: 'Voice-activated business processes and workflow automation',
      icon: Workflow,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Accessibility',
      description: 'Voice interfaces for users with visual or motor impairments',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice assistant with natural speech recognition, intelligent understanding, and high-quality voice synthesis. Perfect for customer support, smart home, and business automation." />
        <meta name="keywords" content="ai voice assistant, speech recognition, voice synthesis, conversational ai, voice automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>

      {/* Advanced Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="cyber-matrix-bg"></div>
        <div className="quantum-field-bg"></div>
        <div className="holographic-grid"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">AI Voice</span>
              <br />
              <span className="holographic-text">Assistant</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of voice interaction with our advanced AI voice assistant. 
              Natural speech recognition, intelligent understanding, and high-quality voice synthesis.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="glass-card p-8 rounded-xl mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 holographic-text">
              Try Our Voice Assistant
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <button
                  className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110'
                  }`}
                  onClick={() => setIsListening(!isListening)}
                >
                  {isListening ? (
                    <MicOff className="w-16 h-16 text-white" />
                  ) : (
                    <Mic className="w-16 h-16 text-white" />
                  )}
                </button>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-2">
                  {isListening ? 'Listening...' : 'Click to start speaking'}
                </p>
                <p className="text-sm text-gray-400">
                  {isListening ? 'Speak naturally and the AI will understand' : 'Powered by advanced speech recognition'}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${feature.color} w-fit mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 holographic-text">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="glass-card p-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.color} w-fit mb-4`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 holographic-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$99/month',
                  features: [
                    'Basic voice recognition',
                    '5 voice commands',
                    'Standard voice synthesis',
                    'Email support'
                  ],
                  color: 'from-gray-500 to-gray-600'
                },
                {
                  name: 'Professional',
                  price: '$299/month',
                  features: [
                    'Advanced voice recognition',
                    'Unlimited voice commands',
                    'Custom voice synthesis',
                    'Priority support',
                    'API access'
                  ],
                  color: 'from-cyan-500 to-blue-500',
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  features: [
                    'Premium voice recognition',
                    'Custom training',
                    'White-label solution',
                    '24/7 dedicated support',
                    'On-premise deployment'
                  ],
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((plan, index) => (
                <div key={index} className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    {plan.price !== 'Custom' && <div className="text-gray-400">per month</div>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'cyber-button' 
                      : 'glass-card hover:bg-white/10'
                  }`}>
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 holographic-text">
                Ready to Transform Your Voice Experience?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Join thousands of businesses already using our AI voice assistant to enhance 
                customer experience and automate voice interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
                <button className="glass-card px-8 py-4 text-lg hover:bg-white/10 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceAssistantPage;