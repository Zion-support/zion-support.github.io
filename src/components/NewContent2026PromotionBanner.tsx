import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const NewContent2026PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-green-400/20 rounded-full animate-bounce delay-2000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              NEW CONTENT 2026
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Revolutionary AI breakthroughs, quantum computing insights, and autonomous business solutions
          </p>
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">500% Engagement Boost</h3>
              <p className="text-blue-100">AI-powered content marketing revolution</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1000% ROI</h3>
              <p className="text-blue-100">Quantum business automation systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Autonomous Intelligence</h3>
              <p className="text-blue-100">Self-learning analytics platforms</p>
            </div>
          </div>
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore New Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-innovation-hub-2026"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/30 border border-white/30 transform hover:scale-105 transition-all duration-300"
            >
              View Innovation Hub
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          {/* Latest articles preview */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">AI Content Marketing Revolution</h4>
                <p className="text-blue-100 text-sm mb-4">500% engagement boost with AI-driven personalization</p>
                <Link to="/blog/ai-powered-content-marketing-revolution-2026-500-percent-engagement" className="text-yellow-400 hover:text-yellow-300 font-medium">
                  Read More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">Quantum SEO Optimization</h4>
                <p className="text-blue-100 text-sm mb-4">Dominate search rankings with quantum AI</p>
                <Link to="/blog/quantum-seo-optimization-2026-dominate-search-rankings" className="text-yellow-400 hover:text-yellow-300 font-medium">
                  Read More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">Autonomous Business Intelligence</h4>
                <p className="text-blue-100 text-sm mb-4">Self-learning analytics without human intervention</p>
                <Link to="/blog/autonomous-business-intelligence-2026-self-learning-analytics" className="text-yellow-400 hover:text-yellow-300 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default NewContent2026PromotionBanner;
