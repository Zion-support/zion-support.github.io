import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const AILegalAssistantPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>AI Legal Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered legal assistant for document analysis, contract review, and legal research. Streamline your legal processes with cutting-edge AI technology." />
        <meta name="keywords" content="AI legal assistant, legal AI, contract analysis, legal research, document review, legal automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Legal Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your legal practice with our advanced AI-powered legal assistant. 
              Streamline document analysis, contract review, and legal research with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Contract Analysis</h3>
              <p className="text-gray-300">
                Automatically analyze contracts for key terms, risks, and compliance issues with AI-powered insights.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-4">Document Review</h3>
              <p className="text-gray-300">
                Quickly review and extract key information from legal documents with intelligent AI processing.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Legal Research</h3>
              <p className="text-gray-300">
                Access comprehensive legal databases and get AI-powered research assistance for case law and precedents.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-300">
                Identify potential legal risks and compliance issues before they become problems.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-4">Document Generation</h3>
              <p className="text-gray-300">
                Generate legal documents, contracts, and briefs with AI assistance and legal templates.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Deadline Tracking</h3>
              <p className="text-gray-300">
                Never miss important legal deadlines with intelligent calendar and reminder systems.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Legal Practice?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
=======
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
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default AILegalAssistantPage;