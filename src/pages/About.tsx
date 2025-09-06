import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech is a leading technology company specializing in innovative
            solutions for businesses of all sizes. We combine cutting-edge
            technology with deep industry expertise to deliver exceptional
            results.
          </p>
          <p className="text-lg text-gray-600">
            Our team of experienced professionals is dedicated to helping our
            clients achieve their technology goals and drive business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with AI-driven solutions that automate processes, enhance productivity, 
                and drive exponential growth through innovative technology.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's leading provider of intelligent business solutions that transform 
                how companies operate and compete in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
