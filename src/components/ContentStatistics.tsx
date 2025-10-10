import React from 'react';

const ContentStatistics: React.FC = () => {
  return (
    <div className="py-16 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-lg text-gray-300">Numbers that speak to our success</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
