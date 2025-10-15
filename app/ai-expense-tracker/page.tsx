import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIExpenseTrackerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="AI-powered expense tracking solution with automated categorization and financial insights." />
        <meta name="keywords" content="expense tracker, AI, financial management, budgeting" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Expense Tracker
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent expense tracking with AI-powered categorization and financial insights.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIExpenseTrackerPage;