import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with breakthrough technologies reshaping human life",
      category: "AI & Machine Learning",
      image: "🧠",
      color: "purple",
      link: "/pages/NextGenAIRevolution2026",
      featured: true,
      new: true
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2026",
      description: "Exponential computing power with quantum technology solving impossible problems",
      category: "Quantum Computing",
      image: "⚡",
      color: "cyan",
      link: "/pages/QuantumComputingRevolution2026",
      featured: true,
      new: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with revolutionary neural interface technology",
      category: "Neural Technology",
      image: "🧬",
      color: "emerald",
      link: "/pages/NeuralInterfaceRevolution2026",
      featured: true,
      new: true
    },
    {
      id: 4,
      title: "Revolutionary Tech Blog 2026",
      description: "Stay ahead with insights into the latest technological breakthroughs and innovations",
      category: "Blog & Insights",
      image: "📚",
      color: "pink",
      link: "/pages/RevolutionaryTechBlog2026",
      featured: false,
      new: true
    },
    {
      id: 5,
      title: "Comprehensive Tech Insights 2026",
      description: "Deep dive into technology trends, breakthrough innovations, and industry impact",
      category: "Analysis & Reports",
      image: "🔍",
      color: "indigo",
      link: "/pages/ComprehensiveTechInsights2026",
      featured: false,
      new: true
    },
    {
      id: 6,
      title: "Synthetic Intelligence 2026",
      description: "Next-generation AI combining reasoning, creativity, and emotional intelligence",
      category: "AI & Machine Learning",
      image: "🤖",
      color: "violet",
      link: "/pages/SyntheticIntelligence2026",
      featured: false,
      new: false
    },
    {
      id: 7,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary combination of quantum computing and neural networks",
      category: "Quantum Computing",
      image: "⚛️",
      color: "blue",
      link: "/pages/QuantumNeuralFusion2026",
      featured: false,
      new: false
    },
    {
      id: 8,
      title: "Cyber-Physical Systems 2026",
      description: "Seamless integration of digital and physical worlds with intelligent orchestration",
      category: "IoT & Smart Systems",
      image: "🌐",
      color: "teal",
      link: "/pages/CyberPhysicalSystems2026",
      featured: false,
      new: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: contentItems.filter(item => item.category === 'AI & Machine Learning').length },
    { id: 'Quantum Computing', name: 'Quantum', count: contentItems.filter(item => item.category === 'Quantum Computing').length },
    { id: 'Neural Technology', name: 'Neural', count: contentItems.filter(item => item.category === 'Neural Technology').length },
    { id: 'Blog & Insights', name: 'Blog', count: contentItems.filter(item => item.category === 'Blog & Insights').length },
    { id: 'Analysis & Reports', name: 'Reports', count: contentItems.filter(item => item.category === 'Analysis & Reports').length },
    { id: 'IoT & Smart Systems', name: 'IoT', count: contentItems.filter(item => item.category === 'IoT & Smart Systems').length }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-500 to-pink-500",
      cyan: "from-cyan-500 to-blue-500",
      emerald: "from-emerald-500 to-teal-500",
      pink: "from-pink-500 to-rose-500",
      indigo: "from-indigo-500 to-purple-500",
      violet: "from-violet-500 to-purple-500",
      blue: "from-blue-500 to-indigo-500",
      teal: "from-teal-500 to-cyan-500"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600";
  };

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white animate-pulse">
              🌟 REVOLUTIONARY CONTENT SHOWCASE • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Technology Content
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore our comprehensive collection of cutting-edge technology content, insights, and solutions that are shaping the future
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {activeTab === 'all' && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌟 Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.filter(item => item.featured).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <div className={`h-32 bg-gradient-to-r ${getColorClasses(item.color)} flex items-center justify-center`}>
                      <div className="text-6xl">{item.image}</div>
                    </div>
                    {item.new && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        NEW
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-semibold">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">
                        Featured
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <a
                      href={item.link}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      <span>Explore Content</span>
                      <span>→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Content Grid */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {activeTab === 'all' ? '📚 All Content' : `📚 ${categories.find(c => c.id === activeTab)?.name} Content`}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <div className={`h-24 bg-gradient-to-r ${getColorClasses(item.color)} flex items-center justify-center`}>
                    <div className="text-4xl">{item.image}</div>
                  </div>
                  {item.new && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      NEW
                    </div>
                  )}
                  {item.featured && (
                    <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ⭐
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                      {item.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <a
                    href={item.link}
                    className="inline-flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-semibold text-sm"
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white"
          >
            <h3 className="text-4xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Dive deep into our revolutionary technology content and discover the innovations that are reshaping our world
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Get Updates
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;