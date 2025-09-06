import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              Zion Tech Group is a leading provider of AI and technology solutions,
              empowering businesses with cutting-edge technology to drive innovation and growth.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts specializes in artificial intelligence, cloud computing,
              cybersecurity, and digital transformation services. We help organizations
              leverage technology to achieve their business objectives.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver innovative technology solutions that transform businesses and
              create lasting value for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;