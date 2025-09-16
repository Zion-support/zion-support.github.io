import React, { useState } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      title: "🚀 Revolutionary Tech 2026",
      description: "Discover the most groundbreaking technological innovations",
      content: "Revolutionary technology breakthroughs that are reshaping our digital future with AI, quantum computing, and advanced neural interfaces.",
      link: "/pages/RevolutionaryTech2026",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "🧠 AI Consciousness 2026",
      description: "Experience the future of artificial intelligence",
      content: "Advanced AI systems with consciousness capabilities, emotional intelligence, and human-like reasoning that revolutionize how we interact with technology.",
      link: "/pages/UltimateAIConsciousness2026",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "⚡ Quantum Revolution 2026",
      description: "Witness the quantum computing revolution",
      content: "Breakthrough quantum computing technologies that solve previously impossible problems and unlock new possibilities in cryptography, optimization, and simulation.",
      link: "/pages/QuantumSupremacy2026",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🌟 Revolutionary Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most innovative and groundbreaking content that's shaping the future of technology
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {contentTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {contentTabs[activeTab].title}
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              {contentTabs[activeTab].description}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {contentTabs[activeTab].content}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={contentTabs[activeTab].link}
                className={`bg-gradient-to-r ${contentTabs[activeTab].gradient} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300`}
              >
                Explore Content →
              </a>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {contentTabs.map((tab, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                activeTab === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{tab.title.split(' ')[0]}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {tab.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {tab.description}
                </p>
                <a
                  href={tab.link}
                  className={`inline-block bg-gradient-to-r ${tab.gradient} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  View Content
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;