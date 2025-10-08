import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Atom, Cpu, Lock, ArrowRight, Sparkles } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and complex problem solving.',
      icon: '⚛️',
      price: '$15,000/project',
      features: [
        'Custom quantum algorithm design',
        'Quantum circuit optimization',
        'Algorithm testing & validation',
        'Performance benchmarking',
        'Documentation & training',
        'Ongoing support & maintenance'
      ],
      benefits: [
        'Solve problems exponentially faster',
        'Tackle previously unsolvable challenges',
        'Gain competitive advantage'
      ],
      marketPrice: '$25,000-50,000/project',
      category: 'Algorithm Development',
      technologies: ['Qiskit', 'Cirq', 'Q#', 'PennyLane', 'Qiskit Runtime']
    },
    {
      title: 'Quantum Security Solutions',
      description: 'Quantum-resistant cryptography and quantum key distribution systems.',
      icon: '🔐',
      price: '$25,000/project',
      features: [
        'Quantum key distribution (QKD)',
        'Post-quantum cryptography',
        'Quantum random number generation',
        'Security assessment & testing',
        'Compliance & certification',
        'Implementation & deployment'
      ],
      benefits: [
        'Future-proof security infrastructure',
        'Protect against quantum attacks',
        'Ensure long-term data security'
      ],
      marketPrice: '$40,000-80,000/project',
      category: 'Quantum Security',
      technologies: ['BB84 Protocol', 'NIST Standards', 'Lattice Cryptography', 'Code-based Crypto']
    },
    {
      title: 'Quantum Simulation Services',
      description: 'Quantum simulation for materials science, chemistry, and physics research.',
      icon: '🧪',
      price: '$20,000/project',
      features: [
        'Molecular simulation',
        'Material property prediction',
        'Chemical reaction modeling',
        'Quantum chemistry calculations',
        'Research collaboration',
        'Results analysis & reporting'
      ],
      benefits: [
        'Accelerate research & development',
        'Reduce experimental costs',
        'Enable breakthrough discoveries'
      ],
      marketPrice: '$30,000-60,000/project',
      category: 'Quantum Simulation',
      technologies: ['VQE', 'QAOA', 'Variational Algorithms', 'Quantum Chemistry Libraries']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms and applications.',
      icon: '🤖',
      price: '$18,000/project',
      features: [
        'Quantum neural networks',
        'Quantum support vector machines',
        'Quantum clustering algorithms',
        'Quantum feature maps',
        'Hybrid classical-quantum models',
        'Performance optimization'
      ],
      benefits: [
        'Exponential speedup for ML tasks',
        'Handle high-dimensional data',
        'Discover new ML patterns'
      ],
      marketPrice: '$30,000-50,000/project',
      category: 'Quantum ML',
      technologies: ['PennyLane', 'Qiskit ML', 'TensorFlow Quantum', 'Cirq']
    },
    {
      title: 'Quantum Optimization',
      description: 'Quantum optimization solutions for logistics, finance, and operations.',
      icon: '📊',
      price: '$22,000/project',
      features: [
        'Portfolio optimization',
        'Supply chain optimization',
        'Scheduling & routing problems',
        'Resource allocation',
        'Risk management',
        'Real-time optimization'
      ],
      benefits: [
        'Find optimal solutions faster',
        'Handle complex constraints',
        'Improve operational efficiency'
      ],
      marketPrice: '$35,000-70,000/project',
      category: 'Quantum Optimization',
      technologies: ['QAOA', 'VQE', 'Quantum Annealing', 'D-Wave Systems']
    },
    {
      title: 'Quantum Computing Consulting',
      description: 'Strategic consulting for quantum computing adoption and implementation.',
      icon: '💡',
      price: '$5,000/month',
      features: [
        'Quantum readiness assessment',
        'Technology roadmap development',
        'Use case identification',
        'Vendor evaluation',
        'Team training & education',
        'Implementation planning'
      ],
      benefits: [
        'Make informed quantum decisions',
        'Avoid costly mistakes',
        'Accelerate quantum adoption'
      ],
      marketPrice: '$8,000-15,000/month',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Training Programs']
    }
  ];

  const categories = [...new Set(quantumServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Advanced quantum computing services including algorithm development, quantum security, simulation, and optimization. Next-generation computing solutions." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum security, quantum simulation, quantum optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Atom className="w-12 h-12 text-cyan-400 mr-4 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Quantum Computing
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Next-generation quantum computing solutions for complex problem solving and optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Explore Quantum Solutions
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/contact"
                  className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Free Consultation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Capabilities Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Quantum Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum mechanics to solve problems that are impossible for classical computers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <Cpu className="w-16 h-16 text-cyan-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Exponential Speedup</h3>
                  <p className="text-gray-300">Solve complex problems exponentially faster than classical computers</p>
                </div>
              </div>
              
              <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <Lock className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Quantum Security</h3>
                  <p className="text-gray-300">Unbreakable encryption and quantum-resistant security solutions</p>
                </div>
              </div>
              
              <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <Atom className="w-16 h-16 text-green-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Quantum Simulation</h3>
                  <p className="text-gray-300">Simulate quantum systems for materials science and chemistry</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {category} Services
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Specialized quantum solutions for {category.toLowerCase()} applications
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {quantumServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="text-5xl mr-4 group-hover:animate-bounce">{service.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{service.title}</h3>
                            <div className="flex items-center space-x-4">
                              <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                              <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-purple-400 mb-3">Business Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                                <Star className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-green-400 mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Explore Quantum Computing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today for a free quantum computing consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </span>
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingPage;