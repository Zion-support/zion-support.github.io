import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, FileText, Zap, CheckCircle, Upload, Download, Search, Shield } from 'lucide-react';

export default function AIDocumentProcessorPage() {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Smart Document Processing',
      description: 'Automatically extract, analyze, and process documents with AI-powered intelligence.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Fast Processing',
      description: 'Process thousands of documents in minutes with our high-speed AI engine.'
    },
    {
      icon: <Search className="w-8 h-8 text-green-500" />,
      title: 'Intelligent Search',
      description: 'Find any information across all your documents with natural language queries.'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with full compliance for sensitive document handling.'
    }
  ];

  const benefits = [
    "Reduce document processing time by 90%",
    "Eliminate manual data entry errors",
    "Improve document search and retrieval",
    "Ensure compliance and security",
    "Scale document operations efficiently",
    "Extract insights from unstructured data"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Document Processor - Zion Tech Group</title>
        <meta name="description" content="Transform document processing with our AI-powered platform. Extract, analyze, and manage documents with intelligent automation and advanced search capabilities." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Document Processor</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform how you handle documents with our AI-powered processing platform. 
            Extract data, analyze content, and manage documents with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Processing
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <Upload className="mr-2 w-5 h-5" />
              Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Document Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to process, analyze, and manage documents intelligently
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI document processor transforms how you handle documents, making it faster, 
                more accurate, and more efficient than traditional methods.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <Download className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Process?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses using our platform to streamline document operations.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Processing Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Document Management Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let document processing slow down your business. Let our AI platform 
              handle the heavy lifting while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Processing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}</FileText></Zap></Search></Shield></meta></ArrowRight></ArrowRight></ArrowRight></Upload></CheckCircle></Download>