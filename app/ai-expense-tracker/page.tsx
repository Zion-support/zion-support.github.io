import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiExpenseTrackerPage() {
  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="AI-powered expense tracking and financial management solution." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Expense Tracker</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}