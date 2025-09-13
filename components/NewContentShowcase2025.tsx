import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewContentShowcase2025: React.FC = () => {
  const newContent = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough",
      description: "Revolutionary neural architectures and quantum-enhanced processing delivering unprecedented performance gains.",
      link: "/ai-2025-ultimate-breakthrough",
      image: "🧠",
      category: "AI Breakthrough",
      metrics: "10,000x Faster, 99.9% Accuracy",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Quantum AI Fusion 2030",
      description: "The convergence of quantum computing and artificial intelligence creating unprecedented computational capabilities.",
      link: "/quantum-ai-fusion-2030",
      image: "🌌",
      category: "Quantum Computing",
      metrics: "Infinite Processing, 100% Security",
      gradient: "from-cyan-600 to-purple-600"
    },
    {
      id: 3,
      title: "Autonomous Business Systems",
      description: "Fully autonomous business operations with self-learning capabilities and 24/7 optimization.",
      link: "/autonomous-business-systems-2025",
      image: "🤖",
      category: "Automation",
      metrics: "24/7 Operation, 40% Cost Reduction",
      gradient: "from-green-600 to-blue-600"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-AI collaboration and enhanced cognitive abilities.",
      link: "/neural-interface-future-2035",
      image: "🧬",
      category: "Neural Technology",
      metrics: "10x Cognitive Enhancement",
      gradient: "from-pink-600 to-purple-600"
    },
    {
      id: 5,
      title: "Space Technology Solutions",
      description: "Advanced space technology applications for satellite networks, space exploration, and interplanetary communication.",
      link: "/space-technology-solutions-2025",
      image: "🚀",
      category: "Space Tech",
      metrics: "Global Coverage, 99.9% Uptime",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Enterprise AI Transformation",
      description: "Comprehensive AI transformation solutions for large enterprises with custom implementation and support.",
      link: "/enterprise-ai-transformation-2025",
      image: "🏢",
      category: "Enterprise",
      metrics: "5,000% ROI, 90% Efficiency",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            New Content & Breakthrough Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest revolutionary technologies and breakthrough solutions transforming industries worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={content.link}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{content.image}</div>
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-semibold rounded-full mb-2">
                        {content.category}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {content.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {content.metrics}
                    </div>
                    <div className={`bg-gradient-to-r ${content.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:scale-105 transition-transform`}>
                      Explore →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/content-showcase"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Content
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;