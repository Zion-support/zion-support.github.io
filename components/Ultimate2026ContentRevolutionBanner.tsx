import { Link } from 'react-router-dom';

export default function Ultimate2026ContentRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl p-8 mb-8 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                🚀 ULTIMATE 2026
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                REVOLUTION
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              The Ultimate 2026 AI Content Revolution
            </h2>
            
            <p className="text-lg mb-6 text-white/90 leading-relaxed">
              Experience the most comprehensive collection of cutting-edge AI insights, breakthrough technologies, and revolutionary case studies. The future of enterprise AI starts here.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-white/80">New Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">25+</div>
                <div className="text-sm text-white/80">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">$500M+</div>
                <div className="text-sm text-white/80">Total ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">100%</div>
                <div className="text-sm text-white/80">Cutting-Edge</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/content-hub"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center"
              >
                Explore Content Hub
              </Link>
              <Link to="/blog"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 text-center"
              >
                Read Latest Articles
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <div className="text-sm font-semibold text-white/90">
                  Ultimate AI Insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}