import { motion } from 'framer-motion';
import React from 'react';

const AdvancedNeuralInterface2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 ADVANCED NEURAL INTERFACE • 2026 BREAKTHROUGH
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced Neural Interface Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of human-computer interaction with direct neural interfaces 
              that enable seamless communication between mind and machine, unlocking unprecedented capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Neural Tech →
              </button>
              <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Neural Interface Capabilities</h2>
          <p className="text-xl text-gray-300">Direct brain-computer communication that transforms how we interact with technology</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Non-Invasive BCI</h3>
            <p className="text-gray-300 mb-6">
              Advanced non-invasive brain-computer interfaces that read neural signals 
              through advanced sensors without requiring surgical implantation.
            </p>
            <ul className="text-emerald-200 space-y-2">
              <li>• High-resolution EEG sensors</li>
              <li>• Real-time signal processing</li>
              <li>• Machine learning interpretation</li>
              <li>• Wireless connectivity</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">💭</div>
            <h3 className="text-2xl font-bold text-white mb-4">Thought Control</h3>
            <p className="text-gray-300 mb-6">
              Control devices and applications directly through thought, enabling 
              hands-free operation of complex systems with unprecedented precision.
            </p>
            <ul className="text-cyan-200 space-y-2">
              <li>• Intent recognition algorithms</li>
              <li>• Multi-device control</li>
              <li>• Gesture-free interaction</li>
              <li>• Instant response time</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-teal-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Feedback</h3>
            <p className="text-gray-300 mb-6">
              Receive direct neural feedback from digital systems, creating 
              a seamless two-way communication channel between mind and machine.
            </p>
            <ul className="text-teal-200 space-y-2">
              <li>• Sensory feedback loops</li>
              <li>• Emotional state detection</li>
              <li>• Cognitive load monitoring</li>
              <li>• Adaptive interfaces</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold text-white mb-4">Medical Applications</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary medical applications that restore mobility and communication 
              for patients with neurological conditions and disabilities.
            </p>
            <ul className="text-purple-200 space-y-2">
              <li>• Paralysis rehabilitation</li>
              <li>• Speech restoration</li>
              <li>• Motor function recovery</li>
              <li>• Cognitive enhancement</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-4">Gaming & Entertainment</h3>
            <p className="text-gray-300 mb-6">
              Immersive gaming and entertainment experiences that respond directly 
              to your thoughts and emotions for unprecedented realism.
            </p>
            <ul className="text-orange-200 space-y-2">
              <li>• Mind-controlled gaming</li>
              <li>• Emotional response systems</li>
              <li>• Virtual reality integration</li>
              <li>• Immersive storytelling</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Research & Development</h3>
            <p className="text-gray-300 mb-6">
              Advanced research tools that enable scientists to study brain function 
              and develop new treatments for neurological disorders.
            </p>
            <ul className="text-indigo-200 space-y-2">
              <li>• Brain mapping technology</li>
              <li>• Neural pathway analysis</li>
              <li>• Treatment optimization</li>
              <li>• Drug development</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gradient-to-r from-emerald-900/50 to-cyan-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-300">Transforming lives and industries with neural interface technology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare Revolution</h3>
              <p className="text-gray-300 mb-6">
                Restore independence and improve quality of life for patients with 
                spinal cord injuries, ALS, and other neurological conditions through 
                direct neural control of assistive devices.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="text-emerald-200">95% accuracy in intent recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-cyan-200">Real-time device control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span className="text-teal-200">Non-invasive implementation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Professional Applications</h3>
              <p className="text-gray-300 mb-6">
                Enhance productivity and efficiency in professional environments 
                with thought-controlled interfaces for complex tasks and data analysis.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="text-emerald-200">3x faster data processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-cyan-200">Hands-free operation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span className="text-teal-200">Multi-tasking capabilities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technology Specifications */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Specifications</h2>
          <p className="text-xl text-gray-300">Advanced neural interface technology specifications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-4xl font-bold text-emerald-400 mb-2">256</div>
            <div className="text-lg text-white mb-2">Channels</div>
            <div className="text-gray-300">High-resolution EEG</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-4xl font-bold text-cyan-400 mb-2">1ms</div>
            <div className="text-lg text-white mb-2">Latency</div>
            <div className="text-gray-300">Real-time response</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-lg text-white mb-2">Accuracy</div>
            <div className="text-gray-300">Intent recognition</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
            <div className="text-lg text-white mb-2">Battery Life</div>
            <div className="text-gray-300">Continuous operation</div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Connect Mind and Machine?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of human-computer interaction with our advanced neural interface technology. 
            Join the neural revolution and unlock new possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Neural Journey
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedNeuralInterface2026;