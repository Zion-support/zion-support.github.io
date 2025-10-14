import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionSmartExpenseCategorizerPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Zion Smart Expense Categorizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered expense categorization tool for businesses. Automatically categorize and track expenses with intelligent machine learning algorithms." />
        <meta name="keywords" content="expense categorization, AI expense tracking, business finance, expense management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Smart Expense Categorizer
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI-powered expense categorization tool for businesses
            </p>
            <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-gray-300">
                This page is currently under development. Please check back soon for more information about our smart expense categorizer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const page = React.lazy(() => import('./page'));
export default page;