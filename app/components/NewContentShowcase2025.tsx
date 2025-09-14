import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Star } from 'lucide-react';

const NewContentShowcase2025 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-sm font-medium text-purple-800 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW CONTENT LAUNCH 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Revolutionary Content
            <br />
            <span className="text-3xl md:text-5xl">Just Released</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest breakthrough content, cutting-edge AI solutions, and revolutionary technology insights that are transforming industries worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Solutions */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Explore our comprehensive suite of AI automation tools, machine learning platforms, and intelligent business solutions.
            </p>
            
            <Link 
              href="/ai-innovation-hub-2025" 
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              Discover AI Solutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dive into the future with quantum algorithms, quantum cryptography, and next-generation computing solutions.
            </p>
            
            <Link 
              href="/quantum-computing-solutions-2025" 
              className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
            >
              Explore Quantum Tech
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Success Stories */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Learn from real-world implementations and discover how our solutions have transformed businesses globally.
            </p>
            
            <Link 
              href="/success-stories" 
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 mr-3 text-yellow-300" />
              <span className="text-lg font-semibold">FEATURED CONTENT</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              AI 2025: The Ultimate Breakthrough Revolution
            </h3>
            
            <p className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed">
              Discover how artificial intelligence is reshaping industries, creating unprecedented opportunities, and driving innovation across every sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-2025-ultimate-breakthrough"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-colors"
              >
                Explore Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-600 font-medium">New Articles</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-gray-600 font-medium">AI Solutions</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-600 font-medium">Case Studies</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 font-medium">Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;