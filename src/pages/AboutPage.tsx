import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize enterprise technology through AI and automation." />
        <meta name="keywords" content="about us, company, mission, AI technology, enterprise solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                We are a leading technology company specializing in AI-powered enterprise solutions, 
                digital transformation, and cutting-edge automation technologies.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To revolutionize how businesses operate through innovative AI solutions and 
                digital transformation strategies that drive growth and efficiency.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To be the global leader in AI-powered enterprise solutions, enabling 
                organizations to achieve unprecedented levels of automation and intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}