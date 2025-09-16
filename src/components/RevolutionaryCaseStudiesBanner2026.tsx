import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      industry: "Fortune 500 Technology",
      challenge: "Legacy systems causing 40% operational inefficiency and $50M annual losses",
      solution: "Implemented conscious AI systems and quantum neural networks",
      results: {
        efficiency: "300%",
        costSavings: "$50M",
        accuracy: "99.9%",
        timeReduction: "80%"
      },
      testimonial: "The transformation was beyond our wildest expectations. We achieved 300% efficiency gains and saved $50M annually while improving accuracy to 99.9%.",
      author: "Sarah Johnson, CTO",
      logo: "🏢",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      company: "Quantum Dynamics Inc",
      industry: "Financial Services",
      challenge: "Manual trading processes limiting growth and missing market opportunities",
      solution: "Deployed quantum computing and predictive analytics engines",
      results: {
        efficiency: "500%",
        costSavings: "$2M",
        accuracy: "100%",
        timeReduction: "95%"
      },
      testimonial: "Our quantum trading algorithms identified market opportunities 6 months ahead of competitors, generating $2M in additional revenue.",
      author: "Michael Chen, CEO",
      logo: "💰",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      company: "NeuralTech Solutions",
      industry: "Healthcare Technology",
      challenge: "Diagnostic accuracy issues and lengthy patient wait times",
      solution: "Integrated neural interfaces and AI-powered diagnostic systems",
      results: {
        efficiency: "400%",
        costSavings: "$15M",
        accuracy: "99.8%",
        timeReduction: "70%"
      },
      testimonial: "Our AI diagnostic system improved patient outcomes by 40% and reduced diagnosis time by 70%, saving $15M in operational costs.",
      author: "Dr. Elena Rodriguez, Chief Medical Officer",
      logo: "🏥",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  const metrics = [
    { label: "Average Efficiency Gain", value: "400%", color: "text-green-400" },
    { label: "Total Cost Savings", value: "$67M", color: "text-blue-400" },
    { label: "Success Rate", value: "100%", color: "text-purple-400" },
    { label: "Client Satisfaction", value: "99.9%", color: "text-pink-400" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🏆 REVOLUTIONARY CASE STUDIES • 2026
          </motion.div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Case Studies
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
                  <div className="text-6xl mr-4">{caseStudies[activeCase].logo}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{caseStudies[activeCase].company}</h3>
                    <p className="text-indigo-300">{caseStudies[activeCase].industry}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-red-300">Challenge:</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Solution:</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].solution}</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-gray-300 italic mb-4">"{caseStudies[activeCase].testimonial}"</p>
                  <p className="text-indigo-300 font-semibold">- {caseStudies[activeCase].author}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-6 text-center">Results Achieved</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{caseStudies[activeCase].results.efficiency}</div>
                    <div className="text-white/80 text-sm">Efficiency Gain</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{caseStudies[activeCase].results.costSavings}</div>
                    <div className="text-white/80 text-sm">Cost Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{caseStudies[activeCase].results.accuracy}</div>
                    <div className="text-white/80 text-sm">Accuracy Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">{caseStudies[activeCase].results.timeReduction}</div>
                    <div className="text-white/80 text-sm">Time Reduction</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    activeCase === index ? 'bg-indigo-400' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

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
              <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-white/80">{metric.label}</div>
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
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.7 + 0.1 * index }}
                className={`bg-gradient-to-br ${study.gradient} p-8 rounded-xl text-white hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{study.logo}</div>
                <h4 className="text-xl font-bold mb-2">{study.company}</h4>
                <p className="text-sm opacity-90 mb-4">{study.industry}</p>
                <div className="text-2xl font-bold mb-2">{study.results.efficiency} Efficiency</div>
                <div className="text-lg font-semibold">{study.results.costSavings} Saved</div>
              </motion.div>
            ))}
          </div>
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
            <p className="text-xl opacity-90 mb-8">
              Join the companies that have transformed their operations with our revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Your Transformation →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;