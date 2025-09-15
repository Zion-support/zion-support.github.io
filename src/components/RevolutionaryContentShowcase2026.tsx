import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const contentItems = [
    {
      title: "Advanced Space Technology 2026",
      description: "Pioneering interplanetary travel, space colonization, and cosmic discovery with revolutionary propulsion systems and space infrastructure.",
      icon: "🚀",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-indigo-600/30 to-purple-600/30",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-400"
    },
    {
      title: "Advanced Robotics 2026",
      description: "Revolutionary robotic systems with AI-powered cognition, humanoid design, and swarm intelligence transforming industries.",
      icon: "🤖",
      link: "/pages/AdvancedRobotics2026",
      gradient: "from-slate-600/30 to-gray-600/30",
      borderColor: "border-slate-400/30",
      textColor: "text-slate-400"
    },
    {
      title: "Advanced Biotech Solutions 2026",
      description: "Breakthrough biotechnology merging biology with technology for gene editing, personalized medicine, and organ regeneration.",
      icon: "🧬",
      link: "/pages/AdvancedBiotechSolutions2026",
      gradient: "from-green-600/30 to-emerald-600/30",
      borderColor: "border-green-400/30",
      textColor: "text-green-400"
    },
    {
      title: "Synthetic Intelligence 2026",
      description: "Next evolution of AI with synthetic consciousness, autonomous agents, and collective intelligence capabilities.",
      icon: "🧠",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-400"
    },
    {
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural interfaces creating unprecedented computational and cognitive capabilities.",
      icon: "⚛️",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-400"
    },
    {
      title: "Cyber-Physical Systems 2026",
      description: "Seamless integration of cyber and physical worlds with intelligent orchestration and quantum-enhanced control systems.",
      icon: "🌐",
      link: "/pages/CyberPhysicalSystems2026",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-400"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Showcase 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on the most advanced technologies 
            that are reshaping our world and expanding human potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-8 border ${item.borderColor} hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className={`${item.textColor.replace('text-', 'text-').replace('-400', '-100')} mb-6 text-center`}>
                {item.description}
              </p>
              <ul className={`${item.textColor.replace('text-', 'text-').replace('-400', '-200')} space-y-2 mb-6 text-sm`}>
                <li>• Cutting-edge innovation</li>
                <li>• Real-world applications</li>
                <li>• Future-ready technology</li>
                <li>• Industry transformation</li>
              </ul>
              <a 
                href={item.link} 
                className={`block w-full bg-white ${item.textColor} py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-center`}
              >
                Explore {item.title.split(' ')[0]} →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6">
            🌟 NEW: Next-Gen Technology Experience
          </div>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover our complete collection of revolutionary technology content, 
            featuring the most advanced innovations that are shaping the future.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/NextGenTechShowcase2026" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies →
            </a>
            <a 
              href="/pages/ComprehensiveTechInsights2026" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Tech Insights →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;