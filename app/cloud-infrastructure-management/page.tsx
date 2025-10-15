import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const CloudInfrastructureManagementPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Cloud Infrastructure Management - Zion Tech Group"
        description="Comprehensive cloud infrastructure management solutions for scalable and secure cloud operations."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructureManagementPage() {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure management solutions for optimal performance and scalability." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cloud Infrastructure Management</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default CloudInfrastructureManagementPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
