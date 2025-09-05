import React from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
export default function Blockchain() {
  return (
    <>
      <Head>
        <title>Blockchain Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Blockchain and Web3 solutions including smart contracts, DeFi, and cryptocurrency development.&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
      </Head>
      <ErrorBoundary level=&quot;page&quot;>
        <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
          <div className=&quot;container mx-auto px-4 py-16&quot;>
            <h1 className=&quot;text-4xl font-bold text-center mb-8&quot;>Blockchain Services</h1>
            <p className=&quot;text-xl text-slate-300 text-center&quot;>
              Cutting-edge blockchain and Web3 solutions for the future.
            </p>
          </div>
        </main>
      </ErrorBoundary>
    </>
  );
}