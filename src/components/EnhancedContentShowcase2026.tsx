import React from 'react';
import { motion } from 'framer-motion';

const EnhancedContentShowcase2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2026",
      description: "Experience the most revolutionary technological breakthroughs that will reshape humanity's future",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2026",
      category: "Revolutionary Tech",
      featured: true
    },
    {
      id: 2,
      title: "Revolutionary Innovation Hub 2026",
      description: "The world's most advanced innovation hub where breakthrough technologies are born and developed",
      image: "🌟",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/RevolutionaryInnovationHub2026",
      category: "Innovation",
      featured: true
    },
    {
      id: 3,
      title: "Comprehensive Tech Insights 2026",
      description: "Deep dive into comprehensive analysis of emerging technologies and market trends",
      image: "📊",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/ComprehensiveTechInsights2026",
      category: "Insights",
      featured: true
    },
    {
      id: 4,
      title: "Advanced Quantum Computing 2026",
      description: "Next-generation quantum computing solutions with unprecedented computational power",
      image: "⚛️",
      gradient: "from-purple-600 to-indigo-600",
      link: "/pages/AdvancedQuantumComputing2026",
      category: "Quantum Tech",
      featured: false
    },
    {
      id: 5,
      title: "Neural Interface Revolution 2026",
      description: "Revolutionary brain-computer interfaces enabling direct thought-to-machine communication",
      image: "🧠",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Tech",
      featured: false
    },
    {
      id: 6,
      title: "Advanced AI Systems 2026",
      description: "Next-generation AI systems that surpass human intelligence and operate autonomously",
      image: "🤖",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedAISystems2026",
      category: "AI Systems",
      featured: false
    }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold mb-6 text-white">
          🌟 NEW: Enhanced Content Showcase 2026
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
          Revolutionary Content Collection
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Discover our most comprehensive collection of cutting-edge technology content, 
          featuring the latest innovations, insights, and breakthroughs that will define 2026.
        </p>
      </motion.div>

      {/* Featured Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredContent.map((content, index) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group ${content.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-8 text-white h-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
              {content.featured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}
              
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {content.image}
              </div>
              
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-4">
                {content.category}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                {content.title}
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                {content.description}
              </p>
              
              <a
                href={content.link}
                className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors duration-300 group-hover:translate-x-2 transform"
              >
                Explore Content →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Content Categories</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">AI & Machine Learning</h4>
            <p className="text-gray-600 text-sm">15+ Articles</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Quantum Computing</h4>
            <p className="text-gray-600 text-sm">12+ Articles</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🧬</div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Biotechnology</h4>
            <p className="text-gray-600 text-sm">8+ Articles</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Space Technology</h4>
            <p className="text-gray-600 text-sm">6+ Articles</p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white"
      >
        <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of innovators, researchers, and technology enthusiasts who are already 
          exploring our revolutionary content collection.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Browse All Content →
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
            Subscribe for Updates
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedContentShowcase2026;