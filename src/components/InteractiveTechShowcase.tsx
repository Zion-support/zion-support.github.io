import React from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const technologies = [
    {
      name: "AI Consciousness",
      icon: "🤖",
      description: "Artificial intelligence with self-awareness and consciousness",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/30 to-cyan-600/30",
      borderColor: "border-blue-400/30"
    },
    {
      name: "Quantum Computing",
      icon: "⚡",
      description: "Revolutionary computing power through quantum mechanics",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30"
    },
    {
      name: "Neural Interfaces",
      icon: "🧠",
      description: "Direct brain-computer communication systems",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30"
    },
    {
      name: "Space Technology",
      icon: "🚀",
      description: "Advanced space exploration and colonization tech",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-600/30 to-red-600/30",
      borderColor: "border-orange-400/30"
    },
    {
      name: "Biotechnology",
      icon: "🧬",
      description: "AI-powered healthcare and human enhancement",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/30 to-emerald-600/30",
      borderColor: "border-green-400/30"
    },
    {
      name: "Cybersecurity",
      icon: "🛡️",
      description: "Advanced protection for the digital age",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-600/30 to-purple-600/30",
      borderColor: "border-indigo-400/30"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-pulse">🔬</span>
            <h3 className="text-4xl font-bold">INTERACTIVE TECH SHOWCASE</h3>
            <span className="text-4xl animate-pulse">🔬</span>
          </div>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our interactive technology showcase featuring the most advanced and revolutionary 
            technologies that will shape the future of humanity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-6 border ${tech.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-3">{tech.name}</h4>
                <p className="text-sm opacity-90 mb-4">{tech.description}</p>
                <button className={`bg-gradient-to-r ${tech.color} px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a href="/pages/UltimateTechShowcase2026" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold border border-blue-400/30">
              🌟 Ultimate Showcase →
            </a>
            <a href="/pages/RevolutionaryTechBlog2026" className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold border border-emerald-400/30">
              📚 Tech Blog →
            </a>
            <a href="/pages/ComprehensiveServicesShowcase2027" className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold border border-orange-400/30">
              🚀 Services →
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm opacity-80">
          <span className="bg-white/20 px-3 py-1 rounded-full">🔬 Interactive Experience</span>
          <span className="mx-2">•</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">⚡ Real-Time Updates</span>
          <span className="mx-2">•</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">🚀 Future Technology</span>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase;