import React, { memo, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Users, TrendingUp } from 'lucide-react';

const ContentCarousel: React.FC = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI-Powered Business Transformation",
      description: "See how we helped a Fortune 500 company achieve 300% ROI with our AI solutions",
      image: "/images/case-studies/ai-transformation.jpg",
      stats: { roi: "300%", clients: "500+", uptime: "99.9%" }
    },
    {
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum algorithms that solved complex optimization problems",
      image: "/images/case-studies/quantum-computing.jpg",
      stats: { performance: "1000x", accuracy: "99.9%", speed: "10x" }
    },
    {
      title: "Autonomous Systems Implementation",
      description: "Self-managing infrastructure that reduced operational costs by 70%",
      image: "/images/case-studies/autonomous-systems.jpg",
      stats: { savings: "70%", efficiency: "90%", downtime: "0%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800/50 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients who transformed their businesses with our solutions
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="quantum-card p-8 overflow-hidden">
            <div className="relative">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {content.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                        <p className="text-xl text-gray-300 leading-relaxed">{item.description}</p>
                        
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(item.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-2xl font-bold text-cyan-400">{value}</div>
                              <div className="text-sm text-gray-400 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <button className="cyber-button inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 group">
                          <Play className="w-4 h-4 mr-2" />
                          <span>Watch Case Study</span>
                        </button>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse">
                              <TrendingUp className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-cyan-400 font-bold text-xl">Case Study</div>
                            <div className="text-gray-300">Coming Soon</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContentCarousel.displayName = 'ContentCarousel';
export default ContentCarousel;