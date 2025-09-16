import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  const [currentStudy, setCurrentStudy] = useState(0);

  const caseStudies = [
    {
      title: "AI Consciousness Breakthrough",
      company: "TechCorp Global",
      result: "300% increase in AI efficiency",
      description: "Revolutionary AI consciousness implementation transformed their entire operation.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Quantum Neural Integration",
      company: "Quantum Solutions Inc",
      result: "1000x faster processing",
      description: "Quantum neural fusion delivered unprecedented computational capabilities.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Interdimensional Computing",
      company: "FutureTech Labs",
      result: "Infinite scalability achieved",
      description: "Breakthrough interdimensional technology revolutionized their infrastructure.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 rounded-2xl"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary Case Studies 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our breakthrough technologies are transforming businesses 
            and revolutionizing industries worldwide.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStudy}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-purple-400">
                {caseStudies[currentStudy].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-300">
                  {caseStudies[currentStudy].title}
                </h3>
                <p className="text-gray-300">
                  {caseStudies[currentStudy].company}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-6">
              {caseStudies[currentStudy].description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-400">
                {caseStudies[currentStudy].result}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStudy(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStudy ? 'bg-purple-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;