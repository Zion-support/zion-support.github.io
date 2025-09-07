import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIEvals: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Evaluations Platform - Zion Tech Group</title>
        <meta name="description" content="Benchmark models and prompts with real metrics and safety checks" />
      </Head>
      <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            AI Evaluations
          </h1>
          <p className="text-xl text-gray-300">
            Benchmark models and prompts with real metrics and safety checks. Ship reliable AI faster.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">
              Get a Demo
            </a>
            <a href="/resources" className="border-gray-600 text-gray-200 border px-6 py-3 rounded-xl">
              Read Docs
            </a>
          </div>
        </div>

