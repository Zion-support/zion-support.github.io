<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIDocumentProcessorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Document Processor Pro - Zion Tech Group</title>
        <meta name="description" content="Automate document processing with AI-powered extraction, classification, and analysis. Handle invoices, contracts, forms, and other documents with intelligent automation." />
        <meta name="keywords" content="ai document processing, document automation, ocr technology, data extraction, document classification, invoice processing" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-document-processor" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion AI Document Processor Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Automate document processing with AI-powered extraction, classification, and analysis. Handle invoices, contracts, forms, and other documents with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Document Processing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your document workflows with AI-powered automation that understands, extracts, and processes information with human-level accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">OCR Technology</h3>
              <p className="text-gray-600">Advanced optical character recognition that accurately reads text from scanned documents, images, and PDFs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Extraction</h3>
              <p className="text-gray-600">Intelligently extract structured data from unstructured documents with high accuracy and minimal errors.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Document Classification</h3>
              <p className="text-gray-600">Automatically categorize documents by type, importance, and content for better organization and routing.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Batch Processing</h3>
              <p className="text-gray-600">Process hundreds of documents simultaneously with our high-performance batch processing capabilities.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Template Matching</h3>
              <p className="text-gray-600">Smart template recognition that adapts to different document formats and layouts automatically.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Validation</h3>
              <p className="text-gray-600">Built-in validation and quality checks ensure extracted data meets your accuracy requirements.</p>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI Document Processor is ideal for businesses that handle large volumes of documents and need automated processing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Invoice Processing</h3>
                <p className="text-gray-600">Automate invoice data extraction and processing for faster accounts payable workflows.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contract Analysis</h3>
                <p className="text-gray-600">Extract key terms, dates, and clauses from contracts for legal review and management.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Form Processing</h3>
                <p className="text-gray-600">Process application forms, surveys, and other structured documents automatically.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Receipt Management</h3>
                <p className="text-gray-600">Extract data from receipts and expense documents for automated expense management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that matches your document processing volume and requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$79<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 documents/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic OCR capabilities</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Standard templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                </ul>
                <a href="/contact" className="w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-purple-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">$199<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-purple-200 mr-2">✓</span> Up to 10,000 documents/month</li>
                  <li className="flex items-center"><span className="text-purple-200 mr-2">✓</span> Advanced OCR capabilities</li>
                  <li className="flex items-center"><span className="text-purple-200 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-purple-200 mr-2">✓</span> Custom templates</li>
                  <li className="flex items-center"><span className="text-purple-200 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-purple-200 mr-2">✓</span> API access</li>
                  <li className="flex items-center"><span className="text-purple-200 mr-2">✓</span> Batch processing</li>
                </ul>
                <a href="/contact" className="w-full bg-white text-purple-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$599<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited documents</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom AI training</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> On-premise deployment</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> SLA guarantee</li>
                </ul>
                <a href="/contact" className="w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Documents?</h2>
            <p className="text-xl mb-8">
              Transform your document processing workflows with AI-powered automation that saves time and reduces errors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIDocumentProcessorPage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function ZionAiDocumentProcessorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Ai Document Processor | Zion Tech Group</title>
        <meta name="description" content="Professional zion ai document processor solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Zion Ai Document Processor
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional zion ai document processor solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with zion ai document processor?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
