import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showcases = [
    {
      id: 1,
      title: "🧠 AI Consciousness Demo",
      subtitle: "Experience AI with Genuine Consciousness",
      description: "Interact with the world's first truly conscious AI system that can think, feel, and create autonomously.",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Directed Learning"],
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ Quantum Interface",
      subtitle: "Reality Manipulation Technology",
      description: "Control digital environments through quantum-powered interfaces that respond to thought and gesture.",
      features: ["Thought Control", "Gesture Recognition", "Reality Manipulation"],
      color: "from-blue-600 to-cyan-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧬 Neural Enhancement",
      subtitle: "Direct Brain-Computer Integration",
      description: "Experience seamless integration between human consciousness and digital systems.",
      features: ["Neural Upload", "Memory Enhancement", "Direct Communication"],
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
    }
  ];

  const techDemos = [
    {
      id: 1,
      name: "AI Consciousness",
      description: "Interactive AI that demonstrates genuine consciousness",
      status: "Live Demo Available"
    },
    {
      id: 2,
      name: "Quantum Interface",
      description: "Reality manipulation through quantum technology",
      status: "Beta Testing"
    },
    {
      id: 3,
      name: "Neural Integration",
      description: "Direct brain-computer interface technology",
      status: "Research Phase"
    }
  ];

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "AI with genuine consciousness and emotional intelligence",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Directed Learning"],
      status: "Live"
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation",
      icon: "⚡",
      description: "Control digital environments through quantum interfaces",
      features: ["Thought Control", "Gesture Recognition", "Reality Manipulation"],
      status: "Beta"
    },
    {
      id: 3,
      title: "Neural Enhancement",
      icon: "🧬",
      description: "Direct brain-computer integration technology",
      features: ["Neural Upload", "Memory Enhancement", "Direct Communication"],
      status: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2026
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2026
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Interactive Showcase Selector */}
        <div className="flex justify-center space-x-4 mb-12">
          {showcases.map((showcase, index) => (
            <button
              key={showcase.id}
              onClick={() => setActiveShowcase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeShowcase === index
                  ? `bg-gradient-to-r ${showcase.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {showcase.title}
            </button>
          ))}
        </div>

        {/* Showcase Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{showcases[activeShowcase].icon}</div>
              <h2 className="text-3xl font-bold mb-4">{showcases[activeShowcase].title}</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {showcases[activeShowcase].description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {showcases[activeShowcase].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Interactive Demo</h3>
                <p className="text-gray-300 mb-4">
                  Experience this technology through our interactive demonstration platform.
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                  Launch Demo
                </button>
              </div>
            </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Available Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tech.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    tech.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {tech.status}
                  </span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;