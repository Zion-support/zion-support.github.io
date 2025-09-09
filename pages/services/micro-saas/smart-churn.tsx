import React from 'react';
import Head from 'next/head';

export default function SmartChurn() {
  return (
    <>
      <Head>
        <title>Smart Churn - Zion Tech Group</title>
        <meta name="description" content="AI-powered churn prediction and prevention solutions" />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Smart Churn</h1>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Churn Prevention</h2>
          <p className="text-gray-600 mb-6">
            Automated churn prediction and prevention powered by artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Churn Prediction</h3>
              <p className="text-gray-600">AI-driven churn risk assessment and prediction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Prevention Strategies</h3>
              <p className="text-gray-600">Automated retention strategies and interventions</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}