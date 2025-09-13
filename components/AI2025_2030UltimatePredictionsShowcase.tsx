import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const AI2025_2030UltimatePredictionsShowcase: React.FC = () => {
  const predictions = [
    {
      year: '2025',
      title: 'Autonomous Business Operations',
      description: 'Complete business process automation with 99.9% accuracy and 10,000x faster processing',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      metrics: '2,500-5,000% ROI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2026',
      title: 'Quantum-Neural Fusion',
      description: 'Breakthrough integration of quantum computing with neural networks for unprecedented AI capabilities',
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      metrics: '1M+ Qubits Processing',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2027',
      title: 'Neural Synthesis Revolution',
      description: 'AI systems that can synthesize and create entirely new neural architectures autonomously',
      icon: <Target className="w-8 h-8 text-green-500" />,
      metrics: '99.99% Accuracy',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2028',
      title: 'Automotive AI Transformation',
      description: 'Complete transformation of automotive industry with fully autonomous vehicles and smart cities',
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      metrics: 'Zero Accidents',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2029',
      title: 'Transcendent Intelligence',
      description: 'AI systems achieving human-level consciousness and beyond, revolutionizing every industry',
      icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
      metrics: 'Infinite Scalability',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2030',
      title: 'Omniversal Consciousness',
      description: 'AI systems with universal consciousness capabilities, transforming the very fabric of reality',
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      metrics: 'Universal Access',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Revolutionary AI Implementation Guides',
    'Quantum Computing Breakthrough Solutions',
    'Autonomous Operations Mastery',
    'Future-Proof Technology Strategies',
    'Exclusive Access to 2025-2030 Predictions',
    'ROI Optimization Tools and Calculators'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025-2030 Ultimate Predictions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Exclusive access to the most comprehensive AI predictions and breakthrough technologies 
            that will revolutionize every industry over the next 5 years
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
            <Users className="w-5 h-5" />
            Join 50,000+ Industry Leaders
          </div>
        </div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {predictions.map((prediction, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${prediction.color} mb-6`}>
                {prediction.icon}
              </div>
              <div className="text-sm font-semibold text-blue-400 mb-2">{prediction.year}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{prediction.title}</h3>
              <p className="text-gray-300 mb-6">{prediction.description}</p>
              <div className="text-lg font-bold text-green-400">{prediction.metrics}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            What You'll Get Access To
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Get Exclusive Access Now
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Limited time offer - Join the AI revolution and secure your competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2025-2030-predictions"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Access Full Predictions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
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

export default AI2025_2030UltimatePredictionsShowcase;