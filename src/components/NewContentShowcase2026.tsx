import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary AI Solutions",
      description: "Discover cutting-edge artificial intelligence technologies that are transforming industries and reshaping the future of work.",
      image: "/api/placeholder/600/400",
      category: "Artificial Intelligence",
      readTime: "5 min read",
      date: "January 2025",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      description: "Explore the latest developments in quantum computing and how they're revolutionizing problem-solving capabilities.",
      image: "/api/placeholder/600/400",
      category: "Quantum Computing",
      readTime: "7 min read",
      date: "January 2025",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Blockchain Innovation",
      description: "Learn about next-generation blockchain solutions that are creating new possibilities for decentralized systems.",
      image: "/api/placeholder/600/400",
      category: "Blockchain",
      readTime: "6 min read",
      date: "January 2025",
      color: "from-yellow-600 to-orange-600"
    },
    {
      id: 4,
      title: "Biotech Revolution",
      description: "Discover how biotechnology is advancing healthcare, agriculture, and environmental solutions for a better future.",
      image: "/api/placeholder/600/400",
      category: "Biotechnology",
      readTime: "8 min read",
      date: "January 2025",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 5,
      title: "Space Technology",
      description: "Explore the latest advancements in space technology and their impact on exploration and commercial applications.",
      image: "/api/placeholder/600/400",
      category: "Space Tech",
      readTime: "9 min read",
      date: "January 2025",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Neural Reality",
      description: "Dive into the world of neural interfaces and brain-computer interaction technologies that are changing how we interact with machines.",
      image: "/api/placeholder/600/400",
      category: "Neural Tech",
      readTime: "10 min read",
      date: "January 2025",
      color: "from-pink-600 to-red-600"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6"
          >
            🚀 NEW CONTENT • JANUARY 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Revolutionary Content Showcase 2026
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Discover the latest innovations and breakthroughs that are shaping the future of technology
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveContent(index)}
            >
              <div className="aspect-video bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">📱</div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-sm opacity-75">{item.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm opacity-90 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-75">{item.date}</span>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Featured Content</h3>
            <p className="text-xl opacity-90">
              Dive deep into the most impactful technological innovations of 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">AI-Powered Future</h4>
                <p className="text-blue-100 mb-4">
                  Explore how artificial intelligence is revolutionizing every aspect of human life, 
                  from healthcare to entertainment to scientific discovery.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-75">5 min read</span>
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                    Read Now
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">Quantum Revolution</h4>
                <p className="text-purple-100 mb-4">
                  Discover the quantum computing breakthroughs that are opening new frontiers 
                  in cryptography, optimization, and scientific simulation.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-75">7 min read</span>
                  <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                    Read Now
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">Blockchain Evolution</h4>
                <p className="text-green-100 mb-4">
                  Learn about the next generation of blockchain technology that's creating 
                  new possibilities for decentralized applications and digital ownership.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-75">6 min read</span>
                  <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                    Read Now
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">Biotech Breakthrough</h4>
                <p className="text-yellow-100 mb-4">
                  Explore how biotechnology is advancing healthcare, agriculture, and environmental 
                  solutions for a more sustainable and healthy future.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-75">8 min read</span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                    Read Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6">Stay Updated with the Latest</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get the latest insights and updates on revolutionary technologies that are shaping our future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Subscribe to Updates
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg">
              Explore All Content
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;