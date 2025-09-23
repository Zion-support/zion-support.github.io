import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const AIInnovationHub2025: React.FC = () => {
  const features = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that learn, adapt, and optimize business processes autonomously.",
      icon: "🤖",
      benefits: ["24/7 Operation", "Continuous Learning", "Cost Reduction", "Error Minimization"]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for human-AI interaction and document processing.",
      icon: "💬",
      benefits: ["Voice Commands", "Document Analysis", "Multi-language Support", "Sentiment Analysis"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting for business trends, customer behavior, and market changes.",
      icon: "📈",
      benefits: ["Market Predictions", "Risk Assessment", "Demand Forecasting", "Performance Optimization"]
    },
    {
      title: "Process Automation",
      description: "Intelligent automation of complex business workflows and decision-making processes.",
      icon: "⚙️",
      benefits: ["Workflow Optimization", "Decision Support", "Resource Allocation", "Quality Control"]
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      application: "AI-Powered Diagnosis",
      impact: "40% faster diagnosis with 95% accuracy",
      description: "Machine learning algorithms analyze medical images and patient data to assist doctors in making faster, more accurate diagnoses."
    },
    {
      industry: "Finance",
      application: "Fraud Detection",
      impact: "99.8% fraud detection rate",
      description: "Real-time transaction monitoring using AI to detect and prevent fraudulent activities before they cause damage."
    },
    {
      industry: "Manufacturing",
      application: "Predictive Maintenance",
      impact: "60% reduction in downtime",
      description: "AI sensors monitor equipment health and predict maintenance needs before failures occur."
    },
    {
      industry: "Retail",
      application: "Personalized Recommendations",
      impact: "35% increase in sales",
      description: "AI analyzes customer behavior to provide personalized product recommendations and optimize inventory."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6">
                🚀 NEW: AI Innovation Hub 2025
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                AI Innovation Hub
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revolutionary AI solutions that transform industries with autonomous agents, 
                predictive analytics, and intelligent automation. Experience the future of 
                artificial intelligence today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Start AI Journey
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Core AI Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI Innovation Hub delivers cutting-edge artificial intelligence solutions 
                designed to revolutionize your business operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI solutions are transforming industries across the globe.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {useCase.industry.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{useCase.industry}</h3>
                      <p className="text-gray-500">{useCase.application}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      {useCase.impact}
                    </span>
                  </div>
                  <p className="text-gray-600">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced AI Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on the latest AI technologies and frameworks for maximum performance and scalability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                <p className="text-gray-600">TensorFlow, PyTorch, Scikit-learn for advanced ML models</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Natural Language</h3>
                <p className="text-gray-600">GPT-4, BERT, Transformer models for NLP tasks</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
                <p className="text-gray-600">OpenCV, YOLO, ResNet for image and video analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already using our AI solutions to drive innovation, 
                increase efficiency, and unlock new possibilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIInnovationHub2025;