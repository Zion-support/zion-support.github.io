import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIPoweredCybersecurity: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI-Powered Cybersecurity - Zion Tech Group</title>
        <meta
          name='description'
          content='Advanced AI-powered cybersecurity solutions for threat detection and prevention'
        />
      </Head>
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>AI-Powered Cybersecurity</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Protect your organization with advanced AI-powered cybersecurity
            solutions for threat detection and prevention.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Threat Detection</h3>
            <p className='text-gray-600 mb-4'>
              Detect and respond to cyber threats in real-time with AI-powered
              analysis.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Real-time monitoring</li>
              <li>• Anomaly detection</li>
              <li>• Threat intelligence</li>
              <li>• Automated response</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>
              Vulnerability Assessment
            </h3>
            <p className='text-gray-600 mb-4'>
              Identify and assess security vulnerabilities with AI-powered
              scanning.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Automated scanning</li>
              <li>• Risk assessment</li>
              <li>• Patch management</li>
              <li>• Compliance checking</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Incident Response</h3>
            <p className='text-gray-600 mb-4'>
              Respond to security incidents with AI-powered automation and
              analysis.
            </p>
            <ul className='text-sm text-gray-500 space-y-2'>
              <li>• Automated response</li>
              <li>• Forensic analysis</li>
              <li>• Recovery planning</li>
              <li>• Post-incident review</li>
            </ul>
          </div>
        </div>

        <div className='bg-red-50 rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Secure Your Organization</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Protect your organization with our AI-powered cybersecurity
            solutions and threat intelligence.
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/contact'
              className='bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700'
            >
              Get Started
            </a>
            <a
              href='/about'
              className='border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50'
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIPoweredCybersecurity;
