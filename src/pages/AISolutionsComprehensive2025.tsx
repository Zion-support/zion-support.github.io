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
      description: "Transform your business operations with comprehensive AI solutions designed for enterprise scale.",
      icon: "🏢",
      features: [
        "Autonomous business process automation",
        "Intelligent data analysis and insights",
        "Predictive analytics and forecasting",
        "Customer experience optimization",
        "Supply chain intelligence",
        "Risk management and compliance"
      ],
      benefits: [
        "40% reduction in operational costs",
        "300% increase in productivity",
        "99.9% accuracy in predictions",
        "24/7 autonomous operations"
      ]
    },
    healthcare: {
      title: "Healthcare AI Solutions",
      description: "Revolutionize healthcare delivery with AI-powered diagnostic and treatment solutions.",
      icon: "🏥",
      features: [
        "Medical image analysis and diagnosis",
        "Drug discovery and development",
        "Personalized treatment plans",
        "Patient monitoring and care",
        "Clinical decision support",
        "Epidemiological modeling"
      ],
      benefits: [
        "95% diagnostic accuracy",
        "50% faster drug discovery",
        "30% reduction in medical errors",
        "Personalized patient care"
      ]
    },
    finance: {
      title: "Financial AI Solutions",
      description: "Secure and intelligent financial services powered by advanced AI technology.",
      icon: "💰",
      features: [
        "Fraud detection and prevention",
        "Algorithmic trading systems",
        "Credit risk assessment",
        "Regulatory compliance automation",
        "Customer service chatbots",
        "Investment portfolio optimization"
      ],
      benefits: [
        "99.8% fraud detection rate",
        "25% increase in trading profits",
        "60% reduction in false positives",
        "Real-time risk assessment"
      ]
    },
    manufacturing: {
      title: "Manufacturing AI Solutions",
      description: "Optimize production processes and quality control with intelligent manufacturing systems.",
      icon: "🏭",
      features: [
        "Predictive maintenance systems",
        "Quality control automation",
        "Supply chain optimization",
        "Production line efficiency",
        "Inventory management",
        "Worker safety monitoring"
      ],
      benefits: [
        "35% reduction in downtime",
        "20% increase in production efficiency",
        "90% reduction in defects",
        "Real-time process optimization"
      ]
    }
  };

  const currentSolution = solutions[selectedSolution as keyof typeof solutions];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 text-white">
            🤖 COMPREHENSIVE AI SOLUTIONS • 2025
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Solutions Comprehensive 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our complete suite of AI solutions designed to transform every aspect of your business operations
          </p>
        </motion.div>

        {/* Solution Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {Object.keys(solutions).map((solution) => (
            <button
              key={solution}
              onClick={() => setSelectedSolution(solution)}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                selectedSolution === solution
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md hover:scale-102'
              }`}
            >
              <div className="text-4xl mb-3">{solutions[solution as keyof typeof solutions].icon}</div>
              <div className="font-semibold text-sm">{solutions[solution as keyof typeof solutions].title}</div>
            </button>
          ))}
        </motion.div>

        {/* Solution Details */}
        <motion.div
          key={selectedSolution}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{currentSolution.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentSolution.title}</h2>
                  <p className="text-gray-600 mt-2">{currentSolution.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {currentSolution.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Proven Benefits</h3>
              <div className="grid grid-cols-2 gap-4">
                {currentSolution.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {benefit.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-600">
                      {benefit.split(' ').slice(1).join(' ')}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Analyze your current systems and identify AI opportunities" },
              { step: "2", title: "Design", description: "Create custom AI solutions tailored to your specific needs" },
              { step: "3", title: "Deploy", description: "Implement and integrate AI systems into your operations" },
              { step: "4", title: "Optimize", description: "Continuously monitor and improve AI performance" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-blue-100 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp Global",
                industry: "Technology",
                result: "40% cost reduction",
                description: "Implemented AI-powered automation across all business processes"
              },
              {
                company: "HealthFirst Medical",
                industry: "Healthcare",
                result: "95% diagnostic accuracy",
                description: "Deployed AI diagnostic systems for faster and more accurate diagnoses"
              },
              {
                company: "FinanceMax Bank",
                industry: "Financial Services",
                result: "99.8% fraud detection",
                description: "Enhanced security with AI-powered fraud detection and prevention"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{story.result}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.company}</h3>
                <div className="text-sm text-gray-500 mb-3">{story.industry}</div>
                <p className="text-gray-600">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with our comprehensive AI solutions today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              Download Brochure
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AISolutionsComprehensive2025;