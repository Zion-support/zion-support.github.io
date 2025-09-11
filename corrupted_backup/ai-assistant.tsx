import React from 'react' 
import Head from 'next/head' 
import Layout from '../components/layout/Layout' 

const AIAssistant: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI assistant for your business needs" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your intelligent AI assistant powered by advanced machine learning and natural language processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
            <p className="text-gray-600 mb-4">
              Understand and respond to natural language queries with high accuracy and context awareness.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Context-aware responses</li>
              <li>• Multi-language support</li>
              <li>• Sentiment analysis</li>
              <li>• Intent recognition</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Task Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate repetitive tasks and streamline workflows with intelligent task management.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Workflow automation</li>
              <li>• Task scheduling</li>
              <li>• Process optimization</li>
              <li>• Error handling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
            <p className="text-gray-600 mb-4">
              Analyze data and provide insights to help make informed business decisions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Pattern recognition</li>
              <li>• Predictive analytics</li>
              <li>• Data visualization</li>
              <li>• Trend analysis</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience the power of AI assistance for your business operations.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-blue-600 text-white px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:bg-blue-700">
              Request a Demo
            </a>
            <a href="/about" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIAssistant;
