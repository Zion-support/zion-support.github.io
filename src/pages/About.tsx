import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          About Zion Tech Group
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 mb-8 text-center">
            We are a leading technology company specializing in innovative solutions
            for the modern digital world.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To deliver cutting-edge technology solutions that empower businesses
                to thrive in the digital age.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the global leader in innovative technology solutions that
                transform industries and improve lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;