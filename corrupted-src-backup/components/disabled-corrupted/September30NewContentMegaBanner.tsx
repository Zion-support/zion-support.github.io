import React from 'react';

const September30NewContentMegaBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          September30 New Content Mega Banner
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
                  <article.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-cyan-300 mb-2">{article.category}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-blue-200 mb-3">{article.description}</p>
                  <div className="text-xs font-semibold text-green-300 bg-green-500/20 px-3 py-1 rounded-full inline-block">
                    {article.impact}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* Additional promotional card */}
          <Link
            to="/blog"
            className="group bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center text-center"
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-125 transition-transform" />
            <h3 className="text-xl font-bold mb-2">View All Articles</h3>
            <p className="text-sm text-yellow-200 mb-4">200+ groundbreaking insights</p>
            <div className="flex items-center gap-2 text-yellow-400 font-semibold">
              Explore Now
              <Link className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
        {/* Stats Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-sm text-blue-200">New Breakthroughs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">10×</div>
              <div className="text-sm text-blue-200">Performance Gains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">1M×</div>
              <div className="text-sm text-blue-200">Quantum Speedup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">97%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-1">$15T</div>
              <div className="text-sm text-blue-200">Market Impact</div>
            </div>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 group"
          >
            <Brain className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Explore All Breakthroughs
            <Link className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5" />
            Get Started Today
          </Link>
        </div>
        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
            🧠 Neural Coding
          </span>
          <span className="bg-cyan-500/20 text-cyan-200 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30">
            📊 Holographic AI
          </span>
          <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
            ⚛️ Quantum AI
          </span>
          <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
            🔬 Molecular Manufacturing
          </span>
          <span className="bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full text-sm font-medium border border-pink-400/30">
            📚 AI Education
          </span>
        </div>
      </div>
    </div>
  );
};

export default September30NewContentMegaBanner;
