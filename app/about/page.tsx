import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="About - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions."
        keywords="about, company, team, mission, AI solutions, IT services"
        canonical="/about"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI solutions and comprehensive IT services.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-300">
          <p className="text-xl leading-relaxed mb-8">
            Zion Tech Group is a leading technology solutions provider specializing in AI-powered solutions, 
            IT services, micro SAAS, and digital transformation for modern businesses.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation in the digital age.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the world's most trusted technology partner, enabling organizations to 
                thrive in an increasingly connected and intelligent world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;