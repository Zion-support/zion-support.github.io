import React from 'react';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge technology solutions."
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;