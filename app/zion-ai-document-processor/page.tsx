import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Brain,
  Eye,
  Download,
  Upload,
  Search,
  Shield
} from 'lucide-react';

const ZionAIDocumentProcessorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Document Processor - Intelligent Document Processing | Zion Tech Group</title>
        <meta name="description" content="Transform document processing with AI-powered analysis, extraction, and automation. Process any document type with intelligent data extraction and workflow automation." />
        <meta name="keywords" content="AI document processor, document automation, OCR, data extraction, document analysis, workflow automation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Document Processing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Document Processor
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform document processing with AI-powered analysis, extraction, and automation. 
            Process any document type with intelligent data extraction and workflow automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're working hard to bring you the most advanced AI document processing solution. 
              Stay tuned for updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Notified
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIDocumentProcessorPage;