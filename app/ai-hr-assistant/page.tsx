'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, FileText, Calendar, TrendingUp, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIHRAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI HR Assistant - Zion Tech Group</title>
        <meta name="description" content="Streamline HR processes with AI-powered recruitment and employee management. 50% faster hiring with 30% better candidate matches." />
        <meta name="keywords" content="AI HR assistant, recruitment automation, employee management, HR software, talent acquisition" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI HR Assistant
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline HR processes with AI-powered recruitment and employee management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Interest in AI HR Assistant"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started - $129/month
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <FileText className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Resume Screening</h3>
                <p className="text-gray-300">AI-powered resume analysis and candidate ranking for faster hiring decisions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Calendar className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Interview Scheduling</h3>
                <p className="text-gray-300">Automated interview scheduling and coordination with candidates and hiring managers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Tracking</h3>
                <p className="text-gray-300">Comprehensive employee performance monitoring and analytics</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Employee Insights</h3>
                <p className="text-gray-300">AI-driven insights into employee satisfaction, engagement, and retention</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Compliance Management</h3>
                <p className="text-gray-300">Automated compliance tracking and reporting for HR regulations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <ArrowRight className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
                <p className="text-gray-300">Streamlined HR processes with intelligent automation and notifications</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI HR Assistant?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">50% Faster Hiring</h3>
                <p className="text-gray-300">Reduce time-to-hire with AI-powered candidate screening and matching</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4">30% Better Matches</h3>
                <p className="text-gray-300">AI algorithms identify the best candidates for your specific requirements</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">40% HR Time Saved</h3>
                <p className="text-gray-300">Automate routine HR tasks and focus on strategic initiatives</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Improved Retention</h3>
                <p className="text-gray-300">Better candidate matching leads to higher employee satisfaction and retention</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to revolutionize your human resources processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI HR Assistant Inquiry"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIHRAssistantPage;