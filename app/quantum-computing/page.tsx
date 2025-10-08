import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Atom, Zap, Brain, Target, BarChart, Cpu, Sparkles } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning applications.',
      icon: '⚛️',
      price: 'Starting at $15,000/project',
      features: ['Custom algorithm design', 'Quantum circuit optimization', 'Performance analysis', 'Error correction', 'Hybrid classical-quantum integration'],
      benefits: ['Exponential speedup potential', 'Solve intractable problems', 'Breakthrough optimization results'],
      marketPrice: '$25,000-100,000/project',
      category: 'Algorithm Development',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Q#', 'Quantum Hardware']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning models for complex pattern recognition and optimization.',
      icon: '🧠',
      price: 'Starting at $12,000/month',
      features: ['Quantum neural networks', 'Quantum feature maps', 'Variational algorithms', 'Quantum data encoding', 'Hybrid training'],
      benefits: ['Exponential computational advantage', 'Enhanced pattern recognition', 'Faster convergence'],
      marketPrice: '$20,000-80,000/month',
      category: 'Quantum ML',
      technologies: ['TensorFlow Quantum', 'PennyLane', 'Qiskit ML', 'Cirq', 'Quantum Simulators']
    },
    {
      title: 'Quantum Cryptography',
      description: 'Quantum-safe encryption and secure communication systems using quantum principles.',
      icon: '🔐',
      price: 'Starting at $18,000/month',
      features: ['Quantum key distribution', 'Post-quantum cryptography', 'Quantum random number generation', 'Secure communication protocols', 'Quantum authentication'],
      benefits: ['Unbreakable security', 'Future-proof encryption', 'Quantum-safe communications'],
      marketPrice: '$30,000-120,000/month',
      category: 'Quantum Security',
      technologies: ['BB84 Protocol', 'Quantum Key Distribution', 'Post-Quantum Algorithms', 'Quantum Random Generators']
    },
    {
      title: 'Quantum Optimization',
      description: 'Quantum optimization solutions for complex logistics, finance, and resource allocation problems.',
      icon: '🎯',
      price: 'Starting at $10,000/month',
      features: ['Combinatorial optimization', 'Portfolio optimization', 'Supply chain optimization', 'Scheduling problems', 'Resource allocation'],
      benefits: ['Solve NP-hard problems', 'Find global optima', 'Exponential speedup'],
      marketPrice: '$18,000-75,000/month',
      category: 'Optimization',
      technologies: ['QAOA', 'VQE', 'Quantum Annealing', 'D-Wave', 'IBM Quantum']
    },
    {
      title: 'Quantum Simulation',
      description: 'Quantum simulation of physical systems for materials science, chemistry, and physics research.',
      icon: '🔬',
      price: 'Starting at $20,000/month',
      features: ['Molecular simulation', 'Material property prediction', 'Chemical reaction modeling', 'Quantum chemistry', 'Physical system simulation'],
      benefits: ['Accurate quantum simulations', 'Accelerate research', 'Enable new discoveries'],
      marketPrice: '$35,000-150,000/month',
      category: 'Simulation',
      technologies: ['VQE', 'QPE', 'Quantum Chemistry', 'Materials Science', 'Quantum Simulators']
    },
    {
      title: 'Quantum Cloud Platform',
      description: 'Managed quantum computing platform with access to multiple quantum hardware providers.',
      icon: '☁️',
      price: 'Starting at $5,000/month',
      features: ['Multi-provider access', 'Quantum job scheduling', 'Result analysis', 'Cost optimization', 'Performance monitoring'],
      benefits: ['Access to latest hardware', 'Reduce quantum costs', 'Simplify quantum development'],
      marketPrice: '$8,000-30,000/month',
      category: 'Cloud Platform',
      technologies: ['IBM Quantum', 'Google Quantum', 'IonQ', 'Rigetti', 'Amazon Braket']
    },
    {
      title: 'Quantum Error Correction',
      description: 'Advanced error correction and fault-tolerant quantum computing solutions.',
      icon: '🛠️',
      price: 'Starting at $25,000/month',
      features: ['Error detection', 'Fault tolerance', 'Logical qubits', 'Error mitigation', 'Noise characterization'],
      benefits: ['Improve quantum reliability', 'Enable large-scale quantum computing', 'Reduce quantum errors'],
      marketPrice: '$40,000-200,000/month',
      category: 'Error Correction',
      technologies: ['Surface Codes', 'LDPC Codes', 'Concatenated Codes', 'Quantum Error Correction']
    },
    {
      title: 'Quantum Communication Networks',
      description: 'Quantum communication infrastructure for secure quantum networks and distributed quantum computing.',
      icon: '🌐',
      price: 'Starting at $30,000/month',
      features: ['Quantum networks', 'Quantum repeaters', 'Entanglement distribution', 'Quantum internet', 'Secure quantum channels'],
      benefits: ['Enable quantum internet', 'Secure quantum communications', 'Distributed quantum computing'],
      marketPrice: '$50,000-300,000/month',
      category: 'Quantum Networks',
      technologies: ['Quantum Repeaters', 'Entanglement Swapping', 'Quantum Teleportation', 'Quantum Internet']
    }
  ];

  const categories = [...new Set(quantumServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Advanced quantum computing solutions including algorithm development, quantum machine learning, and quantum cryptography for enterprise applications." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, quantum optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-indigo-800/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Harness the power of quantum mechanics to solve the world's most complex computational problems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg">
                  Explore Quantum Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Schedule Quantum Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Quantum Computing Services?
              </h2>
              <p className="text-xl text-gray-600">
                Leading quantum computing expertise with access to cutting-edge quantum hardware and software
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Experts</h3>
                <p className="text-gray-600">PhD-level quantum physicists and computer scientists</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exponential Speedup</h3>
                <p className="text-gray-600">Solve problems exponentially faster than classical computers</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored quantum algorithms for your specific use case</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Breakthrough solutions for complex optimization problems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} solutions powered by quantum computing technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {quantumServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 40% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Quantum Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Get Quantum Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Quantum Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Quantum Computing Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge quantum technologies and methodologies for solving complex business problems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
                <Atom className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Algorithms</h3>
                <p className="text-gray-600">Custom quantum algorithms for optimization, search, and simulation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Machine Learning</h3>
                <p className="text-gray-600">Quantum-enhanced ML models for pattern recognition and optimization</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Cpu className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Simulation</h3>
                <p className="text-gray-600">Quantum simulation of physical systems and chemical processes</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Optimization</h3>
                <p className="text-gray-600">Quantum optimization for logistics, finance, and resource allocation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Cryptography</h3>
                <p className="text-gray-600">Quantum-safe encryption and secure communication systems</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Error Correction</h3>
                <p className="text-gray-600">Advanced error correction for fault-tolerant quantum computing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Harness Quantum Computing?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our quantum computing experts for a free consultation and custom quantum strategy development
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
            <div className="mt-8 text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingPage;