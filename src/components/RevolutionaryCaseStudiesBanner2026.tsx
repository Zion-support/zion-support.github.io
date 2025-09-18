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
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
      id: 2,
      company: "Quantum Solutions Inc",
      result: "1000x faster processing",
      description: "Quantum neural fusion delivered unprecedented computational capabilities.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
      id: 3,
      company: "FutureTech Labs",
      result: "Infinite scalability achieved",
      description: "Breakthrough interdimensional technology revolutionized their infrastructure.",
      icon: <Award className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    }
  ];
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
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Real results from real companies using our revolutionary technologies
          </p>
        </div>
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${caseStudies[activeCase].color} rounded-xl flex items-center justify-center mr-4`}>
                    {caseStudies[activeCase].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{caseStudies[activeCase].company}</h3>
                    <p className="text-indigo-300">Technology Innovation</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-red-300">Challenge:</h4>
                  <p className="text-gray-300">Traditional systems were limiting growth and innovation potential</p>
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Solution:</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].description}</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-400/30">
                  <h4 className="text-lg font-semibold mb-2 text-green-300">Result:</h4>
                  <p className="text-2xl font-bold text-green-400">{caseStudies[activeCase].result}</p>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <p className="text-xl text-gray-300 mb-6">
                  "This technology completely transformed our business model and opened up possibilities we never imagined."
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <p className="font-semibold">CEO, {caseStudies[activeCase].company}</p>
                    <p className="text-sm text-gray-400">Verified Success Story</p>
            </motion.div>
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
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">500+</div>
            <div className="text-gray-300">Companies Transformed</div>
            <div className="text-4xl font-bold text-purple-400 mb-2">1000%</div>
            <div className="text-gray-300">Average ROI Increase</div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our revolutionary technologies
            to achieve unprecedented growth and innovation.
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
              View All Case Studies
      </div>
    </motion.div>
  );
};
export default RevolutionaryCaseStudiesBanner2026;
