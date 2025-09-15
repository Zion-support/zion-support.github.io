import React from 'react';
import { motion } from 'framer-motion';

const AdvancedAITransformation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold mb-6">
              🚀 BREAKTHROUGH 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Advanced AI Transformation 2026
            </h1>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
              Experience the next evolution of artificial intelligence with our revolutionary 
              transformation platform that redefines how businesses operate in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Start Transformation →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary AI Capabilities</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Our advanced AI transformation platform delivers unprecedented capabilities that 
              revolutionize business operations and drive exponential growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Autonomous Decision Making",
                description: "AI systems that make complex business decisions in real-time with 99.7% accuracy",
                features: ["Real-time analysis", "Predictive modeling", "Risk assessment"]
              },
              {
                icon: "⚡",
                title: "Lightning-Fast Processing",
                description: "Process massive datasets in milliseconds with our quantum-enhanced AI algorithms",
                features: ["Quantum acceleration", "Parallel processing", "Edge computing"]
              },
              {
                icon: "🔮",
                title: "Predictive Intelligence",
                description: "Anticipate market trends and customer behavior with advanced predictive analytics",
                features: ["Market forecasting", "Customer insights", "Trend analysis"]
              },
              {
                icon: "🛡️",
                title: "Advanced Security",
                description: "Military-grade security protocols protect your AI systems and data",
                features: ["End-to-end encryption", "Zero-trust architecture", "Threat detection"]
              },
              {
                icon: "🌐",
                title: "Global Scalability",
                description: "Scale your AI operations across multiple continents with seamless integration",
                features: ["Multi-region deployment", "Auto-scaling", "Load balancing"]
              },
              {
                icon: "🎯",
                title: "Precision Optimization",
                description: "Continuously optimize business processes for maximum efficiency and ROI",
                features: ["Process automation", "Resource optimization", "Performance tuning"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-purple-200 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-purple-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our AI transformation platform has delivered measurable results for over 500+ 
              enterprise clients worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "300%", label: "Efficiency Increase", icon: "📈" },
              { number: "$2.5B", label: "Cost Savings", icon: "💰" },
              { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
              { number: "50+", label: "Countries Served", icon: "🌍" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-5xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-purple-100 text-lg">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies that have already transformed 
              their operations with our advanced AI platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-12 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAITransformation2026;