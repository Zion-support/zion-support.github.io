import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const APIDevelopmentPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="API Development & Integration - Custom APIs & Third-party"
        description="Custom API development, third-party integrations, and API management solutions for seamless data flow and system connectivity."
        keywords="API development, RESTful APIs, GraphQL, third-party integration, API management, microservices"
        canonicalUrl="https://ziontechgroup.com/api-development"
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              API Development & Integration
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom API development, third-party integrations, and API management solutions 
              for seamless data flow and system connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Start Your Project
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

APIDevelopmentPage.displayName = 'APIDevelopmentPage';

export default APIDevelopmentPage;