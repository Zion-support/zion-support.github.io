import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Atom, Cpu, Shield, CheckCircle, ArrowRight, Star, Award, Zap, Lock } from 'lucide-react';

const QuantumComputingSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms for optimization, cryptography, and machine learning"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Hardware Integration",
      description: "Integration with leading quantum computers and simulators"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Security Solutions",
      description: "Post-quantum cryptography and quantum key distribution systems"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced ML algorithms for complex data processing"
    }
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and universities",
      features: [
        "Access to quantum simulators",
        "Basic quantum algorithm library",
        "Research support",
        "Documentation & tutorials",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "/month",
      description: "Ideal for large corporations and government agencies",
      features: [
        "Access to real quantum hardware",
        "Custom quantum algorithm development",
        "Dedicated quantum consultant",
        "Priority support",
        "Advanced security features",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Government",
      price: "$19,999",
      period: "/month",
      description: "For national security and critical infrastructure",
      features: [
        "All Enterprise features",
        "Classified quantum research",
        "24/7 dedicated support",
        "Custom quantum hardware",
        "Advanced cryptography",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Quantum portfolio optimization, risk analysis, and fraud detection",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Pharmaceutical",
      description: "Drug discovery, molecular simulation, and protein folding",
      icon: <Atom className="w-8 h-8" />
    },
    {
      title: "Cybersecurity",
      description: "Quantum encryption, secure communications, and threat detection",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Logistics",
      description: "Supply chain optimization, route planning, and resource allocation",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const technologies = [
    "IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum", "Rigetti Computing",
    "IonQ", "Honeywell Quantum", "D-Wave Systems", "Xanadu", "Quantum Circuits Inc"
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group | Next-Gen Computing</title>
        <meta name="description" content="Revolutionary quantum computing solutions for optimization, cryptography, and machine learning. Access to leading quantum hardware and custom algorithm development." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, optimization, quantum hardware" />
        <meta property="og:title" content="Quantum Computing Solutions - Zion Tech Group" />
        <meta property="og:description" content="Next-generation quantum computing solutions for enterprise applications" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-computing-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of quantum computing for optimization, cryptography, and machine learning. 
                Access leading quantum hardware and custom algorithm development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Research Papers
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum solutions powered by the latest quantum hardware and algorithms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Hardware Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading quantum computing providers to deliver the best solutions
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary quantum computing applications across multiple industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access to quantum computing resources and expert consultation services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Quantum Computing?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the quantum revolution with our cutting-edge solutions. 
                Schedule a consultation to discover how quantum computing can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;