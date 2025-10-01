import React from 'react';

const January2025InnovationShowcaseBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🌟 BREAKTHROUGH: January 2025 Innovation Showcase
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Innovation Breakthroughs
          </h2>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-semibold max-w-4xl mx-auto">
            Discover the latest AI innovations transforming enterprise operations with unprecedented efficiency and measurable results
          </p>
          
          {/* Innovation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Innovation 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-lg font-bold text-white mb-3">Enterprise AI Implementation</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Complete roadmap for enterprise AI deployment with proven strategies and ROI frameworks
              </p>
              <div className="text-xs text-purple-400 font-semibold mb-2">300-500% ROI Target</div>
              <a 
                href="/blog/ai-2025-enterprise-ai-implementation-guide"
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors duration-300"
              >
                Learn More →
              </a>
            </div>
            
            {/* Innovation 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-lg font-bold text-white mb-3">Generative AI Applications</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Practical generative AI applications transforming industries with real-world results
              </p>
              <div className="text-xs text-blue-400 font-semibold mb-2">40-60% Efficiency Gain</div>
              <a 
                href="/blog/ai-2025-generative-ai-business-applications"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-300"
              >
                Explore Applications →
              </a>
            </div>
            
            {/* Innovation 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
              <h3 className="text-lg font-bold text-white mb-3">$50B Transformation</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Real case study of Fortune 100 company achieving unprecedented AI transformation success
              </p>
              <div className="text-xs text-green-400 font-semibold mb-2">18 Month Timeline</div>
              <a 
                href="/case-studies/ai-2025-global-enterprise-transformation-50-billion-success"
                className="text-green-400 hover:text-green-300 font-semibold text-sm transition-colors duration-300"
              >
                View Success Story →
              </a>
            </div>
            
            {/* Innovation 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-lg font-bold text-white mb-3">AI-Powered Automation</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Next-generation automation solutions delivering unprecedented operational efficiency
              </p>
              <div className="text-xs text-orange-400 font-semibold mb-2">70% Cost Reduction</div>
              <a 
                href="/services/ai-automation"
                className="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors duration-300"
              >
                Discover Solutions →
              </a>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Proven Results Across Industries</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">95%</div>
                <div className="text-blue-300 font-semibold mb-1">AI Accuracy</div>
                <div className="text-gray-400 text-sm">Enterprise-grade reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">47%</div>
                <div className="text-purple-300 font-semibold mb-1">Revenue Growth</div>
                <div className="text-gray-400 text-sm">Measured within 12 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">156%</div>
                <div className="text-green-300 font-semibold mb-1">Conversion Rate</div>
                <div className="text-gray-400 text-sm">Improvement in key metrics</div>
              </div>
            </div>
          </div>
          
          {/* Industry Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Transforming Key Industries</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 text-center">
                <div className="text-2xl mb-2">🏦</div>
                <div className="text-blue-400 font-semibold">Financial Services</div>
                <div className="text-blue-300 text-xs">60% fraud detection improvement</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 text-center">
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-green-400 font-semibold">Healthcare</div>
                <div className="text-green-300 text-xs">50% faster diagnosis</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 text-center">
                <div className="text-2xl mb-2">🏭</div>
                <div className="text-purple-400 font-semibold">Manufacturing</div>
                <div className="text-purple-300 text-xs">40% downtime reduction</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30 text-center">
                <div className="text-2xl mb-2">🛒</div>
                <div className="text-orange-400 font-semibold">Retail</div>
                <div className="text-orange-300 text-xs">47% conversion increase</div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Get Free AI Assessment →
            </a>
            <a 
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore Innovation Insights →
            </a>
            <a 
              href="/case-studies"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025InnovationShowcaseBanner;