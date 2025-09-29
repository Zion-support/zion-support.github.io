import React from 'react';

const ContentValueTestimonials: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Zion Tech Group transformed our AI infrastructure completely."</p>
            <div className="font-semibold">- John Smith, CEO</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Outstanding service and cutting-edge solutions."</p>
            <div className="font-semibold">- Sarah Johnson, CTO</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"The best AI consulting team we've worked with."</p>
            <div className="font-semibold">- Mike Davis, Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentValueTestimonials;