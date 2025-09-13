import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Cpu, Zap, Shield, Database, Globe, Brain, Target, TrendingUp, Users } from 'lucide-react';

const QuantumComputingBreakthroughShowcase2025: React.FC = () => {
  const breakthroughs = [
    {
      title: 'Quantum Supremacy Achieved',
      description: 'Breakthrough quantum processors that outperform classical computers by 10^15 times',
      icon: Atom,
      impact: 'Revolutionary',
      timeline: 'Q2 2025',
      features: [
        '1,000+ qubit quantum processors',
        'Quantum error correction at scale',
        'Room temperature operation',
        'Commercial quantum cloud access'
      ],
      applications: [
        'Drug discovery acceleration',
        'Financial modeling optimization',
        'Climate change simulation',
        'Cryptography revolution'
      ]
    },
    {
      title: 'Quantum-Neural Hybrid Systems',
      description: 'Revolutionary integration of quantum computing with neural networks for unprecedented AI capabilities',
      icon: Brain,
      impact: 'Transformative',
      timeline: 'Q3 2025',
      features: [
        'Quantum-enhanced machine learning',
        'Exponential pattern recognition',
        'Quantum neural networks',
        'Hybrid optimization algorithms'
      ],
      applications: [
        'Autonomous vehicle navigation',
        'Medical diagnosis systems',
        'Predictive analytics',
        'Creative AI generation'
      ]
    },
    {
      title: 'Quantum Internet Infrastructure',
      description: 'Global quantum communication network enabling unhackable, instant data transmission',
      icon: Globe,
      impact: 'Paradigm-Shifting',
      timeline: 'Q4 2025',
      features: [
        'Quantum entanglement networks',
        'Unhackable communication',
        'Instant global data transfer',
        'Quantum teleportation protocols'
      ],
      applications: [
        'Secure government communications',
        'Financial transaction security',
        'Medical data privacy',
        'Military defense systems'
      ]
    },
    {
      title: 'Quantum Cryptography Revolution',
      description: 'Unbreakable encryption systems that will make current security obsolete',
      icon: Shield,
      impact: 'Critical',
      timeline: 'Q1 2026',
      features: [
        'Quantum key distribution',
        'Unbreakable encryption',
        'Quantum random number generation',
        'Post-quantum cryptography'
      ],
      applications: [
        'Banking security systems',
        'Government data protection',
        'Personal privacy enhancement',
        'IoT device security'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Exponential Processing Power',
      description: 'Quantum computers solve problems in seconds that would take classical computers millennia',
      stat: '10^15x Faster'
    },
    {
      icon: Database,
      title: 'Unlimited Data Processing',
      description: 'Process massive datasets with quantum parallelism and superposition',
      stat: '∞ Data Capacity'
    },
    {
      icon: Target,
      title: 'Perfect Optimization',
      description: 'Find optimal solutions to complex problems with quantum algorithms',
      stat: '100% Optimal'
    },
    {
      icon: Users,
      title: 'Global Impact',
      description: 'Transform every industry and aspect of human civilization',
      stat: '8B+ People'
    }
  ];

  const industries = [
    { name: 'Healthcare', impact: 'Revolutionary drug discovery and personalized medicine' },
    { name: 'Finance', impact: 'Quantum risk modeling and fraud detection' },
    { name: 'Energy', impact: 'Fusion energy optimization and climate solutions' },
    { name: 'Transportation', impact: 'Autonomous vehicle optimization and traffic management' },
    { name: 'Manufacturing', impact: 'Supply chain optimization and quality control' },
    { name: 'Research', impact: 'Scientific discovery acceleration and simulation' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing Breakthroughs 2025
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum technologies that will transform every aspect of computing and human civilization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/quantum-computing-2025" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Quantum Solutions
            </Link>
            <Link 
              to="/quantum-roi-calculator" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Calculate Quantum ROI
            </Link>
          </div>
        </div>

        {/* Breakthroughs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {breakthroughs.map((breakthrough, index) => {
            const IconComponent = breakthrough.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-xl mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {breakthrough.impact}
                      </span>
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {breakthrough.timeline}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {breakthrough.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {breakthrough.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {breakthrough.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                    <ul className="space-y-2">
                      {breakthrough.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Revolutionary Quantum Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-2xl font-bold text-indigo-400">{benefit.stat}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industry Impact */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Transformation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-3">{industry.name}</h4>
                <p className="text-gray-300">{industry.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready for the Quantum Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and transform your organization with unprecedented computational power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/quantum-computing-2025" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Quantum Solutions
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
            >
              Get Quantum Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughShowcase2025;