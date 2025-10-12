import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const CaseStudiesPage: React.FC = () => {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client transformations with detailed case studies."
      keywords="case studies, success stories, client projects, AI implementations, cloud migrations"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study Cards */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                  AI Implementation
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare AI Platform</h3>
                <p className="text-gray-300 mb-6">
                  Transformed a healthcare provider's diagnostic capabilities with AI-powered medical imaging analysis, 
                  reducing diagnosis time by 70% and improving accuracy by 40%.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-white">Healthcare</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">6 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">ROI:</span>
                  <span className="text-green-400">300%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">
                  Cloud Migration
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Platform Migration</h3>
                <p className="text-gray-300 mb-6">
                  Migrated a legacy e-commerce platform to AWS, achieving 99.9% uptime and 50% cost reduction 
                  while improving performance by 200%.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-white">E-commerce</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">4 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Cost Savings:</span>
                  <span className="text-green-400">50%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                  Cybersecurity
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">Financial Services Security</h3>
                <p className="text-gray-300 mb-6">
                  Implemented comprehensive cybersecurity solutions for a financial institution, 
                  achieving zero security incidents and full compliance with industry regulations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-white">Financial Services</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">8 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Security Incidents:</span>
                  <span className="text-green-400">0</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
                  5G Implementation
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">Smart City Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Deployed 5G network infrastructure for a smart city project, enabling IoT devices 
                  and real-time data processing for improved urban management.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-white">Smart Cities</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">12 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Coverage:</span>
                  <span className="text-green-400">95%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">Let us help you achieve similar results with our proven solutions.</p>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;