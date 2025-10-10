'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  Settings, 
  Brain, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  MessageSquare,
  Phone,
  Headphones,
  Languages,
  Bot,
  Cpu,
  Play
} from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [voiceSettings, setVoiceSettings] = useState({
    speed: 1.0,
    pitch: 1.0,
    volume: 0.8
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP with 95% accuracy in understanding context and intent',
      capabilities: ['Context-aware responses', 'Multi-turn conversations', 'Intent recognition', 'Entity extraction']
    },
    {
      icon: Languages,
      title: 'Multi-language Support',
      description: 'Support for 50+ languages with real-time translation capabilities',
      capabilities: ['50+ languages', 'Real-time translation', 'Accent adaptation', 'Cultural context']
    },
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'State-of-the-art voice recognition with noise cancellation and speaker identification',
      capabilities: ['Noise cancellation', 'Speaker identification', 'Voice training', 'Accent recognition']
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Natural-sounding voice synthesis with multiple voice options and emotional tones',
      capabilities: ['Multiple voices', 'Emotional tones', 'Custom voice cloning', 'SSML support']
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Intelligent conversation management with memory and personality adaptation',
      capabilities: ['Conversation memory', 'Personality adaptation', 'Emotional intelligence', 'Context retention']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-low latency processing for natural conversation flow',
      capabilities: ['<100ms response time', 'Real-time streaming', 'Concurrent processing', 'Auto-scaling']
    }
  ];

  const useCases = [
    {
      category: 'Customer Service',
      icon: Headphones,
      applications: [
        '24/7 customer support',
        'Call center automation',
        'FAQ handling',
        'Order processing',
        'Complaint resolution'
      ],
      benefits: ['80% cost reduction', '24/7 availability', 'Consistent service', 'Multi-language support']
    },
    {
      category: 'Healthcare',
      icon: Shield,
      applications: [
        'Patient triage',
        'Appointment scheduling',
        'Medication reminders',
        'Symptom assessment',
        'Mental health support'
      ],
      benefits: ['HIPAA compliant', '24/7 availability', 'Reduced wait times', 'Improved patient experience']
    },
    {
      category: 'Education',
      icon: Users,
      applications: [
        'Language learning',
        'Tutoring assistance',
        'Accessibility support',
        'Interactive lessons',
        'Student assessment'
      ],
      benefits: ['Personalized learning', 'Accessibility', 'Scalable education', 'Real-time feedback']
    },
    {
      category: 'Business',
      icon: MessageSquare,
      applications: [
        'Meeting transcription',
        'Voice commands',
        'Data entry',
        'Report generation',
        'Task automation'
      ],
      benefits: ['Increased productivity', 'Hands-free operation', 'Automation', 'Time savings']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 voice interactions/month',
        '5 languages supported',
        'Basic voice recognition',
        'Email support',
        'Standard voice synthesis',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Up to 10,000 voice interactions/month',
        '25 languages supported',
        'Advanced voice recognition',
        'Priority support',
        'Custom voice synthesis',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited voice interactions',
        '50+ languages supported',
        'Premium voice recognition',
        '24/7 dedicated support',
        'Custom voice cloning',
        'Real-time analytics',
        'Full API access',
        'White-label solution',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Voice Recognition Accuracy', icon: Mic },
    { number: '50+', label: 'Languages Supported', icon: Languages },
    { number: '<100ms', label: 'Response Time', icon: Zap },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Voice Assistant Pro
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Advanced AI-powered voice assistant with natural language processing, multi-language support, 
              and real-time conversation capabilities. Transform your business with intelligent voice interactions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Mic className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">95% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Languages className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">50+ Languages</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium"><100ms Response</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Try Our Voice Assistant
            </h2>
            <div className="futuristic-card-enhanced p-8 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 animate-pulse' 
                      : 'bg-cyan-500 hover:bg-cyan-600'
                  }`}
                  onClick={() => setIsListening(!isListening)}
                >
                  {isListening ? <MicOff className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8 text-white" />}
                </button>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">
                    {isListening ? 'Listening...' : 'Click to Start'}
                  </div>
                  <div className="text-gray-400">
                    {isListening ? 'Speak now' : 'Voice Assistant Demo'}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <label className="text-white font-medium">Language:</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-gray-600"
                  >
                    <option value="en-US">English (US)</option>
                    <option value="es-ES">Spanish (Spain)</option>
                    <option value="fr-FR">French (France)</option>
                    <option value="de-DE">German (Germany)</option>
                    <option value="ja-JP">Japanese (Japan)</option>
                    <option value="zh-CN">Chinese (China)</option>
                  </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <label className="text-white text-sm">Speed</label>
                    <input
                      type="range"
                      min="0.5"
                      max="2.0"
                      step="0.1"
                      value={voiceSettings.speed}
                      onChange={(e) => setVoiceSettings({...voiceSettings, speed: parseFloat(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-cyan-400 text-sm">{voiceSettings.speed}x</div>
                  </div>
                  <div className="text-center">
                    <label className="text-white text-sm">Pitch</label>
                    <input
                      type="range"
                      min="0.5"
                      max="2.0"
                      step="0.1"
                      value={voiceSettings.pitch}
                      onChange={(e) => setVoiceSettings({...voiceSettings, pitch: parseFloat(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-cyan-400 text-sm">{voiceSettings.pitch}x</div>
                  </div>
                  <div className="text-center">
                    <label className="text-white text-sm">Volume</label>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.1"
                      value={voiceSettings.volume}
                      onChange={(e) => setVoiceSettings({...voiceSettings, volume: parseFloat(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-cyan-400 text-sm">{Math.round(voiceSettings.volume * 100)}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Voice AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge voice AI technology that understands, learns, and adapts to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your industry with intelligent voice AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.category}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {useCase.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-sm text-gray-300">• {app}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs and scale as you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card-enhanced hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
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
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'neon-button-enhanced'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Voice AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 3,200+ businesses already using our AI Voice Assistant. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceAssistantPage;
