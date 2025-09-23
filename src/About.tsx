import React from 'react';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Zion Tech Group"
        description="Learn about Zion Tech Group"
        keywords="about, company, Zion Tech Group"
        canonical="/about"
      />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-slate-300">This page is being updated with new content.</p>
        </div>
      </div>
    </>
  );
};

export default About;
