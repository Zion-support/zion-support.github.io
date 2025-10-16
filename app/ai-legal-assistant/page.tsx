import React from 'react';
import SEOHead from '../components/SEOHead';

const AILegalAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Legal Assistant - Zion Tech Group"
        description="AI-powered legal assistant for document analysis, contract review, legal research, and compliance monitoring."
        keywords="AI legal assistant, legal tech, contract analysis, legal research, compliance, document review"
        canonicalUrl="https://ziontechgroup.com/ai-legal-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI Legal Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline legal processes with AI-powered document analysis, contract review, and legal research capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Document Analysis</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Contract review and analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Legal document summarization
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Risk assessment and identification
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Clause extraction and analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Compliance checking
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Legal Research</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Case law research and analysis
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Precedent identification
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Legal citation verification
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Regulatory compliance monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Legal trend analysis
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Document Review</h3>
                <p className="text-gray-300">Automated review of contracts, agreements, and legal documents.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-400">Legal Research</h3>
                <p className="text-gray-300">Comprehensive legal research and case law analysis.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Compliance</h3>
                <p className="text-gray-300">Monitor regulatory compliance and identify potential issues.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-legal-assistant"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Get Legal Assistance
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILegalAssistantPage;