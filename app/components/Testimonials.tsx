import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">"Zion Tech Group transformed our business with their AI solutions."</p>
            <p className="font-semibold">- John Doe, CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">"Excellent cloud infrastructure and cybersecurity services."</p>
            <p className="font-semibold">- Jane Smith, CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">"Professional team with cutting-edge technology expertise."</p>
            <p className="font-semibold">- Mike Johnson, Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}