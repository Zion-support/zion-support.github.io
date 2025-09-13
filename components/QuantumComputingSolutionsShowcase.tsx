import React from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingSolutionsShowcase = () => {
  const quantumSolutions = [
    {
      id: 1,
      title: "Quantum-AI Fusion Platform",
      description: "Revolutionary platform that combines quantum computing with artificial intelligence for unprecedented processing power and decision-making capabilities.",
      category: "Quantum-AI Fusion",
      roi: "8000%",
      processingSpeed: "1000x",
      accuracy: "99.9%",
      image: "/quantum-ai-fusion-platform.jpg",
      link: "/solutions/quantum-ai-fusion-platform",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Quantum Optimization Engine",
      description: "Advanced quantum optimization algorithms that solve complex business problems in seconds, delivering massive efficiency gains.",
      category: "Optimization",
      roi: "5000%",
      processingSpeed: "500x",
      accuracy: "99.7%",
      image: "/quantum-optimization.jpg",
      link: "/solutions/quantum-optimization-engine",
      featured: true,
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Quantum Machine Learning Suite",
      description: "Complete quantum machine learning suite that accelerates AI model training and inference with quantum speedup.",
      category: "Machine Learning",
      roi: "3000%",
      processingSpeed: "200x",
      accuracy: "98.5%",
      image: "/quantum-ml.jpg",
      link: "/solutions/quantum-machine-learning",
      featured: true,
      badge: "ADVANCED"
    },
    {
      id: 4,
      title: "Quantum Security Framework",
      description: "Next-generation quantum security framework that provides unbreakable encryption and secure communications.",
      category: "Security",
      roi: "2500%",
      processingSpeed: "100x",
      accuracy: "99.99%",
      image: "/quantum-security.jpg",
      link: "/solutions/quantum-security-framework",
      featured: false,
      badge: "SECURE"
    },
    {
      id: 5,
      title: "Quantum Financial Modeling",
      description: "Advanced quantum financial modeling that predicts market movements and optimizes investment strategies with unprecedented accuracy.",
      category: "Finance",
      roi: "4000%",
      processingSpeed: "300x",
      accuracy: "97.8%",
      image: "/quantum-finance.jpg",
      link: "/solutions/quantum-financial-modeling",
      featured: false,
      badge: "PRECISE"
    },
    {
      id: 6,
      title: "Quantum Supply Chain Optimization",
      description: "Revolutionary supply chain optimization using quantum algorithms to minimize costs and maximize efficiency across global networks.",
      category: "Supply Chain",
      roi: "3500%",
      processingSpeed: "400x",
      accuracy: "96.5%",
      image: "/quantum-supply-chain.jpg",
      link: "/solutions/quantum-supply-chain",
      featured: false,
      badge: "EFFICIENT"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-lg font-bold mb-6">
            ⚛️ QUANTUM COMPUTING SOLUTIONS
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
            Revolutionary Quantum Solutions
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced quantum computing solutions that are transforming industries and delivering unprecedented business value.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {quantumSolutions.map((solution) => (
            <div
              key={solution.id}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 ${
                solution.featured ? 'border-indigo-200 ring-4 ring-indigo-100' : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-4 -right-4 z-10">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  solution.badge === 'BREAKTHROUGH' ? 'bg-red-500 text-white' :
                  solution.badge === 'REVOLUTIONARY' ? 'bg-purple-500 text-white' :
                  solution.badge === 'ADVANCED' ? 'bg-blue-500 text-white' :
                  solution.badge === 'SECURE' ? 'bg-green-500 text-white' :
                  solution.badge === 'PRECISE' ? 'bg-orange-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {solution.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-t-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-50">
                    {solution.category === 'Quantum-AI Fusion' ? '⚛️' :
                     solution.category === 'Optimization' ? '🚀' :
                     solution.category === 'Machine Learning' ? '🧠' :
                     solution.category === 'Security' ? '🔒' :
                     solution.category === 'Finance' ? '💰' :
                     '📦'}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-4 py-2 rounded-full">
                    {solution.category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-green-600">{solution.roi} ROI</span>
                    <span className="text-sm font-bold text-blue-600">{solution.processingSpeed}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 text-lg">
                  {solution.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{solution.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{solution.processingSpeed}</div>
                    <div className="text-xs text-gray-500">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{solution.accuracy}</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>

                <Link
                  to={solution.link}
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Solution
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with Quantum Computing?
          </h3>
          <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto">
            Join the quantum revolution and experience unprecedented growth with our breakthrough quantum computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/quantum-computing-consultation"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Quantum Consultation
            </Link>
            <Link
              to="/quantum-computing-demo"
              className="bg-white text-indigo-600 px-12 py-5 rounded-full font-bold text-xl border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Watch Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingSolutionsShowcase;