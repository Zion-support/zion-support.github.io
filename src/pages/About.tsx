import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">About Zion Tech Group</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Zion Tech Group is a leading technology company specializing in AI, micro SaaS development, 
              and IT services. We transform businesses with cutting-edge technology solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to democratize technology and make advanced solutions accessible 
              to businesses of all sizes, we have grown to become a trusted partner for over 500+ 
              companies worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of expert engineers, data scientists, and technology consultants work 
              tirelessly to deliver innovative solutions that drive real business value and 
              measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}