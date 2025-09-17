import React, { useState, useEffect } from 'react';

const RevolutionaryTechAdvertisingBanner2025: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const advertisements = [
    {
      title: "🚀 Revolutionary AI Breakthrough 2025",
      subtitle: "Experience the future of artificial intelligence",
      description: "Discover autonomous AI systems that think, learn, and act independently",
      link: "/pages/RevolutionaryAIBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "⚡ Next-Gen Quantum Computing 2025",
      subtitle: "Unlock impossible problems with quantum power",
      description: "Solve complex calculations millions of times faster than classical computers",
      link: "/pages/NextGenQuantumComputing2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/20 to-blue-900/20"
    },
    {
      title: "🧬 Advanced Neural Interfaces 2025",
      subtitle: "Bridge the gap between mind and machine",
      description: "Control devices and applications using only your thoughts",
      link: "/pages/AdvancedNeuralInterfaces2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20"
    },
    {
      title: "📰 Revolutionary Tech Blog 2025",
      subtitle: "Stay ahead with cutting-edge insights",
      description: "Latest breakthroughs, innovations, and technology trends",
      link: "/pages/RevolutionaryTechBlog2025",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/20 to-red-900/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 animate-pulse"></div>
      
      {/* Main Banner */}
      <div className={`relative bg-gradient-to-r ${advertisements[currentAd].bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500`}>
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 text-6xl opacity-20 animate-bounce">
          {currentAd === 0 && "🤖"}
          {currentAd === 1 && "⚡"}
          {currentAd === 2 && "🧬"}
          {currentAd === 3 && "📰"}
        </div>
        
        <div className="absolute bottom-4 left-4 text-4xl opacity-10 animate-pulse">
          {currentAd === 0 && "🧠"}
          {currentAd === 1 && "🔮"}
          {currentAd === 2 && "🎯"}
          {currentAd === 3 && "💡"}
        </div>

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            NEW BREAKTHROUGH TECHNOLOGY
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {advertisements[currentAd].title}
              </h2>
              <p className="text-xl text-white/90 mb-4">
                {advertisements[currentAd].subtitle}
              </p>
              <p className="text-lg text-white/80 mb-6">
                {advertisements[currentAd].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={advertisements[currentAd].link}
                  className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${advertisements[currentAd].gradient} text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center">
              <div className={`w-64 h-64 bg-gradient-to-br ${advertisements[currentAd].gradient} rounded-full flex items-center justify-center text-8xl opacity-80 animate-pulse`}>
                {currentAd === 0 && "🤖"}
                {currentAd === 1 && "⚡"}
                {currentAd === 2 && "🧬"}
                {currentAd === 3 && "📰"}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {advertisements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentAd 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Additional Promotional Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-purple-400/30">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-lg font-bold mb-2">AI-Powered Solutions</h3>
          <p className="text-sm text-gray-300 mb-4">Transform your business with intelligent automation</p>
          <a href="/pages/RevolutionaryAIBreakthrough2025" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
            Discover AI →
          </a>
        </div>

        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-cyan-400/30">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
          <p className="text-sm text-gray-300 mb-4">Solve impossible problems with quantum power</p>
          <a href="/pages/NextGenQuantumComputing2025" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
            Explore Quantum →
          </a>
        </div>

        <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-emerald-400/30">
          <div className="text-3xl mb-3">🧬</div>
          <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
          <p className="text-sm text-gray-300 mb-4">Connect your mind directly to technology</p>
          <a href="/pages/AdvancedNeuralInterfaces2025" className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm">
            Try Neural →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechAdvertisingBanner2025;