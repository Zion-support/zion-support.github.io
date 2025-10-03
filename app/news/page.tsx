import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Latest News</h1>
        <p className="text-lg text-gray-300 mb-8">
          Stay updated with the latest breakthroughs in AI and quantum computing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quantum Consciousness Breakthrough</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary advances in quantum consciousness research achieve new milestones.
            </p>
            <span className="text-blue-400 text-sm">October 2025</span>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Autonomous Enterprise Systems</h3>
            <p className="text-gray-300 mb-4">
              New autonomous systems revolutionize enterprise operations and efficiency.
            </p>
            <span className="text-blue-400 text-sm">September 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;