import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🌟 Revolutionary Tech Showcase 2035",
      subtitle: "Experience the Future of Technology",
      description: "Discover groundbreaking innovations that will reshape our world",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ Next-Gen AI Revolution",
      subtitle: "Artificial Intelligence Reimagined",
      description: "Advanced AI systems that think, learn, and adapt like never before",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🤖"
    },
    {
      title: "🌐 Quantum Computing Breakthrough",
      subtitle: "Computing at the Speed of Light",
      description: "Quantum processors that solve impossible problems in seconds",
      gradient: "from-emerald-600 to-teal-600",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2035
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {slides[currentSlide].title}
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          
          <p className="text-lg text-purple-300 mb-12 max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/pages/RevolutionaryTechShowcase2035" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              {slides[currentSlide].icon} Explore Now →
            </a>
            <a 
              href="/pages/NextGenInnovationHub2035" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/30"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-2">Revolutionary Innovation</h3>
            <p className="text-purple-200">Cutting-edge technology that pushes the boundaries of what's possible</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-purple-200">Ultra-fast processing and response times for maximum efficiency</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              🌐
            </div>
            <h3 className="text-xl font-bold mb-2">Global Impact</h3>
            <p className="text-purple-200">Technology that transforms industries and improves lives worldwide</p>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-emerald-500/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2035;