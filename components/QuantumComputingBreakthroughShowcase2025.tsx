import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { ArrowRight, Cpu, Zap, Shield, Globe, Brain, Target, TrendingUp } from 'lucide-react';

const QuantumComputingBreakthroughShowcase2025: React.FC = () => {
  const breakthroughs = [
    {
      title: 'Quantum-Neural Processing',
      description: 'Revolutionary quantum-neural integration delivering 50,000x faster processing with 99.97% accuracy',
      features: [
        'Quantum Superposition Processing',
        'Neural Network Optimization',
        'Real-time Quantum Calculations',
        'Advanced Error Correction'
      ],
      metrics: {
        speed: '50,000x',
        accuracy: '99.97%',
        efficiency: '98%',
        power: '1,000x'
      },
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Edge Computing',
      description: 'Distributed quantum processing at the edge for real-time autonomous operations',
      features: [
        'Edge Quantum Processors',
        'Distributed Computing',
        'Real-time Processing',
        'Autonomous Decision Making'
      ],
      metrics: {
        latency: '0.1ms',
        throughput: '1TB/s',
        reliability: '99.9%',
        scalability: 'Unlimited'
      },
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quantum Security Systems',
      description: 'Unbreakable quantum encryption and security protocols for enterprise applications',
      features: [
        'Quantum Key Distribution',
        'Unbreakable Encryption',
        'Quantum Authentication',
        'Secure Communications'
      ],
      metrics: {
        security: '100%',
        encryption: 'Quantum',
        attacks: '0',
        compliance: '100%'
      },
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum AI Integration',
      description: 'Seamless integration of quantum computing with artificial intelligence systems',
      features: [
        'Quantum Machine Learning',
        'Neural Quantum Processing',
        'Advanced Pattern Recognition',
        'Predictive Quantum Analytics'
      ],
      metrics: {
        learning: '1,000x',
        patterns: '99.9%',
        predictions: '95%',
        insights: 'Real-time'
      },
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const applications = [
    {
      industry: 'Financial Services',
      description: 'Quantum-powered trading algorithms and risk analysis',
      benefits: ['Real-time Risk Assessment', 'Algorithmic Trading', 'Fraud Detection', 'Portfolio Optimization'],
      roi: '2,500%'
    },
    {
      industry: 'Healthcare',
      description: 'Quantum-enhanced drug discovery and medical imaging',
      benefits: ['Drug Discovery', 'Medical Imaging', 'Genomic Analysis', 'Treatment Optimization'],
      roi: '5,000%'
    },
    {
      industry: 'Manufacturing',
      description: 'Quantum-optimized production and supply chain management',
      benefits: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance', 'Resource Allocation'],
      roi: '3,000%'
    },
    {
      industry: 'Energy',
      description: 'Quantum computing for renewable energy optimization',
      benefits: ['Energy Grid Optimization', 'Renewable Integration', 'Storage Management', 'Demand Forecasting'],
      roi: '4,000%'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Breakthroughs 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of computing with revolutionary quantum breakthroughs that deliver 
            unprecedented processing power, security, and intelligence capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold">
              ⚡ 50,000x Faster Processing
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold">
              🛡️ Unbreakable Security
            </span>
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-full font-semibold">
              🎯 99.97% Accuracy
            </span>
          </div>
        </div>

        {/* Breakthroughs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {breakthroughs.map((breakthrough, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${breakthrough.color} rounded-full flex items-center justify-center mr-4`}>
                    <breakthrough.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {breakthrough.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {breakthrough.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {breakthrough.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(breakthrough.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications & ROI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{app.industry}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{app.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-green-300 mb-2">Key Benefits:</h5>
                    <ul className="space-y-1">
                      {app.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center">
                          <Target className="w-3 h-3 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">{app.roi}</div>
                    <div className="text-xs text-gray-400">Average ROI</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Quantum Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Quantum Processors</h4>
              <p className="text-xs text-gray-400">Advanced quantum computing units</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Neural Integration</h4>
              <p className="text-xs text-gray-400">Quantum-neural processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Quantum Security</h4>
              <p className="text-xs text-gray-400">Unbreakable encryption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Global Network</h4>
              <p className="text-xs text-gray-400">Distributed quantum computing</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready for Quantum Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and transform your business with 
            unprecedented processing power and security capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-solutions"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-cyan-600 flex items-center justify-center group"
            >
              Explore Quantum Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group"
            >
              View Success Stories
              <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughShowcase2025;