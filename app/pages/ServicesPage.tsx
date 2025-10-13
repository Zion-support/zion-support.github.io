import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services for businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive AI and IT solutions for your business needs.
            </p>
          </div>
        </div>
      </div>
    </>;
)
;