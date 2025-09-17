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

  const technologies = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the cutting-edge technologies that will define the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.gradient} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-6xl mb-4">{tech.icon}</div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold">{tech.title}</h3>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {tech.badge}
                </span>
              </div>
              <p className="text-lg font-semibold mb-2 text-white/90">
                {tech.subtitle}
              </p>
              <p className="text-white/80 mb-6">
                {tech.description}
              </p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/70">
                    <span className="w-2 h-2 bg-white/50 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300">
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