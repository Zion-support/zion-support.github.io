import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const CloudMigrationProPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Cloud Migration Pro - Zion Tech Group"
        description="Professional cloud migration services with minimal downtime and maximum efficiency."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function CloudMigrationProPage() {
  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero-downtime and seamless transition." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cloud Migration Pro</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default CloudMigrationProPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
