import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">About Zion Tech Group</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">
          We are a forward-thinking technology company dedicated to delivering innovative solutions that drive business transformation and growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              To empower businesses with cutting-edge technology solutions that enable innovation, efficiency, and sustainable growth.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-300">
              To be the leading technology partner for organizations seeking to transform their digital capabilities and achieve competitive advantage.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-300">Cutting-edge solutions using the latest technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-gray-300">Enterprise-grade security and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expertise</h3>
              <p className="text-gray-300">Deep technical knowledge and industry experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
