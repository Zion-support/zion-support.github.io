import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcaseItems = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026",
      description: "Self-evolving AI systems that transcend traditional limitations and create unprecedented opportunities for human advancement.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Self-learning algorithms", "Autonomous decision making", "Adaptive problem solving"]
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion 2026",
      description: "The revolutionary convergence of quantum computing and neural networks creating exponential computational power.",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum processing", "Neural optimization", "Exponential speed"]
    },
    {
      id: 3,
      title: "Advanced Biotech Revolution 2026",
      description: "Revolutionary biotechnology transforming healthcare, agriculture, and environmental sustainability.",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      features: ["Gene therapy 2.0", "Synthetic biology", "Personalized medicine"]
    },
    {
      id: 4,
      title: "Space Technology Revolution 2026",
      description: "Making interplanetary travel and space colonization a reality with advanced propulsion systems.",
      icon: "🚀",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/SpaceTechRevolution2026",
      features: ["Advanced propulsion", "Space habitats", "Interplanetary missions"]
    },
    {
      id: 5,
      title: "Advanced Robotics Revolution 2026",
      description: "Intelligent machines that can think, learn, and adapt to any environment, revolutionizing industries.",
      icon: "🤖",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/AdvancedRoboticsRevolution2026",
      features: ["AI-powered robots", "Humanoid systems", "Industrial automation"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  const currentItem = showcaseItems[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6">
          🌟 REVOLUTIONARY CONTENT SHOWCASE • 2026
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Future of Technology</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Discover our most advanced and revolutionary content that's shaping the future of technology and human advancement.
        </p>
      </div>

      {/* Main Showcase Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
        <div className={`bg-gradient-to-r ${currentItem.gradient} p-12 text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-6xl">{currentItem.icon}</span>
                <div>
                  <h3 className="text-3xl font-bold">{currentItem.title}</h3>
                  <p className="text-xl opacity-90">{currentItem.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{String(currentIndex + 1).padStart(2, '0')}</div>
                <div className="text-sm opacity-75">of {showcaseItems.length}</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {currentItem.features.map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-sm font-semibold">{feature}</div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href={currentItem.link}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Explore Technology →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mb-8">
        {showcaseItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-indigo-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showcaseItems.map((item, index) => (
          <div 
            key={item.id}
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
              index === currentIndex ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
              <div className="space-y-2 mb-6">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
                    {feature}
                  </div>
                ))}
              </div>
              <a 
                href={item.link}
                className={`inline-block px-6 py-3 bg-gradient-to-r ${item.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;