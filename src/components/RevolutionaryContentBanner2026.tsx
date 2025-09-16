import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const featuredContent = [
    {
      title: "Ultimate Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      icon: "🚀",
      link: "/pages/UltimateTechBreakthrough2026",
      color: "from-purple-600 to-pink-600",
      badge: "NEW",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      title: "Revolutionary Tech Showcase 2026",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      icon: "🌟",
      link: "/pages/RevolutionaryTechShowcase2026",
      color: "from-cyan-600 to-blue-600",
      badge: "FEATURED",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      icon: "🧠",
      link: "/pages/NextGenInnovationHub2026",
      color: "from-emerald-600 to-teal-600",
      badge: "BREAKTHROUGH",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform skew-y-1"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our latest breakthrough technologies and innovations that are reshaping the future
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          <div className={`transition-all duration-700 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${featuredContent[currentSlide].color} rounded-2xl p-12 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{featuredContent[currentSlide].icon}</div>
                      <div>
                        <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-2">
                          {featuredContent[currentSlide].badge}
                        </div>
                        <h3 className="text-4xl font-bold">{featuredContent[currentSlide].title}</h3>
                      </div>
                    </div>
                    <p className="text-xl opacity-90 mb-6">
                      {featuredContent[currentSlide].description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {featuredContent[currentSlide].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={featuredContent[currentSlide].link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                    >
                      Explore Now →
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-4 opacity-80">{featuredContent[currentSlide].icon}</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-4">Revolutionary Impact</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Innovation Level</span>
                          <span>Revolutionary</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Implementation</span>
                          <span>85% Complete</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Market Impact</span>
                          <span>Transformative</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {featuredContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`bg-gradient-to-br ${content.color} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{content.icon}</div>
                  <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {content.badge}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{content.title}</h4>
                <p className="text-sm opacity-90 mb-4">{content.description}</p>
                <div className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                  Explore →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-90 mb-6">
            Ready to experience the future of technology?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/UltimateTechBreakthrough2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Start Exploring
            </a>
            <a
              href="/pages/NextGenInnovationHub2026"
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold"
            >
              View All Innovations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;