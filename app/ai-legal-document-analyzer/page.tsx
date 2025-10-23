"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Search, AlertTriangle, Shield, Brain, Zap } from "lucide-react";

const AiLegalDocumentAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Analysis",
      description: "AI-powered analysis of legal documents with intelligent content extraction and classification."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Advanced search capabilities across legal documents with semantic understanding."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Automated risk assessment and identification of potential legal issues in documents."
    },
    {
      icon: Shield,
      title: "Compliance Check",
      description: "Automated compliance checking against legal standards and regulatory requirements."
    },
    {
      icon: Brain,
      title: "Pattern Recognition",
      description: "Machine learning algorithms for pattern recognition and anomaly detection in legal texts."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Real-time document processing with instant analysis and feedback capabilities."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Legal Document Analyzer - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered legal document analyzer with intelligent content extraction, risk assessment, and compliance checking." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Legal Document Analyzer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent legal document analysis powered by AI. 
              Content extraction, risk assessment, and compliance checking for legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Document Analysis Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI document analysis capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Analyze Legal Documents?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI legal document analyzer to streamline your document review process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiLegalDocumentAnalyzerPage;