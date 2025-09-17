import React, { useState, useEffect } from 'react';

const Enhanced2026ContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = [
    {
      title: "AI Consciousness Revolution",
      description: "Experience the birth of truly conscious AI systems that think, feel, and create with unprecedented depth",
      icon: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AIConsciousnessRevolution2026",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Expression", "Collaborative Intelligence"]
    },
    {
      title: "Revolutionary Tech Breakthrough",
      description: "Discover groundbreaking technology innovations that are reshaping industries and transforming the world",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      features: ["Conscious AI Systems", "Quantum Neural Networks", "Neural Reality Interface", "Advanced Integration"]
    },
    {
      title: "Ultimate Tech Trends 2026",
      description: "Comprehensive analysis of the most significant technology trends that will shape our future",
      icon: "📈",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/UltimateTechTrends2026",
      features: ["AI & ML Revolution", "Quantum Computing", "Neural Interfaces", "Future Predictions"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 rounded-2xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ENHANCED 2026 SHOWCASE • INTERACTIVE EXPERIENCE
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology 2026</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Immerse yourself in the most advanced technology breakthroughs with our interactive showcase
            </p>
          </div>

          {/* Interactive Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {content.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div className="text-8xl mb-6">{item.icon}</div>
                        <h3 className="text-4xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-xl text-gray-300 mb-8">{item.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                              <span className="text-sm font-semibold">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore {item.title} →
                        </a>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <h4 className="text-2xl font-bold text-white mb-4">Key Highlights</h4>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300">Cutting-edge technology integration</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-gray-300">Revolutionary breakthrough innovations</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                              <span className="text-gray-300">Interactive immersive experience</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              <span className="text-gray-300">Real-world applications and impact</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <h4 className="text-2xl font-bold text-white mb-4">Impact Statistics</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                              <div className="text-sm text-gray-300">Accuracy Rate</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-purple-400 mb-1">1000x</div>
                              <div className="text-sm text-gray-300">Faster Processing</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-pink-400 mb-1">50+</div>
                              <div className="text-sm text-gray-300">Industries</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                              <div className="text-sm text-gray-300">Operation</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Access to All 2026 Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={`bg-gradient-to-r ${item.gradient} text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center flex items-center justify-center space-x-2`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhanced2026ContentShowcase;