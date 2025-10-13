import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, 
              cybersecurity, cloud infrastructure, and digital transformation services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth in the digital age.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the global leader in AI and IT solutions, transforming industries 
                through innovative technology and exceptional service delivery.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Our Values</h3>
              <p className="text-gray-300">
                Innovation, integrity, excellence, and customer success are the core 
                principles that guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;