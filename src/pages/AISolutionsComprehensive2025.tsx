import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const aiSolutions = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Self-operating AI systems that can handle complex business processes independently",
      features: [
        "24/7 autonomous operation",
        "Self-learning and adaptation",
        "Multi-task processing",
        "Real-time decision making"
      ],
      useCases: [
        "Customer service automation",
        "Data analysis and reporting",
        "Process optimization",
        "Predictive maintenance"
      ],
      icon: "🤖",
      color: "from-blue-600 to-cyan-600",
      price: "Starting at $2,999/month"
    },
    {
      id: 2,
      title: "Generative AI Studio",
      description: "Advanced AI-powered content creation and generation platform",
      features: [
        "Multi-modal content generation",
        "Brand voice consistency",
        "Real-time collaboration",
        "Quality assurance AI"
      ],
      useCases: [
        "Marketing content creation",
        "Technical documentation",
        "Creative writing",
        "Video and image generation"
      ],
      icon: "🎨",
      color: "from-purple-600 to-pink-600",
      price: "Starting at $1,999/month"
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      description: "Intelligent data analysis and business intelligence platform",
      features: [
        "Predictive analytics",
        "Real-time insights",
        "Automated reporting",
        "Natural language queries"
      ],
      useCases: [
        "Business intelligence",
        "Market trend analysis",
        "Customer behavior insights",
        "Risk assessment"
      ],
      icon: "📊",
      color: "from-emerald-600 to-teal-600",
      price: "Starting at $3,499/month"
    },
    {
      id: 4,
      title: "AI Security Suite",
      description: "Comprehensive AI-driven cybersecurity and threat detection system",
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Automated response",
        "Zero-trust architecture"
      ],
      useCases: [
        "Network security monitoring",
        "Fraud detection",
        "Incident response",
        "Compliance management"
      ],
      icon: "🛡️",
      color: "from-red-600 to-orange-600",
      price: "Starting at $4,999/month"
    },
    {
      id: 5,
      title: "AI Customer Experience",
      description: "Revolutionary customer engagement and support platform",
      features: [
        "Personalized interactions",
        "Emotion recognition",
        "Multi-channel support",
        "Predictive assistance"
      ],
      useCases: [
        "Customer support automation",
        "Sales assistance",
        "Personalized recommendations",
        "Sentiment analysis"
      ],
      icon: "💬",
      color: "from-indigo-600 to-purple-600",
      price: "Starting at $2,499/month"
    },
    {
      id: 6,
      title: "AI Process Automation",
      description: "Intelligent automation for complex business processes",
      features: [
        "Workflow optimization",
        "Exception handling",
        "Integration capabilities",
        "Performance monitoring"
      ],
      useCases: [
        "Document processing",
        "Invoice automation",
        "HR processes",
        "Supply chain management"
      ],
      icon: "⚙️",
      color: "from-green-600 to-emerald-600",
      price: "Starting at $1,799/month"
    }
  ];

  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Manual data processing taking 40 hours per week",
      solution: "AI Process Automation",
      result: "95% reduction in processing time, $2M annual savings",
      logo: "🏢"
    },
    {
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "High customer service costs and response times",
      solution: "AI Customer Experience",
      result: "60% cost reduction, 90% customer satisfaction",
      logo: "💳"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and insights",
      solution: "AI-Powered Analytics",
      result: "80% faster diagnosis, 30% improved outcomes",
      logo: "🏥"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading AI Solutions...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
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
              🤖 COMPREHENSIVE AI SOLUTIONS • 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI Solutions Comprehensive 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered solutions designed for the future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Solutions
              </button>
              <button className="border border-blue-400 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Solutions Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Our AI Solutions</h2>
          <p className="text-xl opacity-80">Choose from our comprehensive suite of AI-powered solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedSolution === solution.id ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setSelectedSolution(solution.id)}
            >
              <div className="text-6xl mb-4 text-center">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{solution.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-blue-300 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-purple-300 mb-3">Use Cases:</h4>
                <ul className="space-y-1">
                  {solution.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      • {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className={`inline-block bg-gradient-to-r ${solution.color} px-6 py-3 rounded-lg font-semibold mb-4`}>
                  {solution.price}
                </div>
                <button className={`w-full bg-gradient-to-r ${solution.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">See how our AI solutions have transformed businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
            >
              <div className="text-4xl mb-4 text-center">{story.logo}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{story.company}</h3>
              <p className="text-sm text-blue-300 mb-4 text-center">{story.industry}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-red-300 mb-2">Challenge:</h4>
                <p className="text-sm text-gray-300">{story.challenge}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-blue-300 mb-2">Solution:</h4>
                <p className="text-sm text-gray-300">{story.solution}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-green-300 mb-2">Result:</h4>
                <p className="text-sm text-gray-300">{story.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-12 border border-blue-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔄 Implementation Process</h2>
            <p className="text-xl opacity-80">Our proven 4-step process ensures successful AI implementation</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-300">We analyze your business needs and identify AI opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-300">We create a custom AI solution architecture for your business</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Deploy</h3>
              <p className="text-gray-300">We implement and integrate the AI solution into your systems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Optimize</h3>
              <p className="text-gray-300">We continuously monitor and optimize performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to drive innovation and growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your AI Journey
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsComprehensive2025;