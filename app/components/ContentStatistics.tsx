import React from 'react';

const ContentStatistics: React.FC = () => {
  return (
    <>
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
          Our Impact in Numbers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-white font-medium mb-2">Projects Completed</div>
            <div className="text-gray-400 text-sm">Across all industries</div>
          </div>
          
          <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-white font-medium mb-2">Uptime Guarantee</div>
            <div className="text-gray-400 text-sm">Reliable performance</div>
          </div>
          
          <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-white font-medium mb-2">Support Available</div>
            <div className="text-gray-400 text-sm">Always here to help</div>
          </div>
          
          <div className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-white font-medium mb-2">AI Solutions</div>
            <div className="text-gray-400 text-sm">Ready to deploy</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContentStatistics;