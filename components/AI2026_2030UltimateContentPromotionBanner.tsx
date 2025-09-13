import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Globe } from 'lucide-react';

const AI2026_2030UltimateContentPromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
            <Star className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-semibold">NEW: Ultimate Content Collection</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2026-2030 Ultimate Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI breakthroughs, quantum computing solutions, 
            and automation technologies that will define the next 5 years of innovation.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/30 rounded-lg mb-4">
                <Brain className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Breakthroughs</h3>
              <p className="text-white/80 text-sm">Neural synthesis, quantum-AI fusion, and autonomous systems</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/30 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-white/80 text-sm">Error-corrected quantum computers and quantum internet</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/30 rounded-lg mb-4">
                <Globe className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Future Predictions</h3>
              <p className="text-white/80 text-sm">Comprehensive 5-year technology roadmap and insights</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2,500%</div>
              <div className="text-white/80 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000x</div>
              <div className="text-white/80 text-sm">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">90 Days</div>
              <div className="text-white/80 text-sm">Implementation</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2026-2030-ultimate-content"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Explore Ultimate Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Custom Consultation
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/50 font-semibold">Fortune 500 Companies</div>
              <div className="text-white/50 font-semibold">Startup Unicorns</div>
              <div className="text-white/50 font-semibold">Government Agencies</div>
              <div className="text-white/50 font-semibold">Research Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026_2030UltimateContentPromotionBanner;