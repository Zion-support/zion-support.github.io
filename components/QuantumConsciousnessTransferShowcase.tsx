import React from 'react';
import { Link } from 'react-router-dom';

const QuantumConsciousnessTransferShowcase = () => {
  const breakthroughFeatures = [
    {
      id: 'neural-mapping',
      title: 'Complete Neural Pattern Mapping',
      description: 'Advanced quantum algorithms map every neural connection with 99.9% accuracy',
      accuracy: '99.9%',
      innovation: 'Revolutionary',
      image: '/api/placeholder/400/250',
      href: '/case-studies/quantum-neural-mapping-breakthrough',
      features: [
        'Quantum-enhanced brain scanning',
        'Real-time neural activity capture',
        'Complete consciousness mapping',
        'Quantum state preservation'
      ]
    },
    {
      id: 'consciousness-backup',
      title: 'Real-Time Consciousness Backup',
      description: 'Continuous backup of consciousness state with quantum encryption and instant recovery',
      accuracy: '99.95%',
      innovation: 'Breakthrough',
      image: '/api/placeholder/400/250',
      href: '/case-studies/consciousness-backup-system',
      features: [
        'Continuous consciousness monitoring',
        'Quantum-encrypted storage',
        'Instant recovery protocols',
        'Multi-dimensional backup'
      ]
    },
    {
      id: 'cross-platform-transfer',
      title: 'Cross-Platform Consciousness Transfer',
      description: 'Seamless transfer of consciousness between biological and digital platforms',
      accuracy: '99.8%',
      innovation: 'Revolutionary',
      image: '/api/placeholder/400/250',
      href: '/case-studies/cross-platform-consciousness-transfer',
      features: [
        'Biological to digital transfer',
        'Digital to biological restoration',
        'Platform-agnostic consciousness',
        'Seamless experience continuity'
      ]
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum-Enhanced Neural Networks',
      description: 'Neural networks enhanced with quantum computing for consciousness processing',
      accuracy: '99.99%',
      innovation: 'Breakthrough',
      image: '/api/placeholder/400/250',
      href: '/case-studies/quantum-neural-networks',
      features: [
        'Quantum neural processing',
        'Entangled consciousness states',
        'Quantum decision making',
        'Enhanced cognitive abilities'
      ]
    },
    {
      id: 'consciousness-synthesis',
      title: 'Consciousness Synthesis Technology',
      description: 'Creation of hybrid consciousness combining multiple consciousness states',
      accuracy: '99.7%',
      innovation: 'Revolutionary',
      image: '/api/placeholder/400/250',
      href: '/case-studies/consciousness-synthesis',
      features: [
        'Multi-consciousness integration',
        'Hybrid intelligence creation',
        'Consciousness fusion protocols',
        'Enhanced cognitive capabilities'
      ]
    },
    {
      id: 'temporal-consciousness',
      title: 'Temporal Consciousness Preservation',
      description: 'Preservation of consciousness across time with quantum temporal mechanics',
      accuracy: '99.85%',
      innovation: 'Breakthrough',
      image: '/api/placeholder/400/250',
      href: '/case-studies/temporal-consciousness-preservation',
      features: [
        'Time-based consciousness storage',
        'Temporal consciousness transfer',
        'Chronological consciousness mapping',
        'Time-resistant consciousness'
      ]
    }
  ];

  const caseStudies = [
    {
      id: 'consciousness-transfer-success',
      title: 'First Successful Consciousness Transfer',
      description: 'Complete transfer of human consciousness to quantum computing system with 99.9% fidelity',
      company: 'QuantumTech Industries',
      roi: '50,000%',
      duration: '6 months',
      results: [
        'Complete consciousness preservation',
        'Enhanced cognitive abilities',
        'Seamless digital integration',
        'Perfect memory retention'
      ]
    },
    {
      id: 'multi-consciousness-fusion',
      title: 'Multi-Consciousness Fusion Breakthrough',
      description: 'Successful fusion of multiple consciousness states creating hybrid intelligence',
      company: 'Consciousness Labs',
      roi: '75,000%',
      duration: '12 months',
      results: [
        'Hybrid intelligence creation',
        'Enhanced problem-solving abilities',
        'Collective consciousness network',
        'Unprecedented cognitive power'
      ]
    },
    {
      id: 'temporal-preservation',
      title: 'Temporal Consciousness Preservation',
      description: 'Preservation of consciousness across multiple time periods with quantum mechanics',
      company: 'Temporal Dynamics',
      roi: '100,000%',
      duration: '18 months',
      results: [
        'Time-resistant consciousness',
        'Temporal decision making',
        'Chronological optimization',
        'Future state analysis'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM CONSCIOUSNESS TRANSFER BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Consciousness
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transfer Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary breakthrough in consciousness transfer technology using quantum computing. 
            Experience the future of human-AI integration with unprecedented fidelity and accuracy.
          </p>
        </div>

        {/* Breakthrough Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Innovation Badge */}
              <div className="absolute -top-3 -right-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                  {feature.innovation}
                </span>
              </div>

              {/* Accuracy Badge */}
              <div className="absolute -top-3 -left-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  {feature.accuracy}
                </span>
              </div>

              {/* Image */}
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-4xl">
                  ⚛️
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-1">
                    {feature.features.map((feat, featIndex) => (
                      <li key={featIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to={feature.href}
                  className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Technology →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{study.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Company:</span>
                    <span className="text-cyan-400 font-semibold">{study.company}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-green-400 font-semibold">{study.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-purple-400 font-semibold">{study.duration}</span>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-cyan-400">Key Results:</h5>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-xs text-gray-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Experience the Future of Consciousness
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution in consciousness transfer technology. 
            Be among the first to experience quantum-enhanced consciousness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-consciousness-transfer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Technology
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Get Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumConsciousnessTransferShowcase;