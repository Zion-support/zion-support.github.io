import React from 'react';
import Layout from '../components/Layout';

export default function AIServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our AI Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI services that deliver real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Email Automation</h3>
                <p className="text-gray-600 mb-6">Automated email responses using advanced NLP and machine learning.</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">$2,000 - $8,000</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 mb-6">Advanced data analytics and forecasting using machine learning models.</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">$3,000 - $12,000</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Chatbot</h3>
                <p className="text-gray-600 mb-6">AI-powered customer support with natural language understanding.</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">$1,500 - $6,000</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}