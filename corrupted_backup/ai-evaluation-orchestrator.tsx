import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIEvaluationOrchestrator: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Evaluation Orchestrator - Zion Tech Group</title>
        <meta
          name='description'
          content='Orchestrate AI model evaluations and testing workflows'
        />
      </Head>
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>
            AI Evaluation Orchestrator
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Orchestrate comprehensive AI model evaluations and testing workflows
            with our advanced platform.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Test Orchestration</h3>
            <p className='text-gray-600 mb-4'>
              Coordinate and manage complex AI evaluation workflows across
              multiple models and datasets.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Workflow automation</li>
              <li>• Parallel testing</li>
              <li>• Resource management</li>
              <li>• Progress tracking</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Result Analysis</h3>
            <p className='text-gray-600 mb-4'>
              Analyze evaluation results and generate comprehensive reports with
              insights.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Performance comparison</li>
              <li>• Statistical analysis</li>
              <li>• Visualization tools</li>
              <li>• Report generation</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Quality Assurance</h3>
            <p className='text-gray-600 mb-4'>
              Ensure evaluation quality and consistency across all testing
              scenarios.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Quality checks</li>
              <li>• Validation rules</li>
              <li>• Error handling</li>
              <li>• Compliance monitoring</li>
            </ul>
          </div>
        </div>

        <div className='text-center'>
          <a
            href='/contact'
            className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:opacity-90'
          >
            Talk to Sales
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default AIEvaluationOrchestrator;
