import React from 'react';

const LazyServicesSection: React.FC = () => {
  return (
    <div className="mt-20">
      <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-12">Our Services</h2>
      <div className="grid grid-1-col md:grid-2-col lg:grid-3-col gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
          <p className="text-gray-600 mb-4">
            Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
          </p>
          <div className="text-sm text-gray-500 mb-3">Starting at $2,000/month</div>
          <a href="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-4">☁️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
          <p className="text-gray-600 mb-4">
            Scalable cloud solutions that provide reliability, security, and performance for your business applications.
          </p>
          <div className="text-sm text-gray-500 mb-3">Starting at $1,000/month</div>
          <a href="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
          <p className="text-gray-600 mb-4">
            Complete digital transformation services to modernize your business processes and systems.
          </p>
          <div className="text-sm text-gray-500 mb-3">Custom pricing</div>
          <a href="/digital-transformation" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analytics</h3>
          <p className="text-gray-600 mb-4">
            Transform your data into actionable insights with our advanced analytics and business intelligence solutions.
          </p>
          <div className="text-sm text-gray-500 mb-3">Starting at $1,500/month</div>
          <a href="/data-analytics" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
          <p className="text-gray-600 mb-4">
            Modern, responsive web applications built with cutting-edge technologies and best practices.
          </p>
          <div className="text-sm text-gray-500 mb-3">Starting at $3,000</div>
          <a href="/web-development" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-4">📱</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
          <p className="text-gray-600 mb-4">
            Native and cross-platform mobile applications that deliver exceptional user experiences.
          </p>
          <div className="text-sm text-gray-500 mb-3">Starting at $5,000</div>
          <a href="/mobile-development" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
        </div>
      </div>
    </div>
  );
};

export default LazyServicesSection;