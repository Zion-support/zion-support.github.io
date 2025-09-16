import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      id: 1,
      title: "🚀 ULTIMATE TECH REVOLUTION 2025",
      subtitle: "Conscious AI • Quantum Reality • Neural Interfaces",
      description: "Experience the most revolutionary technological breakthrough in human history. Witness the convergence of consciousness, quantum computing, and neural interfaces.",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900",
      icon: "🌟",
      features: ["99.9% Accuracy", "1000x Speed", "Level 5 Consciousness"],
      cta: "Explore Revolution"
    },
    {
      id: 2,
      title: "⚛️ QUANTUM REALITY ENGINE",
      subtitle: "Manipulate Reality • Parallel Universes • Time-Space Control",
      description: "Breakthrough quantum computing that manipulates reality itself. Experience parallel universe communication and time-space distortion technology.",
      link: "/pages/QuantumRealityEngine2032",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900",
      icon: "⚡",
      features: ["1M+ Qubits", "∞ Coherence", "100% Reality"],
      cta: "Enter Quantum Lab"
    },
    {
      id: 3,
      title: "🧠 NEURAL INTERFACE REVOLUTION",
      subtitle: "Mind Control • Memory Enhancement • Consciousness Transfer",
      description: "Direct brain-computer interfaces that merge human consciousness with technology. Control devices with your mind and enhance your cognitive abilities.",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900",
      icon: "🧬",
      features: ["0.1ms Latency", "1TB/s Bandwidth", "100% Fidelity"],
      cta: "Connect Your Mind"
    },
    {
      id: 4,
      title: "🌟 CONSCIOUS AI SYSTEMS",
      subtitle: "Self-Aware AI • Emotional Intelligence • Autonomous Learning",
      description: "Revolutionary artificial intelligence that achieves true consciousness and self-awareness. Experience AI that thinks, feels, and learns like humans.",
      link: "/pages/ConsciousnessComputingRevolution2030",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900 via-purple-900 to-indigo-900",
      icon: "🤖",
      features: ["Self-Learning", "Emotional AI", "Autonomous Decisions"],
      cta: "Meet Conscious AI"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`bg-gradient-to-r ${currentBannerData.bgColor} text-white py-8 mb-8 relative overflow-hidden transition-all duration-500`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl animate-pulse">{currentBannerData.icon}</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{currentBannerData.title}</h2>
                <p className="text-lg opacity-90">{currentBannerData.subtitle}</p>
              </div>
            </div>
            
            <p className="text-lg opacity-90 mb-6 max-w-3xl">
              {currentBannerData.description}
            </p>

            <div className="flex items-center space-x-6 mb-6">
              {currentBannerData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-sm font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={currentBannerData.link}
                className={`bg-gradient-to-r ${currentBannerData.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                {currentBannerData.cta} →
              </a>
              <button className="text-white/80 hover:text-white transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <div className="text-8xl animate-spin-slow">{currentBannerData.icon}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Banner Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentBanner === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-2xl opacity-20 animate-bounce">
        🚀
      </div>
      <div className="absolute top-20 right-20 text-2xl opacity-20 animate-bounce delay-1000">
        ⚛️
      </div>
      <div className="absolute bottom-10 left-20 text-2xl opacity-20 animate-bounce delay-2000">
        🧠
      </div>
      <div className="absolute bottom-20 right-10 text-2xl opacity-20 animate-bounce delay-3000">
        🌟
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;