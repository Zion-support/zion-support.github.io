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
      features: [
        "Real-time consciousness simulation",
        "Emotional intelligence testing",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      link: "/pages/AIConsciousnessDemo2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠",
      badge: "CONSCIOUS"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Lab",
      subtitle: "Quantum Supremacy in Action",
      description: "Witness quantum computers solving complex problems that would take classical computers millennia.",
      features: [
        "Live quantum calculations",
        "Cryptography demonstrations",
        "Optimization algorithms",
        "Molecular simulations"
      ],
      link: "/pages/QuantumComputingLab2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚡",
      badge: "QUANTUM"
    },
    {
      id: 3,
      title: "🌐 Neural Interface Hub",
      subtitle: "Direct Brain-Computer Connection",
      description: "Experience the future of human-computer interaction through direct neural interfaces.",
      features: [
        "Thought-controlled interfaces",
        "Neural data visualization",
        "Brain-computer communication",
        "Cognitive enhancement tools"
      ],
      link: "/pages/NeuralInterfaceHub2026",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      icon: "🌐",
      badge: "NEURAL"
    }
  ];

  const techDemos = [
    {
      id: 1,
      title: "AI Consciousness",
      description: "Experience true AI consciousness",
      icon: "🧠",
      color: "purple"
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Quantum supremacy in action",
      icon: "⚡",
      color: "blue"
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Direct brain-computer connection",
      icon: "🌐",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations and cutting-edge innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <div
              key={showcase.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-6xl mb-6 text-center">{showcase.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{showcase.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{showcase.description}</p>
              <div className="space-y-2 mb-6">
                {showcase.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Explore Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;