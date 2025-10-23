"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
const BlockchainPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group</title>

      </Helmet>
      <div className="min-h-screen bg-gray-50">

        <div className="container mx-auto px-4 py-16">

          <div className="text-center mb-16">

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage blockchain technology for secure, transparent, and
              decentralized solutions for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg">

              <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
              <p className="text-gray-600">
                Automated contract execution with blockchain technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">

              <h3 className="text-xl font-semibold mb-4">Supply Chain</h3>
              <p className="text-gray-600">
                Transparent and traceable supply chain management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">

              <h3 className="text-xl font-semibold mb-4">Digital Identity</h3>
              <p className="text-gray-600">
                Secure digital identity verification and management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainPage;