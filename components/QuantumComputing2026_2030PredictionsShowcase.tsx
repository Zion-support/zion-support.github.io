import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Shield, Globe, Zap, Target, TrendingUp } from 'lucide-react';

const QuantumComputing2026_2030PredictionsShowcase: React.FC = () => {
  const quantumPredictions = [
    {
      id: 'quantum-supremacy-2026',
      title: 'Quantum Supremacy Achievement',
      description: 'Breakthrough in quantum computing achieving computational supremacy over classical computers in specific problem domains.',
      year: '2026',
      category: 'Quantum Supremacy',
      readTime: '12 min read',
      impact: 'Revolutionary',
      predictions: {
        qubits: '1000+',
        coherence: '100ms',
        errorRate: '0.01%',
        applications: '50+'
      },
      tags: ['Quantum Supremacy', 'Error Correction', 'Quantum Algorithms', '2026 Predictions']
    },
    {
      id: 'error-corrected-quantum-2027',
      title: 'Error-Corrected Quantum Computers',
      description: 'First commercially viable error-corrected quantum computers with practical applications in cryptography and optimization.',
      year: '2027',
      category: 'Error Correction',
      readTime: '15 min read',
      impact: 'Transformative',
      predictions: {
        qubits: '10,000+',
        coherence: '1s+',
        errorRate: '0.001%',
        applications: '200+'
      },
      tags: ['Error Correction', 'Quantum Cryptography', 'Optimization', '2027 Breakthrough']
    },
    {
      id: 'quantum-internet-2028',
      title: 'Quantum Internet Infrastructure',
      description: 'Global quantum internet network enabling secure quantum communication and distributed quantum computing.',
      year: '2028',
      category: 'Quantum Internet',
      readTime: '18 min read',
      impact: 'Revolutionary',
      predictions: {
        coverage: 'Global',
        speed: 'Instant',
        security: 'Unbreakable',
        nodes: '1000+'
      },
      tags: ['Quantum Internet', 'Quantum Communication', 'Global Network', '2028 Vision']
    },
    {
      id: 'quantum-ai-fusion-2029',
      title: 'Quantum-AI Fusion Revolution',
      description: 'Seamless integration of quantum computing with artificial intelligence, creating hybrid systems with unprecedented capabilities.',
      year: '2029',
      category: 'Quantum-AI Fusion',
      readTime: '20 min read',
      impact: 'Paradigm Shift',
      predictions: {
        speedup: '1Millionx',
        accuracy: '99.9%',
        applications: '1000+',
        efficiency: '1000x'
      },
      tags: ['Quantum-AI', 'Hybrid Systems', 'Machine Learning', '2029 Revolution']
    },
    {
      id: 'quantum-singularity-2030',
      title: 'Quantum Singularity Point',
      description: 'Achievement of quantum computational singularity where quantum computers surpass human intelligence in all cognitive tasks.',
      year: '2030',
      category: 'Quantum Singularity',
      readTime: '25 min read',
      impact: 'Existential',
      predictions: {
        intelligence: 'Superhuman',
        processing: 'Infinite',
        applications: 'Universal',
        impact: 'Global'
      },
      tags: ['Quantum Singularity', 'Superintelligence', 'Universal Computing', '2030 Vision']
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary': return 'from-red-600 to-pink-600';
      case 'Transformative': return 'from-blue-600 to-cyan-600';
      case 'Paradigm Shift': return 'from-purple-600 to-indigo-600';
      case 'Existential': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Supremacy': return <Atom className="w-6 h-6" />;
      case 'Error Correction': return <Shield className="w-6 h-6" />;
      case 'Quantum Internet': return <Globe className="w-6 h-6" />;
      case 'Quantum-AI Fusion': return <Cpu className="w-6 h-6" />;
      case 'Quantum Singularity': return <Zap className="w-6 h-6" />;
      default: return <Target className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing 2026-2030 Predictions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Quantum Revolution Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our comprehensive predictions for quantum computing breakthroughs from 2026 to 2030, 
            including quantum supremacy, error correction, quantum internet, and the path to quantum singularity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 via-purple-600 to-yellow-600 rounded-full"></div>

          {/* Predictions */}
          <div className="space-y-16">
            {quantumPredictions.map((prediction, index) => (
              <div key={prediction.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                  {prediction.year.slice(-2)}
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getImpactColor(prediction.impact)}`}>
                          {getCategoryIcon(prediction.category)}
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium">
                            {prediction.category}
                          </span>
                          <span className="ml-2 px-3 py-1 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-300 rounded-full text-sm font-medium">
                            {prediction.impact}
                          </span>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{prediction.readTime}</span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                      {prediction.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {prediction.description}
                    </p>

                    {/* Predictions Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {Object.entries(prediction.predictions).map(([key, value]) => (
                        <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-xl font-bold text-indigo-400 mb-1">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {prediction.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Link 
                      to={`/quantum-predictions/${prediction.id}`}
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Prediction
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Exponential Growth</h4>
              <p className="text-gray-300 text-sm">Quantum computing capabilities will grow exponentially, doubling every 12-18 months.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Security Revolution</h4>
              <p className="text-gray-300 text-sm">Quantum cryptography will make current encryption methods obsolete, requiring complete security overhaul.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Global Impact</h4>
              <p className="text-gray-300 text-sm">Quantum computing will transform every industry, from healthcare to finance to space exploration.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Prepare for the Quantum Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get ahead of the quantum revolution with our comprehensive implementation guides and strategic planning resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quantum-implementation-guide"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Guide
              </Link>
              <Link 
                to="/quantum-consulting"
                className="border border-white/30 hover:border-indigo-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2026_2030PredictionsShowcase;