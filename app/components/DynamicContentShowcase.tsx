import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
            <p className="text-gray-200 mb-4">Revolutionary AI technology that transforms how businesses operate.</p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-200 mb-4">Next-generation computing power for complex problem solving.</p>
            <button className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;