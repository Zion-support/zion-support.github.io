'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';


const MicroSaasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Build and scale micro SaaS applications with our specialized development and deployment services." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build and scale micro SaaS applications with our specialized development and deployment services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Rapid Development</h3>
              <p className="text-gray-600">Fast-track micro SaaS development with modern frameworks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">Cloud-native architecture designed for growth and scale.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Revenue Optimization</h3>
              <p className="text-gray-600">Monetization strategies and subscription management.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default MicroSaasPage;