import React from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Interactive Content Showcase 2026
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Interactive Demos
            </h3>
            <p className="text-gray-600 mb-4">
              Experience our AI solutions through interactive demonstrations
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Try Demo
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Live Webinars
            </h3>
            <p className="text-gray-600 mb-4">
              Join our experts for live sessions on AI implementation
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;