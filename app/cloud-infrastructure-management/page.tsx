import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudInfrastructureManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure management solutions for scalable and secure cloud operations." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Cloud Infrastructure Management</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure management solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructureManagementPage;