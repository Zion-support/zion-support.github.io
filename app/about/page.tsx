import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through AI-powered solutions and digital transformation." />
        <meta name="keywords" content="about us, AI solutions, digital transformation, enterprise technology" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
            Pioneering the future of business through AI-powered solutions and digital transformation.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-gray-300">
              To empower businesses with cutting-edge AI solutions that drive innovation, efficiency, and growth in the digital age.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
            <p className="text-gray-300">
              To be the leading force in AI-driven digital transformation, creating a future where technology seamlessly enhances human potential.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
            <p className="text-gray-300">
              Innovation, integrity, and excellence guide everything we do as we build solutions that make a real difference.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3 xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4 xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 mb-6">
                Our team consists of industry experts with deep knowledge in AI, machine learning, and enterprise solutions.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300 mb-6">
                We have successfully delivered transformative solutions to businesses across various industries.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-300 mb-6">
                We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4">Client-Centric</h3>
              <p className="text-gray-300 mb-6">
                Your success is our priority. We work closely with you to understand your unique needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;