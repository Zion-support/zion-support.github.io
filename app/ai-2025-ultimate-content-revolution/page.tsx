import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, Users, TrendingUp, Shield, Globe } from 'lucide-react';

export default function AI2025UltimateContentRevolution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI 2025 Ultimate Content Revolution
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto">
              Experience the most comprehensive collection of AI insights, breakthroughs, and revolutionary content that will transform your understanding of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Content <ArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/case-studies" 
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                View Case Studies <Target className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Brain className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Neural Intelligence</h3>
            <p className="text-gray-300">Advanced AI systems that mimic human cognitive processes and decision-making.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-gray-300">Revolutionary quantum algorithms that solve complex problems exponentially faster.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Target className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Precision Automation</h3>
            <p className="text-gray-300">Intelligent systems that automate complex business processes with unprecedented accuracy.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Users className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Human-AI Collaboration</h3>
            <p className="text-gray-300">Seamless integration between human creativity and AI capabilities.</p>
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Content Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into specialized AI domains with our comprehensive content library
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-400/30">
            <TrendingUp className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Future Predictions</h3>
            <p className="text-gray-300 mb-6">Comprehensive analysis of AI trends and predictions for 2025-2035</p>
            <Link href="/blog/ai-2025-future-predictions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
              Explore Predictions <ArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-xl p-8 border border-blue-400/30">
            <Shield className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-300 mb-6">Proven AI implementations that deliver measurable business results</p>
            <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
              View Solutions <ArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-yellow-600/20 rounded-xl p-8 border border-green-400/30">
            <Globe className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
            <p className="text-gray-300 mb-6">Real-world transformations across industries and continents</p>
            <Link href="/case-studies/ai-2025-global-enterprise-transformation-50000-roi" className="text-green-400 hover:text-green-300 font-semibold flex items-center">
              See Impact <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl p-12 text-center border border-purple-400/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already leveraging our AI insights and solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              href="/guides" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Read Our Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}