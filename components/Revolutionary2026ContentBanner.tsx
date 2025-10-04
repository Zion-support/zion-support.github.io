import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, TrendingUp, Star } from 'lucide-react';

const Revolutionary2026ContentBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Revolutionary 2026 Content</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            The Future of AI is Here
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover groundbreaking AI breakthroughs that are transforming industries and revolutionizing how we work, live, and innovate.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Neuromorphic Computing</h3>
              <p className="text-blue-100 text-sm">
                Brain-inspired AI with 1000x energy efficiency and real-time learning capabilities
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quantum ML Revolution</h3>
              <p className="text-blue-100 text-sm">
                Exponential performance gains with quantum-enhanced machine learning systems
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Autonomous Operations</h3>
              <p className="text-blue-100 text-sm">
                Self-managing enterprises achieving 300% ROI through AI transformation
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2026-neuromorphic-computing-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Neuromorphic AI
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/blog/ai-2026-quantum-machine-learning-revolution"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Discover Quantum ML
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          {/* Success metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-sm text-blue-200">ROI Achievement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1000x</div>
              <div className="text-sm text-blue-200">Energy Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-blue-200">Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-blue-200">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolutionary2026ContentBanner;