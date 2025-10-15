import React from 'react';
import { Helmet } from 'react-helmet-async';

const DisasterRecoveryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Disaster Recovery & Business Continuity - Zion Tech Group</title>
        <meta name="description" content="Comprehensive disaster recovery and business continuity solutions to ensure minimal downtime and data protection." />
        <meta name="keywords" content="disaster recovery, business continuity, backup recovery, data protection, failover systems" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">🛡️</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Disaster Recovery & <span className="gradient-text">Business Continuity</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive disaster recovery and business continuity solutions to ensure minimal downtime and data protection.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DisasterRecoveryPage;