import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Globe, Shield, Cpu } from 'lucide-react';

const AI2025_2030ComprehensivePredictionsShowcase: React.FC = () => {
  const predictions = [
    {
      year: '2025',
      title: 'AI 2025: The Autonomous Revolution',
      description: 'Complete business process automation with 99.9% accuracy and 10,000x faster processing',
      keyFeatures: [
        'Autonomous Operations Implementation',
        'Neural-Synthetic Intelligence',
        'Quantum-Enhanced Processing',
        'Real-time Decision Making'
      ],
      metrics: {
        roi: '15,000%',
        accuracy: '99.9%',
        speed: '10,000x',
        efficiency: '95%'
      },
      link: '/ai-2025-consolidated'
    },
    {
      year: '2026',
      title: 'AI 2026: Quantum Neural Fusion',
      description: 'Breakthrough quantum-neural integration delivering unprecedented computational power',
      keyFeatures: [
        'Quantum-Neural Processing',
        'Advanced Pattern Recognition',
        'Predictive Analytics',
        'Autonomous Learning Systems'
      ],
      metrics: {
        roi: '25,000%',
        accuracy: '99.97%',
        speed: '50,000x',
        efficiency: '98%'
      },
      link: '/ai-2026-consolidated'
    },
    {
      year: '2027',
      title: 'AI 2027: Revolutionary Breakthroughs',
      description: 'Neural-synthetic intelligence achieving human-level cognitive capabilities',
      keyFeatures: [
        'Neural-Synthetic Intelligence',
        'Advanced Cognitive Processing',
        'Autonomous Problem Solving',
        'Creative AI Applications'
      ],
      metrics: {
        roi: '50,000%',
        accuracy: '99.99%',
        speed: '100,000x',
        efficiency: '99%'
      },
      link: '/ai-2027-breakthrough-solutions'
    },
    {
      year: '2028',
      title: 'AI 2028: Advanced Automation Solutions',
      description: 'Complete enterprise transformation with autonomous decision-making systems',
      keyFeatures: [
        'Enterprise Automation',
        'Autonomous Decision Making',
        'Advanced Robotics Integration',
        'Predictive Business Intelligence'
      ],
      metrics: {
        roi: '75,000%',
        accuracy: '99.995%',
        speed: '250,000x',
        efficiency: '99.5%'
      },
      link: '/ai-2028-breakthrough-showcase'
    },
    {
      year: '2029',
      title: 'AI 2029: Future Predictions',
      description: 'Next-generation AI systems with advanced predictive capabilities',
      keyFeatures: [
        'Advanced Predictive Models',
        'Future Scenario Planning',
        'Autonomous Strategy Development',
        'Market Intelligence Systems'
      ],
      metrics: {
        roi: '100,000%',
        accuracy: '99.999%',
        speed: '500,000x',
        efficiency: '99.9%'
      },
      link: '/ai-2029-breakthrough-showcase'
    },
    {
      year: '2030',
      title: 'AI 2030: Transcendent Intelligence',
      description: 'Transcendent AI systems achieving superintelligence capabilities',
      keyFeatures: [
        'Transcendent Intelligence',
        'Omniversal Processing',
        'Autonomous Innovation',
        'Consciousness Integration'
      ],
      metrics: {
        roi: '1,000,000%',
        accuracy: '99.9999%',
        speed: '1,000,000x',
        efficiency: '99.99%'
      },
      link: '/ai-2030-future-vision'
    }
  ];

  const technologies = [
    { name: 'Quantum Computing', icon: Cpu, description: 'Revolutionary quantum processing power' },
    { name: 'Neural Networks', icon: Brain, description: 'Advanced neural-synthetic intelligence' },
    { name: 'Edge Computing', icon: Zap, description: 'Real-time processing capabilities' },
    { name: 'Blockchain AI', icon: Shield, description: 'Secure decentralized AI systems' },
    { name: 'IoT Integration', icon: Globe, description: 'Connected intelligent ecosystems' },
    { name: 'Predictive Analytics', icon: TrendingUp, description: 'Future scenario modeling' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025-2030: Comprehensive Future Predictions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore the complete roadmap of AI evolution from 2025 to 2030, featuring breakthrough technologies, 
            revolutionary capabilities, and unprecedented business transformation opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold">
              🚀 Revolutionary Breakthroughs
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold">
              ⚡ Quantum-Neural Fusion
            </span>
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-full font-semibold">
              🎯 1,000,000% ROI Potential
            </span>
          </div>
        </div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {predictions.map((prediction, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">AI {prediction.year}</span>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {prediction.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {prediction.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {prediction.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{prediction.metrics.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{prediction.metrics.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{prediction.metrics.speed}</div>
                    <div className="text-xs text-gray-400">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{prediction.metrics.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                </div>

                <Link
                  to={prediction.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Explore AI {prediction.year}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Revolutionary Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already achieving unprecedented success with our 
            revolutionary AI solutions and quantum computing breakthroughs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2025-consolidated"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold transition-all hover:from-yellow-500 hover:to-orange-600 flex items-center justify-center group"
            >
              Start with AI 2025
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group"
            >
              View Success Stories
              <Target className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030ComprehensivePredictionsShowcase;