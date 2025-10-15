import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const AiExpenseTrackerPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Expense Tracker - Zion Tech Group"
        description="Smart AI-powered expense tracking and financial management solutions."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function AiExpenseTrackerPage() {
  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="AI-powered expense tracking and financial management solution." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Expense Tracker</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default AiExpenseTrackerPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
