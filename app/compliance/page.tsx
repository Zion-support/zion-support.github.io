import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const CompliancePage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Compliance - Zion Tech Group"
        description="Comprehensive compliance solutions for regulatory requirements and industry standards."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function CompliancePage() {
  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Comprehensive compliance solutions to meet industry standards and regulations." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Compliance</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default CompliancePage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
