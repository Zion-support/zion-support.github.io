// import React from 'react';

export default function April2026SuccessStoryBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              💰 Fortune 500 Success Story
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            $5.2 Billion in Meta-Cognitive AI Value
          </h2>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            See how a Fortune 500 manufacturing giant achieved 
            <span className="text-green-400 font-bold"> 99.7% operational efficiency</span> and 
            <span className="text-emerald-400 font-bold"> 0.8 month payback period</span> with our revolutionary platform
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$5.2B</div>
              <div className="text-xs text-green-300">Total Value</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">99.7%</div>
              <div className="text-xs text-emerald-300">Efficiency</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">0.8</div>
              <div className="text-xs text-teal-300">Month ROI</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">400%</div>
              <div className="text-xs text-cyan-300">ROI</div>
            </div>
          </div>
          
          {/* Business Impact Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing Revolution</h3>
              <p className="text-gray-300 text-sm mb-3">
                99.7% predictive accuracy for equipment maintenance
              </p>
              <div className="text-green-400 font-bold">$1.8B in operational savings</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-white mb-3">Supply Chain Optimization</h3>
              <p className="text-gray-300 text-sm mb-3">
                78% reduction in supply chain costs across 50+ countries
              </p>
              <div className="text-emerald-400 font-bold">$2.1B in value creation</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">😊</div>
              <h3 className="text-xl font-bold text-white mb-3">Customer Experience</h3>
              <p className="text-gray-300 text-sm mb-3">
                89% customer satisfaction with personalized experiences
              </p>
              <div className="text-teal-400 font-bold">$1.3B in customer value</div>
            </div>
          </div>
          
          {/* Implementation Timeline */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Rapid Implementation Timeline</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
                <h4 className="text-lg font-bold text-purple-400 mb-2">Assessment</h4>
                <p className="text-gray-300 text-sm">2 weeks</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Integration</h4>
                <p className="text-gray-300 text-sm">4 weeks</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
                <h4 className="text-lg font-bold text-green-400 mb-2">Deployment</h4>
                <p className="text-gray-300 text-sm">6 weeks</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3">4</div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">Optimization</h4>
                <p className="text-gray-300 text-sm">Ongoing</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/case-studies/fortune-500-april-2026-meta-cognitive-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Case Study →
            </a>
            <a 
              href="/blog/ai-2026-april-revolutionary-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Learn About the Technology →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
          
          {/* Additional Success Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300">Fortune 500 Proven</span>
            <span className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300">Global Scale</span>
            <span className="bg-teal-500/20 px-4 py-2 rounded-full text-teal-300">Rapid ROI</span>
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300">Measurable Results</span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300">Enterprise Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}