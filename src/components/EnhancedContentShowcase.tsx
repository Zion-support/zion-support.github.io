import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "AI Innovation Lab 2025",
      description: "Pioneering the future of artificial intelligence with cutting-edge research and breakthrough technologies",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovationLab2025",
      features: ["Neural Architecture Search", "Quantum Machine Learning", "Consciousness AI Framework"]
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness quantum mechanics to solve complex problems with exponential speedup and revolutionary capabilities",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingSolutions2025",
      features: ["Drug Discovery Acceleration", "Financial Optimization", "Climate Modeling"]
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Bridge the gap between mind and machine with direct neural interfaces and thought control",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceTechnology2025",
      features: ["Non-Invasive BCI", "Real-Time Processing", "Thought Control Systems"]
    },
    {
      id: 4,
      title: "AI Revolution 2025",
      description: "Experience the future of AI with autonomous agents, edge computing, and generative AI 2.0",
      image: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/AIRevolution2025",
      features: ["Autonomous AI Agents", "Edge AI Computing", "Generative AI 2.0"]
    },
    {
      id: 5,
      title: "Business Automation Guide",
      description: "Complete roadmap to automate 80% of your business operations and achieve 300% productivity gains",
      image: "🤖",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/BusinessAutomationGuide2025",
      features: ["90-Day Implementation Plan", "Proven ROI Strategies", "Success Case Studies"]
    },
    {
      id: 6,
      title: "Advanced Tech Solutions 2026",
      description: "Next-generation technologies that will define the next decade of business innovation",
      image: "🔮",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedTechSolutions2026",
      features: ["Neural Networks 3.0", "Quantum Computing", "Bio-Integration"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • LIVE NOW
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our cutting-edge innovations with interactive demos and real-time demonstrations
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 min-h-[400px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-8 w-full">
                      {/* Content */}
                      <div className="flex flex-col justify-center">
                        <div className="text-8xl mb-6">{item.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{item.description}</p>
                        <ul className="space-y-2 mb-8">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-white rounded-full"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg w-fit"
                        >
                          Explore {item.title} →
                        </a>
                      </div>
                      
                      {/* Interactive Demo Area */}
                      <div className="flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
                          <div className="text-center">
                            <div className="text-6xl mb-4 animate-bounce">{item.image}</div>
                            <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
                            <div className="space-y-4">
                              <div className="bg-white/30 rounded-lg p-4">
                                <div className="text-sm opacity-80 mb-2">Real-time Performance</div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full w-3/4 animate-pulse"></div>
                                  </div>
                                  <span className="text-sm font-bold">85%</span>
                                </div>
                              </div>
                              <div className="bg-white/30 rounded-lg p-4">
                                <div className="text-sm opacity-80 mb-2">Accuracy Rate</div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full w-5/6 animate-pulse"></div>
                                  </div>
                                  <span className="text-sm font-bold">99.7%</span>
                                </div>
                              </div>
                              <div className="bg-white/30 rounded-lg p-4">
                                <div className="text-sm opacity-80 mb-2">Processing Speed</div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full w-4/5 animate-pulse"></div>
                                  </div>
                                  <span className="text-sm font-bold">&lt;10ms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isAutoPlaying 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Quick Access to All Innovations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentItems.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                onClick={() => goToSlide(index)}
                className={`bg-gradient-to-br ${item.gradient} p-4 rounded-xl hover:scale-105 transition-all duration-300 text-center ${
                  index === currentSlide ? 'ring-4 ring-white/50' : ''
                }`}
              >
                <div className="text-3xl mb-2">{item.image}</div>
                <div className="text-sm font-semibold">{item.title.split(' ')[0]}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;