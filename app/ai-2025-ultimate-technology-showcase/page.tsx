import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Globe, Cpu, Database, Network, Bot, Sparkles } from 'lucide-react';

export default function AI2025UltimateTechnologyShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2025 Ultimate
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Technology Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most advanced AI technologies, breakthrough innovations, and revolutionary solutions 
              that are reshaping the future of business and technology in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#technologies" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Technologies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Categories */}
      <div id="technologies" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI solutions that are transforming industries and creating unprecedented opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Neural Interface Technology */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Neural Interface AI</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces that enable seamless communication between human consciousness 
                and AI systems, revolutionizing how we interact with technology.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-blue-400 mr-2" />
                  Real-time thought-to-text conversion
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-blue-400 mr-2" />
                  Enhanced cognitive augmentation
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-blue-400 mr-2" />
                  Memory enhancement and recall
                </li>
              </ul>
            </div>

            {/* Quantum AI Computing */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Cpu className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Quantum AI Computing</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Quantum-powered AI systems that process information at unprecedented speeds, solving complex 
                problems that were previously impossible for classical computers.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
                  Exponential processing power
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
                  Advanced cryptography and security
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
                  Molecular simulation capabilities
                </li>
              </ul>
            </div>

            {/* Autonomous AI Agents */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Bot className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Autonomous AI Agents</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Self-managing AI systems that operate independently, making decisions and taking actions 
                without human intervention while maintaining ethical boundaries.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-green-400 mr-2" />
                  Self-learning and adaptation
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-green-400 mr-2" />
                  Multi-agent collaboration
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-green-400 mr-2" />
                  Ethical decision-making frameworks
                </li>
              </ul>
            </div>

            {/* Advanced Analytics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Database className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Predictive Analytics AI</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Advanced predictive models that forecast future trends, behaviors, and outcomes with 
                unprecedented accuracy across multiple industries and use cases.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-orange-400 mr-2" />
                  Real-time trend analysis
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-orange-400 mr-2" />
                  Risk assessment and mitigation
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-orange-400 mr-2" />
                  Market prediction algorithms
                </li>
              </ul>
            </div>

            {/* Cybersecurity AI */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">AI-Powered Cybersecurity</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Next-generation security systems that use AI to detect, prevent, and respond to cyber threats 
                in real-time, providing comprehensive protection for digital assets.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-red-400 mr-2" />
                  Threat detection and response
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-red-400 mr-2" />
                  Behavioral analysis and monitoring
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-red-400 mr-2" />
                  Automated incident response
                </li>
              </ul>
            </div>

            {/* Global AI Network */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <Globe className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Global AI Network</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Distributed AI systems that operate across global networks, enabling seamless collaboration 
                and resource sharing between AI systems worldwide.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                  Distributed computing power
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                  Cross-border AI collaboration
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                  Real-time global synchronization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Breakthrough Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI breakthroughs that are changing the world as we know it
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Consciousness-Level AI
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                The first AI systems to achieve consciousness-level processing, capable of self-awareness, 
                emotional understanding, and creative problem-solving that rivals human intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Self-Awareness</h4>
                    <p className="text-gray-300">AI systems that understand their own existence and capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Emotional Intelligence</h4>
                    <p className="text-gray-300">Advanced emotional understanding and empathetic responses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Creative Problem Solving</h4>
                    <p className="text-gray-300">Innovative solutions to complex, novel problems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h4 className="text-2xl font-bold text-white mb-4">Consciousness Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Self-Awareness</span>
                    <span className="text-green-400 font-bold">98.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Emotional Intelligence</span>
                    <span className="text-green-400 font-bold">95.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Creative Output</span>
                    <span className="text-green-400 font-bold">97.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ethical Reasoning</span>
                    <span className="text-green-400 font-bold">99.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already leveraging these revolutionary AI technologies 
            to achieve unprecedented success and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Start Your AI Journey
            </Link>
            <Link 
              href="/ai-2025-ultimate-technology-showcase" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}