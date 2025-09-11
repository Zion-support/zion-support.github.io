import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              We are a leading technology company specializing in AI, cybersecurity, and cloud solutions. 
              Our mission is to empower businesses with cutting-edge technology that drives innovation and growth.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To revolutionize the way businesses operate by providing innovative technology solutions 
              that are secure, scalable, and efficient.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the global leader in AI-powered technology solutions, creating a smarter, 
              more connected world for businesses and individuals.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Expert team with decades of combined experience</li>
              <li>Cutting-edge technology and innovative solutions</li>
              <li>24/7 customer support and maintenance</li>
              <li>Proven track record of successful implementations</li>
              <li>Custom solutions tailored to your business needs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;