'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const QuantumComputingSolutionsPage: React.FC = () => {
  const features = [
    'Quantum algorithm development',
    'Quantum machine learning',
    'Quantum cryptography',
    'Quantum simulation',
    'Quantum optimization',
    'Quantum cloud access',
    'Quantum error correction',
    'Quantum annealing',
    'Quantum gate operations',
    'Quantum state preparation',
    'Quantum measurement',
    'Quantum circuit design'
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for research institutions',
      features: [
        '100 quantum hours/month',
        'Basic quantum algorithms',
        'Standard quantum hardware',
        'Email support',
        'Research documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        '500 quantum hours/month',
        'Advanced quantum algorithms',
        'Premium quantum hardware',
        'Priority support',
        'Custom quantum solutions',
        'Quantum consulting',
        'Training programs'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'us',
      description: 'For specialized requirements',
      features: [
        'Unlimited quantum access',
        'Custom quantum hardware',
        '24/7 dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Advanced analytics',
        'Dedicated quantum team'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Quantum algorithms for portfolio optimization, risk analysis, and fraud detection.',
      icon: CpuChipIcon
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum simulation for molecular modeling and pharmaceutical research.',
      icon: SparklesIcon
    },
    {
      title: 'Cryptography',
      description: 'Quantum-resistant encryption and secure communication protocols.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Supply Chain',
      description: 'Quantum optimization for complex logistics and supply chain management.',
      icon: CogIcon
    }
  ];

  return (
    <>
      <SEOHead 
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Revolutionary quantum computing solutions for optimization, simulation, cryptography, and machine learning. Access cutting-edge quantum hardware and algorithms. Contact us today."
        keywords="quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, quantum simulation, quantum optimization, quantum cloud"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Cyber Elements */}
          <div className="floating-cyber-elements">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="cyber-element" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text-glow">
                  Quantum Computing Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Harness the power of quantum computing for optimization, simulation, cryptography, and machine learning. Access cutting-edge quantum hardware and algorithms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40">
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-violet-400 text-violet-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-violet-400/25 holographic-border">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Revolutionary <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Quantum Technology</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our quantum computing solutions leverage the latest advances in quantum hardware and algorithms to solve complex problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect for <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Quantum computing is transforming industries with its unprecedented computational power.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Quantum <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Access quantum computing power with our flexible pricing plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`group relative ${plan.popular ? 'cyber-card-advanced scale-105' : 'cyber-card-advanced'} p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-text-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-violet-400 neon-text-glow">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'cyber-button bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700' 
                      : 'border-2 border-violet-400 text-violet-300 hover:bg-violet-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-violet-900/40 via-slate-900 to-indigo-900/40 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Contact our quantum computing experts to discuss how quantum solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-violet-500/25">
                <span className="relative z-10 flex items-center">
                  Contact Quantum Experts
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;