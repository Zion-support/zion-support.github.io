import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedContentShowcase2025: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase",
      description: "Experience the most advanced technologies reshaping our world",
      category: "Technology",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      features: ["Interactive Demos", "Real-time Data", "VR Experience"],
      link: "/pages/RevolutionaryTechShowcase2025",
      stats: { views: "50K+", rating: "4.9", updates: "Daily" }
    },
    {
      id: 2,
      title: "AI Business Solutions",
      description: "Transform your business with revolutionary AI solutions",
      category: "Business",
      icon: "🤖",
      color: "from-blue-600 to-cyan-600",
      features: ["ROI Calculator", "Live Demo", "Case Studies"],
      link: "/pages/AIBusinessSolutions2025",
      stats: { views: "75K+", rating: "4.8", updates: "Weekly" }
    },
    {
      id: 3,
      title: "Technology Trends 2025",
      description: "Comprehensive analysis of revolutionary technology trends",
      category: "Research",
      icon: "📈",
      color: "from-emerald-600 to-teal-600",
      features: ["Trend Analysis", "Predictions", "Impact Study"],
      link: "/pages/TechnologyTrends2025",
      stats: { views: "100K+", rating: "4.9", updates: "Monthly" }
    },
    {
      id: 4,
      title: "Quantum Neural Revolution",
      description: "Bridging quantum computing with neural interfaces",
      category: "Future Tech",
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      features: ["Quantum Demo", "Neural Interface", "Future Vision"],
      link: "/pages/QuantumNeuralRevolution2030",
      stats: { views: "25K+", rating: "4.7", updates: "Bi-weekly" }
    },
    {
      id: 5,
      title: "Transcendent AI 2031",
      description: "AI that transcends physical limitations across realities",
      category: "AI Evolution",
      icon: "🌟",
      color: "from-indigo-600 to-blue-600",
      features: ["Reality Demo", "AI Evolution", "Transcendence"],
      link: "/pages/TranscendentAI2031",
      stats: { views: "30K+", rating: "4.8", updates: "Weekly" }
    },
    {
      id: 6,
      title: "Ultimate Tech Revolution",
      description: "The complete guide to revolutionary technology",
      category: "Comprehensive",
      icon: "⚡",
      color: "from-orange-600 to-red-600",
      features: ["Complete Guide", "All Technologies", "Master Class"],
      link: "/pages/UltimateTechRevolution2029",
      stats: { views: "200K+", rating: "4.9", updates: "Daily" }
    }
  ];

  const categories = [
    { name: "All", icon: "🌟", count: contentItems.length },
    { name: "Technology", icon: "🚀", count: contentItems.filter(item => item.category === "Technology").length },
    { name: "Business", icon: "🤖", count: contentItems.filter(item => item.category === "Business").length },
    { name: "Research", icon: "📈", count: contentItems.filter(item => item.category === "Research").length },
    { name: "Future Tech", icon: "🧬", count: contentItems.filter(item => item.category === "Future Tech").length },
    { name: "AI Evolution", icon: "🌟", count: contentItems.filter(item => item.category === "AI Evolution").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredContent = selectedCategory === "All" 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 ENHANCED CONTENT SHOWCASE • 2025
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Content Experience
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore our most advanced content with interactive features, 
            real-time data, and immersive experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => window.location.href = item.link}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="text-right">
                  <div className="text-sm opacity-70">{item.category}</div>
                  <div className="text-xs opacity-50">{item.stats.updates}</div>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/80 mb-6 text-sm">{item.description}</p>

              {/* Features */}
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2">Features:</div>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold">{item.stats.views}</div>
                  <div className="text-xs opacity-70">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{item.stats.rating}</div>
                  <div className="text-xs opacity-70">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{item.stats.updates}</div>
                  <div className="text-xs opacity-70">Updates</div>
                </div>
              </div>

              {/* Action Button */}
              <button className={`w-full bg-gradient-to-r ${item.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore Now →
              </button>

              {/* Hover Effect */}
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <div className="text-2xl font-bold mb-2">Click to Explore</div>
                    <div className="text-sm opacity-80">Interactive Experience</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Interactive Features</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience our content like never before with cutting-edge interactive features
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">VR Experience</h3>
              <p className="text-sm opacity-80 mb-4">Immersive virtual reality content exploration</p>
              <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                Try VR
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Data</h3>
              <p className="text-sm opacity-80 mb-4">Live data visualization and analytics</p>
              <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                View Data
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Demos</h3>
              <p className="text-sm opacity-80 mb-4">Hands-on technology demonstrations</p>
              <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                Start Demo
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-sm opacity-80 mb-4">AI-powered content guidance and help</p>
              <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                Chat Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users already experiencing revolutionary content
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Get Notifications
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2025;