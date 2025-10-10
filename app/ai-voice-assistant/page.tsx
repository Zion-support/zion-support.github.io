'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Settings, 
  Globe, 
  Brain, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Clock, 
  Shield, 
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP with 95% accuracy in understanding context and intent',
      benefits: ['Multi-language support', 'Context awareness', 'Intent recognition', 'Sentiment analysis']
    },
    {
      icon: Globe,
      title: '50+ Language Support',
      description: 'Real-time translation and voice processing in 50+ languages',
      benefits: ['Real-time translation', 'Accent adaptation', 'Cultural context', 'Regional dialects']
    },
    {
      icon: Mic,
      title: 'Custom Voice Training',
      description: 'Train the AI with your voice patterns and preferences',
      benefits: ['Voice cloning', 'Personalization', 'Brand voice', 'Accent training']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-low latency voice processing for instant responses',
      benefits: ['<100ms response time', 'Streaming audio', 'Live transcription', 'Instant commands']
    },
    {
      icon: Settings,
      title: 'API Integration',
      description: 'Seamless integration with your existing systems and workflows',
      benefits: ['REST APIs', 'WebSocket support', 'SDK libraries', 'Webhook integration']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Data privacy']
    }
  ];

  const useCases = [
    {
      category: 'Customer Service',
      icon: MessageSquare,
      description: '24/7 AI voice support with natural conversations',
      examples: ['Call center automation', 'Voice chatbots', 'Order processing', 'Technical support'],
      roi: '60% cost reduction'
    },
    {
      category: 'Healthcare',
      icon: Brain,
      description: 'Medical voice assistants for patient care',
      examples: ['Patient intake', 'Medical transcription', 'Appointment scheduling', 'Health monitoring'],
      roi: '40% efficiency gain'
    },
    {
      category: 'Education',
      icon: Users,
      description: 'Interactive learning with voice-enabled AI tutors',
      examples: ['Language learning', 'Accessibility support', 'Voice quizzes', 'Study assistance'],
      roi: '50% engagement increase'
    },
    {
      category: 'Business',
      icon: Settings,
      description: 'Voice-powered business automation and productivity',
      examples: ['Meeting transcription', 'Voice commands', 'Data entry', 'Workflow automation'],
      roi: '35% productivity boost'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 voice interactions/month',
        '5 languages supported',
        'Basic voice training',
        'Email support',
        'API access',
        '99.5% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 10,000 voice interactions/month',
        '25 languages supported',
        'Advanced voice training',
        'Priority support',
        'Custom integrations',
        '99.9% uptime SLA',
        'Analytics dashboard',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited voice interactions',
        '50+ languages supported',
        'Custom voice models',
        '24/7 dedicated support',
        'White-label solutions',
        '99.99% uptime SLA',
        'Advanced analytics',
        'Custom deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Voice Recognition Accuracy' },
    { number: '50+', label: 'Languages Supported' },
    { number: '<100ms', label: 'Response Time' },
    { number: '99.9%', label: 'Uptime SLA' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 matrix-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Voice Assistant Pro
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Advanced voice AI assistant with natural language processing, multi-language support, 
              and custom voice training. Transform your business with intelligent voice automation.
            </p>
            
            {/* Interactive Demo */}
            <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  onClick={() => setIsListening(!isListening)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                      : 'bg-cyan-500 hover:bg-cyan-600'
                  }`}
                >
                  {isListening ? <MicOff className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8 text-white" />}
                </button>
                <button
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSpeaking 
                      ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
                      : 'bg-purple-500 hover:bg-purple-600'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-8 h-8 text-white" /> : <Volume2 className="w-8 h-8 text-white" />}
                </button>
              </div>
              <p className="text-gray-300 text-sm">
                {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Click to interact with the AI voice assistant'}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">95% Accuracy</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">50+ Languages</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">Real-time Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Voice AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced voice processing capabilities that understand context, emotion, and intent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your business across multiple industries with intelligent voice automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card hover-lift p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.category}</h3>
                    <div className="text-cyan-400 font-semibold">{useCase.roi}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core voice AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
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
            Join 3,200+ businesses already using our AI Voice Assistant Pro. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
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