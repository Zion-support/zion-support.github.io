import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="About Us - Zion Tech Group | Leading Technology Solutions Provider"
        description="Learn about Zion Tech Group, a leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses."
        keywords="about us, Zion Tech Group, technology company, AI solutions, IT services, team"
        canonical="https://ziontechgroup.com/about"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
