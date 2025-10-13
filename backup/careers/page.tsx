import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Careers</h1>
        <p className="text-gray-300">Join our team and help shape the future of technology.</p>
      </div>
    </div>
  );
}
