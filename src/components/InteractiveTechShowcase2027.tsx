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
      description: "Three-dimensional interfaces that revolutionize human-computer interaction",
      features: [
        "3D Visualization",
        "Gesture Control",
        "Thought Interface",
        "Real-time Rendering"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateTechShowcase2027"
    },
    {
      id: 3,
      title: "Molecular Manufacturing",
      icon: "⚗️",
      description: "Building the future atom by atom with perfect precision",
      features: [
        "Atomic Precision",
        "Self-Replication",
        "Programmable Matter",
        "Zero Waste Production"
      ],
      gradient: "from-orange-600 to-red-600",
      link: "/pages/UltimateTechShowcase2027"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`text-8xl mb-6 bg-gradient-to-r ${techCategories[activeTab].gradient} bg-clip-text text-transparent`}>
              {techCategories[activeTab].icon}
            </div>
            <h3 className="text-4xl font-bold mb-6">{techCategories[activeTab].title}</h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              {techCategories[activeTab].description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {techCategories[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 bg-gradient-to-r ${techCategories[activeTab].gradient} rounded-full`}></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={techCategories[activeTab].link}
                className={`bg-gradient-to-r ${techCategories[activeTab].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore Technology →
              </a>
              <button className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className={`bg-gradient-to-br ${techCategories[activeTab].gradient} rounded-2xl p-8 h-96 flex items-center justify-center`}>
              <div className="text-center">
                <div className="text-6xl mb-4">{techCategories[activeTab].icon}</div>
                <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                <p className="text-lg opacity-90 mb-6">
                  Experience this technology in action
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm font-semibold">Real-time</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎮</div>
                    <div className="text-sm font-semibold">Interactive</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10^15x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Scalability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;