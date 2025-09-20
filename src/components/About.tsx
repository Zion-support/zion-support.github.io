import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Zion Tech is a leading technology company specializing in AI-powered solutions 
            and innovative software development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth 
              and innovation in the digital age.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in AI and technology solutions, transforming how 
              businesses operate and succeed.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Key Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Years of Experience</span>
                <span className="text-white font-semibold">10+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Projects Completed</span>
                <span className="text-white font-semibold">500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Happy Clients</span>
                <span className="text-white font-semibold">200+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;