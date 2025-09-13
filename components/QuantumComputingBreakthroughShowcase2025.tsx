import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Cpu, Zap, Shield, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const QuantumComputingBreakthroughShowcase2025: React.FC = () => {
  const breakthroughs = [
    {
      title: 'Quantum Supremacy Achieved',
      description: 'Breakthrough quantum processors that outperform classical computers by 100 million times.',
      features: [
        '100Mx faster than classical computers',
        'Exponential problem-solving capability',
        'Revolutionary optimization algorithms',
        'Real-time complex calculations'
      ],
      icon: Atom,
      color: 'from-blue-600 to-cyan-600',
      impact: 'Revolutionary'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'AI systems powered by quantum computing for unprecedented learning capabilities.',
      features: [
        'Quantum neural networks',
        'Exponential learning speed',
        'Pattern recognition mastery',
        'Predictive analytics revolution'
      ],
      icon: Cpu,
      color: 'from-cyan-600 to-teal-600',
      impact: 'Transformative'
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable security systems using quantum principles for ultimate data protection.',
      features: [
        'Unbreakable encryption',
        'Quantum key distribution',
        'Perfect security protocols',
        'Future-proof protection'
      ],
      icon: Shield,
      color: 'from-teal-600 to-green-600',
      impact: 'Critical'
    },
    {
      title: 'Quantum Optimization',
      description: 'Revolutionary optimization algorithms that solve complex problems in seconds.',
      features: [
        'Complex problem solving',
        'Resource optimization',
        'Supply chain revolution',
        'Logistics transformation'
      ],
      icon: Target,
      color: 'from-green-600 to-emerald-600',
      impact: 'Game-changing'
    }
  ];

  const applications = [
    {
      industry: 'Healthcare',
      description: 'Drug discovery accelerated by 1000x with quantum molecular simulation',
      benefits: ['Faster drug development', 'Personalized medicine', 'Disease prediction', 'Treatment optimization']
    },
    {
      industry: 'Finance',
      description: 'Quantum algorithms for risk analysis and portfolio optimization',
      benefits: ['Real-time risk assessment', 'Optimal trading strategies', 'Fraud detection', 'Market prediction']
    },
    {
      industry: 'Manufacturing',
      description: 'Quantum-powered supply chain optimization and quality control',
      benefits: ['Supply chain optimization', 'Quality prediction', 'Resource allocation', 'Waste reduction']
    },
    {
      industry: 'Energy',
      description: 'Quantum simulation for renewable energy optimization and storage',
      benefits: ['Energy optimization', 'Storage solutions', 'Grid management', 'Carbon reduction']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Breakthroughs 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary quantum computing technologies that will transform every industry and solve humanity's greatest challenges
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ⚛️ 100Mx Performance
            </span>
            <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🧠 Quantum AI
            </span>
            <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🔒 Unbreakable Security
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {breakthroughs.map((breakthrough, index) => {
            const IconComponent = breakthrough.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${breakthrough.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                    {breakthrough.impact} Impact
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                    {breakthrough.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {breakthrough.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {breakthrough.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/quantum-${breakthrough.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-3">{app.industry}</h4>
                <p className="text-gray-300 mb-4 text-sm">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for the Quantum Revolution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum computing revolution and transform your business with unprecedented computational power
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-solutions"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/quantum-implementation-guide"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              >
                Implementation Guide
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughShowcase2025;