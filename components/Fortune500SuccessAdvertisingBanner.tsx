// import React from 'react';

export default function Fortune500SuccessAdvertisingBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Success Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-8 animate-pulse">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              💰 $50 Billion Success Story
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Fortune 500 AI Transformation: $50B Success Case Study
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            See how a leading Fortune 500 company achieved <span className="text-green-400 font-bold">$50 billion in value creation</span> with <span className="text-blue-400 font-bold">850% ROI</span> through revolutionary AI automation in just 12 months.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$50B</div>
              <div className="text-xs text-green-300">Value Created</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">850%</div>
              <div className="text-xs text-blue-300">ROI</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">12</div>
              <div className="text-xs text-purple-300">Months</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">99.8%</div>
              <div className="text-xs text-cyan-300">Quality</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/case-studies/fortune-500-ai-2026-revolutionary-automation-50-billion-success" 
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Case Study →
            </a>
            <a 
              href="/blog/ai-2026-enterprise-automation-revolutionary-breakthrough" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Learn the Technology →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Transformation
            </a>
          </div>
          
          {/* Key Results */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Revolutionary Results Achieved</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-bold text-green-400 mb-2">Financial Impact</h4>
                <p className="text-sm text-gray-300">$50B value creation, 850% ROI, 3.2-month payback period</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold text-blue-400 mb-2">Operational Excellence</h4>
                <p className="text-sm text-gray-300">40% production efficiency, 75% downtime reduction, 500x process speed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-purple-400 mb-2">Quality & Reliability</h4>
                <p className="text-sm text-gray-300">99.8% quality consistency, 90% supply chain reliability, 98% prediction accuracy</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Quote */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
            <blockquote className="text-xl italic text-gray-300 mb-4">
              "This AI transformation has been the most successful initiative in our company's history. The $50 billion in value creation exceeded all expectations, and the 850% ROI speaks for itself."
            </blockquote>
            <cite className="text-blue-400 font-semibold">— Fortune 500 CEO</cite>
          </div>
        </div>
      </div>
    </section>
  );
}