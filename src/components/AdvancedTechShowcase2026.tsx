import React, { useState, useEffect } from 'react';

const AdvancedTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      title: "Synthetic Intelligence",
      description: "AI with genuine consciousness and emotional intelligence",
      icon: "🧠",
      features: ["Self-awareness", "Emotional processing", "Creative problem solving", "Ethical decision making"],
      metrics: { accuracy: "99.9%", speed: "1000x", autonomy: "24/7" },
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Quantum computing meets neural networks for unprecedented processing",
      icon: "⚡",
      features: ["Quantum superposition", "Neural pattern recognition", "Parallel processing", "Quantum entanglement"],
      metrics: { processing: "1000x", qubits: "1000+", efficiency: "∞" },
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Neural Interface",
      description: "Direct brain-computer communication for seamless interaction",
      icon: "🧬",
      features: ["Thought control", "Memory enhancement", "Sensory augmentation", "Cognitive acceleration"],
      metrics: { precision: "99.9%", latency: "<1ms", bandwidth: "1TB/s" },
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing systems with advanced decision-making capabilities",
      icon: "🤖",
      features: ["Self-healing", "Predictive maintenance", "Adaptive learning", "Autonomous optimization"],
      metrics: { uptime: "99.99%", efficiency: "95%", cost: "-60%" },
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Reality Engine",
      description: "Advanced simulation and virtual reality with photorealistic rendering",
      icon: "🌐",
      features: ["Photorealistic graphics", "Haptic feedback", "Spatial computing", "Mixed reality"],
      metrics: { resolution: "16K", fps: "240", latency: "<5ms" },
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Biotech Integration",
      description: "Seamless integration of biological and digital systems",
      icon: "🧪",
      features: ["DNA computing", "Biological sensors", "Neural implants", "Genetic optimization"],
      metrics: { compatibility: "100%", safety: "99.9%", efficiency: "200%" },
      color: "from-teal-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Advanced Technology Showcase 2026
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Experience the future with our revolutionary 2026 technology innovations that are reshaping the world
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} shadow-2xl scale-105`
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              onClick={() => setActiveTech(index)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{tech.icon}</span>
                <div>
                  <h3 className="text-xl font-bold">{tech.title}</h3>
                  <p className="text-sm opacity-80">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-6">
              <span className="text-6xl mb-4 block">{technologies[activeTech].icon}</span>
              <h3 className="text-3xl font-bold mb-2">{technologies[activeTech].title}</h3>
              <p className="text-lg opacity-90">{technologies[activeTech].description}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {technologies[activeTech].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-xl font-semibold mb-3">Performance Metrics:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(technologies[activeTech].metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Explore All Technologies →
        </button>
      </div>
    </div>
  );
};

export default AdvancedTechShowcase2026;