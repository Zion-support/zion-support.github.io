import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Rocket, Target, Award, Users, TrendingUp } from 'lucide-react';

const RevolutionaryTechShowcaseBanner2027: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            REVOLUTIONARY TECH SHOWCASE 2027
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Technology
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience groundbreaking innovations, cutting-edge solutions, and revolutionary technologies 
            that are reshaping industries and transforming the way we live, work, and connect.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/ai-innovation-hub-2027" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-cyan-500/25"
            >
              <Rocket className="w-6 h-6" />
              Explore AI Innovations
            </Link>
            <Link 
              to="/advanced-tech-solutions-2027" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-purple-500/25"
            >
              <Target className="w-6 h-6" />
              View Tech Solutions
            </Link>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Award-Winning</h3>
            <p className="text-gray-300 text-sm">Recognized by industry leaders for innovation excellence</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">10M+ Users</h3>
            <p className="text-gray-300 text-sm">Trusted by millions worldwide for cutting-edge solutions</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">500% ROI</h3>
            <p className="text-gray-300 text-sm">Average return on investment for our clients</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-12 h-12 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Future-Ready</h3>
            <p className="text-gray-300 text-sm">Built for tomorrow's technology challenges</p>
          </div>
        </div>

        {/* Technology Preview */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What's Inside Our Revolutionary Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                  Neural Networks 2.0
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                  Quantum AI Processing
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                  Predictive Analytics
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                  Natural Language Processing
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">Cloud & Infrastructure</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                  Auto-scaling Cloud Solutions
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                  Edge Computing
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                  Microservices Architecture
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                  Container Orchestration
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pink-400">Security & Compliance</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-pink-400 mr-2" />
                  Zero-Trust Architecture
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-pink-400 mr-2" />
                  Advanced Threat Detection
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-pink-400 mr-2" />
                  Compliance Automation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-pink-400 mr-2" />
                  Identity Management
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join the technological revolution and discover how our cutting-edge solutions 
              can transform your business and accelerate your success.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-white/25"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcaseBanner2027;