import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const caseStudies = [
    {
      title: "Fortune 500 AI Transformation",
      company: "Global Tech Corp",
      result: "+300% Efficiency Gain",
      description: "Implemented autonomous AI agents that reduced operational costs by 40% and increased productivity by 300%.",
      icon: "🏢",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Quantum Computing Implementation",
      company: "Quantum Solutions Inc",
      result: "$2M Cost Savings",
      description: "Deployed quantum-enhanced AI systems that solved complex optimization problems and saved $2M annually.",
      icon: "⚛️",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Neural Interface Breakthrough",
      company: "NeuroTech Labs",
      result: "99.9% Accuracy",
      description: "Developed brain-computer interfaces that achieved unprecedented accuracy in thought-to-action translation.",
      icon: "🧠",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🏆 REVOLUTIONARY CASE STUDIES • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Discover how our revolutionary technology has transformed businesses and created unprecedented value
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 ${
                activeCase === index ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="text-6xl mb-6 text-center">{study.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{study.title}</h3>
              <p className="text-purple-300 mb-4 text-center text-sm">{study.company}</p>
              <div className="text-center mb-6">
                <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {study.result}
                </span>
              </div>
              <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                {study.description}
              </p>
              <button className={`w-full bg-gradient-to-r ${study.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary technology to drive innovation and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;