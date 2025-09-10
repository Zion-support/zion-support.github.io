import React from 'react';

export default function BlogPost() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="text-center max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-white mb-6">
          Blog Post
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          blog post content coming soon
        </p>
        <div className="text-cyan-400 text-lg">
          Blog Post page under development
        </div>
      </div>
    </div>
  );
}