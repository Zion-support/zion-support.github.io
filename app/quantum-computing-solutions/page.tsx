'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Zap, Users, Clock, CheckCircle, ArrowRight, Star, Shield, Globe, Smartphone, Brain, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const QuantumComputingSolutionsPage: React.FC = () => {
  const features = [
    'Quantum algorithm development and optimization',
    'Quantum machine learning implementations',
    'Cryptographic security enhancement',
    'Complex optimization problem solving',
    'Quantum simulation and modeling',
    'Quantum cloud computing access',
    'Hybrid classical-quantum systems',
    'Quantum error correction protocols',
    'Quantum networking solutions',
    'Research and development partnerships'
  ];

  const benefits = [
    'Solve problems exponentially faster than classical computers',
    'Breakthrough capabilities in cryptography and security',
    'Revolutionary drug discovery and material science',
    'Advanced financial modeling and risk analysis',
    'Next-generation artificial intelligence',
    'Unprecedented optimization capabilities'
  ];

  const applications = [
    'Drug Discovery & Molecular Simulation',
    'Financial Risk Analysis & Portfolio Optimization',
    'Cryptography & Cybersecurity',
    'Supply Chain Optimization',
    'Climate Modeling & Environmental Research',
    'Machine Learning & AI Acceleration',
    'Logistics & Route Optimization',
    'Material Science & Chemistry',
    'Quantum Chemistry Calculations',
    'Optimization Problems'
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$5,000',
      period: '/month',
      description: 'For academic and research institutions',
      features: [
        '10 hours quantum computing access',
        'Basic quantum algorithms',
        'Research support',
        'Documentation and tutorials',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        '50 hours quantum computing access',
        'Advanced quantum algorithms',
        'Custom algorithm development',
        'Dedicated quantum engineer',
        'Priority support',
        'Training and consultation'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'Us',
      description: 'Tailored solutions for specific needs',
      features: [
        'Unlimited quantum access',
        'Custom quantum hardware',
        'On-premise deployment',
        'White-label solutions',
        'Dedicated team',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Research Director',
      company: 'Pharmaceutical Corp',
      content: 'Quantum computing has accelerated our drug discovery process by 1000x. We can now simulate molecular interactions that were impossible before.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'Financial Services',
      content: 'The quantum optimization algorithms have revolutionized our portfolio management. We can now process complex risk scenarios in real-time.',
      rating: 5
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Scientist',
      company: 'Materials Research Lab',
      content: 'Quantum simulation has opened new frontiers in material science. We are discovering materials with properties we never thought possible.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Next-Gen Computing Power | Zion Tech Group</title>
        <meta name="description" content="Harness the power of quantum computing for breakthrough solutions in drug discovery, cryptography, optimization, and AI. Access cutting-edge quantum technology." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, quantum optimization" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                Next-Generation Computing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Unlock the power of quantum computing for breakthrough solutions in drug discovery, 
                cryptography, optimization, and artificial intelligence. Access cutting-edge quantum technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Explore Solutions
                </a>
                <a
                  href="#demo"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
                  <div className="text-gray-400">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-400">Quantum Algorithms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-400">Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-400">Access</div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Quantum Computing Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Quantum Computing Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((application, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-lg p-6 border border-purple-500/20">
                    <Cpu className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{application}</h3>
                    <p className="text-gray-300 text-sm">
                      Leverage quantum computing to solve complex problems in this domain with unprecedented speed and accuracy.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose Quantum Computing?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-lg p-6 border border-purple-500/20">
                    <div className="text-purple-400 text-2xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold text-white mb-3">Benefit {index + 1}</h3>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Quantum Computing Access Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
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
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white'
                          : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                What Our Partners Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-purple-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-lg p-12 border border-purple-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Harness Quantum Power?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the quantum revolution and unlock unprecedented computing capabilities for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  📧 Email: kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default QuantumComputingSolutionsPage;