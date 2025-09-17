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
      title: "AI Consciousness Demo",
      description: "Experience AI with genuine consciousness",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Quantum Computing Lab",
      description: "Quantum supremacy in action",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Neural Interface",
      description: "Direct brain-computer interaction",
      icon: "🔗"
    }
  ];

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
      title: "🔗 Neural Interface Hub",
      subtitle: "Direct Brain-Computer Communication",
      description: "Experience the future of human-computer interaction through direct neural interfaces.",
      features: [
        "Thought-controlled interfaces",
        "Neural data visualization",
        "Brain-computer synchronization",
        "Cognitive enhancement tools"
      ],
      link: "/pages/NeuralInterfaceHub2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🔗",
      badge: "NEURAL"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of technology through immersive, interactive demonstrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer animate-fadeIn`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-6xl mb-4">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
              <p className="text-lg opacity-90 mb-4">{tech.subtitle}</p>
              <p className="text-gray-300 mb-6">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                  {tech.badge}
                </span>
                <a
                  href={tech.link}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join millions of users who are already experiencing these revolutionary technologies 
            through our interactive demonstrations
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-white text-purple-600 px-10 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
            >
              🚀 Start Interactive Demo
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg"
            >
              📞 Schedule Private Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;