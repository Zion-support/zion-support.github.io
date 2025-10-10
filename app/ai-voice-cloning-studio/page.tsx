'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Play, 
  Pause, 
  Download, 
  Upload, 
  Settings, 
  Star, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Globe, 
  Shield, 
  Headphones,
  Volume2,
  FileAudio,
  Wand2,
  Languages,
  Timer,
  Award,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';

const AIVoiceCloningStudioPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Mic,
      title: 'AI Voice Cloning',
      description: 'Create perfect voice clones with just 3 minutes of audio sample',
      details: ['Neural voice synthesis', 'Emotion control', 'Accent preservation', 'Gender adaptation']
    },
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Generate voice content in 50+ languages with native pronunciation',
      details: ['50+ languages', 'Native pronunciation', 'Cultural adaptation', 'Regional accents']
    },
    {
      icon: Volume2,
      title: 'Voice Customization',
      description: 'Fine-tune pitch, speed, tone, and emotional expression',
      details: ['Pitch adjustment', 'Speed control', 'Tone modification', 'Emotion injection']
    },
    {
      icon: FileAudio,
      title: 'Audio Processing',
      description: 'Professional-grade audio processing and enhancement',
      details: ['Noise reduction', 'Audio enhancement', 'Format conversion', 'Quality optimization']
    },
    {
      icon: Wand2,
      title: 'Real-time Generation',
      description: 'Generate voice content in real-time with instant preview',
      details: ['Instant generation', 'Live preview', 'Real-time editing', 'Quick iterations']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with voice data protection and compliance',
      details: ['End-to-end encryption', 'GDPR compliance', 'Data retention policies', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 49,
      originalPrice: 99,
      period: 'month',
      description: 'Perfect for content creators and small businesses',
      features: [
        '3 voice clones',
        '10 hours/month generation',
        'Basic voice customization',
        'Standard quality output',
        'Email support',
        'Commercial license'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 149,
      originalPrice: 199,
      period: 'month',
      description: 'Ideal for agencies and growing businesses',
      features: [
        '10 voice clones',
        '50 hours/month generation',
        'Advanced voice customization',
        'High quality output',
        'Priority support',
        'API access',
        'Team collaboration',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 499,
      originalPrice: 699,
      period: 'month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited voice clones',
        'Unlimited generation',
        'Premium voice customization',
        'Studio quality output',
        '24/7 dedicated support',
        'Full API access',
        'White-label solution',
        'Custom training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Content Creation',
      description: 'Create engaging voiceovers for videos, podcasts, and presentations',
      icon: Play,
      examples: ['YouTube videos', 'Podcast intros', 'E-learning content', 'Marketing videos']
    },
    {
      title: 'Customer Service',
      description: 'Deploy AI voice assistants for 24/7 customer support',
      icon: Headphones,
      examples: ['IVR systems', 'Chatbots', 'Phone support', 'Interactive guides']
    },
    {
      title: 'Accessibility',
      description: 'Make content accessible with voice narration and reading assistance',
      icon: Globe,
      examples: ['Screen readers', 'Audiobooks', 'Language learning', 'Assistive technology']
    },
    {
      title: 'Entertainment',
      description: 'Create unique voice experiences for games, apps, and media',
      icon: Sparkles,
      examples: ['Game characters', 'Virtual assistants', 'Interactive stories', 'Social media content']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Content Creator',
      company: 'TechTutorials',
      content: 'AI Voice Cloning Studio transformed my content creation process. I can now produce professional voiceovers in minutes instead of hours.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Director',
      company: 'GlobalCorp',
      content: 'The multilingual capabilities are incredible. We can now create localized content for all our markets with consistent brand voice.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Watson',
      role: 'E-learning Manager',
      company: 'EduTech Solutions',
      content: 'Our students love the personalized voice experience. It makes learning more engaging and accessible for everyone.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg'
    }
  ];

  const stats = [
    { number: '95%', label: 'Voice Accuracy', icon: Target },
    { number: '50+', label: 'Languages Supported', icon: Globe },
    { number: '10K+', label: 'Happy Customers', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-full mb-6">
              <Mic className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">AI Voice Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Voice Cloning Studio Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Create perfect voice clones with AI-powered technology. Generate professional voiceovers, 
              multilingual content, and personalized voice experiences in minutes.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">95% Voice Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">50+ Languages</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Real-time Generation</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Powerful Voice Cloning Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that creates incredibly realistic voice clones with professional-grade quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Use Cases & Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how AI Voice Cloning Studio can transform your business across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Examples:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your voice cloning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    <div className="text-lg text-gray-500 line-through">${plan.originalPrice}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  {plan.cta}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust AI Voice Cloning Studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Voice Content?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI voice cloning. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📞 Phone: +1 (302) 464-0950</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceCloningStudioPage;