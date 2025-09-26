import React from 'react';

const ComprehensiveServices2025 = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Comprehensive Services 2025
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our complete suite of technology services designed to transform your business.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
          <p className="text-gray-600 mb-4">
            Complete digital transformation solutions to modernize your business processes.
          </p>
          <a href="/pages/DigitalTransformation2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
          <p className="text-gray-600 mb-4">
            Data-driven insights and analytics solutions for better decision making.
          </p>
          <a href="/pages/AdvancedAnalytics2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Explore →
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive security solutions to protect your digital assets.
          </p>
          <a href="/pages/CybersecurityFortress2025" className="text-blue-600 hover:text-blue-700 font-semibold">
            Discover →
          </a>
        </div>
      </div>
    </main>
  );
};

export default ComprehensiveServices2025;