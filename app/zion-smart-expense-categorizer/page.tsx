'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionSmartExpenseCategorizerPage = () => {
  return (
    <>
      <Helmet>
        <title>Zion Smart Expense Categorizer - Zion Tech Group</title>
        <meta name="description" content="Professional smart expense categorizer services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Zion Smart Expense Categorizer Page</h1>
      </div>
    </>
  );
};

export default ZionSmartExpenseCategorizerPage;
