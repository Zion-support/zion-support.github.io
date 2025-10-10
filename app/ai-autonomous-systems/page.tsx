'use client';
import React from 'react';
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Building, Factory, Car, Stethoscope, Clock3, Navigation, TrendingDown, TrendingUp, Rocket } from 'lucide-react';
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
      icon: Shield
    },
    {
      metric: '50%',
      description: 'Reduction in operational costs',
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
      popular: false
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
      popular: true
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
    }
  ];

  return (
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
              </div>
            ))}
          </div>

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
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI systems that operate independently and intelligently
            </p>
          </div>

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
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Autonomous systems transforming industries across the globe
            </p>
          </div>

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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of self-managing AI systems
            </p>
          </div>

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
          </div>

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
};

export default AIAutonomousSystemsPage;