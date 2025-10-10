'use client';
import React from 'react';
<<<<<<< HEAD
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Building, Factory, Car, Stethoscope, Clock3, Navigation, TrendingDown, TrendingUp, Rocket } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Building, Factory, Car, Stethoscope, Clock, Navigation as NavIcon, TrendingUp } from 'lucide-react';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous Decision Making',
      description: 'AI systems that make independent decisions based on real-time data analysis and learned patterns.',
      benefits: ['Real-time decisions', 'Pattern recognition', 'Adaptive learning', 'Risk assessment']
    },
    {
      icon: Settings,
      title: 'Self-Managing Systems',
      description: 'Systems that automatically configure, optimize, and maintain themselves without human intervention.',
      benefits: ['Auto-configuration', 'Self-optimization', 'Predictive maintenance', 'Resource management']
    },
    {
      icon: Zap,
      title: 'Adaptive Intelligence',
      description: 'AI that continuously learns and adapts to changing environments and requirements.',
      benefits: ['Continuous learning', 'Environment adaptation', 'Performance improvement', 'Dynamic optimization']
    },
    {
      icon: Shield,
      title: 'Autonomous Security',
      description: 'Self-protecting systems that detect and respond to threats automatically.',
      benefits: ['Threat detection', 'Automatic response', 'Security updates', 'Incident handling']
    },
    {
      icon: Target,
      title: 'Goal-Oriented Behavior',
      description: 'Systems that work towards specific objectives while adapting to changing conditions.',
      benefits: ['Objective tracking', 'Dynamic planning', 'Resource allocation', 'Progress monitoring']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between autonomous systems and human operators.',
      benefits: ['Human oversight', 'Collaborative decision making', 'Transparency', 'Control interfaces']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
<<<<<<< HEAD
=======
<<<<<<< HEAD
      icon: '🚗'
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines and robotic systems for manufacturing.',
      icon: '🏭'
    },
    {
      title: 'Healthcare Robotics',
      description: 'Autonomous medical devices and robotic surgery systems.',
      icon: '🏥'
    },
    {
      title: 'Smart Cities',
      description: 'Autonomous traffic management and urban infrastructure systems.',
      icon: '🏙️'
    },
    {
      title: 'Agricultural Automation',
      description: 'Autonomous farming equipment and crop management systems.',
      icon: '🚜'
    },
    {
      title: 'Space Exploration',
      description: 'Autonomous spacecraft and planetary exploration robots.',
      icon: '🚀'
    }
  ];

  const benefits = [
    'Increase operational efficiency by 90%',
    'Reduce human error by 95%',
    'Lower operational costs by 70%',
    'Enable 24/7 autonomous operations',
    'Improve safety and reliability',
    'Scale operations without human limitations',
    'Enhance decision-making speed',
    'Enable complex task automation'
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with our AI technology. Self-managing, adaptive, and goal-oriented systems for various industries and applications." />
        <meta name="keywords" content="AI autonomous systems, autonomous vehicles, smart manufacturing, robotics, self-managing systems, adaptive AI" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent autonomous systems with our advanced AI technology. 
              Self-managing, adaptive, and goal-oriented systems for various industries and applications.
=======
>>>>>>> origin/main
      icon: Car,
      useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery drones', 'Fleet management']
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines and robotic systems for industrial automation.',
      icon: Factory,
      useCases: ['Robotic assembly', 'Quality control', 'Predictive maintenance', 'Supply chain automation']
    },
    {
      title: 'Smart Cities',
      description: 'Autonomous infrastructure management for traffic, energy, and public services.',
      icon: Building,
      useCases: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety']
    },
    {
      title: 'Healthcare Systems',
      description: 'Autonomous medical devices and diagnostic systems for patient care.',
      icon: Stethoscope,
      useCases: ['Medical diagnosis', 'Surgical robots', 'Patient monitoring', 'Drug delivery']
    },
    {
      title: 'Financial Trading',
      description: 'Autonomous trading systems and algorithmic investment management.',
      icon: TrendingUp,
      useCases: ['Algorithmic trading', 'Risk management', 'Portfolio optimization', 'Fraud detection']
    },
    {
      title: 'Space Exploration',
      description: 'Autonomous spacecraft and planetary rovers for space missions.',
      icon: Rocket,
      useCases: ['Planetary rovers', 'Satellite operations', 'Space station automation', 'Mission planning']
    }
  ];

  const capabilities = [
    {
      metric: '99.9%',
      description: 'Uptime for autonomous operations',
<<<<<<< HEAD
      icon: Shield
=======
      icon: Shield,
>>>>>>> origin/main
    },
    {
      metric: '50%',
      description: 'Reduction in operational costs',
<<<<<<< HEAD
      icon: TrendingDown
    },
    {
      metric: '24/7',
      description: 'Continuous operation capability',
      icon: Clock3
    },
    {
      metric: '10x',
      description: 'Faster response times',
      icon: Zap
=======
      icon: TrendingDown,
    },
    {
      metric: '24/7',
      description: 'Continuous autonomous operation',
      icon: Clock3,
    },
    {
      metric: '10 x',
      description: 'Faster response to changes',
      icon: Zap,
>>>>>>> origin/main
    }
  ];

  const benefits = [
    'Reduce human error to zero',
    'Enable 24/7 operations',
    'Optimize resource utilization',
    'Improve safety and reliability',
    'Scale operations efficiently',
    'Enable new business models'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Basic autonomous system for small operations',
      features: [
        'Up to 5 autonomous processes',
        'Basic AI capabilities',
        'Standard monitoring',
        'Email support',
        '1 system integration'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false,
>>>>>>> origin/main
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Advanced autonomous systems for growing businesses',
      features: [
        'Up to 20 autonomous processes',
        'Advanced AI capabilities',
        'Real-time monitoring',
        'Priority support',
        'Multiple integrations',
        'Custom workflows',
        'Analytics dashboard'
      ],
<<<<<<< HEAD
      popular: true
=======
      popular: true,
>>>>>>> origin/main
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'Full-scale autonomous operations for large organizations',
      features: [
        'Unlimited processes',
        'Premium AI capabilities',
        'Advanced monitoring',
        'Dedicated support',
        'Unlimited integrations',
        'Custom development',
        'White-label solution',
        'SLA guarantee'
      ],
<<<<<<< HEAD
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'AutoTech Solutions',
      role: 'Chief Technology Officer',
      quote: 'The autonomous systems transformed our manufacturing operations. We achieved 99.9% uptime and reduced costs by 50%.',
      rating: 5,
      image: '👩‍🔬'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Urban Dynamics',
      role: 'City Manager',
      quote: 'Smart city automation improved traffic flow by 40% and reduced energy consumption by 30%. Incredible results.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Dr. James Wilson',
      company: 'MedTech Innovations',
      role: 'Medical Director',
      quote: 'Autonomous medical systems enhanced patient care while reducing diagnostic errors by 95%. Life-changing technology.',
      rating: 5,
      image: '👨‍⚕️'
=======
      popular: false,
>>>>>>> origin/main
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">🤖</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Autonomous AI Systems
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Self-Managing Intelligence for the Future
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Deploy autonomous AI systems that operate independently, make intelligent decisions, 
            and adapt to changing conditions without human intervention.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{capability.metric}</div>
                <div className="text-gray-300">{capability.description}</div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-24 pb-16 px-4">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Settings className="w-4 h-4" />
              <span>Self-Managing AI Systems</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              AI Autonomous</h1> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Systems</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Build intelligent systems that operate independently, make decisions autonomously, and adapt to changing</p>
              environments without human intervention.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-violet-400 text-violet-300 px-8 py-4 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Autonomous System Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Autonomous Systems combine cutting-edge technology with intelligent decision-making
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
=======
          {/* Capabilities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">{capabilities.map((capability, index) => (</div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,</h1>
              AI Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Systems</span>,
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Build intelligent systems that operate independently, make decisions autonomously, and adapt to changing;
              environments without human intervention.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Build Autonomous Systems;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
                View Demo;
              </a>
            </div>,
          </div>)
)
          {/* Capabilities */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16">),
            {capabilities.map((capability, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <capability.icon className="w-8 h-8 text-cyan-400" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">{capability.metric}</div><div className="text-gray-300">{capability.description}</div>
>>>>>>> origin/main
              </div>
            ))}
          </div>

<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Deploy Autonomous System
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Autonomous System Capabilities
=======
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous AI Capabilities<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our autonomous systems platform provides the intelligence and capabilities needed for</p>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous AI Capabilities</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our autonomous systems platform provides the intelligence and capabilities needed for</p>
              truly independent operation.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Autonomous AI Capabilities;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI systems that operate independently and intelligently
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
=======
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover: border-cyan-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
>>>>>>> origin/main
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Applications Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real-World Applications
=======
      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous System Applications<p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how autonomous AI systems are transforming industries and enabling new possibilities.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous System Applications</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how autonomous AI systems are transforming industries and enabling new possibilities.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <app.icon className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Autonomous System Applications;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Autonomous systems transforming industries across the globe
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4 text-center">
                  <application.icon className="text-cyan-400 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{application.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{application.description}</p>
                <div className="space-y-2">
                  {application.useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="text-cyan-400 font-semibold">{useCase}</span>
                    </div>
=======
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover: border-purple-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <app.icon className="w-6 h-6 text-purple-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p><div className="space-y-2">{app.useCases.map((useCase, idx) => (</div>
                    <div key={idx} className="flex items-center text-sm text-purple-300"></div>
                      <Target className="w-4 h-4 mr-2" >{useCase}</Target>
                    </Target>
>>>>>>> origin/main
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Autonomous Systems?
=======
      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous Systems Plans<p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the right plan for your autonomous system needs.<div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Autonomous Systems Plans</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the right plan for your autonomous system needs.</p><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Autonomous Systems Plans;
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of self-managing AI systems
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Autonomous System Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right level of autonomy for your organization
            </p>
=======
          <div className="grid md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular;
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'}
                  : 'border-gray-600/50'}
              }`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular;
                    </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From transportation to healthcare, our AI Autonomous Systems serve diverse industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{application.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of autonomous technology with our revolutionary AI systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Autonomous Systems?
              </h2>
              <p className="text-xl text-violet-100 mb-8">
                Join thousands of organizations who are already using our AI Autonomous Systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

<<<<<<< HEAD
      <Footer />
    </>
  );
=======
      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Autonomous Systems?</h2><p className="text-xl text-gray-300 mb-8">Start building intelligent systems that operate independently and adapt to your needs.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Building</a>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Demo</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Start Building;
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
              Schedule Demo;
            </a>
>>>>>>> origin/main
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Deploy System
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations achieved remarkable results with autonomous systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your operations with self-managing AI systems that work 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Deployment
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
=======
      <Footer />,
    </div>);
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
};

export default AIAutonomousSystemsPage;
