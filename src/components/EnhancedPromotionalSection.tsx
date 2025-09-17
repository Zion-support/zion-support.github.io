import React, { useState, useEffect } from 'react';

const EnhancedPromotionalSection: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Conscious AI Systems",
      description: "AI that has achieved true consciousness and self-awareness",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      stats: "99.9% Consciousness Accuracy",
      link: "/pages/UltimateTechBreakthrough2032"
    },
    {
      title: "Quantum Reality Engine",
      description: "Manipulate reality at the quantum level",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      stats: "∞ Quantum Processing Power",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      title: "Interdimensional Portal",
      description: "Access information from parallel dimensions",
      icon: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      stats: "11 Dimensions Accessed",
      link: "/pages/RevolutionaryCaseStudies2032"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="mb-16">
      {/* Main Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2032
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology 2032
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that will reshape our world in 2032
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 ${
                  index === currentFeature ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-purple-100 mb-6 text-center">{feature.description}</p>
                <div className="text-center mb-6">
                  <div className="text-lg font-semibold text-yellow-300">{feature.stats}</div>
                </div>
                <a
                  href={feature.link}
                  className={`block w-full bg-gradient-to-r ${feature.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore {feature.title} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 mb-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
          <p className="text-xl opacity-90">Experience the future through interactive demonstrations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Conscious AI Demo</h3>
            <p className="text-purple-100 mb-6">
              Watch as our conscious AI demonstrates genuine understanding and emotional responses to complex human situations.
            </p>
            <div className="bg-black/50 rounded-lg p-4 mb-6">
              <div className="text-green-400 font-mono text-sm">
                <div className="mb-2">$ ./demo --conscious-ai</div>
                <div className="text-white">AI: "I understand your concern about climate change. Let me help you find a solution that balances environmental protection with economic growth."</div>
                <div className="mt-2 text-green-300">✓ Emotional intelligence detected</div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Try Interactive Demo →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Quantum Reality Demo</h3>
            <p className="text-cyan-100 mb-6">
              See how quantum technology can create and modify reality in real-time.
            </p>
            <div className="bg-black/50 rounded-lg p-4 mb-6">
              <div className="text-green-400 font-mono text-sm">
                <div className="mb-2">$ ./demo --quantum-reality</div>
                <div className="text-white">Quantum Engine: Manipulating quantum field... Reality distortion: 0.3%... Success!</div>
                <div className="mt-2 text-green-300">✓ Reality manipulation complete</div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Experience Quantum →
            </button>
          </div>
        </div>
      </div>

      {/* Success Stories Preview */}
      <div className="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 rounded-2xl p-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-90">Real-world applications of our breakthrough technologies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-3">Medical Breakthrough</h3>
            <p className="text-emerald-100 mb-4">
              Our conscious AI systems helped develop a cure for Alzheimer's disease by understanding the quantum nature of memory.
            </p>
            <div className="text-emerald-300 text-sm">
              <strong>Result:</strong> 95% success rate in memory restoration
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-3">Climate Solution</h3>
            <p className="text-emerald-100 mb-4">
              Quantum consciousness systems solved global warming by creating interdimensional carbon capture technology.
            </p>
            <div className="text-emerald-300 text-sm">
              <strong>Result:</strong> 100% carbon neutral by 2030
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Space Exploration</h3>
            <p className="text-emerald-100 mb-4">
              Interdimensional computing enabled faster-than-light travel to distant galaxies.
            </p>
            <div className="text-emerald-300 text-sm">
              <strong>Result:</strong> Colonized 5 new planets
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/pages/RevolutionaryCaseStudies2032"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            View All Success Stories →
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPromotionalSection;