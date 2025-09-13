import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Shield, Zap, Target, Globe, Brain } from 'lucide-react';

const AdvancedQuantumComputingSolutions2026: React.FC = () => {
  const quantumSolutions = [
    {
      id: 1,
      title: "Error-Corrected Quantum Computers",
      description: "Revolutionary quantum computers with advanced error correction achieving 99.9% accuracy in quantum operations and 10,000x speed improvements over classical systems.",
      category: "Quantum Hardware",
      year: "2026",
      impact: "10,000x Speed",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      features: [
        "Advanced Error Correction",
        "Quantum Supremacy Achievement",
        "Scalable Architecture",
        "Real-time Quantum Processing"
      ],
      applications: [
        "Drug Discovery",
        "Financial Modeling",
        "Climate Simulation",
        "Cryptography"
      ],
      metrics: {
        qubits: "1,000+",
        accuracy: "99.9%",
        speed: "10,000x",
        stability: "99.5%"
      }
    },
    {
      id: 2,
      title: "Quantum Machine Learning Platforms",
      description: "Breakthrough quantum ML platforms that leverage quantum entanglement for exponential speedup in machine learning algorithms and pattern recognition.",
      category: "Quantum AI",
      year: "2026",
      impact: "Exponential Speedup",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      features: [
        "Quantum Neural Networks",
        "Entanglement-based Learning",
        "Quantum Feature Maps",
        "Hybrid Classical-Quantum"
      ],
      applications: [
        "Image Recognition",
        "Natural Language Processing",
        "Predictive Analytics",
        "Optimization Problems"
      ],
      metrics: {
        speedup: "Exponential",
        accuracy: "98.5%",
        efficiency: "95%",
        scalability: "Unlimited"
      }
    },
    {
      id: 3,
      title: "Quantum Internet Infrastructure",
      description: "Global quantum internet enabling ultra-secure communication, quantum teleportation, and distributed quantum computing across the world.",
      category: "Quantum Network",
      year: "2027",
      impact: "Unbreakable Security",
      icon: Globe,
      color: "from-green-600 to-teal-600",
      features: [
        "Quantum Key Distribution",
        "Quantum Teleportation",
        "Distributed Computing",
        "Ultra-secure Communication"
      ],
      applications: [
        "Secure Banking",
        "Government Communications",
        "Healthcare Data",
        "Military Operations"
      ],
      metrics: {
        security: "Unbreakable",
        speed: "Light Speed",
        range: "Global",
        reliability: "99.9%"
      }
    },
    {
      id: 4,
      title: "Quantum Optimization Engines",
      description: "Advanced quantum optimization systems solving complex problems in logistics, supply chain, and resource allocation with unprecedented efficiency.",
      category: "Quantum Optimization",
      year: "2026",
      impact: "100x Efficiency",
      icon: Target,
      color: "from-orange-600 to-red-600",
      features: [
        "Quantum Annealing",
        "Combinatorial Optimization",
        "Real-time Solutions",
        "Multi-objective Optimization"
      ],
      applications: [
        "Supply Chain",
        "Route Optimization",
        "Resource Allocation",
        "Portfolio Management"
      ],
      metrics: {
        efficiency: "100x",
        accuracy: "99.8%",
        speed: "Real-time",
        cost: "70% Reduction"
      }
    },
    {
      id: 5,
      title: "Quantum Cryptography Systems",
      description: "Next-generation quantum cryptography providing unbreakable security for sensitive data and communications using quantum principles.",
      category: "Quantum Security",
      year: "2026",
      impact: "Unbreakable Security",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      features: [
        "Quantum Key Distribution",
        "Quantum Random Number Generation",
        "Post-Quantum Cryptography",
        "Quantum Digital Signatures"
      ],
      applications: [
        "Financial Services",
        "Healthcare",
        "Government",
        "Critical Infrastructure"
      ],
      metrics: {
        security: "Unbreakable",
        keyLength: "256-bit+",
        speed: "Gbps",
        compliance: "100%"
      }
    },
    {
      id: 6,
      title: "Quantum Simulation Platforms",
      description: "Advanced quantum simulation systems for modeling complex molecular structures, materials, and physical phenomena with unprecedented accuracy.",
      category: "Quantum Simulation",
      year: "2027",
      impact: "Molecular Precision",
      icon: Atom,
      color: "from-cyan-600 to-blue-600",
      features: [
        "Molecular Dynamics",
        "Material Design",
        "Chemical Reactions",
        "Physical Modeling"
      ],
      applications: [
        "Drug Discovery",
        "Material Science",
        "Climate Modeling",
        "Energy Research"
      ],
      metrics: {
        precision: "Molecular",
        scale: "Unlimited",
        accuracy: "99.9%",
        speed: "1,000x"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Quantum Computing Solutions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of quantum computing with our revolutionary solutions that solve complex problems impossible for classical computers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Error-Corrected Quantum
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Quantum Machine Learning
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Quantum Internet
            </span>
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Quantum Optimization
            </span>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {quantumSolutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-300">{solution.category}</span>
                    <div className="text-2xl font-bold text-white">{solution.year}</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Impact: {solution.impact}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, index) => (
                      <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(solution.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/quantum-computing-${solution.year.toLowerCase()}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Explore {solution.year} Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Harness Quantum Computing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum revolution with our cutting-edge solutions. Get started with a free consultation and discover how quantum computing can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/quantum-computing-guide"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedQuantumComputingSolutions2026;