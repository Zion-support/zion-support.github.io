import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="About - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to revolutionize technology through AI-powered solutions."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company focused on AI-powered solutions, cloud infrastructure, and digital transformation services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
