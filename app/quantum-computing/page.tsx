'use client';
import React from 'react';
import { Atom, Zap, Target, BarChart, CheckCircle, TrendingUp, ArrowRight, Star, Users, Clock, Globe, Brain, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const QuantumComputingPage: React.FC = () => {
  const features = [
    'Quantum algorithm optimization',
    'Quantum machine learning models',
    'Cryptographic security solutions',
    'Quantum simulation services',
    'Quantum annealing optimization',
    'Quantum error correction',
    'Hybrid quantum-classical computing',
    'Quantum cloud access',
    'Custom quantum circuit design',
    'Quantum advantage analysis'
  ];

  const benefits = [
    'Exponential speedup for complex problems',
    'Revolutionary cryptography solutions',
    'Breakthrough optimization capabilities',
    'Future-proof technology investment',
    'Competitive advantage in R&D',
    'Advanced drug discovery acceleration',
    'Financial modeling breakthroughs',
    'Climate change simulation solutions'
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$5,000',
      period: '/month',
      features: [
        '10 hours quantum compute time',
        'Basic quantum algorithms',
        'Email support',
        'Standard quantum simulators',
        'Documentation access'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: '/month',
      features: [
        '50 hours quantum compute time',
        'Advanced quantum algorithms',
        'Priority support',
        'Custom quantum circuits',
        'Dedicated quantum engineer',
        'API access',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'us',
      features: [
        'Unlimited quantum compute time',
        'Custom quantum solutions',
        '24/7 dedicated support',
        'On-premise quantum systems',
        'White-label quantum services',
        'Custom integrations',
        'Quantum consulting',
        'Exclusive quantum research'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Drug Discovery',
      description: 'Accelerate molecular simulation and drug design',
      icon: Atom,
      results: '1000x faster molecular modeling'
    },
    {
      title: 'Financial Modeling',
      description: 'Revolutionary portfolio optimization and risk analysis',
      icon: BarChart,
      results: 'Exponential optimization speedup'
    },
    {
      title: 'Cryptography',
      description: 'Quantum-resistant security solutions',
      icon: Target,
      results: 'Unbreakable quantum encryption'
    },
    {
      title: 'Climate Research',
      description: 'Advanced climate modeling and simulation',
      icon: Globe,
      results: 'Breakthrough climate insights'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Quantum Computing">
              Quantum Computing
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Harness the power of quantum mechanics for breakthrough computing solutions
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Unlock unprecedented computational power with our quantum computing services. 
              Solve complex optimization problems, accelerate drug discovery, and revolutionize 
              cryptography with quantum advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#pricing"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Explore Quantum Solutions
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Schedule Consultation
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-gray-300">Faster Processing</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Exponential</div>
                <div className="text-gray-300">Speedup Potential</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Future</div>
                <div className="text-gray-300">Technology Ready</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Quantum Computing Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16" aria-labelledby="use-cases-heading">
          <h2 id="use-cases-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Revolutionary Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <useCase.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-cyan-400 font-semibold">{useCase.results}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our Quantum Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Quantum Advantage</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Problem Analysis</h4>
                    <p className="text-gray-300">Identify quantum-advantageous problems in your domain</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Algorithm Design</h4>
                    <p className="text-gray-300">Develop custom quantum algorithms for your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Quantum Execution</h4>
                    <p className="text-gray-300">Run algorithms on state-of-the-art quantum hardware</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results Analysis</h4>
                    <p className="text-gray-300">Interpret quantum results and integrate with classical systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Quantum Computing Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Access cutting-edge quantum computing resources with flexible pricing options.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join the quantum revolution and gain exponential computational advantages for your most complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuantumComputingPage;