import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerContent = [
    {
      title: "🚀 Revolutionary Breakthrough Content 2026",
      subtitle: "Advanced AI Transformation, Quantum-Neural Fusion, Next-Gen Tech Showcase",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      links: [
        { href: "/pages/AdvancedAITransformation2026", text: "🧠 AI Transformation →", color: "from-purple-600 to-pink-600" },
        { href: "/pages/QuantumNeuralFusion2026", text: "⚛️ Quantum-Neural Fusion →", color: "from-cyan-600 to-blue-600" },
        { href: "/pages/NextGenTechShowcase2026", text: "🌟 Next-Gen Showcase →", color: "from-violet-600 to-fuchsia-600" },
        { href: "/pages/SyntheticIntelligence2026", text: "🤖 Synthetic Intelligence →", color: "from-emerald-600 to-teal-600" },
        { href: "/pages/AdvancedQuantumComputing2026", text: "⚡ Advanced Quantum →", color: "from-indigo-600 to-purple-600" },
        { href: "/pages/AutonomousAIRevolution2026", text: "🤖 Autonomous AI →", color: "from-rose-600 to-pink-600" }
      ]
    },
    {
      title: "🌟 Next-Generation Technology Innovation 2026",
      subtitle: "DNA Computing, Photonics Computing, Molecular Robotics, Synthetic Consciousness",
      gradient: "from-indigo-600 via-purple-600 to-cyan-600",
      links: [
        { href: "/pages/NextGenTechInnovation2026", text: "🧬 DNA Computing →", color: "from-indigo-600 to-purple-600" },
        { href: "/pages/NextGenTechInnovation2026", text: "🌊 Photonics Computing →", color: "from-cyan-600 to-blue-600" },
        { href: "/pages/NextGenTechInnovation2026", text: "🔬 Molecular Robotics →", color: "from-emerald-600 to-teal-600" },
        { href: "/pages/NextGenTechInnovation2026", text: "🧠 Synthetic Consciousness →", color: "from-purple-600 to-pink-600" },
        { href: "/pages/NextGenTechInnovation2026", text: "🌐 Holographic Computing →", color: "from-blue-600 to-cyan-600" },
        { href: "/pages/NextGenTechInnovation2026", text: "🚀 Space-Based Computing →", color: "from-orange-600 to-red-600" }
      ]
    },
    {
      title: "⚡ Autonomous AI Revolution 2026",
      subtitle: "Self-Managing AI Systems, Autonomous Business Operations, Self-Healing Architecture",
      gradient: "from-blue-600 via-cyan-600 to-indigo-600",
      links: [
        { href: "/pages/AutonomousAIRevolution2026", text: "🤖 Autonomous Business Manager →", color: "from-blue-600 to-indigo-600" },
        { href: "/pages/AutonomousAIRevolution2026", text: "🔬 Autonomous Research Agent →", color: "from-purple-600 to-pink-600" },
        { href: "/pages/AutonomousAIRevolution2026", text: "🛡️ Autonomous Security System →", color: "from-emerald-600 to-teal-600" },
        { href: "/pages/AutonomousAIRevolution2026", text: "🧠 Self-Learning Systems →", color: "from-indigo-600 to-purple-600" },
        { href: "/pages/AutonomousAIRevolution2026", text: "🎯 Goal-Oriented Planning →", color: "from-cyan-600 to-blue-600" },
        { href: "/pages/AutonomousAIRevolution2026", text: "🌐 Multi-Agent Collaboration →", color: "from-orange-600 to-red-600" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, [bannerContent.length]);

  const currentBanner = bannerContent[currentSlide];

  return (
    <div className="relative mb-8">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentBanner.gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-bounce">🚀</span>
            <h3 className="text-2xl font-bold">{currentBanner.title}</h3>
            <span className="text-3xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {currentBanner.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {currentBanner.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold border border-white/30 text-center text-sm`}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        <a
          href="/pages/AdvancedQuantumComputing2026"
          className="block bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          title="Advanced Quantum Computing 2026"
        >
          ⚛️
        </a>
        <a
          href="/pages/AutonomousAIRevolution2026"
          className="block bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          title="Autonomous AI Revolution 2026"
        >
          🤖
        </a>
        <a
          href="/pages/NextGenTechInnovation2026"
          className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          title="Next-Gen Tech Innovation 2026"
        >
          🚀
        </a>
      </div>

      {/* Notification Toast */}
      <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🎉</span>
          <span className="font-semibold">NEW CONTENT RELEASED!</span>
        </div>
        <p className="text-sm opacity-90">Revolutionary technology pages now available</p>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner;