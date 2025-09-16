import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EnhancedContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentCategories = [
    {
      title: "AI Revolution",
      icon: "🧠",
      color: "purple",
      content: [
        {
          title: "Revolutionary AI Content 2025",
          description: "Experience the future of AI-powered content creation with consciousness-aware systems",
          link: "/pages/RevolutionaryAIContent2025",
          image: "🤖",
          features: ["Conscious AI", "Multi-dimensional Content", "Quantum Processing"]
        },
        {
          title: "AI Transformation Guide 2025",
          description: "Complete guide to transforming your business with artificial intelligence",
          link: "/pages/AITransformationGuide2025",
          image: "⚡",
          features: ["Business Automation", "AI Strategy", "Implementation"]
        },
        {
          title: "Advanced AI Solutions 2025",
          description: "Cutting-edge AI solutions for enterprise and consumer applications",
          link: "/pages/AdvancedTechSolutions2025",
          image: "🚀",
          features: ["Enterprise AI", "Consumer AI", "AI Analytics"]
        }
      ]
    },
    {
      title: "Quantum Computing",
      icon: "⚡",
      color: "cyan",
      content: [
        {
          title: "Quantum Computing Revolutionary 2025",
          description: "Revolutionary quantum technologies solving impossible problems",
          link: "/pages/QuantumComputingRevolutionary2025",
          image: "⚛️",
          features: ["Quantum Supremacy", "Quantum Cryptography", "Quantum AI"]
        },
        {
          title: "Quantum Solutions 2025",
          description: "Practical quantum computing solutions for real-world applications",
          link: "/pages/QuantumComputingSolutions2025",
          image: "🌌",
          features: ["Quantum Optimization", "Quantum Simulation", "Quantum Security"]
        },
        {
          title: "Quantum Breakthrough 2025",
          description: "Latest breakthroughs in quantum computing technology",
          link: "/pages/QuantumComputingBreakthrough",
          image: "🔮",
          features: ["Quantum Materials", "Quantum Algorithms", "Quantum Networks"]
        }
      ]
    },
    {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "emerald",
      content: [
        {
          title: "Neural Interface Revolution 2025",
          description: "Direct neural interfaces connecting mind and machine",
          link: "/pages/NeuralInterfaceRevolution2025",
          image: "🧠",
          features: ["Brain-Computer Interface", "Neural Networks", "Mind Control"]
        },
        {
          title: "Neural Interface Future",
          description: "The future of human-computer interaction through neural interfaces",
          link: "/pages/NeuralInterfaceFuture",
          image: "🌟",
          features: ["Non-invasive BCI", "Thought Control", "Neural Feedback"]
        },
        {
          title: "Advanced Neural Tech 2025",
          description: "Advanced neural technologies for enhanced human capabilities",
          link: "/pages/AdvancedTechSolutions2025",
          image: "⚡",
          features: ["Neural Enhancement", "Cognitive Augmentation", "Memory Interface"]
        }
      ]
    },
    {
      title: "Future Tech",
      icon: "🚀",
      color: "orange",
      content: [
        {
          title: "Ultimate Tech Breakthrough 2025",
          description: "The most revolutionary technological advances reshaping our world",
          link: "/pages/UltimateTechBreakthrough2025",
          image: "🌟",
          features: ["Revolutionary Tech", "Future Predictions", "Tech Innovation"]
        },
        {
          title: "Future Tech Trends 2025",
          description: "Comprehensive analysis of future technology trends and predictions",
          link: "/pages/FutureTechTrends2025",
          image: "🔮",
          features: ["Trend Analysis", "Future Predictions", "Tech Forecasting"]
        },
        {
          title: "Next-Gen Innovation 2025",
          description: "Next-generation innovation hub showcasing cutting-edge technologies",
          link: "/pages/NextGenInnovationHub2025",
          image: "🧠",
          features: ["Innovation Hub", "Tech Showcase", "Future Solutions"]
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: "from-purple-600/30 to-pink-600/30",
        border: "border-purple-400/30",
        text: "text-purple-300",
        button: "from-purple-500 to-pink-500",
        accent: "text-purple-400"
      },
      cyan: {
        bg: "from-cyan-600/30 to-blue-600/30",
        border: "border-cyan-400/30",
        text: "text-cyan-300",
        button: "from-cyan-500 to-blue-500",
        accent: "text-cyan-400"
      },
      emerald: {
        bg: "from-emerald-600/30 to-teal-600/30",
        border: "border-emerald-400/30",
        text: "text-emerald-300",
        button: "from-emerald-500 to-teal-500",
        accent: "text-emerald-400"
      },
      orange: {
        bg: "from-orange-600/30 to-red-600/30",
        border: "border-orange-400/30",
        text: "text-orange-300",
        button: "from-orange-500 to-red-500",
        accent: "text-orange-400"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2025
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto">
            Explore our comprehensive collection of revolutionary technology content and solutions
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${colors.button} text-white shadow-lg`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contentCategories[activeTab].content.map((item, index) => {
            const colors = getColorClasses(contentCategories[activeTab].color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-8 border ${colors.border} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{item.image}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className={`${colors.text} mb-6`}>{item.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className={`w-2 h-2 ${colors.accent} rounded-full mr-3`}></span>
                      <span className={`${colors.text} text-sm`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${colors.button} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore Content →
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore Revolutionary Content?</h3>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Join thousands of users discovering the future of technology through our revolutionary content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Exploring →
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors">
                View All Content
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2025;