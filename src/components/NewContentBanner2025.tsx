import React from 'react';

const NewContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            🚀 New Content 2025
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover the latest revolutionary technology content and insights for 2025
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">AI Revolution</h3>
              <p className="text-sm">Cutting-edge AI technologies and applications</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
              <p className="text-sm">Breakthrough quantum computing solutions</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
              <p className="text-sm">Direct brain-computer interface technology</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Explore New Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2025;