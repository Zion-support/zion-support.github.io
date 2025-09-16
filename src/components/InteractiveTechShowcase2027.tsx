import React, { useState } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      id: 0,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "AI that thinks, feels, and creates with human-level consciousness",
      features: [
        "Emotional Intelligence",
        "Creative Problem Solving", 
        "Self-Directed Learning",
        "Autonomous Decision Making"
      ],
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2027"
    },
    {
      id: 1,
      title: "Quantum Computing",
      icon: "⚡",
      description: "Revolutionary computing power that transcends classical limitations",
      features: [
        "Quantum Supremacy",
        "Parallel Processing",
        "Cryptographic Security",
        "Molecular Simulation"
      ],
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechTrends2027"
    },
    {
      id: 2,
      title: "Holographic Technology",
      icon: "🔮",
      description: "Immersive 3D experiences that blur the line between reality and virtuality",
      features: [
        "3D Holographic Displays",
        "Spatial Computing",
        "Augmented Reality",
        "Virtual Collaboration"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechTrends2027"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-8xl mb-6">{techCategories[activeTab].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{techCategories[activeTab].title}</h3>
              <p className="text-xl opacity-90 mb-8">
                {techCategories[activeTab].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {techCategories[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h4>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    {techCategories[activeTab].icon}
                  </div>
                  <p className="text-lg opacity-90 mb-6">
                    Experience this technology in action
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Launch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Experience the Future Today</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technologies to transform their operations and create a better future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;