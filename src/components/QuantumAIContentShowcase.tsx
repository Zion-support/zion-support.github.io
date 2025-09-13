import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Target, Award, TrendingUp, Users } from 'lucide-react';

const QuantumAIContentShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Quantum-AI Fusion Content
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Quantum-AI Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore groundbreaking insights into the convergence of quantum computing and artificial intelligence 
            that's reshaping the future of business and technology.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Article */}
          <div className="lg:col-span-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium mr-3">
                    Featured Article
                  </span>
                  <span className="text-gray-400 text-sm">January 2025</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Quantum-AI Fusion 2025: The Business Transformation Revolution
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Discover how the convergence of quantum computing and artificial intelligence is creating 
                  unprecedented opportunities for business transformation, operational efficiency, and competitive advantage.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <Target className="w-4 h-4 mr-2 text-purple-400" />
                    Business Transformation
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                    ROI Optimization
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Award className="w-4 h-4 mr-2 text-indigo-400" />
                    Industry Leadership
                  </div>
                </div>
                
                <Link 
                  to="/blog/quantum-ai-fusion-2025-business-transformation" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Article
                  <Zap className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quantum Computing Insights */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">Quantum Computing</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Explore the latest breakthroughs in quantum computing and their applications 
              in solving complex business optimization problems.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Quantum optimization algorithms
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Quantum machine learning
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Quantum cryptography
              </div>
            </div>
            
            <Link 
              to="/technologies/quantum-computing" 
              className="text-blue-400 hover:text-blue-300 font-medium text-sm"
            >
              Learn More →
            </Link>
          </div>

          {/* AI Transformation */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">AI Transformation</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Discover how artificial intelligence is revolutionizing business operations 
              and creating new opportunities for growth and innovation.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Autonomous business systems
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Predictive analytics
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Intelligent automation
              </div>
            </div>
            
            <Link 
              to="/services/ai-transformation" 
              className="text-purple-400 hover:text-purple-300 font-medium text-sm"
            >
              Explore Services →
            </Link>
          </div>

          {/* Success Stories */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">Success Stories</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Learn from real-world implementations and discover how organizations 
              are achieving unprecedented results with quantum-AI solutions.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                300% ROI achievements
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                $2.5B+ revenue impact
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Market leadership
              </div>
            </div>
            
            <Link 
              to="/case-studies" 
              className="text-green-400 hover:text-green-300 font-medium text-sm"
            >
              View Case Studies →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Quantum-AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join industry leaders who are already leveraging quantum-AI fusion to achieve 
              unprecedented results and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <Users className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/resources" 
                className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAIContentShowcase;