'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Volume2, Headphones, MessageSquare, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Shield, Clock, Users, Award, Globe, Database, Cpu, Eye, BarChart3, PieChart, LineChart, Activity, Brain, Target, TrendingUp } from 'lucide-react';

const AIVoiceProcessingPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Speech Recognition',
      description: 'Advanced speech-to-text with 99%+ accuracy in multiple languages',
      details: ['Real-time Transcription', 'Multi-language Support', 'Accent Adaptation', 'Noise Cancellation']
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Natural-sounding voice synthesis with emotional intelligence',
      details: ['Human-like Voices', 'Emotion Control', 'Custom Voice Cloning', 'Multiple Languages']
    },
    {
      icon: MessageSquare,
      title: 'Voice Analytics',
      description: 'Deep insights from voice data including sentiment and intent analysis',
      details: ['Sentiment Analysis', 'Intent Recognition', 'Speaker Identification', 'Emotion Detection']
    },
    {
      icon: Brain,
      title: 'AI Voice Assistant',
      description: 'Intelligent conversational AI with natural language understanding',
      details: ['Natural Conversations', 'Context Awareness', 'Task Automation', 'Learning Capabilities']
    }
  ];

  const applications = [
    {
      category: 'Customer Service',
      icon: Headphones,
      solutions: ['IVR Systems', 'Voice Bots', 'Call Analytics', 'Quality Monitoring'],
      benefits: ['24/7 Support', 'Reduced Wait Times', 'Cost Savings', 'Improved Satisfaction']
    },
    {
      category: 'Healthcare',
      icon: Shield,
      solutions: ['Medical Transcription', 'Voice Notes', 'Patient Monitoring', 'Diagnostic Support'],
      benefits: ['Faster Documentation', 'Accuracy Improvement', 'Time Savings', 'Better Care']
    },
    {
      category: 'Education',
      icon: Globe,
      solutions: ['Language Learning', 'Accessibility Tools', 'Lecture Transcription', 'Voice Assessment'],
      benefits: ['Inclusive Learning', 'Personalized Education', 'Progress Tracking', 'Accessibility']
    },
    {
      category: 'Business',
      icon: BarChart3,
      solutions: ['Meeting Transcription', 'Voice Commands', 'Voice Analytics', 'Automation'],
      benefits: ['Productivity Boost', 'Data Insights', 'Hands-free Operation', 'Efficiency Gains']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses starting with voice AI',
      features: [
        'Up to 1,000 minutes/month',
        'Basic speech recognition',
        'Standard TTS voices',
        'Email support',
        'Basic analytics',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced voice processing for growing businesses',
      features: [
        'Up to 10,000 minutes/month',
        'Advanced speech recognition',
        'Premium TTS voices',
        'Priority support',
        'Advanced analytics',
        'Custom voice training',
        'Real-time processing',
        'Webhook integration'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'Complete voice AI solution for large organizations',
      features: [
        'Unlimited minutes',
        'Highest accuracy recognition',
        'Custom voice synthesis',
        '24/7 dedicated support',
        'Full analytics suite',
        'Voice cloning',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      metric: 'Accuracy',
      value: '99.2%',
      description: 'Speech recognition accuracy across 50+ languages'
    },
    {
      metric: 'Latency',
      value: '<200ms',
      description: 'Real-time processing with minimal delay'
    },
    {
      metric: 'Languages',
      value: '50+',
      description: 'Support for major world languages and dialects'
    },
    {
      metric: 'Uptime',
      value: '99.9%',
      description: 'Reliable service with enterprise-grade infrastructure'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Experience Director',
      company: 'ServicePro Inc.',
      content: 'Our customer satisfaction increased by 45% after implementing Zion Tech Group\'s voice AI. The natural conversations and quick response times are incredible.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Chief Medical Officer',
      company: 'MedTech Solutions',
      content: 'The medical transcription accuracy is outstanding. We\'ve reduced documentation time by 60% while improving accuracy significantly.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      company: 'EduTech Global',
      content: 'The voice analytics insights have transformed how we understand our students. The ROI has been exceptional for our educational platform.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Voice Processing - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice processing solutions with 99%+ accuracy. Speech recognition, text-to-speech, voice analytics, and conversational AI. Starting at $199/month." />
        <meta name="keywords" content="voice AI, speech recognition, text to speech, voice analytics, conversational AI, voice processing, speech synthesis" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mic className="w-4 h-4" />
            <span>AI-Powered Voice Processing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Transform Speech into
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI voice processing with 99%+ accuracy. Speech recognition, natural text-to-speech, 
            voice analytics, and conversational AI that understands and responds like humans.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.2%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">&lt;200ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Voice Processing Inquiry"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Voice AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <app.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{app.category}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solutions:</h4>
                  <ul className="space-y-1">
                    {app.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center cyber-card">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{spec.value}</div>
                <h3 className="text-lg font-bold text-white mb-2">{spec.metric}</h3>
                <p className="text-gray-300 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Voice Experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading companies using our AI voice processing to enhance customer experience and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Voice Processing Demo Request"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceProcessingPage;