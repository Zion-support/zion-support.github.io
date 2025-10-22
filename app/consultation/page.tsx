'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation Services - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI, IT, and emerging technology solutions for your business." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Consultation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert consultation on AI, IT, and emerging technology solutions for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Technology Strategy</h3>
              <p className="text-gray-600">Strategic planning for technology adoption and digital transformation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Implementation</h3>
              <p className="text-gray-600">Expert guidance on AI solution selection and implementation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
              <p className="text-gray-600">Design and optimization of scalable system architectures.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ConsultationPage;