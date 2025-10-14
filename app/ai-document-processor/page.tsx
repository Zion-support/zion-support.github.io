import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Brain, Zap, CheckCircle, Target, Upload } from 'lucide-react';

export default function AIDocumentProcessor() {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Intelligent Document Processing',
      description: 'Automatically extract, analyze, and process documents using advanced AI algorithms.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Smart Data Extraction',
      description: 'Extract structured data from unstructured documents with high accuracy and speed.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Automated Workflows',
      description: 'Create automated document processing workflows to streamline your business operations.'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: 'Multi-Format Support',
      description: 'Process PDFs, Word docs, images, and more with comprehensive format support.'
    },
    {
      icon: <Upload className="w-8 h-8 text-red-500" />,
      title: 'Batch Processing',
      description: 'Process thousands of documents simultaneously with our powerful batch processing engine.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />,
      title: 'Quality Assurance',
      description: 'Built-in validation and quality checks ensure accurate document processing results.'
    }
  ];

  const benefits = [
    'Reduce document processing time by 90%',
    'Improve data accuracy by 95%',
    'Eliminate manual data entry errors',
    'Process documents 24/7 without human intervention',
    'Scale document processing operations easily',
    'Integrate with existing business systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Document Processor - Zion Tech Group</title>
        <meta name="description" content="Automate document processing with AI. Extract data, analyze content, and streamline workflows with our intelligent document processor." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Document Processor</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Automate document processing with our AI-powered platform. Extract data, analyze content, 
            and streamline workflows to transform your document management operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Document Processing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to automate and optimize document workflows
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Document Processor?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your document management with intelligent automation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Start automating your document processing workflows with our AI-powered platform.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Automate Your Documents Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI document processor to streamline their operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
