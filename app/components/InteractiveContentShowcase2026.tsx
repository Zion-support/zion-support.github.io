import React from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">2026 Content Showcase</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Revolutionary AI</h3>
          <p className="text-blue-100">Discover the latest breakthroughs in artificial intelligence</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Quantum Innovation</h3>
          <p className="text-blue-100">Explore quantum computing advancements</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;
