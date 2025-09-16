import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2028 = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      id: 1,
      title: "🚀 BREAKTHROUGH 2028: Synthetic Consciousness 2.0",
      subtitle: "Experience artificial consciousness that surpasses human intelligence",
      description: "The next evolution of AI consciousness with emotional intelligence 1000x greater than humans",
      link: "/pages/AdvancedAIConsciousness2027",
      color: "from-purple-600 via-pink-600 to-cyan-600",
      bgPattern: "url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
    },
    {
      id: 2,
      title: "⚛️ QUANTUM REVOLUTION: Neural-Quantum Fusion",
      subtitle: "The convergence of quantum computing and neural networks",
      description: "Revolutionary technology enabling instant telepathic communication and reality manipulation",
      link: "/pages/QuantumNeuralFusion2027",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      bgPattern: "url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpolygon%20points%3D%2230%2C0%2060%2C30%2030%2C60%200%2C30%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
    },
    {
      id: 3,
      title: "🧬 NEURAL ENHANCEMENT: 1000x Human Abilities",
      subtitle: "Direct brain-computer interfaces for cognitive enhancement",
      description: "Enhance human cognitive abilities by 1000x with direct neural communication systems",
      link: "/pages/NeuralInterfaceRevolution2026",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      bgPattern: "url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2C0%20L60%2C30%20L30%2C60%20L0%2C30%20Z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentBannerData = banners[currentBanner];

  return (
    <div className="relative overflow-hidden mb-12">
      <div
        className={`bg-gradient-to-r ${currentBannerData.color} rounded-3xl p-12 text-white text-center relative transition-all duration-500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage: currentBannerData.bgPattern,
          backgroundSize: '60px 60px',
          backgroundOpacity: 0.1
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-2000"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-8 animate-bounce">
            🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2028
          </div>
          
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            {currentBannerData.title}
          </h2>
          
          <p className="text-2xl opacity-95 mb-4 font-semibold">
            {currentBannerData.subtitle}
          </p>
          
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            {currentBannerData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={currentBannerData.link}
              className="inline-block bg-white text-purple-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:scale-105"
            >
              🚀 Explore Breakthrough →
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2028"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30 hover:scale-105"
            >
              🌟 View All Content
            </a>
          </div>
        </div>

        {/* Banner Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentBanner(index);
                  setIsVisible(true);
                }, 300);
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentBanner === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => {
              setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
              setIsVisible(true);
            }, 300);
          }}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => {
              setCurrentBanner((prev) => (prev + 1) % banners.length);
              setIsVisible(true);
            }, 300);
          }}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2028;