'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, Gamepad2, Download, Upload, Settings, Brain, Sparkles, Play, Pause, Volume2, FileText, Terminal } from 'lucide-react';

const AIGameDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Gamepad2,
      title: 'AI Game Asset Generation',
      description: 'Generate 3D models, textures, animations, and sound effects using advanced AI',
      benefits: ['3D model generation', 'Texture creation', 'Animation synthesis', 'Sound generation']
    },
    {
      icon: Brain,
      title: 'Intelligent NPCs',
      description: 'Create smart NPCs with realistic behavior, dialogue, and decision-making',
      benefits: ['Behavioral AI', 'Dialogue systems', 'Decision trees', 'Emotional responses']
    },
    {
      icon: Settings,
      title: 'Procedural Content',
      description: 'Generate infinite levels, quests, and content using procedural algorithms',
      benefits: ['Level generation', 'Quest creation', 'World building', 'Content variation']
    },
    {
      icon: Terminal,
      title: 'Game Balancing',
      description: 'AI-powered game balancing and difficulty adjustment for optimal player experience',
      benefits: ['Difficulty scaling', 'Balance testing', 'Player analytics', 'Dynamic adjustment']
    }
  ];

  const pricingPlans = [
    {
      name: 'Indie Developer',
      price: '$199/month',
      description: 'Perfect for indie developers and small studios',
      features: [
        'Up to 100 assets/month',
        'Basic AI features',
        '2D & 3D support',
        'Email support',
        'API access',
        'Unity integration'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$599/month',
      description: 'Ideal for game development studios',
      features: [
        'Up to 1,000 assets/month',
        'Advanced AI features',
        'Full 3D support',
        'Priority support',
        'Custom training',
        'Team collaboration',
        'Multiple engine support',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      description: 'For large game companies and publishers',
      features: [
        'Unlimited assets',
        'Premium AI features',
        'All platforms',
        '24/7 dedicated support',
        'White-label solution',
        'Custom AI training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Mobile Games',
      description: 'Create engaging mobile games with AI-generated content and smart NPCs',
      icon: '📱',
      examples: ['Puzzle games', 'RPGs', 'Strategy games', 'Casual games']
    },
    {
      title: 'PC Games',
      description: 'Develop complex PC games with procedural worlds and intelligent systems',
      icon: '💻',
      examples: ['Open world games', 'Simulation games', 'Strategy games', 'RPGs']
    },
    {
      title: 'VR/AR Games',
      description: 'Create immersive VR and AR experiences with AI-powered interactions',
      icon: '🥽',
      examples: ['VR adventures', 'AR puzzles', 'Mixed reality', 'Immersive experiences']
    },
    {
      title: 'Educational Games',
      description: 'Develop educational games with adaptive learning and personalized content',
      icon: '🎓',
      examples: ['Learning games', 'Training simulators', 'Educational content', 'Skill development']
    }
  ];

  const gameTypes = [
    { name: 'RPG', description: 'Role-playing games with quests and character development' },
    { name: 'Strategy', description: 'Tactical and strategic gameplay with AI opponents' },
    { name: 'Puzzle', description: 'Brain-teasing puzzles with procedural generation' },
    { name: 'Action', description: 'Fast-paced action games with dynamic content' },
    { name: 'Simulation', description: 'Life and city simulation games with AI systems' },
    { name: 'Adventure', description: 'Story-driven adventures with intelligent NPCs' },
    { name: 'Racing', description: 'Racing games with AI opponents and tracks' },
    { name: 'Sports', description: 'Sports games with realistic AI players' }
  ];

  const technicalSpecs = [
    { spec: 'Asset Quality', value: 'Up to 4K resolution' },
    { spec: 'Generation Speed', value: 'Real-time' },
    { spec: 'Platforms', value: 'All major platforms' },
    { spec: 'Engines Supported', value: 'Unity, Unreal, Godot' },
    { spec: 'AI Behavior', value: 'Advanced neural networks' },
    { spec: 'API Response Time', value: '< 5 seconds' },
    { spec: 'Uptime SLA', value: '99.9%' },
    { spec: 'Asset Storage', value: 'Unlimited' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Development',
      description: 'Reduce game development time by 70% with AI-generated content',
      value: '70% faster'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Eliminate expensive art and animation costs',
      value: '80% cheaper'
    },
    {
      icon: Star,
      title: 'Higher Quality',
      description: 'Professional-grade assets and intelligent game systems',
      value: 'Studio quality'
    },
    {
      icon: Zap,
      title: 'Infinite Content',
      description: 'Generate unlimited procedural content for endless gameplay',
      value: '∞ content'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Game Development & Asset Generation - Zion Tech Group</title>
        <meta name="description" content="Create games with AI. Generate assets, intelligent NPCs, and procedural content. Support for Unity, Unreal, and all platforms. Starting at $199/month." />
        <meta name="keywords" content="ai game development, game asset generation, procedural content, game ai, npc ai, game development tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Game AI Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Game Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create games with AI-generated assets, intelligent NPCs, and procedural content. Support for Unity, Unreal Engine, and all major platforms.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">4K</div>
              <div className="text-gray-300">Asset Quality</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-300">Procedural Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">All</div>
              <div className="text-gray-300">Platforms</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Game AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Game Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Game Types We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {gameTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                <p className="text-sm text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-left space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Game AI Plan`}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{spec.value}</div>
                <div className="text-gray-300">{spec.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Creating Games with AI
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your game ideas into reality with our advanced AI technology. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIGameDevelopmentPage;