import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroservicesArchitecturePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Microservices Architecture Solutions - Zion Tech Group</title>
        <meta name="description" content="Modern microservices architecture design and implementation for scalable, maintainable applications." />
        <meta name="keywords" content="microservices architecture, microservices design, scalable architecture, service mesh" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">🏗️</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Microservices <span className="gradient-text">Architecture Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Modern microservices architecture design and implementation for scalable, maintainable applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroservicesArchitecturePage;