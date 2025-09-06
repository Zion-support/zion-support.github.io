import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech</h1>
          <p className="text-xl text-gray-600">Innovating the future of technology</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Zion Tech is a leading technology company specializing in AI-powered solutions, 
            web development, and cloud services. We help businesses transform their digital 
            presence and streamline their operations.
          </p>
          
          <p className="text-gray-700">
            Our team of experienced developers and engineers work tirelessly to deliver 
            cutting-edge solutions that drive business growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}