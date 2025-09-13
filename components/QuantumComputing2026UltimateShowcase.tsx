import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Network, Shield, Zap, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';

const QuantumComputing2026UltimateShowcase: React.FC = () => {
  const quantumFeatures = [
    {
      title: 'Error-Corrected Quantum Computers',
      description: 'Breakthrough quantum systems with 99.9% error correction rates',
      icon: Atom,
      benefits: [
        '1000+ qubit systems',
        '99.9% error correction',
        'Real-world applications',
        'Commercial deployment'
      ],
      status: 'Available Q2 2026'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Revolutionary AI powered by quantum computing principles',
      icon: Cpu,
      benefits: [
        'Exponential speedup',
        'Pattern recognition',
        'Optimization algorithms',
        'Quantum neural networks'
      ],
      status: 'Beta Testing'
    },
    {
      title: 'Quantum Internet Infrastructure',
      description: 'Secure quantum communication networks for global connectivity',
      icon: Network,
      benefits: [
        'Unhackable communication',
        'Quantum key distribution',
        'Global quantum network',
        'Instant data transfer'
      ],
      status: 'Pilot Program'
    },
    {
      title: 'Quantum-AI Hybrid Systems',
      description: 'Integration of quantum computing with artificial intelligence',
      icon: Zap,
      benefits: [
        'Hybrid processing power',
        'Enhanced AI capabilities',
        'Quantum advantage',
        'Seamless integration'
      ],
      status: 'Development Phase'
    }
  ];

  const applications = [
    {
      industry: 'Financial Services',
      useCase: 'Risk Analysis & Trading',
      impact: '10,000x faster portfolio optimization',
      icon: TrendingUp
    },
    {
      industry: 'Healthcare',
      useCase: 'Drug Discovery',
      impact: '90% reduction in discovery time',
      icon: Shield
    },
    {
      industry: 'Logistics',
      useCase: 'Route Optimization',
      impact: '50% cost reduction',
      icon: Network
    },
    {
      industry: 'Cybersecurity',
      useCase: 'Encryption & Security',
      impact: 'Unbreakable quantum encryption',
      icon: Shield
    }
  ];

  const stats = [
    { label: 'Quantum Advantage', value: '10,000x', icon: Zap },
    { label: 'Error Rate', value: '0.01%', icon: CheckCircle },
    { label: 'Processing Speed', value: '1Mx', icon: Clock },
    { label: 'Global Partners', value: '500+', icon: Users }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/20 rounded-full px-6 py-2 mb-6 border border-purple-400/30">
            <Atom className="w-5 h-5 text-purple-300 mr-2" />
            <span className="text-purple-200 font-semibold">Quantum Computing 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Ultimate Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the next generation of quantum computing technology that will revolutionize 
            industries and unlock unprecedented computational power.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600/30 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {quantumFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="inline-flex items-center bg-purple-500/20 rounded-full px-3 py-1 text-sm text-purple-200">
                    {feature.status}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications & Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-500/30 rounded-lg mb-4">
                  <app.icon className="w-5 h-5 text-purple-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{app.industry}</h4>
                <p className="text-purple-200 text-sm mb-3">{app.useCase}</p>
                <p className="text-green-300 text-sm font-medium">{app.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready for Quantum Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and gain a competitive advantage 
            with the most advanced quantum technologies available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Explore Quantum Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2026UltimateShowcase;