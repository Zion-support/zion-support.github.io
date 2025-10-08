import React from 'react';
import { CheckCircle, ArrowRight, Star, Zap } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed for your specific optimization problems and computational challenges.',
      features: [
        'Custom Algorithm Design',
        'Quantum Optimization',
        'Performance Analysis',
        'Implementation Support'
      ],
      price: 'Starting at $5,000/month'
    },
    {
      title: 'Quantum Security Solutions',
      description: 'Next-generation cryptographic solutions using quantum key distribution and post-quantum cryptography.',
      features: [
        'Quantum Key Distribution',
        'Post-Quantum Cryptography',
        'Security Audits',
        'Implementation Guidance'
      ],
      price: 'Starting at $3,500/month'
    },
    {
      title: 'Quantum Simulation',
      description: 'Advanced quantum simulations for molecular modeling, material science, and complex system analysis.',
      features: [
        'Molecular Modeling',
        'Material Science Simulations',
        'Complex System Analysis',
        'Research Support'
      ],
      price: 'Starting at $4,000/month'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for superior pattern recognition and data processing.',
      features: [
        'Quantum Neural Networks',
        'Quantum Feature Maps',
        'Hybrid Classical-Quantum Models',
        'Performance Optimization'
      ],
      price: 'Starting at $4,500/month'
    }
  ];

  const quantumApplications = [
    {
      title: 'Financial Modeling',
      description: 'Quantum algorithms for portfolio optimization, risk analysis, and high-frequency trading strategies.',
      icon: '💰'
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum simulations for molecular interactions and pharmaceutical research acceleration.',
      icon: '🧬'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Quantum optimization for complex logistics, routing, and resource allocation problems.',
      icon: '🚚'
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced quantum simulations for climate prediction and environmental impact analysis.',
      icon: '🌍'
    },
    {
      title: 'Cryptography',
      description: 'Quantum-resistant encryption and secure communication protocols for future-proof security.',
      icon: '🔐'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Quantum-enhanced AI algorithms for faster training and superior pattern recognition.',
      icon: '🤖'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full p-4">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Harness the power of quantum computing for revolutionary problem-solving and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge quantum solutions for complex computational challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-600">
              Real-world applications where quantum computing delivers breakthrough results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{application.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quantum Computing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-600">
              Unlock exponential computational power for problems that are intractable for classical computers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exponential Speedup</h3>
              <p className="text-gray-600">
                Solve complex optimization problems exponentially faster than classical computers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Revolutionary Algorithms</h3>
              <p className="text-gray-600">
                Access quantum algorithms that provide solutions impossible with classical computing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Proof Security</h3>
              <p className="text-gray-600">
                Implement quantum-resistant cryptography to protect against future threats
              </p>
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
            Contact our quantum computing experts for a consultation on how quantum solutions can transform your business
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
  );
};

export default QuantumComputingPage;