import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech Group is a leading technology company specializing in AI-powered solutions, 
            cloud infrastructure, and digital transformation services. We help businesses of all 
            sizes leverage cutting-edge technology to drive growth and innovation.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our team of experienced engineers and consultants work closely with clients to 
            understand their unique challenges and deliver customized solutions that meet 
            their specific needs.
          </p>
          <p className="text-lg text-gray-600">
            With over 500+ successful projects and a 99.9% uptime record, we're committed 
            to delivering excellence in every engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;