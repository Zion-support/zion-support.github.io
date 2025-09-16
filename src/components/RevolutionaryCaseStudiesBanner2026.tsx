import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "AI Consciousness Breakthrough",
      company: "NeuroTech Solutions",
      result: "300% increase in AI performance",
      description: "Implemented conscious AI systems that achieved unprecedented levels of self-awareness and decision-making capabilities.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      company: "Quantum Dynamics Corp",
      result: "99.9% reality simulation accuracy",
      description: "Deployed quantum computing technology that can simulate and process multiple realities simultaneously.",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      company: "BrainTech Industries",
      result: "Direct brain-AI communication",
      description: "Created seamless neural interfaces that allow direct communication between human brains and AI systems.",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  if (!isVisible) return null;

  const currentCase = caseStudies[activeCase];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white py-12 mb-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Success Stories
          </h2>
          <p className="text-lg text-gray-300">
            See how our breakthrough technologies are transforming businesses worldwide
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">🚀</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentCase.title}</h3>
                  <p className="text-cyan-300 font-semibold">{currentCase.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {currentCase.description}
              </p>
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-sm font-bold">
                  {currentCase.result}
                </span>
                <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Read Full Case Study
                </button>
              </div>
            </div>

            <div className="relative">
              <div className={`w-full h-48 bg-gradient-to-br ${currentCase.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-30 animate-pulse">⚡</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Case Study Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeCase 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;