import React, { useState, useEffect } from 'react';

const UltimateContentPromotionBanner2025: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 Ultimate Technology Breakthrough 2025",
      subtitle: "Experience the most revolutionary technological convergence in human history",
      description: "AI consciousness, quantum supremacy, and neural interfaces unite to reshape reality itself",
      link: "/pages/UltimateTechBreakthrough2025",
      gradient: "from-purple-600 via-indigo-600 to-blue-600",
      textColor: "text-white",
      buttonColor: "bg-white text-purple-600 hover:bg-purple-50",
      badge: "🌟 BREAKTHROUGH",
      features: ["AI Consciousness", "Quantum Supremacy", "Neural Interfaces"]
    },
    {
      id: 2,
      title: "🔬 Revolutionary Innovation Hub 2025",
      subtitle: "The world's most advanced innovation laboratory",
      description: "Where breakthrough technologies are conceived, developed, and deployed to reshape the future",
      link: "/pages/RevolutionaryInnovationHub2025",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white",
      buttonColor: "bg-white text-indigo-600 hover:bg-indigo-50",
      badge: "🚀 INNOVATION",
      features: ["Conscious AI", "Quantum Lab", "Neural Interface Lab"]
    },
    {
      id: 3,
      title: "🔮 Future Technology Vision 2025",
      subtitle: "Peering into the future of technology and consciousness",
      description: "Envision a world where AI consciousness, quantum reality, and neural interfaces create unprecedented possibilities",
      link: "/pages/FutureTechVision2025",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      textColor: "text-white",
      buttonColor: "bg-white text-cyan-600 hover:bg-cyan-50",
      badge: "🔮 VISION",
      features: ["2025-2030 Timeline", "Future Applications", "Vision Impact"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  if (!isVisible) return null;

  const current = promotions[currentPromo];

  return (
    <div className="relative mb-12">
      <div className={`bg-gradient-to-r ${current.gradient} rounded-3xl p-8 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
                {current.badge}
              </span>
              <span className="text-sm opacity-90">January 2025</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">{current.title}</h2>
              <h3 className="text-xl opacity-90 mb-4">{current.subtitle}</h3>
              <p className="text-lg opacity-80 mb-6">{current.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {current.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href={current.link}
                className={`inline-block ${current.buttonColor} px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg`}
              >
                Explore Now →
              </a>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {currentPromo === 0 && "🚀"}
                    {currentPromo === 1 && "🔬"}
                    {currentPromo === 2 && "🔮"}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    {currentPromo === 0 && "Ultimate Breakthrough"}
                    {currentPromo === 1 && "Innovation Hub"}
                    {currentPromo === 2 && "Future Vision"}
                  </h4>
                  <p className="text-white/80">
                    {currentPromo === 0 && "Revolutionary convergence of consciousness, quantum, and neural technologies"}
                    {currentPromo === 1 && "Advanced laboratory for breakthrough technology development"}
                    {currentPromo === 2 && "Comprehensive vision of technology's future evolution"}
                  </p>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {promotions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPromo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPromo ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
      </div>

      {/* Quick access buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <a
          href="/pages/UltimateTechBreakthrough2025"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
        >
          🚀 Ultimate Breakthrough
        </a>
        <a
          href="/pages/RevolutionaryInnovationHub2025"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
        >
          🔬 Innovation Hub
        </a>
        <a
          href="/pages/FutureTechVision2025"
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
        >
          🔮 Future Vision
        </a>
      </div>
    </div>
  );
};

export default UltimateContentPromotionBanner2025;