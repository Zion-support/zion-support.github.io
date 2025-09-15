import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentCarousel: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Blog 2026",
      description: "Stay ahead with cutting-edge insights, breakthrough technologies, and expert analysis from the forefront of innovation.",
      image: "📚",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Blog",
      readTime: "5 min read",
      features: ["Expert Analysis", "Tech Insights", "Industry Trends", "Innovation Updates"],
      stats: { views: "50K+", likes: "2.5K", shares: "800+" }
    },
    {
      id: 2,
      title: "Comprehensive Tech Insights 2026",
      description: "Deep dive into the latest technology trends, market analysis, and future predictions from industry experts.",
      image: "🔍",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/ComprehensiveTechInsights2026",
      category: "Insights",
      readTime: "8 min read",
      features: ["Market Analysis", "Future Predictions", "Expert Opinions", "Trend Reports"],
      stats: { views: "75K+", likes: "3.2K", shares: "1.2K+" }
    },
    {
      id: 3,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with autonomous reasoning, quantum-enhanced processing, and global neural networks.",
      image: "🧠",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenAIRevolution2026",
      category: "AI",
      readTime: "12 min read",
      features: ["Autonomous Reasoning", "Quantum Processing", "Global Neural Networks", "Industry Transformation"],
      stats: { views: "100K+", likes: "5.8K", shares: "2.1K+" }
    },
    {
      id: 4,
      title: "Quantum Computing Revolution",
      description: "Unlock exponential computing power that solves impossible problems in real-time with quantum supremacy and molecular simulation.",
      image: "⚡",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum",
      readTime: "10 min read",
      features: ["Quantum Supremacy", "Molecular Simulation", "Unbreakable Encryption", "Climate Modeling"],
      stats: { views: "85K+", likes: "4.3K", shares: "1.8K+" }
    },
    {
      id: 5,
      title: "Neural Interface Revolution",
      description: "Break through barriers between human consciousness and digital systems with direct thought control and memory enhancement.",
      image: "🧬",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural",
      readTime: "7 min read",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking", "Medical Applications"],
      stats: { views: "65K+", likes: "3.7K", shares: "1.5K+" }
    },
    {
      id: 6,
      title: "Advanced Analytics Dashboard 2026",
      description: "Real-time analytics and insights powered by AI and quantum computing for data-driven decision making.",
      image: "📊",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/AdvancedAnalyticsDashboard2026",
      category: "Analytics",
      readTime: "6 min read",
      features: ["Real-time Data", "AI Insights", "Predictive Analytics", "Interactive Dashboards"],
      stats: { views: "45K+", likes: "2.8K", shares: "950+" }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveContent((prev) => (prev + 1) % contentItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, contentItems.length]);

  const currentItem = contentItems[activeContent];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE CONTENT CAROUSEL • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Revolutionary Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our most engaging content featuring cutting-edge technology insights, 
            breakthrough innovations, and expert analysis from industry leaders.
          </p>
        </div>

        {/* Main Content Display */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${currentItem.gradient} p-12 rounded-2xl`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                        {currentItem.category}
                      </span>
                      <span className="text-sm opacity-80">{currentItem.readTime}</span>
                    </div>
                    
                    <div className="text-6xl mb-6">{currentItem.image}</div>
                    <h3 className="text-4xl font-bold mb-6">{currentItem.title}</h3>
                    <p className="text-xl opacity-90 mb-8">{currentItem.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {currentItem.features.map((feature, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                          <span className="text-sm font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={currentItem.link}
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                      >
                        Read Full Article →
                      </a>
                      <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Stats Display */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-2xl font-bold mb-4 text-center">Engagement Stats</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(currentItem.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-white">{value}</div>
                            <div className="text-sm opacity-80 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Preview */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-2xl font-bold mb-4 text-center">Content Preview</h4>
                      <div className="space-y-3">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="h-2 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-3/4"></div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="h-2 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-1/2"></div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="h-2 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={() => setActiveContent((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setActiveContent((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                hoveredItem === item.id ? 'ring-4 ring-white/30' : ''
              }`}
              onClick={() => setActiveContent(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  {item.category}
                </span>
                <span className="text-sm opacity-80">{item.readTime}</span>
              </div>
              
              <div className="text-4xl mb-4 text-center">{item.image}</div>
              <h4 className="text-xl font-bold mb-3 text-center">{item.title}</h4>
              <p className="text-sm opacity-90 text-center mb-4 line-clamp-2">{item.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                  <span className="font-semibold">{item.stats.views}</span> views
                </div>
                <div className="text-sm">
                  <span className="font-semibold">{item.stats.likes}</span> likes
                </div>
              </div>
              
              <a
                href={item.link}
                className="block w-full bg-white/20 text-white text-center py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
              >
                Read Article →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Content Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
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
      </div>
    </div>
  );
};

export default InteractiveContentCarousel;