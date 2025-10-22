import React from 'react';
import SEOHead from '../components/SEOHead';

const AIDocumentProcessorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Document Processor - Zion Tech Group"
        description="Automate document processing with AI. Extract data, classify documents, and automate workflows with our intelligent document processing platform."
        keywords="AI document processing, document automation, OCR, data extraction, document classification, workflow automation"
        canonicalUrl="https://ziontechgroup.com/ai-document-processor"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Document Processor</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your document workflows with AI-powered processing. Extract data, classify documents, and automate repetitive tasks with intelligent document analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Capabilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Intelligent OCR</h3>
                    <p className="text-gray-600">Extract text from scanned documents, PDFs, and images with 99%+ accuracy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Data Extraction</h3>
                    <p className="text-gray-600">Automatically extract structured data from invoices, contracts, and forms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Document Classification</h3>
                    <p className="text-gray-600">Automatically categorize and route documents based on content and type</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Workflow Automation</h3>
                    <p className="text-gray-600">Create automated workflows for document processing and approval</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">API Integration</h3>
                    <p className="text-gray-600">Seamlessly integrate with your existing systems and applications</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Basic</h4>
                  <p className="text-3xl font-bold text-green-600">$49<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 1,000 documents/month</li>
                    <li>• Basic OCR and data extraction</li>
                    <li>• 5 workflow templates</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-green-500 rounded-lg p-4 bg-green-50">
                  <h4 className="text-lg font-semibold text-gray-900">Professional</h4>
                  <p className="text-3xl font-bold text-green-600">$149<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 10,000 documents/month</li>
                    <li>• Advanced OCR and AI classification</li>
                    <li>• Custom workflow builder</li>
                    <li>• API access</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise</h4>
                  <p className="text-3xl font-bold text-green-600">$399<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited documents</li>
                    <li>• Full AI capabilities</li>
                    <li>• Custom integrations</li>
                    <li>• 24/7 support</li>
                    <li>• On-premise deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Processing Documents with AI</h2>
            <p className="text-gray-600 mb-6">Transform your document workflows and save hours of manual work.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Get Started Free
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDocumentProcessorPage;
