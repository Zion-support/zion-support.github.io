import React from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including autonomous AI agents, financial trading systems, legal document analysis, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">AI Services</h1>
            <p className="text-xl text-slate-300 text-center">
              Advanced artificial intelligence solutions for your business.
            </p>
          </div>
        </main>
      </ErrorBoundary>
    </>
  );
}