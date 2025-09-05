import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIAutomationServices: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered automation solutions for modern businesses" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Automation Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our advanced AI automation solutions designed to streamline operations and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate complex business processes with AI-powered decision making and workflow optimization.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Document processing</li>
              <li>• Workflow optimization</li>
              <li>• Decision automation</li>
              <li>• Exception handling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <p className="text-gray-600 mb-4">
              Deploy intelligent chatbots and virtual assistants for enhanced customer experience.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Chatbot integration</li>
              <li>• Natural language processing</li>
              <li>• Multi-channel support</li>
              <li>• 24/7 availability</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Intelligence</h3>
            <p className="text-gray-600 mb-4">
              Leverage AI to extract insights from your data and make informed decisions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Predictive analytics</li>
              <li>• Pattern recognition</li>
              <li>• Anomaly detection</li>
              <li>• Trend analysis</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Let our AI experts help you identify automation opportunities and implement solutions that drive real results.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Get Started
            </a>
            <a href="/about" className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIAutomationServices;