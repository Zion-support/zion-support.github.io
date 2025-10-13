import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, cybersecurity, 
            cloud infrastructure, and digital transformation services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              enhance security, and accelerate digital transformation. We believe in creating 
              sustainable, scalable solutions that deliver real value to our clients.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2020, Zion Tech Group has been at the forefront of technological 
              advancement, helping companies across various industries leverage the power 
              of artificial intelligence and modern IT infrastructure.
            </p>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Expert team with years of experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Cutting-edge technology solutions</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Proven track record of success</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">24/7 support and maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
