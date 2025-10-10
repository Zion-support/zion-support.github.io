'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, 
  Users, Building, Factory, Car, Stethoscope, Clock3, Navigation, 
  TrendingDown, TrendingUp, Eye, Star, Phone, Mail, MapPin
} from 'lucide-react';

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
      benefits: ['Advanced navigation', 'Collision avoidance', 'Traffic optimization', 'Energy efficiency']
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines and robotic systems that adapt to changing demands.',
      icon: Factory,
      benefits: ['Adaptive production', 'Quality control', 'Predictive maintenance', 'Resource optimization']
    },
    {
      title: 'Healthcare Systems',
      description: 'AI-powered medical devices and systems that operate independently.',
      icon: Stethoscope,
      benefits: ['Diagnostic assistance', 'Treatment monitoring', 'Drug delivery', 'Patient care']
    },
    {
      title: 'Smart Cities',
      description: 'Autonomous infrastructure systems for traffic, energy, and public services.',
      icon: Building,
      benefits: ['Traffic management', 'Energy optimization', 'Public safety', 'Resource allocation']
    }
  ];

  const benefits = [
    'Reduce operational costs by 70%',
    'Increase efficiency by 400%',
    'Eliminate human error completely',
    'Enable 24/7 autonomous operations',
    'Adapt to changing conditions automatically',
    'Improve safety and reliability'
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small autonomous systems",
      features: [
        "Basic autonomous capabilities",
        "Standard AI models",
        "Email support",
        "Basic monitoring",
        "Standard integrations",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for complex autonomous systems",
      features: [
        "Advanced autonomous capabilities",
        "Custom AI models",
        "Priority support",
        "Advanced monitoring",
        "Custom integrations",
        "API access",
        "Team collaboration",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large-scale autonomous deployments",
      features: [
        "Full autonomous suite",
        "Custom development",
        "24/7 dedicated support",
        "White-label solution",
        "Advanced security",
        "SLA guarantee",
        "On-premise deployment",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Chen",
      role: "CTO",
      company: "AutoTech Solutions",
      content: "The autonomous systems have revolutionized our operations. We've achieved 99.9% uptime with zero human intervention.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Rodriguez",
      role: "Operations Director",
      company: "SmartManufacturing Inc",
      content: "The self-managing systems have reduced our maintenance costs by 80% while improving efficiency by 300%.",
      rating: 5,
      avatar: "SR"
    },
    {
      name: "David Kim",
      role: "CEO",
      company: "FutureTech Corp",
      content: "The adaptive intelligence is incredible. Our systems learn and improve every day without any human intervention.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "400%", label: "Efficiency Boost", icon: TrendingUp },
    { number: "70%", label: "Cost Reduction", icon: Target },
    { number: "24/7", label: "Autonomous Operations", icon: Clock3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Systems | Zion Tech Group</title>
        <meta name="description" content="Advanced AI autonomous systems by Zion Tech Group. Self-managing, adaptive, and intelligent systems for modern businesses." />
        <meta name="keywords" content="AI autonomous systems, self-managing systems, adaptive AI, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Autonomous Systems</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">
              AI Autonomous Systems
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Self-Managing, Adaptive, and Intelligent Systems
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy autonomous AI systems that think, learn, and act independently.
              Transform your operations with self-managing, adaptive intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/demo"
                className="group relative inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Autonomous System Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities that make systems truly autonomous
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Autonomous systems transforming industries across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{application.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{application.description}</p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your operations with truly autonomous AI systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for autonomous system deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders using our autonomous systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Deploy Autonomous Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your autonomous transformation today and experience the future of intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousSystemsPage;