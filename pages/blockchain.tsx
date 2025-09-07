import React from 'react'
import Head from 'next/head'
import ErrorBoundary from '../components/ErrorBoundary'
export default function Blockchain() {
  return (
    <>
      <Head>
        <title>Blockchain Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Blockchain and Web3 solutions including smart contracts, _DeFi, _and cryptocurrency development."
        />
        <meta name="viewport" content="width=device-width, _initial-scale=1.0" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">
              Blockchain Services
            </h1>
            <p className="text-xl text-slate-300 text-center">
              Cutting-edge blockchain and Web3 solutions for the future.
            </p>
          </div>
        </main>
      </ErrorBoundary>
    </>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function blockchain() {
  return (
    <Layout>
      <Head>
        <title>Blockchain - Zion Tech Group</title>
        <meta name="description" content="Blockchain solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blockchain</h1>
          <p className="text-lg text-gray-600">
            Professional blockchain solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}