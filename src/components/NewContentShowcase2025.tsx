import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2025: React.FC = () => {
  const highlights = [
    {
      title: "🎭 Multimodal AI Revolution",
      description: "Unified vision-language-audio processing with 98% accuracy",
      link: "/blog/multimodal-ai-revolution-2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "⛓️ Blockchain-AI Integration",
      description: "Trustless intelligence with decentralized governance",
      link: "/blog/blockchain-ai-integration-2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "🌱 Green AI & Sustainability",
      description: "Carbon-neutral ML with 90% emissions reduction",
      link: "/blog/green-ai-sustainability-2025",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "🧠 Quantum-Enhanced Learning",
      description: "Exponential speedup in neural network training",
      link: "/blog/quantum-enhanced-learning-2025",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "🤖 Autonomous Systems 2025",
      description: "Self-evolving AI agents with human-level reasoning",
      link: "/blog/autonomous-systems-2025",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "🔒 Privacy-Preserving AI",
      description: "Federated learning with zero-knowledge proofs",
      link: "/blog/privacy-preserving-ai-2025",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest breakthroughs in artificial intelligence, 
            quantum computing, and autonomous systems that are reshaping our future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${highlight.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {highlight.description}
                </p>
                <Link
                  to={highlight.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${highlight.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;