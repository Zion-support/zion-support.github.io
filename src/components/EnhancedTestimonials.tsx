import React from 'react';

const EnhancedTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Exceptional AI implementation that increased our efficiency by 300%."</p>
            <div className="font-semibold text-blue-600">- Tech Company CEO</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Outstanding cloud migration with zero downtime."</p>
            <div className="font-semibold text-blue-600">- Enterprise Client</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Professional cybersecurity solutions that protected our business."</p>
            <div className="font-semibold text-blue-600">- Financial Services</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
