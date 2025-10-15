import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIExpenseTrackerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="AI-powered expense tracking solution for automated financial management." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Expense Tracker</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automated expense tracking powered by artificial intelligence
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIExpenseTrackerPage;