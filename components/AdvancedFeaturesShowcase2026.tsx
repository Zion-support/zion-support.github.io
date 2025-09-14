import React from 'react';
import Link from 'next/link';

export default function AdvancedFeaturesShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400 via-transparent to-purple-600"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500 to-transparent rounded-full transform translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ADVANCED FEATURES 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Next-Generation Capabilities
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge technology with our advanced features that set new standards 
            in performance, intelligence, and user experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI-Powered Analytics */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-pulse">🧠</div>
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">AI-POWERED</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Intelligent Analytics
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced machine learning algorithms that provide real-time insights, 
              predictive analytics, and automated decision-making capabilities.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Real-time data processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Predictive modeling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Automated insights
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Smart recommendations
              </li>
            </ul>
            <div className="text-xs text-gray-500 bg-white bg-opacity-10 rounded-lg p-3">
              <strong>Impact:</strong> 300% faster decision-making, 85% accuracy improvement
            </div>
          </div>

          {/* Quantum Computing Integration */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-spin">⚛️</div>
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">QUANTUM</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Quantum Processing
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary quantum computing capabilities that solve complex problems 
              exponentially faster than classical computers.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Quantum optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Parallel processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Advanced cryptography
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Quantum machine learning
              </li>
            </ul>
            <div className="text-xs text-gray-500 bg-white bg-opacity-10 rounded-lg p-3">
              <strong>Performance:</strong> 10,000x faster complex calculations
            </div>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-bounce">🤖</div>
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">AUTONOMOUS</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Self-Managing Systems
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fully autonomous systems that self-optimize, self-heal, and adapt 
              to changing conditions without human intervention.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Auto-scaling resources
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Self-healing capabilities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                Adaptive learning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Proactive maintenance
              </li>
            </ul>
            <div className="text-xs text-gray-500 bg-white bg-opacity-10 rounded-lg p-3">
              <strong>Efficiency:</strong> 95% reduction in manual intervention
            </div>
          </div>

          {/* Advanced Security */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-pulse">🛡️</div>
              <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">SECURE</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Military-Grade Security
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enterprise-grade security with advanced threat detection, 
              zero-trust architecture, and quantum-resistant encryption.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Zero-trust architecture
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Advanced threat detection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Quantum encryption
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Real-time monitoring
              </li>
            </ul>
            <div className="text-xs text-gray-500 bg-white bg-opacity-10 rounded-lg p-3">
              <strong>Protection:</strong> 99.99% threat prevention rate
            </div>
          </div>

          {/* Edge Computing */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-pulse">⚡</div>
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">EDGE</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Edge Computing
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Distributed edge computing that brings processing power closer to users 
              for ultra-low latency and real-time responsiveness.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Ultra-low latency
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Distributed processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Real-time analytics
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Offline capabilities
              </li>
            </ul>
            <div className="text-xs text-gray-500 bg-white bg-opacity-10 rounded-lg p-3">
              <strong>Speed:</strong> Sub-millisecond response times
            </div>
          </div>

          {/* Neural Interface */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-pulse">🧬</div>
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">NEURAL</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Neural Interface
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary neural interface technology that enables direct brain-computer 
              interaction for unprecedented control and efficiency.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Thought-based control
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Neural data processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Cognitive enhancement
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Mind-machine sync
              </li>
            </ul>
            <div className="text-xs text-gray-500 bg-white bg-opacity-10 rounded-lg p-3">
              <strong>Innovation:</strong> First commercial neural interface
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">99.99%</div>
            <div className="text-gray-300 text-sm">Uptime</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">&lt;1ms</div>
            <div className="text-gray-300 text-sm">Latency</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">10M+</div>
            <div className="text-gray-300 text-sm">Processed Events</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Accuracy</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Ready for the Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Join the technological revolution with our advanced features that are shaping 
              the future of business operations and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Advanced Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}