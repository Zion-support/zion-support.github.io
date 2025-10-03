// import React from 'react';

export default function June2026ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🌟 June 2026 Content Showcase
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Revolutionary Content & Success Stories
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore our newest breakthrough content featuring the latest AI innovations, Fortune 500 success stories, 
            and transformative technologies that are reshaping enterprise operations.
          </p>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Featured Blog Post */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-lg font-bold text-white mb-3">AI 2026 June Revolutionary Breakthrough</h3>
              <p className="text-gray-300 text-sm mb-4">
                Discover the latest AI breakthrough combining quantum-neural fusion with autonomous operations, 
                delivering unprecedented enterprise transformation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-500/20 px-2 py-1 rounded-full text-indigo-300 text-xs">1000x Speed</span>
                <span className="bg-purple-500/20 px-2 py-1 rounded-full text-purple-300 text-xs">98% Automation</span>
                <span className="bg-pink-500/20 px-2 py-1 rounded-full text-pink-300 text-xs">95% Accuracy</span>
              </div>
              <a 
                href="/blog/ai-2026-june-revolutionary-breakthrough"
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Article →
              </a>
            </div>
            
            {/* Featured Case Study */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
              <h3 className="text-lg font-bold text-white mb-3">$3.2B Fortune 500 Success Story</h3>
              <p className="text-gray-300 text-sm mb-4">
                How a Fortune 500 manufacturing leader achieved unprecedented transformation with AI 2026 technologies, 
                generating massive business value in just 6 months.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 px-2 py-1 rounded-full text-green-300 text-xs">$3.2B Value</span>
                <span className="bg-emerald-500/20 px-2 py-1 rounded-full text-emerald-300 text-xs">99.2% Efficiency</span>
                <span className="bg-teal-500/20 px-2 py-1 rounded-full text-teal-300 text-xs">0.8 Month ROI</span>
              </div>
              <a 
                href="/case-studies/fortune-500-ai-2026-june-mega-success"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                View Case Study →
              </a>
            </div>
            
            {/* Interactive Demo */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-lg font-bold text-white mb-3">Interactive AI Demo</h3>
              <p className="text-gray-300 text-sm mb-4">
                Experience the power of quantum-neural fusion and autonomous operations through our interactive 
                demonstration platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 px-2 py-1 rounded-full text-blue-300 text-xs">Live Demo</span>
                <span className="bg-cyan-500/20 px-2 py-1 rounded-full text-cyan-300 text-xs">Real-time</span>
                <span className="bg-indigo-500/20 px-2 py-1 rounded-full text-indigo-300 text-xs">Interactive</span>
              </div>
              <a 
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Request Demo →
              </a>
            </div>
          </div>
          
          {/* Additional Content Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-bold text-white mb-3">🔬 Technical Deep Dive</h4>
              <p className="text-gray-300 text-sm mb-4">
                Explore the technical architecture and implementation details of our AI 2026 breakthrough technologies.
              </p>
              <a 
                href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors duration-300"
              >
                Read Technical Analysis →
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h4 className="text-lg font-bold text-white mb-3">📊 ROI Calculator</h4>
              <p className="text-gray-300 text-sm mb-4">
                Calculate the potential business value and ROI for your organization with our AI transformation tools.
              </p>
              <a 
                href="/contact"
                className="text-green-400 hover:text-green-300 font-semibold text-sm transition-colors duration-300"
              >
                Calculate Your ROI →
              </a>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the AI revolution and discover how our breakthrough technologies can deliver unprecedented results 
              for your organization. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </a>
              <a 
                href="/blog/ai-2026-june-revolutionary-breakthrough" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Explore Latest Content →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}