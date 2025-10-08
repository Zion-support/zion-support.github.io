import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Atom, Zap, Shield, Cpu, Brain, Target } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, simulation, and machine learning applications.',
      icon: '⚛️',
      price: 'Starting at $15,000/project',
      features: ['Custom algorithm design', 'Quantum circuit optimization', 'Error correction', 'Performance benchmarking', 'Documentation'],
      benefits: ['Solve problems 1000x faster', 'Exponential speedup', 'Breakthrough optimization'],
      marketPrice: '$25,000-50,000/project',
      category: 'Algorithm Development',
      technologies: ['Qiskit', 'Cirq', 'Q#', 'PennyLane', 'Qiskit Runtime']
    },
    {
      title: 'Quantum Security Solutions',
      description: 'Quantum-resistant cryptography and quantum key distribution for ultra-secure communications.',
      icon: '🔐',
      price: 'Starting at $12,000/project',
      features: ['Post-quantum cryptography', 'Quantum key distribution', 'Security assessment', 'Implementation', 'Compliance'],
      benefits: ['Future-proof security', 'Unbreakable encryption', 'Quantum-safe protocols'],
      marketPrice: '$20,000-40,000/project',
      category: 'Security',
      technologies: ['NIST Standards', 'Lattice-based Crypto', 'Code-based Crypto', 'Hash-based Crypto']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for pattern recognition and optimization.',
      icon: '🧠',
      price: 'Starting at $18,000/project',
      features: ['Quantum neural networks', 'Variational algorithms', 'Quantum feature maps', 'Hybrid classical-quantum', 'Training optimization'],
      benefits: ['Exponential data processing', 'Quantum advantage', 'Enhanced pattern recognition'],
      marketPrice: '$30,000-60,000/project',
      category: 'Machine Learning',
      technologies: ['TensorFlow Quantum', 'PennyLane', 'Qiskit ML', 'Cirq', 'Qiskit Nature']
    },
    {
      title: 'Quantum Simulation Services',
      description: 'Quantum simulation of complex systems for materials science, chemistry, and physics.',
      icon: '🔬',
      price: 'Starting at $20,000/project',
      features: ['Molecular simulation', 'Material properties', 'Chemical reactions', 'Quantum chemistry', 'Optimization'],
      benefits: ['Accurate simulations', 'Faster discovery', 'Cost reduction'],
      marketPrice: '$35,000-70,000/project',
      category: 'Simulation',
      technologies: ['Qiskit Nature', 'PennyLane', 'Cirq', 'Qiskit Chemistry', 'VQE']
    },
    {
      title: 'Quantum Optimization',
      description: 'Quantum optimization algorithms for logistics, finance, and resource allocation problems.',
      icon: '📊',
      price: 'Starting at $16,000/project',
      features: ['Combinatorial optimization', 'Portfolio optimization', 'Supply chain', 'Scheduling', 'Resource allocation'],
      benefits: ['Optimal solutions', 'Massive scale problems', 'Real-time optimization'],
      marketPrice: '$25,000-50,000/project',
      category: 'Optimization',
      technologies: ['QAOA', 'VQE', 'Qiskit Optimization', 'D-Wave', 'IBM Quantum']
    },
    {
      title: 'Quantum Computing Consulting',
      description: 'Strategic consulting for quantum computing adoption and implementation planning.',
      icon: '💡',
      price: 'Starting at $500/hour',
      features: ['Technology assessment', 'Roadmap development', 'Vendor evaluation', 'ROI analysis', 'Implementation planning'],
      benefits: ['Strategic guidance', 'Risk mitigation', 'Optimal investment'],
      marketPrice: '$800-1,500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Risk Analysis', 'ROI Modeling']
    }
  ];

  const categories = [...new Set(quantumServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Advanced quantum computing solutions including algorithm development, quantum security, and quantum machine learning for enterprise applications." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum security, quantum machine learning, quantum optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Harness the power of quantum computing for breakthrough solutions and exponential performance gains
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Start Quantum Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Quantum Solutions
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
                Why Choose Our Quantum Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge quantum computing expertise with proven results and industry-leading innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Experts</h3>
                <p className="text-gray-600">PhD-level quantum physicists and algorithm specialists</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exponential Speedup</h3>
                <p className="text-gray-600">Solve complex problems 1000x faster than classical computers</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Proof Security</h3>
                <p className="text-gray-600">Quantum-resistant cryptography for ultimate security</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successful implementations across multiple industries</p>
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
                  Advanced {category.toLowerCase()} solutions powered by quantum computing
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
                Our Quantum Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Advanced quantum computing technologies and methodologies for solving complex problems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
                <Atom className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Algorithms</h3>
                <p className="text-gray-600">Custom quantum algorithms for optimization and simulation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Security</h3>
                <p className="text-gray-600">Post-quantum cryptography and quantum key distribution</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum ML</h3>
                <p className="text-gray-600">Quantum-enhanced machine learning and neural networks</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Simulation</h3>
                <p className="text-gray-600">Quantum simulation for chemistry and materials science</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Target className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Optimization</h3>
                <p className="text-gray-600">Quantum optimization for logistics and resource allocation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Hardware</h3>
                <p className="text-gray-600">Access to leading quantum computing platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our quantum computing experts for a free consultation and custom quantum strategy
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