import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIDocumentProcessorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Document Processor - Zion Tech Group</title>
        <meta name="description" content="Intelligent document processing with AI-powered text extraction, analysis, and automated document handling." />
        <meta name="keywords" content="AI document processor, document automation, text extraction, document analysis, intelligent processing" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Document Processor</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent document processing with AI-powered text extraction, analysis, and automated document handling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Text Extraction</h3>
              <p className="text-gray-600">
                Extract text from various document formats including PDF, Word, images, and scanned documents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Classification</h3>
              <p className="text-gray-600">
                Automatically classify documents by type, category, and importance using AI algorithms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Extraction</h3>
              <p className="text-gray-600">
                Extract structured data from unstructured documents using intelligent parsing techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Analysis</h3>
              <p className="text-gray-600">
                Analyze document content for sentiment, key topics, and important information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Workflows</h3>
              <p className="text-gray-600">
                Create automated workflows for document processing and routing based on content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Ensure document quality and accuracy through automated validation and error detection.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Document Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Documents</h3>
                <p className="text-gray-600">Process contracts, agreements, and legal documents with high accuracy.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Reports</h3>
                <p className="text-gray-600">Extract and analyze financial data from reports and statements.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Records</h3>
                <p className="text-gray-600">Process medical documents while maintaining privacy and compliance.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Invoices & Receipts</h3>
                <p className="text-gray-600">Automatically extract data from invoices and receipts for accounting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDocumentProcessorPage;