import React from 'react';
import { Link } from 'react-router-dom';

const UltimateContentShowcase2026: React.FC = () => {
  const content = [
    {
      id: 1,
      title: "AI Consciousness Test",
      description: "Test the consciousness level of our AI systems",
      icon: "🧠",
      link: "/ai-consciousness-test",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum Computing Demo",
      description: "Experience quantum computing in action",
      icon: "⚛️",
      link: "/quantum-computing-demo",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Connect directly with AI systems",
      icon: "🔗",
      link: "/neural-interface",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our revolutionary content and demonstrations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="mb-6 opacity-90">{item.description}</p>
              <Link 
                to={item.link}
                className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Try Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/services"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;