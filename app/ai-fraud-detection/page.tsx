import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIFraudDetectionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Fraud Detection - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered fraud detection systems to protect your business from fraudulent activities and transactions." />
        <meta name="keywords" content="AI fraud detection, fraud prevention, machine learning fraud, transaction monitoring, risk assessment" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Fraud Detection</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI-powered fraud detection systems to protect your business from fraudulent activities and transactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Monitor transactions and activities in real-time to detect and prevent fraud as it happens.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pattern Recognition</h3>
              <p className="text-gray-600">
                Identify suspicious patterns and anomalies in user behavior and transaction data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning Models</h3>
              <p className="text-gray-600">
                Advanced ML models that continuously learn and adapt to new fraud patterns and techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Scoring</h3>
              <p className="text-gray-600">
                Generate risk scores for transactions and activities to prioritize investigation efforts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Alerts</h3>
              <p className="text-gray-600">
                Send immediate alerts when suspicious activities are detected for quick response.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">False Positive Reduction</h3>
              <p className="text-gray-600">
                Minimize false positives through advanced algorithms and continuous model refinement.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Fraud Types We Detect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Fraud</h3>
                <p className="text-gray-600">Detect fraudulent credit card transactions, chargebacks, and payment anomalies.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Identity Theft</h3>
                <p className="text-gray-600">Identify stolen identities and account takeovers through behavioral analysis.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Synthetic Identity</h3>
                <p className="text-gray-600">Detect synthetic identities created using fake or stolen information.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Takeover</h3>
                <p className="text-gray-600">Identify unauthorized access to user accounts and suspicious login patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFraudDetectionPage;