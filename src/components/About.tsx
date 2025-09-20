import React from "react"

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="max-w-3xl">
          <p className="text-xl text-gray-300 mb-6">
            Zion is a leading technology company specializing in innovative solutions
            that drive digital transformation and business growth.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Our team of experts combines cutting-edge technology with deep industry
            knowledge to deliver solutions that exceed expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with technology solutions that drive innovation
                and sustainable growth.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the global leader in transformative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;