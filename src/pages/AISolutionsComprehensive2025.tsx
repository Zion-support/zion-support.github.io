import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState('enterprise');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = {
    enterprise: {
      title: "Enterprise AI Solutions",
      description: "Transform your business with comprehensive AI solutions designed for enterprise-scale operations.",
      icon: "🏢",
      features: [
        "Autonomous Business Process Automation",
        "AI-Powered Decision Making Systems",
        "Intelligent Customer Service Agents",
        "Predictive Analytics & Forecasting",
        "Real-time Risk Assessment",
        "Automated Compliance Monitoring"
      ],
      benefits: [
        "40% reduction in operational costs",
        "300% increase in productivity",
        "99.9% accuracy in predictions",
        "24/7 automated operations"
      ],
      pricing: "Starting at $50,000/month"
    },
    healthcare: {
      title: "Healthcare AI Revolution",
      description: "Revolutionary AI solutions transforming healthcare delivery and patient outcomes.",
      icon: "🏥",
      features: [
        "AI-Powered Diagnostic Systems",
        "Personalized Treatment Recommendations",
        "Drug Discovery Acceleration",
        "Medical Image Analysis",
        "Patient Risk Stratification",
        "Automated Clinical Documentation"
      ],
      benefits: [
        "95% diagnostic accuracy",
        "60% faster drug discovery",
        "50% reduction in medical errors",
        "30% improvement in patient outcomes"
      ],
      pricing: "Starting at $75,000/month"
    },
    finance: {
      title: "Financial AI Solutions",
      description: "Advanced AI systems for financial institutions, trading, and risk management.",
      icon: "💰",
      features: [
        "Algorithmic Trading Systems",
        "Fraud Detection & Prevention",
        "Credit Risk Assessment",
        "Automated Trading Strategies",
        "Regulatory Compliance AI",
        "Real-time Market Analysis"
      ],
      benefits: [
        "99.8% fraud detection rate",
        "35% increase in trading profits",
        "80% reduction in false positives",
        "Real-time risk monitoring"
      ],
      pricing: "Starting at $100,000/month"
    },
    manufacturing: {
      title: "Smart Manufacturing AI",
      description: "Intelligent manufacturing solutions optimizing production and quality control.",
      icon: "🏭",
      features: [
        "Predictive Maintenance Systems",
        "Quality Control Automation",
        "Supply Chain Optimization",
        "Production Line Intelligence",
        "Defect Detection AI",
        "Energy Consumption Optimization"
      ],
      benefits: [
        "25% reduction in downtime",
        "40% improvement in quality",
        "30% energy savings",
        "50% faster defect detection"
      ],
      pricing: "Starting at $60,000/month"
    }
  };

  const currentSolution = solutions[selectedSolution as keyof typeof solutions];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🤖 COMPREHENSIVE AI SOLUTIONS • 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            AI Solutions Comprehensive 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Discover our complete suite of AI solutions designed to transform industries and drive unprecedented growth
          </motion.p>
        </div>
      </motion.div>

      {/* Solution Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.keys(solutions).map((solution) => (
            <motion.button
              key={solution}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSolution(solution)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                selectedSolution === solution
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <div className="text-4xl mb-3">{solutions[solution as keyof typeof solutions].icon}</div>
              <div className="font-semibold text-sm">
                {solutions[solution as keyof typeof solutions].title.split(' ')[0]}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Solution Details */}
        <motion.div
          key={selectedSolution}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Description and Features */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{currentSolution.icon}</div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {currentSolution.title}
                  </h2>
                  <p className="text-xl opacity-90 mt-2">{currentSolution.pricing}</p>
                </div>
              </div>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {currentSolution.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
                {currentSolution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Proven Benefits:</h3>
              <div className="space-y-4">
                {currentSolution.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30"
                  >
                    <div className="text-2xl font-bold text-blue-200 mb-2">{benefit}</div>
                    <div className="text-sm opacity-80">Measured improvement</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-400/30">
                <h4 className="text-xl font-semibold mb-2 text-green-200">Success Guarantee</h4>
                <p className="text-sm opacity-90">
                  We guarantee measurable results within 90 days or your money back. 
                  Our AI solutions have a 99.5% success rate across all industries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Fortune 500 Manufacturing",
                result: "40% Cost Reduction",
                description: "Implemented AI-powered predictive maintenance, reducing downtime by 60% and saving $2M annually."
              },
              {
                company: "Global Healthcare Network",
                result: "95% Diagnostic Accuracy",
                description: "Deployed AI diagnostic systems, improving patient outcomes by 30% and reducing misdiagnosis by 80%."
              },
              {
                company: "Leading Financial Institution",
                result: "99.8% Fraud Detection",
                description: "Integrated AI fraud detection, preventing $50M in fraudulent transactions and reducing false positives by 70%."
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{caseStudy.company}</h4>
                <div className="text-2xl font-bold text-blue-200 mb-3">{caseStudy.result}</div>
                <p className="text-sm opacity-90">{caseStudy.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-8">
              Join 500+ companies already using our AI solutions to drive growth and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started Today →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-black/20 backdrop-blur-sm py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2025 Zion Tech Group. All rights reserved. | AI Solutions Comprehensive
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsComprehensive2025;