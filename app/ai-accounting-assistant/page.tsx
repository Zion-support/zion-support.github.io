import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiAccountingAssistantPage() {
  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered accounting solutions for automated financial management." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Accounting Assistant</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Streamline your accounting processes with our intelligent AI assistant that automates 
              financial tasks and provides real-time insights for better decision making.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Automated invoice processing</li>
              <li>Expense categorization and tracking</li>
              <li>Financial report generation</li>
              <li>Tax preparation assistance</li>
              <li>Budget planning and forecasting</li>
              <li>Compliance monitoring</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
            <p className="text-gray-600 mb-6">
              Reduce manual work, minimize errors, and gain valuable financial insights with our 
              AI-powered accounting solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}