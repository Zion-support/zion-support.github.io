import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Blog
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Latest news and insights
        </p>
        <div className="text-cyan-400 text-lg">
          Blog posts coming soon
        </div>
      </div>
    </div>
  );
}