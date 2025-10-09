'use client';
import React from 'react';
import { Microscope, Brain, Zap, Shield, ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Cpu, Lightbulb } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIResearchDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Microscope,
      title: 'Research & Innovation',
      description: 'Cutting-edge AI research and development for next-generation solutions',
      benefits: ['Algorithm development', 'Model optimization', 'Novel architectures', 'Research publications']
    },
    {
      icon: Brain,
      title: 'Custom AI Models',
      description: 'Bespoke AI model development tailored to your specific requirements',
      benefits: ['Custom neural networks', 'Domain-specific models', 'Transfer learning', 'Model fine-tuning']
    },
    {
      icon: Cpu,
      title: 'Advanced Computing',
      description: 'High-performance computing infrastructure for complex AI workloads',
      benefits: ['GPU clusters', 'Distributed computing', 'Edge computing', 'Cloud infrastructure']
    },
    {
      icon: Target,
      title: 'Proof of Concept',
      description: 'Rapid prototyping and proof of concept development for AI solutions',
      benefits: ['Rapid prototyping', 'MVP development', 'Feasibility studies', 'Technical validation']
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'IP protection and patent development for AI innovations',
      benefits: ['Patent filing', 'IP strategy', 'Technology transfer', 'Licensing agreements']
    },
    {
      icon: Zap,
      title: 'Rapid Iteration',
      description: 'Fast-paced development cycles with continuous improvement',
      benefits: ['Agile development', 'Continuous integration', 'A/B testing', 'Performance optimization']
    }
  ];

  const researchAreas = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML algorithms and techniques for various applications',
      icon: Brain
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks and deep learning architectures',
      icon: Cpu
    },
    {
      title: 'Natural Language Processing',
      description: 'Language understanding and generation technologies',
      icon: Target
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis and understanding',
      icon: Shield
    }
  ];

  const services = [
    {
      title: 'Algorithm Development',
      description: 'Custom algorithm development for specific business problems',
      icon: Lightbulb
    },
    {
      title: 'Model Training',
      description: 'Large-scale model training and optimization',
      icon: Cpu
    },
    {
      title: 'Performance Optimization',
      description: 'Model optimization for speed and accuracy',
      icon: Zap
    },
    {
      title: 'Technology Transfer',
      description: 'Transfer research findings to production systems',
      icon: ArrowRight
    }
  ];

  const pricingTiers = [
    {
      name: 'Research Project',
      price: '$5,000',
      period: '/month',
      description: 'Perfect for small research projects and initial exploration',
      features: [
        'Basic research support',
        'Standard computing resources',
        'Email support',
        'Monthly reports',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Development Program',
      price: '$12,000',
      period: '/month',
      description: 'Ideal for comprehensive AI development programs',
      features: [
        'Advanced research support',
        'High-performance computing',
        'Priority support',
        'Weekly progress reports',
        'Custom model development',
        'IP protection support'
      ],
      popular: true
    },
    {
      name: 'Enterprise R&D',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale AI research and development',
      features: [
        'Dedicated research team',
        'Unlimited computing resources',
        '24/7 support',
        'Real-time collaboration',
        'Custom IP strategy',
        'Technology transfer support'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Microscope className="w-8 h-8 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">AI Research & Development</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Cutting-Edge AI
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {' '}Research & Development
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Push the boundaries of artificial intelligence with our advanced research and development services. 
                  From algorithm development to custom AI solutions, we help you stay ahead of the curve.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Research Project
                </button>
                <button className="cyber-button-outline inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Portfolio
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>IP protection included</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced R&D Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive research and development services powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse research areas and cutting-edge AI technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="cyber-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI research and development services to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your AI research and development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'cyber-button-outline'
                }`}>
                  {tier.name === 'Enterprise R&D' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Advance AI Research?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join the forefront of AI innovation and develop cutting-edge solutions that will shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Research Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIResearchDevelopmentPage;