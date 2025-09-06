import React from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
export default function Blockchain() {;
  return (;
    <>;
      <Head>;
        <title>Blockchain Services - Zion Tech Group</title>;
        <meta name="description" content="Blockchain and Web3 solutions including smart contracts, DeFi, and cryptocurrency development." />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      </Head>;
      <ErrorBoundary level="page">;
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">;
          <div className="container mx-auto px-4 py-16">;
            <h1 className="text-4xl font-bold text-center mb-8">Blockchain Services</h1>;
            <p className="text-xl text-slate-300 text-center">;
              Cutting-edge blockchain and Web3 solutions for the future.;
            </p>;
          </div>;
        </main>;
      </ErrorBoundary>;
    </>;
  );

const BlockchainPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Blockchain technology solutions and services" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our cutting-edge blockchain technology solutions and services.
            </p>
          </div>
        </div>
      </div>
    </>
  );

export default BlockchainPage;
