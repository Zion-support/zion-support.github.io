import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const AiFinancialAnalyticsProPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Financial Analytics Pro - Zion Tech Group"
        description="Advanced AI-powered financial analytics and reporting solutions for businesses."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function AiFinancialAnalyticsProPage() {
  return (
    <>
      <Helmet>
        <title>AI Financial Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial analytics and reporting solution." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Financial Analytics Pro</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default AiFinancialAnalyticsProPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
