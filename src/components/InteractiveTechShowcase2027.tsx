import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveTechDemo2027 from './InteractiveTechDemo2027';

const InteractiveTechShowcase2027: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState('quantum');
  const [showDemo, setShowDemo] = useState(false);

  const technologies = [
    {
      id: 'quantum',
      name: 'Quantum Computing',
      description: 'Revolutionary quantum processors that solve impossible problems',
      icon: '⚛️',
      color: 'from-purple-600 to-indigo-600',
      bgColor: 'from-purple-900/50 to-indigo-900/50'
    },
    {
      id: 'neural',
      name: 'Neural Interface',
      description: 'Direct brain-computer communication systems',
      icon: '🧬',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-900/50 to-blue-900/50'
    },
    {
      id: 'ai',
      name: 'AI Consciousness',
      description: 'Artificial intelligence with true consciousness and emotions',
      icon: '🧠',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-900/50 to-teal-900/50'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Interact with cutting-edge technologies through our revolutionary demonstration platform
          </p>
        </div>

        {/* Technology Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech) => (
            <motion.button
              key={tech.id}
              onClick={() => setSelectedTech(tech.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                selectedTech === tech.id
                  ? `bg-gradient-to-br ${tech.bgColor} border-white/50 shadow-2xl`
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-6xl mb-4">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
              <p className="text-gray-300 text-sm">{tech.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Interactive Technology Demo</h3>
            <p className="text-gray-300">
              Experience {technologies.find(t => t.id === selectedTech)?.name} in action
            </p>
          </div>
          
          <InteractiveTechDemo2027 
            technology={selectedTech} 
            onComplete={() => setShowDemo(false)}
          />
        </div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30">
            <div className="text-4xl mb-4">🎮</div>
            <h4 className="text-xl font-bold mb-2">Interactive Demos</h4>
            <p className="text-gray-300 text-sm">Hands-on experience with revolutionary technologies</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-6 border border-cyan-400/30">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-bold mb-2">Real-time Data</h4>
            <p className="text-gray-300 text-sm">Live performance metrics and breakthrough achievements</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl p-6 border border-emerald-400/30">
            <div className="text-4xl mb-4">🔬</div>
            <h4 className="text-xl font-bold mb-2">Scientific Accuracy</h4>
            <p className="text-gray-300 text-sm">Based on cutting-edge research and real-world applications</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-6 border border-orange-400/30">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold mb-2">Future Ready</h4>
            <p className="text-gray-300 text-sm">Technologies that will shape the next decade</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12"
          >
            <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in experiencing the most advanced technologies of 2027. 
              Be among the first to witness the future of human-AI collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Try Interactive Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
                Contact Experts
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;