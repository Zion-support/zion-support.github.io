import React from 'react';

const ContentStatistics: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <div className="text-3xl font-bold text-cyan-400">50+</div>
          <div className="text-gray-300">Projects</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-cyan-400">100+</div>
          <div className="text-gray-300">Clients</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-cyan-400">300%</div>
          <div className="text-gray-300">ROI</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-cyan-400">99.9%</div>
          <div className="text-gray-300">Uptime</div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
