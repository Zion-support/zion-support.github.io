import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Cpu, Sparkles } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const newContent = [
    {
      title: "AI Innovation Hub 2026",
      description: "Revolutionary AI breakthroughs",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/ai-innovation-hub-2026"
    },
    {
      title: "Advanced Tech Solutions",
      description: "Next-gen technology solutions",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      link: "/advanced-tech-solutions-2026"
    },
    {
      title: "Quantum Computing Guide",
      description: "Master quantum fundamentals",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      link: "/quantum-computing-guide-2026"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 px-4 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-400/30 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">NEW CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Just Released
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest groundbreaking content that's pushing the boundaries of technology and innovation
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = content.link}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 h-full hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${content.color} p-4 rounded-2xl mr-4`}>
                    <content.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
                    <p className="text-gray-300">{content.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-300 text-sm ml-2">5.0</span>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already leveraging our cutting-edge content to transform their businesses
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                Explore All Content
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                View Blog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContentPromotionBanner2026;