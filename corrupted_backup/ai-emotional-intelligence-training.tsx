import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIEmotionalIntelligenceTraining: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Emotional Intelligence Training - Zion Tech Group</title>
        <meta
          name='description'
          content='Develop emotional intelligence skills with AI-powered training programs'
        />
      </Head>
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>
            AI Emotional Intelligence Training
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Develop emotional intelligence skills with our AI-powered training
            programs and assessments.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Skill Assessment</h3>
            <p className='text-gray-600 mb-4'>
              Evaluate emotional intelligence skills with AI-powered assessments
              and feedback.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Self-awareness tests</li>
              <li>• Empathy assessments</li>
              <li>• Social skills evaluation</li>
              <li>• Progress tracking</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>
              Personalized Training
            </h3>
            <p className='text-gray-600 mb-4'>
              Receive customized training programs based on your emotional
              intelligence profile.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Adaptive learning paths</li>
              <li>• Interactive exercises</li>
              <li>• Real-world scenarios</li>
              <li>• Skill development</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Practice & Feedback</h3>
            <p className='text-gray-600 mb-4'>
              Practice emotional intelligence skills with AI-powered feedback
              and coaching.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Role-playing exercises</li>
              <li>• Instant feedback</li>
              <li>• Performance analytics</li>
              <li>• Improvement suggestions</li>
            </ul>
          </div>
        </div>

        <div className='bg-violet-50 rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            Develop Your Emotional Intelligence
          </h2>
          <p className='text-lg text-gray-700 mb-6'>
            Enhance your emotional intelligence with AI-powered training and
            personalized development programs.
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/contact'
              className='bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700'
            >
              Get Started
            </a>
            <a
              href='/about'
              className='border border-violet-600 text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50'
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIEmotionalIntelligenceTraining;
