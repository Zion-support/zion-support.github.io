import React from 'react';
import { Metadata } from 'next';
import { ArrowRight, Brain, Zap, Target, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Innovation Showcase 2025 - Revolutionary Breakthroughs | Zion Tech Group',
  description: 'Discover the latest AI innovations and breakthroughs in 2025. Explore cutting-edge technologies, quantum computing solutions, and advanced automation systems.',
  keywords: 'AI innovation, artificial intelligence, quantum computing, automation, breakthrough technology, 2025',
};

export default function AIInnovationShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Innovation
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of artificial intelligence with our revolutionary breakthroughs, 
              quantum computing solutions, and next-generation automation technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Explore Innovations
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Revolutionary AI Breakthroughs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum AI Fusion */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Quantum AI Fusion</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Revolutionary quantum computing integration with artificial intelligence, 
                delivering unprecedented processing power and problem-solving capabilities.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Neural Interface Revolution */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Neural Interface</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces enabling seamless communication between 
                human consciousness and AI systems for enhanced cognitive capabilities.
              </p>
              <div className="flex items-center text-purple-400 font-semibold">
                Explore Now <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Autonomous Operations */}
            <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Autonomous Operations</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Self-managing AI systems that operate independently, making intelligent 
                decisions and adapting to complex business environments in real-time.
              </p>
              <div className="flex items-center text-green-400 font-semibold">
                Discover More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">500+</div>
              <div className="text-xl text-gray-300">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">99.9%</div>
              <div className="text-xl text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">10x</div>
              <div className="text-xl text-gray-300">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-pink-400 mb-4">24/7</div>
              <div className="text-xl text-gray-300">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Advanced Capabilities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Next-Generation AI Features</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Quantum-Enhanced Processing</h4>
                    <p className="text-gray-300">Leverage quantum computing for exponentially faster AI computations and complex problem solving.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Consciousness Integration</h4>
                    <p className="text-gray-300">Direct neural interfaces enabling seamless human-AI collaboration and enhanced cognitive abilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Autonomous Decision Making</h4>
                    <p className="text-gray-300">Self-managing AI systems that operate independently with human-level decision-making capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Real-time Adaptation</h4>
                    <p className="text-gray-300">Dynamic learning and adaptation to changing environments and requirements in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold text-white mb-4">Experience the Future</h4>
                <p className="text-gray-300 mb-6">
                  Join thousands of organizations already transforming their operations with our revolutionary AI technologies.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and unlock unprecedented possibilities for your organization. 
            Our cutting-edge technologies are ready to accelerate your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}