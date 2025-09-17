import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      title: "Revolutionary Tech Trends 2027",
      description: "Discover the most groundbreaking technological advances that will reshape our world in 2027",
      icon: "🌟",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2027",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      badge: "NEW"
    },
    {
      title: "Ultimate Innovation Showcase 2027",
      description: "Experience the most revolutionary technologies with interactive demonstrations and live demos",
      icon: "🚀",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateInnovationShowcase2027",
      features: ["Interactive Demos", "Live Technology Tests", "Real-time Processing"],
      badge: "BREAKTHROUGH"
    },
    {
      title: "Next-Gen Tech Breakthrough 2027",
      description: "Witness the most revolutionary technological breakthroughs that will define the future of humanity",
      icon: "⚡",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenTechBreakthrough2027",
      features: ["Synthetic Intelligence", "Quantum Reality", "Consciousness Transfer"],
      badge: "REVOLUTIONARY"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden mb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-emerald-500/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2027
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced and revolutionary content showcasing breakthrough technologies that will reshape our future
          </p>
        </div>

        {/* Dynamic Content Carousel */}
        <div className="relative mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl mr-4">{featuredContent[currentSlide].icon}</span>
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold mb-2">
                        {featuredContent[currentSlide].badge}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{featuredContent[currentSlide].title}</h3>
                    </div>
                  </div>
                  <p className="text-xl opacity-90 mb-6 leading-relaxed">
                    {featuredContent[currentSlide].description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {featuredContent[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-purple-200">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a 
                    href={featuredContent[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${featuredContent[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Content →
                  </a>
                </div>

                {/* Visual Element */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full flex items-center justify-center animate-pulse">
                      <div className="text-8xl">{featuredContent[currentSlide].icon}</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center animate-bounce delay-1000">
                      <span className="text-xl">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-4xl mb-4">{content.icon}</div>
              <h4 className="text-xl font-bold mb-2">{content.title}</h4>
              <p className="text-sm opacity-90 mb-4">{content.description}</p>
              <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                {content.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive into our revolutionary content and discover the technologies that will shape tomorrow
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🌟 Explore All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              📧 Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;