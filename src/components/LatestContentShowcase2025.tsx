import { motion } from 'framer-motion';
import { useState } from 'react';

const LatestContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quantum');

  const contentCategories = {
    quantum: {
      title: "Quantum-AI Breakthroughs",
      icon: "⚛️",
      color: "from-purple-600 to-blue-600",
      content: [
        {
          title: "Quantum-AI Hybrid Computing",
          description: "Explore the convergence of quantum computing and artificial intelligence",
          link: "/blog/quantum-ai-hybrid-computing-2025",
          featured: true
        },
        {
          title: "Financial Optimization Case Study",
          description: "40% risk reduction with quantum-AI in portfolio management",
          link: "/case-studies/quantum-ai-financial-optimization",
          featured: true
        }
      ]
    },
    orchestration: {
      title: "Agent Orchestration",
      icon: "🤖",
      color: "from-green-600 to-emerald-600",
      content: [
        {
          title: "Advanced Agent Orchestration",
          description: "Enterprise-scale multi-agent coordination and management",
          link: "/blog/ai-2026-advanced-agent-orchestration",
          featured: true
        },
        {
          title: "Agent Posture Management",
          description: "Real-time agent capability assessment and adaptation",
          link: "/blog/ai-2026-agent-posture-management",
          featured: false
        }
      ]
    },
    autonomous: {
      title: "Autonomous Operations",
      icon: "🏢",
      color: "from-orange-600 to-red-600",
      content: [
        {
          title: "Autonomous Business Operations",
          description: "AI systems that independently manage complex business processes",
          link: "/blog/ai-autonomous-business-operations-2025",
          featured: true
        },
        {
          title: "Agent Governance Blueprint",
          description: "Comprehensive framework for governing autonomous AI agents",
          link: "/blog/ai-2026-agent-governance-blueprint",
          featured: false
        }
      ]
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 Latest AI Innovation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge insights on quantum computing, agent orchestration, and autonomous business operations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {Object.entries(contentCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {contentCategories[activeTab as keyof typeof contentCategories].content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  ⭐ Featured
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <motion.a
                href={item.link}
                className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${
                  contentCategories[activeTab as keyof typeof contentCategories].color
                } hover:shadow-lg transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📚 Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestContentShowcase2025;