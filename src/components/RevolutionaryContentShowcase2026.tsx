import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      title: "Revolutionary Tech Insights 2026",
      description: "Discover groundbreaking technological insights that will reshape our world",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      link: "/pages/RevolutionaryTechInsights2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "Advanced Tech Solutions 2026",
      description: "Cutting-edge technological solutions that push the boundaries of possibility",
      features: ["Autonomous AI Orchestrator", "Quantum Neural Networks", "Biological Computing"],
      link: "/pages/AdvancedTechSolutions2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "Future Tech Vision 2026",
      description: "Envisioning the future of technology and its transformative impact on humanity",
      features: ["Planetary Transformation", "Human Enhancement", "Space Colonization"],
      link: "/pages/FutureTechVision2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🔮"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY CONTENT • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Showcase 2026</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced and revolutionary content that will define the future of technology
            </p>
          </div>

          {/* Interactive Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {contentSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="text-8xl mb-6 text-center">{slide.icon}</div>
                          <h3 className="text-4xl font-bold mb-4 text-center">{slide.title}</h3>
                          <p className="text-xl opacity-90 mb-6 text-center">{slide.description}</p>
                          <ul className="space-y-2 mb-8">
                            {slide.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <span className="text-lg">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-center">
                          <a 
                            href={slide.link}
                            className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                          >
                            Explore {slide.title.split(' ')[0]} →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Revolutionary Content</h3>
              <p className="text-purple-100 text-sm">Cutting-edge insights and solutions that define the future</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Interactive Experience</h3>
              <p className="text-cyan-100 text-sm">Immersive and engaging content that captivates and educates</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Future-Ready</h3>
              <p className="text-emerald-100 text-sm">Content that prepares you for the technological future</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-xl opacity-90 mb-8">
              Dive into our revolutionary content and discover what the future holds
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/pages/RevolutionaryTechInsights2026"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Explore Insights →
              </a>
              <a 
                href="/pages/AdvancedTechSolutions2026"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                View Solutions →
              </a>
              <a 
                href="/pages/FutureTechVision2026"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                See Vision →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;