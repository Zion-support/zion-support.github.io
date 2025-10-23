import React from "react";
"use client";
import { Helmet } from "react-helmet-async";
const AiFintechPage: React.FC = () => {
  
  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>

      </Helmet>

      <div className="min-h-screen bg-gray-50">
        
          </div><div className="container mx-auto px-4 py-16">
        
          </div><div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Fintech Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform financial services with AI-powered solutions for fraud
              detection, risk management, and automated trading.
            </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold mb-4">Fraud Detection</h3>
          
          </div><p className="text-gray-600">
                Real-time fraud detection using advanced AI algorithms.
              </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold mb-4">Risk Assessment</h3>
          
          </div><p className="text-gray-600">
                AI-powered credit scoring and risk evaluation systems.
              </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold mb-4">
                Algorithmic Trading
              </h3>
          
          </div><p className="text-gray-600">
                Automated trading strategies powered by machine learning.
              </p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Page;

export default AiFintechPage;
