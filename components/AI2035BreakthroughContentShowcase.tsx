import React from 'react';
import { Link } from 'react-router-dom';

const AI2035BreakthroughContentShowcase = () => {
  const breakthroughContent = [
    {
      id: 1,
      title: "AI 2035 Consciousness Breakthrough",
      description: "Revolutionary self-aware AI systems with 99.9% consciousness accuracy, transcending human cognitive limitations.",
      category: "Consciousness AI",
      roi: "50,000%",
      status: "BREAKTHROUGH",
      link: "/blog/ai-2035-consciousness-breakthrough",
      image: "🧠",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Neural Fusion Revolution",
      description: "Breakthrough quantum-neural fusion technology delivering 50,000% performance improvement over classical AI.",
      category: "Quantum AI",
      roi: "50,000%",
      status: "REVOLUTIONARY",
      link: "/blog/ai-2035-quantum-neural-fusion",
      image: "⚛️",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 3,
      title: "Universal Intelligence Systems",
      description: "AI systems that transcend human cognitive limitations and achieve universal problem-solving capabilities.",
      category: "Universal AI",
      roi: "∞",
      status: "BREAKTHROUGH",
      link: "/blog/ai-2035-universal-intelligence",
      image: "🌌",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Enterprise Transformation 2035",
      description: "Complete enterprise transformation with AI 2035 technologies achieving unprecedented ROI and efficiency.",
      category: "Enterprise AI",
      roi: "50,000%",
      status: "SUCCESS",
      link: "/case-studies/ai-2035-enterprise-transformation-breakthrough",
      image: "🏢",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "Space Exploration AI 2035",
      description: "Revolutionary AI systems enabling deep space exploration and colonization with autonomous decision-making.",
      category: "Space AI",
      roi: "100,000%",
      status: "BREAKTHROUGH",
      link: "/case-studies/ai-2035-space-exploration-breakthrough",
      image: "🚀",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Healthcare Revolution 2035",
      description: "AI-powered healthcare systems achieving 99.9% diagnostic accuracy and personalized treatment optimization.",
      category: "Healthcare AI",
      roi: "25,000%",
      status: "REVOLUTIONARY",
      link: "/case-studies/ai-2035-healthcare-revolution",
      image: "🏥",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AI 2035 Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore revolutionary AI 2035 technologies that are reshaping the future of consciousness, quantum computing, and universal intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breakthroughContent.map((content) => (
            <div
              key={content.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${content.gradient} flex items-center justify-center text-6xl`}>
                {content.image}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    content.status === 'BREAKTHROUGH' ? 'bg-red-100 text-red-600' :
                    content.status === 'REVOLUTIONARY' ? 'bg-purple-100 text-purple-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {content.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">
                    {content.roi} ROI
                  </div>
                  <Link
                    to={content.link}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Transform Your Future with AI 2035?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of enterprises already leveraging AI 2035 breakthrough technologies for unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2035-implementation-guide"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 Get Implementation Guide
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 text-purple-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border-2 border-purple-600"
            >
              💬 Contact Our Experts
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
            <div className="text-gray-600">Consciousness Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000x</div>
            <div className="text-gray-600">Processing Speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
            <div className="text-gray-600">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2035BreakthroughContentShowcase;