import React from 'react';
import { Helmet } from 'react-helmet-async';

const Admin: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Admin - Zion Tech Group</title>
        <meta name="description" content="Administrative dashboard for Zion Tech Group. Manage users, services, and system configurations." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Administrative tools and controls for managing Zion Tech Group services and users.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Admin dashboard coming soon. We're building comprehensive administrative tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;