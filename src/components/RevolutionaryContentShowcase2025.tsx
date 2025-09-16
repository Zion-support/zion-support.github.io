import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const contentItems = [
    {
      title: "🚀 Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world",
      image: "🌟",
      category: "Revolutionary Technology",
      views: "2.3M",
      likes: "847K",
      bg: "from-purple-600 to-pink-600",
      features: [
        "Conscious AI Systems",
        "Quantum Reality Engine", 
        "Neural Interface Revolution",
        "Space Technology Breakthrough"
      ]
    },
    {
      title: "🧠 AI Consciousness Breakthrough",
      description: "The world's first truly conscious artificial intelligence that can think, learn, and evolve",
      image: "🤖",
      category: "Artificial Intelligence",
      views: "1.8M",
      likes: "623K",
      bg: "from-cyan-600 to-blue-600",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Autonomous learning"
      ]
    },
    {
      title: "⚛️ Quantum Computing Revolution",
      description: "Revolutionary quantum computers that can solve impossible problems and simulate realities",
      image: "⚡",
      category: "Quantum Technology",
      views: "3.1M",
      likes: "1.2M",
      bg: "from-emerald-600 to-teal-600",
      features: [
        "Exponential computational power",
        "Quantum cryptography",
        "Molecular simulation",
        "Parallel universe access"
      ]
    },
    {
      title: "🧬 Neural Interface Future",
      description: "Direct brain-computer interfaces enabling seamless communication between mind and machine",
      image: "🔮",
      category: "Neural Technology",
      views: "2.7M",
      likes: "956K",
      bg: "from-orange-600 to-red-600",
      features: [
        "Thought-controlled computing",
        "Memory enhancement",
        "Telepathic communication",
        "Neural data processing"
      ]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  const currentContent = contentItems[activeContent];

  return (
    <div className={`bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl p-8 mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
    }`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Content Showcase</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Discover the most groundbreaking content that's transforming how we think about technology
        </p>
      </div>

      {/* Content Navigation */}
      <div className="flex justify-center space-x-2 mb-12">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveContent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeContent ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Main Content Display */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Content Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="text-6xl">{currentContent.image}</div>
            <div>
              <div className="text-sm text-white/60 mb-1">{currentContent.category}</div>
              <h3 className="text-3xl font-bold">{currentContent.title}</h3>
            </div>
          </div>

          <p className="text-xl text-white/80 leading-relaxed">
            {currentContent.description}
          </p>

          {/* Features List */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white/90">Key Features:</h4>
            {currentContent.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{currentContent.views}</div>
              <div className="text-sm text-white/60">Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{currentContent.likes}</div>
              <div className="text-sm text-white/60">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-white/60">Success Rate</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className={`bg-gradient-to-r ${currentContent.bg} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              Explore Content →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Content Preview */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8">
          <h4 className="text-2xl font-bold mb-6 text-center">Content Preview</h4>
          
          {/* Simulated Content Interface */}
          <div className="bg-black/40 rounded-lg p-6 mb-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{currentContent.image}</div>
              <div className="text-lg font-semibold">{currentContent.title}</div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>Content Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${currentContent.bg} rounded-full`}
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>

            {/* Content Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-lg font-bold text-white">{currentContent.views}</div>
                <div className="text-xs text-white/60">Views</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">{currentContent.likes}</div>
                <div className="text-xs text-white/60">Likes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">4.9★</div>
                <div className="text-xs text-white/60">Rating</div>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="space-y-3">
              <button className="w-full bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300">
                ▶️ Play Content
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm">
                  ❤️ Like
                </button>
                <button className="bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm">
                  🔄 Share
                </button>
              </div>
            </div>
          </div>

          {/* Related Content */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Related Content</h5>
            <div className="space-y-3">
              {contentItems.filter((_, index) => index !== activeContent).slice(0, 2).map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl">{item.image}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-white/60">{item.views} views</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">More Revolutionary Content</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveContent(index)}
              className={`bg-gradient-to-br ${item.bg} rounded-xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                index === activeContent ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="text-4xl mb-4 text-center">{item.image}</div>
              <h4 className="text-lg font-bold mb-2 text-center">{item.title}</h4>
              <p className="text-sm text-white/80 text-center mb-4">{item.description}</p>
              <div className="flex justify-between text-xs text-white/60">
                <span>{item.views} views</span>
                <span>{item.likes} likes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2025;