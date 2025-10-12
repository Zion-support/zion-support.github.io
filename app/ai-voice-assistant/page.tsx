'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Mail, Video, FileText, Smartphone, Cpu, Database, BarChart3, Settings, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const AiVoiceAssistantPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'Advanced speech-to-text with 99% accuracy',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Volume2,
      title: 'Natural Speech',
      description: 'Human-like voice synthesis and responses',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Brain,
      title: 'AI Understanding',
      description: 'Context-aware conversations and learning',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform',
      description: 'Works across all devices and platforms',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Up to 1,000 voice interactions/month',
        'Basic voice commands',
        'Mobile app integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: [
        'Up to 10,000 voice interactions/month',
        'Advanced AI capabilities',
        'Multi-platform deployment',
        'Priority support',
        'Advanced analytics',
        'Custom voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      features: [
        'Unlimited voice interactions',
        'Custom AI training',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Our AI voice assistant handles customer calls 24/7 with natural conversations. Customer satisfaction increased by 60%!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'SaaS Solutions',
      content: 'The voice recognition is incredibly accurate. It understands complex queries and responds naturally.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency',
      content: 'Easy to integrate and customize. Our clients love the natural voice interactions.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Simulate voice processing
    if (!isListening) {
      setTimeout(() => {
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 2000);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Build intelligent voice assistants with natural speech recognition and AI-powered conversations. Deploy across all platforms." />
        <meta name="keywords" content="AI voice assistant, voice recognition, speech synthesis, conversational AI, voice automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-6">
              <Mic className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Voice Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build intelligent voice assistants that understand and respond naturally to your customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group">
                Start Building
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>
            
            {/* Voice Demo */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Try Voice Assistant</h3>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={handleVoiceToggle}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                      : 'bg-cyan-500 hover:bg-cyan-600'
                  }`}
                >
                  {isListening ? <MicOff className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8 text-white" />}
                </button>
                <div className="text-center">
                  <div className="text-white font-semibold">
                    {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Click to start'}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {isListening ? 'Speak now' : isSpeaking ? 'AI is responding' : 'Voice interaction'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-400 text-sm">Voice Accuracy</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Always Available</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2">5min</div>
                <div className="text-gray-400 text-sm">Setup Time</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-400 text-sm">Satisfaction Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build and deploy intelligent voice assistants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI Voice Assistant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your AI Voice Assistant?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start building your intelligent voice assistant today and transform your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Building
                </button>
                <Link 
                  to="/contact"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiVoiceAssistantPage;
