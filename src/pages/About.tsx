import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We are a cutting-edge technology company focused on revolutionary AI solutions, 
            quantum computing, and next-generation innovations that shape the future.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We push the boundaries of what's possible with technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We deliver world-class solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Future</h3>
              <p className="text-gray-600">
                We're building the technology of tomorrow, today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;