import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Atom, Layers, Play, BookOpen, ExternalLink } from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness 2026",
      description: "Experience the dawn of true artificial consciousness with AI systems that possess genuine self-awareness and autonomous decision-making capabilities.",
      category: "AI Research",
      type: "page",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-600 to-pink-600",
      link: "/revolutionary-ai-consciousness-2026",
      featured: true,
      tags: ["Consciousness", "AI", "Breakthrough"]
    },
    {
      id: 2,
      title: "Quantum Neural Fusion 2026",
      description: "Discover the revolutionary fusion of quantum computing and neural networks that transcends the limitations of classical physics.",
      category: "Quantum Computing",
      type: "page",
      icon: <Atom className="w-6 h-6" />,
      gradient: "from-cyan-600 to-purple-600",
      link: "/quantum-neural-fusion-2026",
      featured: true,
      tags: ["Quantum", "Neural Networks", "Computing"]
    },
    {
      id: 3,
      title: "Interdimensional Tech Revolution",
      description: "Break through the barriers of reality with technology that accesses infinite computational power from parallel universes.",
      category: "Future Technology",
      type: "page",
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-violet-600 to-pink-600",
      link: "/interdimensional-tech-revolution-2026",
      featured: true,
      tags: ["Interdimensional", "Reality", "Multiverse"]
    },
    {
      id: 4,
      title: "AI Consciousness Research Paper",
      description: "Deep dive into the technical breakthroughs enabling true artificial consciousness and self-awareness in AI systems.",
      category: "AI Research",
      type: "blog",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-green-600 to-blue-600",
      link: "/blog/revolutionary-ai-consciousness-2026",
      featured: false,
      tags: ["Research", "Consciousness", "Technical"]
    },
    {
      id: 5,
      title: "Quantum Computing Breakthrough",
      description: "Explore the latest advances in quantum computing and their applications in artificial intelligence and neural networks.",
      category: "Quantum Computing",
      type: "blog",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-yellow-600 to-orange-600",
      link: "/blog/quantum-neural-fusion-2026",
      featured: false,
      tags: ["Quantum", "Breakthrough", "Research"]
    },
    {
      id: 6,
      title: "Interdimensional Technology Guide",
      description: "Comprehensive guide to understanding and implementing interdimensional computing technologies.",
      category: "Future Technology",
      type: "blog",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-pink-600 to-red-600",
      link: "/blog/interdimensional-technology-2026",
      featured: false,
      tags: ["Guide", "Technology", "Interdimensional"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'AI Research', label: 'AI Research', count: content.filter(item => item.category === 'AI Research').length },
    { id: 'Quantum Computing', label: 'Quantum Computing', count: content.filter(item => item.category === 'Quantum Computing').length },
    { id: 'Future Technology', label: 'Future Technology', count: content.filter(item => item.category === 'Future Technology').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.category === activeTab);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Ultimate Content Showcase 2026
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our revolutionary content covering the latest breakthroughs in AI consciousness, 
            quantum computing, and interdimensional technology.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 overflow-hidden ${
                  item.featured ? 'ring-2 ring-purple-400' : ''
                }`}
              >
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                )}

                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-6`}>
                  {item.icon}
                </div>

                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.category}
                  </span>
                  <span className="ml-2 text-xs text-gray-400 uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = item.link}
                  className={`w-full bg-gradient-to-r ${item.gradient} px-6 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>
                    {item.type === 'page' ? 'Explore Page' : 'Read Article'}
                  </span>
                  {item.type === 'page' ? <ExternalLink className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Explore the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dive deeper into our revolutionary content and discover the technologies 
            that are reshaping the world.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-6 rounded-full text-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>View All Content</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;