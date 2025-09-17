import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "AI Revolutionary Breakthrough 2026",
      description: "Experience the most advanced AI systems that are reshaping reality and transforming industries",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      category: "AI Technology",
      featured: true,
      new: true
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2026",
      description: "Unlock exponential computing power with quantum technology that solves impossible problems",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      featured: true,
      new: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct neural interfaces and brain-computer communication",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      featured: true,
      new: true
    },
    {
      id: 4,
      title: "Advanced Biotech Revolution 2026",
      description: "Revolutionary biotechnology solutions transforming healthcare and human enhancement",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      category: "Biotechnology",
      featured: true,
      new: true
    },
    {
      id: 5,
      title: "Space Tech Innovation 2026",
      description: "Revolutionary space technologies enabling interstellar travel and space colonization",
      image: "🚀",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/SpaceTechInnovation2026",
      category: "Space Technology",
      featured: true,
      new: true
    },
    {
<<<<<<< HEAD
      id: "6",
      title: "Neural Interfaces",
      description: "Brain-computer interface technologies",
      icon: "🧠",
      category: "neural",
      link: "/pages/NeuralInterfaceRevolution2026"
    };
  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */};
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the latest breakthroughs in technology and innovation that are reshaping our world.
=======
      id: 6,
      title: "Advanced Robotics 2026",
      description: "Revolutionary robotics systems transforming industries and human-robot collaboration",
      image: "🤖",
      gradient: "from-gray-600 to-slate-600",
      link: "/pages/AdvancedRobotics2026",
      category: "Robotics",
      featured: true,
      new: true
    },
    {
      id: 7,
      title: "Synthetic Intelligence 2026",
      description: "Next-generation artificial intelligence that surpasses human cognitive capabilities",
      image: "🤖",
      gradient: "from-fuchsia-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      category: "Synthetic AI",
      featured: false,
      new: false
    },
    {
      id: 8,
      title: "Revolutionary Tech Blog 2026",
      description: "Stay updated with the latest technology trends, insights, and breakthroughs",
      image: "📚",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Tech Insights",
      featured: false,
      new: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 ULTIMATE 2026 SHOWCASE • REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🌟 Ultimate Technology Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, 
            Neural Interfaces, Biotech, Space Tech, and Advanced Robotics
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ 6 NEW REVOLUTIONARY PAGES
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 CUTTING-EDGE TECHNOLOGY
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
              🌟 INTERACTIVE SHOWCASE
            </span>
          </div>
        </div>

<<<<<<< HEAD
        {/* Filter Tabs */};
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'ai', 'quantum', 'analytics', 'biotech', 'space', 'neural'].map((tab) => (
            <button
              key={tab};
              onClick={() => setActiveTab(tab)};
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`};
            >
              {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)};
            </button>
          ))};
        </div>

        {/* Content Grid */};
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id};
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <Link
                to={item.link};
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn More →
              </Link>
=======
        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-16 text-center relative overflow-hidden`}>
                    <div className="absolute top-4 right-4">
                      {item.new && (
                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                          NEW!
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
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contentItems.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative`}>
              {item.new && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
            </div>
          ))};
        </div>

        {/* Call to Action */};
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
            Dive into our revolutionary content and discover the technologies that are shaping tomorrow. 
            Experience the most advanced AI, Quantum Computing, Neural Interfaces, and more.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-6 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-xl">
              Explore All Content →
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
  };
=======
};

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
export default UltimateContentShowcase2026;