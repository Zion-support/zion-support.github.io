import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

export default function AI2025UltimateInnovationShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI 2025 Ultimate Innovation Showcase
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Discover the most revolutionary AI breakthroughs, cutting-edge technologies, and transformative solutions that will reshape the future of business and humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#innovations" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Innovations
                <ArrowRight className="inline-block ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div id="innovations" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Innovation Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Neural Interface Revolution */}
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Brain className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Neural Interface Revolution</h3>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces enabling seamless human-AI collaboration and unprecedented cognitive enhancement.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Thought-to-text conversion</li>
                <li>• Neural pattern recognition</li>
                <li>• Cognitive augmentation</li>
                <li>• Memory enhancement</li>
              </ul>
            </div>

            {/* Quantum AI Fusion */}
            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Zap className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Quantum AI Fusion</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary quantum computing integration with AI systems for exponential processing power and breakthrough capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Quantum machine learning</li>
                <li>• Superposition optimization</li>
                <li>• Entanglement-based processing</li>
                <li>• Quantum neural networks</li>
              </ul>
            </div>

            {/* Autonomous Business Systems */}
            <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Target className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-green-300">Autonomous Business Systems</h3>
              <p className="text-gray-300 mb-6">
                Self-managing business operations with AI agents that make decisions, optimize processes, and drive growth autonomously.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Self-optimizing workflows</li>
                <li>• Autonomous decision making</li>
                <li>• Predictive maintenance</li>
                <li>• Dynamic resource allocation</li>
              </ul>
            </div>

            {/* Synthetic Intelligence */}
            <div className="bg-gradient-to-br from-red-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/30 hover:border-red-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <TrendingUp className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-red-300">Synthetic Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Next-generation AI systems with synthetic consciousness, emotional intelligence, and creative problem-solving capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Emotional AI processing</li>
                <li>• Creative problem solving</li>
                <li>• Synthetic consciousness</li>
                <li>• Adaptive learning</li>
              </ul>
            </div>

            {/* Global Transformation */}
            <div className="bg-gradient-to-br from-yellow-800/50 to-orange-800/50 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Globe className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Global Transformation</h3>
              <p className="text-gray-300 mb-6">
                AI-powered solutions transforming industries worldwide with unprecedented efficiency and innovation.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Industry 4.0 integration</li>
                <li>• Global supply chain optimization</li>
                <li>• Cross-border automation</li>
                <li>• Universal AI standards</li>
              </ul>
            </div>

            {/* Enterprise Security */}
            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <Shield className="w-12 h-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-indigo-300">Enterprise Security</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI-powered security systems protecting enterprise data and operations with intelligent threat detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• AI threat detection</li>
                <li>• Automated response systems</li>
                <li>• Behavioral analysis</li>
                <li>• Zero-trust architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Proven Success Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-xl text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">15,000%</div>
              <div className="text-xl text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-xl text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-xl text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of forward-thinking organizations already leveraging our revolutionary AI innovations to achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="inline-block ml-2" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}