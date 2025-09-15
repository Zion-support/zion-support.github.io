import React from 'react';
import { motion } from 'framer-motion';

const AdvancedAITransformation2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED AI TRANSFORMATION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Advanced AI Transformation 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with autonomous AI agents, intelligent automation, and next-generation artificial intelligence solutions
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#features" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Explore Features →
              </a>
              <a href="#contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary AI Features</h2>
            <p className="text-xl text-purple-200">Experience the future of artificial intelligence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Autonomous AI Agents</h3>
              <p className="text-purple-100 mb-6 text-center">
                Deploy intelligent agents that work independently, make decisions, and adapt to changing conditions
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Self-learning algorithms</li>
                <li>• Autonomous decision making</li>
                <li>• Real-time adaptation</li>
                <li>• Multi-agent collaboration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Intelligent Automation</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Automate complex workflows with AI that understands context and learns from experience
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Context-aware processing</li>
                <li>• Workflow optimization</li>
                <li>• Predictive analytics</li>
                <li>• Seamless integration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Advanced Neural Networks</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Leverage cutting-edge neural architectures for complex problem solving and pattern recognition
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Deep learning models</li>
                <li>• Pattern recognition</li>
                <li>• Natural language processing</li>
                <li>• Computer vision</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🔄</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Continuous Learning</h3>
              <p className="text-orange-100 mb-6 text-center">
                AI systems that continuously improve and adapt to new data and changing business requirements
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• Real-time learning</li>
                <li>• Performance optimization</li>
                <li>• Adaptive algorithms</li>
                <li>• Feedback integration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Predictive Intelligence</h3>
              <p className="text-violet-100 mb-6 text-center">
                Anticipate future trends and outcomes with advanced predictive modeling and forecasting
              </p>
              <ul className="text-violet-200 space-y-2 text-sm">
                <li>• Trend forecasting</li>
                <li>• Risk assessment</li>
                <li>• Market prediction</li>
                <li>• Demand planning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Personalized Solutions</h3>
              <p className="text-rose-100 mb-6 text-center">
                Custom AI solutions tailored to your specific business needs and industry requirements
              </p>
              <ul className="text-rose-200 space-y-2 text-sm">
                <li>• Custom model training</li>
                <li>• Industry-specific solutions</li>
                <li>• Scalable architectures</li>
                <li>• Integration support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800/50 to-blue-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">💡 Transformation Benefits</h2>
            <p className="text-xl text-purple-200">See the measurable impact of AI transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
              <p className="text-purple-200">Productivity Increase</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-2">$2M+</h3>
              <p className="text-purple-200">Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
              <p className="text-purple-200">Faster Processing</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
              <p className="text-purple-200">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging advanced AI transformation for unprecedented growth
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Your Transformation →
            </a>
            <a href="/pages/InnovativeServicesShowcase2025" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAITransformation2025;