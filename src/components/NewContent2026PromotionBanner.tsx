import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, TrendingUp, Star, Users, Award, Rocket } from 'lucide-react';

const NewContent2026PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            NEW CONTENT 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Quantum-AI</span>
            <br />
            Content Hub
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge insights, implementation guides, and success stories from the quantum-AI revolution. 
            Transform your organization with the latest breakthroughs in autonomous operations and hybrid computing systems.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Blog Post 1 */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-purple-400 mr-3" />
              <span className="text-purple-300 text-sm font-medium">BLOG POST</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              AI 2026: The Dawn of Enterprise Autonomous Operations
            </h3>
            <p className="text-gray-300 mb-4">
              Discover how AI-powered autonomous operations are revolutionizing enterprise workflows in 2026, 
              delivering unprecedented efficiency and intelligent decision-making capabilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                15 min read
              </div>
              <Link 
                to="/blog/ai-2026-enterprise-autonomous-operations"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-blue-400 mr-3" />
              <span className="text-blue-300 text-sm font-medium">BLOG POST</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              Quantum-AI Hybrid Systems: The Next Frontier
            </h3>
            <p className="text-gray-300 mb-4">
              Explore the revolutionary convergence of quantum computing and artificial intelligence, 
              creating hybrid systems that promise to solve previously impossible problems.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                18 min read
              </div>
              <Link 
                to="/blog/quantum-ai-hybrid-systems-2026"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Resource Guide */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
              <span className="text-green-300 text-sm font-medium">IMPLEMENTATION GUIDE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              Quantum-AI Implementation Roadmap 2026
            </h3>
            <p className="text-gray-300 mb-4">
              Comprehensive roadmap for implementing quantum-AI hybrid systems in enterprise environments, 
              covering technical requirements and best practices for successful deployment.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                45 min read
              </div>
              <Link 
                to="/resources/quantum-ai-implementation-roadmap-2026"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Get Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Case Study */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-orange-400 mr-3" />
              <span className="text-orange-300 text-sm font-medium">SUCCESS STORY</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
              Global Manufacturing Corp Transformation
            </h3>
            <p className="text-gray-300 mb-4">
              Discover how Global Manufacturing Corp achieved 40% cost reduction and 28% improvement in delivery times 
              through quantum-AI hybrid systems implementation.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                25 min read
              </div>
              <Link 
                to="/case-studies/global-manufacturing-quantum-ai-transformation"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="group bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Rocket className="w-6 h-6 text-purple-400 mr-3" />
              <span className="text-purple-300 text-sm font-medium">IMPACT METRICS</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Proven Results
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Reduction</span>
                <span className="text-green-400 font-bold">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Delivery Improvement</span>
                <span className="text-blue-400 font-bold">28%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Forecasting Accuracy</span>
                <span className="text-purple-400 font-bold">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ROI Achievement</span>
                <span className="text-orange-400 font-bold">3,233%</span>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="group bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-gray-300 mb-6">
                Join the quantum-AI revolution and unlock unprecedented efficiency gains for your business.
              </p>
              <div className="space-y-3">
                <Link 
                  to="/services"
                  className="block w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105"
                >
                  Explore Our Services
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full border border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group">
            <span className="text-white font-medium mr-3">Explore All 2026 Content</span>
            <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transform duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026PromotionBanner;