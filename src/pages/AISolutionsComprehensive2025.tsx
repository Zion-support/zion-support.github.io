import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🤖 COMPREHENSIVE AI SOLUTIONS • JANUARY 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI Solutions Comprehensive 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI solutions. 
              From autonomous agents to predictive analytics, we provide the tools you need to succeed.
            </p>
          </div>
        </div>
      </motion.div>

      {/* AI Solutions Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Our AI Solutions</h2>
          <p className="text-xl opacity-80">Comprehensive AI technologies designed to transform your business</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{solution.stats.efficiency}</div>
                  <div className="text-xs text-gray-400">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{solution.stats.costReduction}</div>
                  <div className="text-xs text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{solution.stats.accuracy}</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                {solution.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                onClick={() => setActiveSolution(solution.id)}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Applications */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🏭 Industry Applications</h2>
          <p className="text-xl opacity-80">AI solutions tailored for every industry</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4 text-center">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{industry.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-white mb-2">Solutions:</h4>
                {industry.solutions.map((solution, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                    <span className="text-sm text-gray-300">{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">📈 Success Stories</h2>
          <p className="text-xl opacity-80">Real results from real companies</p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold">{study.company}</h3>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Timeline:</h4>
                      <p className="text-gray-300">{study.timeline}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Results:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-green-600/20 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-400">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our AI solutions to achieve unprecedented results. 
            Let's discuss how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600/20 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AISolutionsComprehensive2025;