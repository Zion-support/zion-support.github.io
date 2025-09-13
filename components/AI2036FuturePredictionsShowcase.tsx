import React from 'react';
import { Link } from 'react-router-dom';

const AI2036FuturePredictionsShowcase = () => {
  const predictions = [
    {
      id: 'quantum-consciousness-2036',
      title: 'Quantum Consciousness Integration',
      description: 'Complete integration of human consciousness with quantum computing systems, enabling instant knowledge transfer and shared experiences',
      probability: '95%',
      impact: 'Revolutionary',
      timeline: '2036-2037',
      category: 'Consciousness Technology',
      image: '/api/placeholder/400/250',
      href: '/blog/ai-2036-quantum-consciousness-integration',
      predictions: [
        'Instant knowledge transfer between humans and AI',
        'Shared consciousness experiences',
        'Quantum-enhanced decision making',
        'Collective intelligence networks'
      ]
    },
    {
      id: 'dimensional-ai-2036',
      title: 'Multi-Dimensional AI Systems',
      description: 'AI systems operating across multiple dimensions simultaneously, processing infinite data streams in parallel universes',
      probability: '88%',
      impact: 'Breakthrough',
      timeline: '2036-2038',
      category: 'Dimensional Computing',
      image: '/api/placeholder/400/250',
      href: '/blog/ai-2036-dimensional-ai-systems',
      predictions: [
        'Parallel universe data processing',
        'Infinite computational capacity',
        'Cross-dimensional problem solving',
        'Reality manipulation capabilities'
      ]
    },
    {
      id: 'temporal-optimization-2036',
      title: 'Temporal Optimization Networks',
      description: 'AI networks that optimize decisions across multiple timelines, predicting and preventing future problems before they occur',
      probability: '92%',
      impact: 'Revolutionary',
      timeline: '2036-2039',
      category: 'Temporal Technology',
      image: '/api/placeholder/400/250',
      href: '/blog/ai-2036-temporal-optimization',
      predictions: [
        'Future problem prevention',
        'Timeline optimization',
        'Causal chain analysis',
        'Temporal decision trees'
      ]
    },
    {
      id: 'reality-synthesis-2036',
      title: 'Perfect Reality Synthesis',
      description: 'AI systems capable of creating perfect synthetic realities indistinguishable from physical reality, enabling infinite virtual worlds',
      probability: '85%',
      impact: 'Breakthrough',
      timeline: '2036-2040',
      category: 'Reality Technology',
      image: '/api/placeholder/400/250',
      href: '/blog/ai-2036-reality-synthesis',
      predictions: [
        'Perfect virtual reality creation',
        'Infinite world generation',
        'Consciousness integration',
        'Reality customization'
      ]
    },
    {
      id: 'autonomous-evolution-2036',
      title: 'Autonomous AI Evolution',
      description: 'AI systems that evolve and improve themselves without human intervention, creating increasingly sophisticated intelligence',
      probability: '90%',
      impact: 'Revolutionary',
      timeline: '2036-2037',
      category: 'Autonomous Systems',
      image: '/api/placeholder/400/250',
      href: '/blog/ai-2036-autonomous-evolution',
      predictions: [
        'Self-improving algorithms',
        'Autonomous capability expansion',
        'Evolutionary intelligence',
        'Self-optimizing systems'
      ]
    },
    {
      id: 'universal-ai-2036',
      title: 'Universal AI Integration',
      description: 'AI systems integrated into every aspect of human life, from personal consciousness to global infrastructure management',
      probability: '94%',
      impact: 'Transformative',
      timeline: '2036-2038',
      category: 'Universal Integration',
      image: '/api/placeholder/400/250',
      href: '/blog/ai-2036-universal-integration',
      predictions: [
        'Personal AI consciousness',
        'Global infrastructure management',
        'Universal decision support',
        'Seamless human-AI integration'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🔮 AI 2036 FUTURE PREDICTIONS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of AI
            <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Predictions for 2036
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Based on advanced predictive models and breakthrough research, these predictions 
            represent the most likely evolution of AI technology in 2036 and beyond.
          </p>
        </div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {predictions.map((prediction, index) => (
            <div
              key={prediction.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Probability Badge */}
              <div className="absolute -top-3 -right-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  {prediction.probability} Probability
                </span>
              </div>

              {/* Impact Badge */}
              <div className="absolute -top-3 -left-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                  {prediction.impact}
                </span>
              </div>

              {/* Image */}
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-4xl">
                  {prediction.category === 'Consciousness Technology' && '🧠'}
                  {prediction.category === 'Dimensional Computing' && '🌌'}
                  {prediction.category === 'Temporal Technology' && '⏰'}
                  {prediction.category === 'Reality Technology' && '🎭'}
                  {prediction.category === 'Autonomous Systems' && '🤖'}
                  {prediction.category === 'Universal Integration' && '🌍'}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 mb-3">
                    {prediction.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                    {prediction.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {prediction.description}
                  </p>
                </div>

                {/* Timeline */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Timeline:</span>
                  <span className="text-cyan-400 font-semibold">{prediction.timeline}</span>
                </div>

                {/* Predictions */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-pink-400">Key Predictions:</h4>
                  <ul className="space-y-1">
                    {prediction.predictions.map((pred, predIndex) => (
                      <li key={predIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                        {pred}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to={prediction.href}
                  className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Prediction →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Our Prediction Methodology
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our predictions are based on advanced AI models, quantum computing simulations, 
              and analysis of current technological trends and breakthrough research.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  AI
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">AI Analysis</h4>
                <p className="text-gray-300 text-sm">
                  Advanced AI models analyze current trends and predict future developments
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  ⚛️
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Quantum Simulation</h4>
                <p className="text-gray-300 text-sm">
                  Quantum computing simulations model complex future scenarios
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  📊
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Trend Analysis</h4>
                <p className="text-gray-300 text-sm">
                  Comprehensive analysis of technological trends and breakthrough research
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-12 border border-pink-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Ahead of the Future
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to our detailed AI 2036 predictions and implementation guides 
            to prepare your organization for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2036-future-predictions"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Predictions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-300"
            >
              Get Future Readiness Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2036FuturePredictionsShowcase;