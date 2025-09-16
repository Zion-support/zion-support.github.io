import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "🌟 Revolutionary Tech Breakthrough 2027",
      subtitle: "Experience the most advanced technological innovations",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/RevolutionaryTechBreakthrough2027",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2027",
      subtitle: "Discover 50+ revolutionary technologies",
      description: "Interactive demos and real-time innovation tracking",
      link: "/pages/NextGenInnovationHub2027",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🎯 Ultimate Tech Showcase 2027",
      subtitle: "Interactive technology demonstrations",
      description: "Experience the future with live demos and real-time performance",
      link: "/pages/UltimateTechShowcase2027",
      color: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 text-white relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2027
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {banners[currentBanner].title}
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-4">
              {banners[currentBanner].subtitle}
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
              {banners[currentBanner].description}
            </p>
          </div>

          {/* Banner Navigation */}
          <div className="flex justify-center space-x-2 mb-8">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentBanner ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={banners[currentBanner].link}
              className={`bg-gradient-to-r ${banners[currentBanner].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
            >
              {banners[currentBanner].icon} Explore Now →
            </a>
            <a
              href="/pages/NextGenInnovationHub2027"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg text-center"
            >
              View All Innovations
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 left-4 text-2xl animate-bounce">🚀</div>
        <div className="absolute top-8 right-8 text-xl animate-pulse">⚡</div>
        <div className="absolute bottom-4 left-8 text-xl animate-bounce delay-1000">🧠</div>
        <div className="absolute bottom-8 right-4 text-2xl animate-pulse delay-500">🌌</div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;