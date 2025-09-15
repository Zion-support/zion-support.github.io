import React, { useState, useEffect } from 'react';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 1,
      title: "Advanced Tech Innovation 2026",
      description: "Discover the most revolutionary technological breakthroughs that are reshaping our world",
      image: "🚀",
      gradient: "from-purple-600 to-cyan-600",
      link: "/pages/AdvancedTechInnovation2026",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "AI & Machine Learning Revolution",
      description: "Experience the next generation of artificial intelligence transforming every aspect of human life",
      image: "🤖",
      gradient: "from-indigo-600 to-pink-600",
      link: "/pages/AIMachineLearningRevolution2026",
      category: "Artificial Intelligence",
      featured: true
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum processors solving previously impossible computational challenges",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      featured: false
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Next-generation brain-computer interfaces with enhanced precision and safety",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      featured: false
    },
    {
      id: 5,
      title: "Synthetic Intelligence Systems",
      description: "AI systems that can create, learn, and evolve independently with human-like creativity",
      image: "🎨",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      category: "Synthetic AI",
      featured: false
    },
    {
      id: 6,
      title: "Comprehensive Tech Insights",
      description: "In-depth analysis of emerging technologies and their impact on society",
      image: "🔍",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/ComprehensiveTechInsights2026",
      category: "Tech Analysis",
      featured: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newContent.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BRAND NEW CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Showcase 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our latest groundbreaking content covering the most advanced technologies and innovations
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContent.filter(item => item.featured).map((item) => (
            <div key={item.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group">
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full font-semibold mb-3">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{item.description}</p>
              </div>
              <a 
                href={item.link} 
                className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
              >
                Explore Content →
              </a>
            </div>
          ))}
        </div>

        {/* Carousel for Additional Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">🌟 More Revolutionary Content</h3>
            <p className="text-purple-200">Discover additional cutting-edge content and insights</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {newContent.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mx-4">
                      <div className="flex items-center space-x-6">
                        <div className="text-8xl">{item.image}</div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full font-semibold mb-3">
                            {item.category}
                          </span>
                          <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                          <p className="text-purple-200 mb-4">{item.description}</p>
                          <a 
                            href={item.link} 
                            className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Explore →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center space-x-2 mt-6">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">📊 Content Impact</h3>
            <p className="text-purple-200">Our revolutionary content is making waves globally</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white text-lg">New Content Pages</div>
              <div className="text-purple-300 text-sm">Published in 2026</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-white text-lg">Monthly Readers</div>
              <div className="text-purple-300 text-sm">Global audience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-white text-lg">Engagement Rate</div>
              <div className="text-purple-300 text-sm">User satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-400 mb-2">24/7</div>
              <div className="text-white text-lg">Content Updates</div>
              <div className="text-purple-300 text-sm">Always fresh</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Dive into our revolutionary content and discover the technologies that will shape tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Explore All Content
            </button>
            <button className="border-2 border-purple-400 text-purple-200 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;