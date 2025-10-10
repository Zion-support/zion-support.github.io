'use client';
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Video, 
  Brain, 
  Zap, 
  Target, 
  Globe, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  DollarSign,
  Cpu,
  Database,
  Eye,
  Activity,
  BarChart3,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Camera,
  Mic,
  Share2,
  Download,
  Filter,
  Search,
  Calendar,
  Bell,
  MessageSquare,
  Hand,
  Focus,
  Layers,
  Box,
  Sparkles,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
  Headphones,
  Volume2,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff
} from 'lucide-react';

const AIHolographicCollaborationPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Users,
      title: '3D Holographic Meetings',
      description: 'Immersive 3D holographic meeting rooms with lifelike avatars and spatial audio',
      benefits: ['Lifelike Avatars', 'Spatial Audio', 'Gesture Control', 'Eye Contact']
    },
    {
      icon: Brain,
      title: 'AI-Powered Collaboration',
      description: 'Intelligent meeting assistance with real-time translation and smart note-taking',
      benefits: ['Real-time Translation', 'Smart Note-taking', 'Meeting Insights', 'Auto Summaries']
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Seamless collaboration across time zones with ultra-low latency connections',
      benefits: ['Ultra-low Latency', 'Global Reach', 'Time Zone Sync', 'Multi-language Support']
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'One-click meeting setup with automatic device detection and optimization',
      benefits: ['One-click Setup', 'Auto Detection', 'Device Optimization', 'Instant Join']
    }
  ];

  const collaborationFeatures = [
    {
      category: 'Holographic Technology',
      icon: Video,
      capabilities: [
        '3D holographic displays',
        'Spatial computing interface',
        'Gesture recognition system',
        'Eye tracking technology',
        'Haptic feedback integration',
        'Mixed reality support'
      ]
    },
    {
      category: 'AI Collaboration Tools',
      icon: Brain,
      capabilities: [
        'Real-time language translation',
        'Intelligent meeting summaries',
        'Action item extraction',
        'Sentiment analysis',
        'Smart scheduling',
        'Voice-to-text conversion'
      ]
    },
    {
      category: 'Virtual Workspaces',
      icon: Globe,
      capabilities: [
        '3D whiteboard collaboration',
        'Virtual file sharing',
        'Spatial document organization',
        'Multi-user editing',
        'Version control',
        'Real-time synchronization'
      ]
    },
    {
      category: 'Advanced Communication',
      icon: MessageSquare,
      capabilities: [
        'Spatial audio processing',
        'Noise cancellation',
        'Voice enhancement',
        'Lip-sync technology',
        'Emotion recognition',
        'Non-verbal communication'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$599',
      period: '/month',
      description: 'Perfect for small teams getting started with holographic collaboration',
      features: [
        'Up to 10 participants',
        'Basic holographic features',
        'Standard AI assistance',
        'Email support',
        '5 meeting rooms',
        '1 year data retention'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Advanced collaboration suite for growing organizations',
      features: [
        'Up to 50 participants',
        'Advanced holographic features',
        'Full AI collaboration tools',
        'Priority support',
        'Unlimited meeting rooms',
        '3 years data retention',
        'Custom integrations',
        'White-label options'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Complete holographic collaboration platform for large organizations',
      features: [
        'Unlimited participants',
        'Everything in Professional',
        'Dedicated support team',
        'Custom holographic environments',
        '24/7 phone support',
        'Unlimited data retention',
        'On-premise deployment',
        'Advanced analytics'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Remote Team Collaboration',
      description: 'Bring distributed teams together in immersive 3D workspaces',
      icon: Users,
      benefits: ['Increased engagement', 'Better communication', 'Reduced travel costs', 'Improved productivity']
    },
    {
      title: 'Virtual Training & Education',
      description: 'Interactive 3D learning environments with AI-powered instruction',
      icon: Award,
      benefits: ['Immersive learning', 'Hands-on practice', 'Global accessibility', 'Cost-effective training']
    },
    {
      title: 'Design & Engineering',
      description: 'Collaborative 3D design and engineering in virtual spaces',
      icon: Settings,
      benefits: ['Real-time collaboration', '3D model manipulation', 'Instant feedback', 'Version control']
    },
    {
      title: 'Medical Consultations',
      description: 'Holographic medical consultations with 3D imaging and AI assistance',
      icon: Activity,
      benefits: ['3D medical imaging', 'Remote consultations', 'AI diagnostics', 'Global expertise access']
    }
  ];

  const integrations = [
    { name: 'Microsoft Teams', icon: '🔗', category: 'Communication' },
    { name: 'Zoom', icon: '📹', category: 'Video Conferencing' },
    { name: 'Slack', icon: '💬', category: 'Team Chat' },
    { name: 'Google Workspace', icon: '📊', category: 'Productivity' },
    { name: 'Salesforce', icon: '☁️', category: 'CRM' },
    { name: 'Figma', icon: '🎨', category: 'Design' },
    { name: 'Autodesk', icon: '🏗️', category: 'CAD' },
    { name: 'Unity', icon: '🎮', category: '3D Development' },
    { name: 'Unreal Engine', icon: '🎯', category: '3D Rendering' },
    { name: 'Blender', icon: '🎬', category: '3D Modeling' },
    { name: 'Maya', icon: '🎭', category: 'Animation' },
    { name: 'Revit', icon: '🏢', category: 'Architecture' }
  ];

  const caseStudies = [
    {
      company: 'Global Design Studio',
      industry: 'Architecture & Design',
      challenge: 'Collaborating on complex 3D projects across multiple time zones',
      solution: 'Implemented holographic collaboration platform with 3D workspace sharing',
      results: ['40% faster project completion', '60% reduction in travel costs', '90% team satisfaction'],
      logo: 'GDS'
    },
    {
      company: 'TechCorp Remote Teams',
      industry: 'Technology',
      challenge: 'Maintaining team cohesion and productivity in remote work environment',
      solution: 'Deployed AI-powered holographic meetings with virtual workspaces',
      results: ['50% increase in team engagement', '30% improvement in meeting efficiency', 'Zero travel costs'],
      logo: 'TCR'
    },
    {
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Conducting complex medical consultations and training remotely',
      solution: 'Holographic medical platform with 3D imaging and AI assistance',
      results: ['95% consultation accuracy', '80% faster diagnosis', 'Global expert access'],
      logo: 'MTI'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Holographic Collaboration
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Transform your meetings and collaboration with immersive 3D holographic technology. 
              Experience the future of remote work with lifelike avatars, spatial audio, and AI-powered assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">3D Holographic Meetings</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">AI-Powered Collaboration</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Connectivity</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Collaboration Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of remote collaboration with cutting-edge holographic technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-300">
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

      {/* Collaboration Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Collaboration Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools for immersive 3D collaboration and communication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationFeatures.map((category, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
              Transform Your Collaboration
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how holographic collaboration can revolutionize your industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-300">
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

      {/* Integrations */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-4 text-center">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <h4 className="text-white font-medium text-sm">{integration.name}</h4>
                <p className="text-gray-400 text-xs">{integration.category}</p>
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
              Choose Your Collaboration Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for teams of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card-enhanced hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
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
                  className="w-full neon-button-enhanced py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how organizations are transforming collaboration with holographic technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{study.logo}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Experience the Future of Collaboration
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 100+ organizations already using AI Holographic Collaboration to transform their remote work experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
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

export default AIHolographicCollaborationPage;