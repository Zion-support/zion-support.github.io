'use client';
import React from 'react';
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Building, Factory, Car, Stethoscope, Clock3, TrendingDown, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
    }
  ];

  const capabilities = [
    {
      metric: '99.9%',
      description: 'Uptime for autonomous operations',
      icon: Shield
    },
    {
      metric: '50%',
      description: 'Reduction in operational costs',
      icon: TrendingDown
    },
    {
      metric: '24/7',
      description: 'Continuous autonomous operation',
      icon: Clock3
    },
    {
      metric: '10x',
      description: 'Faster response to changes',
      icon: Zap
    }
  ];

  const pricingPlans = [
    {
      name: 'Autonomous Starter',
      price: '$1,999/month',
      description: 'For small-scale autonomous systems',
      features: [
        'Basic autonomous algorithms',
        'Standard monitoring',
        'Email support',
        'Cloud deployment',
        'Basic analytics',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Autonomous Professional',
      price: '$4,999/month',
      description: 'For enterprise autonomous solutions',
      features: [
        'Advanced autonomous algorithms',
        'Real-time monitoring',
        'Priority support',
        'Hybrid deployment',
        'Advanced analytics',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Autonomous Enterprise',
      price: 'Custom',
      description: 'For large-scale autonomous operations',
      features: [
        'Custom autonomous systems',
        'On-premise deployment',
        'Dedicated support team',
        '24/7 monitoring',
        'White-label solutions',
        'Advanced security',
        'Custom reporting',
        'Full customization'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              <span>Self-Managing AI Systems</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Systems</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent systems that operate independently, make decisions autonomously, and adapt to changing environments without human intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Build Autonomous Systems
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
                View Demo
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{capability.metric}</div>
                <div className="text-gray-300">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous System Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities that enable truly autonomous operation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications of autonomous AI systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <application.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                <p className="text-gray-300 mb-4">{application.description}</p>
                <ul className="space-y-2">
                  {application.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-sm text-gray-300">
                      • {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous System Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right plan for your autonomous system needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-cyan-400' : 'border-white/20'}`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' 
                    : 'border border-white/30 text-white hover:bg-white/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Autonomous Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn how our AI autonomous systems can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIAutonomousSystemsPage;