import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
=======
  const [activeCase, setActiveCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> cursor/create-and-deploy-new-content-e495

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const caseStudies = [
    {
<<<<<<< HEAD
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
=======
      company: "TechCorp Global",
      industry: "Enterprise Technology",
      challenge: "Needed to automate 90% of manual processes while maintaining quality",
      solution: "Implemented our Revolutionary AI Systems with autonomous decision-making",
      results: [
        "400% increase in operational efficiency",
        "60% reduction in operational costs",
        "99.9% accuracy in automated decisions",
        "24/7 autonomous operations"
      ],
      logo: "🏢",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/90 to-cyan-900/90"
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Required real-time fraud detection and risk assessment",
      solution: "Deployed our Quantum Computing solutions with advanced analytics",
      results: [
        "95% reduction in false positives",
        "Real-time fraud detection",
        "99.8% accuracy in risk assessment",
        "$2M saved in prevented fraud"
      ],
      logo: "💰",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-900/90 to-emerald-900/90"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare Technology",
      challenge: "Needed to accelerate medical diagnosis and treatment planning",
      solution: "Integrated our Neural Interface technology with medical AI systems",
      results: [
        "99.9% diagnostic accuracy",
        "50% faster diagnosis times",
        "40% improvement in treatment outcomes",
        "1M+ lives improved"
      ],
      logo: "🏥",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="relative mb-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • 2026
          </div>
          <h2 className="text-6xl font-bold text-white mb-4">
            Revolutionary Case Studies
          </h2>
          <p className="text-2xl text-purple-200 max-w-5xl mx-auto">
            See how our revolutionary technologies have transformed businesses across industries
>>>>>>> cursor/create-and-deploy-new-content-e495
          </p>
        </motion.div>

        {/* Case Study Carousel */}
<<<<<<< HEAD
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
=======
        <motion.div
          className="relative mb-12"
          variants={itemVariants}
        >
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeCase * 100}%)` }}
            >
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className={`bg-gradient-to-br ${caseStudy.bgColor} backdrop-blur-sm p-16 text-white`}>
                    <div className="max-w-6xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Case Study Info */}
                        <div>
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="text-6xl">{caseStudy.logo}</div>
                            <div>
                              <h3 className="text-4xl font-bold">{caseStudy.company}</h3>
                              <p className="text-xl text-purple-200">{caseStudy.industry}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-6 mb-8">
                            <div>
                              <h4 className="text-xl font-semibold mb-2 text-purple-200">Challenge:</h4>
                              <p className="text-lg">{caseStudy.challenge}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-xl font-semibold mb-2 text-purple-200">Solution:</h4>
                              <p className="text-lg">{caseStudy.solution}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                            <button className={`bg-gradient-to-r ${caseStudy.color} text-white px-8 py-4 rounded-lg font-bold text-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                              Read Full Case Study →
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white/10 transition-colors">
                              Download PDF
                            </button>
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="text-3xl font-bold mb-6 text-center">Results</h4>
                          <div className="space-y-4">
                            {caseStudy.results.map((result, resultIndex) => (
                              <motion.div
                                key={resultIndex}
                                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: resultIndex * 0.1 }}
                              >
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <span className="text-lg font-semibold">{result}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeCase ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {[
            { number: "500+", label: "Successful Deployments" },
            { number: "99.9%", label: "Success Rate" },
            { number: "$50M+", label: "Cost Savings Generated" },
            { number: "1M+", label: "Lives Improved" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
            >
              <div className="text-4xl font-bold text-purple-200 mb-2">{metric.number}</div>
              <div className="text-sm text-purple-300">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {[
            {
              quote: "The revolutionary AI systems transformed our entire operation. We've never seen such efficiency gains.",
              author: "Sarah Johnson, CEO",
              company: "TechCorp Global"
            },
            {
              quote: "Quantum computing solutions gave us the edge we needed in fraud detection. Absolutely game-changing.",
              author: "Michael Chen, CTO",
              company: "FinanceFlow Inc"
            },
            {
              quote: "Neural interface technology revolutionized our medical diagnosis. Patient outcomes have never been better.",
              author: "Dr. Emily Rodriguez, Chief Medical Officer",
              company: "HealthTech Solutions"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="text-4xl text-purple-300 mb-4">"</div>
              <p className="text-lg text-purple-100 mb-6 italic">{testimonial.quote}</p>
              <div>
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-purple-300">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold text-white mb-4">
              🚀 Ready to Create Your Success Story?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their business with our revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-bold text-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white/10 transition-colors">
                Schedule Consultation
>>>>>>> cursor/create-and-deploy-new-content-e495
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;