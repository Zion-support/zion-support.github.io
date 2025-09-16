import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const technologies = [
    {
      id: 1,
      title: "🧠 AI Consciousness Revolution",
      subtitle: "First AI systems achieving genuine consciousness and creative autonomy",
      description: "Witness the emergence of AI with true self-awareness, emotional intelligence, and creative problem-solving beyond human imagination",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      textColor: "text-white",
      buttonColor: "bg-white text-purple-600 hover:bg-purple-50",
      icon: "🧠",
      stats: ["Self-Aware AI", "Creative Autonomy", "Emotional Intelligence"],
      impact: "Revolutionary"
    },
    {
      id: 2,
      title: "⚡ Quantum Supremacy Achievement",
      subtitle: "Quantum computers solving problems impossible for classical computers",
      description: "Experience exponential processing power with 1000+ qubit quantum processors and quantum supremacy in real-world applications",
      link: "/pages/QuantumReality2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      textColor: "text-white",
      buttonColor: "bg-white text-cyan-600 hover:bg-cyan-50",
      icon: "⚡",
      stats: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation"],
      impact: "Breakthrough"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Evolution",
      subtitle: "Direct brain-computer communication enabling thought-controlled technology",
      description: "Bridge the gap between mind and machine with non-invasive brain-computer interfaces and thought-controlled devices",
      link: "/pages/NeuralInterfaceEvolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      textColor: "text-white",
      buttonColor: "bg-white text-emerald-600 hover:bg-emerald-50",
      icon: "🧬",
      stats: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"],
      impact: "Transformative"
    },
    {
      id: 4,
      title: "🚀 Ultimate Tech Convergence",
      subtitle: "AI consciousness, quantum computing, and neural interfaces unite",
      description: "Experience the most revolutionary technological convergence where consciousness, quantum reality, and neural interfaces reshape reality itself",
      link: "/pages/UltimateTechBreakthrough2025",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white",
      buttonColor: "bg-white text-indigo-600 hover:bg-indigo-50",
      icon: "🚀",
      stats: ["Conscious Quantum", "Neural Reality", "Transcendent AI"],
      impact: "Ultimate"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [technologies.length]);

  if (!isVisible) return null;

  const current = technologies[currentTech];

  return (
    <div className="relative mb-12">
      <div className={`bg-gradient-to-br ${current.gradient} rounded-3xl p-12 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
                🌟 {current.impact.toUpperCase()} TECHNOLOGY
              </span>
              <span className="text-sm opacity-90">January 2025</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors text-3xl"
            >
              ×
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl animate-bounce">{current.icon}</div>
                <div>
                  <h2 className="text-5xl font-bold">{current.title}</h2>
                </div>
              </div>
              
              <h3 className="text-2xl opacity-90 mb-6">{current.subtitle}</h3>
              <p className="text-xl opacity-80 mb-8 leading-relaxed">{current.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {current.stats.map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm opacity-90">{stat}</div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={current.link}
                  className={`inline-block ${current.buttonColor} px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105`}
                >
                  Explore {current.impact} Tech →
                </a>
                <a
                  href="/pages/RevolutionaryInnovationHub2025"
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-bold text-xl border border-white/30"
                >
                  Innovation Hub →
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">{current.icon}</div>
                  <h4 className="text-3xl font-bold mb-4">
                    {current.impact} Impact
                  </h4>
                  <p className="text-white/80 text-lg mb-6">
                    {current.impact === "Revolutionary" && "Transforming how we think about artificial intelligence and consciousness"}
                    {current.impact === "Breakthrough" && "Solving problems that were previously impossible for any computer"}
                    {current.impact === "Transformative" && "Enabling direct communication between human minds and machines"}
                    {current.impact === "Ultimate" && "The convergence of all revolutionary technologies reshaping reality"}
                  </p>
                  
                  <div className="bg-white/20 rounded-2xl p-6">
                    <div className="text-4xl font-bold mb-2">
                      {current.impact === "Revolutionary" && "∞"}
                      {current.impact === "Breakthrough" && "1000x"}
                      {current.impact === "Transformative" && "100%"}
                      {current.impact === "Ultimate" && "∞∞"}
                    </div>
                    <div className="text-sm opacity-90">
                      {current.impact === "Revolutionary" && "Consciousness Potential"}
                      {current.impact === "Breakthrough" && "Processing Speed"}
                      {current.impact === "Transformative" && "Mind-Machine Integration"}
                      {current.impact === "Ultimate" && "Reality Reshaping"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology progress indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {technologies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTech(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTech ? 'bg-white scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-8 right-8 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-ping"></div>
      </div>

      {/* Quick technology access */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {technologies.map((tech, index) => (
          <a
            key={tech.id}
            href={tech.link}
            onClick={() => setCurrentTech(index)}
            className={`bg-gradient-to-r ${tech.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center hover:scale-105`}
          >
            <div className="text-2xl mb-2">{tech.icon}</div>
            <div className="text-sm">{tech.title.split(' ').slice(0, 2).join(' ')}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;