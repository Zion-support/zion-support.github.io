import React from 'react';
import { motion } from 'framer-motion';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN TECHNOLOGY • 2025
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Next-Gen Tech Showcase 2025
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Explore the most advanced technologies that are reshaping our world and creating unprecedented opportunities for innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Revolutionary Technologies</h2>
            <p className="text-xl text-gray-600">Cutting-edge innovations transforming industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
              <p className="text-gray-600 mb-6">
                Self-managing systems that operate independently and adapt to changing conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Self-driving vehicles</li>
                <li>• Autonomous drones</li>
                <li>• Smart infrastructure</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">5G & Edge Computing</h3>
              <p className="text-gray-600 mb-6">
                Ultra-fast connectivity and distributed computing for real-time applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 5G networks</li>
                <li>• Edge processing</li>
                <li>• IoT connectivity</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Biotechnology</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary biological technologies for healthcare and sustainability.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Gene editing</li>
                <li>• Synthetic biology</li>
                <li>• Personalized medicine</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Climate Tech</h3>
              <p className="text-gray-600 mb-6">
                Technologies addressing climate change and environmental sustainability.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Carbon capture</li>
                <li>• Renewable energy</li>
                <li>• Green materials</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">Extended Reality</h3>
              <p className="text-gray-600 mb-6">
                Immersive technologies blending physical and digital worlds.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Virtual reality</li>
                <li>• Augmented reality</li>
                <li>• Mixed reality</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Advanced security technologies protecting digital infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Zero-trust security</li>
                <li>• AI-powered threat detection</li>
                <li>• Quantum encryption</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 Innovation Showcase</h2>
            <p className="text-xl text-gray-600">Real-world applications of next-generation technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Smart Healthcare</h3>
                  <p className="text-gray-600 mb-4">AI-powered diagnostics, robotic surgery, and personalized treatment plans</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• AI medical imaging</li>
                        <li>• Robotic surgery systems</li>
                        <li>• Wearable health monitors</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Smart Manufacturing</h3>
                  <p className="text-gray-600 mb-4">Automated production lines with predictive maintenance and quality control</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Industrial IoT</li>
                    <li>• Predictive analytics</li>
                    <li>• Quality automation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-2xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Sustainable Cities</h3>
                  <p className="text-gray-600 mb-4">Smart city infrastructure with renewable energy and efficient resource management</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• Smart grids</li>
                    <li>• Traffic optimization</li>
                    <li>• Waste management</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-2xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Education Revolution</h3>
                  <p className="text-gray-600 mb-4">Immersive learning experiences with AI tutors and virtual classrooms</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• VR learning environments</li>
                    <li>• AI personalized tutoring</li>
                    <li>• Interactive simulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⏰ Technology Timeline</h2>
            <p className="text-xl opacity-90">The evolution of next-generation technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2023</div>
              <h3 className="text-xl font-bold mb-2">Foundation</h3>
              <p className="text-orange-100">Basic AI and IoT infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2024</div>
              <h3 className="text-xl font-bold mb-2">Integration</h3>
              <p className="text-orange-100">5G deployment and edge computing</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2025</div>
              <h3 className="text-xl font-bold mb-2">Revolution</h3>
              <p className="text-orange-100">Quantum computing and neural interfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">2026+</div>
              <h3 className="text-xl font-bold mb-2">Transformation</h3>
              <p className="text-orange-100">Full ecosystem integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Technology Impact</h2>
            <p className="text-xl text-gray-600">Measurable benefits of next-generation technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">$15T</div>
              <div className="text-lg text-gray-600">Global Market Value</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">50M</div>
              <div className="text-lg text-gray-600">Jobs Created</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-lg text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-lg text-gray-600">Adoption Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔮 Future Vision</h2>
            <p className="text-xl opacity-90">The world we're building together</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Connected World</h3>
              <p className="text-orange-100">Seamlessly connected global infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Human-AI Collaboration</h3>
              <p className="text-orange-100">Enhanced human capabilities through AI</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">♻️</div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Future</h3>
              <p className="text-orange-100">Technology-driven environmental solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Embrace the Future?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in shaping the next generation of technology and creating a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Innovation Journey
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextGenTechShowcase2025;