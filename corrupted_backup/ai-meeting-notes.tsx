import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIMeetingNotes: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Meeting Notes - Zion Tech Group</title>
        <meta
          name='description'
          content='AI-powered meeting notes and transcription platform'
        />
      </Head>
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>AI Meeting Notes</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Transform your meetings with AI-powered transcription,
            summarization, and action item extraction.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>
              Real-time Transcription
            </h3>
            <p className='text-gray-600 mb-4'>
              Convert speech to text in real-time with high accuracy and speaker
              identification.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Live transcription</li>
              <li>• Speaker identification</li>
              <li>• Multi-language support</li>
              <li>• Noise cancellation</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Smart Summarization</h3>
            <p className='text-gray-600 mb-4'>
              Automatically generate meeting summaries with key points and
              decisions.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Key point extraction</li>
              <li>• Decision tracking</li>
              <li>• Action item identification</li>
              <li>• Follow-up reminders</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Search & Analytics</h3>
            <p className='text-gray-600 mb-4'>
              Search through meeting history and analyze patterns with
              AI-powered insights.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Full-text search</li>
              <li>• Topic analysis</li>
              <li>• Sentiment tracking</li>
              <li>• Meeting analytics</li>
            </ul>
          </div>
        </div>

        <div className='bg-slate-50 rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Transform Your Meetings</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Never miss important details again with AI-powered meeting notes and
            transcription.
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/contact'
              className='bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700'
            >
              Get Started
            </a>
            <a
              href='/about'
              className='border border-slate-600 text-slate-600 px-6 py-3 rounded-lg hover:bg-slate-50'
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIMeetingNotes;
