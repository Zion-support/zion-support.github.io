import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Atom, Zap, Target, Brain } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning',
      price: 'Starting at $15,000/project',
      features: [
        'Custom algorithm design',
        'Quantum circuit optimization',
        'Error correction implementation',
        'Performance benchmarking',
        'Documentation & training'
      ],
      icon: '🧮',
      popular: true
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable security solutions using quantum key distribution and quantum encryption',
      price: 'Starting at $25,000/project',
      features: [
        'Quantum key distribution',
        'Quantum random number generation',
        'Post-quantum cryptography',
        'Security assessment',
        'Implementation support'
      ],
      icon: '🔐',
      popular: true
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for complex data analysis',
      price: 'Starting at $20,000/project',
      features: [
        'Quantum neural networks',
        'Quantum feature mapping',
        'Quantum optimization',
        'Hybrid classical-quantum models',
        'Performance analysis'
      ],
      icon: '🤖',
      popular: false
    },
    {
      title: 'Quantum Simulation',
      description: 'Simulate complex quantum systems for research and development applications',
      price: 'Starting at $18,000/project',
      features: [
        'Molecular simulation',
        'Material property prediction',
        'Chemical reaction modeling',
        'Quantum chemistry calculations',
        'Research collaboration'
      ],
      icon: '⚛️',
      popular: false
    },
    {
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems using quantum annealing and variational methods',
      price: 'Starting at $12,000/project',
      features: [
        'Combinatorial optimization',
        'Portfolio optimization',
        'Supply chain optimization',
        'Scheduling problems',
        'Resource allocation'
      ],
      icon: '📊',
      popular: false
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic guidance on quantum computing adoption and implementation',
      price: 'Starting at $5,000/month',
      features: [
        'Quantum readiness assessment',
        'Technology evaluation',
        'Implementation roadmap',
        'Team training',
        'Ongoing support'
      ],
      icon: '💡',
      popular: false
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization, risk analysis, and fraud detection',
      icon: '💰',
      benefits: ['Faster risk calculations', 'Improved portfolio returns', 'Enhanced fraud detection']
    },
    {
      title: 'Pharmaceuticals',
      description: 'Drug discovery, molecular simulation, and protein folding',
      icon: '💊',
      benefits: ['Accelerated drug discovery', 'Better molecular understanding', 'Reduced R&D costs']
    },
    {
      title: 'Logistics',
      description: 'Route optimization, supply chain management, and scheduling',
      icon: '🚚',
      benefits: ['Optimal route planning', 'Reduced transportation costs', 'Improved efficiency']
    },
    {
      title: 'Energy',
      description: 'Grid optimization, renewable energy integration, and load balancing',
      icon: '⚡',
      benefits: ['Improved grid efficiency', 'Better renewable integration', 'Reduced energy waste']
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant cryptography and secure communications',
      icon: '🛡️',
      benefits: ['Future-proof security', 'Unbreakable encryption', 'Secure communications']
    },
    {
      title: 'Manufacturing',
      description: 'Process optimization, quality control, and predictive maintenance',
      icon: '🏭',
      benefits: ['Optimized processes', 'Better quality control', 'Predictive maintenance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve complex problems beyond classical computing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Explore Quantum Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Quantum Computing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Quantum Computing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Quantum computing leverages the principles of quantum mechanics to process information 
                in ways that classical computers cannot. By using quantum bits (qubits) that can exist 
                in multiple states simultaneously, quantum computers can solve certain problems 
                exponentially faster than classical computers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Atom className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quantum Superposition</h3>
                    <p className="text-gray-600">Qubits can exist in multiple states simultaneously, enabling parallel processing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quantum Entanglement</h3>
                    <p className="text-gray-600">Qubits can be correlated in ways that classical bits cannot</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quantum Interference</h3>
                    <p className="text-gray-600">Quantum states can interfere constructively or destructively to find optimal solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Advantage</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">10^15x</div>
                    <div className="text-sm text-gray-600">Faster than classical computers</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">1000+</div>
                    <div className="text-sm text-gray-600">Qubits in latest systems</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-sm text-gray-600">Error correction accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge quantum solutions for complex business problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-600">
              Real-world applications where quantum computing provides significant advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Quantum Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Leading quantum computing expertise with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Experts</h3>
              <p className="text-gray-600">PhD-level quantum physicists and researchers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-600">Access to latest quantum computing research</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Successful quantum implementations across industries</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Ready</h3>
              <p className="text-gray-600">Prepare your business for the quantum era</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Quantum Computing?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact our quantum computing experts for a consultation and custom solution development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumComputingPage;