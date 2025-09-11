import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIFinancialPlanningPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Financial Planning Platform - Zion Tech Group</title>
        <meta
          name='description'
          content='AI-powered financial planning and investment platform'
        />
      </Head>
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>
            AI Financial Planning Platform
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Intelligent financial planning and investment platform powered by
            advanced AI algorithms.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Investment Analysis</h3>
            <p className='text-gray-600 mb-4'>
              Analyze investment opportunities with AI-powered market analysis
              and risk assessment.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Market analysis</li>
              <li>• Risk assessment</li>
              <li>• Portfolio optimization</li>
              <li>• Performance tracking</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Financial Planning</h3>
            <p className='text-gray-600 mb-4'>
              Create personalized financial plans based on your goals and risk
              tolerance.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Goal setting</li>
              <li>• Budget planning</li>
              <li>• Retirement planning</li>
              <li>• Tax optimization</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Risk Management</h3>
            <p className='text-gray-600 mb-4'>
              Manage financial risks with AI-powered monitoring and alert
              systems.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Risk monitoring</li>
              <li>• Alert systems</li>
              <li>• Diversification</li>
              <li>• Hedging strategies</li>
            </ul>
          </div>
        </div>

        <div className='bg-emerald-50 rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            Plan Your Financial Future
          </h2>
          <p className='text-lg text-gray-700 mb-6'>
            Take control of your finances with our AI-powered planning and
            investment platform.
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/contact'
              className='bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700'
            >
              Get Started
            </a>
            <a
              href='/about'
              className='border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50'
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIFinancialPlanningPlatform;
