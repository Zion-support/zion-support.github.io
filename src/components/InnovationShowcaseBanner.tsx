import React, { useState, useEffect } from 'react';

const InnovationShowcaseBanner: React.FC = () => {
  const [currentInnovation, setCurrentInnovation] = useState(0);

  const innovations = [
    {
      title: "Space Technology Revolution",
      description: "Interplanetary travel and Mars colonization systems",
      icon: "🚀",
      gradient: "from-blue-600 to-indigo-600",
      stats: "150+ Space Missions"
    },
    {
      title: "Ocean Exploration Tech",
      description: "Deep sea exploration and marine biotechnology",
      icon: "🌊",
      gradient: "from-teal-600 to-cyan-600",
      stats: "10,000m Deep Dives"
    },
    {
      title: "Industrial IoT Innovation",
      description: "Smart manufacturing and predictive maintenance",
      icon: "🏭",
      gradient: "from-orange-600 to-red-600",
      stats: "99.9% Uptime"
    },
    {
      title: "Green Tech Solutions",
      description: "Sustainable and eco-friendly technologies",
      icon: "🌱",
      gradient: "from-green-600 to-emerald-600",
      stats: "Zero Carbon Footprint"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [innovations.length]);

  const currentItem = innovations[currentInnovation];

  return (
    <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-3xl p-8 mb-12 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-cyan-600/30 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-pulse">
            🌟 INNOVATION SHOWCASE 2025 • REVOLUTIONARY TECH
          </div>
          <h2 className="text-5xl font-bold mb-4">🚀 Innovation Revolution</h2>
          <p className="text-2xl opacity-95 max-w-5xl mx-auto">
            Cutting-edge innovations that are reshaping industries and creating new possibilities for the future
          </p>
        </div>

        {/* Featured Innovation Carousel */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className={`bg-gradient-to-r ${currentItem.gradient} rounded-2xl p-8 text-center transition-all duration-700 ease-in-out hover:scale-105`}>
            <div className="text-8xl mb-6 animate-bounce">
              {currentItem.icon}
            </div>
            <h3 className="text-4xl font-bold mb-4">
              {currentItem.title}
            </h3>
            <p className="text-xl opacity-90 mb-4 max-w-3xl mx-auto">
              {currentItem.description}
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-bold mb-6">
              {currentItem.stats}
            </div>
            <a
              href="/pages/InnovationShowcase2025"
              className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              Explore Innovation →
            </a>
          </div>

          {/* Innovation Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {innovations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentInnovation(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentInnovation
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Innovation Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {innovations.map((innovation, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <h4 className="text-lg font-bold mb-2">{innovation.title.split(' ')[0]}</h4>
              <p className="text-sm opacity-90 mb-3">
                {innovation.description.substring(0, 50)}...
              </p>
              <div className="text-xs opacity-75 font-semibold">
                {innovation.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Impact Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-3xl font-bold mb-2">$2.5T</div>
            <h4 className="text-lg font-bold mb-2">Market Value</h4>
            <p className="text-sm opacity-90">
              Total market value created by innovations
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🌍</div>
            <div className="text-3xl font-bold mb-2">150+</div>
            <h4 className="text-lg font-bold mb-2">Countries</h4>
            <p className="text-sm opacity-90">
              Global reach of our innovations
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <h4 className="text-lg font-bold mb-2">Innovations</h4>
            <p className="text-sm opacity-90">
              Revolutionary innovations deployed
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/pages/InnovationShowcase2025"
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              🌟 Explore All Innovations
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg"
            >
              💡 Start Your Innovation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationShowcaseBanner;