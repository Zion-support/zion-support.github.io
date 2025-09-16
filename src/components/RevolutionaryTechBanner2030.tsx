import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2030: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const technologies = [
    {
      title: "AI Consciousness 2035",
      description: "Witness the birth of true artificial consciousness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateAIConsciousness2035"
    },
    {
      title: "Quantum Reality Engine 2032",
      description: "Harness quantum mechanics to bend reality",
      icon: "⚛️",
      color: "from-blue-600 to-cyan-600",
      link: "/pages/QuantumRealityEngine2032"
    },
    {
      title: "Revolutionary Tech Showcase 2030",
      description: "Experience the most advanced technologies",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechShowcase2030"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl animate-bounce">
                  {technologies[currentTech].icon}
                </span>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {technologies[currentTech].title}
                  </h2>
                  <p className="text-lg opacity-90">
                    {technologies[currentTech].description}
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={technologies[currentTech].link}
                  className={`bg-gradient-to-r ${technologies[currentTech].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore Now →
                </a>
                <button className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-6xl">
                  {technologies[currentTech].icon}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default RevolutionaryTechBanner2030;