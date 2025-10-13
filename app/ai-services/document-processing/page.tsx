import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Search, Zap, Shield, Database, CheckCircle } from 'lucide-react';

const AiDocumentProcessingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Document OCR',
      description: 'Extract text and data from scanned documents with high accuracy.',
      benefits: ['Text extraction', 'Data recognition', 'Multi-format support', 'High accuracy']
    },
    {
      icon: Search,
      title: 'Intelligent Search',
      description: 'AI-powered search and retrieval across all your documents.',
      benefits: ['Semantic search', 'Content indexing', 'Quick retrieval', 'Context awareness']
    },
    {
      icon: Zap,
      title: 'Automated Processing',
      description: 'Automatically process and categorize documents without manual intervention.',
      benefits: ['Auto-categorization', 'Workflow automation', 'Batch processing', 'Smart routing']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Secure document handling with compliance features and access controls.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: Database,
      title: 'Data Extraction',
      description: 'Extract structured data from unstructured documents automatically.',
      benefits: ['Data parsing', 'Field extraction', 'Validation', 'Integration APIs']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Automated quality checks and validation for processed documents.',
      benefits: ['Error detection', 'Validation rules', 'Quality scoring', 'Manual review flags']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Document Processing - Intelligent Document Management | Zion Tech Group</title>
        <meta name="description" content="Transform document management with AI-powered processing. OCR, intelligent search, automated workflows, and data extraction." />
        <meta name="keywords" content="AI document processing, OCR, document management, intelligent search, data extraction, document automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Document
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Processing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform document management with AI-powered processing. 
              OCR, intelligent search, automated workflows, and data extraction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              AI Document Processing Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Document Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI document processing solutions and automate your document workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your Document AI Journey
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiDocumentProcessingPage;