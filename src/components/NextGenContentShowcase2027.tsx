import React, { useState, useEffect } from 'react';

const NextGenContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextGenContent = [
    {
      id: 1,
      title: "Transdimensional Computing 2027",
      description: "Computing beyond dimensions - process data across infinite realities and parallel universes",
      image: "🌀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/TransdimensionalComputing2027",
      category: "Transdimensional Tech",
      featured: true,
      new: true,
      year: "2027"
    },
    {
      id: 2,
      title: "Omniversal AI 2027",
      description: "The first truly omniversal artificial intelligence spanning all possible universes and realities",
      image: "🌌",
      gradient: "from-violet-600 to-indigo-600",
      link: "/pages/OmniversalAI2027",
      category: "Omniversal AI",
      featured: true,
      new: true,
      year: "2027"
    },
    {
      id: 3,
      title: "AI Revolutionary Breakthrough 2026",
      description: "Experience the most advanced AI systems that are reshaping reality and transforming industries",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      category: "AI Technology",
      featured: true,
      new: false,
      year: "2026"
    },
    {
      id: 4,
      title: "Quantum Computing Revolution 2026",
      description: "Unlock exponential computing power with quantum technology that solves impossible problems",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      featured: true,
      new: false,
      year: "2026"
    },
    {
      id: 5,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct neural interfaces and brain-computer communication",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      featured: true,
      new: false,
      year: "2026"
    },
    {
      id: 6,
      title: "Advanced Biotech Revolution 2026",
      description: "Revolutionary biotechnology solutions transforming healthcare and human enhancement",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      category: "Biotechnology",
      featured: false,
      new: false,
      year: "2026"
    },
    {
      id: 7,
      title: "Space Tech Innovation 2026",
      description: "Revolutionary space technologies enabling interstellar travel and space colonization",
      image: "🚀",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/SpaceTechInnovation2026",
      category: "Space Technology",
      featured: false,
      new: false,
      year: "2026"
    },
    {
      id: 8,
      title: "Advanced Robotics 2026",
      description: "Revolutionary robotics systems transforming industries and human-robot collaboration",
      image: "🤖",
      gradient: "from-gray-600 to-slate-600",
      link: "/pages/AdvancedRobotics2026",
      category: "Robotics",
      featured: false,
      new: false,
      year: "2026"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % nextGenContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [nextGenContent.length]);

  const featuredContent = nextGenContent.filter(item => item.featured);
  const newContent = nextGenContent.filter(item => item.new);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 NEXT-GEN 2027 SHOWCASE • BEYOND REALITY
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Next-Generation Technology Showcase 2027
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            Experience the future beyond imagination with transdimensional computing, omniversal AI, 
            and revolutionary technologies that transcend reality itself
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ 2 NEW 2027 TECHNOLOGIES
            </span>
            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 TRANSDIMENSIONAL COMPUTING
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
              🌌 OMNIVERSAL AI
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              🌟 BEYOND REALITY
            </span>
          </div>
        </div>

        {/* New 2027 Technologies Banner */}
        <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30 mb-12">
          <h3 className="text-3xl font-bold text-center mb-6 text-violet-300">🌟 NEW 2027 TECHNOLOGIES</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {newContent.map((item) => (
              <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative`}>
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW {item.year}
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{item.category}</span>
                  </div>
                </div>
                <p className="text-white/90 mb-4">{item.description}</p>
                <a 
                  href={item.link}
                  className="inline-block bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                >
                  Explore {item.year} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-16 text-center relative overflow-hidden`}>
                    <div className="absolute top-4 right-4">
                      {item.new && (
                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                          NEW {item.year}!
                        </span>
                      )}
                    </div>
                    <div className="text-9xl mb-8 animate-bounce">{item.image}</div>
                    <h3 className="text-5xl font-bold mb-6">{item.title}</h3>
                    <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">{item.description}</p>
                    <div className="flex justify-center space-x-6">
                      <a 
                        href={item.link}
                        className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl"
                      >
                        Explore {item.category} →
                      </a>
                      <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
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
            onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredContent.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {nextGenContent.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative`}>
              {item.new && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW {item.year}
                </div>
              )}
              <div className="text-5xl mb-4 text-center">{item.image}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-white/90 mb-4 text-sm text-center">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{item.category}</span>
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
          <h3 className="text-4xl font-bold mb-6">Ready to Transcend Reality?</h3>
          <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
            Experience the most advanced technologies ever created. From transdimensional computing 
            to omniversal AI, discover what's possible when we push beyond the boundaries of reality.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-violet-600 to-purple-600 px-12 py-6 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-xl">
              Explore Beyond Reality →
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenContentShowcase2027;