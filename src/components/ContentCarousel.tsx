import React from 'react';

const ContentCarousel: React.FC = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
        <p className="text-gray-300">See how we've helped businesses transform with AI</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="cyber-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">Manufacturing</h3>
          <p className="text-gray-300">300% increase in efficiency with AI automation</p>
        </div>
        <div className="cyber-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
          <p className="text-gray-300">95% accuracy in medical diagnosis with AI</p>
        </div>
        <div className="cyber-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">Finance</h3>
          <p className="text-gray-300">$50M+ saved through AI fraud detection</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
