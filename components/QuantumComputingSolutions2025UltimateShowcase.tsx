import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Lock, Globe, Target, Database } from 'lucide-react';

const QuantumComputingSolutions2025UltimateShowcase: React.FC = () => {
  const quantumSolutions = [
    {
      id: 1,
      title: "Quantum Neural Networks",
      description: "Revolutionary quantum neural networks that process information at unprecedented speeds with quantum superposition and entanglement",
      category: "Quantum AI",
      icon: Cpu,
      featured: true,
      complexity: "Advanced",
      applications: ["Machine Learning", "Pattern Recognition", "Optimization"],
      link: "/quantum-computing-solutions-2025/quantum-neural-networks"
    },
    {
      id: 2,
      title: "Quantum Cryptography Suite",
      description: "Next-generation quantum cryptography solutions providing unbreakable security through quantum key distribution",
      category: "Quantum Security",
      icon: Lock,
      featured: true,
      complexity: "Expert",
      applications: ["Secure Communications", "Financial Transactions", "Government Systems"],
      link: "/quantum-computing-solutions-2025/quantum-cryptography"
    },
    {
      id: 3,
      title: "Quantum Optimization Engine",
      description: "Advanced quantum optimization algorithms solving complex problems exponentially faster than classical computers",
      category: "Quantum Algorithms",
      icon: Target,
      featured: true,
      complexity: "Advanced",
      applications: ["Supply Chain", "Financial Modeling", "Resource Allocation"],
      link: "/quantum-computing-solutions-2025/quantum-optimization"
    },
    {
      id: 4,
      title: "Quantum Cloud Platform",
      description: "Comprehensive quantum cloud computing platform providing access to quantum processors and development tools",
      category: "Quantum Cloud",
      icon: Globe,
      featured: false,
      complexity: "Intermediate",
      applications: ["Research", "Development", "Education"],
      link: "/quantum-computing-solutions-2025/quantum-cloud-platform"
    },
    {
      id: 5,
      title: "Quantum Database Systems",
      description: "High-performance quantum database systems with quantum indexing and ultra-fast query processing",
      category: "Quantum Databases",
      icon: Database,
      featured: false,
      complexity: "Advanced",
      applications: ["Big Data", "Real-time Analytics", "Search Engines"],
      link: "/quantum-computing-solutions-2025/quantum-databases"
    },
    {
      id: 6,
      title: "Quantum Energy Solutions",
      description: "Quantum-enhanced energy optimization systems for smart grids and renewable energy management",
      category: "Quantum Energy",
      icon: Zap,
      featured: false,
      complexity: "Expert",
      applications: ["Smart Grids", "Renewable Energy", "Energy Storage"],
      link: "/quantum-computing-solutions-2025/quantum-energy"
    }
  ];

  const featuredSolutions = quantumSolutions.filter(solution => solution.featured);
  const regularSolutions = quantumSolutions.filter(solution => !solution.featured);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Intermediate': return 'text-green-400 bg-green-600/20';
      case 'Advanced': return 'text-yellow-400 bg-yellow-600/20';
      case 'Expert': return 'text-red-400 bg-red-600/20';
      default: return 'text-gray-400 bg-gray-600/20';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Solutions 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary quantum computing solutions that are transforming industries and unlocking new possibilities in computation, security, and optimization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
              Quantum Supremacy
            </span>
            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
              Exponential Speedup
            </span>
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              Unbreakable Security
            </span>
          </div>
        </div>

        {/* Featured Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Quantum Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="bg-gradient-to-br from-slate-800/50 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-indigo-600/20 rounded-xl mr-4">
                        <IconComponent className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <span className="text-indigo-300 text-sm font-medium">
                          {solution.category}
                        </span>
                        <div className={`text-xs px-2 py-1 rounded-full mt-1 ${getComplexityColor(solution.complexity)}`}>
                          {solution.complexity}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {solution.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Applications:</h5>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.map((app, index) => (
                        <span
                          key={index}
                          className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore Solution
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regular Solutions Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Complete Quantum Solutions Portfolio
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularSolutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-300 text-sm font-medium">
                        {solution.category}
                      </span>
                      <div className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${getComplexityColor(solution.complexity)}`}>
                        {solution.complexity}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {solution.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {solution.applications.slice(0, 2).map((app, index) => (
                        <span
                          key={index}
                          className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quantum Computing Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Why Choose Quantum Computing Solutions?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-purple-600/20 rounded-xl w-fit mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Exponential Speedup</h4>
              <p className="text-gray-300 text-sm">Process complex problems millions of times faster than classical computers</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-indigo-600/20 rounded-xl w-fit mx-auto mb-4">
                <Lock className="w-8 h-8 text-indigo-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Quantum Security</h4>
              <p className="text-gray-300 text-sm">Unbreakable encryption using quantum key distribution and quantum cryptography</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-blue-600/20 rounded-xl w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Perfect Optimization</h4>
              <p className="text-gray-300 text-sm">Solve optimization problems with unprecedented accuracy and efficiency</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-white/10">
              <div className="p-3 bg-green-600/20 rounded-xl w-fit mx-auto mb-4">
                <Cpu className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Future-Ready</h4>
              <p className="text-gray-300 text-sm">Built for the quantum era with scalable and adaptable architectures</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Quantum Computing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum revolution and transform your business with our cutting-edge quantum computing solutions. Get started with a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-solutions-2025"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore All Solutions
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 hover:border-indigo-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-600/10"
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

export default QuantumComputingSolutions2025UltimateShowcase;