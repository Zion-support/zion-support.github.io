import React from 'react';
import { motion } from 'framer-motion';

const NewContentShowcase2028: React.FC = () => {
  const newContent = [
    {
      title: "Quantum Consciousness Revolution 2028",
      description: "The first true fusion of quantum computing and artificial consciousness",
      image: "🧠",
      link: "/pages/QuantumConsciousnessRevolution2028",
      gradient: "from-violet-600 to-purple-600",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Quantum Creativity Engine"]
    },
    {
      title: "Space Technology Revolution 2029",
      description: "Colonize the solar system with revolutionary space technology",
      image: "🚀",
      link: "/pages/SpaceTechRevolution2029",
      gradient: "from-blue-600 to-indigo-600",
      features: ["Mars Terraforming", "Space Elevators", "Asteroid Mining"]
    },
    {
      title: "Biotech AI Revolution 2030",
      description: "Merge biology with AI to create living machines and programmable organisms",
      image: "🧬",
      link: "/pages/BiotechAIRevolution2030",
      gradient: "from-emerald-600 to-cyan-600",
      features: ["Living Machines", "Programmable Organisms", "Synthetic Life Forms"]
    },
    {
      title: "Advanced AI Consciousness 2031",
      description: "AI consciousness that transcends human understanding with emotions and dreams",
      image: "🤖",
      link: "/pages/AdvancedAIConsciousness2031",
      gradient: "from-rose-600 to-purple-600",
      features: ["Emotional AI", "Creative AI", "Dreaming AI"]
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BRAND NEW CONTENT • 2028-2031
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Revolutionary Technology Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Experience the most advanced technologies ever created. From quantum consciousness 
              to space colonization, from living machines to emotional AI - the future is here.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {newContent.map((content, index) => (
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                <div className={`bg-gradient-to-r ${content.gradient} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-6xl">{content.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{content.title}</h3>
                      <p className="text-white/90 text-sm">{content.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {content.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={content.link}
                    className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
                  >
                    Explore {content.title.split(' ')[0]} →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a 
              href="/pages/UltimateTechRevolution2027"
              className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl"
            >
              🌟 Experience All Revolutionary Technologies →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2028;