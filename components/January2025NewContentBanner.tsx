import React from 'react';

const January2025NewContentBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 mb-8">
            <span className="text-blue-300 font-bold text-lg tracking-wider uppercase">
              🚀 NEW: January 2025 Content Release
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Solutions & Success Stories
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Discover our latest insights on AI testing, cloud-native architecture, cybersecurity, and real-world transformation stories
          </p>
          
          {/* New Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* AI Testing Blog */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                AI Testing Revolution
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Automated quality assurance reducing defects by 85% while accelerating release cycles by 300%
              </p>
              <a 
                href="/blog/ai-2025-automated-testing-revolution-enterprise-quality-assurance"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read More →
              </a>
            </div>

            {/* Cloud Native Blog */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Cloud-Native Architecture
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Enterprise transformation delivering 400% faster deployment cycles and 60% cost reduction
              </p>
              <a 
                href="/blog/ai-2025-cloud-native-architecture-enterprise-transformation"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Explore →
              </a>
            </div>

            {/* Cybersecurity Blog */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                AI Cybersecurity Defense
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Next-generation defense reducing breach response time by 95% while preventing 99.7% of threats
              </p>
              <a 
                href="/blog/ai-2025-cybersecurity-ai-defense-enterprise-protection"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Learn More →
              </a>
            </div>

            {/* Automotive Case Study */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                $15B Automotive Transformation
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Global manufacturer achieves 40% efficiency gains with AI-powered smart factory solutions
              </p>
              <a 
                href="/case-studies/ai-2025-automotive-manufacturing-ai-transformation-15-billion-success"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                View Case Study →
              </a>
            </div>

            {/* Retail Case Study */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                $12B E-Commerce Success
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Global retailer achieves 180% conversion increase with AI-powered personalization
              </p>
              <a 
                href="/case-studies/ai-2025-retail-ecommerce-personalization-12-billion-success"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Success Story →
              </a>
            </div>

            {/* Financial Case Study */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                $8B Fraud Prevention
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Global bank saves $8B with 99.9% accuracy AI fraud detection across 500M accounts
              </p>
              <a 
                href="/case-studies/ai-2025-financial-services-ai-fraud-detection-8-billion-savings"
                className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                See Results →
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore All Insights
            </a>
            <a 
              href="/case-studies" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View Success Stories
            </a>
            <a 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NewContentBanner;