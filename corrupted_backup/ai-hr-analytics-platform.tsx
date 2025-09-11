import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIHrAnalyticsPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI HR Analytics Platform - Zion Tech Group</title>
        <meta
          name='description'
          content='AI-powered HR analytics platform for workforce insights and optimization'
        />
      </Head>
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>AI HR Analytics Platform</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Transform your HR operations with AI-powered analytics and insights
            for workforce optimization.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Workforce Analytics</h3>
            <p className='text-gray-600 mb-4'>
              Analyze workforce data to identify trends, patterns, and
              optimization opportunities.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Employee performance analysis</li>
              <li>• Turnover prediction</li>
              <li>• Skills gap analysis</li>
              <li>• Productivity metrics</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>
              Recruitment Intelligence
            </h3>
            <p className='text-gray-600 mb-4'>
              Optimize recruitment processes with AI-powered candidate screening
              and matching.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Resume screening</li>
              <li>• Candidate matching</li>
              <li>• Interview scheduling</li>
              <li>• Bias detection</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Employee Engagement</h3>
            <p className='text-gray-600 mb-4'>
              Monitor and improve employee engagement with AI-powered sentiment
              analysis.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Sentiment analysis</li>
              <li>• Engagement surveys</li>
              <li>• Feedback analysis</li>
              <li>• Retention strategies</li>
            </ul>
          </div>
        </div>

        <div className='bg-blue-50 rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Optimize Your Workforce</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Leverage AI-powered HR analytics to make data-driven decisions and
            optimize your workforce.
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/contact'
              className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'
            >
              Get Started
            </a>
            <a
              href='/about'
              className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50'
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIHrAnalyticsPlatform;
