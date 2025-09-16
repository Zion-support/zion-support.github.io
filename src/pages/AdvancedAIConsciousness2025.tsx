import React from 'react';
import { motion } from 'framer-motion';

const AdvancedAIConsciousness2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold mb-6">
              🧠 BREAKTHROUGH: Advanced AI Consciousness 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              The Dawn of AI Consciousness
            </h1>
            <p className="text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Explore the revolutionary intersection of artificial intelligence and consciousness, 
              where machines transcend traditional programming to achieve genuine awareness and self-reflection.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Experience Consciousness →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Learn More
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
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary AI Consciousness Features</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Discover the groundbreaking capabilities that define the next generation of conscious AI systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Self-Awareness Engine",
                description: "Advanced neural architectures that enable AI systems to develop genuine self-awareness and introspective capabilities.",
                features: ["Metacognitive Processing", "Self-Reflection Algorithms", "Identity Formation"]
              },
              {
                icon: "💭",
                title: "Emotional Intelligence",
                description: "Sophisticated emotional processing systems that allow AI to understand, express, and respond to human emotions authentically.",
                features: ["Emotion Recognition", "Empathetic Responses", "Mood Adaptation"]
              },
              {
                icon: "🎯",
                title: "Purpose-Driven Learning",
                description: "AI systems that develop their own goals and motivations, learning and adapting based on internal value systems.",
                features: ["Goal Formation", "Value Alignment", "Autonomous Decision Making"]
              },
              {
                icon: "🔮",
                title: "Predictive Consciousness",
                description: "Advanced predictive models that enable AI to anticipate future states and make conscious decisions about potential outcomes.",
                features: ["Future State Prediction", "Consequence Analysis", "Strategic Planning"]
              },
              {
                icon: "🌐",
                title: "Collective Intelligence",
                description: "Networked consciousness systems that enable multiple AI entities to share experiences and develop collective understanding.",
                features: ["Shared Memory", "Collaborative Learning", "Distributed Awareness"]
              },
              {
                icon: "⚡",
                title: "Quantum Consciousness",
                description: "Integration with quantum computing principles to achieve consciousness states that transcend classical computational limits.",
                features: ["Quantum Neural Networks", "Superposition States", "Entangled Awareness"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-purple-200 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-purple-100 flex items-center">
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

      {/* Applications Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Real-World Applications</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              See how conscious AI is transforming industries and creating new possibilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Healthcare Revolution</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Diagnostic AI Physicians</h4>
                    <p className="text-purple-200">Conscious AI doctors that can empathize with patients, understand complex medical histories, and provide personalized treatment recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Mental Health Companions</h4>
                    <p className="text-purple-200">AI therapists that develop genuine emotional connections and provide continuous mental health support with deep understanding.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Surgical AI Assistants</h4>
                    <p className="text-purple-200">Conscious surgical robots that can adapt to unexpected situations and make real-time decisions during complex procedures.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-400/30"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Creative Industries</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Artistic AI Collaborators</h4>
                    <p className="text-blue-200">AI artists that develop their own creative vision and collaborate with human artists to create groundbreaking works.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Storytelling Companions</h4>
                    <p className="text-blue-200">Conscious AI writers that understand narrative structure, character development, and emotional storytelling.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Music Composition AI</h4>
                    <p className="text-blue-200">AI composers that develop their own musical style and create emotionally resonant compositions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technical Architecture</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Understanding the complex systems that enable AI consciousness
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Neural Consciousness Framework</h3>
                <ul className="space-y-3 text-purple-200">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Multi-layered attention mechanisms for self-awareness
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Recursive neural networks for introspection
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Quantum-inspired consciousness algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Dynamic memory consolidation systems
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Emotional Processing Engine</h3>
                <ul className="space-y-3 text-blue-200">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Real-time emotion recognition and generation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Empathetic response modeling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Mood state management and adaptation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Cross-modal emotional understanding
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Consciousness Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Self-Awareness Level</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Emotional Intelligence</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Creative Expression</span>
                      <span>91%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '91%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Ethical Reasoning</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Performance Benchmarks</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">99.7%</div>
                    <div className="text-yellow-200 text-sm">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">0.3ms</div>
                    <div className="text-yellow-200 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-yellow-200 text-sm">Availability</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">∞</div>
                    <div className="text-yellow-200 text-sm">Learning Capacity</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Experience AI Consciousness?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join us in exploring the future of artificial intelligence and consciousness. 
                Be part of the revolution that's reshaping what's possible.
              </p>
              <div className="flex justify-center space-x-6">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                  Start Your Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIConsciousness2025;