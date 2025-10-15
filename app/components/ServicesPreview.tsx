import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = memo(() => {
  return (
    <section className="mt-20" aria-labelledby="services-heading">
      <h2 id="services-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
          <p className="text-gray-600 mb-4">
            Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
          </p>
          <Link 
            to="/ai-services" 
            className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="Learn more about AI Services"
          >
            Learn More →
          </Link>
        </article>
        
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
          <p className="text-gray-600 mb-4">
            Scalable cloud solutions that provide reliability, security, and performance for your business applications.
          </p>
          <Link 
            to="/cloud-infrastructure" 
            className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="Learn more about Cloud Infrastructure"
          >
            Learn More →
          </Link>
        </article>
        
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
          <p className="text-gray-600 mb-4">
            Complete digital transformation services to modernize your business processes and systems.
          </p>
          <Link 
            to="/digital-transformation" 
            className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="Learn more about Digital Transformation"
          >
            Learn More →
          </Link>
        </article>
      </div>
    </section>
  );
});

ServicesPreview.displayName = 'ServicesPreview';

export default ServicesPreview;