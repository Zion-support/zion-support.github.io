import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Mic, Volume2, Bot, Headphones, MessageCircle, CheckCircle, ArrowRight, Star, Clock, DollarSign, Shield, Globe, Eye, Filter, Download, Share, Bell, RefreshCw, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Search, Upload, Mail, Phone, MapPin, Target, TrendingUp, BarChart3, Users, Brain, Cpu, Rocket, Network, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Settings, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP that understands context, intent, and emotion in human speech with 98% accuracy.',
      price: '$199/month',
      benefits: ['98% accuracy', 'Context understanding', 'Emotion detection', 'Multi-language support']
    },
    {
      icon: <Volume2 className="w-8 h-8 text-emerald-400" />,
      title: 'High-Quality Voice Synthesis',
      description: 'Generate natural, human-like speech with customizable voices and emotional tones.',
      price: '$149/month',
      benefits: ['Human-like voices', 'Emotional tones', 'Custom voice training', 'Multiple languages']
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: 'Conversational AI',
      description: 'Engage in natural conversations with context awareness and memory of previous interactions.',
      price: '$299/month',
      benefits: ['Context awareness', 'Memory retention', 'Conversation flow', 'Personality customization']
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-400" />,
      title: 'Audio Processing',
      description: 'Advanced audio processing with noise cancellation and echo reduction for crystal-clear conversations.',
      price: '$99/month',
      benefits: ['Noise cancellation', 'Echo reduction', 'Audio enhancement', 'Real-time processing']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-pink-400" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across phone, web, mobile apps, and smart devices with consistent experience.',
      price: '$179/month',
      benefits: ['Phone integration', 'Web deployment', 'Mobile apps', 'Smart devices']
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing systems and workflows through comprehensive APIs.',
      price: '$249/month',
      benefits: ['API integration', 'Custom workflows', 'System connectivity', 'Data synchronization']
    }
  ]

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Provide 24/7 customer support with intelligent voice assistants that handle common inquiries.',
      icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
      metrics: ['80% query resolution', '60% cost reduction', '24/7 availability'],
      features: ['FAQ handling', 'Order tracking', 'Complaint resolution', 'Escalation management']
    },
    {
      title: 'Healthcare Support',
      description: 'Assist patients with appointment scheduling, medication reminders, and health information.',
      icon: <Heart className="w-6 h-6 text-emerald-400" />,
      metrics: ['90% patient satisfaction', '50% admin reduction', '40% faster scheduling'],
      features: ['Appointment booking', 'Medication reminders', 'Health queries', 'Emergency protocols']
    },
    {
      title: 'Sales & Lead Qualification',
      description: 'Qualify leads and schedule appointments through intelligent voice conversations.',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      metrics: ['70% lead qualification', '45% conversion increase', '35% time savings'],
      features: ['Lead scoring', 'Appointment scheduling', 'Follow-up calls', 'CRM integration']
    },
    {
      title: 'Education & Training',
      description: 'Provide interactive learning experiences with voice-guided tutorials and assessments.',
      icon: <BookOpen className="w-6 h-6 text-orange-400" />,
      metrics: ['85% engagement rate', '60% completion increase', '30% learning acceleration'],
      features: ['Interactive lessons', 'Voice assessments', 'Progress tracking', 'Personalized learning']
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with voice AI',
      features: [
        'Up to 1,000 conversations',
        'Basic voice synthesis',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 voice channel'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses with high conversation volumes',
      features: [
        'Up to 10,000 conversations',
        'Advanced NLP',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multiple voice channels',
        'Custom voice training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large organizations with unlimited conversations',
      features: [
        'Unlimited conversations',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Maria Santos',
      company: 'HealthCare Plus',
      role: 'Patient Services Director',
      content: 'Our AI voice assistant handles 80% of patient inquiries automatically. Patient satisfaction increased by 40% while reducing costs by 60%.',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'Robert Chen',
      company: 'TechSupport Solutions',
      role: 'Customer Success Manager',
      content: 'The voice assistant is incredibly natural and helpful. Our customers love the instant support, and our team can focus on complex issues.',
      rating: 5,
      avatar: 'RC'
    },
    {
      name: 'Jennifer Lee',
      company: 'EduTech Academy',
      role: 'Learning Experience Director',
      content: 'Voice-guided learning has transformed our online courses. Students are more engaged and complete courses 60% faster.',
      rating: 5,
      avatar: 'JL'
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Natural Language Voice AI | Zion Tech Group</title>
        <meta name="description" content="Create intelligent voice assistants with natural language processing and human-like speech synthesis. 98% accuracy, multi-language support, and seamless integration." />
        <meta name="keywords" content="AI voice assistant, voice AI, natural language processing, speech synthesis, conversational AI, voice automation, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Mic className="w-4 h-4" />
            <span>Natural Language Voice AI</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            AI Voice
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Assistant
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create intelligent voice assistants with natural language processing and human-like speech synthesis. 
            Engage customers with 98% accuracy and seamless conversations.
            <br />
            <span className="text-cyan-400 font-semibold">Transform customer interactions with intelligent voice AI.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Try Voice Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Voice AI Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cutting-edge voice AI technology that understands, responds, and learns from every conversation 
              to provide exceptional user experiences.
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
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">
                    {feature.price}
                  </span>
                  <Link 
                    to="/contact"
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
              <Target className="w-4 h-4" />
              <span>Industry Applications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Any <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From healthcare to education, our AI voice assistants are transforming 
              customer interactions across every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Results:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2 text-cyan-400 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-purple-400">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your voice AI needs. All plans include our core features 
              with no hidden fees or setup costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover:bg-white/20'
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
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
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
                
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
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
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join thousands of businesses that trust AI Voice Assistant to enhance customer interactions and drive engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
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
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Voice Experience?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Start your free trial today and experience the power of intelligent voice AI 
                  that understands, responds, and learns from every conversation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Try Voice Demo</span>
                    <Mic className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
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
    </>
  );
};

export default AIVoiceAssistantPage;