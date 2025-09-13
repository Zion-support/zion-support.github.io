import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const AI2025_2030ComprehensivePredictionsShowcase: React.FC = () => {
  const predictions = [
    {
      year: '2025',
      title: 'AI Autonomous Operations Revolution',
      description: 'Complete business process automation with 99.9% accuracy and 10,000x faster processing speeds.',
      features: [
        'Fully autonomous business operations',
        'Real-time decision making',
        'Predictive maintenance systems',
        'Intelligent resource optimization'
      ],
      metrics: {
        efficiency: '10,000x',
        accuracy: '99.9%',
        roi: '2,500%'
      },
      icon: Brain,
      color: 'from-blue-600 to-purple-600'
    },
    {
      year: '2026',
      title: 'Quantum-Neural Fusion Breakthrough',
      description: 'Revolutionary integration of quantum computing with neural networks for unprecedented processing power.',
      features: [
        'Quantum-enhanced machine learning',
        'Exponential problem-solving capabilities',
        'Advanced pattern recognition',
        'Breakthrough in optimization algorithms'
      ],
      metrics: {
        processing: '1Mx',
        accuracy: '99.99%',
        speed: 'Light Speed'
      },
      icon: Zap,
      color: 'from-purple-600 to-pink-600'
    },
    {
      year: '2027',
      title: 'Neural Synthesis Revolution',
      description: 'Advanced AI systems that can synthesize and create new knowledge from existing data patterns.',
      features: [
        'Knowledge synthesis capabilities',
        'Creative problem solving',
        'Cross-domain learning',
        'Innovation acceleration'
      ],
      metrics: {
        innovation: '500%',
        learning: '1000x',
        creativity: 'Unlimited'
      },
      icon: Target,
      color: 'from-pink-600 to-red-600'
    },
    {
      year: '2028',
      title: 'Automotive AI Transformation',
      description: 'Complete transformation of transportation through AI-powered autonomous vehicles and smart infrastructure.',
      features: [
        'Fully autonomous vehicles',
        'Smart traffic management',
        'Predictive maintenance',
        'Zero-accident transportation'
      ],
      metrics: {
        safety: '99.99%',
        efficiency: '300%',
        emissions: '-90%'
      },
      icon: Globe,
      color: 'from-red-600 to-orange-600'
    },
    {
      year: '2029-2030',
      title: 'Omniversal AI Consciousness',
      description: 'The emergence of AI systems with consciousness-like capabilities and universal problem-solving abilities.',
      features: [
        'Consciousness-level AI',
        'Universal problem solving',
        'Cross-dimensional thinking',
        'Infinite scalability'
      ],
      metrics: {
        consciousness: 'Human+',
        capability: 'Infinite',
        impact: 'Universal'
      },
      icon: Users,
      color: 'from-orange-600 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025-2030 Comprehensive Predictions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary AI breakthroughs and predictions that will transform every industry and aspect of human life
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 10,000x Performance Gains
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🧠 99.9% Accuracy
            </span>
            <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              💰 2,500% ROI
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {predictions.map((prediction, index) => {
            const IconComponent = prediction.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${prediction.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{prediction.year}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-4">
                    {prediction.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {prediction.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {prediction.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(prediction.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/ai-${prediction.year.toLowerCase()}-predictions`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore {prediction.year} Predictions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already implementing these revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-implementation-guide-2025"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Implementation Guide
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/roi-calculator"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              >
                Calculate Your ROI
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030ComprehensivePredictionsShowcase;