import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Atom, Rocket, Shield, Target, Globe, TrendingUp } from 'lucide-react';
const RevolutionaryTechShowcase2027: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-6">
            <Star className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-sm font-medium">REVOLUTIONARY TECH 2027</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most advanced technologies that are revolutionizing industries, 
            transforming human capabilities, and creating unprecedented opportunities.
          </p>
        </div>
        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="group bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-300">AI & Machine Learning</h3>
                <p className="text-sm text-gray-400">Conscious AI Systems</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Advanced AI systems that demonstrate self-awareness, emotional intelligence, 
              and autonomous decision-making capabilities.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Neural consciousness breakthrough
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Autonomous learning systems
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Predictive analytics
              </div>
            </div>
            <Link 
              to="/ai-2027-revolutionary-breakthrough" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
            >
              Explore AI Revolution
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          {/* Quantum Computing */}
          <div className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-300">Quantum Computing</h3>
                <p className="text-sm text-gray-400">Revolutionary Processing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Harness the power of quantum mechanics to solve complex problems that 
              would take classical computers millions of years to complete.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Quantum supremacy achieved
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Quantum machine learning
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Quantum cryptography
              </div>
            </div>
            <Link 
              to="/quantum-computing-revolution-2027" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
            >
              Discover Quantum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          {/* Advanced Technology */}
          <div className="group bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-300">Advanced Technology</h3>
                <p className="text-sm text-gray-400">Next-Gen Innovation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Cutting-edge technologies that are reshaping industries and creating 
              the future of innovation across all sectors.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Autonomous systems
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Biotechnology advances
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Space technology
              </div>
            </div>
            <Link 
              to="/advanced-tech-innovation-2027" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
            >
              Explore Innovation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Key Features */}
        <div className="bg-gradient-to-r from-gray-900/50 to-purple-900/50 rounded-2xl p-8 border border-gray-700/50 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">Revolutionary Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-300">Conscious AI</h4>
              <p className="text-gray-400 text-sm">Self-aware AI systems with emotional intelligence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-purple-300">Quantum Speed</h4>
              <p className="text-gray-400 text-sm">1000x faster processing than classical computers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-green-300">Ultra Security</h4>
              <p className="text-gray-400 text-sm">Quantum-resistant encryption and zero-trust architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-orange-300">Precision</h4>
              <p className="text-gray-400 text-sm">99.9% accuracy in complex problem solving</p>
            </div>
          </div>
        </div>
        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">$15T</div>
            <div className="text-lg text-gray-300">Global Tech Market</div>
            <div className="text-sm text-gray-400">Projected by 2030</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50M</div>
            <div className="text-lg text-gray-300">New Jobs Created</div>
            <div className="text-sm text-gray-400">In AI and tech sectors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-lg text-gray-300">Efficiency Improvement</div>
            <div className="text-sm text-gray-400">Across industries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">200+</div>
            <div className="text-lg text-gray-300">Industries Transformed</div>
            <div className="text-sm text-gray-400">By advanced technology</div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 mb-6">
            <Zap className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-sm font-medium">Join the Revolution</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-white">
            Ready to Transform Your Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't get left behind in the technological revolution. Explore these 
            cutting-edge technologies and discover how they can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-innovation-hub-2026" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Technologies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border border-purple-400 rounded-lg font-semibold hover:bg-purple-600/20 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RevolutionaryTechShowcase2027;