import React from 'react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="About - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to revolutionize technology through AI-powered solutions and innovative services."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-8">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 mb-8">
            We are a leading technology company specializing in AI-powered solutions, 
            quantum computing, and innovative micro-SaaS services that transform businesses 
            and drive digital transformation.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To revolutionize technology through cutting-edge AI solutions and 
                innovative services that empower businesses to thrive in the digital age.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the global leader in AI-powered technology solutions, 
                creating a future where technology seamlessly integrates with human potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;