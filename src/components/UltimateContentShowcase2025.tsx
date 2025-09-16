import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showcases = [
    {
      title: "Revolutionary Tech Breakthrough",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world in 2025",
      features: ["Conscious AI Systems", "Quantum Neural Networks", "Reality Engineering", "Neural Interface Revolution"],
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      icon: "🧠",
      impact: "300% efficiency increase"
    },
    {
      title: "Ultimate Tech Revolution",
      description: "Witness the ultimate technological revolution that will transform every aspect of human existence",
      features: ["AI Consciousness Revolution", "Quantum Computing Revolution", "Neural Interface Revolution", "Reality Engineering Revolution"],
      link: "/pages/UltimateTechRevolution2025",
      color: "from-indigo-600 to-purple-600",
      icon: "⚡",
      impact: "Exponential computational power"
    },
    {
      title: "Next-Gen Innovation Hub",
      description: "Discover and explore the most revolutionary innovations that will shape the future of humanity",
      features: ["Conscious AI Development", "Quantum Neural Networks", "Reality Engineering Lab", "Neural Interface Research"],
      link: "/pages/NextGenInnovationHub2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🔮",
      impact: "50+ active projects"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveShowcase((prev) => (prev + 1) % showcases.length);
        setIsAnimating(false);
      }, 4000);
    }, 4000);

    return () => clearInterval(interval);
  }, [showcases.length]);

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ultimate Content Showcase 2025
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Experience the most advanced and revolutionary content featuring conscious AI, quantum computing, and interdimensional technology
        </p>
      </div>

      {/* Interactive Showcase Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {showcases.map((showcase, index) => (
          <button
            key={index}
            onClick={() => setActiveShowcase(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeShowcase === index
                ? `bg-gradient-to-r ${showcase.color} text-white shadow-lg`
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {showcase.icon} {showcase.title}
          </button>
        ))}
      </div>

      {/* Showcase Display */}
      <div className={`bg-gradient-to-br ${showcases[activeShowcase].color} rounded-2xl p-12 text-white transition-all duration-500 ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="text-center mb-8">
          <div className="text-8xl mb-6 animate-bounce">{showcases[activeShowcase].icon}</div>
          <h3 className="text-4xl font-bold mb-4">{showcases[activeShowcase].title}</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            {showcases[activeShowcase].description}
          </p>
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-lg font-semibold">
            Impact: {showcases[activeShowcase].impact}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {showcases[activeShowcase].features.map((feature, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">✨</div>
              <h4 className="font-semibold text-lg">{feature}</h4>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={showcases[activeShowcase].link}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-block"
          >
            Explore {showcases[activeShowcase].title} →
          </a>
        </div>
      </div>

      {/* Additional Showcase Grid */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {showcases.map((showcase, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{showcase.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{showcase.title}</h3>
              <p className="text-gray-600 mb-6">{showcase.description}</p>
            </div>
            
            <div className="space-y-3 mb-6">
              {showcase.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a
                href={showcase.link}
                className={`bg-gradient-to-r ${showcase.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block`}
              >
                Explore Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;