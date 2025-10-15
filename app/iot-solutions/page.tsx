import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const IoTSolutionsPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="IoT Development Solutions - Smart Connected Devices"
        description="End-to-end IoT development services including device connectivity, data analytics, and smart system integration for modern businesses."
        keywords="IoT development, smart devices, connected systems, data analytics, sensor integration, edge computing"
        canonicalUrl="https://ziontechgroup.com/iot-solutions"
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              IoT Development Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              End-to-end IoT development services including device connectivity, data analytics, 
              and smart system integration for modern businesses.
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

IoTSolutionsPage.displayName = 'IoTSolutionsPage';

export default IoTSolutionsPage;