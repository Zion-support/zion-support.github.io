import React from 'react';

const ContentValueTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Zion Tech Group transformed our business with their AI solutions."</p>
            <div className="font-semibold">- Client Name</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Outstanding service and innovative technology solutions."</p>
            <div className="font-semibold">- Another Client</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Professional team delivering exceptional results."</p>
            <div className="font-semibold">- Third Client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentValueTestimonials;
