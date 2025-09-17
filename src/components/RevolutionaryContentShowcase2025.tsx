import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Atom, Zap, Star, TrendingUp, Eye } from 'lucide-react';
const RevolutionaryContentShowcase2025: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI Revolutionary Breakthrough 2025",
      description: "The most significant advancement in artificial intelligence history, revolutionizing how we think about, build, and deploy intelligent systems.",
      icon: Brain,
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/AIRevolutionaryBreakthrough2025",
      category: "AI Innovation",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough 2025",
      description: "The world's first commercially viable quantum computing breakthrough, delivering exponential computational power that transforms every industry.",
      icon: Atom,
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingBreakthrough2025",
      category: "Quantum Computing",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2025",
      description: "The breakthrough that connects human consciousness directly to digital systems, revolutionizing human-computer interaction.",
      icon: Zap,
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NeuralInterfaceRevolution2025",
      category: "Neural Technology",
      featured: true
    }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Revolutionary Content 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Breakthrough Technology Showcase
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the revolutionary technologies that are reshaping our world and defining the future of human progress.
          </p>
        </motion.div>
        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                {/* Featured Badge */}
                {content.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </div>
                )}
                {/* Icon */}
                <div className={`bg-gradient-to-r ${content.gradient} p-4 rounded-xl w-fit mb-6`}>
                  <content.icon className="w-8 h-8 text-white" />
                </div>
                {/* Category */}
                <div className="inline-block bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-1 text-sm mb-4">
                  <span className="text-blue-400 font-medium">{content.category}</span>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {content.title}
                </h3>
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {content.description}
                </p>
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${content.gradient} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center w-full justify-center group`}
                >
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-12">
            <TrendingUp className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Ahead of the Revolution
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators and thought leaders who are already exploring these 
              revolutionary technologies and shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Eye className="mr-2 w-5 h-5" />
                View All Breakthroughs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Get Updates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

};


export default RevolutionaryContentShowcase2025;
