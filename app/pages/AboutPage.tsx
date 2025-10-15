import React from 'react';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to provide advanced AI and IT solutions for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, IT services, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth in the digital age.
              </p>
              <p className="text-gray-300 text-lg">
                We believe technology should be accessible, powerful, and transformative. 
                Our team of experts works tirelessly to deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Cutting-edge AI and IT solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We deliver high-quality solutions that exceed our clients' expectations.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of honesty and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;