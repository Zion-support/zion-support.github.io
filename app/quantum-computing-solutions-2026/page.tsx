import React from 'react';
import { Metadata } from 'next';
import { Atom, Cpu, Lock, Database, Zap, Globe, Shield, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions 2026 - Revolutionary Quantum Technology | Zion Tech Group',
  description: 'Explore cutting-edge quantum computing solutions for 2026. Discover quantum algorithms, quantum cryptography, and quantum machine learning technologies that will revolutionize computing.',
  keywords: 'quantum computing 2026, quantum algorithms, quantum cryptography, quantum machine learning, quantum technology, Zion Tech Group',
  openGraph: {
    title: 'Quantum Computing Solutions 2026 - Revolutionary Quantum Technology',
    description: 'Discover the future of computing with our quantum solutions',
    type: 'website',
  },
};

const quantumSolutions = [
  {
    id: 1,
    title: "Quantum Machine Learning Platform",
    description: "Revolutionary quantum-enhanced machine learning that processes complex datasets exponentially faster than classical computers.",
    features: [
      "Exponential speedup for ML algorithms",
      "Quantum neural networks",
      "Quantum feature mapping",
      "Hybrid quantum-classical optimization"
    ],
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    applications: ["Drug discovery", "Financial modeling", "Climate prediction", "Image recognition"]
  },
  {
    id: 2,
    title: "Quantum Cryptography Suite",
    description: "Unbreakable quantum encryption that provides absolute security for sensitive data and communications.",
    features: [
      "Quantum key distribution (QKD)",
      "Quantum random number generation",
      "Post-quantum cryptography",
      "Quantum digital signatures"
    ],
    icon: Lock,
    color: "from-green-500 to-emerald-500",
    applications: ["Banking security", "Government communications", "Healthcare data", "Military operations"]
  },
  {
    id: 3,
    title: "Quantum Optimization Engine",
    description: "Advanced quantum algorithms for solving complex optimization problems in logistics, finance, and resource allocation.",
    features: [
      "Quantum annealing",
      "Variational quantum eigensolver",
      "Quantum approximate optimization",
      "Hybrid optimization algorithms"
    ],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    applications: ["Supply chain optimization", "Portfolio management", "Route planning", "Resource allocation"]
  },
  {
    id: 4,
    title: "Quantum Database System",
    description: "Next-generation quantum database that enables quantum search and data processing with unprecedented efficiency.",
    features: [
      "Quantum search algorithms",
      "Quantum data compression",
      "Quantum error correction",
      "Quantum parallel processing"
    ],
    icon: Database,
    color: "from-orange-500 to-red-500",
    applications: ["Big data analytics", "Search engines", "Data mining", "Pattern recognition"]
  },
  {
    id: 5,
    title: "Quantum Simulation Platform",
    description: "Powerful quantum simulators for modeling complex quantum systems in physics, chemistry, and materials science.",
    features: [
      "Quantum circuit simulation",
      "Noise modeling",
      "Quantum state tomography",
      "Benchmarking tools"
    ],
    icon: Atom,
    color: "from-indigo-500 to-purple-500",
    applications: ["Material design", "Chemical reactions", "Physics research", "Drug development"]
  },
  {
    id: 6,
    title: "Quantum Cloud Infrastructure",
    description: "Scalable quantum computing cloud platform that provides access to quantum resources for businesses and researchers.",
    features: [
      "Quantum-as-a-Service (QaaS)",
      "Multi-cloud quantum access",
      "Quantum resource management",
      "Real-time quantum monitoring"
    ],
    icon: Globe,
    color: "from-teal-500 to-blue-500",
    applications: ["Research collaboration", "Business applications", "Education", "Prototype development"]
  }
];

const quantumAdvantages = [
  {
    title: "Exponential Speedup",
    description: "Solve problems that would take classical computers millions of years in just minutes",
    icon: Zap,
    metric: "10^15x faster"
  },
  {
    title: "Quantum Supremacy",
    description: "Achieve computational advantages impossible with classical systems",
    icon: Shield,
    metric: "100% secure"
  },
  {
    title: "Parallel Processing",
    description: "Process multiple solutions simultaneously using quantum superposition",
    icon: Database,
    metric: "2^n parallel"
  },
  {
    title: "Quantum Entanglement",
    description: "Leverage quantum correlations for enhanced computational power",
    icon: Atom,
    metric: "∞ correlations"
  }
];

const useCases = [
  {
    industry: "Financial Services",
    applications: [
      "Portfolio optimization",
      "Risk analysis",
      "Fraud detection",
      "High-frequency trading"
    ],
    benefits: "50% faster risk calculations, 99.9% fraud detection accuracy"
  },
  {
    industry: "Healthcare & Life Sciences",
    applications: [
      "Drug discovery",
      "Protein folding",
      "Genetic analysis",
      "Treatment optimization"
    ],
    benefits: "10x faster drug discovery, 90% accuracy in protein prediction"
  },
  {
    industry: "Logistics & Transportation",
    applications: [
      "Route optimization",
      "Supply chain management",
      "Fleet management",
      "Demand forecasting"
    ],
    benefits: "30% cost reduction, 40% efficiency improvement"
  },
  {
    industry: "Energy & Environment",
    applications: [
      "Climate modeling",
      "Energy grid optimization",
      "Carbon capture",
      "Renewable energy planning"
    ],
    benefits: "60% faster climate simulations, 25% energy savings"
  }
];

export default function QuantumComputingSolutions2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Atom className="w-4 h-4" />
              Quantum Computing Solutions 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of Computing is
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve the world's most complex problems with unprecedented speed and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Watch Quantum Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary benefits of quantum computing technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{advantage.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{advantage.title}</div>
                <div className="text-gray-400 text-sm">{advantage.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of quantum computing solutions designed for enterprise applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumSolutions.map((solution) => (
              <div key={solution.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  {solution.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-white mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is transforming industries across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Applications:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-500/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Measured Benefits:</h4>
                  <p className="text-blue-100 text-sm">{useCase.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the quantum revolution and unlock unprecedented computational power for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Start Quantum Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Quantum Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}