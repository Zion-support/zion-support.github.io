'use client';
import React from 'react';
import { Cpu, Atom, Zap, CheckCircle, Star, ArrowRight, Brain, Shield, Clock, DollarSign, Award, Globe, Database, Settings, Smartphone, Mail, Phone, Calendar, FileText, TrendingUp, Eye, Lock, ArrowUp, Microscope } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const QuantumComputing: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithm Development',
      description: 'Develop custom quantum algorithms for optimization, cryptography, and machine learning',
      price: '$15,000',
      features: ['Custom algorithm design', 'Quantum circuit optimization', 'Performance benchmarking', 'Documentation']
    },
    {
      icon: Cpu,
      title: 'Quantum Hardware Integration',
      description: 'Integrate quantum computing capabilities with existing classical systems',
      price: '$25,000',
      features: ['Hardware selection', 'System integration', 'API development', 'Testing & validation']
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Implement quantum machine learning models for enhanced data processing',
      price: '$20,000',
      features: ['QML model design', 'Training algorithms', 'Performance optimization', 'Integration support']
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Implement quantum-resistant encryption and secure communication protocols',
      price: '$18,000',
      features: ['Quantum key distribution', 'Post-quantum cryptography', 'Security assessment', 'Implementation']
    },
    {
      icon: Database,
      title: 'Quantum Database Optimization',
      description: 'Optimize database queries and data processing using quantum algorithms',
      price: '$12,000',
      features: ['Query optimization', 'Data structure design', 'Performance tuning', 'Monitoring setup']
    },
    {
      icon: Microscope,
      title: 'Quantum Research & Development',
      description: 'Custom quantum research projects and experimental implementations',
      price: '$50,000',
      features: ['Research planning', 'Experimental design', 'Data analysis', 'Publication support']
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      icon: TrendingUp,
      description: 'Portfolio optimization, risk analysis, and fraud detection',
      benefits: ['Faster calculations', 'Better risk models', 'Enhanced security']
    },
    {
      title: 'Drug Discovery',
      icon: Microscope,
      description: 'Molecular simulation and drug development acceleration',
      benefits: ['Faster discovery', 'Better accuracy', 'Cost reduction']
    },
    {
      title: 'Supply Chain',
      icon: Globe,
      description: 'Logistics optimization and route planning',
      benefits: ['Efficient routing', 'Cost savings', 'Real-time optimization']
    },
    {
      title: 'Climate Modeling',
      icon: Eye,
      description: 'Advanced climate simulation and weather prediction',
      benefits: ['Better predictions', 'Complex modeling', 'Environmental insights']
    }
  ];

  const pricingTiers = [
    {
      name: 'Exploration',
      price: '$25,000',
      description: 'Initial quantum computing exploration and feasibility study',
      features: [
        'Quantum readiness assessment',
        'Use case identification',
        'Technology evaluation',
        'Pilot project design',
        'Expert consultation',
        'Implementation roadmap'
      ],
      popular: false
    },
    {
      name: 'Implementation',
      price: '$75,000',
      description: 'Full quantum computing implementation and integration',
      features: [
        'Custom quantum solutions',
        'Hardware integration',
        'Software development',
        'Team training',
        'Ongoing support',
        'Performance monitoring',
        'Documentation',
        'Maintenance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Large-scale quantum computing transformation',
      features: [
        'Enterprise-wide quantum strategy',
        'Custom hardware development',
        'Advanced algorithms',
        'Dedicated quantum team',
        '24/7 support',
        'White-label solutions',
        'Research partnerships',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      company: 'Quantum Finance Corp',
      content: 'The quantum optimization algorithms have revolutionized our portfolio management. We\'ve seen 300% improvement in calculation speed.',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Research Director',
      company: 'BioTech Innovations',
      content: 'Quantum machine learning has accelerated our drug discovery process by 5x. The results are groundbreaking.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'Logistics Pro',
      content: 'Quantum route optimization has reduced our logistics costs by 40% while improving delivery times by 60%.',
      rating: 5
    }
  ];

  const quantumAdvantages = [
    { number: '1000x', label: 'Faster Processing' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Atom className="w-4 h-4" />
              <span>Next-Generation Quantum Computing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers. 
              Transform your business with quantum algorithms and quantum machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Quantum Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {quantumAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{advantage.number}</div>
                <div className="text-gray-300">{advantage.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing can transform your industry and solve complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <app.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
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

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum computing solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing package that matches your business goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${
                tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading organizations are leveraging quantum computing for breakthrough results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Enter the Quantum Era?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free quantum computing assessment and discover how quantum technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Free assessment • Expert consultation • No obligation
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumComputing;