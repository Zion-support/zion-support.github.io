import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading technology solutions provider specializing in AI, cybersecurity, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Zion Tech Group
            </h1>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                We are a leading technology solutions provider specializing in AI, 
                cybersecurity, cloud infrastructure, and digital transformation.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our mission is to empower businesses with cutting-edge technology 
                solutions that drive growth, enhance security, and transform operations.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300">
                    To be the world's most trusted technology partner, enabling 
                    organizations to thrive in the digital age.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Innovation and Excellence</li>
                    <li>• Security and Trust</li>
                    <li>• Client Success</li>
                    <li>• Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )};

export default AboutPage;