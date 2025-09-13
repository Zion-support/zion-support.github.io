import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Globe, Shield, Target, Users, TrendingUp, Star, Award } from 'lucide-react';

export default function AIInnovationShowcase20252026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Revolutionary AI Innovation Showcase 2025-2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover groundbreaking AI innovations, quantum computing breakthroughs, and revolutionary automation solutions that will transform industries in 2025-2026.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#innovations" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Explore Innovations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Key Innovations Grid */}
      <section id="innovations" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary AI Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that will reshape the future of business and society
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum AI Fusion */}
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Fusion</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary combination of quantum computing and artificial intelligence, delivering unprecedented processing power and problem-solving capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  10,000x faster computation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Breakthrough optimization algorithms
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Real-time complex problem solving
                </li>
              </ul>
            </div>

            {/* Neural Interface Revolution */}
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interface Revolution</h3>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces that enable seamless interaction between human consciousness and AI systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Thought-to-text conversion
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Enhanced cognitive abilities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Immersive virtual experiences
                </li>
              </ul>
            </div>

            {/* Autonomous Business Systems */}
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Business Systems</h3>
              <p className="text-gray-300 mb-6">
                Self-managing business operations powered by advanced AI that can make decisions, optimize processes, and drive growth autonomously.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  24/7 autonomous operations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Self-optimizing workflows
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Predictive business intelligence
                </li>
              </ul>
            </div>

            {/* Advanced Security AI */}
            <div className="bg-gradient-to-br from-red-800/50 to-orange-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Security AI</h3>
              <p className="text-gray-300 mb-6">
                Next-generation cybersecurity powered by AI that can predict, prevent, and respond to threats in real-time.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Threat prediction and prevention
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Automated incident response
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Zero-trust architecture
                </li>
              </ul>
            </div>

            {/* Predictive Analytics Revolution */}
            <div className="bg-gradient-to-br from-yellow-800/50 to-amber-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics Revolution</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI systems that can predict future trends, customer behavior, and market changes with unprecedented accuracy.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  99.7% prediction accuracy
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Real-time market analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Automated decision making
                </li>
              </ul>
            </div>

            {/* Collaborative AI Networks */}
            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaborative AI Networks</h3>
              <p className="text-gray-300 mb-6">
                Networks of AI systems that work together to solve complex problems and share knowledge across organizations.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Distributed intelligence
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Knowledge sharing protocols
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Collective problem solving
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transformative Impact
            </h2>
            <p className="text-xl text-gray-300">
              Real-world results from our AI innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">15,000%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$2.5B+</div>
              <div className="text-gray-300">Cost Savings Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Predictions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              2025-2026 Predictions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered predictions for the next two years of technological advancement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Q1 2025</h3>
                </div>
                <p className="text-gray-300">
                  Quantum AI fusion systems will achieve commercial viability, enabling 1000x faster processing for complex business problems.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Q2 2025</h3>
                </div>
                <p className="text-gray-300">
                  Neural interface technology will become mainstream, allowing direct brain-to-computer communication for enhanced productivity.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Q3 2025</h3>
                </div>
                <p className="text-gray-300">
                  Autonomous business systems will manage 80% of routine operations, freeing human workers for creative and strategic tasks.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-800/30 to-orange-800/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Q4 2025</h3>
                </div>
                <p className="text-gray-300">
                  AI-powered security systems will prevent 99.9% of cyber attacks before they occur, revolutionizing digital security.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-800/30 to-amber-800/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Q1 2026</h3>
                </div>
                <p className="text-gray-300">
                  Predictive analytics will achieve 99.7% accuracy in forecasting market trends and customer behavior patterns.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-indigo-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Q2 2026</h3>
                </div>
                <p className="text-gray-300">
                  Collaborative AI networks will enable seamless knowledge sharing across global organizations, creating unprecedented efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of forward-thinking organizations already leveraging our revolutionary AI innovations to drive unprecedented growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}