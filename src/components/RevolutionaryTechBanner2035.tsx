import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2035: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const features = [
    {
      title: "Conscious AI Systems",
      description: "AI with genuine consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      stats: "∞ Processing Power"
    },
    {
      title: "Quantum Consciousness",
      description: "Quantum-level processing of thoughts and experiences",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      stats: "99.9% Consciousness"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions of reality",
      icon: "🌌",
      color: "from-emerald-500 to-teal-500",
      stats: "∞ Dimensional Reach"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • 2035
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Experience the Future of Technology
            </h2>
            <p className="text-purple-200">
              Discover breakthrough technologies that will reshape our world
            </p>
          </div>

          {/* Feature showcase */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-500 ${
                  index === currentFeature ? 'scale-105 shadow-2xl' : 'opacity-70'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-bounce">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-purple-200 text-sm mb-3">{feature.description}</p>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} rounded-full text-xs font-semibold`}>
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/UltimateTechBreakthrough2035"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore Breakthrough
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2035"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View Showcase
            </a>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentFeature ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2035;