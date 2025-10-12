import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Zap, Brain, Mic, CheckCircle, Star, Clock, Users, 
  BarChart3, Sparkles, Target, Award, Lightbulb, Globe, Shield, 
  MessageCircle, Mail, Phone, MapPin, Play, Pause, Download, Upload,
  Edit, Copy, Share, Bookmark, Heart, ThumbsUp, RefreshCw, Settings,
  Palette, Type, Image, Video, Music, Code, Database, Cloud, Lock,
  Volume2, Headphones, Radio, Speaker, MicIcon, Sound
} from 'lucide-react'

export default function AIVoiceAssistantPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro')

  const features = [
    {
      icon: <Mic className="w-6 h-6 text-cyan-400" />,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech-to-text with 99.5% accuracy in 50+ languages, supporting accents and dialects.',
      benefits: ['Real-time transcription', 'Noise cancellation', 'Speaker identification', 'Context understanding']
    },
    {
      icon: <Volume2 className="w-6 h-6 text-emerald-400" />,
      title: 'Human-Like Voice Synthesis',
      description: 'Generate natural-sounding speech with customizable voices, emotions, and speaking styles.',
      benefits: ['Multiple voice options', 'Emotion control', 'Speed adjustment', 'Pronunciation control']
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'Conversational AI',
      description: 'Intelligent dialogue management with context awareness and multi-turn conversations.',
      benefits: ['Context retention', 'Intent recognition', 'Response generation', 'Conversation flow']
    },
    {
      icon: <Headphones className="w-6 h-6 text-pink-400" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across phone systems, mobile apps, smart speakers, and web platforms.',
      benefits: ['Phone integration', 'Mobile SDK', 'Smart speaker support', 'Web integration']
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-400" />,
      title: 'Custom Voice Training',
      description: 'Train custom voices using your brand personality and specific requirements.',
      benefits: ['Brand voice creation', 'Custom pronunciation', 'Tone adaptation', 'Style consistency']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection built-in.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'Data privacy', 'Audit trails']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 voice interactions/month',
        'Basic voice recognition',
        '5 voice options',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 voice assistant'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 voice interactions/month',
        'Advanced voice recognition',
        '20+ voice options',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Up to 5 voice assistants',
        'Custom voice training',
        'API access',
        'Multi-language support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$899',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited voice interactions',
        'Premium voice recognition',
        'Unlimited voice options',
        '24/7 dedicated support',
        'Custom integrations',
        'Enterprise analytics',
        'Unlimited voice assistants',
        'Advanced voice training',
        'Full API access',
        'White-label solution',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'Customer Experience Director',
      company: 'RetailMax Corp.',
      content: 'Our AI voice assistant has reduced call center costs by 60% while improving customer satisfaction scores.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Sarah Kim',
      role: 'Product Manager',
      company: 'TechFlow Solutions',
      content: 'The natural voice synthesis is incredible. Customers can\'t tell they\'re talking to an AI assistant.',
      rating: 5,
      avatar: 'SK'
    },
    {
      name: 'Michael Thompson',
      role: 'Operations Director',
      company: 'Global Services Inc.',
      content: 'Multi-language support has been a game-changer for our international customer base.',
      rating: 5,
      avatar: 'MT'
    }
  ]

  const useCases = [
    {
      title: 'Customer Service',
      description: '24/7 automated customer support with natural voice interactions and intelligent routing.',
      icon: <Headphones className="w-8 h-8 text-cyan-400" />,
      examples: ['Order inquiries', 'Technical support', 'Account management', 'Complaint handling']
    },
    {
      title: 'Sales & Lead Generation',
      description: 'Automated outbound calling with personalized conversations and lead qualification.',
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      examples: ['Lead qualification', 'Appointment scheduling', 'Product demos', 'Follow-up calls']
    },
    {
      title: 'Healthcare Support',
      description: 'Patient assistance, appointment scheduling, and medical information delivery.',
      icon: <Heart className="w-8 h-8 text-purple-400" />,
      examples: ['Appointment booking', 'Medication reminders', 'Health tips', 'Emergency protocols']
    },
    {
      title: 'Smart Home Integration',
      description: 'Voice control for IoT devices, home automation, and smart home management.',
      icon: <Home className="w-8 h-8 text-pink-400" />,
      examples: ['Light control', 'Temperature adjustment', 'Security systems', 'Entertainment control']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Advanced Voice AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform customer interactions with our AI Voice Assistant. Natural speech recognition, human-like synthesis, and multi-channel deployment. Starting at $149/month." />
        <meta name="keywords" content="AI voice assistant, voice AI, speech recognition, voice synthesis, conversational AI, voice automation, customer service AI" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2.5s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Mic className="w-4 h-4" />
              <span>AI-Powered Voice Technology</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI Voice
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create natural, intelligent voice experiences that engage customers and automate interactions.
              <br />
              <span className="text-cyan-400 font-semibold">50+ languages • 99.5% accuracy • Multi-channel deployment</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>Listen to Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>5,000+ Voice Assistants Deployed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Voice AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technology</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to create intelligent, natural voice experiences that engage and convert.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Voice Interaction</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From customer service to smart home control, create voice experiences that deliver real value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-cyan-400 text-sm">
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your voice AI needs. All plans include our core voice technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5,000+ Businesses</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our customers say about their experience with our AI Voice Assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Voice Experience?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join thousands of businesses using our AI Voice Assistant to enhance customer interactions. 
                    Start your free trial today - no credit card required.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Sales</span>
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-300" />
                      <span className="text-sm">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-300" />
                      <span className="text-sm">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span className="text-sm">Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}