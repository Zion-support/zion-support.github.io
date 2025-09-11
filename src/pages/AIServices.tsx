import React from 'react';
import { SEO } from '../components/SEO';

export default function AIServices() {
  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Comprehensive AI services and solutions for modern businesses" 
        keywords="AI services, artificial intelligence, machine learning, automation"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Comprehensive AI solutions for modern businesses
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Our AI Services
              </h2>
              <p className="text-zion-slate-light">
                We provide cutting-edge AI services to help businesses leverage the power of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}