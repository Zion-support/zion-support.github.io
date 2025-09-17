import React from "react";
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company dedicated to innovation and excellence
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-8 backdrop-blur-sm border border-blue-400/20">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To revolutionize the technology landscape through innovative solutions, 
              cutting-edge research, and exceptional service delivery. We are committed 
              to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

};


export default About;
