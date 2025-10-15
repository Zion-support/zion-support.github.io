import React from 'react';
import SEOHead from '../components/SEOHead';

const AiExpenseTrackerPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Expense Tracker - Zion Tech Group"
        description="Intelligent AI expense tracking and management solution. Automate expense categorization, receipt processing, and financial reporting with AI."
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Expense Tracker</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default AiExpenseTrackerPage;