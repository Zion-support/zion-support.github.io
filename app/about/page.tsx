import React from 'react';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to provide innovative AI and IT solutions for businesses worldwide."
        keywords="about us, company mission, AI company, IT solutions company, technology leadership"
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions that drive business growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses with cutting-edge AI and IT solutions that transform their operations and drive sustainable growth.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the global leader in AI and IT innovation, helping organizations achieve their digital transformation goals.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
                <p className="text-gray-600">We stay at the forefront of technology, constantly exploring new AI and IT solutions to give you a competitive edge.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Results-Driven</h3>
                <p className="text-gray-600">Our solutions are designed to deliver measurable results, helping you achieve your business objectives efficiently.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Approach</h3>
                <p className="text-gray-600">We work closely with you as a strategic partner, understanding your unique needs and delivering tailored solutions.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Artificial Intelligence & Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Cloud Infrastructure & Migration
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Digital Transformation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Micro SaaS Solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Data Analytics & Business Intelligence
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Custom Software Development
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">•</span>
                  <strong>Excellence:</strong> We strive for the highest quality in everything we do
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">•</span>
                  <strong>Innovation:</strong> We embrace new technologies and creative solutions
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">•</span>
                  <strong>Integrity:</strong> We maintain the highest ethical standards in all our interactions
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">•</span>
                  <strong>Collaboration:</strong> We believe in the power of teamwork and partnership
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">•</span>
                  <strong>Customer Success:</strong> Your success is our success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;