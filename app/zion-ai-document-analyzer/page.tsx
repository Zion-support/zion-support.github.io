import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIDocumentAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Document Analyzer - Zion Tech Group</title>
        <meta name="description" content="Extract insights from documents with AI-powered analysis. Process PDFs, Word docs, and more with advanced OCR and NLP capabilities." />
        <meta name="keywords" content="document analysis, AI OCR, document processing, text extraction, document intelligence" />
        <meta property="og:title" content="AI Document Analyzer - Zion Tech Group" />
        <meta property="og:description" content="Extract insights from documents with AI-powered analysis. Process PDFs, Word docs, and more with advanced OCR and NLP capabilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-document-analyzer" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-document-analyzer" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Document Analyzer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extract insights from documents with AI-powered analysis. Process PDFs, Word documents, images, and more with advanced OCR and NLP capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">OCR & Text Extraction</h3>
              <p className="text-gray-600 mb-4">
                Extract text from scanned documents, images, and PDFs with high accuracy using advanced optical character recognition.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multi-format support</li>
                <li>• Handwriting recognition</li>
                <li>• Table extraction</li>
                <li>• Layout preservation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Analysis</h3>
              <p className="text-gray-600 mb-4">
                Analyze document content to extract key information, entities, sentiment, and insights using natural language processing.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Entity extraction</li>
                <li>• Sentiment analysis</li>
                <li>• Key phrase extraction</li>
                <li>• Classification</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Transform unstructured documents into structured data with intelligent parsing and data extraction capabilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Data extraction</li>
                <li>• Form processing</li>
                <li>• Invoice analysis</li>
                <li>• Contract review</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Supported Document Types</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">PDF Documents</h3>
                <p className="text-gray-600 text-sm">Native and scanned PDFs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Word Documents</h3>
                <p className="text-gray-600 text-sm">.doc and .docx files</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Spreadsheets</h3>
                <p className="text-gray-600 text-sm">Excel and CSV files</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🖼️</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Images</h3>
                <p className="text-gray-600 text-sm">JPG, PNG, TIFF formats</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIDocumentAnalyzerPage;
