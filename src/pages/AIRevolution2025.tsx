import React from 'react';

const AIRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">AI Revolution 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the latest innovations and breakthrough technologies in AI that are reshaping industries and creating new possibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-blue-100">Cutting-edge AI technology solutions that transform businesses and drive growth.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Technology</h3>
            <p className="text-blue-100">Revolutionary AI advances that push the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Future</h3>
            <p className="text-blue-100">Next-generation AI solutions that shape tomorrow's world.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Key AI Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <p className="text-blue-100">Advanced algorithms that learn and improve from data.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Deep Learning</h3>
              <p className="text-purple-100">Neural networks that mimic human brain functions.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Natural Language Processing</h3>
              <p className="text-pink-100">AI that understands and processes human language.</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Computer Vision</h3>
              <p className="text-red-100">AI that can see and interpret visual information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRevolution2025;