import React, { useState, useEffect } from 'react';

const EnhancedAdvertisingBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const advertisements = [
    {
      id: 1,
      title: "🚀 BREAKTHROUGH: Next-Gen AI 2026",
      subtitle: "Experience Revolutionary Synthetic Intelligence",
      description: "Discover the future of AI with our groundbreaking synthetic intelligence systems that transcend traditional computing",
      cta: "Explore Now",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ QUANTUM REVOLUTION 2026",
      subtitle: "Advanced Quantum Computing Solutions",
      description: "Unlock exponential processing power with 1000+ qubit quantum processors and quantum supremacy technology",
      cta: "Go Quantum",
      link: "/pages/AdvancedQuantumComputing2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "🧬 NEURAL INTERFACE 2026",
      subtitle: "Direct Brain-Computer Communication",
      description: "Bridge mind and machine with revolutionary neural interface technology for thought-controlled devices",
      cta: "Connect Mind & Machine",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌟 ULTIMATE TECH SHOWCASE",
      subtitle: "Interactive Technology Experience",
      description: "Experience the most advanced technologies with live demos, real-time simulations, and hands-on experiments",
      cta: "Explore Ultimate Showcase",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🌟"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [advertisements.length]);

  if (!isVisible) return null;

  const currentAdvertisement = advertisements[currentAd];

  return (
    <div className="relative overflow-hidden">
      {/* Main Advertising Banner */}
      <div className={`bg-gradient-to-r ${currentAdvertisement.gradient} text-white py-4 px-6 relative`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl animate-bounce">{currentAdvertisement.icon}</div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold animate-pulse">
                    NEW
                  </span>
                  <h3 className="text-xl font-bold">{currentAdvertisement.title}</h3>
                </div>
                <p className="text-sm opacity-90">{currentAdvertisement.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-sm opacity-90 max-w-md">{currentAdvertisement.description}</p>
              </div>
              <a
                href={currentAdvertisement.link}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {currentAdvertisement.cta} →
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-2 py-2 bg-gray-50">
        {advertisements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentAd(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentAd ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Additional Promotional Banners */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-lg">⚡</span>
              <span>Lightning Fast Processing</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🎯</span>
              <span>99.9% Accuracy</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🚀</span>
              <span>Cutting-Edge Innovation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🌟</span>
              <span>Revolutionary Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAdvertisingBanner;