import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the future of AI and technology solutions with innovative approaches and cutting-edge expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To revolutionize businesses through innovative AI and technology solutions that drive growth and efficiency.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To be the global leader in AI-powered technology solutions that transform industries and create value.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-300">
              Innovation, integrity, excellence, and customer success are the core principles that guide everything we do.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of industry-leading professionals with deep expertise in AI, cybersecurity, and cloud technologies.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-300">
                We have successfully delivered hundreds of projects, helping businesses achieve their digital transformation goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;