import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIIoTPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI IoT Platform - Zion Tech Group</title>
        <meta name="description" content="AI-powered IoT platform for connected devices and smart systems" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI IoT Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect and manage IoT devices with our AI-powered platform for smart systems and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Device Management</h3>
            <p className="text-gray-600 mb-4">
              Manage and monitor IoT devices with AI-powered analytics and control systems.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Device registration</li>
              <li>• Remote monitoring</li>
              <li>• Firmware updates</li>
              <li>• Health diagnostics</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-600 mb-4">
              Analyze IoT data streams with AI to extract insights and enable smart decisions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Real-time analytics</li>
              <li>• Pattern recognition</li>
              <li>• Anomaly detection</li>
              <li>• Predictive maintenance</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate IoT systems with AI-powered decision making and control logic.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Smart automation</li>
              <li>• Rule-based control</li>
              <li>• Machine learning</li>
              <li>• Adaptive systems</li>
            </ul>
          </div>
        </div>

        <div className="bg-violet-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect Your World</h2>
          <p className="text-lg text-gray-700 mb-6">
            Build smart, connected systems with our AI-powered IoT platform for seamless device management and automation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700">
              Get Started
            </a>
            <a href="/about" className="border border-violet-600 text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIIoTPlatform;