import React from 'react';
const TrendingTopicsWidget2026 = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Trending Topics 2026
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Stay ahead with the latest trending topics in technology
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold text-white mb-4">Hot Topics</h3>
            <p className="text-gray-300">What's trending right now</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-white mb-4">Rising</h3>
            <p className="text-gray-300">Topics gaining momentum</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Featured</h3>
            <p className="text-gray-300">Editor's choice topics</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default TrendingTopicsWidget2026;
