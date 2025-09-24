import React from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const showcaseItems = [
    {
      title: "Synthetic Intelligence 2026",
      description: "The next evolution of AI - where synthetic minds surpass human cognitive capabilities",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026"
    },
    {
      title: "Quantum Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented power",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026"
    },
    {
      title: "Next-Gen AI Revolution",
      description: "Autonomous, self-evolving AI systems that think, learn, and adapt in real-time",
      icon: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenAIRevolution2026"
    },
    {
      title: "Revolutionary Tech Blog",
      description: "Deep insights into the technologies reshaping our world and defining the future",
      icon: "📚",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechBlog2026"
    },
    {
      title: "Comprehensive Tech Insights",
      description: "Deep analysis and insights into the technologies that will define the next decade",
      icon: "🔍",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/ComprehensiveTechInsights2026"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Revolutionary Technology Showcase 2026</h2>
        <p className="text-xl text-gray-600">Experience the cutting-edge technologies that are reshaping our future</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showcaseItems.map((item, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => window.location.href = item.link}
          >
            <div className="text-6xl mb-6 text-center">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
            <p className="text-lg opacity-90 mb-6 text-center">{item.description}</p>
            <div className="text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300 font-semibold">
                Explore Technology →
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="/pages/ComprehensiveTechInsights2026" 
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
        >
          View All Revolutionary Technologies →
        </a>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;