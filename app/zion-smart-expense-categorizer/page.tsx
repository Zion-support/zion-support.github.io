'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionSmartExpenseCategorizerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zion Smart Expense Categorizer - Zion Tech Group</title>
        <meta name="description" content="Professional AI expense categorization services by Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Zion Smart Expense Categorizer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered expense categorization and financial management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZionSmartExpenseCategorizerPage;