<<<<<<< HEAD
import { ArrowRight, FileText, Zap, Target, DollarSign, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const October2025DocumentAutomationBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border-y border-indigo-500/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-bold text-sm shadow-lg animate-pulse">
            <FileText className="w-4 h-4 mr-2" />
            NEW RELEASE - OCTOBER 1, 2025
            <FileText className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-3">
            📄 Intelligent Document Automation Revolution
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-indigo-100 mb-4">
            Transform Operations with AI-Powered Document Processing
          </p>
          <p className="text-lg text-indigo-200 max-w-4xl mx-auto">
            Discover how leading enterprises achieve <span className="font-bold text-white">94% faster processing</span>, 
            <span className="font-bold text-white"> 99.2% accuracy</span>, and 
            <span className="font-bold text-white"> $47M annual savings</span> through intelligent document automation
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-indigo-400/30 hover:border-indigo-400/60 transition-all hover:scale-105">
            <Zap className="w-8 h-8 text-indigo-300 mx-auto mb-2" />
            <div className="text-3xl font-black text-white mb-1">94%</div>
            <div className="text-sm text-indigo-200">Faster Processing</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-105">
            <Target className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-3xl font-black text-white mb-1">99.2%</div>
            <div className="text-sm text-purple-200">Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-pink-400/30 hover:border-pink-400/60 transition-all hover:scale-105">
            <DollarSign className="w-8 h-8 text-pink-300 mx-auto mb-2" />
            <div className="text-3xl font-black text-white mb-1">$47M</div>
            <div className="text-sm text-pink-200">Annual Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-indigo-400/30 hover:border-indigo-400/60 transition-all hover:scale-105">
            <TrendingUp className="w-8 h-8 text-indigo-300 mx-auto mb-2" />
            <div className="text-3xl font-black text-white mb-1">340%</div>
            <div className="text-sm text-indigo-200">ROI Year 1</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-indigo-400/30 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Blog Post */}
            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 rounded-lg p-5 border border-indigo-400/40">
              <div className="text-indigo-300 font-bold mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                COMPREHENSIVE IMPLEMENTATION GUIDE
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Intelligent Document Automation: Complete Technical Guide
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Master AI-powered document processing with advanced OCR, NLP, and workflow automation. 
                Learn proven strategies achieving 94% faster processing, 99.2% accuracy, and $47M savings 
                while eliminating manual operations.
              </p>
              <Link
                to="/blog/ai-2025-oct-01-intelligent-document-automation-revolution"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Read Complete Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-lg p-5 border border-purple-400/40">
              <div className="text-purple-300 font-bold mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                FORTUNE 500 SUCCESS STORY
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Insurance Leader: $47M Saved Processing 2.4M Documents
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                Real transformation: How a $18B insurance company achieved $47M annual savings, 
                94% faster processing (45 days → 2.7 days), and 99.2% accuracy by automating 
                2.4M documents annually with zero manual intervention.
              </p>
              <Link
                to="/case-studies/ai-2025-oct-01-insurance-company-document-automation-47-million-success"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Read Success Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-indigo-400/30 mb-6">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Breakthrough Intelligent Document Processing Capabilities
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-indigo-100">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-white">Advanced OCR & Extraction</div>
                <div className="text-sm">99.2% accuracy across PDFs, scans, handwriting, tables</div>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-white">Intelligent Classification</div>
                <div className="text-sm">98.7% accuracy in automatic document type detection</div>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-white">AI-Powered Data Extraction</div>
                <div className="text-sm">Contextual NLP understanding with validation rules</div>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-white">Automated Workflows</div>
                <div className="text-sm">87% straight-through processing, zero intervention</div>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-white">Continuous Learning</div>
                <div className="text-sm">Models self-improving from user feedback</div>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-white">Enterprise Integration</div>
                <div className="text-sm">Seamless connection to ERP, CRM, document systems</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-indigo-400/30 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Proven Results Across Industries
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-400/20">
              <div className="font-bold text-white mb-2">Financial Services</div>
              <div className="text-indigo-200">Loan apps, KYC docs → 92% faster, $23M savings</div>
            </div>
            <div className="bg-purple-800/30 rounded-lg p-4 border border-purple-400/20">
              <div className="font-bold text-white mb-2">Insurance</div>
              <div className="text-purple-200">Claims processing → 89% STP, 7-day to 2-hour cycle</div>
            </div>
            <div className="bg-pink-800/30 rounded-lg p-4 border border-pink-400/20">
              <div className="font-bold text-white mb-2">Healthcare</div>
              <div className="text-pink-200">Medical records → 94% faster, 99.8% HIPAA compliance</div>
            </div>
            <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-400/20">
              <div className="font-bold text-white mb-2">Legal</div>
              <div className="text-indigo-200">Contract review → 87% faster, $18M paralegal savings</div>
            </div>
            <div className="bg-purple-800/30 rounded-lg p-4 border border-purple-400/20">
              <div className="font-bold text-white mb-2">Logistics</div>
              <div className="text-purple-200">Shipping docs → 91% automation, 6hr to 15min</div>
            </div>
            <div className="bg-pink-800/30 rounded-lg p-4 border border-pink-400/20">
              <div className="font-bold text-white mb-2">Human Resources</div>
              <div className="text-pink-200">Resumes, forms → 88% faster screening, 95% accuracy</div>
            </div>
          </div>
        </div>

        {/* Key Results Highlight */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-indigo-400/40 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Fortune 500 Insurance Company Results
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-black text-indigo-300 mb-1">2.4M</div>
              <div className="text-sm text-indigo-200">Documents/Year Automated</div>
            </div>
            <div>
              <div className="text-3xl font-black text-purple-300 mb-1">90%</div>
              <div className="text-sm text-purple-200">Staff Reduction (78→8 FTE)</div>
            </div>
            <div>
              <div className="text-3xl font-black text-pink-300 mb-1">45→2.7</div>
              <div className="text-sm text-pink-200">Days Processing Time</div>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-300 mb-1">4.2mo</div>
              <div className="text-sm text-indigo-200">Payback Period</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Transform Your Document Operations?
          </h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Schedule a Document Automation Assessment with Zion Tech Group and discover how AI can deliver 
            340% ROI and eliminate 90% of manual processing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Schedule Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-800 text-white font-bold rounded-lg hover:bg-indigo-900 transition-all shadow-xl"
            >
              Explore All Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
=======
import React from 'react';

interface October2025DocumentAutomationBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const October2025DocumentAutomationBanner: React.FC<October2025DocumentAutomationBannerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`october2025documentautomationbanner-component ${className}`}>
      {children || (
        <div className="p-4 text-center text-gray-600">
          <h3 className="text-lg font-semibold mb-2">October2025DocumentAutomationBanner</h3>
          <p>Component placeholder - implementation needed</p>
        </div>
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-8d57
    </div>
  );
};

export default October2025DocumentAutomationBanner;
