import React from 'react';
import { Link } from 'react-router-dom';

const AutomationSolutionsUltimateShowcase: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      year: "2025",
      description: "Self-managing AI agents that can operate independently, make decisions, and adapt to changing environments without human intervention.",
      impact: "Revolutionary",
      category: "AI Agents",
      image: "/images/autonomous-ai-agents-2025.jpg",
      link: "/automation-solutions/autonomous-ai-agents",
      features: ["Self-Learning", "Decision Making", "Adaptive Behavior"]
    },
    {
      id: 2,
      title: "Quantum Automation Systems",
      year: "2026",
      description: "Quantum-powered automation systems that can process complex optimization problems and manage large-scale operations in real-time.",
      impact: "Game-Changing",
      category: "Quantum Automation",
      image: "/images/quantum-automation-2026.jpg",
      link: "/automation-solutions/quantum-automation",
      features: ["Quantum Processing", "Real-time Optimization", "Scalable Operations"]
    },
    {
      id: 3,
      title: "Neural Network Automation",
      year: "2027",
      description: "Brain-inspired automation systems that mimic neural networks to create intelligent, self-organizing automation solutions.",
      impact: "Transformative",
      category: "Neural Automation",
      image: "/images/neural-automation-2027.jpg",
      link: "/automation-solutions/neural-automation",
      features: ["Neural Processing", "Self-Organization", "Pattern Recognition"]
    },
    {
      id: 4,
      title: "Consciousness-Based Automation",
      year: "2028",
      description: "Automation systems with artificial consciousness that can understand context, emotions, and complex human needs.",
      impact: "Paradigm Shift",
      category: "Conscious Automation",
      image: "/images/consciousness-automation-2028.jpg",
      link: "/automation-solutions/consciousness-automation",
      features: ["Emotional Intelligence", "Context Awareness", "Human Understanding"]
    },
    {
      id: 5,
      title: "Self-Evolving Automation",
      year: "2029",
      description: "Automation systems that can evolve and improve themselves, creating new capabilities and optimizing performance autonomously.",
      impact: "Evolutionary",
      category: "Self-Evolution",
      image: "/images/self-evolving-2029.jpg",
      link: "/automation-solutions/self-evolving-automation",
      features: ["Self-Improvement", "Capability Creation", "Autonomous Evolution"]
    },
    {
      id: 6,
      title: "Omniversal Automation",
      year: "2030",
      description: "Automation systems that can operate across multiple dimensions, universes, and realities, managing complex interdimensional operations.",
      impact: "Existential",
      category: "Omniversal",
      image: "/images/omniversal-automation-2030.jpg",
      link: "/automation-solutions/omniversal-automation",
      features: ["Multidimensional", "Reality Management", "Universal Operations"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automation Solutions Ultimate Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced automation solutions that will revolutionize how we work, live, and interact 
            with technology. From autonomous AI agents to omniversal automation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {solution.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {solution.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {solution.impact}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {solution.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={solution.link}
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group-hover:translate-x-1 transition-all duration-200"
              >
                Explore Solution
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Automation Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
            <div className="text-gray-300">Efficiency Increase</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-gray-300">Continuous Operation</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Scalability</div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Automation Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-3">🏭</div>
              <h4 className="text-lg font-semibold text-white mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm">Automated production lines with intelligent quality control</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-3">🏥</div>
              <h4 className="text-lg font-semibold text-white mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm">AI-powered diagnosis and treatment automation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-3">🚗</div>
              <h4 className="text-lg font-semibold text-white mb-2">Transportation</h4>
              <p className="text-gray-300 text-sm">Autonomous vehicles and smart traffic management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-3">🏦</div>
              <h4 className="text-lg font-semibold text-white mb-2">Finance</h4>
              <p className="text-gray-300 text-sm">Automated trading and risk management systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-3">🌱</div>
              <h4 className="text-lg font-semibold text-white mb-2">Agriculture</h4>
              <p className="text-gray-300 text-sm">Smart farming with automated crop management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-3">🏠</div>
              <h4 className="text-lg font-semibold text-white mb-2">Smart Homes</h4>
              <p className="text-gray-300 text-sm">Intelligent home automation and energy management</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/automation-solutions"
            className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore All Solutions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolutionsUltimateShowcase;