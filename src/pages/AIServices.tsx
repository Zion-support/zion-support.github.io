import React from 'react';
import { SEO } from '../components/SEO';

const AIServices: React.FC = () => {
  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including machine learning, automation, and intelligent solutions for modern businesses."
        keywords="AI services, machine learning, automation, artificial intelligence, business intelligence"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business with our comprehensive AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Build and deploy machine learning models that learn from your data to make intelligent predictions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Predictive Analytics</li>
                <li>• Pattern Recognition</li>
                <li>• Data Classification</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300 mb-4">
                Automate repetitive tasks and processes with intelligent AI-powered solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Process Automation</li>
                <li>• Workflow Optimization</li>
                <li>• Smart Decision Making</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-4">
                Understand and process human language with advanced NLP capabilities.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Text Analysis</li>
                <li>• Language Translation</li>
                <li>• Sentiment Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServices;