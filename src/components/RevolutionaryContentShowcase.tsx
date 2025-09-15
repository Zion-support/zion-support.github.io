import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with revolutionary technologies that are reshaping industries",
      image: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIRevolution2026",
      category: "AI Technology",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2026",
      description: "Unlock exponential computing power with quantum technology that solves impossible problems",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct neural interfaces and brain-computer communication",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      featured: true
    },
    {
      id: 4,
      title: "Revolutionary Tech Blog 2026",
      description: "Stay updated with the latest technology trends, insights, and breakthroughs",
      image: "📚",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Tech Insights",
      featured: false
    },
    {
      id: 5,
      title: "Comprehensive Tech Insights 2026",
      description: "Deep dive into technology trends, market analysis, and future predictions",
      image: "🔍",
      gradient: "from-indigo-600 to-pink-600",
      link: "/pages/ComprehensiveTechInsights2026",
      category: "Analysis",
      featured: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6 animate-bounce">{item.image}</div>
                    <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{item.description}</p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={item.link}
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                      >
                        Explore {item.category} →
                      </a>
                      <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contentItems.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300`}>
              <div className="text-4xl mb-4 text-center">{item.image}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-white/90 mb-4 text-sm text-center">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{item.category}</span>
                <a 
                  href={item.link}
                  className="text-white hover:text-white/80 transition-colors font-semibold text-sm"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive into our revolutionary content and discover the technologies that are shaping tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;