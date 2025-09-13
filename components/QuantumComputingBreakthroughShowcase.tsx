import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Zap, Target, TrendingUp, Users, Globe, Shield, Brain } from 'lucide-react';

const QuantumComputingBreakthroughShowcase = () => {
  const quantumContent = [
    {
      id: 'quantum-ai-optimization-2027',
      title: '⚛️ Quantum-AI Optimization Breakthrough 2027',
      description: 'Revolutionary quantum algorithms achieving 10,000x speedup in complex optimization problems',
      category: 'Quantum Algorithms',
      readTime: '18 min read',
      difficulty: 'Expert',
      roi: '15000%',
      tags: ['Quantum Computing', 'AI Optimization', 'Breakthrough'],
      featured: true,
      new: true
    },
    {
      id: 'quantum-machine-learning',
      title: '🧠 Quantum Machine Learning Revolution',
      description: 'First practical quantum machine learning models delivering unprecedented accuracy and speed',
      category: 'Quantum ML',
      readTime: '22 min read',
      difficulty: 'Advanced',
      roi: '12000%',
      tags: ['Quantum ML', 'Machine Learning', 'Revolution'],
      featured: true,
      new: true
    },
    {
      id: 'quantum-cryptography-2027',
      title: '🔐 Quantum-Safe Cryptography 2027',
      description: 'Next-generation cryptographic systems resistant to quantum attacks and future-proof security',
      category: 'Quantum Security',
      readTime: '16 min read',
      difficulty: 'Advanced',
      roi: '8000%',
      tags: ['Quantum Security', 'Cryptography', 'Future-Proof'],
      featured: true,
      new: true
    },
    {
      id: 'quantum-financial-modeling',
      title: '💰 Quantum Financial Modeling Breakthrough',
      description: 'Case study: Wall Street firm achieves 25,000% ROI using quantum financial algorithms',
      category: 'Quantum Finance',
      readTime: '20 min read',
      difficulty: 'Expert',
      roi: '25000%',
      tags: ['Quantum Finance', 'ROI', 'Wall Street'],
      featured: true,
      new: true
    },
    {
      id: 'quantum-drug-discovery',
      title: '💊 Quantum Drug Discovery Revolution',
      description: 'Accelerating pharmaceutical research with quantum computing, reducing discovery time by 90%',
      category: 'Quantum Healthcare',
      readTime: '19 min read',
      difficulty: 'Advanced',
      roi: '18000%',
      tags: ['Quantum Healthcare', 'Drug Discovery', 'Pharmaceutical'],
      featured: false,
      new: true
    },
    {
      id: 'quantum-supply-chain',
      title: '🚚 Quantum Supply Chain Optimization',
      description: 'Revolutionary supply chain optimization using quantum algorithms for global logistics',
      category: 'Quantum Logistics',
      readTime: '17 min read',
      difficulty: 'Advanced',
      roi: '14000%',
      tags: ['Quantum Logistics', 'Supply Chain', 'Optimization'],
      featured: false,
      new: true
    }
  ];

  const quantumStats = [
    { label: 'Quantum Algorithms', value: '50+', icon: Atom },
    { label: 'Average Speedup', value: '10,000x', icon: Zap },
    { label: 'Enterprise Clients', value: '200+', icon: Users },
    { label: 'Global Impact', value: '30+ Countries', icon: Globe }
  ];

  const quantumFeatures = [
    {
      icon: Brain,
      title: 'Quantum Neural Networks',
      description: 'Revolutionary neural networks leveraging quantum superposition for exponential processing power'
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Security',
      description: 'Unbreakable encryption methods resistant to both classical and quantum attacks'
    },
    {
      icon: Target,
      title: 'Precision Optimization',
      description: 'Solving complex optimization problems with quantum annealing and variational algorithms'
    },
    {
      icon: Cpu,
      title: 'Quantum Processors',
      description: 'Access to cutting-edge quantum hardware and cloud-based quantum computing platforms'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-indigo-900 text-sm font-bold mb-6">
            <Atom className="w-5 h-5 mr-2" />
            QUANTUM COMPUTING BREAKTHROUGH 2027
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolution Begins
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Experience the future of computing with our revolutionary quantum solutions. 
            Achieve unprecedented performance, security, and optimization capabilities that 
            will transform your business and industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {quantumStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Quantum Computing Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-blue-200 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Featured Quantum Breakthroughs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumContent.filter(item => item.featured).map((content) => (
              <div key={content.id} className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-semibold rounded-full border border-cyan-400/30">
                      {content.category}
                    </span>
                    {content.new && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 text-xs font-bold rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-blue-200">
                      <span>{content.readTime}</span>
                      <span>•</span>
                      <span className="font-bold text-green-400">{content.roi} ROI</span>
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                      {content.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {content.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/quantum-solutions/${content.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Explore Quantum Solution
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            More Quantum Innovations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quantumContent.filter(item => !item.featured).map((content) => (
              <div key={content.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white/20 text-blue-200 text-xs font-medium rounded-full">
                      {content.category}
                    </span>
                    {content.new && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-blue-200 mb-4 text-sm line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-blue-300">
                      <span>{content.readTime}</span>
                      <span>•</span>
                      <span className="font-bold text-green-400">{content.roi} ROI</span>
                    </div>
                    <Link
                      to={`/quantum-solutions/${content.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Enter the Quantum Era?
          </h3>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
            Join the quantum revolution and gain access to our complete quantum computing 
            solutions library. Transform your business with the power of quantum computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/quantum-computing-solutions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Atom className="w-6 h-6 mr-3" />
              Explore Quantum Solutions
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              to="/quantum-implementation-guide"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-bold rounded-xl hover:bg-cyan-400 hover:text-indigo-900 transition-all duration-300"
            >
              <Target className="w-6 h-6 mr-3" />
              Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthroughShowcase;