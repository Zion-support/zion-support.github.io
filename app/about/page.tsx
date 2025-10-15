import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              We are a leading technology company dedicated to delivering innovative solutions 
              that transform businesses and drive digital transformation.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation in the digital age.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Innovation and Excellence</li>
              <li>Customer-Centric Approach</li>
              <li>Integrity and Transparency</li>
              <li>Continuous Learning and Growth</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              Our diverse team of experts brings together decades of experience in technology, 
              business, and innovation to deliver exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}