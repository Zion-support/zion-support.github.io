import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const caseStudies = [
    {
      id: 1,
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

<<<<<<< HEAD
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

=======
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
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
          <p className="text-2xl opacity-90 max-w-4xl mx-auto"></p>
            Real results from real companies using our revolutionary technologies</p>
          </p>
        {/* Case Study Carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{caseStudies[activeCase].logo}
                  <div>
                    <h3 className="text-3xl font-bold">{caseStudies[activeCase].company}</h3>
                    <p className="text-indigo-300">{caseStudies[activeCase].industry}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-red-300">Challenge:</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].challenge}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Solution:</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].solution}</p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-gray-300 italic mb-4">"{caseStudies[activeCase].testimonial}"</p>
                  <p className="text-indigo-300 font-semibold">- {caseStudies[activeCase].author}</p>
              <div>
                <h4 className="text-2xl font-bold mb-6 text-center">Results Achieved</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{caseStudies[activeCase].results.efficiency}
                    <div className="text-white/80 text-sm">Efficiency Gain
                  <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{caseStudies[activeCase].results.costSavings}
                    <div className="text-white/80 text-sm">Cost Savings
                  <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{caseStudies[activeCase].results.accuracy}
                    <div className="text-white/80 text-sm">Accuracy Rate
                  <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">{caseStudies[activeCase].results.timeReduction}
                    <div className="text-white/80 text-sm">Time Reduction
            </motion.div>
<<<<<<< HEAD
            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    activeCase === index ? 'bg-indigo-400' : 'bg-gray-500'
                  }`}</button>
                /></button>
              ))}</button>
        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
              className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30"
            >
              <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.value}
              <div className="text-white/80">{metric.label}
            </motion.div>
          ))}
        </motion.div>
        {/* Industry Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🌟 Industry Success Stories</h3>
            <p className="text-xl opacity-90">Transforming businesses across all sectors</p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.7 + 0.1 * index }}
                className={`bg-gradient-to-br ${study.gradient} p-8 rounded-xl text-white hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{study.logo}
                <h4 className="text-xl font-bold mb-2">{study.company}</h4>
                <p className="text-sm opacity-90 mb-4">{study.industry}</p>
                <div className="text-2xl font-bold mb-2">{study.results.efficiency} Efficiency
                <div className="text-lg font-semibold">{study.results.costSavings} Saved
              </motion.div>
            ))}
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
            <p className="text-xl opacity-90 mb-8"></p>
              Join the companies that have transformed their operations with our revolutionary technologies</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"></button>
                Start Your Transformation →</button>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"></button>
                View All Case Studies</button>
              </button>
            <p className="text-lg text-gray-300 mb-6"></p>
              {caseStudies[currentStudy].description}</p>
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-400">
                {caseStudies[currentStudy].result}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center space-x-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStudy(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStudy ? 'bg-purple-400' : 'bg-white/30'
              }`}</button>
            /></button>
          ))}</button>
=======
          </div>
        </div>

        {/* Case Study Indicators */}
        <div className="flex justify-center space-x-4 mb-12">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeCase === index 
                  ? 'bg-indigo-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">500+</div>
            <div className="text-gray-300">Companies Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">1000%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our revolutionary technologies
            to achieve unprecedented growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
    </motion.div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>