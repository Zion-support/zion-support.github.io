import React from 'react';
import { Helmet } from 'react-helmet-async';

const AILegalAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Legal Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered legal assistant for document analysis, contract review, legal research, and case management. Streamline legal workflows with intelligent automation." />
        <meta name="keywords" content="AI legal assistant, legal tech, contract analysis, legal research, document review" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Legal Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline legal workflows with AI-powered document analysis, 
              contract review, and legal research automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Legal Automation
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Legal Assistant helps legal professionals analyze documents, 
                review contracts, conduct legal research, and manage cases more efficiently. 
                Reduce manual work and improve accuracy with AI-powered insights.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Contract analysis and review
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Legal document processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Case law research
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Compliance monitoring
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Upload Document</h3>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                  <p className="text-gray-300 mb-4">Upload legal documents for analysis</p>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Choose Files
                  </button>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Analyze Document
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contract Review</h3>
              <p className="text-gray-300">
                Automated contract analysis with risk assessment and clause identification.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Legal Research</h3>
              <p className="text-gray-300">
                AI-powered legal research with case law analysis and precedent identification.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Document Management</h3>
              <p className="text-gray-300">
                Intelligent document organization and retrieval for legal case management.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Your Legal Practice
            </h2>
            <p className="text-gray-300 mb-8">
              Join law firms and legal departments using our AI Legal Assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILegalAssistantPage;