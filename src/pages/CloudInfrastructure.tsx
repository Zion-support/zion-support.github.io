import React from 'react';
import { SEO } from "@/components/SEO";

const CloudInfrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Cloud Infrastructure - Zion Tech Group"
        description="Scalable cloud infrastructure solutions for modern businesses and applications."
        keywords="cloud infrastructure, cloud computing, scalability, cloud migration, AWS, Azure"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Infrastructure</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Scalable cloud infrastructure solutions for modern businesses and applications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Scalable Cloud Solutions</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our cloud infrastructure services provide scalable, secure, and cost-effective 
              solutions for businesses of all sizes.
            </p>
            <p className="text-lg text-zion-blue-light">
              From cloud migration to infrastructure optimization, we help organizations 
              leverage the power of cloud computing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructure;