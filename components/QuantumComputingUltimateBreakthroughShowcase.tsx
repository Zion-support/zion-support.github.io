import React from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingUltimateBreakthroughShowcase: React.FC = () => {
  const breakthroughs = [
    {
      id: 1,
      title: "Quantum Supremacy Achieved",
      year: "2025",
      description: "Quantum computers solve problems that would take classical computers millions of years in mere minutes.",
      impact: "Revolutionary",
      category: "Computing Power",
      image: "/images/quantum-supremacy-2025.jpg",
      link: "/quantum-computing-breakthroughs/supremacy-achieved",
      applications: ["Cryptography", "Optimization", "Simulation"]
    },
    {
      id: 2,
      title: "Fault-Tolerant Quantum Systems",
      year: "2026",
      description: "Error-corrected quantum computers become commercially viable, enabling practical quantum applications.",
      impact: "Game-Changing",
      category: "Reliability",
      image: "/images/fault-tolerant-2026.jpg",
      link: "/quantum-computing-breakthroughs/fault-tolerant-systems",
      applications: ["Drug Discovery", "Financial Modeling", "Climate Simulation"]
    },
    {
      id: 3,
      title: "Quantum Internet Launch",
      year: "2027",
      description: "First quantum internet network enables ultra-secure communication and distributed quantum computing.",
      impact: "Transformative",
      category: "Networking",
      image: "/images/quantum-internet-2027.jpg",
      link: "/quantum-computing-breakthroughs/quantum-internet",
      applications: ["Secure Communication", "Distributed Computing", "Quantum Sensing"]
    },
    {
      id: 4,
      title: "Quantum AI Integration",
      year: "2028",
      description: "Quantum algorithms enhance AI capabilities, creating quantum neural networks with unprecedented processing power.",
      impact: "Paradigm Shift",
      category: "AI Integration",
      image: "/images/quantum-ai-2028.jpg",
      link: "/quantum-computing-breakthroughs/quantum-ai-integration",
      applications: ["Machine Learning", "Pattern Recognition", "Decision Making"]
    },
    {
      id: 5,
      title: "Quantum Chemistry Revolution",
      year: "2029",
      description: "Quantum computers simulate complex molecular systems, revolutionizing drug discovery and materials science.",
      impact: "Scientific Breakthrough",
      category: "Chemistry",
      image: "/images/quantum-chemistry-2029.jpg",
      link: "/quantum-computing-breakthroughs/quantum-chemistry",
      applications: ["Drug Development", "Materials Design", "Catalyst Optimization"]
    },
    {
      id: 6,
      title: "Quantum Consciousness Research",
      year: "2030",
      description: "Quantum computing enables breakthrough research into consciousness, consciousness transfer, and digital immortality.",
      impact: "Existential",
      category: "Consciousness",
      image: "/images/quantum-consciousness-2030.jpg",
      link: "/quantum-computing-breakthroughs/quantum-consciousness",
      applications: ["Consciousness Transfer", "Digital Immortality", "Brain Simulation"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing Ultimate Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the most revolutionary breakthroughs in quantum computing that will reshape our understanding 
            of computation, consciousness, and the very fabric of reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breakthroughs.map((breakthrough) => (
            <div
              key={breakthrough.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {breakthrough.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {breakthrough.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {breakthrough.impact}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {breakthrough.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {breakthrough.description}
              </p>

              {/* Applications */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {breakthrough.applications.map((app, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={breakthrough.link}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-200"
              >
                Explore Breakthrough
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Quantum Computing Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300">Error Reduction</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-indigo-400 mb-2">∞</div>
            <div className="text-gray-300">Possible Solutions</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Continuous Operation</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/quantum-computing-breakthroughs"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore All Breakthroughs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingUltimateBreakthroughShowcase;