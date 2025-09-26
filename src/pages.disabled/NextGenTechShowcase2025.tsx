import React from 'react';

const NextGenTechShowcase2025 = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Next Gen Tech Showcase 2025
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the next generation of technology solutions that are reshaping industries.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Autonomous Systems</h3>
          <p className="text-gray-600 mb-4">
            Self-operating systems that make decisions and adapt independently.
          </p>
          <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold mb-2">Edge Computing</h3>
          <p className="text-gray-600 mb-4">
            Distributed computing solutions for real-time data processing.
          </p>
          <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Explore →
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">
            Advanced analytics for forecasting trends and behaviors.
          </p>
          <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Discover →
          </a>
        </div>
      </div>
    </main>
  );
};

export default NextGenTechShowcase2025;