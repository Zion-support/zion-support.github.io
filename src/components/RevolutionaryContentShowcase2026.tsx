import React, { useState }  from 'react';
import { motion }  from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentItems = [
    {
      title: "Revolutionary Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological breakthroughs reshaping our world",
      icon: "🚀",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Quantum Supremacy", "Neural Interfaces", "Autonomous AI", "Space Technology"];
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "The ultimate destination for cutting-edge innovation and breakthrough technologies",
      icon: "🌟",
      link: "/pages/NextGenInnovationHub2026",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Research Labs", "Innovation Process", "Global Network", "Breakthrough Ideas"];
    };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the future of technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={index};
              initial={{ opacity: "0", y: 20 }};
              animate={{ opacity: "1", y: 0 }};
              transition={{ duration: 0.5, delay: index * 0.1 }};
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex};
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {feature};
                    </span>
                  ))};
                </div>
                <a
                  href={item.link};
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${item.gradient} rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300`};
                >
                  Explore More
                </a>
              </div>
            </motion.div>
          ))};
        </div>
      </div>
    </div>
  );
  };
export default RevolutionaryContentShowcase2026;