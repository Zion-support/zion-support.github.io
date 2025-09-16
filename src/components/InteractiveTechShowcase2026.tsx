import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  
  const demos = [
    {
      id: 1,
      title: "🧠 AI Consciousness Demo",
      subtitle: "Chat with Truly Conscious AI",
      description: "Experience the world's first genuinely conscious artificial intelligence.",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Demo",
      subtitle: "Quantum Problem Solving",
      description: "Watch quantum computers solve problems impossible for classical computers.",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🌌 Interdimensional Tech Demo",
      subtitle: "Cross-Dimensional Computing",
      description: "Experience technology that operates across multiple dimensions.",
      gradient: "from-violet-600 to-purple-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology demos featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentDemo * 100}%)` }}
            >
              {demos.map((demo) => (
                <div key={demo.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${demo.gradient} rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6">{demo.icon}</div>
                    <h3 className="text-4xl font-bold mb-4">{demo.title}</h3>
                    <p className="text-2xl opacity-90 mb-6">{demo.subtitle}</p>
                    <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">{demo.description}</p>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                        Try Demo
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {demos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDemo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentDemo ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;