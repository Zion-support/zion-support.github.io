import React, { useState, useEffect } from 'react';

const NewContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const newContent = [
    {
      id: 1,
      title: "AI Future Trends 2027",
      description: "Explore consciousness-level AI and quantum-enhanced neural networks",
      image: "🧠",
      link: "/pages/AIFutureTrends2027",
      color: "from-indigo-600 to-purple-600",
      stats: "99.7% Consciousness Score"
    },
    {
      id: 2,
      title: "Blockchain Revolution 2027",
      description: "Quantum-resistant blockchain with infinite scalability",
      image: "🔗",
      link: "/pages/BlockchainRevolution2027",
      color: "from-emerald-600 to-teal-600",
      stats: "∞ TPS Capacity"
    },
    {
      id: 3,
      title: "Cybersecurity Fortress 2026",
      description: "AI-powered threat detection with 99.99% accuracy",
      image: "🛡️",
      link: "/pages/CybersecurityFortress2026",
      color: "from-red-600 to-orange-600",
      stats: "99.99% Threat Detection"
    },
    {
      id: 4,
      title: "Future Tech Insights 2027",
      description: "Comprehensive analysis of revolutionary technologies",
      image: "📚",
      link: "/pages/FutureTechInsights2027",
      color: "from-slate-600 to-gray-600",
      stats: "∞ Innovation Potential"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newContent.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 NEW CONTENT SHOWCASE • JANUARY 2027
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Revolutionary New Content</h2>
        <p className="text-xl text-gray-600">Discover our latest breakthrough technologies and insights</p>
      </div>

      {/* Interactive Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newContent.map((content, index) => (
              <div key={content.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${content.color} rounded-2xl p-12 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="text-8xl mb-6">{content.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{content.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{content.description}</p>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                          <div className="text-2xl font-bold">{content.stats}</div>
                          <div className="text-sm opacity-80">Performance Metric</div>
                        </div>
                        <a 
                          href={content.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                      </div>
                      
                      <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                          <h4 className="text-xl font-bold mb-4">Key Features</h4>
                          <ul className="space-y-3 text-white/90">
                            <li className="flex items-center space-x-3">
                              <span className="w-2 h-2 bg-white rounded-full"></span>
                              <span>Revolutionary breakthrough technology</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <span className="w-2 h-2 bg-white rounded-full"></span>
                              <span>Industry-leading performance metrics</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <span className="w-2 h-2 bg-white rounded-full"></span>
                              <span>Future-proof architecture</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <span className="w-2 h-2 bg-white rounded-full"></span>
                              <span>Comprehensive implementation guide</span>
                            </li>
                          </ul>
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
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-indigo-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide(currentSlide === 0 ? newContent.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % newContent.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          →
        </button>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {newContent.map((content, index) => (
          <div 
            key={content.id}
            className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
              index === currentSlide ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
            }`}
          >
            <div className="text-4xl mb-4 text-center">{content.image}</div>
            <h4 className="text-lg font-bold mb-2 text-center">{content.title}</h4>
            <p className="text-gray-600 text-sm mb-4 text-center">{content.description}</p>
            <a 
              href={content.link}
              className="block w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors text-center font-semibold text-sm"
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewContentShowcase;