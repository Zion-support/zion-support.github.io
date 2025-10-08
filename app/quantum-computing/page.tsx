import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Atom, Zap, Shield, Cpu, Brain, Target, BarChart, Lock } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning applications.',
      icon: '⚛️',
      price: 'Starting at $15,000/project',
      features: ['Custom algorithm design', 'Quantum circuit optimization', 'Error correction', 'Performance benchmarking', 'Documentation'],
      benefits: ['Solve complex problems exponentially faster', 'Achieve quantum advantage', 'Future-proof your technology'],
      marketPrice: '$25,000-75,000/project',
      category: 'Algorithm Development',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Q#', 'Quantum Assembly']
    },
    {
      title: 'Quantum Cryptography Solutions',
      description: 'Unbreakable encryption using quantum key distribution and post-quantum cryptography.',
      icon: '🔐',
      price: 'Starting at $12,000/project',
      features: ['Quantum key distribution', 'Post-quantum cryptography', 'Quantum random number generation', 'Security auditing', 'Implementation'],
      benefits: ['Unbreakable encryption', 'Future-proof security', 'Compliance with quantum-safe standards'],
      marketPrice: '$20,000-50,000/project',
      category: 'Cryptography',
      technologies: ['BB84 Protocol', 'E91 Protocol', 'NIST Standards', 'Lattice-based Crypto', 'Code-based Crypto']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for pattern recognition and optimization.',
      icon: '🧠',
      price: 'Starting at $18,000/project',
      features: ['Quantum neural networks', 'Variational algorithms', 'Quantum feature maps', 'Hybrid classical-quantum models', 'Training optimization'],
      benefits: ['Exponential speedup for ML tasks', 'Better pattern recognition', 'Reduced computational complexity'],
      marketPrice: '$30,000-80,000/project',
      category: 'Machine Learning',
      technologies: ['TensorFlow Quantum', 'PennyLane', 'Qiskit ML', 'Variational Circuits', 'Quantum Kernels']
    },
    {
      title: 'Quantum Optimization Services',
      description: 'Quantum optimization for logistics, finance, and resource allocation problems.',
      icon: '🎯',
      price: 'Starting at $10,000/project',
      features: ['Portfolio optimization', 'Supply chain optimization', 'Scheduling problems', 'Resource allocation', 'Constraint satisfaction'],
      benefits: ['Find optimal solutions faster', 'Handle complex constraints', 'Improve operational efficiency'],
      marketPrice: '$18,000-45,000/project',
      category: 'Optimization',
      technologies: ['QAOA', 'VQE', 'Quantum Annealing', 'D-Wave', 'IBM Qiskit']
    },
    {
      title: 'Quantum Simulation Services',
      description: 'Quantum simulation for materials science, chemistry, and physics research.',
      icon: '🔬',
      price: 'Starting at $20,000/project',
      features: ['Molecular simulation', 'Material property prediction', 'Chemical reaction modeling', 'Drug discovery', 'Quantum chemistry'],
      benefits: ['Accurate molecular modeling', 'Faster drug discovery', 'New material development'],
      marketPrice: '$35,000-100,000/project',
      category: 'Simulation',
      technologies: ['VQE', 'QPE', 'Quantum Chemistry', 'Materials Science', 'Pharmaceutical Research']
    },
    {
      title: 'Quantum Cloud Access',
      description: 'Access to quantum computing hardware through cloud platforms with expert support.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['Hardware access', 'Expert consultation', 'Algorithm optimization', 'Performance monitoring', 'Technical support'],
      benefits: ['Access cutting-edge hardware', 'No upfront investment', 'Scalable quantum resources'],
      marketPrice: '$4,000-10,000/month',
      category: 'Cloud Access',
      technologies: ['IBM Quantum', 'Google Quantum AI', 'Amazon Braket', 'Microsoft Azure Quantum', 'IonQ']
    },
    {
      title: 'Quantum Security Auditing',
      description: 'Comprehensive security assessment for quantum-resistant systems and protocols.',
      icon: '🛡️',
      price: 'Starting at $8,000/audit',
      features: ['Vulnerability assessment', 'Quantum threat analysis', 'Migration planning', 'Compliance checking', 'Security recommendations'],
      benefits: ['Identify quantum vulnerabilities', 'Ensure future security', 'Meet compliance requirements'],
      marketPrice: '$15,000-30,000/audit',
      category: 'Security',
      technologies: ['NIST Guidelines', 'FIPS Standards', 'Quantum Threat Models', 'Risk Assessment', 'Compliance Frameworks']
    },
    {
      title: 'Quantum Education & Training',
      description: 'Comprehensive quantum computing education for teams and organizations.',
      icon: '🎓',
      price: 'Starting at $5,000/course',
      features: ['Quantum fundamentals', 'Programming workshops', 'Algorithm development', 'Hardware understanding', 'Certification'],
      benefits: ['Build quantum expertise', 'Accelerate adoption', 'Reduce learning curve'],
      marketPrice: '$8,000-20,000/course',
      category: 'Education',
      technologies: ['Quantum Theory', 'Programming Languages', 'Hardware Platforms', 'Algorithm Design', 'Best Practices']
    },
    {
      title: 'Quantum Consulting & Strategy',
      description: 'Strategic guidance for quantum computing adoption and implementation.',
      icon: '💡',
      price: 'Starting at $500/hour',
      features: ['Technology assessment', 'ROI analysis', 'Implementation roadmap', 'Vendor evaluation', 'Risk management'],
      benefits: ['Make informed decisions', 'Optimize quantum investments', 'Minimize implementation risks'],
      marketPrice: '$800-1,500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Risk Analysis', 'ROI Modeling', 'Vendor Management']
    }
  ];

  const categories = [...new Set(quantumServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Advanced quantum computing services including algorithm development, cryptography, machine learning, and optimization solutions." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, quantum optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Quantum Computing Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Harness the power of quantum computing for exponential computational advantages
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Explore Quantum Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Schedule Consultation
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
                Leading quantum computing expertise with proven track record in enterprise applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Experts</h3>
                <p className="text-gray-600">PhD-level quantum physicists and algorithm specialists</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exponential Speedup</h3>
                <p className="text-gray-600">Solve complex problems exponentially faster than classical computers</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Proof Security</h3>
                <p className="text-gray-600">Quantum-resistant cryptography and unbreakable encryption</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successful quantum implementations across multiple industries</p>
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
                  Advanced {category.toLowerCase()} solutions powered by cutting-edge quantum technology
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
                          <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
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
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
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
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-lg">
                <Atom className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Algorithms</h3>
                <p className="text-gray-600">Custom quantum algorithms for optimization, search, and simulation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg">
                <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Cryptography</h3>
                <p className="text-gray-600">Unbreakable encryption and quantum key distribution</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Machine Learning</h3>
                <p className="text-gray-600">Quantum-enhanced ML algorithms and neural networks</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Optimization</h3>
                <p className="text-gray-600">Solving complex optimization problems with quantum advantage</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Simulation</h3>
                <p className="text-gray-600">Molecular and material simulation for research and development</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <BarChart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Analytics</h3>
                <p className="text-gray-600">Advanced quantum data analysis and pattern recognition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our quantum computing experts for a free consultation and custom quantum strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingPage;