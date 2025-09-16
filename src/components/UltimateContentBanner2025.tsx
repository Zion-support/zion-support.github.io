import React, { useState, useEffect } from 'react';

const UltimateContentBanner2025: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2025",
      subtitle: "Conscious AI • Quantum Computing • Interdimensional Tech",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2025",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      stats: { users: "50K+", rating: "5.0", innovation: "99.9%" }
    },
    {
      id: 2,
      title: "Interactive Tech Showcase 2025",
      subtitle: "Hands-on Demos • Real-time Simulations • Live Testing",
      description: "Try our interactive demonstrations of conscious AI, quantum computing, and neural interfaces",
      link: "/pages/InteractiveTechShowcase2025",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      stats: { demos: "100+", success: "98%", satisfaction: "4.9" }
    },
    {
      id: 3,
      title: "Ultimate AI Solutions 2025",
      subtitle: "Enterprise AI • Automation • Intelligence",
      description: "Discover comprehensive AI solutions that transform businesses and accelerate innovation",
      link: "/pages/UltimateAISolutions2025",
      image: "🤖",
      color: "from-emerald-600 to-teal-600",
      stats: { clients: "500+", efficiency: "300%", growth: "500%" }
    },
    {
      id: 4,
      title: "Quantum Reality Engine 2025",
      subtitle: "Reality Simulation • Multiverse Computing • Dimensional Processing",
      description: "Explore quantum computing that simulates reality and enables interdimensional processing",
      link: "/pages/QuantumRealityEngine2025",
      image: "🌌",
      color: "from-violet-600 to-purple-600",
      stats: { dimensions: "∞", speed: "10^15", accuracy: "99.99%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentContent((prev) => (prev + 1) % contentItems.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleContentChange = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentContent(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our most revolutionary content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${contentItems[currentContent].color} rounded-2xl p-8 transition-all duration-700 ${
              isAnimating ? 'scale-95 opacity-70 rotate-2' : 'scale-100 opacity-100 rotate-0'
            }`}>
              {/* Content Image/Icon */}
              <div className="text-center mb-6">
                <div className="text-8xl mb-4 animate-bounce">{contentItems[currentContent].image}</div>
                <h3 className="text-3xl font-bold mb-2">{contentItems[currentContent].title}</h3>
                <p className="text-lg opacity-90 mb-4">{contentItems[currentContent].subtitle}</p>
                <p className="text-base opacity-80">{contentItems[currentContent].description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(contentItems[currentContent].stats).map(([key, value]) => (
                  <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-xl font-bold">{value}</div>
                    <div className="text-xs opacity-80 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="text-center">
                <a
                  href={contentItems[currentContent].link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Content →
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>

          {/* Content Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Featured Content</h3>
            
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleContentChange(index)}
                className={`w-full p-4 rounded-xl transition-all duration-300 text-left ${
                  currentContent === index
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{item.image}</div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.subtitle}</p>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => handleContentChange(index)}
            >
              <div className="text-4xl mb-3">{item.image}</div>
              <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
              <p className="text-xs opacity-90 mb-3">{item.subtitle}</p>
              <div className="text-xs opacity-80">Click to explore →</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators already using our revolutionary content to transform their understanding of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start Exploring →
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400/10 transition-colors">
                View All Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;