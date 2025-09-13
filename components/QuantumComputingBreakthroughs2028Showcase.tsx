import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { ArrowRight, Cpu, Zap, Shield, Globe, Database, Network, Atom, Brain, Target } from 'lucide-react';

const QuantumComputingBreakthroughs2028Showcase: React.FC = () => {
  const breakthroughs = [
    {
      title: 'Quantum-Neural Hybrid Processing',
      description: 'Revolutionary integration of quantum computing with neural networks, achieving unprecedented computational power.',
      icon: Brain,
      metrics: {
        speed: '1000x faster than classical',
        qubits: '10,000+ stable qubits',
        accuracy: '99.97% quantum error correction',
        applications: 'Drug discovery, climate modeling, financial optimization'
      },
      status: 'In Development',
      timeline: 'Q3 2028'
    },
    {
      title: 'Quantum Internet Infrastructure',
      description: 'First global quantum internet network enabling ultra-secure communication and distributed quantum computing.',
      icon: Network,
      metrics: {
        security: 'Unbreakable encryption',
        speed: 'Instantaneous global communication',
        nodes: '100+ quantum nodes worldwide',
        applications: 'Secure banking, government communications, IoT security'
      },
      status: 'Pilot Phase',
      timeline: 'Q2 2028'
    },
    {
      title: 'Quantum Machine Learning Acceleration',
      description: 'Quantum algorithms that exponentially speed up machine learning training and inference processes.',
      icon: Cpu,
      metrics: {
        training: '100x faster ML training',
        inference: '1000x faster predictions',
        data: 'Process petabytes in minutes',
        applications: 'AI model training, real-time analytics, pattern recognition'
      },
      status: 'Beta Testing',
      timeline: 'Q1 2028'
    },
    {
      title: 'Quantum Cryptography Revolution',
      description: 'Next-generation quantum cryptography ensuring absolute security for digital communications.',
      icon: Shield,
      metrics: {
        security: 'Quantum-resistant encryption',
        verification: '100% tamper detection',
        keys: 'Unlimited key generation',
        applications: 'Blockchain security, data protection, identity verification'
      },
      status: 'Production Ready',
      timeline: 'Q4 2027'
    }
  ];

  const applications = [
    {
      category: 'Healthcare & Life Sciences',
      icon: Target,
      solutions: [
        'Protein folding simulation',
        'Drug discovery acceleration',
        'Personalized medicine',
        'Cancer treatment optimization'
      ],
      impact: '10x faster drug development'
    },
    {
      category: 'Climate & Environment',
      icon: Globe,
      solutions: [
        'Climate modeling precision',
        'Carbon capture optimization',
        'Renewable energy efficiency',
        'Environmental monitoring'
      ],
      impact: '50% more accurate predictions'
    },
    {
      category: 'Finance & Economics',
      icon: Database,
      solutions: [
        'Risk assessment models',
        'Algorithmic trading',
        'Fraud detection',
        'Portfolio optimization'
      ],
      impact: '99.9% fraud detection accuracy'
    },
    {
      category: 'Space & Aerospace',
      icon: Atom,
      solutions: [
        'Space mission optimization',
        'Satellite constellation management',
        'Interplanetary communication',
        'Space debris tracking'
      ],
      impact: '100x mission efficiency gains'
    }
  ];

  const timeline = [
    {
      quarter: 'Q1 2028',
      milestone: 'Quantum-Neural Integration',
      description: 'First successful quantum-neural hybrid processor',
      progress: 90
    },
    {
      quarter: 'Q2 2028',
      milestone: 'Global Quantum Network',
      description: 'Worldwide quantum internet infrastructure launch',
      progress: 75
    },
    {
      quarter: 'Q3 2028',
      milestone: 'Commercial Quantum ML',
      description: 'Quantum machine learning services available',
      progress: 60
    },
    {
      quarter: 'Q4 2028',
      milestone: 'Quantum AI Ecosystem',
      description: 'Complete quantum-AI development platform',
      progress: 40
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Breakthroughs 2028
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Revolutionary quantum computing technologies that will transform industries and solve humanity's most complex challenges
          </p>
        </div>

        {/* Breakthroughs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {breakthroughs.map((breakthrough, index) => {
            const IconComponent = breakthrough.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <IconComponent className="w-8 h-8 text-indigo-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {breakthrough.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        breakthrough.status === 'Production Ready' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : breakthrough.status === 'Beta Testing'
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {breakthrough.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {breakthrough.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 mb-6">
                    {Object.entries(breakthrough.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-white font-semibold text-right max-w-xs">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-indigo-300 text-sm font-medium">{breakthrough.timeline}</span>
                    <Link
                      to={`/quantum-${breakthrough.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-indigo-300 hover:text-white transition-colors group-hover:translate-x-1 transform duration-200"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Industry Applications & Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 rounded-xl p-6 border border-slate-600/30 hover:border-indigo-500/50 transition-all duration-300 group">
                  <IconComponent className="w-10 h-10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-white mb-3">{app.category}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {app.solutions.map((solution, solIndex) => (
                      <li key={solIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-indigo-600/20 rounded-lg p-3 border border-indigo-500/30">
                    <p className="text-indigo-200 text-sm font-medium">{app.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Timeline */}
        <div className="bg-gradient-to-r from-slate-800/50 to-indigo-800/50 rounded-2xl p-8 border border-indigo-500/30">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Development Timeline
          </h3>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.quarter}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">{item.milestone}</h4>
                  <p className="text-gray-300 mb-3">{item.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white font-medium">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/quantum-computing-breakthroughs-2028"
            className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
          >
            Explore Quantum Breakthroughs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughs2028Showcase;