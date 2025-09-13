import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Atom, Brain, TrendingUp, Star, Clock, Target } from 'lucide-react';

export default function QuantumAIBreakthroughPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/30 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Atom className="w-5 h-5 mr-2 text-purple-300" />
              BREAKTHROUGH ANNOUNCEMENT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Quantum AI Fusion
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-100">
              The Revolution is Here
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Experience the world's first successful fusion of quantum computing and artificial intelligence. 
              This breakthrough is rewriting the rules of what's possible in technology and business.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-purple-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Zap className="w-10 h-10 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">10,000x Faster</h3>
              <p className="text-purple-100">
                Quantum-enhanced AI processes information at speeds previously thought impossible, 
                enabling real-time solutions to complex problems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Brain className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Neural Quantum Processing</h3>
              <p className="text-purple-100">
                AI systems that leverage quantum superposition for exponential increases in 
                cognitive capabilities and decision-making accuracy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <TrendingUp className="w-10 h-10 text-indigo-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unprecedented ROI</h3>
              <p className="text-purple-100">
                Businesses implementing quantum AI are seeing returns that exceed traditional 
                AI implementations by orders of magnitude.
              </p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Proven Results</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">$50M</div>
                <div className="text-purple-100">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">99.99%</div>
                <div className="text-purple-100">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-300 mb-2">95%</div>
                <div className="text-purple-100">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">24/7</div>
                <div className="text-purple-100">Autonomous Operation</div>
              </div>
            </div>
          </div>

          {/* Featured Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link href="/blog/quantum-ai-breakthrough-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-300 mr-3" />
                  <span className="text-sm font-medium text-purple-100">Featured Article</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                  Quantum AI Breakthrough 2025
                </h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Discover the groundbreaking technology that's revolutionizing computing and 
                  artificial intelligence. Learn how quantum AI fusion is creating unprecedented 
                  possibilities for business transformation.
                </p>
                <div className="flex items-center text-yellow-300 font-medium">
                  Read the Full Article <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies/fortune-500-quantum-ai-transformation" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-green-300 mr-3" />
                  <span className="text-sm font-medium text-purple-100">Success Story</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                  Fortune 500 Transformation
                </h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  See how a Fortune 500 company achieved $50M ROI through quantum AI implementation. 
                  Real results from real businesses using breakthrough technology.
                </p>
                <div className="flex items-center text-green-300 font-medium">
                  View Case Study <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Revolutionary Applications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-purple-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-300" />
                </div>
                <h4 className="text-xl font-bold mb-3">Financial Modeling</h4>
                <p className="text-purple-100 text-sm">
                  Process millions of market variables simultaneously for unprecedented trading accuracy.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-3">Drug Discovery</h4>
                <p className="text-purple-100 text-sm">
                  Accelerate molecular simulations from years to hours, revolutionizing pharmaceutical research.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-indigo-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-indigo-300" />
                </div>
                <h4 className="text-xl font-bold mb-3">Climate Modeling</h4>
                <p className="text-purple-100 text-sm">
                  Model global weather patterns and predict climate changes with remarkable precision.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Be Among the First to Experience Quantum AI
              </h3>
              <p className="text-purple-100 mb-8 text-lg">
                Don't wait for the future—create it. Join the quantum AI revolution and transform 
                your business with technology that's rewriting the rules of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/services/quantum-ai" 
                  className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
                >
                  <Atom className="w-6 h-6 mr-3" />
                  Explore Quantum AI Services
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center justify-center"
                >
                  <Clock className="w-6 h-6 mr-3" />
                  Schedule a Demo
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-purple-200">
                <Star className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="text-sm">Limited availability - Book your consultation today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}