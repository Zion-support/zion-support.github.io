import React from 'react';

const ContentStatistics: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="cyber-card hologram-card p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
            <p className="text-gray-300">Annual Savings Delivered</p>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
            <p className="text-gray-300">Process Automation</p>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
            <p className="text-gray-300">Average ROI</p>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <p className="text-gray-300">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;
