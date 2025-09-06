import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a technology company focused on delivering innovative solutions that drive business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that scale and perform.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of AI-powered, scalable technology solutions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <strong>Phone:</strong> +1 302 464 0950
              </div>
              <div>
                <strong>Email:</strong> kleber@ziontechgroup.com
              </div>
              <div>
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}