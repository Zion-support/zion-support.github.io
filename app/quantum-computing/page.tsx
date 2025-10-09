import React from 'react';
import { CheckCircle, Zap, Cpu, Shield, Atom, Brain } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      name: 'Quantum Algorithm Development',
      price: '$5,000/month',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning',
      features: [
        'Custom quantum algorithms',
        'Optimization problems',
        'Cryptographic solutions',
        'Quantum machine learning',
        'Performance optimization'
      ],
      icon: Cpu,
      benefits: [
        'Exponential speedup for specific problems',
        'Breakthrough optimization results',
        'Future-proof cryptographic security',
        'Revolutionary ML capabilities'
      ]
    },
    {
      name: 'Quantum Security Solutions',
      price: '$3,500/month',
      description: 'Post-quantum cryptography and quantum-safe security implementations',
      features: [
        'Post-quantum cryptography',
        'Quantum key distribution',
        'Security assessment',
        'Migration planning',
        'Compliance support'
      ],
      icon: Shield,
      benefits: [
        'Protection against quantum attacks',
        'Future-proof security',
        'Regulatory compliance',
        'Risk mitigation'
      ]
    },
    {
      name: 'Quantum Simulation Platform',
      price: '$4,200/month',
      description: 'Quantum simulation services for materials science, chemistry, and physics',
      features: [
        'Molecular simulation',
        'Material discovery',
        'Chemical reaction modeling',
        'Physical system simulation',
        'Research collaboration'
      ],
      icon: Atom,
      benefits: [
        'Accelerate research and development',
        'Discover new materials',
        'Optimize chemical processes',
        'Reduce experimental costs'
      ]
    },
    {
      name: 'Quantum Machine Learning',
      price: '$4,800/month',
      description: 'Quantum-enhanced machine learning algorithms and implementations',
      features: [
        'Quantum neural networks',
        'Quantum feature mapping',
        'Quantum optimization',
        'Hybrid classical-quantum models',
        'Performance benchmarking'
      ],
      icon: Brain,
      benefits: [
        'Exponential computational advantage',
        'Novel learning capabilities',
        'Enhanced pattern recognition',
        'Breakthrough AI performance'
      ]
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization, risk analysis, and fraud detection using quantum algorithms',
      benefits: ['300% faster optimization', '99.9% fraud detection', 'Real-time risk assessment']
    },
    {
      title: 'Pharmaceutical Research',
      description: 'Drug discovery and molecular simulation for faster, more effective treatments',
      benefits: ['50% faster drug discovery', '90% cost reduction', 'Higher success rates']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Complex logistics optimization and route planning for maximum efficiency',
      benefits: ['40% cost reduction', '60% faster delivery', 'Optimized resource allocation']
    },
    {
      title: 'Climate Modeling',
      description: 'Advanced climate simulation and environmental impact analysis',
      benefits: ['Accurate predictions', 'Policy optimization', 'Environmental protection']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of quantum computing to solve complex problems that are impossible for classical computers. 
            Our quantum solutions deliver exponential speedups and breakthrough capabilities.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-gray-300">Speed Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Quantum Algorithms</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Quantum Access</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quantum Computing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quantum Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
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

        {/* Technology Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quantum Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Hardware</h3>
              <p className="text-gray-300">Access to leading quantum computers including IBM, Google, and Rigetti systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Software</h3>
              <p className="text-gray-300">Custom quantum algorithms and optimization frameworks for maximum performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Security</h3>
              <p className="text-gray-300">Post-quantum cryptography and quantum-safe security implementations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Explore Quantum Computing?
          </h2>
          <p className="text-purple-100 mb-6">
            Discover how quantum computing can revolutionize your business operations and solve previously impossible problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Quantum Consultation
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Request Quantum Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingPage;