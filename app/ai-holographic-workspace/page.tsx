import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';
import { Monitor, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Eye, Globe, Settings, Shield, Clock, BarChart, Target, Sparkles } from 'lucide-react';

const AIHolographicWorkspace: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: '3D Holographic Displays',
      description: 'Immersive 3D workspace environments with gesture-based interaction and spatial computing',
      price: '$0.50/hour'
    },
    {
      icon: Users,
      title: 'Virtual Collaboration',
      description: 'Real-time holographic meetings with spatial audio and presence simulation',
      price: '$0.25/participant/hour'
    },
    {
      icon: Eye,
      title: 'Eye Tracking Integration',
      description: 'Advanced eye tracking for intuitive navigation and attention-based UI adaptation',
      price: '$0.10/tracking-session'
    },
    {
      icon: Globe,
      title: 'Spatial Computing',
      description: 'AI-powered spatial awareness and object recognition in 3D environments',
      price: '$0.15/computation'
    },
    {
      icon: Settings,
      title: 'Gesture Control',
      description: 'Natural hand and body gesture recognition for seamless interaction',
      price: '$0.05/gesture'
    },
    {
      icon: Brain,
      title: 'AI Workspace Assistant',
      description: 'Intelligent virtual assistant that adapts to your workflow and preferences',
      price: '$0.20/assistant-hour'
    }
  ];

  const pricingTiers = [
    {
      name: 'Individual',
      price: '$199',
      period: '/month',
      description: 'Perfect for professionals',
      features: [
        'Personal holographic workspace',
        'Basic gesture controls',
        'Eye tracking support',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$599',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 users',
        'Collaborative workspaces',
        'Advanced AI assistant',
        'Priority support',
        'Custom environments',
        'API access',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'All holographic features',
        'Custom development',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Productivity Increase', icon: Zap },
    { number: '85%', label: 'Faster Collaboration', icon: Users },
    { number: '99.9%', label: 'Gesture Accuracy', icon: Eye },
    { number: '24/7', label: 'Virtual Availability', icon: Clock }
  ];

  return (
    <Layout
      title="AI Holographic Workspace - Immersive 3D Work Environment"
      description="Transform your work experience with AI-powered holographic workspaces. Immersive 3D environments, gesture controls, and spatial computing for unprecedented productivity."
      keywords="holographic workspace, 3D workspace, spatial computing, virtual reality, AR workspace, immersive work environment, gesture control"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Next-Generation Workspace</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Holographic Workspace
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Step into the future of work with AI-powered holographic environments. Experience unprecedented 
                productivity with 3D workspaces, gesture controls, and spatial computing that adapts to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                  Experience Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Immersive <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary holographic technology powered by AI to create the most advanced workspace experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-purple-400 font-semibold text-sm">
                    {feature.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of work through our advanced holographic technology and AI integration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Immerse</h3>
                <p className="text-gray-300 leading-relaxed">
                  Step into your personalized holographic workspace with 3D displays and spatial audio.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Interact</h3>
                <p className="text-gray-300 leading-relaxed">
                  Use natural gestures, eye tracking, and voice commands to interact with your 3D environment.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Optimize</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI continuously adapts your workspace to maximize productivity and comfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Holographic Workspace</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join the future of work with the most advanced holographic workspace technology available
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Maximum Productivity</h3>
                <p className="text-gray-300 text-sm">
                  Increase productivity by 300% with immersive 3D workspaces and intuitive interactions.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enhanced Collaboration</h3>
                <p className="text-gray-300 text-sm">
                  Collaborate in real-time with spatial presence and natural gesture-based communication.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Intuitive Interface</h3>
                <p className="text-gray-300 text-sm">
                  Natural eye tracking and gesture recognition for seamless, hands-free interaction.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Spatial Computing</h3>
                <p className="text-gray-300 text-sm">
                  Advanced spatial awareness and object recognition for true 3D workspace experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Future-Ready <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of work with our cutting-edge holographic workspace technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  }`}>
                    {tier.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Step Into the Future of Work
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Experience the most advanced holographic workspace technology. Transform how you work, collaborate, and create.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                    Start Free Trial
                  </button>
                  <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIHolographicWorkspace;