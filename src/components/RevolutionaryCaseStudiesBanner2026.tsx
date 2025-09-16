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
          </p>
        </motion.div>

        {/* Case Study Carousel */}
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
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;