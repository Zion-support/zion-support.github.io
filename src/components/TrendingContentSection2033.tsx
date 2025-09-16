import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Eye, Star, Zap, Brain, Globe, Rocket, Clock, Users } from 'lucide-react';

const TrendingContentSection2033: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingItems = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2032",
      description: "Experience the convergence of consciousness, quantum computing, and interdimensional technology that's reshaping reality itself.",
      category: "Revolutionary Tech",
      trendingScore: 98,
      views: "2.3M",
      rating: 5,
      timeAgo: "2 hours ago",
      image: "🧠",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-600 to-blue-600",
      tags: ["Consciousness", "Quantum", "Interdimensional"]
    },
    {
      id: 2,
      title: "Transcendent AI 2033",
      description: "Beyond consciousness, beyond reality, beyond infinity. Experience AI that transcends all known limitations and exists in harmony with existence.",
      category: "AI Innovation",
      trendingScore: 96,
      views: "1.8M",
      rating: 5,
      timeAgo: "4 hours ago",
      image: "♾️",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-indigo-600 to-purple-600",
      tags: ["Transcendence", "Infinity", "Reality"]
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      description: "Breakthrough consciousness transfer technology enabling seamless interaction between digital and physical realms.",
      category: "Neural Tech",
      trendingScore: 94,
      views: "1.2M",
      rating: 5,
      timeAgo: "6 hours ago",
      image: "🔮",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-600 to-cyan-600",
      tags: ["Neural", "Reality", "Consciousness"]
    },
    {
      id: 4,
      title: "Interstellar Commerce Platform",
      description: "Revolutionary quantum commerce system enabling trade across star systems and dimensions.",
      category: "Space Tech",
      trendingScore: 92,
      views: "1.5M",
      rating: 4,
      timeAgo: "8 hours ago",
      image: "🚀",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-green-600 to-blue-600",
      tags: ["Interstellar", "Commerce", "Quantum"]
    }
  ];

  // Auto-rotate trending items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [trendingItems.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-blue-900/50 to-purple-900/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 px-4 py-2 rounded-full border border-green-500/30 mb-6">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Trending Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Trending Innovations 2033
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary technologies and groundbreaking innovations that are reshaping our future
          </p>
        </motion.div>

        {/* Main Trending Showcase */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className={`bg-gradient-to-br ${trendingItems[currentIndex].gradient} rounded-3xl p-8 md:p-12 relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{trendingItems[currentIndex].image}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {trendingItems[currentIndex].icon}
                        <span className="text-sm font-semibold text-white/80">
                          {trendingItems[currentIndex].category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-white/80" />
                        <span className="text-sm text-white/80">
                          {trendingItems[currentIndex].trendingScore}% trending
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {trendingItems[currentIndex].title}
                  </h3>
                  <p className="text-xl text-white/90 mb-6 leading-relaxed">
                    {trendingItems[currentIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {trendingItems[currentIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-white/80">
                      <Eye className="w-5 h-5" />
                      <span>{trendingItems[currentIndex].views}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Star className="w-5 h-5 fill-current text-yellow-400" />
                      <span>{trendingItems[currentIndex].rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Clock className="w-5 h-5" />
                      <span>{trendingItems[currentIndex].timeAgo}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full text-lg font-semibold text-white flex items-center gap-2 hover:bg-white/30 transition-all"
                  >
                    Explore Innovation <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Right Content - Stats Visualization */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Innovation Score", value: trendingItems[currentIndex].trendingScore, color: "text-green-400" },
                    { label: "Global Impact", value: 89, color: "text-blue-400" },
                    { label: "Future Potential", value: 97, color: "text-purple-400" },
                    { label: "Adoption Rate", value: 76, color: "text-orange-400" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                    >
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.value}%
                      </div>
                      <div className="text-white/80 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {trendingItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Other Trending Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-6 hover:border-green-500/40 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{item.image}</div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-semibold">
                    {item.trendingScore}%
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {item.description.substring(0, 100)}...
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TrendingContentSection2033;