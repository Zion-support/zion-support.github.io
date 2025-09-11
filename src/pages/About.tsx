import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of technology with AI-driven solutions and innovative digital transformation services.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we're committed to empowering businesses with cutting-edge AI and technology solutions. 
                Our mission is to bridge the gap between innovative technology and practical business applications.
              </p>
              <p className="text-lg text-gray-600">
                We believe in creating sustainable, scalable solutions that drive real business value and help our clients 
                stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">15+ years of technology expertise</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">AI-first approach to problem solving</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;