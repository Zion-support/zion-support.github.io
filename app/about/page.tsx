import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Zion Tech Group
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a leading technology company specializing in AI solutions, micro SaaS development, and enterprise IT services.
        </p>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Founded with a vision to transform businesses through cutting-edge technology, Zion Tech Group has been at the forefront of innovation in the tech industry.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of expert developers, engineers, and consultants work together to deliver solutions that drive growth and efficiency for our clients.
          </p>
        </div>
      </main>
    </div>
  );
}