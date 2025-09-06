import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              We are a leading technology company dedicated to empowering businesses 
              with innovative solutions that drive growth and success.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              To provide cutting-edge technology solutions that help businesses 
              innovate, scale, and succeed in the digital world. We believe in 
              the power of technology to transform industries and create 
              opportunities for growth.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-8">
              To be the world's most trusted technology partner, known for 
              delivering exceptional solutions that exceed expectations and 
              drive meaningful change.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation: We constantly push the boundaries of what's possible</li>
              <li>Excellence: We deliver the highest quality solutions</li>
              <li>Integrity: We operate with honesty and transparency</li>
              <li>Collaboration: We work closely with our clients as partners</li>
              <li>Growth: We help our clients and team members grow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;