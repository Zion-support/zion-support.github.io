'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Scale, FileText, CheckCircle, ArrowRight, Shield, Clock, Users, BarChart } from 'lucide-react';

const AiLegalAnalysisPage: React.FC = () => {
  const features = [
    'Contract analysis and review',
    'Legal document classification',
    'Risk assessment and compliance checking',
    'Case law research and analysis',
    'Document summarization and extraction',
    'Legal precedent identification',
    'Regulatory compliance monitoring',
    'Litigation support and evidence analysis'
  ];

  const benefits = [
    'Reduce legal research time by 70%',
    'Improve accuracy of legal analysis',
    'Automate routine legal tasks',
    'Enhance compliance monitoring',
    'Reduce legal costs significantly',
    'Scale legal operations efficiently'
  ];

  return (
    <>
      <Helmet>
        <title>AI Legal Analysis - Zion Tech Group | Intelligent Legal Solutions</title>
        <meta name="description" content="Transform your legal practice with AI-powered legal analysis tools. Automate document review, research, and compliance monitoring." />
        <meta name="keywords" content="AI legal analysis, legal AI, document review, legal research, compliance, legal automation" />
        <meta property="og:title" content="AI Legal Analysis - Zion Tech Group" />
        <meta property="og:description" content="Intelligent AI-powered legal analysis solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-legal-analysis" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Legal Analysis</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Transform your legal practice with intelligent AI solutions. Automate document review, research, and compliance monitoring to enhance efficiency and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Scale className="w-5 h-5" />
                Get Started
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our AI Legal Analysis?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Document Review Speed</span>
                    <span className="text-cyan-400 font-semibold">10x Faster</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Accuracy Rate</span>
                    <span className="text-green-400 font-semibold">95%+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-purple-400 font-semibold">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Legal Practice?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how AI can revolutionize your legal operations and improve efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Scale className="w-5 h-5" />
                  Get Started Today
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiLegalAnalysisPage;