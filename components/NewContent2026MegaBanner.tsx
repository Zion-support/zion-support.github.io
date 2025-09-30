import React from 'react';
import Link from 'next/link';

const NewContent2026MegaBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-green-400/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-lg font-bold">🚀 NEW: Revolutionary AI Content 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Experience the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">
              {' '}Future of AI
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-yellow-300">Today</span>
          </h2>
          
          <p className="text-2xl text-purple-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover groundbreaking AI innovations, interactive demos, and real enterprise success stories. 
            See how the world's leading companies are achieving 400% ROI with our revolutionary AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/demo"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105"
            >
              🎯 Try Interactive Demo
            </Link>
            <Link
              href="/case-studies"
              className="border-3 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              📊 View Success Stories
            </Link>
          </div>
        </div>
        
        {/* Feature highlights grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Superintelligence</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Advanced AI that learns, adapts, and makes decisions with human-like intelligence. 
              Experience the next generation of artificial intelligence.
            </p>
            <div className="text-3xl font-bold text-yellow-400 mb-2">400% ROI</div>
            <div className="text-purple-200 text-sm">Average return on investment</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI Processing</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Quantum-enhanced AI that processes complex data 1000x faster than traditional systems. 
              Unlock unprecedented computational power.
            </p>
            <div className="text-3xl font-bold text-cyan-400 mb-2">1000x Faster</div>
            <div className="text-purple-200 text-sm">Processing speed improvement</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Self-managing AI systems that operate independently, making intelligent decisions 
              and adapting to changing conditions in real-time.
            </p>
            <div className="text-3xl font-bold text-green-400 mb-2">95% Efficiency</div>
            <div className="text-purple-200 text-sm">Operational efficiency gain</div>
          </div>
        </div>
        
        {/* Content showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">🎉 What's New in 2026</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-bold mb-2">Interactive Demos</h4>
              <p className="text-purple-200 text-sm">Try AI solutions hands-on</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-lg font-bold mb-2">Success Stories</h4>
              <p className="text-purple-200 text-sm">Real enterprise results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-lg font-bold mb-2">AI Innovations</h4>
              <p className="text-purple-200 text-sm">Cutting-edge technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="text-lg font-bold mb-2">Expert Insights</h4>
              <p className="text-purple-200 text-sm">Industry best practices</p>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 backdrop-blur-sm rounded-3xl p-12 border border-white/30">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join 500+ enterprises already leveraging our revolutionary AI solutions. 
              Start your transformation journey today and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105"
              >
                🚀 Start Your AI Journey
              </Link>
              <Link
                href="/pricing"
                className="border-3 border-white/40 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                💰 View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026MegaBanner;