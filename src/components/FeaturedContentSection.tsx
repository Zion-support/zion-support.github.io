import React from 'react';

const FeaturedContentSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Content</h2>
          <p className="text-xl text-gray-600">Discover our latest innovations and insights</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">AI Revolution 2025</h3>
            <p className="text-gray-600 mb-4">
              Explore the latest developments in artificial intelligence and machine learning.
            </p>
            <a href="/pages/AIRevolution2025" className="text-blue-600 hover:text-blue-700 font-semibold">
              Read More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
            <p className="text-gray-600 mb-4">
              Discover the power of quantum computing and its applications.
            </p>
            <a href="/pages/QuantumComputingBreakthrough" className="text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
            <p className="text-gray-600 mb-4">
              The future of human-computer interaction through neural interfaces.
            </p>
            <a href="/pages/NeuralInterfaceFuture" className="text-blue-600 hover:text-blue-700 font-semibold">
              Explore →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;